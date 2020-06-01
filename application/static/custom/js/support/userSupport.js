//user support singleton


var userSupport = (function () {
    var instance;
    var initialise = function () {
        var user_id;
        var init = function (user_id) {
            this.user_id = user_id;
        }
        return {
            user_id: user_id,
            init:init
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