import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pytania',
  templateUrl: './pytania.component.html',
  styleUrls: ['./pytania.component.css']
})
export class PytaniaComponent implements OnInit {
  @Input() nazwa?: string;

  @Input() odpowiedz?: string;
  @Output() odpowiedzChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.nazwa);
  }

  zapisz(): void {
    this.odpowiedzChange.emit(this.nazwa);
  }
}
