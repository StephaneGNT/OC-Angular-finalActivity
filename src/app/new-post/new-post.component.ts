import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Post } from '../post'

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  newPostForm: FormGroup;

  constructor(
    private postService:PostService, 
    private router:Router,
    private formBuilder:FormBuilder
  ){}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }    

  onSubmitForm(){
    const formValue = this.newPostForm.value;
    const newPost = new Post(
      formValue['title'],
      formValue['content'],
      0,
      this.postService.getLength()
    );
    this.postService.addPost(newPost);
  }
}
