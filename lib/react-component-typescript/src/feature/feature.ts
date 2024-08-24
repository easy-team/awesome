async function arrayFromFeature(a: string[], b: string)  {
  const array = Array.from(a);
  return await new Promise((resolve =>{
    resolve(array.includes(b));
  }))
}

export {
  arrayFromFeature,
}