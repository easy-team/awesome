import MainLayout from './main';

export default {
  name: 'Layout',
  props: [ 'title', 'description', 'keywords' ],
  components: {
    MainLayout
  },
  computed: {
    vTitle() {
      return this.$root.title || this.title || 'Vue Client Render';
    },
    vKeywords() {
      return this.$root.keywords || this.keywords || 'Vue Client Render';
    },
    vDescription() {
      return this.$root.description || this.description || 'Vue Client Render';
    },
    baseClass() {
      return this.$root.baseClass;
    }
  },
  template: '<div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>'
};
