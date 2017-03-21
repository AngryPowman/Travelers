<template>
  <div class="effect-container">
    <div ref="effect" v-show="effectClass" :class="effectClass"></div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../styles/game-effects';
  .effect-container {
    position: relative;
    #effect {
      position: absolute;
    }
  }
</style>

<script>
  export default {
    name: 'effect-component',
    data() {
      return {
        effectEndListener: null,
        effectClass: "",
        _animationEndLock: false
      }
    },
    methods: {
      play: function(animationName, animationEnd) {
        this.$data._animationEndLock = false;
        this.$refs.effect.addEventListener("animationend", (animation) => {

          // Sprite animation group by two animations, it leds to 'animationend' event fires more than once
          // Lock variable assure 'animationend' event fires once
          if (this.$data._animationEndLock) {
            return;
          }

          console.log("Effect animation '%s' finished.", animationName);

          if (animationEnd) {
            animationEnd();
          }

          this.$data.effectClass = "";
          this.$data._animationEndLock = true;

        }, true);


        this.$data.effectClass = animationName;
      }
    }
  }
</script>