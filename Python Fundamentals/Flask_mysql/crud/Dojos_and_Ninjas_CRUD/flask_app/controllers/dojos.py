from flask_app import app, render_template, request, redirect, session
from flask_app.models.dojo import Dojo

# ! CREATE
@app.route('/results')
def dojo_results():
    dojos = Dojo.get_all()
    return render_template("dojo.html", dojos = dojos)

@app.route('/results', methods = ["POST"])
def create_dojo():
    print(request.form)
    Dojo.save(request.form)
    return redirect('/results')


# ! READ ONE
@app.route("/show/<int:id>")
def get_dojo(id):
    return render_template("dojo.html", dojo = Dojo.get_one_({'id': id}))

# ! READ ONE WITH MANY
@app.route("/show/all_ninjas/<int:id>")
def get_all_ninjas(id):
    return render_template("show_ninjas_in_dojo.html", dojo = Dojo.get_one_with_ninjas({'id': id}))

# ! UPDATE
@app.route("/update/<int:id>")
def dojo_edit(id):
    return render_template("edit.html", dojo = Dojo.get_one({'id': id}))

@app.route("/update", methods = ["POST"])
def dojo_update():
    Dojo.update(request.form)
    return redirect(f"/show/{request.form['id']}")

# ! DELETE
@app.route("/delete/<int:id>")
def dojo_delete(id):
    Dojo.delete({'id': id})
    return redirect("/results")