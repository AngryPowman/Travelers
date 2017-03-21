<template>
  <div class="battle-character-container">
    <div v-show="damageValue != 0" :class="{'damage-value': true, 'damage': damageValue < 0, 'cure': damageValue >= 0}">
      <div ref="damageValueEffect" :class="{'float-value': damageValue != 0}">{{damageValueStr}}</div>
    </div>

    <div :class="actionEffect">
      <div :class="hueEffect"></div>
      <effect-component ref="skillEffect" class="skill-effect"></effect-component>
      <effect-component ref="onHitEffect" class="skill-effect"></effect-component>
      <div class="battle-character">
        <img class="avatar" :src="this.$props.character.avatar"></img>
        <div class="info-container">
          <div class="backdrop"></div>
          <div class="progress" :style="renderProgressStyle(character)"></div>
          <div class="character-name">{{character.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../styles/game-effects";
  .battle-character-container {
    display: inline-block;
    position: relative;
    margin: 0px 8px 0px 8px;
    .skill-effect {
      position: absolute;
      left: -80%;
      top: -80%;
      opacity: .8;
      z-index: 100;
    }
    .battle-character {
      border: 1px solid white;
      .avatar {
        width: 70px;
        height: 70px;
      }
      .info-container {
        position: relative;
        .character-name {
          position: absolute;
          color: white;
          font-size: 11px;
          padding: 1px;
          text-shadow: #000 1px 1px 1px;
          width: 70px;
          height: 14px;
          bottom: 10%;
        }
        .backdrop,
        .progress {
          position: absolute;
          bottom: 10%;
          width: 70px;
          height: 14px;
        }
        .backdrop {
          background: white;
          opacity: 0.6;
        }
        .progress {
          background: red;
          opacity: 0.8;
        }
      }
    }
  }
</style>

<script>
  import EffectComponent from 'components/EffectComponent'
  export default {
    components: {
      EffectComponent
    },
    name: 'battle-character-component',
    props: ['character'],
    data() {
      return {
        hueEffect: "",
        actionEffect: "",
        damageValue: 0,
        damageValueStr: ''
      }
    },
    methods: {
      renderProgressStyle: function(character) {
        var background = '#CC0000'
        var currentPercent = character.hp / character.maxHp * 100
        if (currentPercent >= 85) {
          background = '#CC0000';
        } else if (currentPercent >= 60) {
          background = '#E63F00';
        } else if (currentPercent >= 30) {
          background = '#EE7700';
        } else if (currentPercent < 20) {
          background = '#DDAA00';
        }

        return {
          width: currentPercent + '%',
          background: background,
          transition: "all 1s ease"
        }
      },
      setActionEffect: function(actionClass) {
        this.$data.actionEffect = "";
        setTimeout(() => {
          this.$data.actionEffect = actionClass;
        }, 0);
      },
      setHueEffect: function(hueClass) {
        this.$data.hueEffect = "";
        setTimeout(() => {
          this.$data.hueEffect = hueClass;
        }, 0);
      },
      clearAllEffects: function() {
        this.setHueEffect("");
        this.setActionEffect("");
      },
      playSkill: function(skill, targets, onSpellIteration, onHitIteration) {
        this.setHueEffect("action-effect spell-blink");
        this.setActionEffect(skill["effect"]["spell_action"]);
        this.$refs.skillEffect.play(skill["effect"]["spell_animation"], () => {
          this.clearAllEffects();

          if (onSpellIteration) {
            onSpellIteration(this, this.$props.character, skill);
          }

          if (targets.length > 0) {
            targets.forEach((target) => {
              target.onHit(this.$props.character, skill, onHitIteration);
            }, this);
          }
        });

      },
      showDamageValue: function(value) {
        this.$refs.damageValueEffect.addEventListener("animationend", (animation) => {
          this.$data.damageValue = 0;
          this.$data.damageValueStr = '';
        }, true);

        this.$data.damageValue = value;

        if (value === -1) { // Lucky egg
          this.$data.damageValueStr = '-1s';
        } else if (value === 1) {
          this.$data.damageValueStr = '+1s';
        } else {
          this.$data.damageValueStr = Math.abs(value).toString();
        }

      },
      onHit: function(casterData, skillData, onHitIteration) {

        this.$refs.onHitEffect.play(skillData["effect"]["onhit_animation"], () => {
          console.log("【%s】On Hit from %o by %o", this.$props.character.name, casterData, skillData);

          if (onHitIteration) {
            onHitIteration(this, casterData, this.$props.character);
          }
        });

        this.setHueEffect("action-effect onhit-blink");
        this.setActionEffect(skillData["effect"]["onhit_action"]);
      }
    }
  }
</script>