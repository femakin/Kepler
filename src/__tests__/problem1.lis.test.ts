import { expect, test } from "vitest";
import { lis } from "../problem1-lis";

test("it should retun a valid Longest Increasing Subsequence", () => {
  expect(lis([10, 22, 9, 33, 21, 50, 41, 60, 80])).toBe(6);
  expect(lis([3, 10, 2, 1, 20])).toBe(3);
  expect(lis([3, 2])).toBe(1);
  expect(lis([7, 7, 7, 7, 7, 7, 7])).toBe(1);
});
