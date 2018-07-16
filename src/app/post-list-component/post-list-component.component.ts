import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  //@Input() table;
  /*posts=[
    {
      title:'post 1',
      content:'Contenu du post 1',
      loveIts:1
    },
    {
      title:'post 2',
      content:'Contenu du post 2',
      loveIts:-1
    },
    {
      title:'post 3',
      content:'Contenu du post 3',
      loveIts:0
    },
  ]*/

  posts: any[];
  postSubscription: Subscription;

  constructor(
    private postService:PostService,
    private route:ActivatedRoute,
    private formBuilder: FormBuilder
  ){}

  ngOnInit() {
    console.log('ngOnInit');
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postService.getPostsFromServer();
  }

  save(){
    this.postService.savePostsToServer();
  }

  get(){
    this.postService.getPostsFromServer();
  }

}
