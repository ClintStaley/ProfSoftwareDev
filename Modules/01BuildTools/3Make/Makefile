# General test makefile for multi-target test
# Copyright Clinton Staley 12/1/01


# General definitions
#CPP = clang++
CPP = g++
CPPFLAGS = -std=c++11 -g -O3 -DLITTLE_ENDIAN
LINKFLAGS = -static-libstdc++

MANCALAOBJS = MancalaBoard.o MancalaMove.o MancalaView.o MancalaDlg.o
OTHELLOOBJS = OthelloBoard.o OthelloMove.o OthelloView.o OthelloDlg.o
PYLOSOBJS = PylosBoard.o PylosMove.o PylosView.o PylosDlg.o
CHECKERSOBJS = CheckersBoard.o CheckersMove.o CheckersView.o CheckersDlg.o
C4POP10OBJS = C4Pop10Board.o C4Pop10Move.o C4Pop10View.o C4Pop10Dlg.o
GAMEOBJS = Board.o Dialog.o Class.o $(OTHELLOOBJS) $(CHECKERSOBJS) $(PYLOSOBJS) $(C4POP10OBJS)
BOARDTESTOBJS = BoardTest.o $(GAMEOBJS)
MINIMAXOBJS = MinimaxApp.o Steppable.o AIPlayer.o GameModel.o GameView.o HumanPlayer.o Book.o $(GAMEOBJS)

MinimaxApp : $(MINIMAXOBJS)
	$(CPP) $(LINKFLAGS) $(MINIMAXOBJS) -o MinimaxApp


# Example .o/.cpp dependency
MancalaBoard.o: MancalaBoard.cpp
	$(CPP) $(CPPFLAGS) -c MancalaBoard.cpp -o MancalaBoard.o

# Generalized dependency if all compiles need same flags.
%.o: %.cpp
	$(CPP) $(CPPFLAGS) -c $< -o $@

# Other target executable.  Use make <target> to choose which one make builds
BoardTest : $(BOARDTESTOBJS)
	$(CPP) $(LINKFLAGS) $(BOARDTESTOBJS) -o BoardTest

# Examples of script-style release target
BTRelease: BoardTest
	chmod 755 BoardTest
	mv BoardTest BoardTest.o ../../milestone1
        touch BTRelease

MMARelease: MinimaxApp
        chmod 755 MinimaxApp
	cp MinimaxApp ../../prj3
        touch MMARelease

# Example of utility target
clean:
	rm BoardTest MinimaxApp *.o

# Cpp/H file dependencies
MancalaBoard.cpp: Class.h Board.h
	touch MancalaBoard.cpp
MancalaMove.cpp: MancalaBoard.h Class.h Board.h
	touch MancalaMove.cpp
MancalaView.cpp: MancalaBoard.h View.h Class.h Board.h
	touch MancalaView.cpp
MancalaDlg.cpp: MancalaBoard.h Dialog.h Class.h
	touch MancalaDlg.cpp

OthelloBoard.cpp: Class.h Board.h
	touch OthelloBoard.cpp
OthelloMove.cpp: OthelloBoard.h Class.h Board.h
	touch OthelloMove.cpp
OthelloView.cpp: OthelloBoard.h View.h Class.h Board.h
	touch OthelloView.cpp
OthelloDlg.cpp: OthelloBoard.h Dialog.h Class.h
	touch OthelloDlg.cpp

PylosBoard.cpp: Class.h Board.h
	touch PylosBoard.cpp
PylosMove.cpp: PylosView.h PylosBoard.h  Board.h
	touch PylosMove.cpp
PylosView.cpp: PylosBoard.h View.h Class.h  Board.h
	touch PylosView.cpp
PylosDlg.cpp: PylosBoard.h Dialog.h Class.h 
	touch PylosDlg.cpp

CheckersBoard.cpp: Class.h Board.h
	touch CheckersBoard.cpp
CheckersMove.cpp: CheckersView.h CheckersBoard.h  Board.h
	touch CheckersMove.cpp
CheckersView.cpp: CheckersBoard.h View.h Class.h  Board.h
	touch CheckersView.cpp
CheckersDlg.cpp: CheckersBoard.h Dialog.h Class.h 
	touch CheckersDlg.cpp

BoardTest.cpp: Board.h View.h Dialog.h

# Generalized header file dependency
%.cpp: %.h
	touch $@

# Dependencies of header files on one another.
CheckersDlg.h OthelloDlg.h MancalaDlg.h PylosDlg.h: Dialog.h
	touch MancalaDlg.h PylosDlg.h CheckersDlg.h OthelloDlg.h

MancalaView.h PylosView.h OthelloView.h CheckersView.h : View.h
	touch MancalaView.h PylosView.h OthelloView.h CheckersView.h


# DO NOT DELETE
