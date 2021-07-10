<template>
  <div>
    <HeaderCom></HeaderCom>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<style lang="scss">

</style>
<script type="text/babel">
  import HeaderCom from './component/header/header.vue'
  export default {
    components: {
      HeaderCom
    },
    computed: {

    },
    mounted(){

    }
  }
</script>
