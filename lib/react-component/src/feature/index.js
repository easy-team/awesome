async function arrayIncludesFeature(a, b)  {
  const array = new Array(...a);
  return await new Promise((resolve =>{
    resolve(array.includes(b));
  }))
}

export {
  arrayIncludesFeature,
}