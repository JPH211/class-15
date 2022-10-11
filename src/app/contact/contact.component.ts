import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

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
