fetch('https://services.lingapps.dk/misc/getPredictions?locale=en-GB&text=I%20like%20ca', { 
    method: 'GET', 
    headers: {
      'Authorization': 'Bearer MjAxOS0wNS0yMA==.SGFja1lvdXJGdXR1cmVASGFja1lvdXJGdXR1cmUubmV0.M2JhOGRiYjRlYzQ3OTM5M2Q2NmRiYTAzN2MzM2VjYTI=', 
      'Connection': 'Close',
      'Host':'services.lingapps.dk'
    }
    
  }).then(res=>res.json())
  .then(data=>{
      let userInput="cat"
    const filteredSuggestions = data.filter(
        suggestion =>
          suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
      console.log('predicted words :',filteredSuggestions)

    console.log(data)
  })



