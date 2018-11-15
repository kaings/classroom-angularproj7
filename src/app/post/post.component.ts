import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {SinglePostComponent} from './single-post/single-post.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PostComponent implements OnInit, AfterViewInit {
  @ViewChild('container', {read: ViewContainerRef}) singlePostContainer;

  constructor(private factoryResolver: ComponentFactoryResolver, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const singlePostFactory = this.factoryResolver.resolveComponentFactory(SinglePostComponent);
    this.singlePostContainer.createComponent(singlePostFactory);
    this.singlePostContainer.createComponent(singlePostFactory);
    this.singlePostContainer.createComponent(singlePostFactory);

    const singlePostRef = this.singlePostContainer.createComponent(singlePostFactory);
    singlePostRef.instance.title = 'Customized Title';

    this.changeDetectorRef.detectChanges();
  }

}
