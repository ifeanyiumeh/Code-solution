/*
Please write a short program in the language of your choice.

It should print each number from 1 to 100 on a new line. 
For each multiple of 3, print "Cucumber" instead of the number. 
For each multiple of 5, print "Pickle" instead of the number. 
For numbers which are multiples of both 3 and 5, print "Cukle" instead of the number.
*/

function codeTest(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Cukle");
    } else if (i % 3 === 0) {
      console.log("Cucumber");
    } else if (i % 5 === 0) {
      console.log("Pickle");
    } else {
      console.log(i);
    }
  }
}

codeTest(100);


**Output below**

1
2
Cucumber
4
Pickle
Cucumber
7
8
Cucumber
Pickle
11
Cucumber
13
14
Cukle
16
17
Cucumber
19
Pickle
Cucumber
22
23
Cucumber
Pickle
26
Cucumber
28
29
Cukle
31
32
Cucumber
34
Pickle
Cucumber
37
38
Cucumber
Pickle
41
Cucumber
43
44
Cukle
46
47
Cucumber
49
Pickle
Cucumber
52
53
Cucumber
Pickle
56
Cucumber
58
59
Cukle
61
62
Cucumber
64
Pickle
Cucumber
67
68
Cucumber
Pickle
71
Cucumber
73
74
Cukle
76
77
Cucumber
79
Pickle
Cucumber
82
83
Cucumber
Pickle
86
Cucumber
88
89
Cukle
91
92
Cucumber
94
Pickle
Cucumber
97
98
Cucumber
Pickle


//Note: console.log automatically prints in a new line
