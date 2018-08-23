import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-contactme',
  template: `
  <div class="row">
    <div class="col-12 mx-sm-auto my-sm-5 my-md-5 my-lg-5 text-center">
      <h2>{{ 'home.contact.title' | translate }}</h2>
      <small class="description">{{ 'home.contact.slogan' | translate }}</small>
    </div>
  </div>
  <div class="row py-3">
    <div class="col-md-6">
      <div class="form-group">
        <input id="form_name" type="text" name="name" class="form-control" placeholder="{{ 'home.contact.form.name' | translate }} *"
          required="required" data-error="Firstname is required.">
        <div class="help-block with-errors"></div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <input id="form_email" type="email" name="email" class="form-control" placeholder="{{ 'home.contact.form.email' | translate }} *"
          required="required" data-error="Valid email is required.">
        <div class="help-block with-errors"></div>
      </div>
    </div>
    <div class="col-md-12">
      <div class="form-group">
        <textarea id="form_message" name="message" class="form-control" placeholder="{{'home.contact.form.message' | translate}} *" rows="4" required="required"
          data-error="Please,leave us a message."></textarea>
        <div class="help-block with-errors"></div>
      </div>
    </div>
    <div class="col-md-12">
      <input type="submit" class="btn btn-success btn-send" value="{{'home.contact.form.send' | translate}}">
      <span class="text-muted">{{'home.contact.form.required' | translate}}</span>
    </div>
  </div>`,
  styles: ['#contactme input[type="text"],#contactme input[type="email"]{border: none;border-bottom: solid 0.2em #f00033;} #contactme input:focus{border: none;box-shadow: none;border-bottom: solid 0.2em #28a745;}']
})
export class ContactmeComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
}
