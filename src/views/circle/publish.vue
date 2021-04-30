<!--  -->
<template>
   <div class='publish'>
        <v-container style="height: 800px;" >
            <v-app-bar
              absolute
              color="#232436"
              
            >
            <v-btn icon>
                <v-icon color="#fafafa" @click="previous">chevron_left</v-icon>
            </v-btn>
        
              <v-spacer></v-spacer>
        
              <v-btn icon>
                <v-icon color="#fafafa" @click="publish">publish</v-icon>
              </v-btn>
            </v-app-bar>
            <v-textarea class="text"
                clearable
                name="input-7-1"
                placeholder="请输入内容"
                v-model="content"
            ></v-textarea>

            <!-- <v-item-group class="ml-10 mb-3">
                <v-btn
                    width="80"
                    height="80" 
                    icon 
                    class="btn mr-2"
                    v-for="(a,index) in array"
                    :key="index"   
                >
                    <v-icon color="#333" @click="upload" class="add_btn">add</v-icon>
                    <div class="remove_btn" >
                        <v-icon color="#B71C1C" v-show="show" @click="remove(index)">remove_circle</v-icon>
                    </div>
                </v-btn>
            </v-item-group> -->
            <v-row>
                <v-col 
                    v-for="(a,index) in array"
                    :key="index"
                    max-width="62"
                >
                    <v-img 
                        class="bgm"
                        :src="a.bgm"
                        height="80"
                        width="80"
                        zIndex="1"
                        @click="upload"
                    >
                    <span>+</span>
                    </v-img>
                    <div class="remove_btn" >
                        <v-icon color="#B71C1C" v-show="a.show" @click="remove(index)">remove_circle</v-icon>
                    </div>
                </v-col>
            </v-row>
            
            <input type="file" class="upload" ref="upload" @change="changeimg" >
            <!-- <v-overlay
                :absolute="absolute"
                :opacity="opacity"
                :value="overlay"
                :z-index="zIndex"
            >
            <v-card
                class="mx-auto"
                max-width="350"
                
            >
                <v-list >
                <v-list-item-group color="primary">
                    <v-list-item
                    v-for="(item, i) in options"
                    :key="i"
                    align="center"
                    >
                        <v-list-item-content>
                            <v-list-item-title v-text="item" @click="option(item)"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
                </v-card>
            </v-overlay> -->

            <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-list>
                <v-list-item-group v-model="model" mandatory color="indigo">
                    <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    @click="choose(i)"
                    >
                        <v-list-item-icon>
                            <v-icon >{{item.icon}}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content> 
                    </v-list-item>
                </v-list-item-group>
                </v-list>
            </v-card>

            <div class="text-center">
                <v-btn 
                    width="330"
                    height="60"
                    color="#232436"
                    rounded 
                    dark  
                    class="mt-4 mb-4"
                    @click="publish"
                >完 成</v-btn>
            </div>

          </v-container>
   </div>
</template>

<script>
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
       return {
            absolute: true,
            opacity: 0.46,
            overlay: false,
            zIndex: 5,
            content: '',
            num: 0,
            model: 0,
            auth: 0,
            items:[
                {
                    icon: 'language',
                    text: '完全公开'
                },
                {
                    icon: 'visibility_off',
                    text: '公开--匿名'
                },
                {
                    icon: 'people',
                    text: '好友可见'
                },
                {
                    icon: 'lock',
                    text: '仅个人'
                }
            ],
            options:[
                '拍摄',
                '从相册选择',
                '取消'
            ],
            array: [
                {
                    id: 0,
                    bgm: '',
                    show: false,
                }
            ],
            pictures:[]
        };
    },
    //方法集合
    methods: {
        previous(){
            this.$router.go(-1)
        },
        choose(val){
            console.log(val) 
            this.auth = val 
        },
        publish(){
            console.log(this.auth)
            console.log(this.content)
            
        },
        upload(){
            // 显示遮罩层
            // this.overlay = !this.overlay
            let uploadbtn = this.$refs.upload
            // console.log(uploadbtn);
            uploadbtn.click()
            
        },
        async changeimg (e) {
            let formData=new FormData()
            formData.append('file', e.target.files[0])
            console.log("ddddddddd: "+e.target.files[0].name);
            const res = await this.$http.post("dynamic/upload",formData)
            console.log(res.data)
            const picture = res.data.data.picture
            const bgm = this.$base + picture
            let num = this.num
            this.array[num].bgm = bgm
            console.log(this.array[num].bgm)
            
            if (this.array.length < 9){
                this.array.push({})
                if (this.array[num].bgm !== ''){
                    this.array[num].show= true
                }
            }
            this.num = this.num +1
        },
        remove(index){
            if (this.array.length > 1){
                this.array.pop(index)
                this.array[index].show = false
            }
            
        },

        option(item){
            if (item === '拍摄'){
                let cmr = plus.camera.getCamera()
                cmr.captureImage(
                    function(p){
                        plus.io.resolveLocalFileSystemURL(
                            p,
                            function(entry){
                                compressImage(entry.toLocalURL(),entry.name);
                            },
                            function(e){
                                plus.nativeUI.toast("读取拍照文件错误: "+e.message);
                            }
                        );
                    },
                    function(e){},
                    {
                        filter: "image"
                    }
                );
            }else if (item === '从相册选择'){
                plus.gallery.pick(
                    function(e){
                        let name = e.substr(e.lastIndexOf("/")+1);
                        compressImage(e,name);
                    },
                    function(e){},
                    {
                        filter: "image"
                    }
                )
            }else{
                this.overlay = false
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
<style lang='less' scoped>
/* @import url(); 引入公共css类 */
    .text{
        padding-top: 70px;
    }
    .btn{
        border: 1px dashed #333;
    }
    .bgm{
        border: 1px dashed #333;
        text-align: center;
        font-size: 20px;
    }
    span{
        position: absolute;
        margin-top: 26px;
        margin-left: -4px;
        opacity: 0.6;
    }
    .add_btn{
       position: relative;
    }
    .remove_btn{
        position: absolute;
        margin-top: -93px;
        margin-left: 67px;
    }

    .upload{
        height: 0;
        width: 0;
        visibility: hidden;
    }
</style>