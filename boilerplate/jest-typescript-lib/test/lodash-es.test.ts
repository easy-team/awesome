import { isEmpty } from 'lodash-es';

describe("test isEmpty", () => {
  it("isEmpty", () => {
    expect(isEmpty()).toBeTruthy();
    expect(isEmpty('')).toBeTruthy();
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty(null)).toBeTruthy();
  });
});