### browserify tutorials & demos

##### What's **beefy**
- A local development server that aims to make writing modular client-side apps with NPM + browserify

##### how to use
- npm install -g beefy browserify 
- **npm install -g [watchify](https://www.npmjs.com/package/watchify)** (Optional)  for faster bundle rebuilds as you develop

##### start the beefy server
- beefy main.js:bundle.js \[port\] (default: 9966)
- watchify main.js -o bundle.js -v
