<template>
  <Layout description="vue server side render" keywords="egg, vue, webpack, server side render">
    <div class="msg">
       {{message}}
    </div>
  </Layout>
</template>
<style>
  .msg{
    text-align: center;
    font-size: 24px;
    margin-top: 40px;
  }
</style>
<script type="text/babel">
  import Article from 'mocks/article/list';
  export default {
    components: {

    },
    data:{
      message: 'Vue Client Render!!!'
    },
    computed: {
    },
    methods: {
      
    },
    mounted() {
 
    }
  }
</script>

