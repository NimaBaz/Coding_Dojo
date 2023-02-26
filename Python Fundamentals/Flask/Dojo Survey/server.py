# Import Flask to allow us to create our app
from flask import Flask, render_template, request, redirect, session

# Create a new instance of the Flask class called "app"
app = Flask(__name__) 
app.secret_key = 'TheSosaGuwop'

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/form', methods=['POST'])
def enter():
    print(request.form)
    session['your_name'] = request.form['your_name']
    session['dojo_location'] = request.form['dojo_location']
    session['favorite_language'] = request.form['favorite_language']
    session['comment'] = request.form['comment']
    if 'check_box' in request.form:
        session['check_box'] = request.form['check_box']
    else:
        session['check_box'] = 'Not Subscribed'
    return redirect('/results')

@app.route('/results')
def results():
    return render_template("results.html")



# Ensure this file is being run directly and not from a different module
if __name__=="__main__":
    app.run(debug=True)    # Run the app in debug mode.

