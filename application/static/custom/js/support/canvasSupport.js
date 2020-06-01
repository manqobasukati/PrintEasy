//canvas support



var canvasSupport = (function () {
    var instance;
    var initialise = function () {
        var canvas;
        var canvasElements;
        var canvas_id;
        var user_id;
        var init = function (canvasId) {
            this.canvas_id = canvasId;
            this.canvas = new fabric.Canvas(this.canvas_id);
            this.canvasElements = [];
        };

        var add_element = function () {
            this.canvas.add();
        };

        var remove_element = function () {
            this.get_all_elements.pop();
        };

        var get_all_elements = function () {
            return this.canvas.getObjects();
        };



        var add_image = function (imageId, dont_redraw) {
            let imgEl = document.getElementById(imageId);
          
            let imgInstance = new fabric.Image(imgEl, {
                left: imgEl.width / 2,
                top: imgEl.height / 2,
                selectable: false
            });

            if (this.canvas) {

                if (this.canvas.getObjects().length === 0 ) {
                    this.canvas.add(imgInstance);
                }
                else if (this.canvas.getObjects().length >= 1) {
                    if(!dont_redraw){
                        this.canvas.clear()
                        this.canvas.add(imgInstance)
                    }
                   else{
                    imgInstance.set('selectable',true);
                    this.canvas.add(imgInstance)
                   }
                }


            } else {
                console.log('Nothing in canvas');
            }

        }

        return {
            add_image: add_image,
            add_element: add_element,
            remove_element: remove_element,
            get_all_elements: get_all_elements,
            init: init,
            canvas:canvas,
            canvas_id: canvas_id,
            user_id:user_id
        }
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = initialise();
            }
            return instance;
        }
    }

})()