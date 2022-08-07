# AWS 기본개념

웹 사이트 원영에 필요한 컴퓨팅, 스토리지, 데이터베이스, 라우터 등을 서비스로 제공가능한 '클라우드 컴퓨팅 서비스'이다.
서버 및 네트워크 등을 인터넷으로 빌려주는데, 사용한 만큼 지불하면 된다.

클라우드 서비스 장점

-   전문 인력에 대한 부담 축소
-   장비 유지/관리에 대한 부담 축소
-   보안 기준 준수
-   글로벌 확장에 용이

[상세내용](https://codingpractices.tistory.com/92)

# AWS 계정 가입

계정 가입 후 리전을 아시아 태평양(서울) ap-northeast-2 선택

# 간단한 서버 만들어보기 (EC2)

-   AMI(Amazon Machine Image) 선택 [링크](https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/ec2-instances-and-amis.html)
    -   ubuntu server 22.04 LTS
    -   64bit(x86)
-   인스턴스 유형 선택
    -   t2.micro
-   키페어
    -   새 키페어 생성
-   네트워크 설정
    -   vpc
    -   보안그룹
-   스토리지 구성 (기본값으로)
-   태그 추가

# 서버 접속 (SSH 프로토콜)

- 보안 그룹 인바운드에 SSH 접속 추가 (학습을 위해 '모든 트래픽'으로 선택)
    - SSH, TCP, 22, 0.0.0.0/0
    - MongoDB, TCP, 27017, 0.0.0.0/0

```
    chmod 400 {pem파일_이름}.pem
    ssh -i {pem파일_이름}.pem ubuntu@{퍼블릭 IPv4 DNS}
```

# 간단한 스토리지 만들어보기

AWS 에서 제공하는 인터넷 스토리지

-   버킷 만들기
-   이미지 업로드

[상세내용](https://velog.io/@jinseoit/AWS-S3-bucket)
