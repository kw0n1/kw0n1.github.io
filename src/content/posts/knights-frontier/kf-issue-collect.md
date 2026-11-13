---
title: 26년 보안 이슈 스크랩
published: 2026-11-06
description: '매일 x에 올라오는 보안 이슈 스크랩하기'
image: ./img/issueimage.png
tags: [보안 이슈]
category: 블로그||기술문서
draft: false 
lang: 'ko'
---

# 11月
## 13日
[대규모 Microsoft 365 장애](https://cybersecuritynews.com/microsoft-365-massive-outage-fixes-fail-as-restored-servers-keep-going-unresponsive/)  
11월 12일부터 시작되었으며 MS 365 장애가 10시간 이상 지속되며 Teams, Copilot등 주요 서비스 및 OpenAI 등 서드파티 연동 기능까지 광범위한 피해를 입음. 현재 엔지니어들이 서버를 재시작하여 복구해도 실사용자 트래픽이 유입되면 코어 프로세스 과부하로 다시 응답 불능 상태에 빠지는 현상이 반복중임. 사이버 공격이나 침해 사고는 아닌 것으로 판명ㄴ

## 12日
[Apache HTTP/2 모듈 RCE 취약점: CVE-2026-119618](https://x.com/The_Cyber_News/status/2120788514975400420)  
assign_headers() 함수에서 공유 자원이 적절한 잠금 없이 사용되는 동시성 문제 — 코드의 두 부분이 동시에 같은 메모리 영역에 접근 가능, 이는 프로그램 실행 중 사용하는 메모리 영역인 힙을 손상시킬 수 있으며, 원격 코드 실행으로 이어질 수 있음

## 11日
[Windows SignDrop 0-Day: CLFS 보호 기능을 이용한 System 권한 획득](https://x.com/The_Cyber_News/status/2120516845577130096)  
이전 메모리 변조 방지용 HMAC 검증 로직을 역으로 이용해 서명 생성 절차 악용. clfs.sys가 빈 연결 컨테이너를 가진 로그의 서명 파일 생성 시 발생하는 결함을 이용하여 SYSTEM 권한 프로세스가 서명 파일을 생성하도록 유도, 임의 파일 쓰기 권한 획득. 정상적인 커널 로직 흐름 내에서 system 권한 승격을 달성해 보안 솔루션 무력화 가능

## 10日
[Chrom 0-Day: CVE-2026-125350](https://x.com/The_Cyber_News/status/2120041515011719371)  
Chrome XML 구성 요소에서 발견된 use-after-free 취약점 (프로그램이 메모리를 해제한 후에도 계속 사용 시 발생)  
브라우저 다운 또는 함정이 설치된 웹 사이트를 통해 코드 실행 가능

## 09日
[React 서버 컴포넌트 결함](https://x.com/The_Cyber_News/status/2119713352507335105)  
GHSA-xqc2-xf4c-x3h3 — 공격자가 로그인(인증) 없이 원격으로 코드 실행 가능(RCE) 

## 08日
[ChatGPT Lockdown Mode 우회 취약점](https://x.com/The_Cyber_News/status/2119247150672695322)

Lockdown mode는 데이터 유출을 막기 위한 보안 설정. 숨겨진 팝업 트릭으로 사용자의 전체 채팅 기록 탈취, 가짜 창, 멀웨어 유포 가능 

## 07日
[WordPress Core 취약점을 이용한 RCE](https://x.com/The_Cyber_News/status/2118970448402952590)

CVE-2026-119977 취약점 — 노출된 설치 프로그램에 접근한 공격자가 단계별 설치 완료 후 관리자 계정 생성 후 악성 PHP 코드 업로드 가능 

## 06日
[OpenSSH 취약점을 이용한 Alpine Linux 서버 pw 우회](https://x.com/The_Cyber_News/status/2118360544503881736)

비정상적으로 긴 pw를 사용하면 pw 검사 실패가 로그인 성공으로 이어질 수 있음.

공격 대상 계정은 비밀번호 필드가 `*`으로 설정되고, 시스템 내 다른 계정 중 하나 이상이 `&5$` 또는 `$6$` 형태의 비밀번호 해시를 포함하고 있어야 함. 또한 SSH pw 인증이 활성화 되어있어야 함.

입력된 pw가 256바이트를 초과할 시 musl 관련 pw 해싱 코드가 이를 거부하고 `*` 오류 표시를 반환. 해당 표시가 대상 계정에 저장된 필드와 일치. 따라서 로그인 성공

---

:::note[양식]
## 日
[]()
:::