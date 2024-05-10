import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/services/email.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  showContactForm: boolean = false;
  contactForm: FormGroup;
  isLoading = false;
  constructor(private snackBar: MatSnackBar,private emailService: EmailService) {
    this.contactForm= new FormGroup({
      subject: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
   }
   openContactForm() {
    this.showContactForm = !this.showContactForm;
  }

  sendEmail() {

    if (this.contactForm.valid) {
      this.isLoading = true;
      this.emailService.sendEmail(this.contactForm.value.email,this.contactForm.value.message).subscribe({
        next: response => {
          console.log(response);
          this.isLoading = false;
          this.contactForm.reset();
          this.openContactForm();
          this.snackBar.open(response.message, 'Close', {
            duration: 2000,
          });
        },
        error: err => {
          console.error(err);
          this.isLoading = false;
        }
      });
    }else{
      this.snackBar.open('Please fill all the fields', 'Close', {
        duration: 2000,
      });
    }
  }


}
