import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal-overview',
  templateUrl: './modal-overview.component.html',
  styleUrls: ['./modal-overview.component.scss']
})
export class ModalOverviewComponent implements OnInit {

  biography: string;

  constructor(
    private dialogRef: MatDialogRef<ModalOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ){
      // console.log('object', data);
       this.biography = data.biography;
    }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}


