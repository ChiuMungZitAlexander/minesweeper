# 扫雷
## 纯前端扫雷游戏

# 技术栈
## javascript babel es6 webpack react redux

# 设计思想
## 雷区图形矩阵
▢▢▩▢▢▢▢▢▢▢  
▢▢▢▩▢▢▢▢▢▢  
▢▢▢▢▢▩▢▢▢▢  
▢▢▢▢▢▢▢▢▢▩  
▢▢▢▢▢▢▢▢▢▢  
▢▩▢▩▢▢▢▢▢▢  
▢▢▢▢▢▢▢▢▢▩  

## 数组化雷区，1指有雷，0指无雷。
<pre>
[  
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],  
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]  
]
</pre>

## 单格对象
### 然而，只用1和0并不能满足全部需求。无雷格应显示周围总雷数，且未点击方格不应显示详情。
#### 有雷格
<pre>
{  
  isMine: true,
  minesAround: *int[0, 8],
  clicked: *boolean*
}  
</pre>

#### 无雷格
<pre>
{  
  isMine: false,
  minesAround: *int[0, 8]*,
  clicked: *boolean*
}  
</pre>

#### 雷区单行/列实例
<pre>
[
  { clicked: false, minesAround: 0, isMine: false },
  { clicked: false, minesAround: 1, isMine: false },
  { clicked: false, minesAround: 0, isMine: true },
  { clicked: false, minesAround: 2, isMine: false },
  { clicked: false, minesAround: 1, isMine: false },
  { clicked: false, minesAround: 0, isMine: false },
  { clicked: false, minesAround: 0, isMine: false },
  { clicked: false, minesAround: 0, isMine: false },
  { clicked: false, minesAround: 0, isMine: false },
  { clicked: false, minesAround: 0, isMine: false }
]
</pre>

# 游戏逻辑
## 点击方格来试探有没有雷
### 有雷：游戏结束，所有雷格显示详情，计时器暂停
### 无雷：显示周围雷数，包括上下左右及对角线的所有方格。显然，周围最多只能有8个雷。如果周围雷数为0，则自动翻开周围8个方格并递归
![GitHub](https://github.com/ChiuMungZitAlexander/minesweeper/blob/master/example.jpg "GitHub,Social Coding")

## 如何胜利
### 所有无雷方格均被点击
