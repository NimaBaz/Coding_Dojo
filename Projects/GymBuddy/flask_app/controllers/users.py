from flask_app import app, render_template, redirect, request, bcrypt, session, flash
from flask_app.models.gym import Gym
from flask_app.models.connection import Connection
from flask_app.models.user import User

@app.route('/')
def index():
    return render_template('login.html')

#! CREATE AKA REGISTER

@app.route("/register", methods = ['post'])
def register():
    print(request.form)

    if not User.validate_user(request.form):
        return redirect('/')

    # hash the password
    hashed_pw = bcrypt.generate_password_hash(request.form['password'])
    print(hashed_pw)

    # save the user to the database
    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email'],
        "password": hashed_pw
    }
    user_id = User.save(data)

    # log in the user
    session['user_id'] = user_id
    session['first_name'] = request.form['first_name']

    # redirect user to app
    return redirect('/main_page')

#! CREATE AKA REGISTER


#! READ and VERIFY AKA LOGIN

@app.route('/login', methods=['post'])
def login():
    data = {
        "email": request.form['email']
    }
    user_in_db = User.get_by_email(data)

    # see of the email is in our DB
    if not user_in_db:
        flash("Invalid Email/Password")
        return redirect('/')

    # check to see of the password provided matches the password in our DB
    # password_valid = bcrypt.check_password_hash(user_in_db.password, request.form['password'])
    
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash("Invalid Email/Password")
        return redirect('/')

    # log in the user
    session['user_id'] = user_in_db.id
    session['first_name'] = user_in_db.first_name
    
    # redirect user to app
    return redirect('/main_page')

#! READ and VERIFY AKA LOGIN


#! LOGOUT

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

#! LOGOUT


@app.route('/main_page')
def main():
    return render_template('main_page.html', users = User.get_all_except({'id' : session['user_id']}))

@app.route('/requests')
def like_page():
    return render_template ('like_page.html')

@app.route('/likes', methods = ['POST'])
def friendship():
    print(request.form)
    User.friend_requests(request.form)
    return redirect('/requests')

# ! READ ONE WITH MANY
@app.route("/requests/<int:id>")
def get_all_requests(id):
    return render_template("like_page.html", user = User.get_one_with_friends({'id': id}))

# @app.route('/requests/<int:id>')
# def requests_table(id):
#     return render_template('like_page.html', requests = User.requests({'id': id}))

@app.route('/connections')
def chat_page():
    return render_template ('chat_page.html')

@app.route('/messenger', methods = ['POST'])
def connection():
    print(request.form)
    User.add_friends(request.form)
    return redirect('/connections')

@app.route('/friends/<int:id>')
def connections_table(id):
    return render_template('chat_page.html', connections = User.connections({'id': id}))

@app.route('/test', methods = ['GET'])
def test():
    print(request.args)
    User.friend_requests(request.args)
    return redirect('/')
