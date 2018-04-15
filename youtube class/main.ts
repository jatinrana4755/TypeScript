//defining a class

class YoutubeVideo{

//fields and properties


//a constructor which is used to initialize a class fields and properties.

constructor(public title:string,public views:number,public subscribers:number,public likes:number,public dislikes:number,public channelName:string,public comments:number,public typeOfVideo:string,public publishedDate:string  ,private License:string,public usersComments:object[], private actorName?:string, private actressName?:string , private movieName?:string ,public link?:string ){

    this.title=title;
    this.views=views;
    this.subscribers=subscribers;
    this.likes=likes;
    this.dislikes=dislikes;
    this.channelName=channelName;
    this.comments=comments;
    this.typeOfVideo=typeOfVideo;
    this.publishedDate=publishedDate;
    this.License=License;
    this.usersComments=usersComments;
    this.actorName=actorName;
    this.actressName=actressName;
    this.movieName=movieName;
    
    }//end of constructor.




// Methods 

    //method for getting a title of video.

    getTitle=()=>{     
        return this.title;
    }
    //method for getting a views of video.
    getViews=()=>{ 
        return this.views;
    }
    //method for getting a subscribers of video.
    getSubcscribers=()=>{
        return this.subscribers;
    } 
    //method for getting a Likes of video.
    getLikes=()=>{

        return this.likes;
    }
    //method for getting a Dislikes of video.
    getDislikes=()=>{
        return this.dislikes;
    } 
    //method for getting a Channel Name of video.
    getChannelName=()=>{
        return this.channelName;
    }
    //method for getting a Comments of video.
    getComments=()=>{
        return this.comments;
    }
    //method for getting a Users comments  of video.
    getCommentsOfUsers=()=>{
         
        return this.usersComments;
    }

    //gettter method  to get value
    getActorName=()=>{
        return this.actorName;
    }
    //gettter method  to get value
    
    getActressName=()=>{
        return this.actressName;
    }
    //gettter method  to get value
    
    getMovieName=()=>{
        return this.movieName;
    }
    getTypeOfVideo=()=>{
        return this.typeOfVideo;
    }
    getPublishedDate=()=>{
        return this.publishedDate;
    }
    isAutoplay=():boolean=>{
        return true;
    }
    getLicense=()=>{
        return this.License;
    }
    getLink=()=>{
        return this.link;
    }


 
    //Implementation will be added later on.
     
      getUpNextVideo=()=>{
        console.log("Next Video: This method will recommend related videos or next videos");

    }
    addToPlaylist=()=>{
        console.log("Add to Playlist: Add the videos to the playlist");
        
    }

    
}//end of class.
    
    

//INSTANCE OF YoutubeVideo Class.
let romanticVideo= new YoutubeVideo("Soniye Dil Nayi",98728878,50000,68699,7000,"Tseries",110,"BOLLYWOOD","3 Mar 2018","Standard YouTube Licence",[{"name":"Durga",
"comments":"nice video"},{"name":"Mukesh","comment":"wow nice voice"}],"Tiger Shroff","Disha patani","Baaghi2","https://www.youtube.com/watch?v=YuXLN23ZGQo");

//INSTANCE OF YoutubeVideo Class.
let actionVideo=new YoutubeVideo("Dil Diyan gallan",95999979,50000,68699,7000,"juke Dock",110,"BOLLYWOOD","1 jan 2018","Standard YouTube Licence",[{"name":"kiran","comment":"wow what a video"},{"name":"jatin","comment":"ek no."}],"Salman khan","Katrina Kaif","Tiger zinda hai","https://geetmp3.lnk.to/tiger");

//INSTANCE OF YoutubeVideo Class.
let funnyVideo=new YoutubeVideo("Top Funny a Girl Compilation",1000,50000,188,7000,"Vines best fun",134,"BOLLYWOOD","30,nov 2017","Standard YouTube Licence",[{"name":"wow","comment":"nice"},{"name":"nidhi","comment":"brilliant"}]);

//INSTANCE OF YoutubeVideo Class.
let  sportsVideo=new YoutubeVideo("Humans Are Amazing Sports",1000,31000,188,7000,"The Highlight factory",134,"Sports","28 Feb 2016","Standard YouTube Licence",[{"name":"nice","comment":"chaa gaye paaji"}]);

