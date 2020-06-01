
Vue.component('canvas-component', {
  template: `
        <div>
        <button @click=saveImage>Save image</button>
          <canvas 
            :id=getCanvasDetails.canvas_id 
            :width=getCanvasDetails.canvasWidth
            :height=getCanvasDetails.canvasHeight
            style='border: 1px solid;'>
          </canvas>
        </div>
    `,
  computed: {
    getCanvasDetails() {
      return store.state.canvasStuff;
    },

  },
  methods: {
    async saveImage() {
      this.href = store.state.canvasStuff.canvas_support.canvas.toDataURL({
        format: 'png',
        quality: 1.0
      });
     
      //product_color = store.state.selected_image_id.split('-')[0];
      let run = await save_file_to_server(store.state.user_id, this.href, 
                            store.state.selected_category, store.state.selected_image_id, store.state.selected_image_id.split('-')[0]);
      store.commit('setObjectViews');
      //this.download = 'frontside.png'
      console.log(run);
      this.$emit('reload_object_views');
      //location.reload();
    }
  },
  mounted() {
    store.dispatch('CREATE_CANVAS_SUPPORT')
  }
})
