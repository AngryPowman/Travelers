<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  import Vue from 'vue';
  import ElementUI from 'element-ui';
  import ResourceManager from 'scripts/manager/resource-manager';
  import Archive from 'scripts/archive';
  import AppData from 'scripts/app-data'
  import Electron from 'electron'

  import 'element-ui/lib/theme-default/index.css';

  Vue.use(ElementUI);


  export default {
    store,
    created: function() {
      var app = Electron.remote.app;
      // Init app data
      AppData.init();

      // Load archives
      Archive.load();

      console.log("Loading game configurations ...");
      ResourceManager.loadAllConfig();

      console.log("Loaded configurations: %o", ResourceManager.config);
    }
  }
</script>

<style lang="scss">
  @import "styles/global.scss";
</style>