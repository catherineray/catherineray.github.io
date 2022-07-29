---
title: "CodingBat Java (Assorted Warmup-1) Solutions"
date: "2013-04-16"
categories: 
  - "code"
  - "explanation"
  - "java"
---

For warmups, [CodingBat](http://codingbat.com/) provides solutions. Some of my solutions differ from the provided.

_The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we’re on vacation. Return true if we sleep in._

```
public boolean sleepIn(boolean weekday, boolean vacation) {
    return (!weekday || vacation);
}
```

_We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble._ 

```
public boolean monkeyTrouble(boolean aSmile, boolean bSmile) {
    return ((aSmile && bSmile) || (!aSmile && !bSmile)); }
```

_Given two int values, return their sum. Unless the two values are the same, then return double their sum._

```
public int sumDouble(int a, int b) {
    if(a == b) {
        return 2*(a+b);
    }
    return a+b;
}
```

_Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21._

```
public int diff21(int n) {
    if (n <= 21) {
        return 21-n;
    }
    else {
        return (n-21)*2;
    }
}
```

_We have a loud talking parrot. The “hour” parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble._

```
public boolean parrotTrouble(boolean talking, int hour) {
    return (talking && (hour < 7 || hour > 20));
}
```

Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.

```
public boolean makes10(int a, int b) {
    return (a == 10 || b == 10 || a + b == 10);
}
```

_Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number._

```
public boolean nearHundred(int n) {
    return (Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10);
}
```

_Given 2 int values, return true if one is negative and one is positive. Except if the parameter “negative” is true, then return true only if both are negative._

```
public boolean posNeg(int a, int b, boolean negative) {
    if (!negative) {
        return ((a < 0 && b > 0) || (a > 0 && b <0));
    }
    return (a<0 && b<0);
}
```

_Given a string, return a new string where “not ” has been added to the front. However, if the string already begins with “not”, return the string unchanged. Note: use .equals() to compare 2 strings._

```
public String notString(String str) {
    if (str.length() >= 3 && str.substring(0,3).equals(“not”)) {
        return str;
    }
    return “not “+str;
}
```

_Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive)._

```
public String missingChar(String str, int n) {
    return (str.substring(0,n)+str.substring(n+1,str.length()));
}
```

_Given a string, return a new string where the first and last chars have been exchanged._

```
public String frontBack(String str) {
    if (str.length()>=2) {
        return (str.substring(str.length()-1,str.length())+str.substring(1,str.length()-1)+str.substring(0,1));
    }
    return str;
}
```

or

```
public String frontBack(String str) {
    if (str.length()>=2) {
        return (str.charAt(str.length()-1)+str.substring(1,str.length()-1)+str.charAt(0));
    }
    return str;
}
```

_Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive._

```
public boolean in3050(int a, int b) {
    return ((30 <= a && a <= 40) && (30 <= b && b <= 40)) || ((40 <= a && a <= 50) && (40 <= b && b <= 50));
}
```

_Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, … and so on. N is 1 or more._

```
public String everyNth(String str, int n) {
    String x = “”;
    for(int i =0; i<str.length(); i=i+n) {
        x = x+str.charAt(i);
    }
    return x;
}
```

_Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string._

```
public String endUp(String str) {
    if (str.length()<=3) {
        return str.toUpperCase();
    }
    return (str.substring(0, str.length()-3) + (str.substring(str.length()-3, str.length())).toUpperCase());
}
```
