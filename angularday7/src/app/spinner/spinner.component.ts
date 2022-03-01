import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  loadingOption = this.loader.loading$;
  constructor(private loader : LoaderService) { }

  ngOnInit(): void {
  }

}
