import { HttpClient, HttpHeaders } from '@angular/common/http';

export class OutlookService {
  private graphUrl = 'https://graph.microsoft.com/v1.0/me/messages';

  constructor(private http: HttpClient) {}

  getEmails(token: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ${token}'
    });

    return this.http.get(this.graphUrl, { headers });
  }
}