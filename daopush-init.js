(function(){
	var s = document.createElement('script');
	s.setAttribute('defer', '');
	s.setAttribute('src', "/push-wrap.js");
	s.onload = init;
	document.body.appendChild(s);

    function init() {
        var obj = new PushKaWrapper({"pid":1,"sourceId":"2","landingId":24,"marks":{"utm_source":null,"utm_medium":null,"utm_campaign":null,"utm_term":null,"utm_content":null},"popupUrl":"https:\/\/notifymepush.info\/rs\/2?count=1&declCount=1&fullScreenMode=enabled","pushKaScript":"https:\/\/pushmeandtouchme.info\/push.js?b=8","languages":{"en":{"btnSubscribe":"Subscribe","btnContinue":"Continue","btnCancel":"Cancel","btnClose":"Close","notRobot":"I'm not a robot","popupTitle":"Get notification about actual news from site","popupText":"To continue, enable the subscription","titleNotification":"Notification"}}});
        
        obj.prompt('self_window',1, 600);
    }
})();