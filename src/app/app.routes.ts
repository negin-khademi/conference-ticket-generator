import { FormComponent } from "./form/form.component";
import { Routes } from "@angular/router";
import { TicketComponent } from "./ticket/ticket.component";

export const routes: Routes = [
	{
		path: "",
		component: FormComponent,
	},
	{
		path: "ticket",
		component: TicketComponent,
	},
];
