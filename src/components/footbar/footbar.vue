<template>
  <v-bottom-navigation color="#4adfff"
                       background-color="#232436"
                       shift
                       height="80px"
                       dark
                       absolute
                       class="footbar">
    <v-btn height="50px"
           to="/home"
           :ripple="false"
           active-class="animated flipInX"
           style="text-decoration:none">
      <span class="mt-2">遇见</span>
      <v-icon>person_pin</v-icon>
    </v-btn>

    <v-btn height="50px"
           to="/circle"
           :ripple="false"
           active-class="animated flipInX"
           style="text-decoration:none">
      <span class="mt-2">圈子</span>
      <v-icon>camera</v-icon>
    </v-btn>

    <v-btn height="50px"
           to="/chat"
           :ripple="false"
           active-class="animated flipInX"
           style="text-decoration:none">
      <span class="mt-2">聊天</span>
      <v-icon>forum</v-icon>
    </v-btn>

    <v-btn height="50px"
           to="/mine"
           :ripple="false"
           active-class="animated flipInX"
           style="text-decoration:none">
      <span class="mt-2">我的</span>
      <v-icon>face</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data () {
    return {}
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.footbar {
  bottom: 0;
  z-index: 999;
}
</style>
