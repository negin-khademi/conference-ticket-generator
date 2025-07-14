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
	url!: any;
	name!: string;
	emailAdress!: string;
	gitHubAccount!: string;

	fileName = "";
	constructor(private dataTransferService: DataTransferService) {}

	sendData() {}
	// upload file from local
	onFileSelected(event: any) {
		let reader = new FileReader();
		if (event.target.files && event.target.files.length > 0) {
			let file = event.target.files[0];
			reader.readAsDataURL(file);
			reader.onload = () => {
				this.url = reader.result;
			};
		}
	}

	onRemoveImage() {
		this.url = "";
	}
	onChangeImage() {}
	onSubmit() {
		const dataToSend = {
			image: this.url,
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
