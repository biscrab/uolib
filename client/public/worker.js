self.addEventListener("install", function (event) {
  console.log("Hello world from the Service Worker 🤙");
});

self.addEventListener("push", (event) => {
  const payload = JSON.parse(event.data.text());
  event.waitUntil(
    registration.showNotification(payload.title, {
      body: payload.body,
      data: { link: payload.link },
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  clients.openWindow(event.notification.data.link);
});