//Accessing the members of class. 
let title= romanticVideo.getTitle();
let views = romanticVideo.getViews();
let subscribers = romanticVideo.getSubcscribers();
let likes = romanticVideo.getLikes();
let dislikes = romanticVideo.getDislikes();
let channel =romanticVideo.getChannelName();
let comments =romanticVideo.getComments();
let actor = romanticVideo.getActorName();
let actress = romanticVideo.getActressName();
let movie = romanticVideo.getMovieName();
let videoType=romanticVideo.getTypeOfVideo();
let publishedDate=romanticVideo.getPublishedDate();
let link=romanticVideo.getLink();


  
  //Printing the output of romanticVideo object on the console.

console.log("videoTitle: " + title);
console.log("views: " + views);
console.log("subscribers: " + subscribers);
console.log("dislikes: " + dislikes);
console.log("channel Name: " + channel);
console.log("comments: " + comments);
console.log("Actor Name: " + actor);
console.log("Actress Name: " + actress);
console.log("Movie Name: " + movie);
console.log("Type: " +videoType)
console.log("Published Date: " +publishedDate)
console.log("AutoPlay Option: " +romanticVideo.isAutoplay());
console.log("License: " + romanticVideo.getLicense());
console.log("Users Comments: ", romanticVideo.getCommentsOfUsers());
console.log("Link: " + romanticVideo.getLink());



romanticVideo.addToPlaylist();
romanticVideo.getUpNextVideo();

 //printing the output of actionVideo object in console.

console.log("videoTitle: " + actionVideo.getTitle());
console.log("views: "+ actionVideo.getViews());
console.log("subscribers: " + actionVideo.getSubcscribers());
console.log("dislikes: " + actionVideo.getLikes());
console.log("channel Name: " + actionVideo.getDislikes());
console.log("comments: " + actionVideo.getChannelName());
console.log("Actor Name: " + actionVideo.getActorName());
console.log("Actress Name: " + actionVideo.getActressName());
console.log("Movie Name: " + actionVideo.getMovieName());
console.log("Type: " + actionVideo.getTypeOfVideo());
console.log("Published Date: " + actionVideo.getPublishedDate());
console.log("AutoPlay Option: " +actionVideo.isAutoplay());
console.log("License: " + actionVideo.getLicense());
console.log("Users Comments: ", actionVideo.getCommentsOfUsers());
console.log("Link: " + actionVideo.getLink());



actionVideo.addToPlaylist();
actionVideo.getUpNextVideo();

  //printing the output of funnyVideo object in console.

console.log("videoTitle: " + funnyVideo.getTitle());
console.log("views: "+ funnyVideo.getViews());
console.log("subscribers: " + funnyVideo.getSubcscribers());
console.log("dislikes: " + funnyVideo.getLikes());
console.log("channel Name: " + funnyVideo.getDislikes());
console.log("comments: " + funnyVideo.getChannelName());
console.log("Actor Name: " + funnyVideo.getActorName());
console.log("Actress Name: " + funnyVideo.getActressName());
console.log("Movie Name: " + funnyVideo.getMovieName());
console.log("Type: " + funnyVideo.getTypeOfVideo());
console.log("Published Date: " + funnyVideo.getPublishedDate());
console.log("AutoPlay Option: " +funnyVideo.isAutoplay());
console.log("License: " + funnyVideo.getLicense());
console.log("Users Comments: ", funnyVideo.getCommentsOfUsers());


funnyVideo.addToPlaylist();
funnyVideo.getUpNextVideo();

//printing the output of sportsVideo object in console.

console.log("videoTitle: " + sportsVideo.getTitle());
console.log("views: "+ sportsVideo.getViews());
console.log("subscribers: " + sportsVideo.getSubcscribers());
console.log("dislikes: " + sportsVideo.getLikes());
console.log("channel Name: " + sportsVideo.getDislikes());
console.log("comments: " + sportsVideo.getChannelName());
console.log("Actor Name: " + sportsVideo.getActorName());
console.log("Actress Name: " + sportsVideo.getActressName());
console.log("Movie Name: " + sportsVideo.getMovieName());
console.log("Type: " + sportsVideo.getTypeOfVideo());
console.log("Published Date: " + sportsVideo.getPublishedDate());
console.log("AutoPlay Option: " +sportsVideo.isAutoplay());
console.log("License: " + sportsVideo.getLicense());
console.log("Users Comments: ", sportsVideo.getCommentsOfUsers());


sportsVideo.addToPlaylist();
sportsVideo.getUpNextVideo();

