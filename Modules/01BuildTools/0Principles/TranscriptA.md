#Build System Principles

##The Issues

### Many sources
  * How many files of 200 lines average for 1,000,000 line code base?
	  * All in one directory?
	  * Compile all every time a change is made?
  * Keeping track of different source files requires organization
  * Packages and/or namespaces

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
  * Need tools to find, manage, update dependencies (npm, Maven, pip)

### Release process
  * development != release
  * Testing vs production code
	  * Build without scaffold
	  * Build with different logging config
  * Optimization differences
	  * For compiled code
		  * build speed vs run speed
	  * For interpreted code like JS
		  * minification
		  * dead code removal
		  * incremental/async code loading
  * Security differences
	  * Obfuscation
	  * Build with canary values
  * Platform differences
	  * JS versions: babel, shims
	  * Different browser behaviors
	  * Hardware differences: compile with different ifdefs
	  * Installation/configuration

## The Solutions

### Make
  * Language generic
  * Old school
	  * controls the compiling of multiple sources to different targets.
	  * Allows scripts to control release process
  * Still in use; well worth learning

### NPM
  * For use with JS
  * Covers Dependency management, though not compilation since this is moot under JS

### PIP
  * "NPM for Python"
  
### Maven
  * Nominally language-neutral, though a creature of the Java dev world
  * Covers all targets/sources/dependencies, and more.
  * Includes standard organization systems for build artifacts.

### Webpack
  * Focused on browser-delivered apps
  * Minification
  * Buundling with incremental loading
  * Also browserify



