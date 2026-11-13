---
title: General — Mathematics
published: 2026-11-09
description: 'CRYPTOHACK General Problems'
image: ''
tags: [cryptohack]
category: 'CTF||Wargame'
draft: false 
lang: 'ko'
---

# 1. Greatest Common Divisor
![](./img/Greatest%20Common%20Divisor.png)
최대 공약수(GCD)는 두 양의 정수를 나누어 떨어지게 하는 가장 큰 수이다.  
a = 11, b = 17 이라고 하자. 둘 모두 1과 자기자신으로만 나눌 수 있는 소수이다. gcd(a, b) = 1이 되고, 이런 두 정수를 서로소 관계라고 한다. 
a, b가 모두 소수면 이들은 서로소이다. a가 소수고 b < a면 a와 b는 서로소이다. a가 소수일 때, a보다 작은 수 중에서 b를 선택했을 때 a의 gcd가 1이 아닐 수 없기 때문이다. (앞의 숫자들로 나누어지지 않으니 a가 소수가 되었을 것이다.)  

:::note[유클리드 호제법]
최대공약수를 구하기 위한 대표적인 알고리즘이 유클리드 알고리즘이다. 두 수의 최대공약수가 큰 수를 작은 수와의 차이로 대체해도 변하지 않는다는 원리에 기반한다.  
2개의 자연수 a, b에 대해 a ÷ b의 나머지를 r이라고 하자. a, b의 최대공약수는 b와 r의 최대공약수와 같다. (gcd(a, b) == gcd(b, r))  
이 성질에 따라 b ÷ r의 나머지 r'을 다시 구하고, r ÷ r'의 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 나누는 수가 a, b의 최대 공약수가 된다.
:::
```python
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a
```
:spoiler[1512]

# 2. Extended GCD
![](./img/Extended%20GCD.png)
산 넘어 산이다.. 이건 또 무슨 소리 일까요?  

a, b > 0 일 때, 유클리드 호제법은 a * u + b * v = gcd(a, b)에서 u, v를 찾는 효율적인 알고리즘이다.  
> 암호화된 RSA 암호문 해독에서 public exponent의 모듈러 역수(modular inverse) 계산에 필요하다.  
우선은 이게 뭔지 부터 알아보죠.. 알아보니 양이 많아서 다른 포스트에 정리해두겠습니다.    


문제는 p=26513, q=32321 일 때, p * u + q * v = gcd(p,q)를 만족하는 u, v를 찾는 것이다. 
# 3. Modular Arithmetic 1

# 4. Modular Arithmetic 2

# 5. Modular Inverting