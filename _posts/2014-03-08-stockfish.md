---
title: "How Stockfish Works: An Evaluation of the Databases Behind the Top Open-Source Chess Engine"
date: "2014-03-08"
categories: 
  - "chess"
  - "research-projects"
---

This is a paper I wrote my 3rd year of university as I was working on my [Machine Learning-based Braille translator research](/category/camel/). Enjoy!

**Abstract**

Playing chess has been on the forefront of AI research since Alan Turing and his students proposed chess playing machines. The game of chess is a domain of human thought where very limited sets of rules yield inexhaustible depths, challenges, frustration and beauty. The playing strategies of AI and human players have diverged proportional to the increase of available computing power, namely speed and storage space. Human players recognize and aim to achieve particular patterns; typically, they perform a deep search weighted towards moves that lead to such desired patterns, transferring past knowledge and adapting it to their present situation. AI chess is mostly played by parsing through a huge database, with broad search algorithms used to search for the next optimal move.

All chess engines work by looking at a heuristically determined subset of the legal moves stemming from a given position and evaluating numbers to represent the new position’s relative value obtained by making those moves; then, recursively doing the same thing for the resulting positions. This is done using an evaluation function. An efficient evaluation function provides a better toolbox to guide the chess tree search, which improves the strength and speed of the AI player.

Stockfish is the top-ranked open-source chess engine, and I will be evaluating its elaborate use of databases; in particular, how Stockfish represents the state of the chessboard, evaluates the static board positions, uses its search algorithm, and uses past moves to optimize its next move. **Keywords:** Chess, AI Chess, Search Techniques, Chess algorithms, Databases, Alpha-Beta Pruning, Stockfish, Stockfish 2.3.1

**INTRODUCTION**

**Application Domain**

It is important to distinguish between computer chess research and research using chess as a test bed. The latter expands the user community past chess enthusiasts to AI developers. In AI, the real-time evaluation and categorization of a dynamic environment is crucial to maintaining functionality while performing a task. This environment can be categorized using preset labels and rules or adapted to based purely on experience. Stockfish’s evaluation of chess positions, based not only on material properties (i.e., “I have more pieces than you”) but on the relationships and structures that exist between said material (i.e., “My piece is protected by two other pieces, and is threatening your unprotected piece.”), is useful in the domain of autonomous systems which must quickly evaluate the stability of groups of objects interacting within set rules.

**Project Motivation**

The narrow view of this project’s motivation is to improve the strength of AI chess players. This engine’s effectiveness depends on proper tagging, passing, evaluating, and searching of chess positions.

The main issues faced by AI chess players are:

- Storing and evaluating data efficiently
- Proceeding with the recursive search of moves

For most chess positions, computers cannot look ahead to all final possible positions. Instead, they must look ahead a few plies (a “ply” refers to one turn taken by one of the players. “Turn” is problematic since it means different things in different traditions. For example, in standard chess terminology, one move consists of a turn by each player; therefore a ply in chess is a half-move.) and then evaluate the final board position. The algorithm that evaluates final board positions is the evaluation function, which differs between different chess engines.

While the human method of analyzing alternatives seems to involve selecting a few promising lines of play and exploring them, computers are necessarily exhaustive rather than selective, so refinement techniques have been (and continue to be) developed.

