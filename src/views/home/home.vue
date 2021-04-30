<template>
  <div class="home">
    <baidu-map class="map"
               :center="center"
               :zoom="zoom"
               :scroll-wheel-zoom="true"
               @ready="handler">
      <bm-marker :position="position"
                 @click="infoWindowOpen"
                 animate="BMAP_ANIMATION_BOUNCE"
                 :icon="{
          url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif',
          size: { width: 260, height: 157 },
        }">
        <bm-info-window :show="show"
                        @close="infoWindowClose"
                        @open="infoWindowOpen">
          <div class="info"
               v-html="str"></div>
        </bm-info-window>
      </bm-marker>
    </baidu-map>

    <div class="foot">
      <FootBar />
    </div>
  </div>
</template>

<script>
import FootBar from '../../components/footbar/footbar.vue'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    FootBar,
  },
  data () {
    //这里存放数据
    return {
      center: {
        lng: 0,
        lat: 0,
      },
      zoom: 15,
      position: {
        lng: 0.0,
        lat: 0.0,
      },
      show: false,
      str: '',
    }
  },
  //方法集合
  methods: {
    handler ({ BMap, map }) {
      let _this = this // 设置一个临时变量指向vue实例，因为在百度地图回调里使用this，指向的不是vue实例；
      var geolocation = new BMap.Geolocation()
      // 开启SDK辅助定位
      geolocation.enableSDKLocation()
      geolocation.getCurrentPosition(
        function (r) {
          console.log(r)
          _this.center = { lng: r.longitude, lat: r.latitude } // 设置center属性值
          _this.autoLocationPoint = { lng: r.longitude, lat: r.latitude } // 自定义覆盖物
          _this.initLocation = true
          _this.position.lng = r.point.lng
          _this.position.lat = r.point.lat
          _this.str =
            '当前位置: <br/> 经度: ' + r.latitude + '<br/> 纬度: ' + r.longitude
        },
        { enableHighAccuracy: true }
      )

      window.map = map
    },
    infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () { },
}
</script>
<style lang="less" scoped>
/* @import url(); 引入公共css类 */
/* .home {
  height: 90%;
  width: 100%;
} */
* {
  margin: 0;
  padding: 0;
}

element.style {
  height: 760px;
}
.map[data-v-39f87be5] {
  height: 760px;
}

.v-application .info {
  font-size: 20px;
  background-color: #fff !important;
}
</style>
