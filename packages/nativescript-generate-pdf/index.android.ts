import { Observable, Application, Utils } from '@nativescript/core';

export class GeneratePdf extends Observable {
	private pageRenderer: any;
	private pdfData: any;

	constructor() {
		super();
	}

	createPdf(webView: android.webkit.WebView, fileName: string) {
		const activity = Application.android.foregroundActivity || Application.android.startActivity;
		const printManager = activity.getSystemService(android.content.Context.PRINT_SERVICE);
		const printAdapter = webView.createPrintDocumentAdapter();
		const jobName = Utils.android.resources.getStringId('app_name') + ' Document';

		if (printManager != null) {
			printManager.print(jobName, printAdapter, null);
		}

		return '';
	}

	generatePdfData() {}

	saveWebViewPdf(fileName: string) {
		return '';
	}
}
