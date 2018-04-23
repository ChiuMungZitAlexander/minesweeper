# MineSweeper 扫雷
## a frontend minesweeper game 一个前端扫雷游戏

# Design Ideas
## visual matrix of mines
▢▢▩▢▢▢▢▢▢▢  
▢▢▢▩▢▢▢▢▢▢  
▢▢▢▢▢▩▢▢▢▢  
▢▢▢▢▢▢▢▢▢▩  
▢▢▢▢▢▢▢▢▢▢  
▢▩▢▩▢▢▢▢▢▢  
▢▢▢▢▢▢▢▢▢▩  

## array matrix of mines, 1 means the squre is 'explosive'
[  
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],  
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],  
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]  
]

## single tile object
### However, only 1 and 0 cannot fulfill the need. No-mine squre has the sum of mines around.
#### mine squre
{  
  mine: true,
  minesBeside: 0 <!-- optional -->,
  stepped: *boolean* <!-- optional -->
}  
#### no-mine squre
{
	mine: false, <!-- optional -->
	minesBeside: *int[0, 8]*,
	stepped: *boolean*
}
#### example of the first row of matrix
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

# Playing Logic
## click squre to find if you step on a mine
### yes => dead and game over
### no => Show the mines around, including horizontal, vertical and diagonal ones. At most 8 mines around.
↖  ↑  ↗
←  ▢  →
↙  ↓  ↘

### If no nimes around, auto reveal squres around.

## how to win
### all no-mine squres are stepped
