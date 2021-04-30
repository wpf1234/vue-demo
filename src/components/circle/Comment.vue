<!--  -->
<template>
   <div class='comment'>
    <v-expand-transition max-height="200">
        <v-list v-show="show" three-line>
            <template v-for="comm in comm_list" >
                <v-list-item>
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
   </div>
</template>

<script>
    export default {
        props:{
            show:{
                type: Boolean,
                default: false
            },
            comm_list: {
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
        //import引入的组件需要注入到对象中才能使用
        components: {},
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

</style>