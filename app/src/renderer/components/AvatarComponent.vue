<template>
  <div class="avatar-container">
    <img class="avatar" :src="this.$props.url" />
  </div>
</template>

<style lang="scss" scoped>
  @import '../styles/game-effects';
  .avatar-container {
    .avatar {
      border-radius: 100%;
      width: 90px;
      height: 90px;
    }
  }
</style>

<script>
  export default {
    name: 'avatar-component',
    props: ["url"],
    data() {
      return {
      }
    },
    methods: {
      setAvatar: function(url) {
        this.$data.url = url;
      }
    }
  }
</script>