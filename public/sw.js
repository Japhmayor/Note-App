if (!self.define) {
    const e = (e) => {
            "require" !== e && (e += ".js");
            let i = Promise.resolve();
            return (
                n[e] ||
                (i = new Promise(async(i) => {
                    if ("document" in self) {
                        const n = document.createElement("script");
                        (n.src = e), document.head.appendChild(n), (n.onload = i);
                    } else importScripts(e), i();
                })),
                i.then(() => {
                    if (!n[e]) throw new Error(`Module ${e} didn’t register its module`);
                    return n[e];
                })
            );
        },
        i = (i, n) => {
            Promise.all(i.map(e)).then((e) => n(1 === e.length ? e[0] : e));
        },
        n = { require: Promise.resolve(i) };
    self.define = (i, a, c) => {
        n[i] ||
            (n[i] = Promise.resolve().then(() => {
                let n = {};
                const f = { uri: location.origin + i.slice(1) };
                return Promise.all(
                    a.map((i) => {
                        switch (i) {
                            case "exports":
                                return n;
                            case "module":
                                return f;
                            default:
                                return e(i);
                        }
                    })
                ).then((e) => {
                    const i = c(...e);
                    return n.default || (n.default = i), n;
                });
            }));
    };
}
define("./sw.js", ["./workbox-3286f827"], function(e) {
    "use strict";
    self.addEventListener("message", (e) => {
            e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
        }),
        e.precacheAndRoute(
            [
                { url: "favicon.ico", revision: "1ba2ae710d927f13d483fd5d1e548c9b" },
                {
                    url: "img/icon/android-icon-192x192-dunplab-manifest-38509.png",
                    revision: "94937099169a3e242049ab845abf7cec",
                },
                {
                    url: "img/icon/apple-icon-114x114-dunplab-manifest-38509.png",
                    revision: "4d56a54e8a1359d51f2edb91866e2463",
                },
                {
                    url: "img/icon/apple-icon-120x120-dunplab-manifest-38509.png",
                    revision: "26f76bc338ef830754719b8ae5c267ef",
                },
                {
                    url: "img/icon/apple-icon-144x144-dunplab-manifest-38509.png",
                    revision: "8271df09af20edf1ed4907ff0d837a5c",
                },
                {
                    url: "img/icon/apple-icon-152x152-dunplab-manifest-38509.png",
                    revision: "6814e92aa09f5ba7c69a5e2fd41e43ef",
                },
                {
                    url: "img/icon/apple-icon-180x180-dunplab-manifest-38509.png",
                    revision: "a26c61b806e6f3c92a5b6157e671963b",
                },
                {
                    url: "img/icon/apple-icon-57x57-dunplab-manifest-38509.png",
                    revision: "2d57705e468f8a4b94fe5c96a1d4e59f",
                },
                {
                    url: "img/icon/apple-icon-60x60-dunplab-manifest-38509.png",
                    revision: "52c7487d0138b1c5e6fa809b2931f16d",
                },
                {
                    url: "img/icon/apple-icon-72x72-dunplab-manifest-38509.png",
                    revision: "61402a8c1afc43144419c85cffae37ff",
                },
                {
                    url: "img/icon/apple-icon-76x76-dunplab-manifest-38509.png",
                    revision: "4a2afcc11ef94e25a4dca6d67eb48549",
                },
                {
                    url: "img/icon/favicon-16x16-dunplab-manifest-38509.png",
                    revision: "9abcb16ac6682a2bae2dffa5fcf9b9fe",
                },
                {
                    url: "img/icon/favicon-32x32-dunplab-manifest-38509.png",
                    revision: "699c3268f8d6fa9ac535c511eb7015fe",
                },
                {
                    url: "img/icon/favicon-96x96-dunplab-manifest-38509.png",
                    revision: "07782b940f6c3604fc6776943ff60043",
                },
                { url: "index.html", revision: "0606aa8da86027ce2cf93ea3528667a7" },
                { url: "manifest.json", revision: "8aa4ae8d3b7cb64abe388bcfc758f442" },
            ], {}
        );
});
//# sourceMappingURL=sw.js.map