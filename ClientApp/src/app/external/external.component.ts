import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-external',
  templateUrl: './external.component.html'
})
export class ExternalComponent {
  public data: Data;
  public posts;


  constructor(http: HttpClient) {

    /*retrieve posts from External source*/
    http.get<Data>("https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json").subscribe(result => {
      this.data = result;
      this.posts = this.data.articles;
      console.log(this.posts);
    }, error => console.error(error));


  }

}

interface Data {
  articles: any;
  status: string;
  totalResults: number;
  
}
