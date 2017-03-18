<template>
  <div class="portal">
    <toolbar-widget></toolbar-widget>
    <div class="main-container">
      <info-widget class="info-panel-container">
      </info-widget>
      <div class="interaction-panel-container">
        <battle-widget></battle-widget>
      </div>
    </div>
  </div>
</template>

<script>
  import ToolbarWidget from 'widgets/ToolbarWidget'
  import InfoWidget from 'widgets/InfoWidget'
  import InteractionWidget from 'widgets/InteractionWidget'
  import BattleWidget from 'widgets/BattleWidget'

  export default {
    components: {
      ToolbarWidget,
      InfoWidget,
      InteractionWidget,
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
    .info-panel-container {
      float: left;
    }
    .interaction-panel-container {
      float: left;
    }
  }
</style>
