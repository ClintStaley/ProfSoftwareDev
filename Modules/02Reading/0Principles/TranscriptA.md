# Reading Code

## Overview
 1. Your first job will involve much more code reading than code writing.  Find/fix a bug, make a 10-line feature improvement in a 10,000 line module, etc.

 1. Code reading is a different skill from code writing, with its own goals and methods.

 1. An exercise in code-file rewriting demonstrates that perhaps 90% of the value in a source file is the full comprehension of it by its current maintainers.  You are redeveloping that full comprehension.

## Methods
 1. Understand incrementally.  It took days to write; it's OK for you not to understand it all instantly.

 1. Pick a reasonable balance between exploring the code top-down (starting with a high level or main function and drilling down) and bottom-up (examining line-by-line the code for leaf functions first, and moving up the call tree).  The former generally gets you big-picture feel, and an overall impression, but the latter is needed to truly understand how the code works.

 1. Ask questions of experienced people where necessary, but be as self-sufficient as you can without wasting time.  Group your questions when possible.

 1. Create a sandbox code branch, and *tinker* with the code, changing small bits here and there to see what effect it has.  Tinkering is fine as long as you are sure not to commit your experiments to the master branch.
   1. This can confirm your understanding of the code, and give you confidence.
   1. It can also uncover misunderstandings you have of the code, and make you rethink.
   1. It may be useful to deliberately (temporarily) introduce bugs to confirm your understanding.

 1. Don't settle for an impressionistic overview.  You should be able to confidently say what will happen with small changes to the code, and why each value/variable/assignment/if-statement is needed.  After all, that's the level of understanding the original author had, and is needed to debug/improve the code.
   1. Place debug outputs (e.g. console.log or printf) at strategic points and see if you can correctly predict their output.
   1. Pay special attention to core data structures that are at the heart of classes/modules.  The meaning of each member datum, for instance, should be clearly documented.  (If it's not, as will sadly be true in cases, then add documentation yourself.)
   1. Pay attention to fine issues like off-by-one rules, e.g "Is pIdx the index of the next element to be processed, or the last element that was processed?")
   1. Read comments, but be skeptical, too.  Comments can be poorly written, or out of date.

 1. Ask "why" questions; don't settle for "what" answers.
   1. Remembering every detail of what code does is hard, and boring. ("Is that variable preincremented or postincremented?  Where was that member datum updated, again?")
   1. Understanding *why* something was done is more interesting, and one good "why" often subsumes a great many "what"s.  ("Oh, they made the getDerivedStateFromProps method static to accommodate async renders, and *that's* why all the other methods it calls are also static.")
   1. Understanding *why* informs future modifications and bug fixes.  ("The whole state-update thing has to be static, relying only on parameters and not member data like props")

 1. Clarify the code where useful.
   1. This includes adding brief comments, adjusting variable names for clarity, and simple reorganizations that make the intent clearer.
   1. Doing so will reinforce your understanding, and adds value.
   1. Your perspective as a "newbie" to the code makes you especially aware of where the code could be clearer.

