import {Component} from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';

/**
 * @title Radios with ngModel
 */
@Component({
  selector: 'radio-ng-model-example',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class RadioNgModelExample {
  favoriteSeason: string;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
}
