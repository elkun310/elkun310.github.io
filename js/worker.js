importScripts("/pusher.worker.js");

Pusher.setLogger(function(log){
  console.log(log)
});

var pusher = new Pusher('726f4534d962542caa20', {
  encrypted: true,
  disableStats: true
});

var channel = pusher.subscribe('my-channel');

channel.bind('my_event', function(data) {
  self.registration.showNotification(data.title, {
    icon: 'https://vinno.vn/sites/default/files/favi_vinno_1.png',
    body: data.message
  });
});