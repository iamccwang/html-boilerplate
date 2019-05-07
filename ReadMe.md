# HTML Boilerplate 

Make a boilerplate to start a html web app project easier.

## Install Dev Tool Packages

Initialize npm and install development tools
```
npm init
```

Install babel related packages
```
npm install --save-dev @babel/cli @babel/core @babel/preset-env @babel/polyfill @babel/plugin-proposal-object-rest-spread
```

Install webpack related packages
```
npm install --save-dev webpack webpack-cli webpack-dev-server
```

Install webpack related loaders
```
npm install --save-dev babel-loader style-loader css-loader
```

Install webpack related plugins
```
npm install --save-dev html-webpack-plugin clean-webpack-plugin mini-css-extract-plugin optimize-css-assets-webpack-plugin terser-webpack-plugin
```

## Create Folder Structure
```
├── ...
├── node_modules            # node app
├── public                  # public content folder
│   ├── css                 # minimize css files
│   ├── img                 # minimize image files
│   ├── js                  # minimize js file
│   └── index.html          # html files
├── src                     # source content folder
│   ├── styles              # client side image files
│   └── scripts             # client side js file
├── template                # html template
├── package.json            
├── package-lock.json
├── ReadMe.md          
├── webpack.config.js       
└── ...
```