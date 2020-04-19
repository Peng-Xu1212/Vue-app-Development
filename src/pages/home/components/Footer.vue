<template>
    <div class="footer">
        <div class="wrapper-option">
            <ul>
                <li class="flights"><span class="iconfont label">&#xe611;</span>Flights</li>
                <li class="hotels"><span class="iconfont label">&#xef5c;</span>Hotels</li>
                <li class="trips"><span class="iconfont label">&#xe9de;</span>Trips</li>
                <li class="more"><span class="iconfont">&#xe6aa;</span>More</li>
            </ul>
        </div>

        <div class="wrapper-menu border-bottom">
            <ul>
                <li class="menu-login" @click="popUpLogin">Login</li>
                <li class="menu-order">My Order</li>
                <li class="menu-browse">Recently Browsed</li>
                <li class="menu-about">About Us</li>
            </ul>
        </div>

        <div class="wrapper-icons">
            <span class="iconfont logo">&#xe65d;</span>
            <span class="iconfont logo">&#xe65e;</span>
            <span class="iconfont logo">&#xe65f;</span>
            <span class="iconfont logo">&#xe660;</span>
        </div>

        <div class="shade" v-show="!shadeshow" @click="removelogin">

        </div>

        <Fadelogin>
            <div class="wrapper-loginpage" v-show="!loginshow">
                  <Login></Login>
            </div>
        </Fadelogin>

        <Fadesignup>
            <div class="wrapper-loginpage" v-show="!signupshow">
                <Signup></Signup>
            </div>
        </Fadesignup>
    </div>
</template>

<script>
import Bus from './bus.js'
import Login from './Login'
import Signup from './Signup'
import Fadelogin from 'commons/fadeanimated/Fadelogin'
import Fadesignup from 'commons/fadeanimated/Fadesignup'

export default {
    name: 'HomeFooter',
    components: {
        Fadelogin,
        Fadesignup,
        Login,
        Signup
    },
    data () {
        return {
            loginshow: true,
            signupshow: true,
            shadeshow: true
        }
    },
    methods: {
        popUpLogin () {
            this.loginshow =! this.loginshow
            this.shadeshow =! this.shadeshow
        },
        removelogin () {
            if(this.signupshow){
              this.loginshow =! this.loginshow
              this.shadeshow =! this.shadeshow
            }else{
              this.shadeshow =! this.shadeshow
              this.signupshow =! this.signupshow
            }
        }
    },
    mounted() {
        Bus.$on('changestatus', () => {
            this.loginshow =! this.loginshow
            this.signupshow =! this.signupshow
        })
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
    .wrapper-option
          overflow: hidden
          width: 100%
          height: .8rem
          text-align: center
          margin-top: .3rem
          .flights
              display: inline
              padding: 0 .2rem
              color: #aaa
          .hotels
              display: inline
              padding: 0 .2rem
              color: #aaa
          .trips
              display: inline
              padding: 0 .2rem
              color: #aaa
          .more
              display: inline
              padding: 0 .25rem
              color: #aaa
    .wrapper-menu
          width: 100%
          height: .7rem
          color: $bgColor
          margin-top: .15rem
          font-size: .3rem
          .menu-login
              display: inline
              padding: 0 .2rem
          .menu-login:hover
              color: #0734F5
          .menu-order
              display: inline
              padding: 0 .1rem
          .menu-browse
              display: inline
              padding: 0 .1rem
          .menu-about
              display: inline
              padding: 0 .1rem
    .wrapper-icons
          width: 100%
          height: 1.2rem
          text-align: center
          padding-top: .15rem
          box-sizing: border-box
          .logo
              font-size: .7rem
              padding-left: .15rem
    .shade
        z-index: 1
        position: fixed
        overflow: hidden
        top:0
        left: 0
        right: 0
        width: 100%
        height: 13.5rem
        opacity: 1
        background: linear-gradient(to top, #F40AB0, #510AF4)
    .wrapper-loginpage
          z-index: 2
          width: 70%
          height: 60%
          position:fixed
          top: 2rem
          left: 1.2rem
          background: #fff
          border-radius: .25rem


</style>
