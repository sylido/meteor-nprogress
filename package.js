Package.describe({
  summary : "NProgress for Meteor",
  version : "0.2.1",
  git     : "https://github.com/sylido/meteor-nprogress.git",
  name    : "sylido:nprogress"
});

Package.onUse(function (api) {
  api.use("jquery", "client"); // removed jquery version restriction

  api.addFiles("lib/nprogress/nprogress.js", "client");
  api.addFiles("lib/nprogress/nprogress.css", "client");
  api.addFiles("lib/main.js", "client");

  api.export("NProgress", "client");
});

Package.onTest(function (api) {
  api.use(["sylido:nprogress", "tinytest"], "client");
  api.addFiles("test-nprogress.js", "client");
});
