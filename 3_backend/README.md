# 서버 셋팅

OS가 Ubuntu 라고 가정했을 때의 설치 내용입니다.

## yarn 설치

```
$ sudo apt update
$ sudo apt install curl
$ curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt install yarn -y

$ yarn --version

```

## yarn 삭제 후 재설치

```
sudo apt remove cmdtest
sudo apt remove yarn
sudo apt install yarn -y
```


[참고\_내용](https://linuxhint.com/install_yarn_ubuntu/)

## nodemon 설치

```
$ yarn global add nodemon
```

[참고\_내용](https://yarnpkg.com/package/nodemon)


# 프로젝트 셋팅 1

```
$ mkdir project && cd ./project
$ git clone https://github.com/jikupmap/homework.git
```

# 프로젝트 셋팅 2
.env 파일에 DB_URI에 DB 주소를 복사 붙여넣기

# 서버 실행

```
// project dir 안에서
$ yarn start
```

# API, DB 연결

```
"mongodb://{user_name}:{password}@{DB_URL}:27017/{DB_NAME}?authSource=admin&retryWrites=true&w=majority"
```