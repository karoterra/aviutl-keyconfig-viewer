import { describe, it, expect } from "vitest";

import { Key } from "../key";

function testKey(
  flag: number,
  code: number,
  shift: boolean,
  ctrl: boolean,
  alt: boolean,
  name: string
) {
  const key = new Key(flag, code);
  expect(key.shift).toEqual(shift);
  expect(key.ctrl).toEqual(ctrl);
  expect(key.alt).toEqual(alt);
  expect(key.name).toEqual(name);
}

describe("Key", () => {
  it("Key", () => {
    testKey(0, 0, false, false, false, "Key code 0");
    testKey(1, 8, true, false, false, "BackSpace");
    testKey(2, 9, false, true, false, "Tab");
    testKey(3, 13, true, true, false, "Enter");
    testKey(4, 32, false, false, true, "Space");
    testKey(5, 48, true, false, true, "0");
    testKey(6, 89, false, true, true, "Y");
    testKey(7, 123, true, true, true, "F12");
    testKey(8, 97, false, false, false, "Numpad 1");
  });
});
