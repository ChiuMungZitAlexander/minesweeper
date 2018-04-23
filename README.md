# MineSweeper 扫雷
## a frontend minesweeper game 一个前端扫雷游戏

# Design Ideas 设计思想
## visual matrix of mines 雷区图形矩阵
▢▢▩▢▢▢▢▢▢▢  
▢▢▢▩▢▢▢▢▢▢  
▢▢▢▢▢▩▢▢▢▢  
▢▢▢▢▢▢▢▢▢▩  
▢▢▢▢▢▢▢▢▢▢  
▢▩▢▩▢▢▢▢▢▢  
▢▢▢▢▢▢▢▢▢▩  

## array matrix of mines, 1 means the squre is 'explosive' 数组化雷区，1指有雷，0指无雷。
[  
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],  
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]  
]

## single squre object 单格对象
### However, only 1 and 0 cannot fulfill the need. No-mine squre has the sum of mines around. 然而，只用1和0并不能满足全部需求。无雷格应显示周围总雷数。
#### mine squre 有雷格
{  
mine: true,  
minesBeside: 0 <!-- optional -->,  
stepped: *boolean* <!-- optional -->  
}  
#### no-mine squre 无雷格
{  
mine: false, <!-- optional -->  
minesBeside: *int[0, 8]*,  
stepped: *boolean*  
}  
#### example of the first row of matrix 第一行实例
[  
{ minesBeside: 0},  
{ minesBeside: 1},  
{ mine: true },  
{ minesBeside: 2},  
{ minesBeside: 1},  
{ minesBeside: 0},  
{ minesBeside: 0},  
{ minesBeside: 0},  
{ minesBeside: 0},  
{ minesBeside: 0}  
]  

# Playing Logic 游戏逻辑
## click squre to find if you step on a mine 点击方格来测试有没有雷
### yes => dead and game over 有=>死了，游戏结束
### no => Show the mines around, including horizontal, vertical and diagonal ones. At most 8 mines around. 没有=>显示周围雷数，包括上下左右及对角线的所有方格。显然，周围最多只能有8个雷。
↖  ↑  ↗  
←  ▢  →  
↙  ↓  ↘  

### If no nimes around, auto reveal squres around. 如果周围没有雷，则自动显示周围方格周围的雷数。

## how to win 如何胜利
### all no-mine squres are stepped 所有无雷方格均被点击
