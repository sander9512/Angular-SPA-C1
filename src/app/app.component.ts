import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'our app';
  loadedFeature = 'sportshalls';

  onNavigate(feature) {
    this.loadedFeature = feature;
  }
}
