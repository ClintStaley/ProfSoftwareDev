#Build System Princples

##The Issues

### Many sources
  * How many files in 200 lines average for 1,000,000 line code base?
	  * All in one directory?
	  * Compile all every time a change is made?

### Many targets
  * Different target architectures
  * Test vs application main
  * Different versions actively maintained
  * Many "object" files

### Many dependencies
  * Not just standard libraries for the language