<template>
  <div class="battle-character-container">
    <div :class="{'damage-value': true, 'damage': damageValue < 0, 'cure': damageValue >= 0}">
      <div class="float-value">{{Math.abs(damageValue)}}</div>
    </div>

    <div :class="actionEffect">
      <div :class="hueEffect"></div>
      <effect-component ref="skillEffect" class="skill-effect"></effect-component>
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
  @import url("http://fonts.googleapis.com/css?family=VT323");
  @import url("http://fonts.googleapis.com/css?family=Passero%20One");
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
        damageValue: -2234,
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
      playSkill: function(skill, targets) {
        this.setHueEffect("action-effect spell-blink");
        this.setActionEffect(skill["effect"]["spell_action"]);
        this.$refs.skillEffect.play(skill["effect"]["spell_animation"], () => {
          this.setHueEffect("");
          this.setActionEffect("");
          if (targets.length > 0) {
            targets.forEach(function(target) {
              target.onHit(this.$props.character, skill);
            }, this);
          }
        });

      },
      onHit: function(casterData, skillData) {
        console.log("【%s】On Hit from %o by %o", this.$props.character.name, casterData, skillData);
        this.$refs.skillEffect.play(skillData["effect"]["onhit_animation"], null);

        this.setHueEffect("action-effect onhit-blink");
        this.setActionEffect(skillData["effect"]["onhit_action"]);
      }
    }
  }
</script>