<template>
  <v-container fluid>
    <v-row align=center
           class="my-12 mx-11">
      <h1 class="display-2">占位区</h1>
    </v-row>
    <v-row class="w1">
      <v-icon class="ml-10">lock_outline</v-icon>
      <div class="ml-2">密码</div>
    </v-row>
    <v-row class="d-flex mt-2 mx-7"
           no-gutters>
      <v-text-field v-model="password"
                    placeholder="请输入密码"
                    :type="show1 ? 'text' : 'password'"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    maxlength="32"
                    @click:append="show1 = !show1"></v-text-field>
    </v-row>
    <v-row class="body-2">
      <v-col class="float-left ml-9 ">
        <a href="/opinion"
           style="text-decoration:none">登录遇到问题</a>
      </v-col>
      <v-col class="float-right mr-n12">
        <a href="/yzm"
           style="text-decoration:none">验证码登录</a>
      </v-col>
    </v-row>
    <v-row>
      <v-btn v-if="password != ''"
             large
             color="#4adfff"
             rounded
             absolute
             dark
             onlined
             @click="checkNo()"
             style="left:30%; right:30%; top:50%; width:40%; text-decoration:none">确定</v-btn>
      <v-btn v-else
             large
             color="#c7c7c7"
             rounded
             absolute
             dark
             onlined
             @click="snackbar1 = true"
             style="left:30%; right:30%; top:50%; width:40%; text-decoration:none">确定</v-btn>
      <v-snackbar v-model="snackbar1"
                  :timeout="timeout"
                  absolute
                  style="top:-80%">
        {{ text1 }}
        <v-btn color="blue"
               text
               @click="snackbar1 = false">
          关闭
        </v-btn>
      </v-snackbar>
      <v-snackbar v-model="snackbar2"
                  :timeout="timeout"
                  absolute
                  style="top:-80%">
        {{ text2 }}
        <v-btn color="blue"
               text
               @click="snackbar2 = false">
          关闭
        </v-btn>
      </v-snackbar>
    </v-row>

  </v-container>
</template>

<script>
export default {
  data () {
    return {
      iconName: "radio_button_checked",
      password: "",
      show1: false,
      snackbar1: false,
      snackbar2: false,
      snackbar3: false,
      text1: '请输入密码',
      text2: '密码不正确，请重新输入',
      timeout: 2000,
    }
  },
  methods: {
    checkNo () {
      let number = parseInt(this.password)
      let numlen = number.length
      if (this.numlen < 6) {
        this.snackbar2 = true
        this.password = ''
      } else {
        this.$router.push('/home')
      }
    },
    changeAgree () {
      this.agree = !this.agree
    }
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
}

.clear {
  clear: both;
  margin-top: 76px;
}

.xieyi {
  position: absolute;
  bottom: 10px;
  font-size: 10px;
  left: 14%;
  right: 14%;
}
</style>

