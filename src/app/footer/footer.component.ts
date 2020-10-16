import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  circles = [1, 2, 3, 4, 5, 6];
  constructor() { }

  ngOnInit(): void {
  }

}
