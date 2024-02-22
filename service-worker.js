
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
    'img/A1.jpg',
    'img/A2.jpg',
    'img/A3.jpg',
    'img/A4.jpg',
    'img/A5.jpg',
    'img/Adele.jpg',
    'img/An1.jpg',
    'img/An2.jpg',
    'img/An3.jpg',
    'img/An4.jpg',
    'img/An5.jpg',
    'img/Artist2.jpg',
    'img/ArtStage.jpg',
    'img/ArtStage1.jpg',
    'img/ArtStage2.jpg',
    'img/ArtStage3.jpg',
    'img/ArtStage4.jpg',
    'img/ArtStage5.jpg',
    'img/B1.jpg',
    'img/B2.jpg',
    'img/B3.jpg',
    'img/B4.jpg',
    'img/B5.jpg',
    'img/book1.jpg',
    'img/book2.jpg',
    'img/book3.jpg',
    'img/book4.jpg',
    'img/book5.jpg',
    'img/C1.jpg',
    'img/C2.jpg',
    'img/C3.jpg',
    'img/C4.jpg',
    'img/C5.jpg',
    'img/Country.jpg',
    'img/Country1.jpg',
    'img/Country2.jpg',
    'img/Country3.jpg',
    'img/Country4.jpg',
    'img/ELEFANTE.jpg',
    'img/JB.jpg',
    'img/L1.jpg',
    'img/L2.jpg',
    'img/L3.jpg',
    'img/L4.jpg',
    'img/L5.jpg',
    'img/Moderatto.jpg',
    'img/P1.jpg',
    'img/P2.jpg',
    'img/P3.jpg',
    'img/P4.jpg',
    'img/P5.jpg',
    'img/portada.jpg',
    'img/R1.jpg',
    'img/R2.jpg',
    'img/R3.jpg',
    'img/R4.jpg',
    'img/R5.jpg',

    
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

