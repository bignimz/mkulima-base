import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CatalogueFeedService } from 'src/app/services/catalogue-feed.service';



@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  feeds: any = [];
  categories: any = [];
  comments: any = [];

  form!: FormGroup;
  angForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  })


  constructor(private feedService:CatalogueFeedService) { }

  ngOnInit(): void {
    this.feedService.getFeeds().subscribe((data)=>{
      this.feeds = data;
      console.log(this.feeds);
    })
    this.feedService.getCategorys().subscribe((data)=>{
      this.categories = data;
      console.log(this.categories);
    });

  }

  getComments(id:number) {
    this.feedService.getComment(id).subscribe((data)=>{
      this.comments = data;
      console.log(this.comments);
      console.log(id);
    });

  
  }
  equal(feed:any, comment:any) {
    return feed === comment;  
    console.log(feed,comment)
    
  }

  postComment() {
    this.feedService.postComment(this.form.getRawValue()).subscribe(
      data=>(console.log(data))
     
  );
  }


}

