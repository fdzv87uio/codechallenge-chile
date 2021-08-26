import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html'
})
export class LocalStorageComponent {
  public myid!: any;
  public myform!: any;
  public posts:any[] = [];
 
  public data = [
    {
      postNumber: 1,
      title: "Ut Queant Laxis",
      author: "Paul, the Deacon",
      description: "Gregorian chant from the Abby of Montecasino",
      url: "http://www.google.com",
      urlToImage: "https://source.unsplash.com/random",
      publishedAt: "23/3/10"
    }
  ]
  public len = this.data.length;


  constructor(http: HttpClient) {
    //map every element on the data object and store it in Local Storage
    this.data.map(item => {
      this.setItem(item.postNumber, item.title, item.author, item.description, item.url, item.urlToImage, item.publishedAt);
    })

  }

 
  // Method to create a new post item in Local Storage
  public createItem() {
    try {
      var id = this.len + 1
      var newItem = {
        postNumber: id,
        title: '<empty>',
        author: '<empty>',
        description: '<empty>',
        url: '<empty>',
        urlToImage: 'https://source.unsplash.com/random',
        publishedAt: '<empty>'
      }
     
      this.posts.push(newItem);
      localStorage.setItem(id.toString(), JSON.stringify(newItem));
      window.scrollTo(0, document.body.scrollHeight);
      console.log("Post Successfully Added")
    } catch (error) {
      console.log(error)
    }

  }

  // Method to Set a post item in Local Storage
  public setItem(id:number, title: string, author: string, description: string, url: string, urlToImage: string, publishedAt: string):void {
    try {
      var ids = id.toString();
      var newItem = {
        postNumber: id,
        title: title,
        author: author,
        description: description,
        url: url,
        urlToImage: urlToImage,
        publishedAt: publishedAt
      };
      this.posts.push(newItem);
      localStorage.setItem(ids, JSON.stringify(newItem));
      console.log("Post Successfully Added")
    } catch (error) {
      console.log(error)
    }

  }

  // POst Removal
  public deleteItem(id: number) {

    try {
      var ids = id.toString();
      localStorage.removeItem(ids);
      console.log("Post Eliminated");

    } catch (error) {
      console.log(error)
    }


  }



  //The Following Method allows you to get an item by the key
  public getItem(id: string):any {
    try {
      var data = JSON.parse(localStorage.getItem(id));
      if (data) {
        return data;
      }
    } catch (error) {
      console.log(error);
    }


  }
  // Post Update method
  public updateItem(id: string, title: string, author: string, description: string, url: string, urlToImage:string, publishedAt:string): any {
    try {
      var idn = parseInt(id);
      this.posts[idn].title = title;
      this.posts[idn].author = author;
      this.posts[idn].description = description;
      this.posts[idn].url = url;
      this.posts[idn].urlToImage = urlToImage;
      this.posts[idn].publishedAt = publishedAt;

      //get new updated Object
      var updatedObject = this.posts[idn];

      //set local Storage
      localStorage.setItem(id, JSON.stringify(updatedObject));
      console.log("Post Updated Successfully");

    } catch (error) {
      console.log(error);
    }

  }

 
}
