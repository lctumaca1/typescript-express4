# typescript-web
이 프로젝트는 ```typescript``` 기반으로 만들어진 ```Express 4```를 활용한 웹 애플리케이션 템플릿입니다. 개발 환경을 세팅하는 시간을 줄이고자하여 이 프로젝트를 만들게 되었으며, 유지보수가 쉽도록 MVC 패턴으로 구조를 분리했습니다.

### Getting started
```
git clone https://github.com/lctumaca1/typescript-web.git && cd ./typescript-web && npm run default:init
```

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
  + [ejs](https://www.npmjs.com/package/ejs)
  
  
### Scripts
```
  "scripts": {
    "default:init": "[ -d ./node_modules ] && ( echo 'It's already reset!' ) || ( npm install && npm run default:build && echo 'I'm ready for work!' )",
    "default:init-dev": "[ -d ./node_modules ] && ( echo 'It's already reset!' ) || ( npm install && npm run default:build && npm run defualt:dev && echo 'I'am ready for dev!' )",
    "default:start": "node dist/index.js",
    "default:dev": "nodemon src/index.ts",
    "default:build": "[ -d ./dist ] && ( rm -r ./dist && tsc -p . ) ||  tsc -p ."
  },
```
