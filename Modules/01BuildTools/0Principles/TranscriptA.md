#Build System Principles

##The Issues

### Many sources
  * How many files in 200 lines average for 1,000,000 line code base?
	  * All in one directory?
	  * Compile all every time a change is made?
  * Keeping track of different source files
  * Packaging of namespaces

### Many targets
  * Different target architectures
  * Test vs application main
  * Different versions actively maintained
  * Many "object" files

### Dependencies
  * Not just standard libraries for the language
  * Dependencies have other dependencies
  * Dependencies have versions
  * Dependencies reside in repositories

## The Solutions

### Make
  * Old school, controls just the compiling process for different targets.
  * Still in use.

### NPM
  * For use with JS
  * Covers Dependency management, though not compilation since this is moot under JS

### PIP
  * "NPM for Python"
  
### Maven
  * Nominally language-neutral, though a creature of the Jave dev world
  * Covers all issues, and more.


