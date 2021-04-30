<!--  -->
<template>
   <div class='detail'>

    <v-card
    color="grey lighten-4"
    flat
    height="50px"
    tile
  >
    <v-toolbar dense color="#232436">
        <v-btn icon>
            <v-icon color="#fafafa" @click="previous">chevron_left</v-icon>
        </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="#fafafa">mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

  </v-card>

  
    <v-card
    max-width="355"
    class="mx-auto mt-5"
    >
    <v-list-item>
      <v-list-item-avatar color="grey" size="50">
          <v-img :src="dynamic.head"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{dynamic.username}}</v-list-item-title>
        <v-list-item-subtitle class="tm">{{dynamic.tm | dateString}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="(pic,i) in dynamic.picture"
                  :key="i"
                  class="d-flex child-flex"
                  cols="4"
                >
                  <v-card flat tile class="d-flex">
                    <v-img
                      :src="pic"
                      :lazy-src="pic"
                      aspect-ratio="1"
                      class="grey lighten-2"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>

    <v-card-text class="content">
        {{dynamic.content}}
    </v-card-text>

    
      <v-spacer></v-spacer>

      <v-card-actions>
            <v-row
                align="center"
                justify="end"
            >
                <v-icon class="mr-1" color="#CF0000">mdi-heart</v-icon>
                <span class="subheading mr-2">{{dynamic.favorite}}</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1">comment</v-icon>
                <span class="subheading mr-6">{{dynamic.comment}}</span>
            </v-row>
        </v-card-actions>

        <v-expand-transition max-height="200">
            <v-list three-line >
                <template v-for="comm in dynamic.comm_list" >
                    <v-list-item >
                        <v-list-item-avatar>
                        <v-img :src="comm.head"></v-img>
                        </v-list-item-avatar>
            
                        <v-list-item-content>
                            <v-list-item-title v-text="comm.comm_user" ></v-list-item-title>
                            <v-list-item-subtitle >{{ comm.tm | dateString }}</v-list-item-subtitle>
                            <v-list-item-subtitle v-text="comm.context" ></v-list-item-subtitle>
                        </v-list-item-content>
        
                    </v-list-item>
                </template>
              </v-list>
        </v-expand-transition>
    </v-card>
   </div>
</template>

<script>
    export default {
        props:{
            
        },
        watch:{
            '$router': 'getParams'
        },
        //import引入的组件需要注入到对象中才能使用
        components: {},
        filters: {
            dateString (val) {
                // console.log("Time: "+val);
                //直接用 new Date(时间戳) 格式转化获得当前时间
                var timestamp4 = new Date(val);
                // console.log(timestamp4);
                //再利用拼接正则等手段转化为yyyy-MM-dd hh:mm:ss 格式
                let dateStr = timestamp4.toLocaleDateString().replace(/\//g, "-") + " " + timestamp4.toTimeString().substr(0, 8)
                // console.log(dateStr); 
                return dateStr
            }
        },
        data() {
        //这里存放数据
            return {
                dynamic:{
                    
                }
            };
        },
        //方法集合
        methods: {
            previous(){
                this.$router.go(-1)
            },
            getInfo(){ 
                const id = window.sessionStorage.getItem('dynamicId')
                console.log(id);
                
                const str = window.sessionStorage.getItem("dynamic")
                const list = JSON.parse(str)
                this.dynamic = list[id - 1]
            }
        },
        //生命周期 - 创建完成（可以访问当前this实例）
        created() {
            this.getInfo()
        },
        //生命周期 - 挂载完成（可以访问DOM元素）
        mounted() {
            
        },
    }
</script>
<style lang='less' scoped>
/* @import url(); 引入公共css类 */
.tm{
    font-size: 16px;
}
.content{
    font-size: 20px;
    letter-spacing: 2px;
    line-height: 20px;
}
</style>
