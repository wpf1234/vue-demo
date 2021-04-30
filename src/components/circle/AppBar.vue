<template>
  <div class="app-bar">
    <span class="app-bar_l" @click="$emit('left')">
      <!-- <i :class="['fa', `fa-${left}` ,'fa-2x'] "></i> -->
      <v-icon color="#fafafa">{{left}}</v-icon>
    </span>
    <h3>{{ title }}</h3>
    <span class="app-bar_r" @click="$emit('right')">
      <!-- <i :class="['fa', `fa-${right}` , 'fa-2x'] "></i> -->
      <!-- <v-menu transition="scroll-y-transition">
        <template v-slot:activator="{ on }">
          <v-icon color="#fafafa" v-on="on">{{right}}</v-icon>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n" link>
            <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
      <v-icon color="#fafafa" @click="publish">{{right}}</v-icon>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    left: {
      type: String,
      default: 'chevron-left'
    },
    right: {
      type: String,
      default: 'ellipsis-v'
    }
  },
  //方法集合
  methods: {
    publish(){
      this.$router.push({path: '/publish'})
    }
  },
}
</script>

<style lang="less">
.app-bar {
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  height: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 15px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);

  h3 {
    display: flex;
    justify-content: center;
    flex: 1;
  }
  span {
    padding: 0 20px;
  }
}
</style>
