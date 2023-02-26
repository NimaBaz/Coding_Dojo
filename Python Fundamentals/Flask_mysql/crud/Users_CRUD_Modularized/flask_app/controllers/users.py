from flask_app import app, render_template, request, redirect, session
from flask_app.models.user import User

# ! CREATE
@app.route('/results')
def results():
    users = User.get_all()
    return render_template("results.html", users = users)

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
@app.route("/show/<int:id>")
def get_user(id):
    return render_template("read_one.html", user = User.get_one({'id': id}))

# ! UPDATE
@app.route("/update/<int:id>")
def edit(id):
    return render_template("edit.html", user = User.get_one({'id': id}))

@app.route("/update", methods = ["POST"])
def update():
    User.update(request.form)
    return redirect(f"/show/{request.form['id']}")

# ! DELETE
@app.route("/delete/<int:id>")
def delete(id):
    User.delete({'id': id})
    return redirect("/results")