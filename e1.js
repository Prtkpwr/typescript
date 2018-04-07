// defining a class
var youtubeVideo = /** @class */ (function () {
    function youtubeVideo(title, channel, publishedDate, length, likes, comments, liked, adultRestriction, views, dislikes) {
        var _this = this;
        //getters
        this.getLikes = function () {
            return _this.likes;
        };
        this.checkIfLiked = function () {
            return _this.liked;
        };
        //setter
        this.setLikes = function (like) {
            return _this.likes = like;
        };
        this.toggleLiked = function () {
            if (_this.liked == true) {
                return _this.liked = false;
            }
            else if (_this.liked == false) {
                return _this.liked = true;
            }
        };
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
    } // end constructor
    return youtubeVideo;
}()); // end class 
var comedy = new youtubeVideo("funny", "myChannel", 1523074955, 252000, 34, 5, false, false, 34, 0);
//get likes
var likesOnVideo = comedy.getLikes();
console.log("Likes on video", likesOnVideo);
//get liked
var liked = comedy.checkIfLiked();
console.log("Liked", liked);
//set likes
var newLikes = comedy.setLikes(55);
console.log("New Likes on video", newLikes);
//set liked
var toggleLiked = comedy.toggleLiked();
console.log("toggle liked", toggleLiked);
