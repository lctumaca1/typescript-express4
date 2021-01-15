# typescript-express4
typescript 환경에서 제작한 express 템플릿이며, 개발환경 세팅을 줄이고자하여 제작되었습니다.

## Getting Started
먼저 PC에 typescript의 환경을 설정해야되기 때문에 [npm](https://nodejs.org/ko)을 통해 [typescript](https://www.npmjs.com/package/typescript)을 설치해줍시다.
```
npm install -g typescript
```

typescript를 다운하셨다면 이 프로젝트를 git clone을 해줍니다.
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
  + [@types/express](https://www.npmjs.com/package/@types/express)
  + [@types/mysql](https://www.npmjs.com/package/@types/mysql)
  + [@types/ejs](https://www.npmjs.com/package/@types/ejs)
  + [@types/node](https://www.npmjs.com/package/@types/node)
  + [node](https://www.npmjs.com/package/node)
  + [ts-node](https://www.npmjs.com/package/ts-node)
  
## How to add code?
개발자가 코드를 작성하는 부분은 root/src 이며 entry point는 root/src/index.ts 입니다.
express에 관해서 작성할 코드가 있다면 root/src/express 디렉토리를 수정하시면 됩니다.

## How to build project?
프로젝트를 러닝하기 전에 타입스크립트를 자바스크립트로 빌드하는 작업이 꼭 필요로 하기때문에 러닝하기 전에
```
npm run build
```
를 실행시켜야 합니다.

정상적으로 root/dist 폴더가 빌드가 되면 프로젝트를 러닝하실 수있습니다.

## How to running project?
```
npm run start
```

## How to running project for dev?

```
npm run dev
```
