'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1523a82ec3c3db18a53cefaf1412f3f1",
"assets/AssetManifest.bin.json": "4adf4175ee0786c590049e5fe44a0566",
"assets/AssetManifest.json": "4bf21d36be7cf5f21c3c48a7ec03b6af",
"assets/assets/accelerate.riv": "24e7b571c20385e2921c9d2f6df4e431",
"assets/assets/avatar.HEIC": "e333ebf108274d992a772eeb898f3860",
"assets/assets/avatar.jpg": "f637cac58ec6ce3c99b7cb468735f223",
"assets/assets/avatar1.jpg": "1959ded48390f9c6fd02c3f0e2f04701",
"assets/assets/avatar2.jpg": "418f57dcb99b4754657c5cc66aaa5c9c",
"assets/assets/creativebg.riv": "d9b55d2e8dda05b906dd5d887f2f9a25",
"assets/assets/creatives/big_wheel_demo.riv": "1be25330bed1f6f49f4d241ead2a9e8f",
"assets/assets/creatives/firebaselog.png": "8f14a5693b410eb950f43128fcaf752d",
"assets/assets/creatives/githublogo.png": "1387ddb5abe4becf2a34b1b79d982a2a",
"assets/assets/creatives/riverpodlogo.png": "9bac0f7542b6c35305ad0c0aa2c0daca",
"assets/assets/eclipse.riv": "aa0290239c4ec76753613121992b6257",
"assets/assets/eclipsee.riv": "8cb0aec67becd382a4c4d1a0e28d271c",
"assets/assets/jain's_avatar.riv": "729870790a7416a69c1fc405a8cd01b6",
"assets/assets/myworks/blackstore1.png": "5f51e5b6d0ecd9556006f257345e67ba",
"assets/assets/myworks/blackstore2.png": "792c29458570e0c3920bec9687061366",
"assets/assets/myworks/blackstore3.png": "2aba734c764bad68dd7e9c85d1316ed7",
"assets/assets/myworks/blackstore4.png": "23cecfba4778f9b9564cf89031cbef62",
"assets/assets/myworks/bmi1.png": "4ef0f8fa16160dec9da254425fa59c5b",
"assets/assets/myworks/bmi2.png": "6b72f3c145c5de90be4f3cf849984c2a",
"assets/assets/myworks/bmi3.png": "a1a8c8eb7bfd0ae9da39099a51d84213",
"assets/assets/myworks/bmi4.png": "9cc09d18c682510703bc7f1199d48ad8",
"assets/assets/myworks/bmi5.png": "24a37fec6eb6a2c565b0dddb84662867",
"assets/assets/myworks/chater1.png": "79846e6e813af8105b9393dc1a0ea53e",
"assets/assets/myworks/chater2.png": "aabc0ae1f9051358df8e89e44cd2a6b9",
"assets/assets/myworks/chater3.png": "2524e0e643b3a32e1a8139d5c49a6344",
"assets/assets/myworks/cms1.png": "f058dade203f0345c190079244005a50",
"assets/assets/myworks/cms2.png": "0c03c0c21916cc0a11933fcd0c9b2db8",
"assets/assets/myworks/weather1.png": "47bcb783ef7936114b1e82bdd281cc1b",
"assets/assets/myworks/weather2.png": "8105645fc67126b349045a634b8654c3",
"assets/assets/myworks/weather3.png": "2b94c432df7d1279e9ff7a834ff8f6ea",
"assets/assets/soarus.riv": "f30c17b8dd3d774402f7cf8ea789a0ec",
"assets/assets/workbg.riv": "47d48a67975ec125ead7a554cd2ae50e",
"assets/FontManifest.json": "c6b115e9ab2ac9308748c8767ca04429",
"assets/fonts/MaterialIcons-Regular.otf": "633ed840f1ea6adfbc685a62e8e2214d",
"assets/NOTICES": "9dcfd10288d8953ad3bf614535b0ce80",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "be271838cfb555093a41e12292acce83",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "c427cdd9fe795f6836639cb1332cfd89",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5bb129261409fdf99e0631f212ff36d0",
"/": "5bb129261409fdf99e0631f212ff36d0",
"main.dart.js": "d82eac3bff7827f07606574e6002f3c8",
"manifest.json": "bae248d31e4f8733acb2f353550226d3",
"version.json": "696e9d4932b7ca674bd60f27894c8396"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
