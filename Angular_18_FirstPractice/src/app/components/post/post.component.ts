import { Component } from '@angular/core';
import { JsonHolderService } from '../../services/json-holder.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";



@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule, CommonModule, NavBarComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  posts: any[] =[];
  newPost={
    title: '',
    content: '',
    url: '',
    slug: '',
    image: '',
    thumbnail: '',
    status: '',
    category: '',
    publishedAt: '',
    updatedAt: '',
    userId: ''
  }

  constructor(private jsonholder:JsonHolderService){}

  ngOnInit():void{
    this.fetchPosts();

  }

  fetchPosts():void{
    this.jsonholder.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
  addPost(): void {
    const postToSubmit={...this.newPost,userId:1};
    this.jsonholder.addPost(postToSubmit).subscribe(response => {
      this.posts.unshift(response);
      this.newPost={  title: '',
        content: '',
        url: '',
        slug: '',
        image: '',
        thumbnail: '',
        status: '',
        category: '',
        publishedAt: '',
        updatedAt: '',
        userId:''}
      console.log(response);

    });
  }

}
