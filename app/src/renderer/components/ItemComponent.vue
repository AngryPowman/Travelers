<template>
  <div class="item-container">
    <el-row :gutter="10">
      <el-col :sm="4">
        <div class="icon-block">
          <el-badge :hidden="$props.item.count <= 1" :value="$props.item.count" :max="9999" class="item el-ext-badge orange">
            <img class="item-icon" :src="getItemIcon($props.item)" />
          </el-badge>
        </div>
      </el-col>

      <el-col :sm="15">
        <div class="info-block">
          <div class="item-title">{{$props.item.name}}</div>
          <div class="item-description">{{$props.item.description}}</div>
          <div class="item-tips" v-show="$props.item.allow_use">{{getItemTips($props.item)}}</div>
        </div>
      </el-col>

      <el-col :sm="5">
        <div class="op-block">

          <el-button type="success" size="small" v-show="$props.item.item_type">
            {{getItemOP($props.item)}}
          </el-button>

          <el-button type="danger" size="small" v-show="$props.item.item_type">
            丢弃
          </el-button>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<style lang="scss" scoped>
  @import '../styles/game-effects';
  .item-container {
    text-align: left;
    border-bottom: 1px solid #dfe6ec;
    padding: 10px 0px 10px 0;
    &:hover {
      background: #eee;
      transition: background 0.1s ease;
    }
    .icon-block {
      .item-icon {
        width: 50px;
        padding-left: 16px;
      }
    }
    .info-block {
      .item-title {
        font-weight: 600;
        font-size: 18px;
      }
      .item-description {
        font-weight: 100;
        font-size: 14px;
        color: darkgray;
      }
      .item-tips {
        padding-top: 12px;
        color: dodgerblue;
        font-size: 14px;
      }
    }
    .op-block {
      margin: auto 0;
      height: 100%;
    }
  }
</style>

<script>
  var GameDef = require("../scripts/game-definition.js");
  export default {
    name: 'item-component',
    props: ["item"],
    data() {
      return {

      }
    },
    computed: {

    },
    methods: {
      getItemIcon: function(item) {
        return require("assets/images/items/" + item.icon)
      },
      getItemTips: function(item) {
        if (item.custom_tips) {
          return item.custom_tips;
        }

        if (item.item_type !== undefined) {
          return GameDef.ItemTypeDescription[item.item_type].tips;
        }

        return "";
      },
      getItemOP: function(item) {
        if (item.item_type !== undefined) {
          return GameDef.ItemTypeDescription[item.item_type].op;
        }

        return "";
      },
      allowUse: function(item) {
        return item.item_type !== GameDef.ItemType.Default;
      }

    }
  }
</script>