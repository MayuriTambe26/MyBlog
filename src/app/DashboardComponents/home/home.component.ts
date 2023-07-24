import { Component } from '@angular/core';
import { MockPosts } from 'src/app/mock-data';
import { FormGroup,FormControl } from '@angular/forms';
import { PostInterface } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
myMockPosts=MockPosts.reverse();
newPostForm:FormGroup=new FormGroup({
  title: new FormControl(''),
  category:new FormControl(''),
  content:new FormControl(''),
  imageAddress:new FormControl('')
})

addPost(){
  let title=this.newPostForm.value.title;
  let category=this.newPostForm.value.category;
  let content=this.newPostForm.value.content;
  let imageAddress=this.newPostForm.value.imageAddress;

  let newPost:PostInterface={
    postId:MockPosts.length+1,
    title:title,
    category:category,
    content:content,
    imageAddress:imageAddress,
    date:this.getCurrentDate(),
    duration: '10 min read'
  }
  MockPosts.push(newPost);
  this.myMockPosts=MockPosts.reverse();
}
getCurrentDate(): string {
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = currentDate.toLocaleString('default', { month: 'short' });
  const year = String(currentDate.getFullYear());

  return `${day} ${month} ${year}`;
}
}

