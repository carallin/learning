window.onload = function () {
    init();
}

function init() {
    var app = new Vue({
        el: '#app',
        data: {
            message: 'hello vue!',
            name: 'tianxiang'
        }
    });

    var app2 = new Vue({
        el: '#app-2',
        data: {
            message: 'this is a message' + new Date()
        }
    });
}
