---
title: General — XOR
published: 2026-11-08
description: 'CRYPTOHACK General Problems'
image: ''
tags: [cryptohack]
category: 'CTF||Wargame'
draft: false 
lang: 'ko'
---

# 1. XOR Starter
![](./img/XOR%20Starter.png)
XOR은 두 비트가 다를 경우 1, 같은 경우 0을 반환한다. 프로그래밍 언어에서는 `^` (캐럿) 기호를 사용한다.

정수의 경우 10진수를 먼저 2진수로 변환해 주어야 한다.  
문자열이라면 각 문자가 나타내는 유니코드 문자로 변환해 주어야 한다. 

pwntools의 `xor()` 함수를 사용할 수 있다. (각 문자에 대해 XOR)

> 문자열 -> 바이트 변환은 `encode()` 를 사용할 수 있다. `bytes()` 로도 가능하다.  
> 그 역은 `decode()` 와 `str()` 이다.  
> pwntools에서는 리터럴 표기법 `b''` 로 바로 바이트 타입으로 변환 가능하다.  
> <br/>
> 정수는 `b'\x01'` 의 형태로 가능하다. `bin()` 함수를 사용할 수도 있다. 결과에 0b가 붙은 문자열로 반환하기 때문에 `format()` 을 사용하는 방법도 있다.

```python
from pwn import *

s = "label"
print(xor(s, 13))
```
xor() 함수는 str타입 데이터가 입력되면 자동으로 UTF-8 형식의 bytes 타입으로 인코딩하여 연산해 준다. 결과로는 bytes 타입을 반환한다. 
:spolier[crypto{aloha}]

:::note[해보기]
xor() 함수를 사용하지 않으면 `x = "".join(chr(c ^ 13) for c in s)` 로도 XOR 결과를 구할 수 있다. 
:::

---

# 2. XOR Properties
![](./img/XOR%20Properties.png)
암호화한 일련의 연산을 되돌리는 방법에 대한 이야기다.  
XOR에 대해서 교환, 결합, 항등원(Identity), 자기 역원(self-Inverse)가 성립한다.  
> 교환 법칙: XOR 연산의 순서는 중요하지 않음  
> 결합 법칙: 연산을 순서에 상관 없이 수행 가능  
> 항등원: 항등원은 0. XOR 연산 시 아무 일도 일어나지 않음
> 자기 역원: 자기 자신과 XOR 연산 시 결과는 0

k1 ^ k2 에 ^ k1 을 연산하면 k1 ^ k1 (자기역원)이 0이므로 k2만 남는 XOR의 특징을 이용한다.

```python
from pwn import *

k1 = bytes.fromhex("a6c8b6733c9b22de7bc0253266a3867df55acde8635e19c73313")
key1key2 = bytes.fromhex("37dcb292030faa90d07eec17e3b1c6d8daf94c35d4c9191a5e1e")
key2key3 = bytes.fromhex("c1545756687e7573db23aa1c3452a098b71a7fbf0fddddde5fc1")
flagkey1key2key3 = bytes.fromhex("04ee9855208a2cd59091d04767ae47963170d1660df7f56f5faf")

k2 = xor(key1key2, k1)
k3 = xor(key2key3, k2)
k1k2k3 = xor(key1key2, k3)
print(xor(flagkey1key2key3, k1k2k3))
```
:spoiler[crypto{x0r_i5_ass0c1at1v3}]

---

# 3. Favourite byte
![](./img/Favourite%20byte.png)
가르쳐 준 것도 별거 없는 것 같은데 갑자기 1바이트 데이터를 숨겨놨는데, 이걸 찾으라는 어이없는 소리를 한다. 

1부터 증가시키며 xor을 해보다가 crypto 문자열이 존재하면 빠져나가는 식으로 구할 수 있지 않을까 했다.
```python
from pwn import *

cipher = bytes.fromhex("73626960647f6b206821204f21254f7d694f7624662065622127234f726927756d")
print(cipher)

x = 1
while True:
    res = xor(cipher, x).decode() # xor의 겶과는 bytes 타입이므로 str로 변환
    print(res)
    if "crypto" in res:
        break
    x += 1
```
:spoiler[crypto{0x10_15_my_f4v0ur173_by7e}]

---

# 4. You either know, XOR you don't
![](./img/You%20either%20know,%20XOR%20you%20don't.png)
3번과 비슷한 문제 같다. 힌트로는 flag 형식을 기억하라고 한다.  
앞의 코드를 그대로 사용해보니 `UnicodeDecodeError: 'utf-8' codec can't decode byte 0x8e in position 0: invalid start byte` 에러가 발생한다. UTF-8 범위에서 벗어나서 그런듯 하다.  
생각해보니 바이트 타입에서 검사할 수도 있을 것 같다.  
`if b'crypto{' in res:` 로 수정하니 그래도 안된다.

힌트를 다시 생각해보자.  
우리는 `b'crypto{'` 를 알고 있다. 이걸로 XOR을 하면 비밀키 앞부분을 알 수 있지 않을까?
```python
from pwn import *

cipher = bytes.fromhex("0e0b213f26041e480b26217f27342e175d0e070a3c5b103e2526217f27342e175d0e077e263451150104")
known =  b'crypto{'
s = xor(cipher, known)
print(s)
```
`b'myXORke+y_Q\x0bHOMe$~seG8bGURN\x04DFWg)a|\x1dTM!an\x7f'` 이런 문자열을 던져준다. myXORke+y라는 곳이 눈에 띈다.  
직감이 이게 비밀키라고 말한다. 근데 뭔가 하나만 빠지면 이쁜 문자열이 될 것 같다. (사실 myXORke, myXORke+y, myXORke+ 다 해봤다.)  
myXORkey가 비밀키라고 생각해보자. 
```python
from pwn import *

cipher = bytes.fromhex("0e0b213f26041e480b26217f27342e175d0e070a3c5b103e2526217f27342e175d0e077e263451150104")
known =  b'crypto{'
key = xor(cipher, known)[0:len(known)] + b'y'
res = xor(cipher, key)
print(res)
```
:spoiler[crypto{1f_y0u_Kn0w_En0uGH_y0u_Kn0w_1t_4ll}] 풀렸다.

---

# 5. Lemur XOR
![](./img/Lemur%20XOR.png)
동일한 비밀 키로 두개의 이미지를 XOR 해놨다.  
힌트로는 두 이미지의 RGB 바이트 간 시각적인 XOR 연산을 하는거라고 말한다.  
이미지 파일을 두개 주는데 누가봐도 lemur 먼저 계산해야할 것 같다.  
라고도 생각했는데 key를 알지 못하니 `img1 ^ key ^ img2 ^key` 를 통해 key를 없애고 이미지를 병합시키는 방법도 생각이 났다. 크기는 둘다 582 x 327 이다. 

```python
import cv2

flag = cv2.imread('./flag_7ae18c704272532658c10b5faad06d74.png')
lemur = cv2.imread('./lemur_ed66878c338e662d3473f0d98eedbd0d.png')

res = cv2.bitwise_xor(flag, lemur) 
cv2.imwrite('./flag.png', res) # 이미지 저장
```