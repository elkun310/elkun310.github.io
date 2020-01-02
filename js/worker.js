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

// channel.bind('my-event', function(data) {
//   self.registration.showNotification(data.title, {
//     icon: 'https://vinno.vn/sites/default/files/favi_vinno_1.png',
//     body: data.message
//   });
// });
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
channel.bind('my-event', function(data) {
	Push.create(data.name,{
		body: data.message,
		icon: 'images/logo-small.jpg',
		timeout: 10000,
		onClick: function () {
			window.focus();
			this.close();
		}
	});
});
