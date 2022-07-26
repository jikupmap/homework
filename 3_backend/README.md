# 서버 셋팅

OS가 Ubuntu 라고 가정했을 때의 설치 내용입니다.

## yarn 설치

```
$ sudo apt update
$ sudo apt install curl
$ curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ sudo apt install yarn

$ yarn --version

```

[참고\_내용](https://linuxhint.com/install_yarn_ubuntu/)

## nodemon 설치

```
$ yarn add nodemon
```

[참고\_내용](https://yarnpkg.com/package/nodemon)

# 프로젝트 셋팅

```
$ mkdir project && cd ./project
$ git clone https://github.com/jikupmap/homework.git
```

# 서버 실행

```
// project dir 안에서
$ yarn start
```
