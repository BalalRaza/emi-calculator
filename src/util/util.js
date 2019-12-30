/**
 * Groups product objects by the given parameter
 * @param {[]} arr The list of product objects
 * @param {String} param Parameter name
 */
export function groupBy(arr, param) {
  const groupObj = {};
  arr.forEach((item) => {
    const key = item[param];
    if (groupObj[key]) {
      groupObj[key].push(item);
    } else {
      groupObj[key] = [item];
    }
  });

  return groupObj;
}


/**
 * Finds the value of parameter from a list of objects
 * in which the given parameter is maximum
 * @param {[]} arr The list of product objects
 * @param {String} param Parameter name
 */
export function maxBy(arr, param) {
  let max;

  arr.forEach((item) => {
    if (!max) {
      max = item[param];
    }

    if (item[param] > max) {
      max = item[param];
    }
  });

  return max;
}

/**
 * Finds the value of parameter from a list of objects
 * in which the given parameter is minimum
 * @param {[]} arr The list of product objects
 * @param {String} param Parameter name
 */
export function minBy(arr, param) {
  let max;

  arr.forEach((item) => {
    if (!max) {
      max = item[param];
    }

    if (item[param] < max) {
      max = item[param];
    }
  });

  return max;
}

/**
 * Groups product objects by duration, specified by duration & durationUnit
 * @param {[]]} data The list of product objects
 */
export function groupByDuration(data) {
  return data.reduce((acc, obj, index, arr, key = `${obj.duration} ${obj.durationUnit}`) => {
    if (acc[key]) {
      acc[key].push(obj);
    } else {
      acc[key] = [obj];
    }

    return acc;
  }, {});
}

/**
 * Checks whether the given array is empty
 * @param {[]} arr The array to check
 */
export function isEmpty(arr) {
  if (arr) {
    return arr.length === 0;
  }
  return false;
}

/**
 * Gets a random integer between a given range of numbers
 * @param {Number} a The starting of range
 * @param {Number} b The ending of range
 */
export function getRandomInt(a = 1, b = 0) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1))
}

/**
 * Fixes known error: Not having a comma after id value in received JSON
 * @param {Object} response The response received from fetch()
 */
export function fixAndGetJson(response) {
  return response.text()
    .then((text) => {
      const regex = /("id": \d)/gi;
      const fixed = text.replace(regex, '$&,');
      return JSON.parse(fixed);
    });
}
