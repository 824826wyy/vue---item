<template>
  <div>
    <Header></Header>
      <router-view></router-view>
    <Footer v-show="!$route.meta.isHidden"></Footer>
  </div>
</template>

<script>
import Header from '@/conmponents/Header'
import Footer from '@/conmponents/Footer'
export default {
  name: '',
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>

