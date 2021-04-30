<!-- 推荐动态 -->
<template>
   <div class="recommend row pre-scrollable"> 
    
        <v-card 
        max-width="344"
        class="mx-4 mb-3"
        v-for="rec in recommend" 
        :key="rec.id"
        >   

            <v-list-item>
                <v-list-item-avatar >
                    <v-img :src="rec.head"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="headline">{{ rec.username }}</v-list-item-title>
                    <v-list-item-subtitle>{{ rec.tm | dateString }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <!-- <v-carousel cycle height="160">
                <v-carousel-item
                v-for="(pic,i) in rec.picture"
                :key="i"
                :src="pic"
                reverse-transition="fade-transition"
                transition="fade-transition"
                ></v-carousel-item>
            </v-carousel> -->

            <v-row>
                <v-col cols="12" sm="6" offset-sm="3">
                  <v-card>
                    <v-container fluid>
                      <v-row>
                        <v-col
                          v-for="(pic,i) in rec.picture"
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
            {{ rec.content }}
            </v-card-text>

            <v-card-actions>
                <v-btn
                    text
                    color="deep-purple accent-4"
                    @click="rec.show = !rec.show"
                >
                    <v-icon color="#888">speaker_notes</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                
                <v-row 
                    align="center"
                    justify="end"
                >
                    <v-icon 
                    class="mr-2" 
                    :style="{'color': `${rec.like}` === 'true'? '#cf0000' : '#666'}" 
                    @click=""
                    >mdi-heart</v-icon>
                    <span class="subheading mr-3 pr-3">{{rec.favorite}}</span>
                    <!-- <v-icon class="mr-1 pr-3" color="#666" @click="">thumb_up</v-icon> -->
                    <v-icon class="mr-1 pr-5" color="#666" @click="">add_comment</v-icon>
                </v-row>
            </v-card-actions>
            
            <v-expand-transition max-height="200">
                <v-list v-show="rec.show" three-line >
                    <template v-for="comm in rec.comm_list" >
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
            recommend:{
                type: Array
            }
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
        watch:{
        },
        //import引入的组件需要注入到对象中才能使用
        components: {
            
        },
        data() {
        //这里存放数据
            return {
        
            };
        },
        //方法集合
        methods: {

        },
        //生命周期 - 创建完成（可以访问当前this实例）
        created() {

        },
        //生命周期 - 挂载完成（可以访问DOM元素）
        mounted() {

        },
}
</script>
<style lang='less' scoped>
/* @import url(); 引入公共css类 */
    .recommend{
        max-height: 620px;
        padding: 16px;
    }
    .content{
        font-size: 16px;
    }

    .subheading{
        font-size: 20px;
    }
</style>