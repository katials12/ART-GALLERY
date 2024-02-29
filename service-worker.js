
const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
    'index.html',
    'style.css',
    'navbar.css',
    'inicio/about.html',
    'inicio/contact.html',
    'inicio/sign.html',
    'inicio/script.js',
    'inicio/styles.css'

    
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
self.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('Service Worker registrado con éxito:', registration);
            })
            .catch((error) => {
                console.error('Error al registrar el Service Worker:', error);
            });
    }

    // Actualizar el mensaje después de cargar el Service Worker
    if (navigator.serviceWorker.controller) {
        messageElement.textContent = 'Service Worker listo para cachear contenido.';
    } else {
        messageElement.textContent = 'La aplicación puede no funcionar correctamente sin conexión.';
    }
});

