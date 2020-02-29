import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from "./login.component";
import {HelloComponent} from './hello.component';

@NgModule({
    declarations: [
        LoginComponent, HelloComponent
    ],
    imports: [
        ReactiveFormsModule,
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {
}