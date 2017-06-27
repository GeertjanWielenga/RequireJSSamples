<template>
  <div>
  <hr>
  {{text}}
  </div>
</template>

<script>
  define(["Vue"], function(Vue) {
      Vue.component("my-footer-component", {
          template: template, // the variable template will be injected
          data: function() {
              return {"text": "<placeholder for footer>"};
          }
      });
    });
</script>