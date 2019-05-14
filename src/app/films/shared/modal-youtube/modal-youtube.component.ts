import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal-youtube',
  templateUrl: './modal-youtube.component.html',
  styleUrls: ['./modal-youtube.component.scss']
})
export class ModalYoutubeComponent implements OnInit {
  title: String;
  idYouTube: String;
  isHide: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<ModalYoutubeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('object', data);
    this.title = data.title;
    this.idYouTube = this.isUrl(data.idYouTube);
   }
  isUrl(params: String) {
    if (!(params.length > 0) ) {
      this.isHide = true;
    }
    return params;
  }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}
