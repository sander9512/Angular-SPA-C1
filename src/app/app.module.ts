import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { FooterComponent } from './footer/footer.component';
import { SportshallsComponent } from './sportshalls/sportshalls.component';
import { SportshallListComponent } from './sportshalls/sportshall-list/sportshall-list.component';
import { SportshallItemComponent } from './sportshalls/sportshall-list/sportshall-item/sportshall-item.component';
import {SportsHallsService} from './shared/services/sportshall.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    FooterComponent,
    SportshallsComponent,
    SportshallListComponent,
    SportshallItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SportsHallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
