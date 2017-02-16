<template>
  <div>
    <navigation-bar></navigation-bar>
    <rd-swipe :swipe="swipe">
      <div class="rd-swipe-item" :style="{ 'background-image': `url(${img})` }" v-for="(img, index) in imgs">
      </div>
    </rd-swipe>
  </div>
</template>

<script>
  import NavigationBar from './components/NavigationBar.vue'
  import rdSwipe from 'vue-slide' 

  export default {
    name: 'Hello',
    components:
    {
      'navigation-bar': NavigationBar,
      rdSwipe 
    },
    data() {
      return {
        swipe: {
          activeIndex: 0
        },
        imgs: [
          'http://covteam.u.qiniudn.com/test18.jpg',
          'http://covteam.u.qiniudn.com/test19.jpg',
          'http://covteam.u.qiniudn.com/test20.jpg',
          'http://covteam.u.qiniudn.com/test21.jpg'
        ]
      }
    }
  };

</script>