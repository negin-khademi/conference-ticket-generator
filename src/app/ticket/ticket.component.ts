import { DatePipe, TitleCasePipe } from "@angular/common";

import { BackgroundComponent } from "../background/background.component";
import { Component } from "@angular/core";

@Component({
	selector: "app-ticket",
	imports: [BackgroundComponent, TitleCasePipe, DatePipe],
	templateUrl: "./ticket.component.html",
	styleUrl: "./ticket.component.scss",
})
export class TicketComponent {
	currentDateTime: Date = new Date();
}
