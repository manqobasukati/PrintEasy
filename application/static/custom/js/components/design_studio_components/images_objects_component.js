
Vue.component('images-object-component',{
    template:`
        <div style="border: 1px solid; width:100;">
            <img v-for="im in images" :src=im id="my-image" :width=image_width v-on:click=clickImage />   
        </div>
    `,
    methods:{
        clickImage(imageId){
            canvasSupport.addImage(imageId);
        }
    },
    data(){
        return{
             images:['my-image.jpg'],
             image_width:50,
        }
    }
});