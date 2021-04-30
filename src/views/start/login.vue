<template>
  <v-container fluid>
    <v-row align=center
           class="my-12 mx-11">
      <h1 class="display-2">占位区</h1>
    </v-row>
    <v-row class="w1">
      <v-icon class="ml-10">smartphone</v-icon>
      <div class="ml-2">手机号码</div>
    </v-row>
    <v-row class="d-flex mt-2 mx-7"
           no-gutters>
      <v-text-field v-model="phoneno"
                    placeholder="请输入手机号"
                    clearable
                    type="number"
                    maxlength="11"></v-text-field>
    </v-row>
    <v-row>
      <v-btn v-if="phoneno != ''"
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
      <v-snackbar v-model="snackbar3"
                  :timeout="timeout"
                  absolute
                  style="top:-80%">
        {{ text3 }}
        <v-btn color="blue"
               text
               @click="snackbar3 = false">
          关闭
        </v-btn>
      </v-snackbar>
    </v-row>
    <div class="xieyi">
      <v-icon v-if="agree"
              color="#4adfff"
              dense
              @click="changeAgree()">check_box</v-icon>
      <v-icon v-else
              color="#c7c7c7"
              dense
              @click="changeAgree()">check_box_outline_blank</v-icon>
      <span>我已阅读并同意
        <a href="">《用户协议》</a>和
        <a href="">《隐私政策》</a>
      </span>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      iconName: "radio_button_checked",
      agree: true,
      phoneno: "",
      snackbar1: false,
      snackbar2: false,
      snackbar3: false,
      text1: '请输入手机号',
      text2: '手机号码不正确，请重新输入',
      text3: '未同意用户协议和隐私政策，不能为您提供服务',
      timeout: 2000,
    }
  },
  methods: {
    checkNo() {
      console.log(this.phoneno.length)
      if (this.phoneno.length == 11 && this.agree == true) {
        window.sessionStorage.setItem('phone', this.phoneno)
        this.$router.push('/password')
      } else if (this.agree == false) {
        this.snackbar3 = true
      } else if (this.phoneno.length != 11) {
        this.snackbar2 = true
        this.phoneno = ''
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
