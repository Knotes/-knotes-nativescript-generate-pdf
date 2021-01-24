import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
		{
			name: 'nativescript-generate-pdf',
		},
		{
			name: 'nativescript-wechat',
		},
	];
}
