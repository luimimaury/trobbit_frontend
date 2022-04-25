import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from 'src/app/interfaces/cat.interface';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private http:HttpClient) { }


  public createCat(cat:Cat) {
    return this.http.post("http://localhost:3000/gatos/",cat);
  }
  public editCat(editedData:any,id:string) {
    return this.http.put(`http://localhost:3000/gatos/${id}`,editedData);
  }
  public deleteCat(id:string) {
    return this.http.delete("http://localhost:3000/gatos/"+id);
  }
  public getMyCats(){
    return this.http.get("http://localhost:3000/gatos/")
  }
}
