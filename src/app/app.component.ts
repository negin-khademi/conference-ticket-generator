import { Component } from "@angular/core";
import { FormComponent } from "./form/form.component";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, FormComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "conference-ticket-generator";
}
