import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-susan',
  templateUrl: './susan.component.html',
  styleUrls: ['./susan.component.css']
})
export class SusanComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
  }

}
