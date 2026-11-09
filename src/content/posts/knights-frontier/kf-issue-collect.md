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