//defining a class

class ProfileInformation{

    // constructor
    constructor(public work:string,public college:string,public school:string,public currentCity?:string,public hometown?:string,private address?:string,public neighbourhood?:string,private email?:string,public websites?:string,public socialLinks?:string,public birthDate?:string,public gender?:string,public religiousNews?:string,private relationShip?:string,private familyMembers?:string[],public about?:string,public favoriteQuotes?:string,public lifeEvents?:object[],public age?:number,private mobileNumber?:number,private interestedIn?:string){
    this.work=work;
    this.college=college;
    this.school=school;
    this.currentCity=currentCity;
    this.hometown=hometown;
    this.address=address;
    this.neighbourhood=neighbourhood;
    this.email=email;
    this.websites=websites;
    this.socialLinks=socialLinks;
    this.birthDate=birthDate;
    this.gender=gender;
    this.religiousNews=religiousNews;
    this.relationShip=relationShip;
    this.familyMembers=familyMembers;
    this.about=about;
    this.favoriteQuotes=favoriteQuotes;
    this.lifeEvents=lifeEvents;
    this.age=age;
    this.mobileNumber=mobileNumber;
    this.interestedIn=interestedIn;

    }//end of constructor.


    //Methods to get work value.
    getWorkValue=()=>{
        return this.work;
    }
    //Methods to get College Name.
    
    getCollege=()=>{
        return this.college;
    }
    //Methods to get School Name.
    
    getSchool=()=>{
        return this.school;
    }
    //Methods to get city Name.
    
    getCurrentCity=()=>{
        return this.currentCity;

    }
    //Methods to get HomeTown.
    
    getHomeTown=()=>{
        return this.hometown;
    }
    //Methods to get Address.
    
    getAddress=()=>{
        return this.address;
    }
    //Methods to get Neighbourhood.
    
    getNeighbourHood=()=>{
        return this.neighbourhood;
    }
    //Methods to get Email.
    
    getEmail=()=>{
        return this.email;
    }
    //Methods to get website .
    
    getWebsites=()=>{
        return this.websites;
    }
    //Methods to get Social Links.
    
    getSocialLinks=()=>{
        return this.socialLinks;
    }
    //Methods to get Date of Birth.
    
    getBirthDate=()=>{
        return this.birthDate;
    }
    //Methods to get gender.
    
    getGender=()=>{
        return this.gender;
    }
    //Methods to get Religious News.
    
    getReligiousNews=()=>{
        return this.religiousNews;
    }
    //Methods to get Relationship.
    
    getRelationShip=()=>{
        return this.relationShip;
    }
    //Methods to get Family Members.
    
    getFamilyMembers=()=>{
        return this.familyMembers;
    }
    //Methods to get About.
    
    getAbout=()=>{
        return this.about;
    }
    //Methods to get FavoriteQuotes.
    
    getFavoriteQuotes=()=>{
    return this.favoriteQuotes;
    }
    //Methods to get Life Events.
    
    getLifeEvents=()=>{
        return this.lifeEvents;
    }
    //Methods to get Age.
    
    getAge=()=>{
        return this.age;
    }
    getMobileNumber=()=>{
        return this.mobileNumber;
    }
    getInterestedIn=()=>{
        return this.interestedIn;

    }
    //Implementation will be added later on.
    getProfessionalSkills=()=>{
        console.log("Professional Details: professional skills yet to be added")
    }
    getOtherNames=()=>{
        console.log("Other names: add Other names");
    }
    getBloodDonation=()=>{
        console.log("Blood Donation: add a blood donation details");
    }
    getpublicKey=()=>{
        console.log("Public Key: add a public key");
    }
    getOtherPlaceLived=()=>{
        console.log("Other Place Lived: add a other place lived information");
    }


}//end of class

//Instance of class ProfileInformation.
let jatinRana=new ProfileInformation("Engineer","Dronacharya college of engineering","Navyug school Vinay Marg","New Delhi","Delhi(India)","54 new motibagh New Delh India","nil","jatinvilla07@gmail.com","sefan.ru","jatin rana eBuddy","30 july 1996","Male","General","single",["rey mio","Hemant"],"self motivated","Do mistakes Believe in yourself Learn form your mistakes",[{"year":"2018",
"event":"Graduated from Dronacharya college of engineering"},
{
"year":"2014",
"event":"started college at Dronacharya college of engineering"},
{"year":"2012",
"events":"went to Navyug school,Vinay marg"},
{"year":"1996",
"events":"Born on July 30,1996"}],21,9811532896,"women")

//accessing the method of class.
let work=jatinRana.getWorkValue();//work
let college=jatinRana.getCollege();//college
let school=jatinRana.getSchool();//school
let city=jatinRana.getCurrentCity();//city
let home=jatinRana.getHomeTown();//home
let address=jatinRana.getAddress();//address
let neighbourhood=jatinRana.getNeighbourHood();//neighbourhood
let email=jatinRana.getEmail();//email
let websites=jatinRana.getWebsites();//websites
let socialLinks=jatinRana.getSocialLinks();//sociallinks
let DateOFBirth=jatinRana.getBirthDate();//Dateofbirth
let gender=jatinRana.getGender();//gender
let religious=jatinRana.getReligiousNews();//ReligiousNews
let relationShip=jatinRana.getRelationShip();//relationship
let familyMembers=jatinRana.getFamilyMembers();//familyMembers
let about=jatinRana.getAbout();//about
let favoriteQuotes=jatinRana.getFavoriteQuotes();//favoriteQuotes
let events=jatinRana.getLifeEvents();//events
let age=jatinRana.getAge();//age
let mobileNumber=jatinRana.getMobileNumber();//mobileNumber
let interestedIn=jatinRana.getInterestedIn();//InterestedIn

//show the output.
console.log("Work: " + work);
console.log("College: " +college);
console.log("School: " +school);
console.log("City: " +city);
console.log("Home: " +home);
console.log("Address: " +address);
console.log("Neighbourhood: " +neighbourhood);
console.log("Email: " +email);
console.log("Websites: " +websites);
console.log("SocialLinks: " +socialLinks);
console.log("DateOfBirth: " +DateOFBirth);
console.log("Gender: " +gender);
console.log("Religious: " +religious);
console.log("Relationship: " +relationShip);
console.log("family Members: " +familyMembers);
console.log("About: " +about);
console.log("FavoriteQuotes: " +favoriteQuotes);
console.log("Events: ", events);
console.log("Age: "+age);
jatinRana.getProfessionalSkills();
jatinRana.getOtherNames();
jatinRana.getBloodDonation();
jatinRana.getpublicKey();
jatinRana.getOtherPlaceLived();
console.log("Mobile Number: "+mobileNumber);
console.log("Interested in: "+interestedIn);













