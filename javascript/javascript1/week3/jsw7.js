
// Neverwhere by Neil Gaiman
// Their Eyes Were Watching God by Zora Neale Hurstan
// I am America by Stephen Colbert
// The Grapes Of Wrath by John Steinbeck
// A Thousand Splendid Suns by Khaled Hosseini
// A Clockwork Orange by Anthony Burgess
// The Silence of the Lambs by Thomas Harris
// I have No Mouth and I Must Scream by Harlan Ellison
// One Hundred Years of Solitude by Gabriel Garcia
// Me Talk Pretty One Day by David Sedaris



let BookTitle=["neverwhere","their_eyes_were_watching_god","i_am_america",
"the_grapes_of_wrath","a_thousand_splendid_suns","the_silence_of_the_lambs",
"a_clockwork_orange","i_have_no_mouth_and_i_must_scream","one_hundred_years_of_solitude","me_talk_pretty_one_day"];


 let Books=[{Title:BookTitle[0],Author:"Neil Gaiman",language:"english",url:"https://images.gr-assets.com/books/1348747943l/14497.jpg"},
              {Title:BookTitle[1],Author:"Zora Neale",language:"english",url:"https://images.gr-assets.com/books/1368072803l/37415.jpg"},       
              {Title:BookTitle[2],Author:"Stephen Colbert",language:"english",url:"https://images.gr-assets.com/books/1435873807l/611298.jpg"},
              {Title:BookTitle[3],Author:"John Steinbeck",language:"english",url:"https://images.gr-assets.com/books/1511302892l/4395.jpg"},
              {Title:BookTitle[4],Author:"Khaled Hosseini",language:"english",url:"https://images.gr-assets.com/books/1345958969l/128029.jpg"},
              {Title:BookTitle[5],Author:"Thomas Harris",language:"english",url:"https://images.gr-assets.com/books/1390426249l/23807.jpg"},
              {Title:BookTitle[6],Author:"Anthony Burgess",language:"english",url:"https://images.gr-assets.com/books/1348339306l/227463.jpg"},
              {Title:BookTitle[7],Author:"Harlan Ellison",language:"english",url:"https://images.gr-assets.com/books/1423672898l/415459.jpg"},
              {Title:BookTitle[8],Author:"Gabriel Garcia",language:"spanish",url:"https://images.gr-assets.com/books/1327881361l/320.jpg"},
              {Title:BookTitle[9],Author:"David Sedaris",language:"english",url:"https://images.gr-assets.com/books/1431013639l/4137.jpg"}
]
function MAKENEW(){

    let MakeOl=document.createElement('ol');
    document.body.appendChild(MakeOl);
    let makeIMG;

for (let i = 0; i < BookTitle.length; i++) {
    // console.log(BookTitle[i]);
     
    
let MakeLi=document.createElement('li');
    MakeOl.appendChild(MakeLi);
    MakeLi.innerHTML="Author : "+Books[i].Author;
    MakeLi.style.color="blue";
    MakeLi.style.border="1px solid";
    MakeOl.style.width="320px";
    MakeOl.style.margin="0 auto";
    MakeLi.style.backgroundColor="rgb(232, 249, 249)";
    



    let makeH2=document.createElement('h3');
    MakeLi.appendChild(makeH2);
    makeH2.innerHTML="Title : "+Books[i].Title;
    


    let makeH4=document.createElement('h4');
    MakeLi.appendChild(makeH4);
    makeH4.innerHTML="Language : "+Books[i].language;


    makeIMG=document.createElement('img');
    MakeLi.appendChild(makeIMG);
    makeIMG.src=Books[i].url;
    makeIMG.width=120;
    makeIMG.height=160;
    makeIMG.style.marginLeft="45px";

           }
}
MAKENEW();


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


// 1)  finishMondayEvening(watchBreakingBad)-----LINE 98

// 2)  watchBreakingBad()----------------LINE  
