"use strict";var precacheConfig=[["./cn.html","d66742d48d565d4ebb23674609693e42"],["./index.html","cc347bce8444a120be2d54a0b426c2fd"],["./static/css/cn.4dd07f49.css","476d16186dc05ff3faa0a5d4dc9ac72c"],["./static/css/index.4dd07f49.css","9ad340cc60e8fed0f9856b562708144e"],["./static/js/0.efa385da.chunk.js","1b804b962750e69fabfc48d171aef479"],["./static/js/1.820f4ee6.chunk.js","070a4e8203c5acba15f082d589618d1e"],["./static/js/10.8e4de214.chunk.js","9acff8ce5d13c7eba16e7e9d77b5bf77"],["./static/js/11.df4eed1c.chunk.js","cfb6a146e8004d4edd49e4c32a9c00ab"],["./static/js/12.a7266116.chunk.js","f32e038a4483357e5a4f34a26db59a66"],["./static/js/13.b6ef3caa.chunk.js","d1759ab787fc27e3771e8131554f688e"],["./static/js/14.aab16c83.chunk.js","9b639393f8701c2919ee5cb8bb641ce0"],["./static/js/15.30db9083.chunk.js","b0ee4539aac7356485e92c4685d6a12f"],["./static/js/16.42444ac3.chunk.js","af145b9a106bed9eccbce2b7e1acdac7"],["./static/js/17.40e1c749.chunk.js","9c4feddb6836a2aa330841d1a20b1d00"],["./static/js/18.d30d9df2.chunk.js","7073fb6ed11ee7afdea8aa05eca5aa1d"],["./static/js/19.6527f67e.chunk.js","2a43288241cccc03f68b5da8c5cd31ae"],["./static/js/2.1e24d7c5.chunk.js","c101794dcbeb3a27c47764cf4bbfd30b"],["./static/js/20.d60fbe7d.chunk.js","3fe43db38bb607c6d6431f7993b7cc3a"],["./static/js/21.19154067.chunk.js","b493c78875986900049126620b975e2d"],["./static/js/22.5d6510e9.chunk.js","b389ce31f79e2b0122d840a258206f90"],["./static/js/23.3388824e.chunk.js","f6ee92c6156ffdac60135952ebdc0a3a"],["./static/js/24.4e689f00.chunk.js","92dfdd49380ab961516d5f53cb3db976"],["./static/js/25.56648992.chunk.js","7c27fda737a67c8b0d6fd0efe072a95c"],["./static/js/26.cca69bdf.chunk.js","8e84741fa52ab4511abed39a0b847215"],["./static/js/27.23c231ee.chunk.js","4b8bdbce8d2525c3346ef10b22a22ac1"],["./static/js/28.1ef53754.chunk.js","6ac41a1578c9ea5beed2738243010916"],["./static/js/29.9351a4c8.chunk.js","d47964c4b4d60008b1ff724ee1f7c0cd"],["./static/js/3.46f6b4b4.chunk.js","795c615f0662f97404c91eb3c027740f"],["./static/js/30.0102262b.chunk.js","3004c1dddddea11384cefdb5eb7f06d3"],["./static/js/31.54a91a5f.chunk.js","72fd2336bca6e495a37512793e302ccd"],["./static/js/32.3fcd0c77.chunk.js","5257dc259e31b1a3a371b9aa8f6d9a82"],["./static/js/33.f394cd35.chunk.js","b6df9475e9049c5dd69822be3712db8f"],["./static/js/34.59c3f9c8.chunk.js","4a950a524d0e82fb968ca0e3d035791e"],["./static/js/35.5d2d960a.chunk.js","d8a082d1af8f52c7d33704bb0b97f4fb"],["./static/js/36.531a2e32.chunk.js","2686df637c0059994564624710f1e167"],["./static/js/37.e0fd7131.chunk.js","60341bcbd378d6ca7b35a9bb57aef3c9"],["./static/js/38.7d8eb11d.chunk.js","55da7b15d8ef0bac57053416d56661ad"],["./static/js/4.1ede15c6.chunk.js","3fd2c2050530da332e76dc539463147b"],["./static/js/5.0b016674.chunk.js","ee564f015db3c499bbd37473bbccfee4"],["./static/js/6.bb995a3b.chunk.js","22dc4c31f5f7acbcbf8321151b844db4"],["./static/js/7.da5a804d.chunk.js","d09d8cd4160cb351ff7595ca00095768"],["./static/js/8.fc220e14.chunk.js","74cfe5bc1cddbee6e56a99af05a21320"],["./static/js/9.18c3905c.chunk.js","35e5e4e641b24ee71a061a6ccf41cb28"],["./static/js/cn.999640c8.js","70eed679d488590bcfb8918e3e770422"],["./static/js/index.ebffd59c.js","f83a55410c39dbacaee23c06e3ac2234"],["./static/media/omi-logo2019.923166c3.svg","923166c362dce831a15c447b19a622f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=c),e.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,a,t){e=new URL(e);return t&&e.pathname.match(t)||(e.search+=(e.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),e.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return a.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],e=e[1],c=new URL(c,self.location),e=createCacheKey(c,hashParamName,e,/\.\w{8}\./);return[c.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){var e;if(!a.has(c))return e=new Request(c,{credentials:"same-origin"}),fetch(e).then(function(e){if(e.ok)return cleanResponse(e).then(function(e){return t.put(c,e)});throw new Error("Request for "+c+" returned a response with status "+e.status)})}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){var a,e,t;"GET"===c.request.method&&(a=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),t="index.html",(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a)),t="./index.html",!e&&"navigate"===c.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],c.request.url)&&(a=new URL(t,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)})))});