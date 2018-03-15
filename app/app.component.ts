import {Component, OnInit} from '@angular/core';
import {PuppiesService} from './services/puppies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Angular 2 demo app works!';
  puppies = [];

  constructor(public puppiesService: PuppiesService) { // constructor for this class
    // no complex logic, only setting inital values to variables. Use OnInit instead.
  }

  ngOnInit() {
    this.puppies = this.puppiesService.puppies;
  }

  teachTrick(p) {
    p.knowsTricks = !p.knowsTricks;
  }

  setAge(p, n) {
    p.age = n;
  }
}
