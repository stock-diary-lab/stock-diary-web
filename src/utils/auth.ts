export const isLogin = () => !!localStorage.getItem('token') || !!sessionStorage.getItem('token');

export const isAutoLogin = () => JSON.parse(localStorage.getItem('autoLogin') ?? 'true');
