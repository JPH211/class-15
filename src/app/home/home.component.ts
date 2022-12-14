import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onGoHome(){
    this.router.navigate(['../home'], {relativeTo: this.route});
  }
  onGoAbout(){
    this.router.navigate(['../about'], {relativeTo: this.route});
  }
  onGoContact(){
    this.router.navigate(['../contact'], {relativeTo: this.route});
  }
}
