
const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
    'index.html',
    'style.css',
    'navbar.css',
    'inicio/about.html',
    'inicio/contact.html',
    'inicio/sign.html',
    'inicio/script.js',
    'inicio/styles.css',
    'seccion1/seccion1.html',
    'seccion1/seccion1_1.html',
    'seccion1/seccion1_2.html',
    'seccion1/seccion1_3.html',
    'seccion1/style_AS.css',
    'seccion2/seccion2.html',
    'seccion2/seccion2_1.html',
    'seccion2/seccion2_2.html',
    'seccion2/seccion2_3.html',
    'seccion2/style_A.css',
    'seccion3/seccion3.html',
    'seccion3/seccion3_1.html',
    'seccion3/seccion3_2.html',
    'seccion3/seccion3_3.html',
    'seccion3/style_C.css',
    'Img/A1.jpg',
    'Img/A2.jpg',
    'img/A3.jpg',
    'Img/A4.jpg',
    'Img/A5.jpg'

    
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

