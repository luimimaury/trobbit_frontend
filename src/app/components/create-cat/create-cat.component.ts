import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from 'src/app/interfaces/cat.interface';
import { CatsService } from 'src/app/services/cats/cats.service';
import { CatCreationDialogComponent } from '../cats/cat/cat-creation-dialog';

@Component({
  selector: 'app-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.css']
})
export class CreateCatComponent implements OnInit {
  name = "";
  breed = "";
  age = 0;
  photo_url = ""
  id = ""
  cat_edited?: Cat;
  constructor(private router: ActivatedRoute, public dialog: MatDialog, private catService: CatsService) { }

  ngOnInit(): void {
    if (this.router.snapshot.paramMap.get('_id')) {
      this.name = this.router.snapshot.paramMap.get('name')!
      this.breed = this.router.snapshot.paramMap.get('breed')!;
      this.age = +this.router.snapshot.paramMap.get('age')!;
      this.photo_url = this.router.snapshot.paramMap.get('photo_url')!;
      this.id = this.router.snapshot.paramMap.get('_id')!;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(CatCreationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.photo_url = result.url
      console.log(`Dialog result: ${result.url}`);
    });
  }

  createCat() {
    const cat = { name: this.name, breed: this.breed, age: this.age, photo_url: this.photo_url }
    if(this.id){
      this.catService.editCat(cat,this.id).subscribe((res: any) => {
        console.log(res)
        window.location.href="/gatos"
      }, (err) => {
        console.log(err)
      });
    }else{
      this.catService.createCat(cat).subscribe((res: any) => {
        console.log(res)
        window.location.href="/gatos"
      }, (err) => {
        console.log(err)
      });
    }
    
  }

  


}
