<template>
  <div id="container" class="ui-battle-container">
    <div class="enemy-container">

    </div>
    <div class="team-container">
      <team-widget></team-widget>
    </div>
  </div>
</template>

<script>
  import TeamWidget from 'widgets/TeamWidget'
  export default {
    components: {
      TeamWidget
    },
    name: 'battle-widget'
  }
</script>

<style scoped>
  @import "../styles/ui.scss";
  #container {
    width: 100%;
    height: 100%;
    .team-container {}
  }
</style>
