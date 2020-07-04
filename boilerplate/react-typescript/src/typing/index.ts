declare let EASY_ENV_IS_NODE: boolean;
declare let EASY_ENV_IS_DEV: boolean;
declare let EASY_ENV_IS_BROWSER: boolean;
declare let process: {
  env: {
    NODE_ENV: string;
  };
};
interface Window {
  __INITIAL_STATE__: any;
  stores: any;
}
interface NodeModule {
  hot: {
    accept: any;
  };
}