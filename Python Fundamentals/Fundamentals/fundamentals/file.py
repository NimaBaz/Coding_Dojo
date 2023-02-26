num1 = 42 # variable declaration and Numbers
num2 = 2.3 # variable declaration and Numbers
boolean = True # variable declaration and Boolean
string = 'Hello World' # variable declaration and Strings
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] # variable declaration and List
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} # variable declaration and Dictionary
fruit = ('blueberry', 'strawberry', 'banana') # variable declaration and Tuples
print(type(fruit)) # type check
print(pizza_toppings[1]) # access value
pizza_toppings.append('Mushrooms') # ass value
print(person['name']) # access value
person['name'] = 'George' # change value
person['eye_color'] = 'blue' # initalize
print(fruit[2]) # access value

# conditional
if num1 > 45: # if
    print("It's greater") # print statement 
else: # else
    print("It's lower") # print statement 

# conditional
if len(string) < 5: # if
    print("It's a short word!") # print statement 
elif len(string) > 15: # else if
    print("It's a long word!") # print statement 
else: # else
    print("Just right!") # print statement 

# for loop
for x in range(5): # start 
    print(x) # print statement 
# for loop
for x in range(2,5): # start 
    print(x) # print statement 
# for loop
for x in range(2,10,3): # start 
    print(x) # print statement 
x = 0 # variable declaration
# while loop
while(x < 5): # start
    print(x) # print statement 
    x += 1 # increment x until x is no longer less than 5

pizza_toppings.pop() # delete value
pizza_toppings.pop(1) # access value and delete value

print(person) # printing tuples
person.pop('eye_color') # delete value
print(person) # printing tuples

# for loop
for topping in pizza_toppings: # start
    # conditional
    if topping == 'Pepperoni': # if
        continue
    print('After 1st if statement') # print statement 
    # conditional
    if topping == 'Olives': # if
        break

def print_hello_ten_times():
    for num in range(10):
        print('Hello')

print_hello_ten_times()

def print_hello_x_times(x):
    # for loop
    for num in range(x):
        print('Hello')

print_hello_x_times(4)

def print_hello_x_or_ten_times(x = 10): # parameter is set to 10
    for num in range(x):
        print('Hello') # print statement 

print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

# print(num3) # NameError: name <variable name> is not defined
# num3 = 72 # variable declaration should be before you try to print the value
# fruit[0] = 'cranberry' TypeError: 'tuple' object does not support item assignment
# print(person['favorite_team']) # KeyError: 'favorite_team'
# print(pizza_toppings[7]) # IndexError: list index out of range
#   print(boolean) # IndentationError: unexpected indent
# fruit.append('raspberry') # AttributeError: 'tuple' object has no attribute 'append'
# fruit.pop(1) # AttributeError: 'tuple' object has no attribute 'pop'