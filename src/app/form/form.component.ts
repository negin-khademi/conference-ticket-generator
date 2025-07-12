import { Component, inject } from "@angular/core";

import { BackgroundComponent } from "../background/background.component";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { TitleCasePipe } from "@angular/common";

@Component({
	selector: "app-form",
	imports: [BackgroundComponent, TitleCasePipe, FormsModule],
	templateUrl: "./form.component.html",
	styleUrl: "./form.component.scss",
})
export class FormComponent {
	private router = inject(Router);
	onSubmit() {
		this.router.navigate(["ticket"]);
	}
}
