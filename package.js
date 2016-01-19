Package.describe({
    name: "maxkurama:meteor-geolocation-bg",
    summary: "Provides reactive geolocation on desktop and mobile with background activity.",
    version: "0.0.0",
    git: "https://github.com/MaxKurama/meteor-geolocation-bg"
});

Cordova.depends({
    "cordova-plugin-mauron85-background-geolocation": "0.9.1"
});

Package.on_use(function (api) {
    api.use(["reactive-var"]);
    api.versionsFrom("METEOR@1.2");
    api.use("isobuild:cordova@5.4.0");
    api.add_files(["backgroundGeoLocation.js"], "client");
    api.export("backgroundGeoLocation", "client");
});