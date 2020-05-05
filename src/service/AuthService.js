import axios from '@/plugins/axios';

export default class AuthService {
  static login(payload) {
    const headers = {
      Authorization: `Basic ${payload}`,
    };
    return axios.post('/login', {}, { headers });
  }

  static logout(router) {
    localStorage.removeItem('token');
    router.push({ name: 'login' });
  }
}
