import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submitted:boolean = false;
contactForm = new FormGroup({
  firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
  lastName: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
  message: new FormControl('', Validators.required)
})

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    if(this.contactForm.valid){
      var tmp = this.contactForm.value;
      console.log(tmp)
      this.submitted = false;
      this.contactForm.reset();
    }
  }
}
