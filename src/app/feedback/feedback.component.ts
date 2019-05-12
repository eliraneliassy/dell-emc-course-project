import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.sass']
})
export class FeedbackComponent implements OnInit {

  helloMsg: string;
  constructor(@Inject(MAT_DIALOG_DATA) private data: { [key: string]: string }) { }

  ngOnInit() {
    this.helloMsg = this.data.hello;
  }

}
