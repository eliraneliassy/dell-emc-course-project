import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.sass']
})
export class FeedbackComponent implements OnInit {

  helloMsg: string;

  ans: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { [key: string]: string },
    private dialogRef: MatDialogRef<FeedbackComponent>) { }

  ngOnInit() {
    this.helloMsg = this.data.hello;
  }

  send() {
    this.dialogRef.close(this.ans);
  }

}
