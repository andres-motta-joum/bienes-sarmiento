import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WhatsappApiService {

  public responsables: string[] = [
    'Fanny',
    'Adriana',
    'Claudia',
    'Ivan',
    'José'
  ]

  private apiEndpoint = 'https://graph.facebook.com/v17.0/143417802185701/messages';
  private tokenApi = 'EAAEqcr4NWnQBOz2YOhAKIInMZC7YLkDc3MQawClRSTOGsvYKXuRbBjpQLkozaCo6RvQ2yvNQFwY6v0g9MqDyBuJZCUwCKA7n2y9V1llWAZAF8MOJaQFw7gt1JRZBfvF6JHqHMqUHdmBnyPGaoAo43IFCE1TJV3NebAQnwRZAvVZB6DZBM1HbkgvzOTTnCBj2z1IeYZAZCVEPolYtHMOA93a9fzaAGGrOOyvKQLgZDZD';

  constructor(private http: HttpClient) { }
  
  sendMessage(): any {
    const body = {
      'messaging_product': 'whatsapp',
      'to': '573202775645',
      'type': 'template',
      'template': {
          'name': 'hello_world',
        'language': { 'code': 'en_US' }
      } 
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.tokenApi
      })
    };
    this.http.post(this.apiEndpoint, body, httpOptions).subscribe((res) => {
      console.log('Mensaje enviado',res);
    }, (error) => {
      console.error('Error al enviar', error);
    });
  }


}
