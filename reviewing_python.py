from argparse import _AttributeHolder
from xml.dom.minidom import Attr


print("Hello World")

msg = 'Hello World'
print(msg)

price = 19.95
first_name = "Mosh"
is_online = False

# name = input("What is your name? ")
# print("Hello " + name)

# birth_year = input("Enter your birth year: ")
# age = 2022 - int(birth_year)
# print("You are " + str(age) + " years old!")

# converting type:
float()
int()
str()
bool()

# first = input("what is the first number to add? ")
# second = input("what is the second number to add? ")
# print("Sum: " + str(int(float(first)+float(second))))

course = 'Python for beginners'
print('Python' in course) # true

print (10/3) # 3.333
print (10//3) # 3 (rounds down ot nearest whole number)
print (10%3) # 1
print (10**3) # 10 raised to the 3rd = 1000

x = 10
x += 3
x *=3

print(x) # ==> 39

x = 10 + 3 * 2 # 16
x = (10 + 3) * 2 # 26

x = 3 > 2 # True
x = 3 == 3 # True
x = 3 != 3 # False
print(x)

price = 50
print(price > 10 and price < 30) # False
print(price > 10 or price < 30) # True
print(not price < 10) # not reverses boolean. Like !bang in js

temperature = 10
print('temperature:', temperature)
if temperature > 30: # No brackets. Use indentation. Indentaitons matter!
    print("It's a hot day")
    print("Drink water")
elif temperature > 20:
    print("It's nice out!")
else:
    print("It's cold")
print("Done")

# print("Welcome to the weight converter!")
# weight = int(input("Weight: "))
# metric = input("(K)g or (L)bs? ")
# if metric.lower() == 'k':
#     print("Weight in Lbs:", weight*2.20462453592)
# elif metric.lower() == 'l':
#     print("Weight in Kgs:", weight*.453592)
# else:
#     print("Type either 'k' or 'l'")
    
# while loops -- to execute block of code multiple times
i = 1
while i <= 10:
    print(i * '*')
    i+=1
    
# complex types. 
# lists

names = ["John", "Bob", "Sam"]
names[0] = "Jon"
print(names[0]) # Jon
print(names[-2]) # Bob
print(names[0:2]) # ['Jon', 'Bob'] ==> From INCLUSIVE up until EXCLUSIVE
print(names) # maintains original


#for loop
numbers = [1,2,3,4,5]
for e in numbers:
    print(e)
    
print() # creates space

#range
numbers = range(5, 10, 2) # (start, end (exclusive), step (1 is default))
for n in numbers:
    print(n)
# or
for n in range(5,10,2):
    print(n)
    
# for item in range(101):
#     print(item)
    
for item in [1,2,3,4]:
    print(item)
    
prices = [10,20,30]
total = 0
for price in prices:
    total+=price
print('total:',      total)

for x in range(4):
    for y in range(3):
        print(f'({x},{y})')
        
numbers = [5,2,5,2,5]
for num in numbers:
    output = ''
    for val in range(num):
        output += 'x'
    print(output)
 
#tuples -- immuta ble lists. Represent with parenthesis. Doesnt have list methods

numbers = (1,2,3)
print(numbers)
x = numbers[0]
y = numbers[1]
z = numbers[2]
#Unpacking. Above is same as writing:
x, y, z = numbers
print('x, y, z', x, y, z)

#list (array!) methods

numbers = [1,2,3,4,-80,4,4,5,]
numbers.insert(0, -1) # insert arg2 at index of arg1
numbers.append(6)
numbers.remove(3) # removes that number. Not the index. Removes one instance (not all)
# numbers.clear() # removes all elements from array
print (1 in numbers)
print (20 in numbers)
print(len(numbers)) # 7
numbers.append(20)
numbers.remove(2)
numbers.pop() # removes last value
if 500 in numbers:
    print(numbers.index(500))
print(numbers.count(4))
print(numbers.sort()) #ascending order
numbers.reverse()
numbers2 = numbers.copy()
numbers2.append(10)
print(numbers2)
# numbers.sort(reverse=True) # Option to reverse in sort method
print(numbers)

#dictionary to store key value pairs
# Each key must be unique
customer = {
    "name": "John Smith",
    "age": 30,
    "is_verified": True
}

print(customer["name"])
print(customer.get("name"))
customer["name"] = "Jack Smith" #update name
customer["birthdate"] = '9/8/1980'
print(customer)

# digits_map = {
#     '1': 'One',
#     '2': 'Two',
#     '3': 'Three',
#     '4': 'Four',
#     '5': 'Five',
#     '6': 'Six',
#     '7': 'Seven',
#     '8': 'Eight',
#     '9': 'Nine',
#     '0': 'Zero'
# }

# for char in number:
#     # output += f"{digits_map[char]} "
#     output += f"{digits_map.get(char, 'x')} "
# print(output) 

# spelling_corrections = {
#     'awsome': 'awesome',
#     'kool': 'cool'
# }
# response = input('>')
# words = response.split(' ')
# output = ''
# for word in words:
#     output += spelling_corrections.get(word, word) + ' '
# print(output)number = input('Phone:')
# output= ''

#functions -- small reusable chunks

def greet_user(first_name, last_name):
    print('Hello', first_name, last_name),
    print('Welcome aboard.')


#customary but not necessary to have two line breaks after defining a function
greet_user('Jackie', 'Donnely')
greet_user(last_name='Donnely', first_name='Jackie') # Keyword arguments. You can overwrite positionality of arguments by defining like this. Useful for readability sometimes

def square_num(num):
    return num**2

three_squared = square_num(3)
print(three_squared)

#exceptions / error handling

def get_age(message='Enter age '):
    try:
        age = int(input(message))
        print('Age is', age)
    except ValueError:
        get_age(message='That is not an integer. Enter a proper age: ')
        print("You passed")


# get_age()

# classes. Capitalize first letter
# Object is an instance of a class

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        
    def move(self):
        print("move")
        
    def draw(self):
        print("draw")
        
point1 = Point(10, 20) # creates instance of class
point1.x = 10
point1.y = 20

point2 = Point(40,-30)
try:
    print(point2.x)
    
except AttributeError:
    print('That attribute doesnt exist on that object')
print(point1.y)

class Person:
    def __init__(self,name):
        self.name=name
    
    def talk(self):
        print(f'Hello, I am {self.name}')

jimmy = Person('Jimmy')
print(jimmy.name)
jimmy.talk()

bob = Person('Bob')
print(bob.talk())

#extending classes. Because DRY -- Dont Repeat Yourself

class Animal:
    def walk(self):
        print("walk")

class Dog(Animal):
    pass #Python cant have empty classes, but pass will satisfy Python

#Dog inherents all the methods in the Animal class

class Cat(Animal):
    def meow(self):
        print("meeoooow")

dog1 = Dog()
dog1.walk()
cat1 = Cat()
cat1.walk()
cat1.meow()
 
#importing
import utils #gets everything

print(utils.kg_to_lbs(70))
print(utils.kg_to_lbs(155.5555))

from utils import get_largest #import just certain methods like this

numbers = [1,2,9,3,8,4,7,5,6,-100]
print(get_largest(numbers))

# Max method
print(max(numbers)) # If you set max equal to something, it overwrites the built-in function!

# import ecommerce.shipping.calc_shipping
# from ecommerce.shipping import calc_shipping
from ecommerce import shipping

#built-in Python modules. There are so many! Lets do a few
#Search Python 3 module index to see documentation!

#Python module for generating random values. Necessary to import this module in order to use it. It's a library...
import random

for i in range(3):
    print(random.random())
    print()
for i in range(3):
    print(random.randint(10, 20))
    print()

#randomly select from list
members = ['John', 'Mary', 'Susan']
leader = random.choice(members)
print(leader)

print() # just leaves gap in console

#roll dice
class Dice:
    def roll(self):
        first = random.randint(1, 6)
        second = random.randint(1, 6)
        # return (first, second)
        return first, second #Python knows to read this as a tuple. And last one was just a string

dice1 = Dice()
print(dice1.roll())

#pathlib -- an object API for working with files and directories

from pathlib import Path
path = Path("emails")
# print(path.mkdir()) #make new directory called "emails"
# print(path.rmdir()) #remove new directory called "emails"

#glob -- get all files
path = Path()
for file in path.glob('*'): #print all files in current cirectory
    print(file)
    
path.glob('*.*') # all files. Is it different than path.glob('*')?
path.glob('*.xls') #all excel files
path.glob('*.py') # all python files
path.glob('*.js') # all javascript files
#etc.

#PyPI -- thousands of python packages of libraries for basically eerything you can imagine
# including searching for stuff on yelp from python
# text messaging
# openpyxl for working with excel through python

#declaring an array
#arrays can directly handle arithmetic operations, but less flexibility with modification (like addition, deletion), of data
#arrays can only consist of elements of the same type. Lists can have any type
#arrays can only be printed by looping through each element
#arrays are generally better for large data sizes, lists generally better for smaller
import array as arr #arr is an alias here

arr1 = arr.array('i', [6,5,4,3])
print(arr1) # ==> array('i', [6, 5, 4, 3])
for i in range(len(arr1)):
    print(arr1[i])
    
arr1.remove(3)
arr1.append(7)
arr1.insert(1, 9)
arr1.index
print(arr1)
print(arr1.count(5))

list1 = [20,30,40]
list1.remove(30)
list1.append(50)
list1.insert(1, 25)
print(list1)
    
#sets create unique list

list1 = [1,2,2,3]
set1 = set(list1)
print(list1==set1) # ==> False
len(set1) # 
len(set1) 

# locals() is all variables at current local level
# globals() gets all global variables (not locals!)

print(12/2-1)

#enumerate

arr = ['a','b','c','d','e']
enumerated_arr = list(enumerate(arr))
print(enumerated_arr[0][1]) # => 'a'
print(enumerated_arr)