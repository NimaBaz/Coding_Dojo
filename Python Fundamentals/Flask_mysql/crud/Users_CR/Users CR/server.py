from flask import Flask, render_template, request, redirect, session
# import the class from friend.py
from user import User

app = Flask(__name__)
app.secret_key = 'TheSosaGuwop'

# ! CREATE
@app.route('/results')
def results():
    return render_template("results.html", users = User.get_all())

@app.route('/results', methods = ["POST"])
def create_user():
    print(request.form)
    User.save(request.form)
    return redirect('/results')


# ! READ ALL
@app.route("/")
def index():
    return render_template("create.html")


# ! READ ONE
@app.route("/create/<int:id>")
def get_user(id):
    return render_template("results.html", user = User.get_one({'id': id}))

# ! UPDATE
@app.route("/update/<int:id>")
def edit(id):
    return render_template("edit.html", users = User.get_one({'id': id}))

@app.route("/update", methods = ["POST"])
def update():
    User.update(request.form)
    return render_template("/")

# ! DELETE


if __name__ == "__main__":
    app.run(debug=True)

