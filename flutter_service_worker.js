'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "3422f852b5ec0dc2aa3f65e446407089",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a00baedd8605d120afdc80db574c1b66",
".git/HEAD": "d6628019dca291cf79c10adb10b6a597",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a9cf0dbbcf667e00e208539245bfbe86",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c4b86a2cd26b618b781f3fc82f827a04",
".git/logs/refs/heads/web": "ee9f6b52b5c8fb07026160ec4d9f5971",
".git/logs/refs/remotes/origin/main": "f070c107bb6e527a111eba76d64ea74f",
".git/logs/refs/remotes/origin/web": "b71d1defbc38d710fda535a74e02d82d",
".git/objects/00/36d99b12cbc3422357c2ba1ee90ff06dc303dc": "c3acae8f5ebb0274375b5609adb7b7be",
".git/objects/00/4da9ef82f5c23ae0168dad58ae88dae3774e99": "7131274819b13faf80036f22b427dd9d",
".git/objects/05/5fde10babb779f6969dda9b23a55aa8f673b88": "1208ef0c276c027c83a7af2375707eeb",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/09/8acf1d2b2fc449a572fb6d0290b4d2e2f52d15": "9b90e3d89c75ab8fe2bbf4374545f2ed",
".git/objects/09/fa7ebfed8f7cff1c8e86087c66b229465e3031": "c6671de50a470a6f04fd3f3ef985f009",
".git/objects/0c/e78a834ec8fcb776689c2059ee4d1c88ecab95": "ef0dc07c430647fde0837085052faec5",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/def1345041111137959d24bb5c3b76f54b37be": "fa823ac463abad4d1c65c7abf82b085e",
".git/objects/13/35979d8e1b4a4417549fc04d03402aad0296fd": "eb29c5f004a04b91151aba2f6d1aa1d6",
".git/objects/14/517f59ed5c8cf2f4671d151937e97739c0b350": "94753761d33e3b9c96859019ddcde05e",
".git/objects/17/1097d28c0dab5df9bf134f68b6afb49f00d478": "75d01357d30ddeac57b0b04b2eaea53a",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/961887f44ddc70fe3805ed116458512f0cb229": "3e1cf3d0199612fb6ced44f94d093bac",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/24/8d3545639b9528926d994f4b73823af57dd8a4": "2d5b0ae01c6005cd3d5662845a96e839",
".git/objects/27/fc0157ab48c81c6de1e6e73a57d65ab14f9439": "ff1bb1dc029e65b87d31cebfa0ae5189",
".git/objects/28/531e901abb20fc003a0575d9767a204699cca9": "eb71c418b2a8f1b6bb7bbc48f526923f",
".git/objects/28/b27983c3e375b3d4f7e1d240ac69e097d4bbfc": "75596b785f1f31889c98527af9afbf2e",
".git/objects/36/68b6e2c000b58ed2afe5bc02375cd1edee1e36": "a8934dff47731c7a2a840ad9851d04b7",
".git/objects/42/3f2ae639bb0fe4f0faf9fdc43ce20e675d02dc": "2808744e3766ca45a8c72870c917c041",
".git/objects/47/81e7c88a1e3659f283d530984b4232cd80ab71": "64bd8e937336531f802265672bc1b1c9",
".git/objects/49/73ad779b5b6002772fce1214493124e1263323": "aad19b429ce3116c0c55406ff9b1a098",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/9dc67433845ba36ca74f7de8ec55c375d8c740": "9501236d864956c82e6081792497ef62",
".git/objects/4f/fe29f7fb4695623e532b5228998f2cc246e114": "a54b8537ce9a685a21fd1e7414dd0ee3",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/b1609dd41e7e53a4ed5e956510cd4d8b56d811": "671917907e9bde11b01f4b47fa277e9d",
".git/objects/59/eaf19ecdffebf4df403b383eeaf9fb972eb8c0": "c3d346a1038974f98f82c03a023c4b67",
".git/objects/5e/9e141662c62122939baf2136ad98208ad4a6a3": "33d6632ca933e6665204a5fe87ba67b7",
".git/objects/60/776dab1f13b95dc01259eae6c9cd36fefb8a7b": "b33c025742a3419c4011daa2b8e7bcbd",
".git/objects/61/ab28b57806e6a781beb53ee11080ee5d958f08": "92a1e943d4e416a52cdef7ca41bdb3a3",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/69/4265cf12eb407e408129f49a11fcffd75abed2": "d418a65fcebc51e437575ef5aabc1c2f",
".git/objects/6a/42fd5f9761807f717041741355297b692b0d30": "df020b8dc461e88fb78c319dc5498b9d",
".git/objects/6d/8078da2893a01501db73c1eb48abba3105361f": "57b6b53dccba1c189fbfeef49af39380",
".git/objects/6f/3ecae49434f990d31337bccea0905924179514": "b9063ca3171f8dcbfe68f7705d6b4ed0",
".git/objects/70/55f37c4013d9d091af7844c9924caeb97cbfb1": "161941582eef6c8ced7b5fe53f1ef085",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/5a89b04eb9579ef69f8cdb6eec3724c3b72fba": "661cc13d82b1be3b4217b47184bb9cf2",
".git/objects/72/fb0498a9273c14d159df54a44353f2750770cb": "142fdd5139378675376ef5de8a02742c",
".git/objects/7a/05ab1936d72799915cbf4c95e4ad7e1c7bc2e4": "a3780e9f7705281b70f08e68efc01c52",
".git/objects/7c/2e3856217912eaa7856b95ddfcc70d91b2431b": "7d45fe353ccfc003fe5aff7675d54027",
".git/objects/7e/f59b6a7fa761ef015852081f4928ed425be701": "877dc2207d790a53cd8d18fba69526f6",
".git/objects/80/b41254faaf41ebc6c8e2486f8ff38ee6c9f7ee": "b26551277f46ff4a3ac9dc4e10417905",
".git/objects/82/2c43d8fafcaa490ae15b0bcd18ce3790cb8aa0": "fc8ab5f16a37ae45ee9dc58f588293ee",
".git/objects/84/861cd15c7342bd924a9722f65d3c122b3d86da": "e2b6e31828ba5ea18fe7af5c4191b31e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/9ecb8f0e1781b7bd21f2848cc2a6c00b25e048": "9168832c2cc9884245e9897aeb21cf32",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/a94ced8a0918729848879bb4247d164fadbe3a": "c678e81175987e82f30f45f7f19f3e50",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/27157feae91eadbc4efb9ea29b7240f7aa980e": "16521a7795830f5a5d3c9a496d3bb7f2",
".git/objects/98/900c6fdf83042cc5080f354d200ae9343668c0": "d458fa224bdf027ffc7bf9cec8c30107",
".git/objects/9c/3ed7a6c8513aea5a16020b7e5fac9c753c546f": "fdc788ed76d00e0413f6fb5951b39368",
".git/objects/9f/943eb958f82a05d5386e974497819a03f914f4": "5e68434cc867b48272fb16be67afd0f5",
".git/objects/a1/720a598676b7e597c6e2a0b2748b4c04511a0e": "89fa3e554b213e1a76ee6a5a57a6ccf7",
".git/objects/a9/429424b7767e6cbd30d5eb0d7807a72e355d96": "f54013b33ce7a7f57b8de0643a843566",
".git/objects/a9/90709f3142cc5f7521d51c82dded600411c535": "a692b95ebed941fa1c7bfac41c660227",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/2d9c7375355b63655a42f7943876582a29db7e": "0f9f66d7ec53b2de9a6a68fd014b07f7",
".git/objects/bd/274e47ae17ab25bae0803034e26493bed474a0": "942ed1686ad5b80d9db4795b02e8e11e",
".git/objects/c0/d1d3d5d332939dc57f6e5dba31c3f895cfbc18": "2c0c51ccb09fdd80a9c728b248bcd20d",
".git/objects/c2/803d81d1adf07d477ee30cfd7b418b8a2a8ab2": "45e0e118d78a4ba9e454f64f308e2925",
".git/objects/c4/6d90da688d433928722a29fe93ff5cdc4c0eb7": "a7b5c6c6de3122c8246c05c073fcc221",
".git/objects/c9/045e5b189a77d87517fc48d61569ea4e8b5995": "529170a04f59c50feeb6bdd634d8747b",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/33bb7c52a17472289cde77b5d7a478e4b63aa5": "3e9af8fa6776b4bdcf1c48996c72d826",
".git/objects/d2/605a8345e82fd5dc4af94fa5ccf326cf6c672d": "1c68bdd43e4203ac4ca158d009d2cff6",
".git/objects/d2/bb5bce7bf840306df212ac22ad14426ff49266": "8e2db514caede8fbc77e8d651654014e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/bfdd13ebd545690c94f48ef9586d5e834c5494": "f6a6cd792b4f5469669722ce218a6eab",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a141c26c57bc5de7635588a1f9277294b77a57": "9b306d60ab31292e2db8a814c068f59a",
".git/objects/dc/988f5f5f476698d0531bf0e45ef2a0445d8d10": "d84da76edf08615de21d32d60dfb31c1",
".git/objects/dd/f7252707639322d3e58d6f459968f4761cd094": "53d8e84a1e43d2bd71229f41c7f36e18",
".git/objects/de/6227ba58f27a11c360d0f5e4be677294366dbc": "f8b37b8c63f5570983b314892049c6b0",
".git/objects/e1/31e886104fa0cc8f99c21764a2dce35c56bb88": "bb42296958e30d4d0098b320720b0c92",
".git/objects/e3/87ea748cea816e7f320cb6b4546925217b8092": "248cb70fb8806b62c9347b6b780b6bf0",
".git/objects/e7/634900ed50257f04ed00effcf32d101ec4aef5": "f5dc93fbd183cdddecdb3215ea586bc9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/8c661cb1e0d88f265c58379e10b38ee0726d96": "2762abca41ed00f3512347e8bf3ff146",
".git/objects/ef/3d2690ee163e48e2cad6578548527e8731f860": "76a21f52edb1fa1df0e247ec8ffa35d7",
".git/objects/f0/a5887d7d7f152e9b59c12141352d47907127a3": "efa148ef9d2ddaafaf45ef0501818d2e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/c6a84d1c84cc12c9526973a4b1dab11366e2ac": "925c194db455adab0fdfea1172ca47a5",
".git/ORIG_HEAD": "1d7db73aa6d7ea4ebd7808edd1c0d371",
".git/refs/heads/web": "b134621a2c1d4d09b85aa77177778a6f",
".git/refs/remotes/origin/main": "1d7db73aa6d7ea4ebd7808edd1c0d371",
".git/refs/remotes/origin/web": "b134621a2c1d4d09b85aa77177778a6f",
"assets/AssetManifest.bin": "89b24c072608bf7c365376a3cde46e60",
"assets/AssetManifest.bin.json": "40abb1e9860691ab6b41fbfb64de9262",
"assets/AssetManifest.json": "9e857563c839358d4dc6a4a301692f00",
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
"assets/assets/myworks/cmso1.png": "2942d33dc026e4e57fecc297695c3036",
"assets/assets/myworks/cmso2.png": "5b367552ca75105584d21a1a5383f093",
"assets/assets/myworks/cmso3.png": "1734e0e8b82674d76a52273205df1cd3",
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
"flutter_bootstrap.js": "1fd08e50f933becb9ecbb5647e00f9ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5bb129261409fdf99e0631f212ff36d0",
"/": "5bb129261409fdf99e0631f212ff36d0",
"main.dart.js": "6ab86ac900e080033920c8863e9db3ea",
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
