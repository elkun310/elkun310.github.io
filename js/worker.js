importScripts("/js/pusher.worker.js");
// importScripts("/js/push.js");


Pusher.setLogger(function(log){
	console.log(log)
});

var pusher = new Pusher('726f4534d962542caa20', {
	cluster: 'ap1',
	encrypted: true,
	disableStats: true
});
var channel = pusher.subscribe('my-channel');

channel.bind('my-event', function(data) {
  self.registration.showNotification(data.title, {
    icon: 'https://vinno.vn/sites/default/files/favi_vinno_1.png',
    body: data.message
  });
});
function showNotification() {
  Notification.requestPermission(function(result) {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification('Vibration Sample', {
          body: 'Buzz! Buzz!',
          icon: '../images/touch/chrome-touch-icon-192x192.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample'
        });
      });
    }
  });
}
// channel.bind('my-event', function(data) {
//   self.registration.Push.create(data.name,{
// 					body: data.message,
// 					icon: 'images/logo-small.jpg',
// 					timeout: 10000,
// 					onClick: function () {
// 						window.focus();
// 						this.close();
// 					}
// 				});
// });
// channel.bind('my-event', function(data) {
// 	Push.create(data.name,{
// 		body: data.message,
// 		icon: 'images/logo-small.jpg',
// 		timeout: 10000,
// 		onClick: function () {
// 			window.focus();
// 			this.close();
// 		}
// 	});
// });
