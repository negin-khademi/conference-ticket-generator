import { BehaviorSubject, Observable } from "rxjs";

import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class DataTransferService {
	private dataSorce = new BehaviorSubject<any>(null);
	currentdata: Observable<any> = this.dataSorce.asObservable();

	constructor() {}

	changeData(data: any) {
		this.dataSorce.next(data);
	}
}
