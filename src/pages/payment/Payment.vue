<template>
    <form id="payment-form" action="/api/charge" method="post" @submit.prevent="pay()">
        <div class="header">
            <h1>Payment Form</h1>
        </div>
        <div class="form-group">
            <label for="email" v-model="email_address">Email Address</label>
            <input type="email" class="form-control" id="email">
        </div>

        <div class="form-group">
          <label for="name_on_Card">Name on Card</label>
          <input type="text" class="form-control" id="name_on_Card" name="name_on_Card" v-model="name_on_Card">
        </div>

        <div class="form-group">
            <label for="card-element">Credit Card</label>
            <Checkout></Checkout>
        </div>

        <input type="hidden" name="_token" :value="csrf">
        <div class="spacer"></div>

        <button type="submit" class="btn btn-success">PAY ${{this.$store.state.totalAmount}}</button>
    </form>
</template>

<script>
import Checkout from './components/Checkout'
import { createToken } from 'vue-stripe-elements-plus'
import axios from 'axios'

export default {
    name: 'Payment',
    components: {
      Checkout
    },
    data () {
        return {
            csrf: document.head.querySelector('meta[name="csrf-token"]').content,
            name_on_Card: '',
            stripeToken: ''

        }
    },
    // activated () {
    //     console.log(this.$store.state.totalAmount)
    //     // axios.post('/api/charge', this.chargeAmount)
    //     //   .then(function(response){
    //     //       console.log(response)
    //     //   })
    // },
    methods: {
      pay () {
        // createToken returns a Promise which resolves in a result object with
        // either a token or an error key.
        // See https://stripe.com/docs/api#tokens for the token object.
        // See https://stripe.com/docs/api#errors for the error object.
        // More general https://stripe.com/docs/stripe.js#stripe-create-token.
        this.$store.commit('storecardname', this.name_on_Card)
        var options = {
            name: this.name_on_Card
        }
        createToken(options).then(result => {
            //var form = document.getElementById('payment-form');
            var hiddenInput = document.createElement('input');
            hiddenInput.setAttribute('type', 'hidden');
            hiddenInput.setAttribute('name', 'stripeToken');
            hiddenInput.setAttribute('value', result.token.id);

            var hiddenAmount = document.createElement('input');
            hiddenAmount.setAttribute('name', 'chargeAmount');
            hiddenAmount.setAttribute('value', this.$store.state.totalAmount);

            this.$el.appendChild(hiddenInput);
            this.$el.appendChild(hiddenAmount);

            this.$el.submit();


        })
      }
    }
}
</script>

<style lang="stylus" scoped>
    #payment-form
        position: relative
        top: 0
        right: 0
        left: 0
        bottom: 0
        background: #E9F7FA
        width: 100%
        height: 13.5rem
        .header
            width: 100%
            height: .8rem
            line-height: .6rem
            text-align: center
            font-size: .5rem
            color: #aaa
        .form-group
            position: relative
            top: .3rem
            left: .2rem
            padding: .2rem .3rem
            .form-control
                display: block
                margin-top: .1rem
                width: 90%
                border-style: solid
                border-width: .01rem
                border-color: #bbb
                border-radius: .1rem

    .btn
        position: relative
        top: .8rem
        left: .5rem
        height: .5rem
        width: 2.3rem
        border-radius: .1rem
        color: #fff
        background: #2AA946

</style>
