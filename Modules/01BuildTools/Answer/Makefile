# Answer for makefile exercise
# Copyright Clinton Staley 6/1/20


# General definitions
#CPP = clang
CPP = gcc
CPPFLAGS = -g -O3
LINKFLAGS = -lm

OBJS = main.o module1.o module2.o

main: $(OBJS)
	$(CPP) $(OBJS) $(LINKFLAGS) -o main

%.o: %.c
	$(CPP) $(CPPFLAGS) -c $< -o $@

# Example of utility target
clean:
	rm main *.o

main.c: module1.h module2.h
	touch main.c

module1.c: module1.h
	touch module1.c

module2.c: module2.h
	touch module2.c

module2.h: module1.h
	touch module2.h

# DO NOT DELETE THIS LINE -- make depend depends on it.

main.o: /usr/include/stdio.h /usr/include/math.h module1.h module2.h
module1.o: module1.h
module2.o: module2.h module1.h
module2.o: module1.h
