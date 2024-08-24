function deepEqual(x, y) {
  if (x === y) {
    return true;
  }
  if (!(typeof x == "object" && x != null) || !(typeof y == "object" && y != null)) {
    return false;
  }
  //比较对象内部
  if (Object.keys(x).length != Object.keys(y).length) {
    return false;
  }
  for (const prop in x) {
    // eslint-disable-next-line no-prototype-builtins
    if (y.hasOwnProperty(prop)) {
      if (!deepEqual(x[prop], y[prop])) {
        return false;
      }
    }
    else {
      return false;
    }
  }
  return true;
}

function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }
  if (!(typeof objA === 'object' && objA != null) || !(typeof objB === 'object' && objB != null)) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (let i = 0; i < keysA.length; i++) {
    // eslint-disable-next-line no-prototype-builtins
    if (objB.hasOwnProperty(keysA[i])) {
      if (objA[keysA[i]] !== objB[keysA[i]]) {
        return false;
      }
    }
    else {
      return false;
    }
  }
  return true;
}

export {
  deepEqual,
  shallowEqual,
}