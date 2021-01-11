import { Observable, WebView } from '@nativescript/core';

export declare class GeneratePdf extends Observable {
	private pageRenderer;
	private pdfData;
	constructor();
	createPdf(webView: WebView, fileName: string): string;
	generatePdfData(): void;
	saveWebViewPdf(): string;
}
