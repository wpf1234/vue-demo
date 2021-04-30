<template>
  
    <div class='circle'>
      <app-bar title="Circle of friend" left="search" right="create" />
      <nav class="tab-list">
        <ul>
          <li :class="liStyle1" @click="showList(recommend)" v-model="recommend">{{recommend}}</li>
          <li :class="liStyle2" @click="showList(friend)" v-model="friend">{{friend}}</li>
          <!-- <li>nature</li> -->
        </ul>
      </nav>
      
      <rec class="rec" :recommend="cards.recommend" v-show="showR" />
      <friend class="rec" :friend="cards.friend" v-show="showF" />
    <FootBar></FootBar>
  </div>
</template>

<script>
  import FootBar from '../../components/footbar/footbar.vue'
  import AppBar from '../../components/circle/AppBar.vue'
  import Recommend from '../../components/circle/Recommend.vue'
  import Friend from '../../components/circle/Friend.vue'
  export default {
    components: {
      FootBar,
      AppBar,
      'rec':Recommend,
      Friend
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
          //这里存放数据
          return {
            showR: true,
            showF: false,
            liStyle1: 'avatar_li__active',
            liStyle2: 'avatar_li',
            recommend:'推荐',
            friend: '好友',
            show: true,
            current:{
              head: require('../../assets/logo.png'),
              username: '哈哈哈'
            },
            cards:{
              recommend: [
                {
                  id: 1,
                  username: 'aaaaa',
                  head: require('../../assets/logo.png'),
                  content:'adfaswefasdfwaefasdfasdfasfagaw efqwegasedfg wetgergasdgas ',
                  // cover: require('../assets/logo.png'),
                  picture:[
                    require('../../assets/logo.png'),
                    require('../../assets/logo.png'),
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
                  like: true,
                  show: false,
                },
                {
                  id: 2,
                  username: 'bbbbbb',
                  head: require('../../assets/logo.png'),
                  content:'adfaswefasdfwaefasdfasdfasfagaw efqwegasedfg wetgergasdgas ',
                  // cover: require('../assets/logo.png'),
                  picture:[
                    require('../../assets/logo.png'),
                    require('../../assets/img/p2.jpg'),
                    require('../../assets/img/game1.jpg'),
                    require('../../assets/img/game0.jpg'),
                  ],
                  tm: 1588134243000,
                  favorite: 245,
                  comment: 3,
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
                  like: false,
                  show: false,
                },
                {
                  id: 3,
                  username: 'aaaaa',
                  head: require('../../assets/logo.png'),
                  content:'adfaswefasdfwaefasdfasdfasfagaw efqwegasedfg wetgergasdgas ',
                  // cover: require('../assets/logo.png'),
                  picture:[
                    require('../../assets/logo.png'),
                    require('../../assets/logo.png'),
                  ],
                  tm: 1588134243000,
                  favorite: 245,
                  comment: 3,
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
                  like: true,
                  show: false,
                },
              ],
              friend: [
                {
                  id: 1,
                  username: 'aaaaa',
                  head: require('../../assets/logo.png'),
                  content:'adfaswefasdfwaefasdfasdfasfagaw efqwegasedfg wetgergasdgas ',
                  // cover: require('../assets/logo.png'),
                  picture:[
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
                  like: true,
                  show: false,
                },
                {
                  id: 2,
                  username: 'bbbbb',
                  head: require('../../assets/logo.png'),
                  content: '这是内容,这是内容,这是内容,这是内容这是内容，这是内容，这是内容这是内容,这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
                  // cover: require('../assets/logo.png'),
                  picture:[
                    require('../../assets/img/p1.jpg'),
                    require('../../assets/img/p2.jpg'),
                    require('../../assets/img/game1.jpg'),
                    require('../../assets/img/game0.jpg'),
                  ],
                  tm: 1588134243000,
                  favorite: 512,
                  comment: 3,
                  comm_list:[
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
                  like: true,
                  show: false,
                },
              ],
            },
          }
        },
        //方法集合
        methods: {
          async getLists(){
            const res = await this.$http.get('dynamic')
            console.log(res.data);
            if (res.data.code !== 200){
                console.log(res.data.message);
            }
            const lists = res.data.data
            this.cards = lists
          },
          showList(val){
            console.log(val);
            
            if (val === '推荐'){
              this.liStyle1 = "avatar_li__active"
              this.liStyle2 = "avatar_li"
              this.showR = this.show
              this.showF = !this.show
            }else{
              this.liStyle2 = "avatar_li__active"
              this.liStyle1 = "avatar_li"
              this.showR = !this.show
              this.showF = this.show
            }
          }
        },
        //生命周期 - 创建完成（可以访问当前this实例）
        created() {
            
        },
        //生命周期 - 挂载完成（可以访问DOM元素）
        mounted() {

        },
  }
</script>
<style>
  /* @import url(); 引入公共css类 */
  /* @import url('./circle.less'); */
  .circle {
    height: 100%;
    width: 100%;
    overflow: hidden;
    color: white;
    background: linear-gradient(to top, #232526 2%, #414345 20%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    /* background-image: linear-gradient(to top, #99acbe 5%, #a8b3bf 20%, #cfd7dd); */
    /* background-color: #575872; */
  }

  .tab-list {
    margin: 0 2px;
    font-size: 18px;
    height: 40px;
  }

  .tab-list::after {
    content: '';
    display: block;
    height: 4px;
    background-image: linear-gradient(
      to left,
      #cfd7dd,
      #d7dde2 30%,
      #d7dde2 70%,
      #cfd7dd
    );
  }
  .tab-list ul {
    display: flex;
    list-style: none;
    
  }
  .tab-list li {
    padding: 16px 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    opacity: 0.9;
    width: auto;
    flex: 1;
    text-align: center;
  } 
  
  .avatar_li__active{
    font-size: 20px;
    opacity: 0.4;
  }

  .rec{
    margin-top: 40px;
  }
  /* .top{
      background-image: url('../../assets/logo.png');
      background-size: contain;
  } */
</style>