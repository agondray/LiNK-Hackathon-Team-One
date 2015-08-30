myApp.factory('mainFactory', function (){
    factory = {};
    
    var feed = [
    	{title: "NORTH KOREAN REFUGEE STORIES: MEET BYUNG HOON", date: "August 18 2015", category:"refugee-stories" , link: "http://www.libertyinnorthkorea.org/north-korean-refugee-stories-meet-byung-hoon/", group: "UT Austin", lat: 30.291698, lon: -97.737750},
    	{title: "A REASON TO LIVE: AN INTERVIEW WITH HAE SUN", date: "July 14 2015", category: "resettlement-stories", link: "http://www.libertyinnorthkorea.org/a-reason-to-live-an-interview-with-hae-sun/", group: "UT Austin", lat: 30.291698, lon: -97.737750},
    	{title: "NK NEWS BRIEF | APR 11, 2015", date: "April 11 2015" , category: "nk-news-brief", link: "http://www.libertyinnorthkorea.org/nk-news-brief-apr-11-2015/", group: "UT Austin", lat: 30.291698, lon: -97.737750},
    	{title: "REDDIT AMA WITH JOSEPH KIM", date: "June 26 2015", category: "nk-perspectives", link: "http://www.libertyinnorthkorea.org/reddit-ama-with-joseph-kim/", group: "UT Austin", lat: 30.291698, lon: -97.737750},
    	{title: "ANNOUNCING OUR YOUNG LEADERS PROGRAM!", date: "July 9 2015", category: "programs", link: "http://www.libertyinnorthkorea.org/announcing-young-leaders-program/", group: "UT Austin", lat: 30.291698, lon: -97.737750},
    	{title: "PEOPLE CAN TOUR: MEET THE PACIFIC NORTHWEST NOMADS!", date: "August 28 2015", category: "movement", link: "http://www.libertyinnorthkorea.org/people-can-tour-meet-the-pacific-northwest-nomads/", group: "UT Austin", lat: 30.291698, lon: -97.737750}



    	];
        console.log(feed);
    factory.newsfeed = function(callback){
    	callback(feed);
    }
    return factory;
});




myApp.controller('mainController', function ($scope, mainFactory){
    feedShow();
	function feedShow(){
		mainFactory.newsfeed(function(data){
            console.log(data);
			for(i=0; i<data.length; i++){
                if(data[i].category === "refugee-stories") data[i].categoryimg = "perm_identity"
                if(data[i].category === "resettlement-stories") data[i].categoryimg = "settings_voice"
                if(data[i].category === "nk-news-brief") data[i].categoryimg = "subject"
                if(data[i].category === "nk-perspectives") data[i].categoryimg = "visibility"
                if(data[i].category === "programs") data[i].categoryimg = "assignment"
                if(data[i].category === "movement") data[i].categoryimg = "settings_power"
                if(data[i].category === "from-the-field") data[i].categoryimg = "new_releases"
            }
            $scope.news = data;


		});

	}
    console.log($scope);

});