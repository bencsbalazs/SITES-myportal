import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-home-contactme',
  template: `
  <div class="container">
  <div class="row">
    <div class="col-12 mx-sm-auto my-sm-5 my-md-5 my-lg-5 text-center">
      <h2>{{ 'home.contact.title' | translate }}</h2>
      <small class="description">{{ 'home.contact.slogan' | translate }}</small>
    </div>
  </div>
  <div class="row py-3">
  <div class="col-md-9 mb-md-0 mb-5">
  <form id="contact-form" name="contact-form" action="mail.php" method="POST">
      <div class="row py-4">
          <div class="col-md-6">
              <div class="md-form mb-0">
                  <input type="text" id="name" name="name" class="form-control">
                  <label for="name" class="">Your name</label>
              </div>
          </div>
          <div class="col-md-6">
              <div class="md-form mb-0">
                  <input type="text" id="email" name="email" class="form-control">
                  <label for="email" class="">Your email</label>
              </div>
          </div>
      </div>
      <div class="row py-4">
          <div class="col-md-12">
              <div class="md-form mb-0">
                  <input type="text" id="subject" name="subject" class="form-control">
                  <label for="subject" class="">Subject</label>
              </div>
          </div>
      </div>
      <div class="row py-4">
          <div class="col-md-12">
              <div class="md-form">
                  <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                  <label for="message">Your message</label>
              </div>
          </div>
      </div>
  </form>
  <div class="text-center text-md-left">
      <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
  </div>
  <div class="status"></div>
</div>
<div class="col-md-3 text-center">
  <ul class="list-unstyled mb-0">
      <li><i class="fa fa-map-marker fa-2x"></i>
          <p>San Francisco, CA 94126, USA</p>
      </li>

      <li><i class="fa fa-phone mt-4 fa-2x"></i>
          <p>+ 01 234 567 89</p>
      </li>

      <li><i class="fa fa-envelope mt-4 fa-2x"></i>
          <p>contact@mdbootstrap.com</p>
      </li>
  </ul>
</div>
  </div>
  </div>`,
  styles: ['input {border:none;border-bottom: solid 1px #000;border-radius: 0%;}textarea {border: none;}label {position: absolute;top: .5em;}input:focus {border:none;border-bottom: solid #0ff 2px;box-shadow: 0 0 0em;}input:focus + label, textarea:focus + label, input.filled + label, textarea.filled + label{top: -1.5em;}']
})
export class ContactmeComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    $("input, textarea").on("change paste", function(){
        if ($(this).val()){
            $(this).addClass("filled");
        } else {
            $(this).removeClass("filled");
        }
        
    });  
  }
  
}
