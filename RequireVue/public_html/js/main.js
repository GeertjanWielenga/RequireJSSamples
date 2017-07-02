requirejs.config({
    paths: {
        "Vue": "libraries/vue/dist/vue",
        "vue": "libraries/require-vuejs/dist/require-vuejs",
        "vue_router": "libraries/vue-router/dist/vue-router.min"
    },
    shim: {
        "Vue": {"exports": "Vue"},
		"vue_router": {"exports": "VueRouter"}
    }
});
// to use component in your code with RequireJS: 
// put a reference to your component file with or without extencion after 'vue!' 
require(['Vue', 'vue_router', 'routes',
	'vue!vue-components/my-header-component', 
	'vue!vue-components/my-grid-component', 
	'vue!vue-components/my-footer-component'], function(Vue, VueRouter, AppRoutes){
  Vue.use(VueRouter);	
  var router = new VueRouter({
    mode: 'hash',
    routes: AppRoutes
  });
  new Vue({
    el: '#refs',
    router: router
  });
  new Vue({
	  el: "#header"
  });
  new Vue({
	el: '#grid',
	data: {
	  searchQuery: '',
	  gridColumns: ['name', 'power'],
	  gridData: [
		{name: 'Chuck Norris', power: Infinity},
		{name: 'Bruce Lee', power: 9000},
		{name: 'Jackie Chan', power: 7000},
		{name: 'Jet Li', power: 8000}
	  ]
	}
  });
  new Vue({
	  el: "#footer"
  });
});