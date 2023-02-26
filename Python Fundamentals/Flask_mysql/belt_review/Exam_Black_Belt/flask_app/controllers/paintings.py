from flask_app import app, render_template, redirect, request, bcrypt, session, flash
from flask_app import app
from flask_app.models.painting import Painting
from flask_app.models.user import User

# TEST TO SEE IF DATA GOES TO SUCCESS ROUTE
@app.route('/paintings')
def success():
    if 'user_id' not in session:
        return redirect('/logout')
    return render_template ("paintings.html", paintings = Painting.get_all())

@app.route('/paintings/new')
def new_paintings():
    return render_template ('new_painting.html')

@app.route('/paintings/create', methods = ['POST'])
def create_paintings():
    print(request.form)
    
    if not Painting.validate_painting(request.form):
        return redirect('/paintings/new')

    Painting.save(request.form)
    return redirect ('/paintings')

# ! READ ONE
@app.route("/paintings/<int:id>")
def get_painting(id):
    return render_template("show_painting.html", painting = Painting.get_one({'id': id}))

@app.route("/paintings/sold/<int:id>")
def get_all_paintings(id):
    return render_template("show_paintings_sold_out.html", painting = Painting.get_one({'id': id}))

# ! UPDATE
@app.route("/paintings/edit/<int:id>")
def painting_edit(id):
    return render_template("edit_painting.html", painting = Painting.get_one({'id': id}))

@app.route("/paintings/update", methods = ["POST"])
def painting_update():
    print(request.form)

    if not Painting.validate_painting(request.form):
        return redirect(f"/paintings/edit/{request.form['id']}")

    Painting.update(request.form)
    return redirect("/paintings")

# ! DELETE
@app.route("/paintings/delete/<int:id>")
def painting_delete(id):
    Painting.delete({'id': id})
    return redirect('/paintings')
