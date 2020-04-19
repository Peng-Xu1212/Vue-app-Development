<template>
  <div class="container">
      <div class="google-map" id="map"></div>
  </div>
</template>

<script>
export default {
  name: 'Set',
  data() {
    return {
      map: null
    }
  },
  mounted() {
    this.initMap()
    this.setMarker()
  },
  methods: {
    // 建立地圖
    initMap() {
      // 透過 Map 物件建構子建立新地圖 map 物件實例，並將地圖呈現在 id 為 map 的元素中
      this.map = new google.maps.Map(document.getElementById("map"), {
        // 設定地圖的中心點經緯度位置
        center: { lat: Number(this.$store.state.lat), lng: Number(this.$store.state.lng) },
        // 設定地圖縮放比例 0-20
        zoom: 10,
        // 限制使用者能縮放地圖的最大比例
        maxZoom: 20,
        // 限制使用者能縮放地圖的最小比例
        minZoom: 3,
        // 設定是否呈現右下角街景小人
        streetViewControl: false,
        // 設定是否讓使用者可以切換地圖樣式：一般、衛星圖等
        mapTypeControl: true
      })
    },
    // 建立地標
    setMarker() {
      // 建立一個新地標
      const marker = new google.maps.Marker({
        // 設定地標的座標
        position: { lat: Number(this.$store.state.lat), lng: Number(this.$store.state.lng) },
        // 設定地標要放在哪一個地圖
        map: this.map
      })
    }
  },
  activated () {
    this.initMap()
    this.setMarker()
  },
  deactivated () {
    this.initMap()
    this.setMarker()
  }
}
</script>

<style lang="stylus" scoped>
  .container                  //map自适应屏幕宽度和高度
      position: absolute
      width: 100%
      height: 100%
    .google-map
        width: 100%
        height: 100%

</style>
