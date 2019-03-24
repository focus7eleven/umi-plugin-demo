"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

// ref:
// - https://umijs.org/plugin/develop.html
function _default(api, options) {
  const config = api.config; // 新增配置项 appType

  api._registerConfig(() => {
    return () => {
      return {
        name: 'appType',
        onChange: () => {
          api.restart();
        }
      };
    };
  }); // 在 html head 中插入 appType 信息


  api.addHTMLHeadScript(() => {
    return {
      content: `
        // engined by SmallFish
        // This is an '${config.appType}' app
        console.log('${config.appType}')
      `
    };
  });
}