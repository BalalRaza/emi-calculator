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
