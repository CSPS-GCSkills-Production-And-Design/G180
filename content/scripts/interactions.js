//DO NOT MODIFY ↓
define([
    'jquery'
], function($) {
//DO NOT MODIFY ↑

	function initialize() {
		setEvents();
	}

	function setEvents() {
		$(masterStructure)
			.on("Framework:systemReady", function() {
				systemReady();
			})
			.on("Framework:pageLoaded", function() {
				pageLoaded();
			});
	}

	/* is called only once, when the Course has loaded*/
	function systemReady() {
		$("footer").children(".container").prepend("<div class='hidden-xxs hidden-xs hidden-sm course-logo'><img src='theme/G180_new/G180_logo.jpg' alt='G180 logo'><span>Setting the Stage for Results</span></div>");
		if(masterStructure.currentSub.depth==0){
					$("#wb-sttl").addClass("removeMod")
		}else{
					$("#wb-sttl").removeClass("removeMod");
					//csps-sj : kin jd
					$("#csps-modulename>a").html("Module "+masterStructure.currentSub.aPosition[0])
		}		
		$("#dynamic_content").append("<style>[data-target='"+masterStructure.currentSub.sPosition+"']{pointer-events: none;cursor: default;background-color:#eee;}</style>")
	}

	/* is called on every page load, great for adding custom code to all pages*/
	function pageLoaded() {
		//console.log("Interactions:pageLoaded");

		$(".contentchange").click(function () {
		   var content_id = $(this).attr('href');
		   // var test = $(content_id).closest('div');
		   var newContentClass = content_id.substr(1);
			console.log($('.slider').find('.'+newContentClass).length);
			if( $('.slider').find('.'+newContentClass).length == 0){
				var myDiv = $('<div class="'+newContentClass+'"></div>');
			   var gearToAdd = $(content_id).html();
	
	
				console.dir(myDiv)
				$(myDiv).html(gearToAdd);
	
	
	
				console.log($(myDiv).html());
	
				 $('.slider').append(myDiv).show("swing");	
			}
	
			return false;
		});

	}

	initialize();

});