import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptGeneratePdf } from '@demo/shared';
import {} from '@knotes/nativescript-generate-pdf';

@Component({
	selector: 'demo-nativescript-generate-pdf',
	templateUrl: 'nativescript-generate-pdf.component.html',
})
export class NativescriptGeneratePdfComponent {
	demoShared: DemoSharedNativescriptGeneratePdf;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptGeneratePdf();
	}
}
