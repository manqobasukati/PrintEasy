

Vue.component('colors-component',{
    template:`
        <div>
            <p>Choose color</p>
            <img v-for='img in getImages'
              :src=img.default_image_path 
              :id=img.image_id 
              :width=img.width 
              @click=clickImage(img.image_id) />
        </div>
    `,
    data(){
        return{
           image:[]
        }
    },
    mounted(){
       
    },
    created(){
        
    },
    methods:{
        clickImage(image_id){
            var canvas_support = canvasSupport.getInstance();
            canvas_support.add_image(image_id);
            this.setSelectedImageId(image_id);
            console.log(store.state.selected_image_id)
            
        },
        setSelectedImageId(image_id){
            store.commit('setSelectedImageId',image_id)
        }  
    },
    computed:{
        getImages(){
            return store.state.color_selection_images;
        }
    }
   
})