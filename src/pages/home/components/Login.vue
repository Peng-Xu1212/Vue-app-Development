<template>
    <div class="login-canvas">
        <div class="login-title">
            <h1 class="title">LOGIN</h1>
        </div>
        <div class="wrapper-lg">
            <span class="iconfont label">&#xe633;</span>
            <input type="text" class="input-lg" placeholder="Email" v-model="emailname">
        </div>

        <div class="wrapper-pw">
            <span class="iconfont label">&#xe610;</span>
            <input type="password" class="input-pw" placeholder="Password" v-model="pin">
        </div>
        <!-- <div class="wrapper-login">
          <div class="login-input">
              <span class="iconfont label">&#xe633;</span>
              <input type="text" class="input" placeholder="Email" v-model="emailname">
          </div>
        </div>

        <div class="wrapper-password">
          <div class="login-password">
              <span class="iconfont label">&#xe610;</span>
              <input type="text" class="password" v-if="pwdType" v-model="pin">
              <input type="password" class="password" placeholder="Password" v-model="pin" v-else>
              <span class="iconfont eye" @click="eyechange">&#xe689;</span>
          </div>
        </div> -->

        <div class="wrapper-button">
          <div class="login-button" @click="loginfunction">
              <button class="button">LOGIN</button>
          </div>
        </div>

        <div class="other-options">
            Or login with
        </div>

        <div class="other-login">
            <button class="facebook-login"><span class="iconfont">&#xe68c;</span>Facebook</button>
            <button class="google-login"><span class="iconfont">&#xea0c;</span>Google</button>
        </div>

        <div class="signup">
            Not our Member? <a @click="signupfunction">Sign up here!</a>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import Bus from './bus.js'

export default {
    name: 'Login',
    data () {
        return {
            emailname: '' ,
            pin: '',
            pwdType: false,
            status: ''
        }
    },
    methods: {
        loginfunction () {
            axios.post('/api/login', {
                username: this.emailname,
                password: this.pin
            })
              .then(function(res) {
                  res = res.data
                  Bus.$emit('useroradmin', res)
              })
              this.emailname = '' ,
              this.pin = ''
        },
        signupfunction () {
             Bus.$emit('changestatus')
        },
        eyechange () {
            this.pwdType =! this.pwdType
        }
    }
}
</script>

<style lang="stylus" scoped>
    .login-title
        position: absolute
        top: 1rem
        left: 0
        right: 0
        text-align: center
        .title
            font-size: .3rem
    .wrapper-lg
        display: flex
        position: absolute
        top: 2rem
        left: .5rem
        right: .4rem
        height: .64rem
        background: #eee
        .input-lg
            width: 75%
            background: #eee
        .label
            margin: .15rem .1rem
    .wrapper-pw
        display: flex
        position: absolute
        top: 2.8rem
        left: .5rem
        right: .4rem
        height: .64rem
        background: #eee
        .input-pw
            width: 75%
            background: #eee
        .label
            margin: .15rem .1rem
    .wrapper-button
        position: absolute
        top: 3rem
        left: 0
        right: 0
        .login-button
            flex: 1
            height: .7rem
            line-height: .64rem
            margin-top: 1rem
            margin-left: .45rem
            margin-right: .45rem
            background: #F40AB0
            text-align: center
            .button
                background: #F40AB0
                color: #fff
    .other-options
        position: absolute
        top: 5rem
        left: 0
        right: 0
        text-align: center
        color: #ccc
    .other-login
        position: absolute
        top: 5.5rem
        left: 0
        right: 0
        text-align: center
        .facebook-login
            border: .01rem solid #ccc
            padding: 0 .3rem
            color: #103ECE
        .google-login
            border: .01rem solid #ccc
            padding: 0 .4rem
            color: #F13A4F
    .signup
        position: absolute
        top: 6.2rem
        left: 0
        right: 0
        text-align: center
        color: #ccc
</style>
