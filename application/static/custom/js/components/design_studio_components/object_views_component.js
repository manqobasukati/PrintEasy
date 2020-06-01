

Vue.component('object-views-component', {
    template: `
        <div>
            <p>Set view</p>
            <br/>
            
            <img v-for='img in getImages'
             v-bind:src="img.image_path+ '?' + Math.random() " 
            :id=img.image_id 
            :width=img.width 
            @click=clickImage(img.image_id) />
        </div>
    `,
    data() {
        return {
            images: []
        }
    },
    methods: {
        clickImage(image_id) {
            var canvas_support = canvasSupport.getInstance();
            canvas_support.add_image(image_id);
            store.commit('setSelectedImageId', image_id);
            //this.getImages();
        },


    },
    computed: {
        getImages() {
            return  store.state.object_views_images;

        },

    }
});
