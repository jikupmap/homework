# 설치방법

## docker 설치
```
    sudo apt install docker.io
    sudo apt install docker-compose
```

## docker image pull 받기

```
    docker pull mongo:5.0
```

## docker 기본기능 활용
```
    docker images
    docker ps
    docker kill {container id}
    docker logs
```


# 실행방법

```
    // 실행
    docker-compose up -d
    // 실행확인
    docker-compose ps
    // 접속
    docker exec -it jikupmap-db bash
```

# vim 설치 (in Docker)

```
$ apt update
$ apt install vim
```

# DB 보안 설정

```
vi etc/mongod.conf
```
-----
#security:
   authorization: "disabled"
-----

# DB접속
```
    mongo -u {your username} -p {your password}

    show dbs
    use jikupmap
    show collections

    db.todos.findOne();

    db.todos.insertOne({
        "title" : "아침 6시 30분 기상하기",
        "category" : 1,
        "isDone" : true
    });

    db.todos.updateOne({ title: "아침 6시 30분 기상하기" } , { $set: { isDone : false }})

    db.todos.remove({ title: "아침 6시 30분 기상하기" });
```


apt update
apt install vim

# docker-compose 기본기능 활용
```
    docker-compose ps
    docker-compose stop
    docker-compose rm
    docker-compose restart
    docker-compos logs
```
