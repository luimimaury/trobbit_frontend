import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Image } from 'src/app/interfaces/image.interface';
import { ImagesService } from 'src/app/services/images/images.service';


@Component({
  selector: 'app-project-creation-dialog',
  templateUrl: './cat-creation-dialog.html',
  styleUrls: ['./cat-creation-dialog.css']
})

export class CatCreationDialogComponent implements OnInit {
    public photos: Image[] = []
  constructor(
    public imageService: ImagesService,
    public dialogRef: MatDialogRef<CatCreationDialogComponent>,
  ) { }

  ngOnInit() {
      this.getFavImages()
  }

  getFavImages(){
      this.imageService.getFavouriteImages().subscribe((res:any)=>{
          this.photos=res.map((data:any) => data.image);
          console.table(res)
      },(err)=>{
          console.error(err)
      })
  }

  getUrl(url:string){
    this.dialogRef.close({url:url})
  }
}
//#endregion