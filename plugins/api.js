export default function ({ $axios }, inject) {
  const api = new API($axios)

  inject('api', api)
}

class API {
  constructor (axios) {
    this.apiRequest = axios.create({
      baseURL: 'https://lala-okamoto.microcms.io/api/v1',
      headers: {
        'X-API-KEY' : '1024322f-aeb2-436d-8814-1decb401acf7'
      }
    });
  }

  async getAllNews () {
    const res = await this.apiRequest.get('/news');
    return res.data.contents;
  }

  async getAllGallery () {
    const gall = await this.apiRequest.get('/gallery');
    return gall.data.contents;
  }
}