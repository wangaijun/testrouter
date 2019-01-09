<template>
  <div class="home">
    <div class="btn" @click="toabout">about</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    toabout () {
      console.log('about');
      // this.$router.push({path:'/about/blog'})  //对应传参方式一
      // this.$router.push({name: 'about', params: {topic: 'blog'}}) //对应传参方式二
      this.$router.push({path: '/about', query: {topic: 'blog'}}) //对应传参方式三
    }
  }
}
</script>