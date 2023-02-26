from flask_app.config.mysqlconnection import connectToMySQL
from pprint import pprint
from flask_app import flash

import re	# the regex module
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

DATABASE = 'gym_buddy'

class User:
    
    def __init__(self, data) -> None:
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.description = data['description']
        self.image = data['image']
        self.gym_id = data['gym_id']
        self.friends = []
        self.gyms = []
        self.gender_id = data['gender_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def save(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        return connectToMySQL(DATABASE).query_db(query, data)

    # @classmethod
    # def save(cls, data):
    #     query = "INSERT INTO users (first_name, last_name, email, password, description, image, gym_id, gender_id) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, %(description)s, %(image)s, %(gym_id)s, %(gender_id)s);"
    #     return connectToMySQL(DATABASE).query_db(query, data)
    
    # ! READ ALL
    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL(DATABASE).query_db(query)
        pprint(results)
        # Create an empty list to append our instances of friends
        users = []
        # Iterate over the db results and create instances of friends with cls.
        for user in results:
            users.append(cls(user))
        return users

    @classmethod
    def get_all_except(cls, data):
        query = "SELECT * FROM users WHERE NOT users.id = %(id)s;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL(DATABASE).query_db(query, data)
        pprint(results)
        # Create an empty list to append our instances of friends
        users = []
        # Iterate over the db results and create instances of friends with cls.
        for user in results:
            users.append(cls(user))
        return users

    # ! READ ONE
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM requests JOIN users ON users.id = requests.user_id WHERE requests.id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        pprint(result)
        user = User(result[0])
        print(user)
        return user

    # ! READ ONE WITH MANY
    @classmethod
    def get_one_with_friends(cls, data):
        query = "SELECT * FROM users JOIN requests ON users.id = requests.user_id JOIN users friends ON requests.friend_id = friends.id WHERE users.id = %(id)s;"

        results = connectToMySQL(DATABASE).query_db(query, data)
        pprint(results)
        user = User(results[0])

        for item in results:
            pprint(item)
            temp_friend = {
                'id' : item['friends.id'],
                'first_name' : item['friends.first_name'],
                'last_name' : item['friends.last_name'],
                'email' : item['friends.email'],
                'password' : item['friends.password'],
                'description' : item['friends.description'],
                'image' : item['friends.image'],
                'gym_id' : item['friends.gym_id'],
                'gender_id' : item['friends.gender_id'],
                'created_at' : item['friends.created_at'],
                'updated_at' : item['friends.updated_at']
            }
            user.friends.append(User(temp_friend))
        print(user.friends)
        return user

    @classmethod
    def requests(cls, data):
        query = "SELECT * FROM users JOIN requests ON users.id = requests.user_id JOIN users friends ON requests.friend_id = friends.id WHERE users.id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        pprint(result[0])
        user = User(result[0])
        print(user)
        return user

    @classmethod
    def friend_requests(cls, data):
        query = "INSERT INTO requests (user_id, friend_id) VALUES (%(user_id)s, %(friend_id)s);"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def connections(cls, data):
        query = "SELECT * FROM users JOIN connections ON users.id = connections.user_id JOIN users friends ON connections.friend_id = friends.id WHERE users.id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        pprint(result[0])
        user = User(result[0])
        print(user)
        return user

    @classmethod
    def add_friends(cls, data):
        query = "INSERT INTO connections (user_id, friend_id) VALUES (%(user_id)s, %(friend_id)s);"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        print(result)

        if len(result) > 0:
            return User(result[0])
        else:
            return False
    
    @staticmethod
    def validate_user(user:dict) -> bool:
        is_valid = True

        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(DATABASE).query_db(query, user)

        if len(user['first_name']) < 2:
            is_valid = False
            flash("first name must be at least 2 characters")

        if user['password'] != user['confirm-password']:
            is_valid = False
            flash("Passwords do not match!")

        if not EMAIL_REGEX.match(user['email']): 
            flash("Invalid email address!")
            is_valid = False

        if len(results) >= 1:
            flash("Email already taken", "reg")
            is_valid = False

        if len(user['password']) < 8:
            is_valid = False
            flash("Password must be at least 8 characters!")

        if not any(char.isdigit() and char.isupper for char in user['password']):
            flash('Password should have at least one numeral and uppercase letter')
            is_valid = False

        return is_valid
        