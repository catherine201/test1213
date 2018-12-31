import createApi from '../createApi';
import { serverIp } from '../server_config';

const config = {
  // 注册
  register: {
    url: '/register/name',
    method: 'post',
    options: {
      errorHandler: true,
      showLoading: true,
      baseUrl: serverIp.login
    }
  },
  // 预登录
  login: {
    url: '/users/name/login',
    method: 'post',
    options: {
      errorHandler: true,
      showLoading: true,
      baseUrl: serverIp.login
    }
  },
  // 最终登录
  secondLogin: {
    url: '/login',
    method: 'post',
    options: {
      errorHandler: true,
      showLoading: true,
      baseUrl: serverIp.thirdServer
    }
  },
  // 登出
  logout: {
    url: '/logout',
    method: 'post',
    options: {
      errorHandler: false,
      showLoading: false,
      baseUrl: serverIp.thirdServer
    }
  }
};

export default createApi(config);
