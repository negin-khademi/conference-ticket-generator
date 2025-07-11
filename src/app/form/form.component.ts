import { BackgroundComponent } from "../background/background.component";
import { Component } from "@angular/core";
import { TitleCasePipe } from "@angular/common";

@Component({
	selector: "app-form",
	imports: [BackgroundComponent, TitleCasePipe],
	templateUrl: "./form.component.html",
	styleUrl: "./form.component.scss",
})
export class FormComponent {}
