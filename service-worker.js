
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
    'Img/A3.jpg',
    'Img/A4.jpg',
    'Img/A5.jpg',
    'Img/Adele.jpg',
    'Img/An1.jpg',
    'Img/An2.jpg',
    'Img/An3.jpg',
    'Img/An4.jpg',
    'Img/An5.jpg',
    'Img/Artist2.jpg',
    'Img/ArtStage.jpg',
    'Img/ArtStage1.jpg',
    'Img/ArtStage2.jpg',
    'Img/ArtStage3.jpg',
    'Img/ArtStage4.jpg',
    'Img/ArtStage5.jpg',
    'Img/B1.jpg',
    'Img/B2.jpg',
    'Img/B3.jpg',
    'Img/B4.jpg',
    'Img/B5.jpg',
    'Img/book1.jpg',
    'Img/book2.jpg',
    'Img/book3.jpg',
    'Img/book4.jpg',
    'Img/book5.jpg',
    'Img/C1.jpg',
    'Img/C2.jpg',
    'Img/C3.jpg',
    'Img/C4.jpg',
    'Img/C5.jpg',
    'Img/Country.jpg',
    'Img/Country1.jpg',
    'Img/Country2.jpg',
    'Img/Country3.jpg',
    'Img/Country4.jpg',
    'Img/ELEFANTE.jpg',
    'Img/JB.jpg',
    'Img/L1.jpg',
    'Img/L2.jpg',
    'Img/L3.jpg',
    'Img/L4.jpg',
    'Img/L5.jpg',
    'Img/Moderatto.jpg',
    'Img/P1.jpg',
    'Img/P2.jpg',
    'Img/P3.jpg',
    'Img/P4.jpg',
    'Img/P5.jpg',
    'Img/portada.jpg',
    'Img/R1.jpg',
    'Img/R2.jpg',
    'Img/R3.jpg',
    'Img/R4.jpg',
    'Img/R5.jpg',

    
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
