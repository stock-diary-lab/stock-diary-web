export const isLogin = () => !!localStorage.getItem('token') || !!sessionStorage.getItem('token');
