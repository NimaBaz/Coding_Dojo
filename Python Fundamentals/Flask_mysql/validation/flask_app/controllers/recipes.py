from flask_app import app, render_template, redirect, request, bcrypt, session, flash
from flask_app import app

# TEST TO SEE IF DATA GOES TO SUCCESS ROUTE
@app.route('/recipes')
def success():
    if 'user_id' not in session:
        return redirect('/logout')
    return render_template ("recipes.html")
