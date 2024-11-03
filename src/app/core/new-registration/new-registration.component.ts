import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-registration',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {
  connectionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.connectionForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.connectionForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]],
      serviceEmail: [''],
      address: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      connectionType: ['', Validators.required],
      voltage: ['', Validators.required],
      loadRequirement: ['', Validators.required],
      supplyType: ['', Validators.required],
      ownershipStatus: ['', Validators.required],
      propertyType: ['', Validators.required],
      proofOwnership: ['', Validators.required],
      governmentId: ['', Validators.required],
      declaration: [false, Validators.requiredTrue]
    }) as FormGroup;
  }

  markAsTouched(controlName: string): void {
    const control = this.connectionForm.get(controlName);
    if (control) {
      control.markAsTouched();
    }
  }

  onSubmit(): void {
    if (this.connectionForm.valid) {
      // Retrieve the form data
      const formData = this.connectionForm.value;

      // Retrieve existing connection requests from local storage
      const existingRequests = JSON.parse(localStorage.getItem('connectionRequests') || '[]');

      // Add the new connection request to the array
      existingRequests.push(formData);

      // Save the updated array back to local storage
      localStorage.setItem('connectionRequests', JSON.stringify(existingRequests));

      // Optionally, you can navigate to another page or display a success message
      console.log('Form submitted successfully and data stored in local storage:', formData);
      
      // Reset the form
      this.connectionForm.reset();
    } else {
      this.connectionForm.markAllAsTouched();
    }
  }
}
