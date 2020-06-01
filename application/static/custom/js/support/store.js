
//store.js
let store = new Vuex.Store({
    state: {
        selected_category: 't_shirts',
        selected_image_id: '',
        parent_image_id:'',
        user_id: 4,
        assets: [],
        products: [],
        color_selection_images: [
            //TODO:this data is dynamic to be set by user on selection 
        ],
        object_views_images: [],
        canvasStuff: {
            canvas_support: '',
            canvas_id: 'c',
            canvasWidth: 500,
            canvasHeight: 300
        }
    },
    mutations: {
        addAsset(state, payload) {
            state.assets.push(payload);
        },
        createCanvasSupport(state) {
            state.canvasStuff.canvas_support = canvasSupport.getInstance();
            state.canvasStuff.canvas_support.init(state.canvasStuff.canvas_id, state.user_id)
        },
    
        setSelectedImageId(state, payload) {
            state.selected_image_id = payload;
            console.log(payload);
            store.commit('setObjectViews');
        },
        async setColorSelectedImages(state) {
            let found =  products().find(product =>
                product.product === state.selected_category);

            if (found) {
                state.color_selection_images = found.types;
            }
            console.log(found);
        }
        ,
        setObjectViews(state) {
            console.log(state.selected_image_id);
            console.log(extractType(state.selected_image_id).substr(0,7)+'s');
            let found = products(state.user_id).find(product =>
                product.product === extractType(state.selected_image_id).substr(0,7)+'s');
            console.log(found);
            let found_again = found.types.find(f =>
                f.image_id === state.selected_image_id);

            if (found_again) {
                //if(state.object_views_images){

                //}
                state.object_views_images = found_again.views;
                console.log(state.object_views_images);
            }
            /*
            var c_ = canvasSupport.getInstance().canvas.getElement('c');

            c_.toBlob(function (blob) {
                var newImg = document.createElement('img'),
                    url = URL.createObjectURL(blob);

                newImg.onload = function () {
                    // no longer need to read the blob so it's revoked
                    URL.revokeObjectURL(url);
                };

                newImg.src = url;
                document.body.appendChild(newImg);
            });
            */
        },
        async setProducts(state) {
            let src_path =  products(state.user_id).find(f => f.product === "t_shirts")["folder_path"];
            let dest_path =  products(state.user_id).find(f => f.product === "t_shirts")["user_folder_path"];
            let run = await send_path_to_server(src_path, dest_path);
            console.log(run);
            // if(run){
            state.products = products(state.user_id);
            //console.log(state.products);
            store.commit('setColorSelectedImages');
            // }

        },


    },
    actions: {
        CREATE_CANVAS_SUPPORT(context) {
            context.commit('createCanvasSupport');
        },
        //TODO: created actions for all mutattions
    }
})