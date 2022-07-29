---
title: "CodingBat Java Solutions (Assorted)"
date: "2013-04-16"
categories: 
  - "code"
  - "explanation"
  - "java"
---

I’m brushing up on my Java lately using a wonderful code practice site called [CodingBat](http://codingbat.com/). Below are a few of the solutions I’ve found to their practice problems.

_Given a string, return a string where for every char in the original, there are two chars._

```
public String doubleChar(String str) {
    String doub = “”;
    for(int i = 0; i<str.length(); i++) {
        doub = doub + str.charAt(i) + str.charAt(i);
    }
    return doub;
}
```

_Return an array that contains exactly the same numbers as the given array, but rearranged so that every 3 is immediately followed by a 4. Do not move the 3′s, but every other number may move. The array contains the same number of 3′s and 4′s, every 3 has a number after it that is not a 3 or 4, and a 3 appears in the array before any 4._ 

```
public int[] fix34(int[] nums) {
    int counter =0;
    for(int i =0; i<nums.length; i++) {
        if (nums[i] == 3) {
            for(int j =counter; j<nums.length; j++) {
                if (nums[j] == 4) {
                    int t = nums[i+1];
                    nums[i+1] = nums[j];
                    nums[j] = t;
                    counter = j;
                }
            }
        }
    }
    return nums;
}
```

_Given n>=0, create an array with the pattern {1,    1, 2,    1, 2, 3,   … 1, 2, 3 .. n} (spaces added to show the grouping). Note that the length of the array will be 1 + 2 + 3 … + n, which is known to sum to exactly n*(n + 1)/2._

```
public int[] seriesUp(int n) {
    int[] array = new int[n];
    int[] array1 = new int[n*(n+1)/2];
    for (int i = 0; i<n;i++) {
        array[i] = i+1;
    }
    for (int j = 0; j <n; j++) {
        array1[j*(j+1)/2+j] = array[j];
        for (int x = 0; x < j+1; x++) {
            array1[j*(j+1)/2+j-x] = array[j-x];
        }
    }
    return array1;
}
```
