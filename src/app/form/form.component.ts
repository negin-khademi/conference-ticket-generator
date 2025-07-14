import { Component, inject } from "@angular/core";

import { BackgroundComponent } from "../background/background.component";
import { DataTransferService } from "./../shared/services/data-transfer.service";
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

	name!: string;
	emailAdress!: string;
	gitHubAccount!: string;
	constructor(private dataTransferService: DataTransferService) {}

	sendData() {}

	onSubmit() {
		const dataToSend = {
			name: this.name,
			emailAddress: this.emailAdress,
			gitHubAccount: this.gitHubAccount,
		};
		const dataFromForm = dataToSend;
		this.dataTransferService.changeData(dataFromForm);
		console.log(dataFromForm);
		// this.router.navigate(["ticket"]);
	}
}
