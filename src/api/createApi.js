import { get, post, del, put } from './axios';

export default function createApi(config) {
  if (Object.prototype.toString.call(config) !== '[object Object]') return;
  const apiResult = {};
  Object.keys(config).forEach(key => {
    if (typeof config[key] === 'string') {
      apiResult[key] = async data => {
        const url = data
          ? data.url === undefined
            ? config[key].url
            : `${config[key].url}/${data.url}`
          : config[key].url;
        const options = {};
        return get(url, data, options);
      };
    } else if (
      Object.prototype.toString.call(config[key]) === '[object Object]'
    ) {
      if (config[key].method && config[key].method === 'post') {
        apiResult[key] = async data => {
          // console.log(data.url);
          const url = data
            ? data.url === undefined
              ? config[key].url
              : `${config[key].url}/${data.url}`
            : config[key].url;
          const options = config[key].options || {};
          return post(
            url,
            data ? (data.url === undefined ? data : data.query) : data,
            options
          );
        };
      } else if (config[key].method && config[key].method === 'delete') {
        if (config[key].type === 'hash') {
          apiResult[key] = async data => {
            const add = data.join('/');
            const url = `${config[key].url}/${add}`;
            const options = config[key].options || {};
            return del(url, {}, options);
          };
        } else {
          apiResult[key] = async data => {
            const url = data
              ? data.url === undefined
                ? config[key].url
                : `${config[key].url}/${data.url}`
              : config[key].url;
            const options = config[key].options || {};
            return del(
              url,
              data ? (data.url === undefined ? data : data.query) : data,
              options
            );
          };
        }
      } else if (config[key].method && config[key].method === 'put') {
        apiResult[key] = async data => {
          const url = data
            ? data.url === undefined
              ? config[key].url
              : `${config[key].url}/${data.url}`
            : config[key].url;
          const options = config[key].options || {};
          return put(
            url,
            data ? (data.url === undefined ? data : data.query) : data,
            options
          );
        };
      } else if (config[key].type === 'hash') {
        if (Object.prototype.toString.call(config[key]) === '[object Array]') {
          apiResult[key] = async data => {
            const add = data.join('/');
            const url = `${config[key].url}/${add}`;
            const options = config[key].options || {};
            return get(url, {}, options);
          };
        } else {
          return new Error('用哈希传参,参数data必须用数组');
        }
      } else {
        apiResult[key] = async data => {
          const url = data
            ? data.url === undefined
              ? config[key].url
              : `${config[key].url}/${data.url}`
            : config[key].url;
          const options = config[key].options || {};
          return get(
            url,
            data ? (data.url === undefined ? data : data.query) : data,
            options
          );
        };
      }
    }
  });
  return apiResult;
}
