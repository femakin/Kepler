


export function getLongestIncreasingSubsequence(arr: number[]): number {
  const n: number = arr.length;
  const subSequence: number[] = new Array(n).fill(1);
  let result = []
  for (let i: number = 1; i < n; i++) {
    if (n[2] === n[i + 2]) {
      // result.push(n] )
      console.log(n[i], 'iiiii')
    }

  }

  return 0;
}

// nums = [10, 9, 2, 5, 3, 7, 101, 18]

// A subsequence is a sequence of numbers in an array that are in the same order as they appear in the array,
//  but not necessarily contiguous.The numbers in the subsequence must be strictly increasing.



// Example 1:
// Input: nums = [10, 9, 2, 5, 3, 7, 101, 18] Output: 4 Explanation: The longest increasing subsequence is[2, 3, 7, 101], therefore the length is 4.

// nums = [10, 9, 2, 5, 3, 7, 101, 18]

// The longest increasing subsequence is [2, 3, 7, 101]

// [2, 3, 7, 18, 101]

// Output = []