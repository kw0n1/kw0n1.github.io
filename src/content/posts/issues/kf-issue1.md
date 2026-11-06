---
title: 261106 보안 이슈 — OpenSSH 취약점으로 Alpine Linux 서버 pw 우회 가능
published: 2026-11-06
description: ''
image: ''
tags: [보안 이슈]
category: 블로그||기술문서
draft: false 
lang: 'ko'
---

[기사](https://x.com/The_Cyber_News/status/2118360544503881736)

비정상적으로 긴 pw를 사용하면 pw 검사 실패가 로그인 성공으로 이어질 수 있음.

공격 대상 계정은 비밀번호 필드가 `*`으로 설정되고, 시스템 내 다른 계정 중 하나 이상이 `&5$` 또는 `$6$` 형태의 비밀번호 해시를 포함하고 있어야 함. 또한 SSH pw 인증이 활성화 되어있어야 함.

입력된 pw가 256바이트를 초과할 시 musl 관련 pw 해싱 코드가 이를 거부하고 `*` 오류 표시를 반환. 해당 표시가 대상 계정에 저장된 필드와 일치. 따라서 로그인 성공