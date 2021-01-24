import { Observable } from '@nativescript/core/data/observable';
import { WechatSharingOptions, WechatSharingType, WechatSharingScene, buildSendMessageToWXReq } from './wechat-share.common';
import { setupAppDeligate } from './getappdelegate.ios'

// const setupAppDeligate = require('./getappdelegate').setupAppDeligate;

export function initWechatSdk(wechatAppId, universalLink) {
    setupAppDeligate(wechatAppId, universalLink);
}

export class WechatLogin extends Observable {

    constructor() {
        super();
    }

    /**
     * doLogin
     */
    public doLogin(state = '') {

        let req = SendAuthReq.alloc();
        req.scope = "snsapi_userinfo";

        if (state !== '') {
            req.state = state;
        }

        WXApi.sendReqCompletion(req, function (res) {
            return res;
        });
    }

    /**
     * Share to wechat
     */
    public share(options: WechatSharingOptions) {

        let req = buildSendMessageToWXReq(options);

        WXApi.sendReqCompletion(req, function (res) {
            return res;
        });
    }

    /**
     * isWechatInstalled
     */
    public isWechatInstalled() {
        return WXApi.isWXAppInstalled();
    }
}

export { WechatSharingOptions, WechatSharingType, WechatSharingScene };