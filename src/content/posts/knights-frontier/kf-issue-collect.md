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

:::note[양식]
## 日
[]()
:::

---

# 11月
## 24日
[]()

## 23日
[삼성증권 데이터 유출로 8,241명의 개인 및 계좌 정보 노출](https://x.com/The_Cyber_News/status/2124790877776482776)  
Voice of Customer (VOC) 시스템에서 무단 접근을 감지 하였다. 고객이 제출물과 함께 업로드한 일부 파일들이 유출된 것을 확인되었으며, 증권사 주요 데이터 베이스와는 무관하였다. 해당 파일에는 고객의 이름, 계좌 번호, 주택 주소, 연락처 세부사항, 운전면허번호 등 13개 범주의 개인정보가 포함되어있었다. 

## 22日
[Upload2Shell: CVE-2026-125396](https://x.com/The_Cyber_News/status/2124386142728384993)  
Ghostscript는 PDF 및 PostScript를 렌더링(파일 내의 명령 실행)하는 오픈소스다.  
공격자가 악성 파일 업로드/전송 시 서버가 파일의 썸네일(미리보기)를 생성하거나 인쇄 작업을 처리하는 과정에서 Ghostscript의 샌드박스인 -dSAFER 모드를 우회하여 원격 명령 실행(RCE)가 가능해진다.  
백엔드에서 간접적으로 호출하는 WordPress, Roundcube 웹메일, 리눅스 CUPS 프린트 서버 등이 공격에 노출될 수 있다.  

## 21日
[OpenSSL의 힙 퍼버 오버플로우 취약점: CVE-2026-121481](https://x.com/The_Cyber_News/status/2123761390057828405)  
Base64는 입력 바이트 3개마다 출력 바이트 4개를 생성하고, 부분 그룹에 대한 패딩을 추가, 응용 프로그램은 결과를 저장하는 버퍼 제공한다. 매우 큰 입력이라면 OpenSSL의 인코딩 길이 계산이 저장하는 데 사용된 정수 범위 초과 가능 

## 20日
[phpAfterShell: CVE-2026-126714](https://x.com/The_Cyber_News/status/2123600465673785672)  
PHP2Shell 보안 패치를 우회하여 인증 없이 원격 코드 실행 가능

## 19日
[NGINX RCE 취약점: CVE-2026-123633 및 CVE-2026-123007](https://x.com/The_Cyber_News/status/2123087843518296424)  
NGINX가 클라이언트로부터 HTTP/2 연결 수락 시 발생하여 인증(로그인) 없이 원격 코드 실행 가능. 

## 18日
[Java4Shell: CVE-2026-114938](https://x.com/The_Cyber_News/status/2122880918465782078)  
OpenJDK의 Base64 디코더의 취약점으로 공격자가 로그인 없이 영향을 받는 서버에서 코드 실행 가능 및 JVM을 충돌시키거나 메모리에 저장된 데이터 노출 가능 

## 17日
[맥도날드 iOS앱 대량 푸시 알림 공격](https://x.com/The_Cyber_News/status/2122649402955452624)  
14시 20분경 알림을 받음. 알림으로는 "ZZQA", "ZZQA_CANARY_29105", "ARTEX283CHK", "ARTEX-TEST-ALIAS2"와 같은 텍스트가 표시됨. 목적과 출처는 불분명 

## 16日
[NoisyTCP 리눅스 커널 결함: CVE-2026-99288](https://x.com/The_Cyber_News/status/2122214332024881465)  
결함은 TCP 코드에 존재. listen() 호출 후 공격자로부터 패킷을 수신하기만 하면 됨  
한 CPU가 기존의 반쯤 열린 연결(half-open connection) 기록 조회하는 사이, 다른 CPU가 해당 메모리를 해제하고 동일한 연결 정보를 가진 새 SYN 쿠키(SYN cookie) 요청에 즉각 재사용
첫번째 CPU가 재사용된 새 객체를 정상적인 기존 기록으로 오인하여 검사 통과, 새 객체에는 리스너가 연결되어있지 않음. 커널은 리스너가 NULL임을 읽고 패닉 -> 원격 서비스 거부 공격 유발 가능 

## 15日
[ARTEX AI 에이전트를 사용한 권한 있는 액세스 얻기](https://x.com/The_Cyber_News/status/2121786067217183153)  
ARTEX AI 에이전트를 사용해 기존 취약점들을 연결한 공격을 자동화 중. 일부 침입이 3시간 이내에 권한 있는 액세스에 도달

## 14日
[Check Point 0-Day 취약점을 이용한 루트 액세스 권한 획득: CVE-2026-123039](https://x.com/The_Cyber_News/status/2121502390960414879)  
루트 권한으로 실행되어 확장된 명령줄 기능을 처리하는 dynamic_server 프로세스가 /tmp/dynamic_socket 을 통해 요청 수신. 해당 소켓 권한이 취약한 시스템에서는 0777로 설정됨 

## 13日
[대규모 Microsoft 365 장애](https://cybersecuritynews.com/microsoft-365-massive-outage-fixes-fail-as-restored-servers-keep-going-unresponsive/)  
11월 12일부터 시작되었으며 MS 365 장애가 10시간 이상 지속되며 Teams, Copilot등 주요 서비스 및 OpenAI 등 서드파티 연동 기능까지 광범위한 피해를 입음. 현재 엔지니어들이 서버를 재시작하여 복구해도 실사용자 트래픽이 유입되면 코어 프로세스 과부하로 다시 응답 불능 상태에 빠지는 현상이 반복중임. 사이버 공격이나 침해 사고는 아닌 것으로 판명남

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