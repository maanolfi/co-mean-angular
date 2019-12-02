import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Post } from './../services/post'
import { AppService } from './../services/app.service' 

@Component({
  selector: 'app-postdetails-component',
  templateUrl: './postdetails-component.component.html',
  styleUrls: ['./postdetails-component.component.css']
})
export class PostdetailsComponent implements OnInit {

  constructor(private appService: AppService, private route: ActivatedRoute) { }
  post: Post

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.appService.fecth(params.slug).subscribe(res => this.post = res)
    })
  }

}
