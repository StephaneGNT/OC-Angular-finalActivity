import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLove: number;
  @Input() postIndex: number;

  constructor(
    private postService:PostService
  ){}

  ngOnInit() {
  }

  /*addLoveIts(){
    this.postLove=this.postLove+1;
  }

  removeLoveIts(){
    this.postLove=this.postLove-1;
  }*/

  addLoveIts(){
    this.postService.addLove(this.postIndex);
  }

  removeLoveIts(){
    this.postService.removeLove(this.postIndex);
  }

  deletePost(){
    this.postService.deletePost(this.postIndex)
  }

}
