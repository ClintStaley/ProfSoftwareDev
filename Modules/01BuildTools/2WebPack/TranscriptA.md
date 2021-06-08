#Webpack

##Big picture
  * How to do require/import on client side?
    * Translating local file names to URLs?  Loading each one?
    * CommonJS (require/module.exports) vs ESModules (import/export)
    * Can do this, but better to **bundle** the entire web app
    * Other issues: minification, loading only source that is needed, etc.

## Example bundler (Minipack)

  * Walk through simple app example
  * Look briefly at bundled result
  * Overview of minipack.js
  * createAsset
	 * Transpiler concept
       * Run each file through https://babeljs.io/ to see what we get
	   * Strategic console.logs to see what AST is up to
       * Look closely at return value to see what it does
     * createGraph
       * Strategic dump of return values in createGraph
     * bundle
       * create array from graph
       * create self-calling function
  * Examine bundled result again

## Webpack Example
   * webpack.config.js
   * Index.html
   * Run build
      * Play with css file




