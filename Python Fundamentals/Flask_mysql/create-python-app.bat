@echo off
mkdir %1
cd %1

pipenv install flask pymysql flask-bcrypt

echo. > server.py
echo from flask import Flask, render_template, request, redirect, session>> server.py
echo.>> server.py
echo.>> server.py
echo app = Flask(__name__)>> server.py
echo ^@app.route('/')>> server.py
echo.>> server.py
echo.>> server.py
echo.>> server.py
echo.>> server.py
echo.>> server.py
echo if __name__=="__main__":>> server.py
echo     app.run(debug=True)    ^# Run the app in debug mode.  >> server.py
echo.>> server.py
mkdir templates
mkdir static
cd templates
echo^!>index.html
cd..
cd static
echo.>style.css

cd..