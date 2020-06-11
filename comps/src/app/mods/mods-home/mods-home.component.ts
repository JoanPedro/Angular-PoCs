import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen: boolean = false;
  items = [
    { title: 'Why is the sky blue?', content: 'Sky is blue because it is.' },
    { title: 'What does orange taste like?', content: 'An oranges tastes like an orange.' },
    { title: 'What collor is that cat?', content: 'The cat is orange collor.' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.modalOpen = !this.modalOpen
  }

}
