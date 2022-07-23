class HttpClient {

    private backend: string;
    constructor() {
        this.backend = `${process.env.REACT_APP_API_URL}/`;
    }
    async get<T>(endpoint: string): Promise<T> {;
        const response = await fetch(this.backend + endpoint, {
          method: "GET",
          headers: this.getHttpHeaders(),
        });
        const data = await this.extractJson<T>(response);
        return data;
      }

      getHttpHeaders() {
        let requestHeaders: HeadersInit = new Headers();
        
        requestHeaders.set('Content-Type', 'application/json');
        requestHeaders.set('Accept', 'application/json');
        return requestHeaders;
    
      }

      async extractJson<T>(response: Response): Promise<T> {
        return await response.json();
      }

      async post<T>(endpoint: string, bodyPayload: object): Promise<T> {
        const response = await fetch(this.backend + endpoint, {
          method: "POST",
          headers: this.getHttpHeaders(),
          body: JSON.stringify(bodyPayload),
        });
        const data = await this.extractJson<T>(response);
        return data;
      }
}

export default new HttpClient();