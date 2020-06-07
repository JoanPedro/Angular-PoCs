import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    { name: 'James', age: 24, job: 'Designer', employed: 'true' },
    { name: 'Jill', age: 31, job: 'Engineer', employed: 'false' },
    { name: 'Christinna', age: 26, job: 'Engineer', employed: 'false' },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Has a job?' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
