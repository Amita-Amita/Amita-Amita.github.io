from random import shuffle
from sys import argv

a = 'abcdefghijklmnopqrstuvwxyz'
b = list(a)
shuffle(b)
a = a+a.upper()
b = b+[x.upper() for x in b]


for n in argv[1]:
	if n in a: print(b[a.index(n)],end='')
	else: print(n,end='')
print()
