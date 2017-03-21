<template>
  <div class="portal">
    <toolbar-widget></toolbar-widget>
    <div class="main-container">
      <div class="info-panel-container">
        <info-widget></info-widget>
      </div>
      <div class="interaction-panel-container">
        <battle-widget></battle-widget>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  import ToolbarWidget from 'widgets/ToolbarWidget'
  import InfoWidget from 'widgets/InfoWidget'
  import BattleWidget from 'widgets/BattleWidget'

  export default {
    components: {
      ToolbarWidget,
      InfoWidget,
      BattleWidget
    },
    name: 'portal-view'
  }
</script>

<style lang="scss">
  .portal,
  .main-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .main-container {
    .info-panel-container,
    .interaction-panel-container {
      display: inline-block;
    }
    .info-panel-container {
      width: 55%;
      float: left;
    }
    .interaction-panel-container {
      width: 45%;
      height: 100%;
    }
    .clear {
      clear: both;
    }
  }
</style>
