# typescript-express4
typescript 환경에서 제작한 프로토타입 프로젝트입니다. 해당 프로젝트는 Desktop App이 될 수도 있고, Web이 될 수도 있습니다.

## Getting Started
프로젝트를 시작하기 전에 프로젝트를 git clone을 합니다.
```
git clone https://github.com/lctumaca1/typescript-express4.git
```
git clone 해주고 나서 필요한 module들을 설치해줍니다.
```
npm install
```


## Dependency Module in Use
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
  
## Scripts
```
  "scripts": {
    "default:start": "node dist/index.js", //
    "default:dev": "nodemon src/index.ts",
    "default:build": "[ -d ./dist ] && ( rm -r ./dist && tsc -p . ) ||  tsc -p .",
    "electron:start": "electron ./dist/index.js"
  },
```
