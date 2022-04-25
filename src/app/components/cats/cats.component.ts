import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from 'src/app/interfaces/cat.interface';
import { CatsService } from 'src/app/services/cats/cats.service';


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  public cats: Cat[] = []

  constructor(private router:Router,private catService:CatsService) {}

  ngOnInit(): void {
    this.getMyCats()
  }

   editCat(cat:any){
     this.router.navigateByUrl('/crear',{state:cat})
  }

  deleteCat(cat:Cat){
    this.catService.deleteCat(cat._id!).subscribe((res:any)=>{
      this.getMyCats()
    },(err)=>{
      console.error(err)
    })
  }

  getMyCats(){
    this.catService.getMyCats().subscribe((res:any)=>{
      console.table(res)
      this.cats=res;
    },(err)=>{
      console.error(err)
    })
  }


}
