/////////////// BOOTCAMP WEEK 4 - DAY 2 ////////////////
///////////////// RECURSION PRACTICE ///////////////////

const podcasts = [
    { // 0
      name: "How Did This Get Made",
      category: "Comedy",
      producer: "Earwolf",
      downloads: 5
    },
    { // 1
      name: "Slowburn",
      category: "News/Documentary",
      producer: "Slate",
      downloads: 10
    },
    { // 2
      name: "Comedy Bang Bang",
      category: "Comedy",
      producer: "Earwolf",
      downloads: 3
    },
    { // 3
      name: "Southlake",
      category: "News/Documentary",
      producer: "NBC News",
      downloads: 8
    },
    { // 4
      name: "The Big Picture",
      category: "TV/Film",
      producer: "Ringer Podcast Network",
      downloads: 15
    }
  ];
  
  /*
  Create a function called getComedies that takes in an array of podcast objects. This function should use recursion to return a new array of only the comedy podcasts.
  */
  function getComedies(podcasts, output = []){
    //base
    if(podcasts.length === 0){
        return output;
    }
    //recursive
    else{
        if(podcasts[0].category === 'Comedy'){
            output.push(podcasts[0])
        }
        return getComedies(podcasts.slice(1), output)
    }

  }

  console.log(getComedies(podcasts))
  
  /*
  Create a function called getPodcastNames that takes in an array of podcast objects. This function should use recursion to return a new array of only the names of the podcasts.
  */
  function getPodcastNames(podcasts, names = []){
    //base
    //if podcasts array is empty return names array
    if(podcasts.length === 0){return names}
    //RECURSIVE
    //push first podcast name to names array
    names.push(podcasts[0].name);
    //recursive call removing the first podcast from array
    return getPodcastNames(podcasts.slice(1), names)
  }
  
  console.log(getPodcastNames(podcasts))
  
  /*
  Create a function called getCategoryBreakdown that takes in an array of podcast objects. This function should use recursion to return an object where each key is a category and the value at the key is number of items it appears.
  */
  function getCategoryBreakdown(podcasts, breakdown = {}){
    //base
    //if podcasts array is empty return breakdown
    if(podcasts.length === 0){
        return breakdown;
    }
    //recursive
    else{
        //take first podcast in list as current podcast and remove it from array
        let currentCast = podcasts[0];

        //if category not already in breakdown add it
        if(! Object.keys(breakdown).includes(currentCast.category)){breakdown[currentCast.category] = 0;}
        
        //increment current category
        breakdown[currentCast.category] += 1;
        
        //recursive call
        return getCategoryBreakdown(podcasts.slice(1), breakdown)
    }
  }

  console.log(getCategoryBreakdown(podcasts))
  
  /*
  Create a function called getPodObj that takes in an array of podcasts. This function should use recursion to return an object where each key is the name of a podcast and the value at each key is the number of downloads.
  */
  
  
  
  
  
  /*
  Create a function called getTenOrMoreDownloads that takes in an array of podcast objects. This function use recursion to the return the NAMES of the podcasts that have ten or more downloads.
  */
  
  
  
  
  
  
  ///////////////////// PROBLEM #1 ///////////////////////
  /*
  Directions: Create a function called getDownloadTotal that takes in an array of podcasts and outputs the total number of downloads.
   */
  
  
  
  ///////////////////// PROBLEM #2 ///////////////////////
  /*
  Directions: Create a function called printPodcastAndProducer that will recursively iterate through podcasts and print the podcast and producer like so "The Big Picture - Ringer Podcast Network".
  /*
  The Big Picture - Ringer Podcast Network
  //  name        -        producer
  */
  
  
  
  
  ///////////////////// PROBLEM #3 ///////////////////////
  /*
  Directions: Create a function called tenPlusDownloads that will recursively iterate through podcasts and print the podcast names plus their download numbers ONLY if the podcast has 10 or more downloads.
  - example: tenPlusDownloads(podcasts) => LOGS
  "Slowburn - 10 downloads"
  "The Big Picture - 15 downloads"
   */
  
  
  
  
  
  // create a function called getPodcast that takes in an array of podcasts and a target podcast name. This function should return the podcast object matching the input name. It should return 'no podcast found' if no name matches.
  function getPodcast(podcasts, targetName){
    //base
    //if first podcast matches the target name return it
    if(podcasts[0].name === targetName){return podcasts[0]}
    //recursive
    else{
      //call removing checked podcast
      return getPodcast(podcasts.slice(1), targetName);
    }
  }
  
  console.log(getPodcast(podcasts, "Comedy Bang Bang"))
  
  ///////////////////// PROBLEM #4 ///////////////////////
  /*
  Directions: Create a function called getPodCategories that recursively iterates through podcasts and returns a new array of only the podcast categories with no duplicates.
  **HINT: How can we use the includes method and a default parameter? 
  **HINT: Consider how to use the array.includes() method to determine if there are duplicates
   */ // ["Comedy", "News/Documentary", "TV/Film"]
  
  function getPodCategories(podcasts, categories = []){
    //base
    //if podcast array is empty, return categories array
    if(podcasts.length === 0){return categories;}
    //recursive
    else{
        //grab last podcast
        let currentCast = podcasts[0];
        //check if category is already in array
        if(! (categories.includes(currentCast.category))){
            //if not, add it
            categories.push(currentCast.category)
        }
        //recursive call
        return getPodCategories(podcasts.slice(1), categories)
    }
  }
  
  console.log(getPodCategories(podcasts))
  
  ///////////////////// PROBLEM #5 ///////////////////////
  /*
  Directions: Create a function called removeStars that will takes in a string with "*" in it. This function should recursively iterate through the string and output a new string with no "*".
  **HINT: Use a default varaible in your solution.
  removeStars('***Alex***') => "Alex"
   */
  function removeStars(string){
    //if string is empty return the memory
    if(string.length === 0){return ""}

    //recursive
    //if the first chararter of the string is a star, dont add to memory
    if(string[0] === '*'){return removeStars(string.slice(1))}
    //otherwise
    else{return string[0] + removeStars(string.slice(1))}
  }
  
  console.log(removeStars("**A**L*E*X**"))
  
  
  
  
  
   
  