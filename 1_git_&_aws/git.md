# 깃 개념

깃 문서에서는 Distributed Version Control 이라고 말합니다. 중앙화된 서버 저장소가 있고 그 외 각각의 로컬에서도 이 리모트 저장소를 기준으로 언제든 다운로드하고 업로드 할 수 있습니다.
또 하나의 중요한 점은 깃은 파일 그자체를 저장하고 있는게 아니라, 그 순간의 변경이력(커밋)을 저장합니다.

이런 점들 덕분에 Git 은 협업툴로 강력하고, 가볍습니다.

[입문용\_참고자료](https://backlog.com/git-tutorial/kr/intro/intro1_1.html)
<br/>
<br/>

# 깃 회원가입

https://github.com/ 로 접속하셔서 회원가입을 완료하세요

# 깃 기본 셋팅법

[깃\_설치문서](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98) 에서 자세한 내용을 참고하면 됩니다.

## 깃 설치

**[Ubuntu]**

```
$ sudo apt install git-all
$ git --version
```

**[Window]**
[깃\_다운로드](http://git-scm.com/download/win) 에서 다운로드

**[Mac]**
[깃\_다운로드](http://git-scm.com/download/mac) 에서 다운로드

## 깃 셋팅

아래 내용은 회원가입때 입력한 name과 email 이어야합니다.

```
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com

$ git config --list
```

<br/>
<br/>

# 깃 기본 명령어

## git 브랜치 관리

```
    git status
    git branch -r
    git branch -t
    git branch -m {새로운 브랜치 이름}
    git branch {브랜치이름}
```

## git 로그 확인

```
    git log -p
    git log --stat
    git log --oneline
    git log --graph
    git log --pretty=oneline
    git log --pretty=format:"%h - %an [ %ar ] : %s"
```

## git 변경 확인

```
    git checkout {브랜치이름}
    git checkout -b {브랜치이름}
    git checkout -t origin/{브랜치이름}
```

[조회 옵션설명](https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EC%BB%A4%EB%B0%8B-%ED%9E%88%EC%8A%A4%ED%86%A0%EB%A6%AC-%EC%A1%B0%ED%9A%8C%ED%95%98%EA%B8%B0)

<br/>
<br/>

# 깃 사용하기

## git 최신화

```
    git fetch
    git pull
    git rebase
```

## git 변경점 추가

```
    git add -p {경로}
    git add
```

```
    git commit -a
    git commit -m ""
    git commit -v
    git commit --amend
```

## git 되돌리기

```
    git reset {hash}
    git revert {hash}
```
