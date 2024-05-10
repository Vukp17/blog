import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }


  sendEmail(email: string, message: string): Observable<{ status: string, message: string }> {
    console.log(`Sending email to ${email} with subject:  and message: ${message}`);
    return of({ status: 'success', message: 'Email sent successfully' }).pipe(delay(2000));
  }
}