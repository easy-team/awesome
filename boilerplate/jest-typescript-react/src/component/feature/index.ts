async function arrayIncludesFeature(a: string[], b: string)  {
  const array = new Array(...a);
  return await new Promise((resolve =>{
    resolve(array.includes(b));
  }))
}

export {
  arrayIncludesFeature,
}