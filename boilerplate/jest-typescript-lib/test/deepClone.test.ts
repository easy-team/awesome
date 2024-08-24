import { deepClone } from '../src/index'

const symbolName = Symbol()
const arrbuf = new ArrayBuffer(12)
const obj = {
  objNumber: new Number(1),
  number: 1,
  objString: new String('ss'),
  string: 'stirng',
  objRegexp: new RegExp('\\w'),
  bool: false,
  objBoolean: new Boolean(false),
  regexp: /w+/g,
  date: new Date(),
  set: new Set(),
  map: new Map(),
  function: function (value) {
    return this.number + value
  },
  // blob: new Blob([1, 12]),
  int8Array: new Int8Array(10),
  int16Array: new Int16Array(10),
  int32Array: new Int32Array(10),
  uint8Array: new Uint8Array(8),
  uint16Array: new Uint16Array(8),
  uint32Array: new Uint32Array(8),
  arrBuffer: new ArrayBuffer(10),
  dataView: new DataView(arrbuf.slice(0), 0, 8),
  uint8ClampedArray: new Uint8ClampedArray(10),
  float32Array: new Float32Array(10),
  float64Array: new Float64Array(10),
  bigInt: 12n,
  bigIntArray: new BigInt64Array(12),
  bigUintArray: new BigUint64Array(12),
  sharedArrayBuffer: new SharedArrayBuffer(1024),
  array: [{ a: 1 }, 2],
  [symbolName]: 111,
  sym: symbolName
};


// obj.d = obj;
Object.defineProperty(obj, 'number', {
  writable: false,
  enumerable: true,
  configurable: false,
  value: 2,
})
const newObj = deepClone(obj)

describe('deepCone test', () => {
  test('test base protperties', () => {
    expect(newObj.number).toBe(obj.number)
    expect(newObj.string).toBe(obj.string)
    expect(newObj.bool).toBe(obj.bool)
    expect(newObj.sym).toBe(obj.sym)
    expect(newObj[symbolName]).toBe(obj[symbolName])
  })

  // test('test Circular reference', () => {
  //   expect(newObj).not.toBe(obj)
  //   expect(newObj.d).not.toBe(obj.d)
  //   expect(obj.d).toBe(obj)
  //   expect(newObj.d).toBe(newObj)
  // })

  test('test ObjectBaseData', () => {
    expect(newObj.objNumber).not.toBe(obj.objNumber)
    expect(newObj.objString).not.toBe(obj.objString)
    expect(newObj.objBoolean).not.toBe(obj.objBoolean)
    expect(newObj.objRegexp).not.toBe(obj.objRegexp)
  })

  test('test TypeArray', () => {
    expect(newObj.int8Array).not.toBe(obj.int8Array)
    expect(newObj.int16Array).not.toBe(obj.int16Array)
    expect(newObj.int32Array).not.toBe(obj.int32Array)
    expect(newObj.uint8Array).not.toBe(obj.uint8Array)
    expect(newObj.uint16Array).not.toBe(obj.uint16Array)
    expect(newObj.uint32Array).not.toBe(obj.uint32Array)
    expect(newObj.float32Array).not.toBe(obj.float32Array)
    expect(newObj.float64Array).not.toBe(obj.float64Array)
    expect(newObj.uint8ClampedArray).not.toBe(obj.uint8ClampedArray)
    expect(newObj.int8Array).toEqual(obj.int8Array)
    expect(newObj.int16Array).toEqual(obj.int16Array)
    expect(newObj.int32Array).toEqual(obj.int32Array)
    expect(newObj.uint8Array).toEqual(obj.uint8Array)
    expect(newObj.uint16Array).toEqual(obj.uint16Array)
    expect(newObj.uint32Array).toEqual(obj.uint32Array)
    expect(newObj.float32Array).toEqual(obj.float32Array)
    expect(newObj.float64Array).toEqual(obj.float64Array)
    expect(newObj.uint8ClampedArray).toEqual(obj.uint8ClampedArray)
  })

  test('test dataView', () => {
    expect(newObj.dataView).not.toBe(obj.dataView)
    expect(newObj.dataView.buffer).not.toBe(obj.dataView.buffer)
    expect(newObj.dataView.buffer).toEqual(obj.dataView.buffer)

    newObj.dataView.setInt8(0, 2)
    expect(newObj.dataView.getInt8(0)).toBe(2)
    expect(obj.dataView.getInt8(0)).not.toBe(2)
  })

  test('test BigNumber', () => {
    expect(newObj.bigInt).toBe(obj.bigInt)
    expect(newObj.bigIntArray).not.toBe(obj.bigIntArray)
    expect(newObj.bigUintArray).not.toBe(obj.bigUintArray)
  })

  test('test Set', () => {
    expect(newObj.set).not.toBe(obj.set)

    obj.set.add(1)
    expect(newObj.set.has(1)).toBeFalsy()
  })

  test('test Map', () => {
    expect(newObj.map).not.toBe(obj.map)

    obj.map.set('a', 'abc')
    expect(newObj.map.get('a')).not.toBe('abc')
  })

  test('test defineProperty', () => {
    expect(Object.getOwnPropertyDescriptor(newObj, 'number').writable).toBeFalsy()
  })

  test('test arrayBuffer', () => {
    expect(newObj.arrBuffer).not.toBe(obj.arrBuffer)
    expect(newObj.sharedArrayBuffer).not.toBe(obj.sharedArrayBuffer)
  })

  test('test others', () => {
    // expect(newObj.blob).not.toBe(obj.blob)
    expect(newObj.array[0]).toStrictEqual(obj.array[0])
    expect(obj.function(2)).toBe(obj.function(2))
    expect(newObj.date).not.toBe(obj.date)
    expect(newObj.function).not.toBe(obj.function)
    expect(newObj.array).not.toBe(obj.array)
  })

  test('test base DataType', () => {
    expect(deepClone(null)).toBeNull()
    expect(deepClone(void 0)).toBeUndefined()
    expect(deepClone('123')).toBe('123')
    expect(deepClone(12)).toBe(12)

    const sym = Symbol('sym')
    expect(deepClone(sym)).toBe(sym)
    expect(deepClone(BigInt(12))).toBe(BigInt(12))
  });

});