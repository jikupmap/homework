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
-   인스턴스 유형 선택
-   인스턴스 구성 (기본값으로)
    -   서브넷
    -   vpc
-   스토리지 추가 (기본값으로)
-   태그 추가 (기본값으오)
-   보안그룹 구성
-   키페어 저장 및 관리
-   SSH 프로토콜로 서버에 접속

# 간단한 스토리지 만들어보기

AWS 에서 제공하는 인터넷 스토리지

-   버킷 만들기
-   이미지 업로드

[상세내용](https://velog.io/@jinseoit/AWS-S3-bucket)
