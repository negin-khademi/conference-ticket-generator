import { BehaviorSubject, Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class DataTransferService {
	private dataSorce = new BehaviorSubject<any>(null);
	currentdata: Observable<any> = this.dataSorce.asObservable();

	constructor(private http: HttpClient) {}

	changeData(data: any) {
		this.dataSorce.next(data);
		console.log(data.value.url);
	}

	gitHubChecked(username: string): Observable<any> {
		return this.http.get(`https://api.github.com/users/${username}`);
	}
}
