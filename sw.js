/*
 * 気象予報士 学科過去問トレーニング - Service Worker
 * cache-first。中身を更新したら CACHE の数字を上げてください（例 v1 -> v2）。
 * figs/ と efigs/(解説図) は総量が大きいので precache には入れず、表示された図だけ runtime cache に貯める。
 * 図は版上げで消えないよう、別の箱 FIG_CACHE に分ける(2026-10-30)。版を上げても FIG_CACHE の名前は変えない。
 * FIG_CACHE は FIG_MAX 枚を超えたら古い順に消す(図は figs 96枚 + efigs 107枚 = 203枚。約25MB)。
 */
var CACHE = "kishoexam-v12";
var FIG_CACHE = "kishoexam-figs-v1";
var FIG_MAX = 240;
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

// 図(試験の図 figs/・解説図 efigs/)か
function isFig(url){
  try{ return /\/e?figs\/[^\/]+$/.test(new URL(url).pathname); }catch(e){ return false; }
}

// FIG_CACHE を FIG_MAX 枚までに保つ(keys は入れた順=古い順)
function trimFigs(){
  return caches.open(FIG_CACHE).then(function(c){
    return c.keys().then(function(keys){
      var over = keys.length - FIG_MAX;
      if(over <= 0) return;
      return Promise.all(keys.slice(0, over).map(function(k){ return c.delete(k); }));
    });
  });
}

self.addEventListener("install", function(e){
  self.skipWaiting();
  // 1つでも欠けると addAll ごと失敗するので、1件ずつ入れて欠品を許容する
  e.waitUntil(caches.open(CACHE).then(function(c){
    return Promise.all(ASSETS.map(function(url){ return c.add(url).catch(function(){}); }));
  }));
});

// 古い版の箱は消す。前の版の箱に貯まっていた図は、消す前に FIG_CACHE へ移す(いちど見た図を取り直さない)
self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.open(FIG_CACHE).then(function(figs){
      return caches.keys().then(function(keys){
        return Promise.all(keys.map(function(k){
          if(k === CACHE || k === FIG_CACHE) return;
          return caches.open(k).then(function(old){
            return old.keys().then(function(reqs){
              return Promise.all(reqs.filter(function(r){ return isFig(r.url); }).map(function(r){
                return figs.match(r).then(function(have){
                  if(have) return;
                  return old.match(r).then(function(res){ if(res) return figs.put(r, res); });
                });
              }));
            });
          }).catch(function(){}).then(function(){ return caches.delete(k); });
        }));
      });
    }).then(trimFigs).catch(function(){}).then(function(){ return self.clients.claim(); })
  );
});

// cache-first: あればキャッシュ、無ければ取得してキャッシュ（figs/ と efigs/ は FIG_CACHE に貯まる）
self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET") return;
  if(isFig(e.request.url)){
    e.respondWith(
      caches.open(FIG_CACHE).then(function(c){
        return c.match(e.request).then(function(hit){
          if(hit) return hit;
          return fetch(e.request).then(function(res){
            if(res && res.ok && res.type !== "opaque"){
              var copy = res.clone();
              c.put(e.request, copy).then(trimFigs).catch(function(){});
            }
            return res;
          });
        });
      })
    );
    return;
  }
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
