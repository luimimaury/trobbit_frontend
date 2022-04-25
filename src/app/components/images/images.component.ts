import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/interfaces/image.interface';
import { ImagesService } from 'src/app/services/images/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  public images: Image[] = []
  public favoriteImages = []
  constructor(private imageService: ImagesService) { }

  ngOnInit(): void {
    this.getRandomImages()
  }

  getRandomImages() {
    this.imageService.getRandomImages().subscribe((res: any) => {
      console.table(res)
      this.images = res;
    }, (err) => {
      console.error(err)
    })

  }

  markAsFavorite(id: string) {
    console.log(id)
    this.imageService.saveFavoriteImages(id).subscribe((res: any) => {
      console.table(res)
    }, (err) => {
      console.error(err)
    })
  }




}
