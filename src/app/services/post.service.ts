import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()

export class PostService {

  postsSubject = new Subject<any[]>();

  private posts=[];
  
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ){}

  savePostsToServer(){
    this.httpClient
      .put('https://postlist-2eabd.firebaseio.com/posts.json',this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
          this.router.navigate(['/postlist']);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getPostsFromServer() {
    this.httpClient
      .get<any[]>('https://postlist-2eabd.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          this.emitPostSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addLove(index){
    this.posts[index].loveIts++;
    this.emitPostSubject();
  }

  removeLove(index){
    this.posts[index].loveIts--;
    this.emitPostSubject();
  }

  addPost(post){
    this.posts.push(post);
    this.savePostsToServer();
  }

  getLength(){
    return this.posts.length;
  }

  deletePost(index){
    // Delete the designated post
    this.posts.splice(index,1);
    // Reduces the index of the following posts
    for(var i=index;i<this.posts.length;i++){
      this.posts[i].index--;
    }
    //this.savePostsToServer();
    this.emitPostSubject();
  }
}
