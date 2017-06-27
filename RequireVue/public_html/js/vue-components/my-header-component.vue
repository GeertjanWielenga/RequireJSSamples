<template>
  <div>
  {{text}}
  <hr>
  </div>
</template>

<script>
  define(["Vue"], function(Vue) {
      Vue.component("my-header-component", {
          template: template, // the variable template will be injected
          data: function() {
              return {"text": "<placeholder for header>"};
          }
      });
    });
</script>