Stockfish uses a complicated set of analysis functions depending on what material is on the board. By applying small changes and refinements (i.e. using categorical analysis) to alpha-beta pruning, there is a measurable difference in the time efficiency of pruning, without disregarding interesting nodes. Stockfish continues to expand as additions and tweaks are added by various developers. **Science Usage** The user requirements for Stockfish are mercifully little, for it is an open-source cross-platform engine. The only pre-requisites to using Stockfish are downloading the source code from [their website](http://stockfishchess.org/download/). It may be run from the commandline or a UCI-Compatible GUI.

**Goals**

The ultimate goal of Stockfish is to unite the chess-program-developer community, and continue to a build stronger, faster chess engine. This includes, among other things, a goal to improve the effectiveness of search evaluations. By creating an efficient board representation, this provides a better toolbox to guide the chess tree search, which improves the AI.

Alpha-beta pruning is just a complicated-sounding name for “Don’t check moves which cannot possibly have an effect on the outcome of your search.” The alpha-beta algorithm used in recursive search continues be improved. These enhancements come from the fact that if you restrict the window of scores that are interesting, you can achieve more cutoffs. The latest technique of move ordering is applied outside of the search, using iterative deepening boosted by a transposition table.

**Results**

Stockfish has clearly demonstrated that simple, brute-force approaches should not be quickly discarded. Additionally, iterative techniques, in particular, ideas developed for alpha-beta search and iterative deepening, are applicable to other search domains. Stockfish has clearly demonstrated the inadequacy of conventional AI techniques for real-time computation. Stockfish does not use AI languages or knowledge representation methods, for these conventions are too slow for a real-time, high-performance application.

I have found that Stockfish represents the state of the chessboard using bitboards, it evaluates the static board positions using a categorical and statistical representation and uses an advanced alpha-beta search algorithm. In order to not analyze the same position several times, a transposition table is used. This is essentially memorization applied to the search function.

**Design and Schema**

The design of Stockfish is based on the interaction of various nodes (pictured in Schema).

A move search in Stockfish consists of 21 steps.

Step 1. Initialize node

Step 2. Check for aborted search and immediate draw. Enforce node limit here. (This only works with 1 search thread, as of Stockfish 2.3.1.)

Step 3. Mate distance pruning. Even if we mate at the next move our score would be at best mate_in (\(\text{ss}\rightarrow\text{ply}+1\)), but if alpha is already bigger because a shorter mate was found upward in the tree then there is no need to search further, we will never beat current alpha. Same logic but with reversed signs applies also in the opposite condition of being mated instead of giving mate, in this case return a fail-high score.

Step 4. Transposition table lookup. We don’t want the score of a partial search to overwrite a previous full search. We use a different position key in case of an excluded move.

Step 5. Evaluate the position statically and update parent’s gain statistics

Step 6. Razoring (is omitted in PV nodes)

Step 7. Static null move pruning (is omitted in PV nodes). We’re betting that the opponent doesn’t have a move that will reduce the score by more than futility-margin (depth) if we do a null move.

Step 8. Null move search with verification search

Step 9. ProbCut. If we have a very good capture and a reduced search returns a value much above beta, we can (almost) safely prune the previous move.

Step 10. Internal iterative deepening.

Step 11. Loop through moves. Loop through all pseudo-legal moves until no moves remain or a beta cutoff occurs

Step 12. Extend checks and also dangerous moves

13. Futility pruning.

Step 14. Make the move

Step 15. Reduced depth search (LMR). If the move fails high will be re-searched at full depth.

Step 16. Full depth search, when LMR is skipped or fails high.

Step 17. Undo move

Step 18. Check for new best move

Step 19. Check for split

Step 20. Check for mate and stalemate

Step 21. Update tables. Update transposition table entry, killers and history

Stockfish begins by developing a legal-move tree, whence it must evaluate the resulting board positions. That is, the computer has to look at the pieces on the board and decide whether that arrangement of pieces is “good” or “bad.” The way it does this is by using an evaluation function. Since it is so important to evaluate the best move first, it might be worthwhile to execute a shallower search first and then use the resulting alpha/beta cutoff values as start values for a deeper search.

The chess evaluation function becomes more and more complicated by adding things like board position, control of the center, vulnerability of the king to check, vulnerability of the opponent’s queen, and tons of other parameters. No matter how complicated the function gets, however, it is condensed down to a single number that represents the “goodness” of that board position.

The main rules that govern the evaluation of position in Stockfish are as follows.

Pawn Structure

1. Penalize doubled, backward and blocked pawns.
2. Encourage pawn advancement where adequately defended.
3. Encourage control of the center of the board.

Piece Placement

1. Encourage knights to occupy the center of the board.
2. Encourage queens and rooks to defend each other and attack.
3. Encourage 7th rank attacks for rooks.

Passed Pawns

1. These deserve a special treatment as they are so important.
2. Check for safety from opposing king and enemy pieces.
3. Add enormous incentives for passed pawns near promotion.

King Safety

1. Encourage the king to stay to the corner in the middlegame.
2. Try to retain and effective pawn shield.
3. Try to stop enemy pieces from getting near to the king.

The same position will commonly occur from different move orders, thus most chess engines (including Stockfish) have a trasposition table (position cache). This is implemented using a hash table using the chess position as its key. Using a position cache instead of a hash table negates the need to evaluate large sub trees over and over again.

Alpha-beta pruning, without enhancements nor extensions, is represented in psuedo-Python below.

```
def alphaBetaMax (alpha, beta, depthleft):
   if (depthleft == 0): return evaluate()
   for (all moves):
      score = alphaBetaMin(alpha, beta, depthleft - 1 )
      if( score >= beta):
         return beta   #fail hard beta-cutoff
      if( score > alpha ):
         alpha = score #alpha acts like max in MiniMax
   return alpha
def alphaBetaMin(alpha, beta, depthleft )
   if ( depthleft == 0): return -evaluate()
   for (all moves):
      score = alphaBetaMax( alpha, beta, depthleft - 1 )
      if( score <= alpha ):
         return alpha #fail hard alpha-cutoff
      if( score < beta ):
         beta = score  # beta acts like min in MiniMax
   return beta
score = alphaBetaMax(-oo, +oo, depth)
print score
```

This schema shows the input with the current position, and ends with the next move, in order to avoid over-powering the simple nature of Stockfish by showing both method names and method parameters, I have created a representation of the overall use of databases in Stockfish.

![](/wp-content/uploads/2014/03/chess.png)

The relationship of principle structures in the main database (governed by search.cpp)

**Contents of Database**

The contents of a typical chess engine database is past moves (moves that have been done in the past, very useful for the opening game), current moves (moves that are legal from a chess board’s current position), and legal moves (rules governing the movement of each type of chess piece). Stockfish uses bitboard representation. Bitboards are a wonderful method of speeding up various operations on chessboards by representing the board by a set of 64 bit numbers.

A brief explanation of Bitboards is as follows: Supposing, for example, we generate a 64 bit number which represents the pawn structure on the chess board. We do this by starting at a8, and moving across then down in the sense a8,b8,c8,…,h8,a7,b7,c7,…,g1,h1. For each square, we put a ‘1’ if there is a pawn, or a ‘0’ otherwise. Then we have just one number on which we can perform all sorts of useful operations. Once we have a bitboard with all the possible destination squares set to ‘1’, we now have to cycle through them one by one. To do this, we require two routines. Firstly we require a routine which locates the position of the first bit in the bitboard which is set, and secondly we need a simple macro which then sets this bit to zero.

**10 Questions**

Any chess player, human or AI, must answer the following question: _What is the “best” move I can make next?_. This answer is highly subjective, and depends entirely on what constitutes a “good” position. As humans, we easily recognize patterns, apply our past experience to current games, and use our intuition to judge the quality of play. However, a chess evaluator must find the strength of possible positions in a mechanical way, using a set of parameters (similar to the following questions) to describe and evaluate the strength of a given position.

Query 1) What is the position of all pieces on the board?

