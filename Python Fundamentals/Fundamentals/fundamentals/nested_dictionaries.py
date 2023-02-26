# # Upadte Values in Dictionaries and Lists
# x = [ [5,2,3], [10,8,9] ] 
# students = [
#     {'first_name':  'Michael', 'last_name' : 'Jordan'},
#     {'first_name' : 'John', 'last_name' : 'Rosales'}
# ]
# sports_directory = {
#     'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
#     'soccer' : ['Messi', 'Ronaldo', 'Rooney']
# }
# z = [ {'x': 10, 'y': 20} ]

# #1
# x[1][0] = 15
# print(x)

# #2
# students[0]['last_name'] = 'Bryant'
# print(students)

# #3
# sports_directory['soccer'][0] = 'Andres'
# print(sports_directory)

# #4
# z[0]['y'] = 30
# print(z)


# #2. Iterate Through a List of Dictionaries
# students = [
#         {'first_name':  'Michael', 'last_name' : 'Jordan'},
#         {'first_name' : 'John', 'last_name' : 'Rosales'},
#         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#         {'first_name' : 'KB', 'last_name' : 'Tonel'}
#     ]

# # should output: (it's okay if each key-value pair ends up on 2 separate lines;
# # bonus to get them to appear exactly as below!)
# def iterateDictionary(some_list):
#     for i in range(len(some_list)):
#         for key, value in some_list[i].items():
#             print(key, '-', value)


# iterateDictionary(students)


# #3. Get Values From a List of Dictionaries
# students = [
#         {'first_name':  'Michael', 'last_name' : 'Jordan'},
#         {'first_name' : 'John', 'last_name' : 'Rosales'},
#         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#         {'first_name' : 'KB', 'last_name' : 'Tonel'}
#     ]

# # should output: (it's okay if each key-value pair ends up on 2 separate lines;
# # bonus to get them to appear exactly as below!)
# def iterateDictionary(key_name, some_list):
#     for i in range(len(some_list)):
#         print(some_list[i][key_name])


# iterateDictionary('first_name', students)


# #4. Iterate Through a Dictionary with List Values
# dojo = {
#     'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
#     'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
# }

# def printInfo(some_dict):
#     for key in some_dict:
#         print(len(some_dict[key]), key)
#         for value in some_dict[key]:
#             print(value)

# printInfo(dojo)



