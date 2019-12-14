importScripts("/pusher.worker.js");
// onmessage = function(e) {
//   console.log('Worker: Message received from main script');
//   let result = e.data[0] * e.data[1];
//   if (isNaN(result)) {
//     postMessage('Please write two numbers');
//   } else {
//     let workerResult = 'Result: ' + result;
//     console.log('Worker: Posting message back to main script');
//     postMessage(workerResult);
//   }
// }
var pusher = new Pusher('726f4534d962542caa20', {
	cluster: 'ap1'
});
var channel = pusher.subscribe('my-channel');
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
alert('aaa');

