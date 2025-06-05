import { HttpClient, HttpHeaders } from '@angular/common/http';

export class OutlookService {
  private graphUrl = 'https://graph.microsoft.com/v1.0/me/messages';
  private sendMailUrl = 'https://graph.microsoft.com/v1.0/me/sendMail';

  constructor(private http: HttpClient) {}

  getEmails(token: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(this.graphUrl, { headers });
  }

  sendEmail(token: string, emailPayload: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post(this.sendMailUrl, emailPayload, { headers });
  }


}