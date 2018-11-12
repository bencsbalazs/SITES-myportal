import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-home-contactme',
  template: `
  <div class="container">
  <div class="row">
    <div class="col-12 mx-sm-auto my-sm-5 my-md-5 my-lg-5 text-center">
      <h2>{{ 'home.contact.title' | translate }}</h2>
      <hr class="separator">
      <small class="description">{{ 'home.contact.slogan' | translate }}</small>
    </div>
  </div>
  <div class="row py-3">
  <div class="col-md-9 mb-md-0 mb-5">
  <form id="contact-form" name="contact-form" action="" method="POST">
      <div class="row py-4">
          <div class="col-md-6">
              <div class="md-form mb-0">
                  <input type="text" id="name" name="name" class="form-control">
                  <label for="name" class="">{{ 'home.contact.form.name' | translate }}</label>
              </div>
          </div>
          <div class="col-md-6">
              <div class="md-form mb-0">
                  <input type="text" id="email" name="email" class="form-control">
                  <label for="email" class="">{{ 'home.contact.form.email' | translate }}</label>
              </div>
          </div>
      </div>
      <div class="row py-4">
          <div class="col-md-12">
              <div class="md-form mb-0">
                  <input type="text" id="subject" name="subject" class="form-control">
                  <label for="subject" class="">{{ 'home.contact.form.subject' | translate }}</label>
              </div>
          </div>
      </div>
      <div class="row py-4">
          <div class="col-md-12">
              <div class="md-form">
                  <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                  <label for="message">{{ 'home.contact.form.message' | translate }}</label>
              </div>
          </div>
      </div>
  </form>
  <div class="text-center text-md-left">
      <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">{{ 'home.contact.form.send' | translate }}</a>
  </div>
  <div class="status"></div>
</div>
<div class="col-md-3 text-center">
  <ul class="list-unstyled mb-0" *ngFor="let cinfo of ( 'home.contact.links' | translate )">
      <a href="{{ cinfo.link }}" target="_blank"><li><i class="fa fa-{{ cinfo.icon }} fa-2x"></i>
          <p>{{ cinfo.text }}</p>
      </li></a>
  </ul>
</div>
  </div>
  </div>`,
  // tslint:disable-next-line:max-line-length
  styles: ['input {border:none;border-bottom: solid 1px #000;border-radius: 0%;background-color: transparent;}textarea {border: solid 1px black; background: transparent;}label {position: absolute;top: .5em;transition:linear .5s}input:focus {border:none;border-bottom: solid #0ff 2px;box-shadow: 0 0 0em;background-color: transparent;}input:focus + label, textarea:focus + label, input.filled + label, textarea.filled + label{top: -1.5em;}']
})
export class ContactmeComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    $('input, textarea').on('change paste', function() {
        if ($(this).val()) {
            $(this).addClass('filled');
        } else {
            $(this).removeClass('filled');
        }
    });
  }
}
