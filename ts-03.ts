// ============= Test Cases =============
import type { Equal, Expect, NotAny } from "./test-utils";

type cases1 = [Expect<Equal<queryString<"a">, string>>];
type cases2 = [Expect<Equal<queryString<"a&">, string>>];
type cases3 = [Expect<Equal<queryString<"a&b">, string[]>>];

// ============= Your Code Here =============
type queryString = any;

