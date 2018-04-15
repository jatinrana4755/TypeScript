//defining a class
var ProfileInformation = /** @class */ (function () {
    // constructor
    function ProfileInformation(work, college, school, currentCity, hometown, address, neighbourhood, email, websites, socialLinks, birthDate, gender, religiousNews, relationShip, familyMembers, about, favoriteQuotes, lifeEvents, age, mobileNumber, interestedIn) {
        var _this = this;
        this.work = work;
        this.college = college;
        this.school = school;
        this.currentCity = currentCity;
        this.hometown = hometown;
        this.address = address;
        this.neighbourhood = neighbourhood;
        this.email = email;
        this.websites = websites;
        this.socialLinks = socialLinks;
        this.birthDate = birthDate;
        this.gender = gender;
        this.religiousNews = religiousNews;
        this.relationShip = relationShip;
        this.familyMembers = familyMembers;
        this.about = about;
        this.favoriteQuotes = favoriteQuotes;
        this.lifeEvents = lifeEvents;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.interestedIn = interestedIn;
        //Methods to get work value.
        this.getWorkValue = function () {
            return _this.work;
        };
        //Methods to get College Name.
        this.getCollege = function () {
            return _this.college;
        };
        //Methods to get School Name.
        this.getSchool = function () {
            return _this.school;
        };
        //Methods to get city Name.
        this.getCurrentCity = function () {
            return _this.currentCity;
        };
        //Methods to get HomeTown.
        this.getHomeTown = function () {
            return _this.hometown;
        };
        //Methods to get Address.
        this.getAddress = function () {
            return _this.address;
        };
        //Methods to get Neighbourhood.
        this.getNeighbourHood = function () {
            return _this.neighbourhood;
        };
        //Methods to get Email.
        this.getEmail = function () {
            return _this.email;
        };
        //Methods to get website .
        this.getWebsites = function () {
            return _this.websites;
        };
        //Methods to get Social Links.
        this.getSocialLinks = function () {
            return _this.socialLinks;
        };
        //Methods to get Date of Birth.
        this.getBirthDate = function () {
            return _this.birthDate;
        };
        //Methods to get gender.
        this.getGender = function () {
            return _this.gender;
        };
        //Methods to get Religious News.
        this.getReligiousNews = function () {
            return _this.religiousNews;
        };
        //Methods to get Relationship.
        this.getRelationShip = function () {
            return _this.relationShip;
        };
        //Methods to get Family Members.
        this.getFamilyMembers = function () {
            return _this.familyMembers;
        };
        //Methods to get About.
        this.getAbout = function () {
            return _this.about;
        };
        //Methods to get FavoriteQuotes.
        this.getFavoriteQuotes = function () {
            return _this.favoriteQuotes;
        };
        //Methods to get Life Events.
        this.getLifeEvents = function () {
            return _this.lifeEvents;
        };
        //Methods to get Age.
        this.getAge = function () {
            return _this.age;
        };
        this.getMobileNumber = function () {
            return _this.mobileNumber;
        };
        this.getInterestedIn = function () {
            return _this.interestedIn;
        };
        //Implementation will be added later on.
        this.getProfessionalSkills = function () {
            console.log("Professional Details: professional skills yet to be added");
        };
        this.getOtherNames = function () {
            console.log("Other names: add Other names");
        };
        this.getBloodDonation = function () {
            console.log("Blood Donation: add a blood donation details");
        };
        this.getpublicKey = function () {
            console.log("Public Key: add a public key");
        };
        this.getOtherPlaceLived = function () {
            console.log("Other Place Lived: add a other place lived information");
        };
        this.work = work;
        this.college = college;
        this.school = school;
        this.currentCity = currentCity;
        this.hometown = hometown;
        this.address = address;
        this.neighbourhood = neighbourhood;
        this.email = email;
        this.websites = websites;
        this.socialLinks = socialLinks;
        this.birthDate = birthDate;
        this.gender = gender;
        this.religiousNews = religiousNews;
        this.relationShip = relationShip;
        this.familyMembers = familyMembers;
        this.about = about;
        this.favoriteQuotes = favoriteQuotes;
        this.lifeEvents = lifeEvents;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.interestedIn = interestedIn;
    } //end of constructor.
    return ProfileInformation;
}()); //end of class
//Instance of class ProfileInformation.
var jatinRana = new ProfileInformation("Engineer", "Dronacharya college of engineering", "Navyug school Vinay Marg", "New Delhi", "Delhi(India)", "54 new motibagh New Delh India", "nil", "jatinvilla07@gmail.com", "sefan.ru", "jatin rana eBuddy", "30 july 1996", "Male", "General", "single", ["rey mio", "Hemant"], "self motivated", "Do mistakes Believe in yourself Learn form your mistakes", [{ "year": "2018",
        "event": "Graduated from Dronacharya college of engineering" },
    {
        "year": "2014",
        "event": "started college at Dronacharya college of engineering"
    },
    { "year": "2012",
        "events": "went to Navyug school,Vinay marg" },
    { "year": "1996",
        "events": "Born on July 30,1996" }], 21, 9811532896, "women");
//accessing the method of class.
var work = jatinRana.getWorkValue(); //work
var college = jatinRana.getCollege(); //college
var school = jatinRana.getSchool(); //school
var city = jatinRana.getCurrentCity(); //city
var home = jatinRana.getHomeTown(); //home
var address = jatinRana.getAddress(); //address
var neighbourhood = jatinRana.getNeighbourHood(); //neighbourhood
var email = jatinRana.getEmail(); //email
var websites = jatinRana.getWebsites(); //websites
var socialLinks = jatinRana.getSocialLinks(); //sociallinks
var DateOFBirth = jatinRana.getBirthDate(); //Dateofbirth
var gender = jatinRana.getGender(); //gender
var religious = jatinRana.getReligiousNews(); //ReligiousNews
var relationShip = jatinRana.getRelationShip(); //relationship
var familyMembers = jatinRana.getFamilyMembers(); //familyMembers
var about = jatinRana.getAbout(); //about
var favoriteQuotes = jatinRana.getFavoriteQuotes(); //favoriteQuotes
var events = jatinRana.getLifeEvents(); //events
var age = jatinRana.getAge(); //age
var mobileNumber = jatinRana.getMobileNumber(); //mobileNumber
var interestedIn = jatinRana.getInterestedIn(); //InterestedIn
//show the output.
console.log("Work: " + work);
console.log("College: " + college);
console.log("School: " + school);
console.log("City: " + city);
console.log("Home: " + home);
console.log("Address: " + address);
console.log("Neighbourhood: " + neighbourhood);
console.log("Email: " + email);
console.log("Websites: " + websites);
console.log("SocialLinks: " + socialLinks);
console.log("DateOfBirth: " + DateOFBirth);
console.log("Gender: " + gender);
console.log("Religious: " + religious);
console.log("Relationship: " + relationShip);
console.log("family Members: " + familyMembers);
console.log("About: " + about);
console.log("FavoriteQuotes: " + favoriteQuotes);
console.log("Events: ", events);
console.log("Age: " + age);
jatinRana.getProfessionalSkills();
jatinRana.getOtherNames();
jatinRana.getBloodDonation();
jatinRana.getpublicKey();
jatinRana.getOtherPlaceLived();
console.log("Mobile Number: " + mobileNumber);
console.log("Interested in: " + interestedIn);
