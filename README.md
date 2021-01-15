# typescript-web
The ```typescript-web``` project is designed to make desktop apps or web apps easier to create, reduce developer mistakes and easily develop, and is designed to facilitate maintenance when using ```Express 4``` Modules.


### Dependency Module in Use
+ product
  + [express](https://www.npmjs.com/package/express)
  + [mysql](https://www.npmjs.com/package/mysql)
+ development
  + [typescript](https://www.npmjs.com/package/typescript)
  + [@types/express](https://www.npmjs.com/package/@types/express)
  + [@types/mysql](https://www.npmjs.com/package/@types/mysql)
  + [@types/ejs](https://www.npmjs.com/package/@types/ejs)
  + [@types/node](https://www.npmjs.com/package/@types/node)
  + [node](https://www.npmjs.com/package/node)
  + [ts-node](https://www.npmjs.com/package/ts-node)
  + [electron](https://www.npmjs.com/package/electron)
  + [ejs](https://www.npmjs.com/package/ejs)
  
### Scripts
```
  "scripts": {
    "default:start":  "node dist/index.js",
    "default:dev":    "nodemon src/index.ts",
    "default:build":  "[ -d ./dist ] && ( rm -r ./dist && tsc -p . ) ||  tsc -p .",
    "electron:start": "electron ./dist/index.js"
  },
```
