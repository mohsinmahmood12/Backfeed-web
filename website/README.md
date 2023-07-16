# Backfeed Website

## Setup

### Prerequisites

- NodeJS
- npm
- pnpm

### Installation

Check if Node is installed
```
$ node -v
$ npm -v
```

Install pnpm using npm

```
$ npm i -g pnpm
```

If you're on linux, you will need to run this with `sudo`

```
$ sudo npm i -g pnpm
```

Check if pnpm is installed

```
$ pnpm -v
```

Finally, install all node packages

```
$ pnpm i
```

### Running the project

For development, run vite

```
$ pnpm vite
```

For production, build the project

```
$ pnpm vite build
```

All files will be built and places into `dist` folder. Make sure to open `dist/index.html` and change path of all resources (js, css, images, icons) from `/assets/` to `./assets/`

Finally, open `dist/index.html` in the browser.
