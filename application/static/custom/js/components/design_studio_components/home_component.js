Vue.component('home-component', {
    template:`
        <div class="home-component">
            <nav-bar-component/>
            <br />
           
            <div class='row content'>
                <div class='col-md-1'>
                    <colors-component/>
                </div>
                <div class='col-md-6'>
                    <div class='row'>
                        <canvas-component/>
                    </div>
                    <br />
                    <div class='row'>
                         <object-views-component  />
                    </div>
                </div>
                <div class='col-md-2'>
                    <assets-component/>
                </div>
            </div>
            
           
        </div>
    `,
    async created(){
        await store.commit('setProducts');
        
    },
    mounted(){
      
      
    }
})