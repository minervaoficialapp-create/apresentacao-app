self.addEventListener('push', function(event) {
  let data = { title: 'Minerva Comunidade', body: 'Você tem uma nova notificação!' };
  if (event.data) {
    try { data = event.data.json(); } catch(e) {}
  }
  
  const options = {
    body: data.body,
    icon: '/minerva-logo-gold.png',
    badge: '/favicon.svg',
    vibrate: [100, 50, 100],
    data: { dateOfArrival: Date.now() }
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
