/* global isBrowser */
export default {
  name: 'Layout',
  props: [ 'title', 'description', 'keywords' ],
  components: {},
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
  template: isBrowser ? '<div id="root"><slot></slot></div>' : `<!DOCTYPE html>
                <html lang="en">
                  <head>
                    <title>{{vTitle}}</title>
                    <meta name="keywords" :content="vKeywords">
                    <meta name="description" :content="vDescription">
                    <meta http-equiv="content-type" content="text/html;charset=utf-8">
                    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
                    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css">
                    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
                  </head>
                  <body :class="baseClass">
                  <div id="app">
                   <slot></slot>
                  </div>
                  </body>
                </html>`

};
