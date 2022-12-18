async function arrayFromFeature(a, b)  {
  const array = Array.from(a);
  return await new Promise((resolve =>{
    resolve(array.includes(b));
  }))
}

export {
  arrayFromFeature,
}