// ============= Test Cases =============
import type { Equal, Expect, NotAny } from "./test-utils";

const name = toString("张三");
type cases1 = [Expect<Equal<typeof name, string>>];

const age = toString(18);
type cases2 = [Expect<Equal<typeof age, string>>];

// ============= Your Code Here =============
function isString(val: string | number) {
  return typeof val === "string";
}

function toString(val: string | number) {
  if (isString(val)) {
    return val;
  }
  return val.toString();
}

