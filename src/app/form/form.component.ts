import { CommonModule, TitleCasePipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";

import { BackgroundComponent } from "../background/background.component";
import { DataTransferService } from "./../shared/services/data-transfer.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-form",
	imports: [BackgroundComponent, TitleCasePipe, FormsModule, CommonModule],
	templateUrl: "./form.component.html",
	styleUrl: "./form.component.scss",
})
export class FormComponent {
	private router = inject(Router);
	url!: any;
	name!: string;
	emailAdress!: string;
	gitHubAccount!: string;

	submitted: boolean = false;

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
	onChangeImage() {
		this.onFileSelected(event);
	}
	onSubmit(form: NgForm) {
		this.submitted = true;
		if (form.invalid) return;

		const dataToSend = {
			image: this.url,
			name: this.name,
			emailAddress: this.emailAdress,
			gitHubAccount: this.gitHubAccount,
		};
		const dataFromForm = dataToSend;
		this.dataTransferService.changeData(dataFromForm);

		this.router.navigate(["ticket"]);
	}
}
