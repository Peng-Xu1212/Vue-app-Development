<template >
    <div>
        <div class="sale">
               <p class="sale-content">Special for Today</p>
        </div>
        <div class="sale-top-left">
            <div class="img-first">
                <img class="img" src="https://imgs.qunarzz.com/sight/p0/1504/85/85ce97b0eda5008f.water.jpg_750x500_7d536343.jpg">
                <div class="text-first"> Sydney Opera House 1 Day Tour </div>
                <div class="text">
                      <p class="text-second">From $359</p>
                </div>
            </div>
          </div>
          <div class="sale-top-left">
              <div class="img-first">
                    <img class="img" src="//imgs.qunarzz.com/vs_ceph_vs_tts/5bf3c567-9fdb-460b-9f02-34be7445c9e8.jpg_r_480x320x95_ddae113a.jpg">
                    <p class="text-first"> National Park Tour 1 Day tour</p>
                    <div class="text">
                          <p class="text-second">From $299</p>
                    </div>
              </div>
         </div>
         <div class="sale-top-left">
             <div class="img-first">
                   <img class="img" src="https://imgs.qunarzz.com/vs_ceph_vs_tts/38c34dbb-2675-4607-9877-8c76cac009d4.jpg_r_240x160x90_e1df2f17.jpg">
                   <p class="text-first"> Sydney 5 Days Tour</p>
                   <div class="text">
                         <p class="text-second">From $499</p>
                   </div>
             </div>
        </div>
        <div class="sale-top-left">
            <div class="img-first">
                  <img class="img" src="https://imgs.qunarzz.com/vc/dd/03/5a/4622a34797460e926e04609dbf.jpg_92.jpg">
                  <p class="text-first"> Blue Mount 1 Day Tour</p>
                  <div class="text">
                        <p class="text-second">From $99</p>
                  </div>
            </div>
        </div>
        <div class="sale-top-left">
            <div class="img-first">
                 <img class="img" src="https://imgs.qunarzz.com/p/tts7/1711/a1/fe6f0ec65c6ecb02.jpg_480x320x90_bea891de.jpg">
                 <p class="text-first"> City 1 Day Tour</p>
                 <div class="text">
                       <p class="text-second">From $59</p>
                 </div>
           </div>
        </div>
        <div class="sale-top-left">
           <div class="img-first">
                <img class="img" src="https://imgs.qunarzz.com/p/tts3/1507/65/68b793508d48d2.jpg_480x320x90_f343bb36.jpg">
                <p class="text-first"> Bondi Beach 1 Day Tour</p>
                <div class="text">
                      <p class="text-second">From $199</p>
                </div>
           </div>
        </div>
        <div class="sale-top-left">
           <div class="img-first">
               <img class="img" src="https://imgs.qunarzz.com/p/tts7/1711/5c/8899fafa2db2ba02.jpg_480x320x90_6c363cea.jpg">
               <p class="text-first"> City 1 Day Tour</p>
               <div class="text">
                     <p class="text-second">From $109</p>
               </div>
           </div>
        </div>
        <div class="sale-top-left">
           <div class="img-first">
                <img class="img" src="https://imgs.qunarzz.com/vs_ceph_vs_tts/a7f1e9ed-d7eb-4d57-9eba-f4d2c6b7b65c.jpg_480x320x90_69d30f46.jpg">
                <p class="text-first"> City 1 Day Tour</p>
                <div class="text">
                      <p class="text-second">From $59</p>
                </div>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DestinationHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mix.styl'
    .sale
        overflow: hidden
        position: relative
        top: 0
        left: .3rem
        width: 30%
        line-height: 1rem
        padding-bottom: 4%
        .sale-content
          margin-top: .3rem
          border: .1rem solid #17C0C8
          background: #17C0C8
          color: #ffffff
          border-radius: .2rem
          line-height: .3rem
          text-align: center
    .sale-top-left
        position: relative
        float: left
        overflow: hidden
        height: 0
        width: 50%
        padding-bottom: 50%
        .img-first
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            padding:.2rem
            box-sizing: border-box
            .img
                height: 75%
                width: 95%
                border-radius: .2rem
            .text-first
                line-height: .6rem
                margin:0 .25rem
                font-size: .25rem
                color: #858581
                ellipsis()
            .text
                height: .3rem
                overflow: hidden
                .text-second
                    margin: 0 .2rem
                    color: #F8EE09
                    font-size: 96%


</style>
