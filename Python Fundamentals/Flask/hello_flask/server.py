# Import Flask to allow us to create our app
from flask import Flask, render_template

# Create a new instance of the Flask class called "app"
app = Flask(__name__) 

# The "@" decorator associates this route with the function immediately following
@app.route('/')
def hello_world():
    return 'Hello World!' 


@app.route('/dojo')
def dojo():
    return 'Dojo!'


@app.route('/say/<name>') 
def hello(name):
    print(name)
    return "Hi, " + name


@app.route('/users/<int:num>/<var>') 
def show_user_profile(num, var):
    return num * var


# Ensure this file is being run directly and not from a different module
if __name__=="__main__":
    app.run(debug=True)    # Run the app in debug mode.

