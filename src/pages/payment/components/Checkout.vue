<template>
    <div class="checkout">
      <card class='stripe-card'
          :class='{ complete }'
          stripe='pk_test_apVLxvuQUyvSpVKV7210u7iN00jqAbhawv'
          :options='stripeOptions'
          @change='change($event)'
      />
      <div id="card-errors" role="alert" v-text="errorMessage">

      </div>
      <!-- <button class='pay-with-stripe' @click='pay' :disabled='!complete'>Pay with credit card</button> -->
    </div>
</template>
<script>
import { Card, createToken } from 'vue-stripe-elements-plus'

export default {
    name: 'Checkout',
    components: {
      Card,
    },
    data () {
    return {
      complete: false,
      errorMessage: '',
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
        style: {
            base: {
                color: '#32325d',
                lineHeight: '18px',
                fontFamily: 'Raleway, Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }

            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        },
        hidePostalCode: true
      }
    }
  },
  methods: {
    pay () {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then(data => console.log(data.token))
    },
    change (event) {
      if (event.error){
          this.errorMessage = event.error.message;
      }else{
          this.errorMessage = '';
      }
    }
  }

}
</script>

<style lang="stylus" scoped>
    .stripe-card
        margin-top: .1rem
        width: 90%
        border-style: solid
        border-width: .01rem
        border-color: #bbb
        border-radius: .1rem
        background: #fff
        box-shadow: 0 1px 3px 0 black
    #card-errors
        color: red
    .pay-with-stripe
        height: .4rem
        width: 3rem
        margin-top: .1rem
        border-radius: .1rem
        background: #72DBF2
        color: #fff



</style>
