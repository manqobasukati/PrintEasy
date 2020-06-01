async function send_path_to_server(src_path, dest_path) {
    var data = { src_path: src_path, dest_path: dest_path };
    var result;
    var self = this;
    var url = 'http://127.0.0.1:5000/copy-folder';
    await fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response =>
            console.log('Success:', JSON.stringify(response)),
            self.result = true
        )
        .catch(error => console.error('Error:', error),
            result = false
        );

    return result;

}


async function save_file_to_server(user_id, blob,product_category,product_name,product_color) {
    console.log(product_name);
    var data = { user_id, blob,product_category, product_name, product_color};
    var result;
    var self = this;


    var url = 'http://127.0.0.1:5000/save-image';
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response =>
            console.log('Success:', JSON.stringify(response)),
            self.result = true
        )
        .catch(error => console.error('Error:', error),
            self.result = false
        );

    return self.result;

}