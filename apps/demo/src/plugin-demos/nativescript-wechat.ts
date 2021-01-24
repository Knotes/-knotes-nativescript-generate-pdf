import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptWechat } from '@demo/shared';
import {} from '@knotes/nativescript-wechat';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptWechat {}
