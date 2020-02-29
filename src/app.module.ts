import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './app/login.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		LoginModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule { }