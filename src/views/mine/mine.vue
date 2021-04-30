<!-- 我的 -->
<template>
   <div class='mine '>

    <v-card class="overflow-hidden">
      <v-parallax
      height="220" 
      absolute
      dark
      :src="bgImage"
      shrink-on-scroll
      scroll-target="#scrolling-techniques-2"
      >

        <v-row>
          <v-btn icon>
            <v-icon color="#fafafa" @click="">view_headline</v-icon>
          </v-btn>
    
          <v-spacer></v-spacer>
    
          <v-btn icon>
            <v-icon color="#fafafa" @click="setting">settings</v-icon>
          </v-btn>
        </v-row>

        <v-row
              align="center"
              justify="center"
            >
              <v-col
                align="center"
                class="pa-0"
                cols="12"
              >
                <v-avatar
                  class="profile"
                  color="grey"
                  size="90"
                  tile
                >
                  <v-img :src="user.head"></v-img>
                </v-avatar>
                <v-list-item
                  color="#666"
                  dark
                >
                  <v-list-item-content>
                    <v-list-item-title class="title">{{user.username}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                
              </v-col>
            </v-row>
      </v-parallax>
 
      <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto"
        max-height="580"
      >
      <!-- :style="{ height: `${((my.length-1) / 2) * 350}` < 880? '880px' : `${((my.length-1) / 2) * 350}`+'px' }" -->
      <!-- :style="{ height: `${(my.length / 2) * 252}`+'px'}" -->
        <v-container 
        :style="{ height: `${((my.length+1) / 2) * 350}` < 600? '600px' : `${((my.length+1) / 2) * 350}`+'px' }"
        fluid
        >
          <v-row dense>
            <v-col
              v-for="(item,index) in my"
              :key="index"
              :cols="item.flex"
            >
              <v-card>
                <v-img
                  :src="item.picture[0]"
                  :lazy-src="item.picture[0]"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                  @click="detail(item.id)"
                  v-model="item.id"
                >
                  <span class="dynamicTm">{{ item.tm | dateString }}</span>
                </v-img>
    
                <v-card-actions>
                  <v-spacer></v-spacer>
  
                  <v-btn icon>
                    <v-icon>mdi-bookmark</v-icon>
                  </v-btn>
    
                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-card>

    <foot-bar></foot-bar>
  </div>
</template>

<script>
  import FootBar from '../../components/footbar/footbar.vue'
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
      FootBar
    },
    filters: {
      dateString (val) {
          // console.log("Time: "+val);
          //直接用 new Date(时间戳) 格式转化获得当前时间
          var timestamp4 = new Date(val);
          // console.log(timestamp4);
          //再利用拼接正则等手段转化为yyyy-MM-dd hh:mm:ss 格式
          let dateStr = timestamp4.toLocaleDateString().replace(/\//g, "-") + " " + timestamp4.toTimeString().substr(0, 8)
          console.log(dateStr); 
          return dateStr
      }
    },
    data() {
      // let userInfo = window.sessionStorage.getItem('user')
      // this.user = userInfo
        //这里存放数据
        return {
            user:{
              id: 1,
              head: require('../../assets/img/avatar.jpg'),
              username: 'aaaaaa'
            },
            bgImage: require('../../assets/img/star.jpg'),
            my: [
                  {
                    id: 1,
                    username: 'aaaaaaaa',
                    head: require('../../assets/img/avatar.jpg'),
                    content:'内容：围殴第三方呼我其符合i 奥斯卡的法规未发货 核实对方环球网股权按会计复核 请问古区唯一官方化工',
                    // cover: require('../assets/logo.png'),
                    picture:[
                      require('../../assets/img/p1.jpg'),
                      require('../../assets/img/p2.jpg'),
                      require('../../assets/img/game1.jpg'),
                      require('../../assets/img/game0.jpg'),
                    ],
                    tm: 1588134243000,
                    favorite: 245,
                    comment: 3,
                    comm_list:[
                      {
                        id: 2,
                        comm_user: 'bbbbb',
                        head: require('../../assets/logo.png'),
                        context: 'ghauieyurhayugagas',
                        tm:1588134398896,
                      },
                      {
                        id: 3,
                        comm_user: 'ccccc',
                        head: require('../../assets/logo.png'),
                        context: 'adgtryfghkfjh',
                        tm:1588134398896,
                      },
                      {
                        id: 4,
                        comm_user: 'ddddd',
                        head: require('../../assets/logo.png'),
                        context: 'sdfzxczcvbnmhjkl',
                        tm:1588134398896,
                      },
                    ],
                    flex: 12,
                  },
                  {
                    id: 2,
                    username: 'aaaaaaaa',
                    head: require('../../assets/img/avatar.jpg'),
                    content:'内容收到回复瓦尔法规和违规忽视的分化施工范围与',
                    // cover: require('../assets/logo.png'),
                    picture:[
                      require('../../assets/img/p2.jpg'),
                      require('../../assets/img/game1.jpg'),
                      require('../../assets/img/game0.jpg'),
                    ],
                    tm: 1588134243000,
                    favorite: 200,
                    comment: 2,
                    comm_list:[
                      {
                        id: 1,
                        comm_user: 'aaaaa',
                        head: require('../../assets/logo.png'),
                        context: 'ghauieyurhayugagas',
                        tm:1588134398896,
                      },
                      {
                        id: 3,
                        comm_user: 'ccccc',
                        head: require('../../assets/logo.png'),
                        context: 'adgtryfghkfjh',
                        tm:1588134398896,
                      },
                    ],
                    flex: 6,
                  },
                  {
                    id: 3,
                    username: 'aaaaaaaa',
                    head: require('../../assets/img/avatar.jpg'),
                    content:'的说法语文沟片区干啥雨刮器关于放弃购房逾期未是的复合弓IQ个语法群殴改回去高德',
                    // cover: require('../assets/logo.png'),
                    picture:[
                      require('../../assets/logo.png'),
                      require('../../assets/logo.png'),
                    ],
                    tm: 1588134243000,
                    favorite: 36,
                    comment: 2,
                    comm_list:[
                      {
                        id: 1,
                        comm_user: 'aaaa',
                        head: require('../../assets/logo.png'),
                        context: 'ghauieyurhayugagas',
                        tm:1588134398896,
                      },
                      {
                        id: 2,
                        comm_user: 'bbbb',
                        head: require('../../assets/logo.png'),
                        context: 'sdfzxczcvbnmhjkl',
                        tm:1588134398896,
                      },
                    ],
                    flex: 6,
                  },
                  {
                    id: 4,
                    username: 'aaaaaaaa',
                    head: require('../../assets/img/avatar.jpg'),
                    content:'驱蚊扣哈斯绝代风华if将大幅以前玩过IE；切好欺负也给鱼豆腐关于全覆盖气温越反感会发生',
                    // cover: require('../assets/logo.png'),
                    picture:[
                      require('../../assets/img/game1.jpg'),
                      require('../../assets/img/game0.jpg'),
                    ],
                    tm: 1588134243000,
                    favorite: 245,
                    comment: 2,
                    comm_list:[
                      {
                        id: 1,
                        comm_user: 'aaaaa',
                        head: require('../../assets/logo.png'),
                        context: 'ghauieyurhayugagas',
                        tm:1588134398896,
                      },
                      {
                        id: 3,
                        comm_user: 'ccccc',
                        head: require('../../assets/logo.png'),
                        context: 'adgtryfghkfjh',
                        tm:1588134398896,
                      },
                    ],
                    flex: 6,
                  },
                  {
                    id: 5,
                    username: 'aaaaaaaa',
                    head: require('../../assets/img/avatar.jpg'),
                    content:'哆嗦配齐配强环境欧普瑞推动国际化UI符合即可获取鄂锐公会',
                    // cover: require('../assets/logo.png'),
                    picture:[
                      require('../../assets/logo.png'),
                      require('../../assets/logo.png'),
                    ],
                    tm: 1588134243000,
                    favorite: 381,
                    comment: 2,
                    comm_list:[
                      {
                        id: 1,
                        comm_user: 'aaaa',
                        head: require('../../assets/logo.png'),
                        context: 'ghauieyurhayugagas',
                        tm:1588134398896,
                      },
                      {
                        id: 2,
                        comm_user: 'bbbb',
                        head: require('../../assets/logo.png'),
                        context: 'sdfzxczcvbnmhjkl',
                        tm:1588134398896,
                      },
                    ],
                    flex: 6,
                  },
                  {
                    id: 6,
                    username: 'aaaaaaaa',
                    head: require('../../assets/img/avatar.jpg'),
                    content:'adfaswefasdfwaefasdfasdfasfagaw efqwegasedfg wetgergasdgas ',
                    // cover: require('../assets/logo.png'),
                    picture:[
                      require('../../assets/img/p2.jpg'),
                      require('../../assets/img/game1.jpg'),
                      require('../../assets/img/game0.jpg'),
                    ],
                    tm: 1588134243000,
                    favorite: 200,
                    comment: 2,
                    comm_list:[
                      {
                        id: 1,
                        comm_user: 'aaaaa',
                        head: require('../../assets/logo.png'),
                        context: 'ghauieyurhayugagas',
                        tm:1588134398896,
                      },
                      {
                        id: 3,
                        comm_user: 'ccccc',
                        head: require('../../assets/logo.png'),
                        context: 'adgtryfghkfjh',
                        tm:1588134398896,
                      },
                    ],
                    flex: 6,
                  },
              ],  
        };
    },
    //方法集合
    methods: {
      setting(){
        this.$router.push('/setting')
      },
      async getDynamic(){
        // const res = await this.$http.get("auth/dynamic/mine")
        // if (res.data.code !== 200){
        //     // 登录失败,显示后端传来的 message
        //     console.log(res.data.message)
        // }
        // console.log(res.data.message)
        // this.my = res.data.data
        window.sessionStorage.setItem('dynamic',JSON.stringify(this.my))
      },
      detail(id){
        // console.log(id);
        this.$router.push('/detail')
        window.sessionStorage.setItem('dynamicId', id)
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getDynamic()
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
    },
  }
</script>
<style lang='less' scoped>
/* @import url(); 引入公共css类 */
.head{
  margin-top: 85px;
}
.profile{
  border-radius: 50%;
}
.listItem{
  position: relative;
  margin-top: -55px;
  margin-left: 70px;
  font-size: 16px;
}
.dynamicTm{
  font-size: 18px;
  margin-bottom: 10px;
  margin-left: 200px;
}
</style>