---
title: "Algebraic Chess Notation"
date: "2013-04-11"
categories: 
  - "chess"
  - "explanation"
---

We use algebraic chess notation to represent chess positions without posting a full chessboard. This allows players to converse about chess positions clearly without a board in front of us. Imagine the chess board as a 2D plot. Below is the table I made to explain this notation in my paper _[How Stockfish Works: An Evaluation of the Databases Behind the Top Open-Source Chess Engine](/stockfish/)_. I will post more about this paper when I’ve finished editing it.

[![](/wp-content/uploads/2013/04/algnotation.png)](/wp-content/uploads/2013/04/algnotation.png)

| Symbol | Meaning |
| --- | --- |
| a-h | file from white’s left to right |
| 1-8 | rank from white to black |
| R, N, B/S, Q, K | Rook, Knight, Bishop, Queen, King |
| x | capture; the piece that was at this location is removed |
| + | a note that the king is threatened |
| # or ++ | checkmate; a note that this is the reason for the end of the game |
| = | promoted to; a pawn arriving at the opposite side of the board is promoted to another piece, often a queen. |
| 0-0 | castle on the kings side; move to positions (B - Kg8 Rf8 ; W - Kf1 Rg1) (if neither has moved before this point in the game) |
| 0-0-0 | castle on the queens side; (B - Kd8 Rc8 ; W - Kc1 Rd1) (if neither has moved before this point in the game) |
| e.p. | en passant capture (non-SAN), a note that a pawn was taken by another pawn passing it. When a pawns first move is a two space move (from 7 to 5 for black or 2 to 4 for white) it can be captured by moving behind it to the 6th rank (white taking black) or 3rd rank (black taking white). |
| ?, ??, !, !! | editorial comments, weak, very weak, strong, very strong |

<table align="center" cellpadding="0" cellspacing="0" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody><tr><td><a href="/wp-content/uploads/2013/04/algnotation.png" style="margin-left: auto; margin-right: auto;"><img border="0" src="/wp-content/uploads/2013/04/algnotation.png"></a></td></tr><tr><td style="font-size: 13px;">Coordinates in Algebraic Chess Notation</td></tr></tbody></table>

I encourage you to explore [additional background information](http://www.itmaybeahack.com/book/python-2.6/html/p05/p05c06_chess.html) provided by the online book _Building Skills in Python._
