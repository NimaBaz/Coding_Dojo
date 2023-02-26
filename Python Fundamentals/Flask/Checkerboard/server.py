# Import Flask to allow us to create our app
from flask import Flask, render_template

# Create a new instance of the Flask class called "app"
app = Flask(__name__) 

# The "@" decorator associates this route with the function immediately following
@app.route('/')
def index():
    return render_template("index.html", color1 = "red", color2 = "black",
                            color3 = "red", color4 = "black", color5 = "red", 
                            color6 = "black", color7 = "red", color8 = "black",
                            color9 = "black", color10 = "red", color11 = "black",
                            color12 = "red", color13 = "black", color14 = "red",
                            color15 = "black", color16 = "red") 



# Ensure this file is being run directly and not from a different module
if __name__=="__main__":
    app.run(debug=True)    # Run the app in debug mode.

