const json = require('./cuttle.json');

const list = json.data.filter(item => {
  return item.country === 'in' && item.groupId === '5y7rE6OKVR' 
  && item.cName.indexOf('电影娱乐社区')>-1;
}).map(item => { return item.appId;});

console.log(list.length);