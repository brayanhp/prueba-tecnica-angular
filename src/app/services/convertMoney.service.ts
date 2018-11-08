interface JsonResponse {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: any;
}

export class ConvertMoneyService {

static URL = 'http://data.fixer.io/api/latest?access_key=045e77b1fcfe1bf8211ca085f66c005e&from=USD&to=EUR';
constructor() { }

  static async getRequest2(price: number): Promise<JsonResponse> {
    const resp = await fetch(this.URL);
    const json = await resp.json();
    return json;
  }
}
