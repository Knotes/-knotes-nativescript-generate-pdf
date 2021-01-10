import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptGeneratePdfComponent } from './nativescript-generate-pdf.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptGeneratePdfComponent }])],
	declarations: [NativescriptGeneratePdfComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptGeneratePdfModule {}
