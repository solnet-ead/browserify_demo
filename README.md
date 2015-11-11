### browserify tutorials & demos

##### What's **beefy**
- A local development server that aims to make writing modular client-side apps with NPM + browserify

##### how to use
- npm install -g beefy browserify 
- **npm install -g [watchify](https://www.npmjs.com/package/watchify)** (Optional)  for faster bundle rebuilds as you develop

##### start the beefy server
- beefy main.js:bundle.js \[port\] (default: 9966)
- watchify main.js -o bundle.js -v

---
##### 2015-11-11
- A **[angular-ui-bootstrap](http://angular-ui.github.io/bootstrap/)** demo implemented by Browserify 
- how to run
  - 1. **_npm install -g browserfiy beefy watchify_**
  - 2. **_watchify uibsDemo.js -o bundle.js -v_**
  - 3. **_beefy index.html_**
  - 4. open 'localhost:9966' in your favourite browser & have fun :-)
