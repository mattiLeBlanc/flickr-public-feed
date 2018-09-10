import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface DialogData {
  url: string;
}

@Component({
  selector: 'app-feed-image-dialog',
  template: `
    <div
      [style.background-image]="'url(' + url + ')'"
    ></div>
  `,
  styleUrls: [ './feed-image-dialog.component.scss' ],
})
export class FeedImageDialogComponent {
  url: string;

  constructor(
    public dialogRef: MatDialogRef<FeedImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      console.log( data);
      this.url = data.url || '';
    }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
