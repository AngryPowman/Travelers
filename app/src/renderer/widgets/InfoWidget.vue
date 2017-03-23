<template>
  <div class="info-container">
    <el-tabs v-model="activeName" class="el-ext-game-menu">
      <el-tab-pane label="👀 概况" name="role">
        <transition name="tab">
          <role-info-widget v-if="activeName == 'role'"></role-info-widget>
        </transition>
      </el-tab-pane>
      <el-tab-pane label="🎒 背包" name="items">
        <transition name="tab">
          <bag-widget v-if="activeName == 'items'"></bag-widget>
        </transition>
      </el-tab-pane>
      <el-tab-pane label="🔥 能力" name="skill">
        <transition name="tab">
        </transition>
      </el-tab-pane>
      <el-tab-pane label="😈 英雄" name="heroes">
        <transition name="tab">
        </transition>
      </el-tab-pane>
      <el-tab-pane label="⛪ 营地" name="camp">
        <transition name="tab">
        </transition>
      </el-tab-pane>
      <el-tab-pane label="📚 故事" name="story">
        <transition name="tab">
        </transition>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
  @import '../styles/global';
  .tab-enter-active,
  .tab-leave-active {
    transition: opacity .2s
  }
  
  .info-container {
    width: 100%;
    // height: $PANEL_HEIGHT;
    .role-info-container {
      width: 100%;
    }
  }
</style>

<script>
  import RoleInfoWidget from 'widgets/RoleInfoWidget'
  import BagWidget from 'widgets/BagWidget'
  export default {
    components: {
      RoleInfoWidget,
      BagWidget
    },
    name: 'interaction-container',
    data() {
      return {
        activeName: 'role'

      }
    }
  }
</script>