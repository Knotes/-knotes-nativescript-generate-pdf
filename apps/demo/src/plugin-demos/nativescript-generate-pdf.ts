import { GeneratePdf } from '@knotes/nativescript-generate-pdf';
import { WebView, LoadEventData } from '@nativescript/core/ui/web-view';
import { NavigatedData, Page } from '@nativescript/core/ui/page';
import { Observable, knownFolders, isIOS } from '@nativescript/core';
import * as permissions from 'nativescript-permissions';
import { html } from './html';

let webView: any;

export function onNavigatingTo(args: NavigatedData) {
	const page = <Page>args.object;

	page.bindingContext = new DemoGeneratePdfModel();
}

export function onWebViewLoaded(args: LoadEventData) {
	webView = (<WebView>args.object).nativeView;
	console.log(new GeneratePdf().createPdf(webView, 'MyPdfFileName'));
}

export function onRefresh(args: LoadEventData) {
	webView.reload();
}

export class DemoGeneratePdfModel extends Observable {
	public webViewSRC: string;

	constructor() {
		super();
		this.webViewSRC = this.getHtmlPath();
		console.log('webViewSRC', this.webViewSRC);
	}

	getHtmlPath() {
		if (!isIOS) {
			permissions.requestPermission([android.Manifest.permission.READ_EXTERNAL_STORAGE, android.Manifest.permission.WRITE_EXTERNAL_STORAGE], 'Need to save files to disk');
		}
		const htmlFile = knownFolders.temp().getFile('index.html');
		htmlFile.writeTextSync(html);
		return htmlFile.path;
	}
}
