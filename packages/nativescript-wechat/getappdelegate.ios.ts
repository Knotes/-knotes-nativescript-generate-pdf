import { Application } from "@nativescript/core";
import { ApplicationEventData } from "@nativescript/core/application"

declare var UIResponder, UIApplicationDelegate, NSObject, WXApi;

export function getAppDelegate() {
    // Play nice with other plugins by not completely ignoring anything already added to the appdelegate
    console.log('11111111111111')
    console.dir(Application.ios)
    if (Application.ios.delegate === undefined) {
        @NativeClass()
        class UIApplicationDelegateImpl extends UIResponder {
            public static ObjCProtocols = [UIApplicationDelegate];

            static new(): UIApplicationDelegateImpl {
                return <UIApplicationDelegateImpl>super.new();
            }
        }

        Application.ios.delegate = UIApplicationDelegateImpl;
    }

    console.log(Application.ios.delegate);
    return Application.ios.delegate;
}

export function enableMultipleOverridesFor(classRef, methodName, nextImplementation) {
    const currentImplementation = classRef.prototype[methodName];
    classRef.prototype[methodName] = function () {
        const result = currentImplementation && currentImplementation.apply(currentImplementation, Array.from(arguments));
        return nextImplementation.apply(nextImplementation, Array.from(arguments).concat([result]));
    };
}

export function setupAppDeligate(wechatAppId, universalLink) {

    let appDelegate = getAppDelegate();

    enableMultipleOverridesFor(appDelegate, 'applicationDidFinishLaunchingWithOptions', function (application, launchOptions) {
        console.log('setupAppDeligate 5.0')
        WXApi.registerAppUniversalLink(wechatAppId, universalLink);
        console.log('setupAppDeligate 5')
        return true;
    });

    console.log('setupAppDeligate 1')

    enableMultipleOverridesFor(appDelegate, 'applicationHandleOpenURL', function (application, url) {
        return WXApi.handleOpenURLDelegate(url, WXApiManagerDelegate.new())
    });
    console.log('setupAppDeligate 2')

    enableMultipleOverridesFor(appDelegate, 'applicationOpenURLSourceApplicationAnnotation', function (application, url, sourceApplication, annotation) {
        try {
            console.log('setupAppDeligate 6')
            return WXApi.handleOpenURLDelegate(url, WXApiManagerDelegate.new())
        } catch (e) {
            console.log("error!!")
            console.log(e);
        }

    });
    console.log('setupAppDeligate 3')

    enableMultipleOverridesFor(appDelegate, 'applicationContinueUserActivityRestorationHandler', function (application, userActivity, handler) {
        return WXApi.handleOpenUniversalLinkDelegate(userActivity, WXApiManagerDelegate.new());
    });
    console.log('setupAppDeligate 4')

}

@NativeClass()
class WXApiManagerDelegate extends NSObject {

    public static ObjCProtocols = [WXApiDelegate];

    static new(): WXApiManagerDelegate {
        return <WXApiManagerDelegate>super.new();
    }

    public onReq(res) {
        console.log("onReq")
    }

    /**
     * onResp
     */
    public onResp(res) {
        console.log("BaseResp")
        setTimeout(() => {
            Application.notify(<ApplicationEventData>{
                eventName: 'wxApiResponse',
                object: res,
                activity: this
            });
        }, 500);
    }
}
