function resolveIp() {
  const mode = process.env.NODE_ENV.trim();
  if (mode === 'development') {
    return {
      login: '/log',
      thirdServer: '/third',
      logic: '/logic'
    };
  }
  return {
    login: 'http://192.168.1.96:51002',
    thirdServer: 'http://192.168.1.189:3033',
    logic: 'http://192.168.1.216:3033'
  };
}
export const serverIp = resolveIp();
