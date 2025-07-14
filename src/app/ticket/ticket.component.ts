import { Component, OnInit } from "@angular/core";
import { DatePipe, TitleCasePipe } from "@angular/common";

import { BackgroundComponent } from "../background/background.component";
import { DataTransferService } from "./../shared/services/data-transfer.service";

@Component({
	selector: "app-ticket",
	imports: [BackgroundComponent, TitleCasePipe, DatePipe],
	templateUrl: "./ticket.component.html",
	styleUrl: "./ticket.component.scss",
})
export class TicketComponent implements OnInit {
	currentDateTime: Date = new Date();
	receiveData: any;

	constructor(public dataTransferService: DataTransferService) {}

	ngOnInit() {
		this.dataTransferService.currentdata.subscribe((data) => {
			this.receiveData = data;
		});
	}
}
