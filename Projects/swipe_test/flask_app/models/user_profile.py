from flask_app.config.mysqlconnection import connectToMySQL
from pprint import pprint
from flask_app import flash

import re	# the regex module
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

DATABASE = 'swipe_test'

class User:
    
    def __init__(self, data) -> None:
        self.id = data['id']
        self.name = data['name']
    
    @classmethod
    def save(cls, data):
        query = "INSERT INTO users (name) VALUES (%(name)s);"
        return connectToMySQL(DATABASE).query_db(query, data)
    
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
    def requests(cls, data):
        query = "SELECT * FROM users JOIN requests ON users.id = requests.user_id JOIN users friends ON requests.friend_id = friends.id WHERE users.id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def friend_requests(cls, data):
        query = "INSERT INTO requests (user_id, friend_id) VALUES (%(user_id)s, %(friend_id)s);"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def connections(cls, data):
        query = "SELECT * FROM users JOIN connections ON users.id = connections.user_id JOIN users friends ON connections.friend_id = friends.id WHERE users.id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def friends(cls, data):
        query = "INSERT INTO connections (user_id, friend_id) VALUES (%(user_id)s, %(friend_id)s);"
        return connectToMySQL(DATABASE).query_db(query, data)

        # Two separate join tables Requests and connections
        # If user A tries to submit a request to user B 
        # First search the request table for the existence of a request to user b to user a 
        # If no request exists create a new request from user a to user b in the request table
        # If a request from user b to user a does already exist
        # delete the existing request and do not create a new one
        # Instead create two rows in the connections table 
        # from user b to user a 
        # from user a to user b
        # no specific return required 