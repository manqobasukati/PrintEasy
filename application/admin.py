from flask_admin.contrib.sqla import ModelView
from application import db,admin
from application.models import Surname

SurnameAdmin = admin.add_view(ModelView(Surname, db.session))