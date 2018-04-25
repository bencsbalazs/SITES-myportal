import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private configService: ConfigService
  ) { }

  getConfig(): void {
    this.tiles = this.configService.getConfig();
  }

  ngOnInit() {
    this.getConfig();
  }

}
