# COVID-19-Dashboard

Приложение для отслеживания распространения COVID-19 в мире и в отдельных странах.

## Getting Started

To get a local copy of the current code, clone it using git:

```command
git clone git@github.com:KarinaOknup/COVID-19-Dashboard.git

cd COVID-19-Dashboard
```

Next, Node.js. The current version Node ver.14.15.1. If you have an older version, please install Node.js via the [official package](https://nodejs.org).
You need to install the webpack package
globally (see also [webpack](https://webpack.js.org/guides/getting-started/)):

```command
npm install -g webpack-cli
```

If everything worked out, install all dependencies for COVID-19-Dashboard:

```command
npm install
```

Finally, you need to start a local web server. Run:

```command
npm run start
```

**Important!** when some changes are made, the page is not always refreshed, so if the page has not refreshed, you must manually refresh the page (for chrome - `F5`).
Local web server will be available at `http://localhost:8080/`

## Building

- mode develop `npm run dev`
- mode production `npm run prod`
- run linter `npm run lint`
- run watcher `npm run watch`
- run server `npm run start`
