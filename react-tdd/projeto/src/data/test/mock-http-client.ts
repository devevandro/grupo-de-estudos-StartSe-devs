import { HttpPostClient, HttpPostParams } from "../protocols/http/http-post-client";
import { HttpResponse, HttpStatusCode } from "../protocols/http/http-response";

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: object;
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok
  }

  async post(params: HttpPostParams): Promise<HttpResponse> {
    const { url, body } = params;
    this.url = url;
    this.body = body;
    return Promise.resolve(this.response);
  }
}
