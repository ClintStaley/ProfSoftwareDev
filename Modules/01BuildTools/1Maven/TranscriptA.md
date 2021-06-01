#Maven

##Big picture
  * Nominally language-neutral, though a creature of the Java world
  * Covers targets/sources/dependencies, and more.
  * Includes standard organization systems for build artifacts.

## Exercise/illustration

### Preliminaries
  * mvn --version
  * pick a directory to create sample app

### Maven setup
  * do mvn archetype:generate
     * Search for quickstart
     * fill in other values from below
  * do mvn archetype:generate -DgroupId=edu.principia.<yourid> -DartifactId=App -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false
  * try an alternate archetype, searching for antlr
     * Explore resultant files and run maven antlr4:antlr4
  * Kill second app leaving just first
  * Explore source tree using VSCode
  * Clear .m2/repository

### Maven project operations
  * mvn compile
  * Check repository contents
  * Note relationship between junit and hamcrest-core
  * mvn dependency:tree
  * Alter code to use JDK 11 and commons-collections4
  * recompile; see need to fix pom
  * add commons-collections dependency and JDK 11


