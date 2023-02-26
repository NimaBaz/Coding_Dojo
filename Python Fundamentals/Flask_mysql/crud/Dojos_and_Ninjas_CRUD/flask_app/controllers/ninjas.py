from flask_app import app, render_template, request, redirect, session
from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo

# ! CREATE
@app.route('/ninjas/new')
def ninja_results():
    ninjas = Ninja.get_all()
    return render_template("ninja.html", ninjas = ninjas)

@app.route('/ninjas/new', methods = ["POST"])
def create_ninja():
    print(request.form)
    Ninja.save(request.form)
    return redirect('/ninjas/new')


# ! READ ALL
@app.route("/")
def ninja_index():
    return render_template("create.html", dojos = Dojo.get_all())


# ! READ ONE
@app.route("/ninjas/show/<int:id>")
def get_ninja(id):
    return render_template("ninja.html", ninja = Ninja.get_one({'id': id}))

# ! READ ONE WITH MANY
@app.route("/show/dojo/<int:id>")
def get_all_dojos(id):
    ninja = Ninja.get_one({'id': id})
    dojo = Dojo.get_one({'id' : ninja.dojo_id})
    print(dojo)
    return render_template("show_dojo_for_ninja.html", ninja = ninja, dojo = dojo)

# ! UPDATE
@app.route("/update/<int:id>")
def ninja_edit(id):
    return render_template("edit.html", ninja = Ninja.get_one({'id': id}))

@app.route("/update", methods = ["POST"])
def ninja_update():
    Ninja.update(request.form)
    return redirect(f"/show/{request.form['id']}")

# ! DELETE
@app.route("/ninjas/delete/<int:id>")
def ninja_delete(id):
    Ninja.delete({'id': id})
    return redirect('/new_ninja')