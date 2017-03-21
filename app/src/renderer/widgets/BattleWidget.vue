<template>
  <div class="battle-view-container">
    <div class="enemies">
      <team-widget ref="enemiesWidget" :team="enemies"></team-widget>
    </div>
    <textarea class="battle-log-board" />
    <div class="team">
      <team-widget ref="teamWidget" :team="team"></team-widget>
    </div>
    <button @click="testBattle">Start Battle</button>
  </div>
</template>

<script>
  import TeamWidget from 'widgets/TeamWidget'
  var GameDef = require('../scripts/game-definition.js');

  export default {
    components: {
      TeamWidget
    },
    name: 'battle-widget',
    methods: {
      testBattle: function() {
        var casterData = this.findCharacterID("angrypowman");
        var onHitCount = 0; //用于记录是否每个目标都被攻击了

        // 技能施法吟唱回调
        var onSpellIteration = (component, character, skill) => {
          if (character.id === 'elder') {
            component.showDamageValue(1);
          }
        };

        // 角色受到技能打击回调
        var onHitIteration = (component, caster, character) => {
          character.hp -= 120;

          if (caster.id === 'elder') {
            component.showDamageValue(-1);
          } else {
            component.showDamageValue(-233);
          }

          onHitCount++;
          if (onHitCount === targets.length) {
            console.log("All targets onhit finished.");
            onHitCount = 0;

            setTimeout(() => {
              targets = ["kingwl"];
              this.castSkill(casterData.skills[0], "elder", ["kingwl"], 0, onSpellIteration, onHitIteration);
            }, 300);
          }

        };

        var targets = ["dongxiansheng", "wallace", "zapline", "xianggangjizhe"];
        this.castSkill(casterData.skills[0], "angrypowman", targets, 0, onSpellIteration, onHitIteration);
      },
      castSkill: function(skill, casterID, targetIDs, targetType, onSpellIteration, onHitIteration) {
        if (!targetType) {
          targetType = GameDef.BattleTargetType.ToEnemy;
        }

        console.log("[Cast skill] skill: %o, casterID: '%s', targetIDs: %o, targetType: %d", skill, casterID, targetIDs, targetType)

        var casterComponent = this.getCharacterComponent(casterID);
        var targetComponentList = [];
        for (const targetID of targetIDs) {
          var targetComponent = this.getCharacterComponent(targetID);
          if (targetComponent) {
            targetComponentList.push(targetComponent);
          }
        }

        casterComponent.playSkill(skill, targetComponentList, onSpellIteration, onHitIteration);
      },
      getCharacterComponent: function(id) {
        var teamWidget = this.$refs.teamWidget;
        var enemiesWidget = this.$refs.enemiesWidget;
        var component = null;

        component = teamWidget.getCharacterComponent(id);
        if (!component) {
          component = enemiesWidget.getCharacterComponent(id);
        }

        return component;
      },
      findCharacterID: function(id) {
        var result = null;
        var compareFunc = (element) => {
          if (element.id === id) {
            result = element;
          }
        };

        this.$data.enemies.findIndex(compareFunc);
        if (!result) {
          this.$data.team.findIndex(compareFunc);
        }

        return result;
      }
    },
    data() {
      // var powmanImg = require('assets/angrypowman.png');
      return {
        team: [{
          id: "angrypowman",
          name: '愤怒的泡面',
          avatar: require('assets/images/avatars/angrypowman.png'),
          maxHp: 1000,
          hp: 1000,
          skills: [{
            name: "龙吼",
            effect: {
              spell_animation: "effect-dragon-spell",
              onhit_animation: "effect-wind-attack",
              spell_action: "animated bounceIn",
              onhit_action: "animated shake",
            }

          }]
        }, {
          id: "kingwl",
          name: '王文璐',
          avatar: require('assets/images/avatars/kingwl.png'),
          maxHp: 1000,
          hp: 600
        }, {
          id: "vizee",
          name: '村长',
          avatar: require('assets/images/avatars/vizee.png'),
          maxHp: 1000,
          hp: 900
        }, {
          id: "doula",
          name: '柯小翔',
          avatar: require('assets/images/avatars/doula.png'),
          maxHp: 1000,
          hp: 100
        }, {
          id: "bigemon",
          name: '爆破鬼才胡大头',
          avatar: require('assets/images/avatars/bigemon.png'),
          maxHp: 1000,
          hp: 400
        }],
        enemies: [{
          id: "elder",
          name: '长者',
          avatar: require('assets/images/avatars/elder.png'),
          maxHp: 1000,
          hp: 700
        }, {
          id: "wallace",
          name: '华莱士',
          avatar: require('assets/images/avatars/wallace.png'),
          maxHp: 1000,
          hp: 600
        }, {
          id: "dongxiansheng",
          name: '特首董先生',
          avatar: require('assets/images/avatars/dongxiansheng.png'),
          maxHp: 1000,
          hp: 900
        }, {
          id: "xianggangjizhe",
          name: '香港记者',
          avatar: require('assets/images/avatars/xianggangjizhe.png'),
          maxHp: 1000,
          hp: 100
        }, {
          id: "zapline",
          name: '老肉鸡',
          avatar: require('assets/images/avatars/zapline.png'),
          maxHp: 1000,
          hp: 400
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/ui.scss";
  .battle-view-container {
    width: 100%;
    height: 100%;
    background: #1a1a1a;
    .team,
    .enemies {
      position: relative;
    }
    .team {
      top: 50%;
    }
    .enemies {
      top: 5%;
    }
  }
</style>