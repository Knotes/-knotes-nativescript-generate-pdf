import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptWechatComponent } from './nativescript-wechat.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptWechatComponent }])],
	declarations: [NativescriptWechatComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptWechatModule {}
