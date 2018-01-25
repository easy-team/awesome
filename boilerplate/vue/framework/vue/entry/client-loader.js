
module.exports = function() {
  return `
    import Client from 'client';
    import Page from '${this.resourcePath.replace(/\\/g, '\\\\')}';
    export default Client.render({ ...Page });
  `;
};
