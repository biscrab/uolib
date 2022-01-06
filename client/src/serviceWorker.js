window.self.addEventListener('install', pEvent => {
    console.log('(install)서비스워커 설치 중');

    pEvent.waitUntil(
        caches.open('cacheName1').then(cache =>  cache.addAll(['/test.png','/test.ico']))
    );

});

window.self.addEventListener('activate', pEvent => {
    console.log('(activation)서비스워커 동작');
});

 // fetch 기본 형태
 window.self.addEventListener('fetch', pEvent => {
    console.log('(fetch)데이터 요청', pEvent.request);
});

// fetch 캐시 요청 및 응답
window.self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.match(e.request).then(function(r) {
            console.log('[Service Worker] Fetching resource: '+e.request.url);
        return r || fetch(e.request).then(function(response) {
                  return caches.open('cacheName1').then(function(cache) {
            console.log('[Service Worker] Caching new resource: '+e.request.url);
            cache.put(e.request, response.clone());
            return response;
          });
        });
      })
    );
});
