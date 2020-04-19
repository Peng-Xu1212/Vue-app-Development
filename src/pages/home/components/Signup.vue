<template>
    <div class="login-canvas">
        <div class="login-title">
            <h1 class="title">SIGNUP</h1>
        </div>

        <div class="login-input">
            <span class="iconfont label">&#xe633;</span>
            <input type="text" class="input" placeholder="Email" v-model="emailname">
        </div>

        <div class="login-password">
            <span class="iconfont label">&#xe610;</span>
            <input type="text" class="password" v-if="pwdType" v-model="pin">
            <input type="password" class="password" placeholder="Password" v-model="pin" v-else>
            <span class="iconfont eye" @click="eyechange">&#xe689;</span>
        </div>

        <div class="login-admin-user">
            <span class="iconfont label">&#xe610;</span>
            <input type="password" class="admin-user" placeholder="Admin Code (option)" v-model="admincode">
        </div>

        <div class="login-button" @click="signupfunction">
            <button class="button">SIGNUP</button>
        </div>

        <div class="other-options">
            Or Sign Up with
        </div>

        <div class="other-login">
            <button class="facebook-login"><span class="iconfont">&#xe68c;</span>Facebook</button>
            <button class="google-login"><span class="iconfont">&#xea0c;</span>Google</button>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import Bus from './bus.js'

export default {
    name: 'Signup',
    data () {
        return {
            emailname: '',
            pin: '',
            admincode: '',
            pwdType: false
        }
    },
    methods: {
      signupfunction () {
          axios.post('/api/usersignup', {
              username: this.emailname,
              password: this.pin,
              adminCode: this.admincode
          })
            .then(function(res){
                res = res.data
            })
            //this.$store.commit('storeuser', this.emailname)
            this.emailname = '',
            this.pin = '',
            this.admincode = ''
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
    .login-input
        flex: 1
        height: .7rem
        line-height: .64rem
        margin-top: 2rem
        margin-left: .45rem
        margin-right: .45rem
        background: #eee
        .input
            background: #eee
        .label
            margin: 0 .2rem
    .login-password
        flex: 1
        height: .7rem
        line-height: .64rem
        margin: .2rem .45rem
        background: #eee
        .password
            background: #eee
        .label
            margin: 0 .2rem
    .login-admin-user
        flex: 1
        height: .7rem
        line-height: .64rem
        margin: .2rem .45rem
        background: #eee
        .admin-user
            background: #eee
        .label
            margin: 0 .2rem
    .login-button
        flex: 1
        height: .7rem
        line-height: .64rem
        margin-top: .7rem
        margin-left: .45rem
        margin-right: .45rem
        background: #F40AB0
        text-align: center
        .button
            background: #F40AB0
            color: #fff
    .other-options
        text-align: center
        margin-top: .4rem
        color: #ccc
    .other-login
        margin-top: .2rem
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
        text-align: center
        margin-top: .3rem
        color: #ccc
</style>
