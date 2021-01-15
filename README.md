# typescript-express4
typescript 환경에서 제작한 express 템플릿이며, 개발환경 세팅을 줄이고자하여 제작되었습니다.

## Getting Started
먼저 프로젝트를 클론하고,
```
git clone https://github.com/lctumaca1/typescript-express4.git
```

git clone 이후에 해줄 작업은 해당 프로젝트에 필요로 하는 module들을 재설치하는 작업인데요. 다음 명령어를 해당 프로젝트의 terminal shell에 적어줍시다.

```
npm install
```


## Dependency Module in Use
+ product
  + [express](https://www.npmjs.com/package/express)
  + [mysql](https://www.npmjs.com/package/mysql)
  + [ejs](https://www.npmjs.com/package/ejs)
+ development
  + [typescript](https://www.npmjs.com/package/typescript)
  + [@types/express](https://www.npmjs.com/package/@types/express)
  + [@types/mysql](https://www.npmjs.com/package/@types/mysql)
  + [@types/ejs](https://www.npmjs.com/package/@types/ejs)
  + [@types/node](https://www.npmjs.com/package/@types/node)
  + [node](https://www.npmjs.com/package/node)
  + [ts-node](https://www.npmjs.com/package/ts-node)
  
## How to add code?
root/src 에서 작업하시면 되며 프로젝트의 entry point는 dist와 src에서 각각 index.js와 index.ts입니다.

## How to build project?
프로젝트를 러닝하기 전에 타입스크립트를 자바스크립트로 빌드하는 작업이 꼭 필요로 하기때문에 러닝하기 전에
```
npm run build
```
를 실행시켜야 합니다.

정상적으로 root/dist 폴더가 빌드가 되면 프로젝트를 러닝하실 수있습니다.

## How to running project?
프로젝트를 시작하면 root/dist/index.js를 실행하게 됩니다.
```
npm run start
```

## How to running project for dev?
개발을 할때 서버를 멈추고 다시 시작할 필요없이 이 명령어를 실행하면 수시로 바뀌는 코드를 읽어들여 자동으로 적용합니다.
```
npm run dev
```
