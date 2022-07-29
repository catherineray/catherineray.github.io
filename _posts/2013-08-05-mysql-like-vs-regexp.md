---
title: "mySQL: LIKE vs. REGEXP"
date: "2013-08-05"
categories: 
  - "code"
  - "explanation"
---

Using LIKE in a query is an order of magnitude faster than using REGEXP. The downside is that LIKE doesn't offer the control and generality that REGEXP does.

For example, let's say I'm querying my table for all distinct IP addresses that begin with '3.14' The entries in the 'ip' column of my table look like this:

```
ip
3.14.15.92
3.14.455566677889000.000
3.14twasbrilligandtheslithy^&*)
3.14tobeornottobethatisthequestion%$@
```

With LIKE, I can say

```
SELECT DISTINCT ip FROM TABLENAME
WHERE ip LIKE '3.14%';
```

This will not only match '3.14.15.92' It will also match '3.14.455566677889000.000', '3.14twasbrilligandtheslithy^&*)' and '3.14tobeornottobethatisthequestion%$@';

With REGEXP, I can be more specific, restricting the search to only valid IP addresses, with the same query header, I replace the WHERE statement with:

```
 WHERE ip REGEXP '^3.14.d{1,3}.d{1,3}
```

This will only match '3.14.15.92', and disregard the invalid IP addresses.

Although it is slower, REGEXP will give you more control over your query results. However, if you are worried about speed, I suggest going with LIKE and cleaning your results as a separate process. This will only match '3.14.15.92', and disregard the invalid IP addresses.
