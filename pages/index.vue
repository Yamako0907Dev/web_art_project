<template>
  <div class="container">
    <div class="d-flex justify-content-center" id="p5RGBCircle"></div>
  </div>
</template>

<script>
if (process.browser) {
  var radar = require('@/js/Radar.js')
  var circle = require('@/js/RGBCircle.js')
}

export default {
  data() {
    return {
      message: ""
    }
  },
  mounted() {
    const P5 = require('p5')
    new P5(circle.main)

    // NOTE: p5.jsからのコールバックを受け取る
    circle.setDelegate(this.callbackOnP5);

  },
  methods: {
    callbackOnP5: function(timeStr) {
      this.message = timeStr;
    }
  }
}
</script>

<style>
.message {
  color: black;
}
</style>
