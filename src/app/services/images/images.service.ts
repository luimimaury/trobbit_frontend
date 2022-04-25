import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http:HttpClient) { }

  public getRandomImages() {
    return this.http.get("http://localhost:3000/imagenes/");
  }

  public getFavouriteImages() {
    return this.http.get("http://localhost:3000/imagenes/favoritos");
  }

  public saveFavoriteImages(id:string) {
    return this.http.post("http://localhost:3000/imagenes/favoritos",{image_id:id});
  }

}
