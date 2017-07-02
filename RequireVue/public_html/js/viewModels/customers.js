define(['Vue'], function(Vue) {
  return Vue.extend({
   template: `
    <div>
      hello from customers
      <ul>
        <li v-for='link in links'>
          <a :href='link.url' target="_blank">{{link.title}}</a>
        </li>
      </ul>
      </div>
    `,
    data: function() {
      return {
          links: [
            {
            'url': 'https://vuejs.org/',
            'title': 'Vue'
          },{
            'url': 'https://twitter.com/vuejs',
            'title': '@vuejs'
          }
        ]
      };
    }
  });
});