// defining a class
class youtubeVideo {

    public title: string;
    public channel: string;
    //considering epoch
    public publishedDate: number;
    //considering in miliseconds
    public length: number;
    private likes: number;
    public comments: number;
    public liked: boolean;
    private adultRestriction: boolean;
    public views: number;
    public dislikes: number;



    constructor(title: string, channel: string, publishedDate: number, length: number, likes: number, comments: number, liked: boolean, adultRestriction: boolean, views: number, dislikes: number) {
        this.title = title;
        this.channel = channel;
        this.publishedDate = publishedDate;
        this.length = length;
        this.liked = liked;
        this.comments = comments;
        this.likes = likes;
        this.adultRestriction = adultRestriction;
        this.views = views;
        this.dislikes = dislikes;
    }// end constructor

    //getters
    getLikes = () => {
        return this.likes;
    }
    checkIfLiked = () => {
        return this.liked;
    }
    //setter
    setLikes = (like: number) => {
        return this.likes = like
    }
    toggleLiked = () => {
        if (this.liked == true) {
            return this.liked = false
        }
        else if (this.liked == false) {
            return this.liked = true
        }
    }
}// end class 


let comedy = new youtubeVideo("funny", "myChannel", 1523074955, 252000, 34, 5, false, false, 34, 0)

//get likes
let likesOnVideo = comedy.getLikes()
console.log("Likes on video", likesOnVideo)

//get liked
let liked = comedy.checkIfLiked()
console.log("Liked", liked)

//set likes
let newLikes = comedy.setLikes(55)
console.log("New Likes on video", newLikes)

//set liked
let toggleLiked = comedy.toggleLiked()
console.log("toggle liked", toggleLiked)