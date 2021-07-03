<template>
  <div style="font-size: 24px; text-align: center">
    <h2>{{article.title}}</h2>
    <iframe width=100% height=600 frameborder=0 scrolling=auto :src="article.url"></iframe>
  </div>
</template>
<style>

</style>
<script type="text/babel">
  export default{
    computed: {
      article() {
        return this.$store.state.article;
      }
    },
    beforeMount() {
      const { id } = this.$route.params;
      return Promise.all([
        this.$store.dispatch('FETCH_ARTICLE_DETAIL', { id })
      ]);
    }
  }
</script>
