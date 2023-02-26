from flask_app.config.mysqlconnection import connectToMySQL
from pprint import pprint
from flask_app import flash
from flask_app.models import user

DATABASE = 'gym_buddy'

class Gym:
    
    def __init__(self, data) -> None:
        self.id = data['id']
        self.location = data['location']
        self.website = data['website']
        self.first_name = data['first_name']
        
    @classmethod
    def save(cls, data):
        query = "INSERT INTO gyms (location, website) VALUES (%(location)s, %(website)s);"
        return connectToMySQL(DATABASE).query_db(query, data)
    
    # ! READ ALL
    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM gyms LEFT JOIN user_profiles ON users.id = gyms.user_id;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL(DATABASE).query_db(query)
        pprint(results)
        # Create an empty list to append our instances of friends
        gyms = []
        # Iterate over the db results and create instances of friends with cls.
        for gym in results:
            gyms.append(cls(gym))
        return gyms

    # ! READ ONE
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM gyms JOIN user_profiles ON users.id = gyms.user_id WHERE gyms.id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        pprint(result[0])
        gym = Gym(result[0])
        print(gym)
        return gym

    # ! READ ONE WITH MANY
    @classmethod
    def get_one_with_users(cls, data):
        query = "SELECT * FROM gyms JOIN user_profiles ON users.id = gyms.user_id WHERE users.id = %(id)s"

        results = connectToMySQL(DATABASE).query_db(query, data)
        pprint(results)
        user = user.User(results[0])
        print(user.gyms)

        for item in results:
            pprint(item)
            temp_painting = {
                'id' : item['gym.id'],
                'location' : item['location'],
                'website' : item['website'],
            }
            user.gyms.append(Gym(temp_painting))
        print(user.gyms)
        return user

    # ! UPDATE
    @classmethod
    def update(cls, data):
        query = "UPDATE gyms SET title = %(location)s, description = %(website)s WHERE gyms.id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)

    # ! DELETE
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM gyms WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)

    # ! Validation
    @staticmethod
    def validate_gym(gym:dict) -> bool:
        is_valid = True
        if len(gym['title']) < 3:
            flash("Name must be three chars")
            is_valid = False
        if len(gym['description']) < 3:
            flash("Description must be three chars")
            is_valid = False
        if gym['price'] == '':
            flash("Gym must be given a price")
            is_valid = False
            return is_valid
        if gym['number_purchased'] == '':
            flash("Gym should have a quantity greater than 0")
            is_valid = False
            return is_valid
        if float(gym['price']) <= 0:
            flash("Gym must be given a price")
            is_valid = False
        if int(gym['number_purchased']) <= 0:
            flash("Gym should have a quantity greater than 0")
            is_valid = False
        return is_valid
            