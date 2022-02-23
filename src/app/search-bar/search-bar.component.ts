import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<string>()
  term = ''
  constructor() {}

  ngOnInit(): void {}

  onSubmit(e: any) {
    e.preventDefault()
     this.formSubmitted.emit(this.term)
     console.log(this.term);
  }
}
