import axios, { AxiosInstance } from 'axios';

// https://cea13314-94c5-4b7f-b96f-546f2fb397c9.mock.pstmn.io/jptest?page=1
export default class JpTest {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL_API}/`,
    });
  }

  async list(page?: number) {
    // return this.httpClient.get('jptest', { params: page });
    return axios.get('/page.json');
  }
}
