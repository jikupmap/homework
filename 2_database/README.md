# 설치방법

docker image pull 받기

```
    docker pull mongo:{version}
```

# 실행방법

```
    // 실행
    docker-compose up -d --env-file .env
    // 실행확인
    docker-compose ps
    // 접속
    docker exec -it {container name} bash
```
