import { ADD, DEL, LIST } from './constant';

export const add = item => {
  console.log('item', item);
  return {
    type: ADD,
    item
  };
};

export const del = id => {
  return {
    type: DEL,
    id
  };
};

export const list = list => {
  return {
    type: LIST,
    list
  }
}
