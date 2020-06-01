from flask import Flask
from flask_admin import Admin
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('config.DevelopmentConfig')


db = SQLAlchemy(app)

admin = Admin()






from spa_print import spa_print

app.register_blueprint(spa_print)






if __name__ == '__main__':
	admin.init_app(app)
	#manager.run()
	app.run()