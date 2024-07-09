import { Component, inject, model } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { Product } from "./product";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormControl, FormGroup, FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

export interface DialogData {
  product: Product
}

@Component({
  selector: 'dialog-product',
  templateUrl: 'dialog-product.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ]
})
export class DialogProduct {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    type: new FormControl('')
  })
  readonly dialogRef = inject(MatDialogRef<DialogProduct>)
  readonly data = inject<DialogData>(MAT_DIALOG_DATA)
  readonly product = model(this.data.product)

  onNoClick(): void {
    this.dialogRef.close()
  }
}