Query 2) What legal moves can each piece make from this position?

Query 3) What are relationships between pieces on the board? Are structures threatened or pieces undefended?

Query 4) Is there a strong pawn structure and effective pawn shield?

Query 5) Is the King mobile, well protected, and not in check?

Query 6) Is the center of the board occupied?

Query 7) Are any major pieces blocked?

Query 8) Are there passed pawns near promotion?

Query 9) Are bishops occupying major diagonals?

Query 10) What is the material difference between players?

After these 10 questions have been answered, the chess evaluator can score a position, and feed this score into the chess tree to optimize the \(\alpha-\beta\) pruning that follows.

**Algebraic Chess Notation**

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

![](/wp-content/uploads/2014/03/algnotation.png)

Coordinates in Algebraic Chess Notation

Readers are encouraged to explore additional background information provided by the online book [_Building Skills in Python_](http://www.itmaybeahack.com/book/python-2.6/html/p05/p05c06_chess.html).

**SOURCES**

1. H. Nasreddine and H. S. Poh, “Using an evolutionary algorithm for the tuning of a chess evaluation function based on a dynamic boundary strategy”, 2005. [http://www.cs.nott.ac.uk/~gxk/papers/ieeecis2006.pdf](http://www.cs.nott.ac.uk/~gxk/papers/ieeecis2006.pdf).
2. J. S. T. Anthony Marsland, Feng-hsiung Hsu and D. E. Wilkins, “The role of chess in artificial intelligence research”, [http://ijcai.org/Past%20Proceedings/IJCAI-91-VOL1/PDF/084.pdf](http://ijcai.org/Past%20Proceedings/IJCAI-91-VOL1/PDF/084.pdf)
3. M. Strejczek, “Some aspects of chess programming”, [http://www.top-5000.nl/ps/SomeAspectsOfChessProgramming.pdf](http://www.top-5000.nl/ps/SomeAspectsOfChessProgramming.pdf).
4. Wikipedia, “Ply(game theory)”, [http://en.wikipedia.org/wiki/Ply_%28game_theory%29](http://en.wikipedia.org/wiki/Ply_%28game_theory%29).
5. T. Romstad, M. Costalba, J. Kiiski, D. Yang, S. Spitaleri, and J. Albett, “Stockfish about,” [http://stockfishchess.org/about/](http://stockfishchess.org/about/).
6. O. David-Tabibi, M. Koppel, and N. S. Netanyahu, “Optimizing selective search in chess”, [http://www-kd.iai.uni-bonn.de/icml2010mlg/papers/DavidTabibiEtAl.pdf](http://www-kd.iai.uni-bonn.de/icml2010mlg/papers/DavidTabibiEtAl.pdf).
7. T. Anantharaman, M. S. Campbell, and F. hsiung Hsu, “Singular extensions: Adding selectivity to brute-force searching”, Artificial Intelligence , pp. 99–109, 1990.
8. I. Chernev, Logical Chess, Move By Move - Only Chess Book That Explains Every Move Of Every Game, 1957.
9. D. Levy and M. Newborn, How Computers Play Chess,, Computer Science Press, New York, 1990.
10. C. Frayn, “Computer chess programming theory”, 2005. [http://www.frayn.net/beowulf/theory.html](http://www.frayn.net/beowulf/theory.html).
