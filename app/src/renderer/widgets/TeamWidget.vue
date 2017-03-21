<template>
  <div class="team-container">
    <span v-for="character of $props.team">
      <battle-character-component :ref="character.name" :character="character"></battle-character-component>
    </span>
  </div>
</template>

<style lang="scss" scoped>
  .team-container {
    text-align: center;
    width: 100%;
  }
</style>

<script>
  var BattleCharacterComponent = require('components/BattleCharacterComponent')
  export default {
    components: {
      BattleCharacterComponent
    },
    name: 'team-widget',
    props: ['team'],
    methods: {
      getCharacterComponent: function(id) {
        var result = null;
        this.$props.team.findIndex((element) => {
          if (element.id == id) {
            result = this.$refs[element.name][0];
          }
        });

        return result;
      },
      castSkill: function(character, target) {

      }
    },
    data() {
      return {}
    }
  }
</script>