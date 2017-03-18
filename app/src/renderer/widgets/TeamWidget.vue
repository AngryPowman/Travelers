<template>
  <div>
    <div class="chracter" v-for="character of characters">
      <img class="avatar" :src="character.avatar"></img>
      <div class="info-bar"></div>
      <div class="progress" width="40%"></div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>

<script>
  export default {
    components: {},
    name: 'team-widget',
    data () {
      return {
        characters: [{
          name: '愤怒的泡面1',
          avatar: '../imgs/powman.png',
          hp: 300
        }, {
          name: '愤怒的泡面1',
          avatar: './assets/powman.png',
          hp: 300
        }, {
          name: '愤怒的泡面1',
          avatar: 'assets/powman.png',
          hp: 300
        }, {
          name: '愤怒的泡面1',
          avatar: '../assets/powman.png',
          hp: 300
        }, {
          name: '愤怒的泡面1',
          avatar: '../assets/powman.png',
          hp: 300
        }]
      }
    }
  }
</script>
