
//Step 2: Call stack and parameters

const watchFirstEpisode = function() {
    // draw call stack
    console.log('Watch first episode');
  };
  
  const watchBreakingBad = function() {
    console.log('Watching Breaking bad');
    // draw call stack
    watchFirstEpisode();
    console.log('No more for today');
  };
  
  const goForARun = function() {
    console.log('Im running! look at me!');
  }
  
  const helpStudentsWithHomework = function() {
    console.log('Help help help');
  }
  
  function finishMondayEvening(functionThatIsParameter) {
    functionThatIsParameter();
    // draw call stack
    goForARun();
    // draw call stack
    helpStudentsWithHomework();
    // draw call stack
    console.log('done for today')
  }
  
  // draw call stack
  finishMondayEvening(watchBreakingBad);
  // draw call stack

/*

 1)  finishMondayEvening(watchBreakingBad) will be  in STACK-----LINE 24


 2)  watchBreakingBad()  will be  in STACK ----------------LINE 9


 ...... it will execute console.log('Watching Breaking bad');...  LINE 10


 3)  watchFirstEpisode() will be  in STACK   ------------------LINE 4

 ......... console.log('Watch first episode').....will be executed ....... LINE 6

  AFTER EXECUTING LINE 6 --->watchFirstEpisode() function will be removed in Stack------- LINE 4

  THEN     console.log('No more for today'); will be executed ----LINE 13

  THEN   watchBreakingBad(),,after executing LINE13 --function will be removed  IN STACK ,----------LINE 9



  4)  goForARun() will be in STACK  ------LINE 16

  console.log('Im running! look at me!'); (LINE 17) will be executed
   after executing LINE 17.........goForARun()---(LINE 16) will be removed in STACK

   5) helpStudentsWithHomework()  function (LINE 29) will be in STACK

   then     console.log('done for today') will be executed then 

    helpStudentsWithHomework()  function (LINE 29) will be removed in STACK

    6)      console.log('done for today') will be executed 

    then after executing -(LINE 31)


  finishMondayEvening(watchBreakingBad); .....(LINE 24) will be removed in STACK.....





     







*/    
