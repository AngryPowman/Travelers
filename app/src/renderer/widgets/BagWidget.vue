<template>
  <div class="bag-container">
    <item-component v-for="item of items" :item="item"></item-component>
  </div>
</template>

<style lang="scss" scoped>
  .bag-container {
    height: 800px;
    overflow: scroll;
  }
</style>

<script>
  import ItemComponent from 'components/ItemComponent';
  import ResourceManager from 'scripts/manager/resource-manager';

  export default {
    components: {
      ItemComponent,
    },
    name: 'bag-widget',
    created: function() {
      this.$data.items = ResourceManager.config.items;
    },
    data() {

      return {
        items: [
          // {
          //   name: "狼人杀的Cosplay道具",
          //   icon: require("assets/images/items/11.png"),
          //   description: "狼人杀玩家的cosplay道具",
          //   count: 199,
          //   allow_use: true,
          //   item_type: 1, // 0 - 常规（不允许使用），1 - 普通物品, 2 - 装备， 3 - 书籍（阅读）
          //   custom_tips: "看起来并没有什么用" //优先取该字段
          // },
          // {
          //   name: "没有火药的木桶",
          //   icon: require("assets/images/items/65.png"),
          //   description: "看起来没什么用，装了火药之后威力无穷",
          //   count: 3,
          //   allow_use: true,
          //   item_type: 2,
          // },
          // {
          //   name: "小黄书",
          //   icon: require("assets/images/items/1000.png"),
          //   description: "书中自有不可描述",
          //   allow_use: true,
          //   count: 1,
          //   item_type: 3
          // },
          // {
          //   name: "翡翠项链",
          //   icon: require("assets/images/items/12.png"),
          //   description: "上面的翡翠是假的",
          //   allow_use: true,
          //   count: 200,
          //   item_type: 2,
          // },
          // {
          //   name: "神父的皇冠",
          //   icon: require("assets/images/items/20.png"),
          //   description: "估计也是假的"
          // },
          // {
          //   name: "不普通的帽子",
          //   icon: require("assets/images/items/32.png"),
          //   description: "也并没有那么特殊啦"
          // },
          // // {
          // //   name: "绿色的东西不知道是什么",
          // //   icon: require("assets/images/items/24.png"),
          // //   description: "RT"
          // // },
          // {
          //   name: "斗篷",
          //   icon: require("assets/images/items/56.png"),
          //   description: "可以击落太阳和美国卫星的手枪。"
          // },
          // {
          //   name: "黄帽子",
          //   icon: require("assets/images/items/21.png"),
          //   description: "要是绿色的话就完美了"
          // },
          // {
          //   name: "莱因哈特的盔甲",
          //   icon: require("assets/images/items/16.png"),
          //   description: "可以击落太阳和美国卫星的手枪。"
          // }
        ]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>