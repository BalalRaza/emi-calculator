import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { waitForElement } from '@testing-library/react';

import App from '../pages/App';
import products from './mock-data/products';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('App', () => {
  it('Displays Loan Products', async () => {
    const spy = jest.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(products),
      });
    });
    
    const actCall = await act(async () => {
      render(<App />, container);
    });
    
    expect(await spy).toHaveBeenCalled();
    expect(actCall).toHaveBeenCalled();

    const mainContainer = await waitForElement(
      () => container.querySelector('[data-testid="main-container"]'),
      { container },
    );
    console.log('here:', mainContainer);

    expect(mainContainer).toBeInTheDocument();
    
    global.fetch.mockRestore();
  });
});
