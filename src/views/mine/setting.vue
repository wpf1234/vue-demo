<!-- 设置 -->
<template>
    <v-container class='setting'>

        <v-toolbar dense
                   flat
                   height="80"
                   color="#ffffff">
            <v-btn icon
                   class="mt-6"
                   :ripplr="false">
                <v-icon color="#4e2a40"
                        @click="previous">chevron_left</v-icon>
            </v-btn>

            <span class="title wDemiLight mt-6">设置</span>
            <v-spacer></v-spacer>
        </v-toolbar>

        <v-card class="mt-4"
                flat
                max-width="400"
                tile>
            <v-list rounded>
                <v-list-item>
                    <v-list-item-avatar size="60"
                                        @click="avatar">
                        <v-img :src="user.head"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="headtitle wLight">{{ user.username }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <input type="file"
                       class="upload"
                       ref="upload"
                       @change="changeimg">

                <v-list-item-group color="primary">
                    <v-list-item v-for="(item, i) in items"
                                 :key="i">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"
                                               class="wDemiLight"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
        <div class="text-center mt-6 wDemiLight">
            <v-btn rounded
                   color="error"
                   dark
                   width="200"
                   height="40"
                   @click="quit">
                退 出 账 号
            </v-btn>
        </div>
    </v-container>
</template>

<script>

export default {
    inject: ['reload'],
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data () {
        //这里存放数据
        return {

            user: {
                // id: 1,
                // head: require('../../assets/img/avatar.jpg'),
                // username: 'aaaaaa'
            },
            items: [
                { text: '安全', icon: 'lock' },
                { text: '通用', icon: 'settings_applications' },
                { text: '隐私', icon: 'pan_tool' },
                { text: '联系我们', icon: 'phone' },
                { text: '关于我们', icon: 'insert_photo' },
                { text: '意见反馈', icon: 'feedback' },
            ],
        };
    },
    //方法集合
    methods: {
        onReadyStateUpdate ({ name }) {
            console.log(name);

            const isSDKReady = name === this.$TIM.EVENT.SDK_READY ? true : false;
            //自动监听并更新 sdk 的ready 状态 （未登录是 notReady  登录后是ready）
            this.$store.commit("toggleIsSDKReady", isSDKReady);
            //sdk ready 后  肯定完成了登录操作    这里可以获取用户存储在im的基础信息/离线消息/黑名单列表
        },

        onReceiveMessage ({ data: messageList }) {
            // this.handleAt(messageList);
            this.$store.commit("pushCurrentMessageList", messageList);
        },
        previous () {
            this.$router.push('mine')
        },
        avatar () {
            // 显示遮罩层
            // this.overlay = !this.overlay
            let uploadbtn = this.$refs.upload
            // console.log(uploadbtn);
            uploadbtn.click()
        },
        async changeimg (e) {
            let formData = new FormData()
            formData.append('file', e.target.files[0])
            console.log("ddddddddd: " + e.target.files[0].name);
            const res = await this.$http.post("auth/upload", formData)
            console.log(res.data)
            const picture = res.data.data.picture
            const pic = this.$base + picture
            this.user.head = pic
        },
        quit () {
            // 清空 sessionStorage/localStorage
            // 回到登录页面
            window.sessionStorage.clear()
            window.localStorage.clear()
            // this.tim.logout()
            // this.$store.commit('reset')
            let promise = this.tim.logout()
            promise.then(function (imResponse) {
                console.log(imResponse.data); // 登出成功
                this.$store.commit('reset')
                // 取消绑定tim的各种事件
                this.tim.off(this.$TIM.EVENT.SDK_READY, this.onReadyStateUpdate);
                // SDK NOT READT
                this.tim.off(this.$TIM.EVENT.SDK_NOT_READY, this.onReadyStateUpdate);
                // 收到新消息
                this.tim.off(this.$TIM.EVENT.MESSAGE_RECEIVED, this.onReceiveMessage);
                // 会话列表更新
                this.tim.off(this.$TIM.EVENT.CONVERSATION_LIST_UPDATED, event => { })
            }).catch(function (imError) {
                console.warn('logout error:', imError);
            });
            this.$router.push('/login')

        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created () {
        // this.getUserInfo()
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted () {
        this.user = JSON.parse(window.localStorage.getItem('user'))
    },
}
</script>
<style lang='less' scoped>
/* @import url(); 引入公共css类 */
.title {
  font-size: 16px;
  position: relative;
  left: 100px;
  font-family: wDemiLight;
}
.upload {
  height: 0;
  width: 0;
  visibility: hidden;
}
.text-center {
  font-size: 30px;
}
.headtitle {
  font-size: 25px;
}
</style>