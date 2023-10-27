import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  sendEmail() {
    emailjs
      .send(
        'service_jms4zij',
        'template_2db0e7r',
        {
          from_name: 'from name',
          to_name: 'Oleksandr',
          from_email: 'from email',
          subject: 'subj',
          message: 'msg',
        },
        'sLlI8-O7L-X5k3kQf'
      )
      .then(
        response => {
          console.log('SUCCESS!', response.status, response.text);
        },
        err => {
          console.log('FAILED...', err);
        }
      );
  }
}
