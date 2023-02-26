from flask_app import app, render_template, redirect, request, bcrypt, session, flash, requests, pprint
from flask_app.models.gym import Gym
from flask_app.models.connection import Connection
from flask_app.models.user import User

# TEST TO SEE IF DATA GOES TO SUCCESS ROUTE
@app.route('/gym')
def gym_location():
    if 'user_id' not in session:
        return redirect('/logout')
    return render_template ("gyms.html", gyms = Gym.get_all())

