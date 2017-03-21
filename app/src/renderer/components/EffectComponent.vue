<template>
  <div class="effect-container">
    <div ref="effect" v-show="effectClass" :class="effectClass"></div>
    <!--<transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave" v-on:after-leave="afterLeave">
      <div ref="beHurtEffect" v-show="beHurtEffectClass" :class="beHurtEffectClass"></div>
    </transition>
    <div ref="spellEffect" :class="spellEffectClass"></div>
    <div ref="stateEffect" :class="stateEffectClass"></div>-->
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
        _animationEndLock: false,
        _animationEndCounter: 0, // To prevent 'animationend' be fired twice or more.
      }
    },
    methods: {
      play: function(animationName, animationEnd) {
        this.$data._animationEndLock = false;
        if (!this.$data.effectEndListener) {
          this.$data.effectEndListener = this.$refs.effect.addEventListener("animationend", (animation) => {

            // Sprite animation group by two animations, it leds to 'animationend' event fires more than once
            // Lock variable assure 'animationend' event fires once
            if (this.$data._animationEndLock) {
              return;
            }
            
            this.$data.effectClass = "";
            console.log("Effect animation '%s' finished.", animationName);

            if (animationEnd) {
              animationEnd();
            }

            this.$data._animationEndLock = true;

          }, true);
        }

        this.$data.effectClass = animationName;
      }
    }
  }
</script>