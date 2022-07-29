---
title: "Pythonic Method Calling"
date: "2013-04-08"
categories: 
  - "code"
  - "explanation"
  - "python"
---

I have an aversion to hard-coding. Hard coding is when you write out a long, elaborate code that could also be written with a dynamic loop. This usually limits the ability to easily adjust your own code in case you want to change something later (or re-use it). “Hard coding” refers to “rigidly” writing out things instead of keeping them dynamic.

This practice is frowned upon by most of the programmers I’ve met (especially the Python programmers). In Python, code is ‘pythonic’ if it is well-written and concise. This link is to an excellent article on ‘What is Pythonic?’, I highly recommend reading this for a more in-depth explanation of the term: [http://blog.startifact.com/posts/older/what-is-pythonic.html](http://blog.startifact.com/posts/older/what-is-pythonic.html)

Today, while I was revising my Prime Number Algorithm program (an earlier post), I figured out how to pass functions as strings. The eval function allows me to run python code within itself. This definition of eval is vague and unhelpful.

Let me show you to make a calling method, ‘execute,’ pythonic in order to explain the purpose of the eval function.

Let’s assume that we want a program that executes methods p1(n), p2(n), …, p5(n) given some string n. I will refer to these methods collectively as ‘p’-methods.

We could hard-code this as such:

```
class Test():
    def execute(self, n):
        self.p1(n)
        self.p2(n)
        self.p3(n)
        self.p4(n)
        self.p5(n)

    def p1(self,n):
        print “Hello”+n
    def p2(self,n):
        print “Hello2″+n
    def p3(self, n):
        print “Hello3″+n
    def p4(self,n):
        print “Hello4″+n
    def p5(self,n):
        print “Hello5″+n

if __name__ == ‘__main__’:
    test = Test()
    test.execute(‘ World!’)
```

The above program will run all 5 ‘p’-methods and print the appropriate strings. However, what if there were 1000 different ‘p’-methods we needed to run? Must we type out each method in order to call these ‘p’-methods within the execute method?

At first, I created a forloop to iteratively call execute, providing a new method each time. If you run the code below, execute will treat the ‘method’ parameter as a String type (instead of a function) and throws an error.

(NON-FUNCTIONAL)

```
class Test():
    def execute(self, method_name):
        self.method_name(‘ World!’)   

    def send_method(self):
        for version in xrange(1,6):
            version = str(version) #run each ‘p’-method version = 1, 2, 3, 4
            method = ‘self.’+’p’+version #note that type(method == String
            self.execute(method)

    def p1(self,n):
        print “Hello”+n
    def p2(self,n):
        print “Hello2″+n
    def p3(self, n):
        print “Hello3″+n
    def p4(self,n):
        print “Hello4″+n
    def p5(self,n):
        print “Hello5″+n

if __name__ == ‘__main__’:
    test = Test()
    test.send_method()
```

We are so very close to having a pythonic solution. In order to fix this error, we must make the String into a method call. With one extra line, we evaluate the String input (‘method_name’) as a function and run all ‘p’-methods! The final version of the execute method is:

```
class Test():
    def execute(self, method_name):
        method = eval(method_name)
        methodrun = method(‘ World!’)   

    def send_method(self):
        for version in xrange(1,5):
            version = str(version) #test each version of the algorithm, version = 1, 2, 3, 4
            method = ‘self.’+’p’+version
            self.execute(method)

    def p1(self,n):
        print “Hello”+n
    def p2(self,n):
        print “Hello2″+n
    def p3(self, n):
        print “Hello3″+n
    def p4(self,n):
        print “Hello4″+n
    def p5(self,n):
        print “Hello5″+n

if __name__ == ‘__main__’:
    test = Test()
    test.send_method()
```

I hope this gives you an idea of: why hard-coding is bad, what ‘pythonic’ means, how ‘eval’ comes in handy and what I do in my free time.
