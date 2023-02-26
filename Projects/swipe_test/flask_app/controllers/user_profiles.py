from flask_app import app, render_template, redirect, request, bcrypt, session, flash
from flask_app.models.user_profile import User

@app.route('/')
def index():
    return render_template('main_page.html', users = User.get_all())

@app.route('/requests')
def like_page():
    return render_template ('like_page.html')

@app.route('/likes', methods = ['POST'])
def friendship():
    print(request.form)
    User.friend_requests(request.form)
    return redirect('/requests')

@app.route('/requests/<int:id>')
def requests_table(id):
    return render_template('like_page.html', requests = User.requests({'id': id}))

@app.route('/connections')
def chat_page():
    return render_template ('chat_page.html')

@app.route('/messenger', methods = ['POST'])
def connection():
    print(request.form)
    User.friends(request.form)
    return redirect('/connections')

@app.route('/friends/<int:id>')
def connections_table(id):
    return render_template('chat_page.html', connections = User.connections({'id': id}))

@app.route('/test', methods = ['GET'])
def test():
    print(request.args)
    return redirect('/')