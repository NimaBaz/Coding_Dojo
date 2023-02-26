# Basic
for i in range(151):
    print(i)

# Multiples of Five
for i in range(5, 1000, 5):
    print(i)

# Counting, the Dojo Way
for i in range(1, 100):
    if (i % 5):
        print("Coding")
    if (i % 10):
        print("Coding Dojo")

# Whoa. That Sucker's Huge
for i in range(1, 500000, 2):
    print(i)

# Countdown by Fours
for i in range(2018, 0, -4):
    if i > 0:
        print(i)

# Flexible Counter
lowNum = 2
highNum = 9
mult = 3

for i in range(lowNum, highNum + 1):
    if (i % mult == 0):
        print(i)



