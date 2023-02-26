# Import Flask to allow us to create our app
from flask import Flask, render_template
from user import users

# Create a new instance of the Flask class called "app"
app = Flask(__name__) 

@app.route('/')
def render_lists():
    return render_template("index.html", users = users)





# Ensure this file is being run directly and not from a different module
if __name__=="__main__":
    app.run(debug=True)    # Run the app in debug mode.

