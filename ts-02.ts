// ============= Test Cases =============
import type { Equal, Expect, ExpectFalse } from "./test-utils";

const sex = ["男", "女", "未知"];

type cases1 = [ExpectFalse<Equal<Sex, "男">>];
type cases2 = [ExpectFalse<Equal<Sex, "女">>];
type cases3 = [ExpectFalse<Equal<Sex, "男" | "女">>];
type cases4 = [Expect<Equal<Sex, "男" | "女" | "未知">>];

// ============= Your Code Here =============
type Sex = any;

