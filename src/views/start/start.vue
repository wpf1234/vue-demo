<template>
  <div style="margin-top:200px">
    <h1 style="text-align:center">启动页</h1>
    <h2 style="text-align:center">
      <span style="color:red">{{ time }}</span>秒后进入APP
    </h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      time: 0,
    }
  },
  methods: {
    countDown () {
      let THIS = this
      THIS.time--
    },
  },
  mounted () {
    let THIS = this
    THIS.time = 5
    setInterval(THIS.countDown, 1000)
  },
  watch: {
    time: function (newVal, oldVal) {
      if (newVal == 0) {
        this.$router.push('/guide')
      }
    },
  },
}
</script>

<style scoped>
body {
  background-color: #232436;
}
</style>
