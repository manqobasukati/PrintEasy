from application.spa_print import spa_print
from flask import render_template, jsonify, request

import base64 
import re

import os
import shutil
import errno
 
def copy(src, dest):
    APPLICATION_DIR = os.path.dirname(os.path.realpath(__file__))
    print(APPLICATION_DIR[0:65])
    try:
        shutil.copytree(APPLICATION_DIR[0:65]+src.replace('/','\\'), APPLICATION_DIR[0:65]+dest.replace('/','\\'))
    except OSError as e:
        # If the error was caused because the source wasn't a directory
        if e.errno == errno.ENOTDIR:
            shutil.copy(APPLICATION_DIR[0:65]+src, APPLICATION_DIR[0:65]+dest)
        else:
            print("current directory is : "+APPLICATION_DIR )
            print('Directory not copied. Error: %s' % e)

@spa_print.route('/', defaults={'path': ''})
@spa_print.route('/<path:path>')
def catch_all(path):
    return render_template("spa_print/index.html")



@spa_print.route('/copy-folder', methods=['GET', 'POST'])
def copy_folder():
    if request.method == 'POST':
        data = request.json
        src_path = data['src_path']
        dest_path = data['dest_path']
        copy(src_path, dest_path)
        return jsonify({'message':'success'})

def save_image(user_id, product_category, product_color, product_name,blob):
    format = [
        user_id,
        product_category,
        product_color,
        product_name
    ]
    with open(
         'C:\\Users\\manqoba\\Documents\\print_easy\\backend\\default\\application\\static\\{}\\image_files\\{}\\{}-t_shirt\\{}.jpg'.format(*format),'wb'
        ) as f:
         f.write(blob)
         print("written")

    
    
    

@spa_print.route('/save-image', methods=['GET', 'POST'])
def save_file():
    if request.method == 'POST':
        data = request.json
        dataUrlPattern = re.compile('data:image/(png|jpeg);base64,(.*)$')
        image_data = dataUrlPattern.match(data['blob']).group(2)
        image_data = image_data.encode()
        image_data = base64.b64decode(image_data)
        #user_id = data['user_id'
        save_image(data['user_id'],data['product_category'],data['product_color'],data['product_name'],image_data)
        return jsonify({'message':'success'})


