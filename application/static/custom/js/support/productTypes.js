//var c_ = canvasSupport.getInstance();

function products(user_id) {
    let products;
    if (user_id) {
        console.log('hERE');
        products = [
            {
    
                folder_path: '/static/image_files/t_shirts',
                user_folder_path: `/static/${user_id}/image_files/t_shirts`,
                product: 't_shirts',
                types: [
                    {
                        image_id: 'green-t_shirt_front',
                        default_image_path: `/static/${user_id}/image_files/t_shirts/green-t_shirt/green-t_shirt_front.jpg`,
                        width: 50,
                        views: [
                            {
                                image_id: 'green-t_shirt-front',
                                image_path: `/static/${user_id}/image_files/t_shirts/green-t_shirt/green-t_shirt_front.jpg`,
                                width: 50
                            },
                            {
                                image_id: 'green-t_shirt-back',
                                image_path: `/static/${user_id}/image_files/t_shirts/green-t_shirt/green-t_shirt_back.jpg`,
                                width: 50
                            }
                        ]
                    },
                    {
                        image_id: 'white-t_shirt_front',
                        folder_path: '/static/image_files/t_shirts/white-t_shirt',
                        user_folder_path: `/static/${user_id}/image_files/t_shirts/white-t_shirt`,
                        width: 50,
                        default_image_path: `/static/${user_id}/image_files/t_shirts/white-t_shirt/white-t_shirt_front.jpg`,
                        views: [
                            {
                                image_id: 'white-t_shirt-front',
                                image_path: `/static/${user_id}/image_files/t_shirts/white-t_shirt/white-t_shirt_front.jpg`,
                                width: 50
                            }
                        ]
                    }
                ]
            }
        ]
    }
    else if(!user_id){  

        console.log(user_id);
     products = [
        {

            folder_path: '/static/image_files/t_shirts',
            user_folder_path: `/static/image_files/t_shirts`,
            product: 't_shirts',
            types: [
                {
                    image_id: 'green-t_shirt_front',
                    default_image_path: `/static/image_files/t_shirts/green-t_shirt/green-t_shirt_front.jpg`,
                    width: 50,
                    views: [
                        {
                            image_id: 'green-t_shirt-front',
                            image_path: `/static/image_files/t_shirts/green-t_shirt/green-t_shirt_front.jpg`,
                            width: 50
                        },
                        {
                            image_id: 'green-t_shirt-back',
                            image_path: `/static/image_files/t_shirts/green-t_shirt/green-t_shirt_back.jpg`,
                            width: 50
                        }
                    ]
                },
                {
                    image_id: 'white-t_shirt_front',
                    folder_path: '/static/image_files/t_shirts/white-t_shirt',
                    user_folder_path: `/static/image_files/t_shirts/white-t_shirt`,
                    width: 50,
                    default_image_path: '/static/image_files/t_shirts/white-t_shirt/white-t_shirt_front.jpg',
                    views: [
                        {
                            image_id: 'white-t_shirt-front',
                            image_path: '/static/image_files/t_shirts/white-t_shirt/white-t_shirt_front.jpg',
                            width: 50
                        },
                        {
                            image_id: 'white-t_shirt-back',
                            image_path: '/static/image_files/t_shirts/white-t_shirt/white-t_shirt_back.jpg',
                            width: 50
                        }
                    ]
                }
            ]
        }
    ];
    }


return products;

}

