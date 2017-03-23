<template>
  <div class="role-info-container">
    <div class="header-brief">
      <avatar-component class="avatar" :url="roleData.avatar"></avatar-component>
      <div class="info-wrap">
        <div class="role-name allow-select">愤怒的泡面</div>
        <div class="bars">
          <div class="hp">
            <div class="backdrop"></div>
            <div class="progress"></div>
            <div class="label allow-select">800/1000</div>
          </div>
          <div class="energy">
            <div class="backdrop"></div>
            <div class="progress"></div>
            <div class="label allow-select">12003/54521</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
  .role-info-container {
    .header-brief {
      display: flex;
      width: 100%;
      .avatar {
        display: block;
        text-align: left;
        padding-top: 10px;
        padding-left: 22px;
      }
      .info-wrap {
        width: 100%;
        display: block;
        padding-top: 10px;
        padding-left: 16px;
        padding-right: 20px;
        padding: 10px 16px 0px 16px;
        .role-name {
          margin-bottom: 12px;
          text-align: left;
        }
        .bars {
          .progress,
          .backdrop,
          .label {
            position: absolute;
            height: 22px;
          }
          .label {
            text-align: center;
            width: 100%;
            color: antiquewhite;
            font-weight: 600;
            font-size: 16px;
            text-shadow: 1px 1px 0 #000;
          }
          .hp,
          .energy {
            position: relative;
          }
          .backdrop {
            background: #F0F0F0;
            width: 100%;
          }
          .hp {
            padding-bottom: 25px;
            .progress {
              background: #F14747;
              width: 80%;
            }
          }
          .energy {
            .progress {
              background: blue;
              ;
              width: 30%;
            }
          }
        }
      }
    }
  }
</style>

<script>
  import AvatarComponent from 'components/AvatarComponent'
  export default {
    components: {
      AvatarComponent
    },
    name: 'role-info-widget',
    data() {
      return {
        activeName: 'role',
        roleData: {
          avatar: require("../assets/images/avatars/angrypowman.png")
        }
      }
    }
  }
</script>