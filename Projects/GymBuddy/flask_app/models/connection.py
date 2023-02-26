from flask_app.config.mysqlconnection import connectToMySQL
from pprint import pprint
from flask_app import flash
from flask_app.models import user

DATABASE = 'gym_buddy'

class Connection:
    
    def __init__(self, data) -> None:
        self.id = data['id']
        self.connected = data['connected']
        self.user_id = data['user_id']
        self.friend_id = data['friend_id']
        self.first_name = data['first_name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        
    @classmethod
    def save(cls, data):
        query = "INSERT INTO connections (connected, user_id, friend_id) VALUES (%(connected)s, %(user_id)s, %(friend_id)s);"
        return connectToMySQL(DATABASE).query_db(query, data)
    
    # ! READ ALL
    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM connections LEFT JOIN user_profiles ON users.id = connections.user_id;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL(DATABASE).query_db(query)
        pprint(results)
        # Create an empty list to append our instances of friends
        connections = []
        # Iterate over the db results and create instances of friends with cls.
        for connection in results:
            connections.append(cls(connection))
        return connections

    # ! READ ONE
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM connections JOIN user_profiles ON users.id = connections.user_id WHERE connections.id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        pprint(result[0])
        connection = Connection(result[0])
        print(connection)
        return connection

    # ! READ ONE WITH MANY
    @classmethod
    def get_one_with_connections(cls, data):
        query = "SELECT * FROM connections JOIN user_profiles ON users.id = connections.user_id WHERE users.id = %(id)s"

        results = connectToMySQL(DATABASE).query_db(query, data)
        pprint(results)
        user = user.User(results[0])
        print(user.connections)

        for item in results:
            pprint(item)
            temp_connection = {
                'id' : item['connections.id'],
                'connected' : item['connected'],
                'user_id' : item['user_id'],
                'friend_id' : item['friend_id'],
                'first_name' : item['first_name'],
                'created_at' : item['ninjas.created_at'],
                'updated_at' : item['ninjas.updated_at']
            }
            user.connections.append(Connection(temp_connection))
        print(user.connections)
        return user

    # ! UPDATE
    @classmethod
    def update(cls, data):
        query = "UPDATE connections SET connected = %(connected)s, user_id = %(user_id)s, friend_id = %(friend_id)s WHERE connections.id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)

    # ! DELETE
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM connections WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)

    # ! Validation
    @staticmethod
    def validate_connection(connection:dict) -> bool:
        is_valid = True
        if len(connection['title']) < 3:
            flash("Name must be three chars")
            is_valid = False
        if len(connection['description']) < 3:
            flash("Description must be three chars")
            is_valid = False
        if connection['price'] == '':
            flash("Connection must be given a price")
            is_valid = False
            return is_valid
        if connection['number_purchased'] == '':
            flash("Connection should have a quantity greater than 0")
            is_valid = False
            return is_valid
        if float(connection['price']) <= 0:
            flash("Connection must be given a price")
            is_valid = False
        if int(connection['number_purchased']) <= 0:
            flash("Connection should have a quantity greater than 0")
            is_valid = False
        return is_valid
            