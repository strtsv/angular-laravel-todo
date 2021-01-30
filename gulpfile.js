const elixir = require("laravel-elixir");
require("laravel-elixir-vue");

elixir((mix) => {
  mix
    .sass("app.scss")
    .webpack("app.js")
    .scripts([
      "libs/**/*.js",
      "app.js",
      "appRoutes.js",
      "controllers/*.js",
      "services/**/*.js",
      "directives/**/*.js",
    ]);
});
