import { BackgroundComponent } from "./background/background.component";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, BackgroundComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "conference-ticket-generator";
}
