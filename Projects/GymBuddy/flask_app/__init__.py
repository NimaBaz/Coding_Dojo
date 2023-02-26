from flask import Flask, render_template, request, redirect, session, flash
from flask_bcrypt import Bcrypt
from pprint import pprint
import requests
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = 'TheSosaGuwop'

CORS(app)
bcrypt = Bcrypt(app)

# base_url = ""

