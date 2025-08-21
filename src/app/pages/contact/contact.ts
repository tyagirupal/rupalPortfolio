import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
   name: string = '';
  email: string = '';
  message: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  sendEmail() {
    if (!this.name || !this.email || !this.message) {
      this.errorMessage = "Please fill all fields.";
      return;
    }

    const templateParams = {
      from_name: this.name,
      from_email: this.email,
      message: this.message,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
      .then((result: EmailJSResponseStatus) => {
        this.successMessage = "Message sent successfully ✅";
        this.errorMessage = "";
        this.name = '';
        this.email = '';
        this.message = '';
      }, (error) => {
        this.errorMessage = "Failed to send message ❌";
        this.successMessage = "";
      });
  }
}
