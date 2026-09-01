/*
 * 気象予報士 学科過去問トレーニング - Service Worker
 * cache-first。中身を更新したら CACHE の数字を上げてください（例 v1 -> v2）。
 * figs/ は総量が大きいので precache には入れず、表示された図だけ runtime cache に貯める。
 */
var CACHE = "kishoexam-v6";
var ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./data/q_56_ippan.js",
  "./data/q_56_senmon.js",
  "./data/q_57_ippan.js",
  "./data/q_57_senmon.js",
  "./data/q_58_ippan.js",
  "./data/q_58_senmon.js",
  "./data/q_59_ippan.js",
  "./data/q_59_senmon.js",
  "./data/q_60_ippan.js",
  "./data/q_60_senmon.js",
  "./data/q_61_ippan.js",
  "./data/q_61_senmon.js",
  "./data/q_62_ippan.js",
  "./data/q_62_senmon.js",
  "./data/q_63_ippan.js",
  "./data/q_63_senmon.js",
  "./data/q_64_ippan.js",
  "./data/q_64_senmon.js",
  "./data/q_65_ippan.js",
  "./data/q_65_senmon.js",
  "./data/glossary.js"
];

self.addEventListener("install", function(e){
  self.skipWaiting();
  // 1つでも欠けると addAll ごと失敗するので、1件ずつ入れて欠品を許容する
  e.waitUntil(caches.open(CACHE).then(function(c){
    return Promise.all(ASSETS.map(function(url){ return c.add(url).catch(function(){}); }));
  }));
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){
        if(k !== CACHE) return caches.delete(k);
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

// cache-first: あればキャッシュ、無ければ取得してキャッシュ（figs/ はここで貯まる）
self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(function(hit){
      if(hit) return hit;
      return fetch(e.request).then(function(res){
        if(res && res.ok && res.type !== "opaque"){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        }
        return res;
      }).catch(function(){ return caches.match("./index.html"); });
    })
  );
});
