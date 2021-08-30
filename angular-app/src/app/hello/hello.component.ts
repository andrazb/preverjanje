import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  responseText?: Observable<any>;
  name = "";
  showResult = false;

  constructor(private helloService: HelloService) { }

  ngOnInit() {
  }

  onButtonClick() {
    this.responseText = this.helloService.getName(this.name);
    this.showResult = true;
  }

}
