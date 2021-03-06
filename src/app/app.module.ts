import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { GOTCharacterComponent } from './gotcharacter/gotcharacter.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { AppBoldDirective } from './app-bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    GOTCharacterComponent,
    DirectiveExampleComponent,
    AppBoldDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
