# Import Flask to allow us to create our app
from flask import Flask, render_template

# Create a new instance of the Flask class called "app"
app = Flask(__name__) 

# The "@" decorator associates this route with the function immediately following
@app.route('/play/<int:x>/<color>')
def index(x, color):
    return render_template("index.html", x = x, color = color) 



# Ensure this file is being run directly and not from a different module
if __name__=="__main__":
    app.run(debug=True)    # Run the app in debug mode.

