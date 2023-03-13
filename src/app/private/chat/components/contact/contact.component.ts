import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  
  name: string;
  lastMessage: string;

  constructor() {
    this.name = "JGabriel";
    this.lastMessage = "Thanks, Thomas";
  }

  ngOnInit(): void {}
}
