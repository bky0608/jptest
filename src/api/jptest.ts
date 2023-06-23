import axios, { AxiosInstance } from 'axios';

export default class JpTest {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL_API}/`,
    });
  }

  async list(page: number) {
    return this.httpClient.get('jptest', { params: { page } });
    // return axios.get('/page.json');
  }
}
