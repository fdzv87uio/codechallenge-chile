import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html'
})
export class ApiComponent {
  public posts: any[];


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    /*retrieve posts from .net core API*/
    http.get<any[]>(baseUrl + 'Post').subscribe(result => {
      this.posts = result;
      console.log(this.posts);
    }, error => console.error(error));


  }

}
