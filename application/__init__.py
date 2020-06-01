from flask import Flask
from flask_admin import Admin
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

admin = Admin()


def create_app():
	app = Flask(__name__, instance_relative_config=False)
	app.config.from_object('config.DevelopmentConfig')
	
	db.init_app(app)
	admin.init_app(app)
	
	with app.app_context():
		from application.spa_print import spa_print
		
		
		app.register_blueprint(spa_print)
		
		return app
		
		
		
	