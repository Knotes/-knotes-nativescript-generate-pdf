<template>
	<Page>
		<ActionBar title="Welcome to NativeScript-Vue!" />
		<Button text="wechat login" @tap="wechatLogin" />
	</Page>
</template>

<script >
import { initWechatSdk, WechatLogin } from '@knotes/nativescript-wechat';
import { Application } from '@nativescript/core';

initWechatSdk('wx9b28993d5c8d294b', 'https://www.your.app.universal.link');
export default {
	data() {},
	methods: {
		wechatLogin() {
			// initWechatSdk(
			//   "wx9b28993d5c8d294b",
			//   "https://www.your.app.universal.link"
			// );

			const wechat = new WechatLogin();
			if (wechat.isWechatInstalled()) {
				wechat.doLogin('knotes_ios_app');
			} else {
				console.log('wechat is not installed');
			}
		},
		async wxResponseHandle(res) {
			//app.off("wxApiResponse", this.wxResponseHandle, this);
			console.log('wxApiResponse');

			let response = res.object;
			console.dir(response);

			switch (response.errCode) {
				case 0:
					console.log('user permits login');
					console.log(response.code); // here you have the value of code which can be use to obtain wechat openid.
					break;

				case -2:
					console.log('user canceled');
					break;

				case -4:
					console.log('user refused to authorize');
					break;

				default:
					console.log('unknow error');
					break;
			}
		},
	},
	mounted() {
		Application.on('wxApiResponse', this.wxResponseHandle, this);
	},
};
</script>

<style scoped>
ActionBar {
	background-color: #53ba82;
	color: #ffffff;
}

.message {
	vertical-align: center;
	text-align: center;
	font-size: 20;
	color: #333333;
}
</style>
