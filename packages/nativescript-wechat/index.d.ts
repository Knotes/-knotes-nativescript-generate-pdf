import { Observable } from '@nativescript/core';
import { WechatSharingType, WechatSharingOptions, WechatSharingScene } from './wechat-share.common';

export declare function initWechatSdk(wechatAppId: any, universalLink?: string): void;
export declare class WechatLib extends Observable {
    constructor();
    doLogin(state?: string): boolean;
    share(options: WechatSharingOptions): boolean;
    isWechatInstalled(): boolean;
}
export { WechatSharingOptions, WechatSharingType, WechatSharingScene };

