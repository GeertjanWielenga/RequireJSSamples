requirejs.config({
    paths: {
        "Vue": "libraries/vue/dist/vue",
        "vue": "libraries/require-vuejs/dist/require-vuejs"
    },
    shim: {
        "Vue": {"exports": "Vue"}
    }
});
// to use component in your code with RequireJS: 
// put a reference to your component file with or without extencion after 'vue!' 
require(["Vue", "vue!component"], function(Vue){
    var app = new Vue({
        el: "#app"
    });
});