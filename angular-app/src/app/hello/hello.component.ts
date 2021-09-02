import { Component, OnInit, OnDestroy } from '@angular/core';
import { HelloService } from './hello.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit, OnDestroy {

  responseText = "";
  name = "";
  showResult = false;
  serviceSubscription: Subscription = new Subscription;

  constructor(private helloService: HelloService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.serviceSubscription.unsubscribe();
  }

  onButtonClick() {
    this.showResult = true;
    console.log(this.name);
    this.serviceSubscription = this.helloService.getName(this.name).subscribe((x: any) => {
      if (x) {
        this.responseText = x.msg;
      } else {
        this.responseText = "Napaka na spletnem servisu." // izpis. če spletni servis ne bi vrnil sporočila
      }
      
    },
    (err) => this.responseText = err.message); // v primeru napake (npr. 404)
    
  }

}
