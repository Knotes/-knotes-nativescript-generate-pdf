import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptWechat } from '@demo/shared';
import {} from '@knotes/nativescript-wechat';

@Component({
	selector: 'demo-nativescript-wechat',
	templateUrl: 'nativescript-wechat.component.html',
})
export class NativescriptWechatComponent {
	demoShared: DemoSharedNativescriptWechat;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptWechat();
	}
}
