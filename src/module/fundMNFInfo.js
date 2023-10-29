const { request } = require('../utils/index.js');

/**
 * 基金搜索
 */
module.exports = async (params) => {
  const url = 'https://fundmobapi.eastmoney.com/FundMNewApi/FundMNFInfo';
  return request(url, params);
};
