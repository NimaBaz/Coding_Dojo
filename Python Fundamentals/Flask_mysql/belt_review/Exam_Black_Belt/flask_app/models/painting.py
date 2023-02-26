from flask_app.config.mysqlconnection import connectToMySQL
from pprint import pprint
from flask_app import flash
from flask_app.models import user

DATABASE = 'user_painting'

class Painting:
    
    def __init__(self, data) -> None:
        self.id = data['id']
        self.title = data['title']
        self.description = data['description']
        self.price = data['price']
        self.user_id = data['user_id']
        self.number_purchased = data['number_purchased']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        
    @classmethod
    def save(cls, data):
        query = "INSERT INTO paintings (title, description, price, user_id, number_purchased) VALUES (%(title)s, %(description)s, %(price)s, %(user_id)s, %(number_purchased)s);"
        return connectToMySQL(DATABASE).query_db(query, data)
    
    # ! READ ALL
    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM paintings LEFT JOIN users ON users.id = paintings.user_id;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL(DATABASE).query_db(query)
        pprint(results)
        # Create an empty list to append our instances of friends
        paintings = []
        # Iterate over the db results and create instances of friends with cls.
        for painting in results:
            paintings.append(cls(painting))
        return paintings

    # ! READ ONE
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM paintings JOIN users ON users.id = paintings.user_id WHERE paintings.id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        pprint(result[0])
        painting = Painting(result[0])
        print(painting)
        return painting

    # ! READ ONE WITH MANY
    @classmethod
    def get_one_with_paintings(cls, data):
        query = "SELECT * FROM paintings JOIN users ON users.id = paintings.user_id WHERE users.id = %(id)s"

        results = connectToMySQL(DATABASE).query_db(query, data)
        pprint(results)
        user = user.User(results[0])
        print(user.paintings)

        for item in results:
            pprint(item)
            temp_painting = {
                'id' : item['paintings.id'],
                'title' : item['title'],
                'description' : item['description'],
                'price' : item['price'],
                'user_id' : item['user_id'],
                'number_purchased' : item['number_purchased'],
                'first_name' : item['first_name'],
                'last_name' : item['last_name'],
                'created_at' : item['ninjas.created_at'],
                'updated_at' : item['ninjas.updated_at']
            }
            user.paintings.append(Painting(temp_painting))
        print(user.paintings)
        return user

    # ! UPDATE
    @classmethod
    def update(cls, data):
        query = "UPDATE paintings SET title = %(title)s, description = %(description)s, price = %(price)s, number_purchased = %(number_purchased)s WHERE paintings.id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)

    # ! DELETE
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM paintings WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)

    # ! Validation
    @staticmethod
    def validate_painting(painting:dict) -> bool:
        is_valid = True
        if len(painting['title']) < 3:
            flash("Name must be three chars")
            is_valid = False
        if len(painting['description']) < 3:
            flash("Description must be three chars")
            is_valid = False
        if painting['price'] == '':
            flash("Painting must be given a price")
            is_valid = False
            return is_valid
        if painting['number_purchased'] == '':
            flash("Painting should have a quantity greater than 0")
            is_valid = False
            return is_valid
        if float(painting['price']) <= 0:
            flash("Painting must be given a price")
            is_valid = False
        if int(painting['number_purchased']) <= 0:
            flash("Painting should have a quantity greater than 0")
            is_valid = False
        return is_valid
            