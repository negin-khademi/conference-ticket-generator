import { CommonModule, TitleCasePipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";

import { BackgroundComponent } from "../background/background.component";
import { DataTransferService } from "./../shared/services/data-transfer.service";
import { HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
	selector: "app-form",
	imports: [
		BackgroundComponent,
		TitleCasePipe,
		FormsModule,
		CommonModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	templateUrl: "./form.component.html",
	styleUrl: "./form.component.scss",
})
export class FormComponent {
	private router = inject(Router);

	dataForm = new FormGroup({
		url: new FormControl("", Validators.required),
		name: new FormControl("", Validators.required),
		emailAddress: new FormControl("", [Validators.required, Validators.email]),
		gitHubAccount: new FormControl("", Validators.required),
	});
	submitted: boolean = false;

	fileName = "";
	constructor(private dataTransferService: DataTransferService) {}

	sendData() {}
	// upload file from local
	onFileSelected(event: any) {
		let reader = new FileReader();
		if (event.target.files && event.target.files.length > 0) {
			let file = event.target.files[0];

			if (file) {
				const maxSizeInKB = 50;

				if (file.size > maxSizeInKB * 1024) {
					// Image is too large
					this.dataForm.get("url")?.setErrors({ tooLarge: true });
					return;
				}
			}

			reader.readAsDataURL(file);
			reader.onload = () => {
				this.dataForm.get("url")?.setValue(reader.result as string);
			};
		}
	}

	get urlControl() {
		return this.dataForm.get("url");
	}
	get nameControl() {
		return this.dataForm.get("name");
	}
	get emailControl() {
		return this.dataForm.get("emailAddress");
	}
	get gitControl() {
		return this.dataForm.get("gitHubAccount");
	}

	checkGitValidation(): Observable<any> {
		const username = this.gitControl?.value || "";
		return this.dataTransferService.gitHubChecked(username);
	}

	onRemoveImage() {
		this.dataForm.get("url")?.setValue("");
	}
	onChangeImage() {
		this.onFileSelected(event);
	}
	onFileInputTouched() {
		if (this.urlControl) {
			this.urlControl.markAsTouched();
		}
	}

	onSubmit() {
		if (this.dataForm.invalid) {
			this.dataForm.markAllAsTouched();
			return;
		}

		this.submitted = true;

		this.checkGitValidation().subscribe({
			next: (res) => {
				this.gitControl?.setErrors(null); // clear error
				this.dataTransferService.changeData(this.dataForm);
				this.router.navigate(["ticket"]); // ✅ navigate only after success
			},
			error: (err) => {
				if (err.status === 404) {
					this.gitControl?.setErrors({ notFound: true });
					this.submitted = false; // ❌ don't navigate
				}
			},
		});
	}
}
