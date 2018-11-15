import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  @Input() title = 'Default Title';
  constructor() { }

  ngOnInit() {
  }

}
