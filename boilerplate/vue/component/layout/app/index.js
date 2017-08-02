import MainLayout from './main';

const tpl = '<div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>';

export default {
  name: 'AppLayout',
  props: [ 'title', 'description', 'keywords' ],
  components: {
    MainLayout
  },
  computed: {
    vTitle() {
      return this.$root.title || this.title || '九游';
    },
    vKeywords() {
      return this.$root.keywords || this.keywords || '九游';
    },
    vDescription() {
      return this.$root.description || this.description || '九游';
    },
    baseClass() {
      return this.$root.baseClass;
    }
  },
  template: typeof window === 'object' ? tpl : `<!DOCTYPE html>
                <html lang="en">
                  <head>
                    <title>{{vTitle}}</title>
                    <meta name="keywords" :content="vKeywords">
                    <meta name="description" :content="vDescription">
                    <meta http-equiv="content-type" content="text/html;charset=utf-8">
                    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css">
                    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
                  </head>
                  <body :class="baseClass">
                    ${tpl}
                  </body>
                </html>`

};
