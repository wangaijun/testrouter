<template>
  <div class="about">
    <h1>This is an help page for {{topic}}</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      topic: ""
    };
  },
  mounted() {
    // this.topic = this.$route.params.topic; //对应传参方式一、二
    this.topic = this.$route.query.topic;  //对应传参方式三
    console.log(this.topic);
  }
};
</script>

<style lang="less" scoped>
</style>

