/* 
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 *Edited By JeffinVarghese for SmartMirror
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "MMM-cryptocurrency",
			position: "top_right",
			config: {
				currency: ['bitcoin'],
				conversion: 'USD',
				showUSD: false,
				headers: ['change24h', 'change1h', 'change7d'],
				displayType: 'logo',
				showGraphs: true,
				coloredLogos: true
		}
		},
		{
			module: 'MMM-Screencast',
			position: 'bottom_right', // This position is for a hidden <div /> and not the screencast window
			config: {
				position: 'center',
				height: 800,
				width: 800,
			}
        	},
		{
			module: "MMM-Reddit",
			position: "top_left",
			config: {
				subreddit: ['worldnews', 'all'],
				headerType: 'chained',
				displayType: 'headlines',
				count: 10,
				show: 2,
				width: 400,
				showScore: false,
				showSubreddit: true,
				colorText: true,
				showThumbnail: true,
			}
		},
		{
			module: 'MMM-uber',
			position: 'top_left',
			header: 'Uber',
			config: {
			lat: your latitude ,  // use your exact pickup loaction
			lng: your longitude, // use your exact pickup loaction
			uberServerToken: 'uber server token ',// info on where to find uber server code can be found in the modules folder MMM-uber
			ride_types: [ 'uberX', 'POOL' ]
			}
		},
		{
			module: 'MMM-AirQuality',
			position: 'top_right', // you may choose any location
			config: {
	  		location: 'usa/newjersey/jersey-city-fh/' // the location to check the index for
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "5128581",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "your api key from open weather map"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "your api key from open weather map"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
			module: 'MMM-DailyBibleVerse',
			position: 'bottom_bar',	// This can be any of the regions. Best result is in the bottom_bar as verses can take multiple lines in a day.
			config: {
            			version: 'NIV', // This can be changed to any version you want that is offered by Bible Gateway. For a list, go here: https://www.biblegateway.com/versions/,
	    			size: 'small' // default value is medium, but can be changed. 
			}
		},
		{
   			 module: "MMM-Wallpaper",
    			position: "fullscreen_below",
    			config: { 
      				source: "bing",
      				slideInterval: 60 * 1000 // Change slides every minute
    			}
  		},
		{
            		module: 'MMM-GoogleMapsTraffic',
            		position: 'bottom_left',
            		config: {
                		key: 'your api key from google maps API', // Info about how to obtain api key can be found in the module MMM-GoogleMapsTraffic
                		lat: your current lattitude,// can be found from google maps
                		lng: your current longitude,// can be found from google maps
                		height: '200px',
                		width: '300px',
				zoom: 13
            		}
        	},
		

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
