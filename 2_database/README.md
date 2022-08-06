# 설치방법

docker 설치
```
    sudo apt install docker.io
    sudo apt install docker-compose
```

docker image pull 받기

```
    docker pull mongo:5.0
```

# 실행방법

```
    // 실행
    docker-compose up -d
    // 실행확인
    docker-compose ps
    // 접속
    docker exec -it {container name} bash
```

# DB접속
```
    root@287497040c07:/# mongo
```

docker-compose ps
docker-compose stop
docker-compose rm
docker-compose restart