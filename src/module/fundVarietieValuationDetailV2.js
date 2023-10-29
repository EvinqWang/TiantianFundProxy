const { request } = require('../utils/index.js');

/**
 * 获取基金净值估算（实时）通过获取净值估算文件实现， v1 版本的已经被废弃
 */
module.exports = async (params = {}) => {
  const time = new Date().getTime();
  const url =
    'https://fundgz.1234567.com.cn/js/'.concat(params.code, '.js') +
    `?rt=${time}`;
  return request(url, params);
};
