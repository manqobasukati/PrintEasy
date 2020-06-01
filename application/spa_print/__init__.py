from flask import Blueprint


spa_print = Blueprint('spa_print', __name__)

from application.spa_print.spa_print_home import *
