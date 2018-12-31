import createApi from '../createApi';

const config = {
  // 明细预览
  test: {
    // 报表撤回
    url: '/game/data',
    method: 'get',
    options: {
      errorHandler: true,
      showLoading: true
    }
  }
};

export default createApi(config);
