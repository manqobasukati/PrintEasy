Vue.component('assets-component', {
    template: `
        <div>
            <p>Your assets</p>

            <div v-if="getAssets">
                <img v-for="image in getAssets" :src="image.url" :id="image.id"  @click="clickImage(image.id)" />
            </div>
            <div>
                <p>Select image</p>
                <input type="file" @change="onFileChange">
            </div>
        </div>
    `,
    data() {
       return{
           images:[
               
           ]
       }
    },
    computed:{
        getAssets(){
            return store.state.assets;
        }
    },
    methods: {
        onFileChange(e){
            var files = e.target.files || e.dataTransfer.files;
            if(!files.length)
                return;
            this.createImage(files[0]);
            
            files[0].id = getFilename(files[0].name);
           
        },
        createImage(file){
            var reader = new FileReader();
            reader.onload = (e) => { 
              img = {url:e.target.result,id:file.id};
              store.commit('addAsset',img);
            };
            reader.readAsDataURL(file);
          },
          clickImage(image_id){
            var canvas_support = canvasSupport.getInstance();
            canvas_support.add_image(image_id,true);
        },
        }

    
})