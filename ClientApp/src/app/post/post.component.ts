import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent {
  @Input() post: any;
  MyPost!: any;
  // Boolean to disable control panel
  @Input() enableSetup: any;
  // CRUD
  @Input() setItem: (id: number, title: string, author: string, description: string, url: string, urlToImage: string, publishedAt: string) => void;
  @Input() deleteItem: (id: number) => void;
 


  // Toogle Form display
  setupOpen: false;
  //post Number
  Pnumber:any;
  


  constructor() {
  };




  public onSubmit(data) {
    this.setItem(data.postNumber, data.title, data.author, data.description, data.url, data.urlToImage, data.publishedAt);
    this.setupOpen = false;
  
}



}

export interface Post {
  postNumber: number,
  title: string,
  author: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string
}
