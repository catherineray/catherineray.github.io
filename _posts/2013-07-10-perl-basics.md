---
title: "Perl Basics"
date: "2013-07-10"
categories: 
  - "code"
  - "explanation"
---

Before today, the most Perl I’d written/read was dinky one-liners.

Today, I worked with an advanced Perl script. Below are the notes I took this morning while I quickly learned the language.

$name scalar variable, either a number or string;

@name() array. Perl uses the “at” symbol and parentheses with respect to the name of an array as a whole, whereas individual elements within an array are referred to as scalars and the index is placed in square brackets ($name[0])

%name{} associative array ; 2-dimensional array for handling attribute/value pairs. 1st element in each row = key, 2nd eelemt in each row = value.

shift Shifts the first value of the array off and returns it, shortening the array by 1 and moving everything down.

Arrow Operator ( -> ): Infix dereference operator

```
Left Side    :           Right Side        :        Ex
array [...]           array subscript          $aref->[42]
hash {...}            hash subscript           $href->{"corned beef"}
subroutine (...)      subroutine args list     $sref->(1,2,3)
object                Method Name              $yogi = Bear->new("Yogi"); #a class method call
object                Class Name               $yogi->swipe($picnic);  #an object method call
```

qw()

```
my @names = (‘Kernighan’, ‘Ritchie’, ‘Pike’);
```

is equivalent to

```
my @names = qw(Kernighan Ritchie Pike);
```

my creates and scopes variable; example: print statement outside of loop will print nothing

```
for (1..5) {
my $variable = “hellon”
print $variable;
}
print $variable;
```

```
chop() # remove last character in string index
. # concatenate
x # n repetition - e.g., “A” x 3 => “AAA”
eq # equal
ne # not equal
lt # less than
gt # greater than
le # less than or equal to
ge # greater than or equal to

($string, $substring) # position of substring in string, zero-based; -1 if not found
index ($string, $substring, $skip) # skip number of chars
substr($string, $start, $length) # substring
substr($string, -$start, $length) # defined from end
substr($string, $start) # rest of string

keys (%aAA) # list of keys for %aAA
values(%aAA) # list of values for %aAA
each (%aAA) # next key/value pair, as list
delete $aAA{“A”}; # deletes key/value pair referenced
```

subroutine example (sub = def in Python):

```
use strict;
sub HowdyEveryone {
my($greeting, @names) = @_;
my $returnString;
foreach my $name (@names) {
$returnString .= "$greeting, $name!n";
}
return $returnString .
"Where do you want to go with Perl today?n";
}
print &HowdyEveryone("Howdy", "bart", "lisa", "homer", "marge", "maggie");
```

while: example:

```
while (<INPUT>) {
# read one line at a time until EOF
chop; # remove newline
print line = $_ n”; # print line read using default scalar variable
}
until
until (expression) { #while not}
```

for

```
for (initial exp; text exp; increment exp) { # e.g.,  ($i=1; $i<5; $i++) }
```

foreach

```
foreach $i (@List) { }
```

last

```
while (expression) {
stmt1;
stmt2;
last;
stmt3
}
#last jumps here
```

(If last occurs within nested control structures, the jump can be made to the end of an outer loop by adding a label to that loop and specifying the label in the last statement.)

```
LABEL1: while (expression) {
stmt1;
stmt2;
LABEL2: while (expression) {
stmta;
stmtb;
last ALABEL;
stmtc;
}
stmt3;
}
#last jumps here
next
while (expression) {
stmt1;
stmt2;
next;
stmt3;
#next jumps here
}
```

# (see last for LABEL example)

redo

```
while (expression) {
#redo jumps here
stmt1;
stmt2;
redo;
stmt3;
}
```

# (see last for LABEL example)

```
$a = <STDIN>;# returns next line in file
@a = <STDIN>; # returns entire file
```

CURLY BRACES

1) Used to contain a block of code:

```
if ($word =~ m/^[$vowels].*$suffix$/io) {
$stem = substr($word, 0, - length($suffix));
}
```

2) Used to index hash arrays:

```
my %english;
$english{$key} = $stem;
…
print “$word ($latin{$english{$key}})n” if (exists($english{$key}));
```

3) Like in other Unix shell languages, used to delimit variable names when they are adjacent to other letters and symbols:

```
my $vowels = ‘aeiou’;
…
$key =~ s/^(.*)([^${vowels}y])$/$2$1/
```

Where we don’t want the variable `$vowelsy` but rather `$vowels` and ‘y’

4) In pattern matching, indicate the general form of quantifier:

```
m/d{5,10}/ # match at least 5 digits but no more than 10
```

Also used (along with parenthesis and other syntax pairs) to delimit an explicit pattern in place of slashes:

```
if ( $x =~ m{[yY]es} ) { … }
```

5) Dereference a pointer that is the last item in a block:

```
$scaler = ${$scalerref}
…
push(@{$j++; $arrayref}, $token);
```

6) Used to delimit an anonymous hash reference:

```
$hashref = {Apple => ‘Red’, Grape => ‘Purple’, Banana => ‘Yellow’}
```

The above initializes a hash pointer, to initialize a hash array, we use parentheses:

```
%hash = ( Apple => ‘Red’, Grape => ‘Purple’, Banana => ‘Yellow’ )
```

7) Used to subscript typeglobs

```
$ref = *a{SCALER};
$ioref = *DIRH{IO}
```

Source: [http://www.cs.unc.edu/~jbs/resources/perl/perl-basics/](http://www.cs.unc.edu/~jbs/resources/perl/perl-basics/)
