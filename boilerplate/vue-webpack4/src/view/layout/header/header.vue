<template>
  <header class="header">
    <div class="container"><h1>
      <a href="http://hubcarl.github.io/easywebpack/vue/dev" class="router-link-active">Single Page App</a></h1>
      <ul class="nav">
        <li class="nav-item"><a href="https://www.yuque.com/hubcarl">easywebpack</a></li>
        <li class="nav-item"><a href="https://github.com/hubcarl/easywebpack-vue">easywebpack-vue</a></li>
        <li class="nav-item"><a href="https://github.com/hubcarl/easywebpack-cli">easywebpack-cli</a></li>
      </ul>
    </div>
  </header>
</template>
<style>
  @import "./header.css";
</style>
<script type="text/babel">
  export default{
    data(){
      return {
        selectedMenu : '/app'
      }
    },
    computed:{

    },
    mounted(){
      this.selectedMenu = window.location.pathname.toLowerCase().replace(/\/$/,'');
    }
  }
</script>
