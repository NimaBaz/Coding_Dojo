# Import Flask to allow us to create our app
from flask import Flask, render_template, request, redirect, session

# Create a new instance of the Flask class called "app"
app = Flask(__name__) 
app.secret_key = 'TheSosaGuwop'

@app.route('/')
def index():
    if "view" in session:
        session['view'] += 1
    else:
        session['view'] = 0
    return render_template("index.html")


@app.route('/Add2')
def vists():
    session['view'] += 1
    return redirect('/')

@app.route('/destroy_session')
def clear():
    session.clear()
    return redirect('/')



# Ensure this file is being run directly and not from a different module
if __name__=="__main__":
    app.run(debug=True)    # Run the app in debug mode.

