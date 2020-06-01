import os

class Config(object):
	DEBUG = False
	TESTING = False
	
	
	
class ProductionConfig(Config):
	DEBUG = True
	#DATABASE_URI = 'mysql://user@localhost/foo'
	MYSQL_DATABASE_HOST = 'localhost'
	MYSQL_DATABASE_PORT = 3306
	SEND_FILE_MAX_AGE_DEFAULT = 0
	
	

class DevelopmentConfig(Config):
	APPLICATION_DIR = os.path.dirname(os.path.realpath(__file__))
	DEBUG = True
	SECRET_KEY = 'this is my secret key'
	SEND_FILE_MAX_AGE_DEFAULT = 0
	#SQLALCHEMY_DATABASE_URI = 'sqlite:///%s/tinanatelo.db' % APPLICATION_DIR
	#SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:''@localhost:3306/announcement_hub'
	
class TestingConfig(Config):
	TESTING = True