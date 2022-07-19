# 깃 개념

# 깃 기본 셋팅법

## 깃 설치

**[Window]**

**[Mac]**

## 깃 셋팅

# 깃 기본 명령어

## git 브랜치 관리

```
    git status
    git branch -r
    git branch -t
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
