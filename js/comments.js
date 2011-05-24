if (Drupal.jsEnabled) {
          $(document).ready(function() {
            //alert('hello');
            $('#forum-comments .content').hide();
            $('#forum-comments .links').hide();
            var theids="";
            $("div[id^='node-']").each(function() {
            	var patt=/\d*$/;
            	var anid = $(this).attr("id");
    	    	var theid = (anid.match(patt));
            	theids = theids + theid + ','; 
            });
            //alert(theids);
            var url = 'http://drupaltest3.babson.edu/bell/see_if_read';
            $.post(url, {theids: theids},
				       function(data){
				         //alert('finished ajax call');  //for testing
				         //$('#page-content').load('http://bell:10088/the_wall_page_content');
            	         //var return_value = html(data);
            	         //alert('already read items: '+ data);
            	         var mySplitResult = data.split(",");
            	         for (var i = 0; i < mySplitResult.length; i++){
            	        	var the_element =  '#node-' + mySplitResult[i];
                                var read_element = the_element + ' .read'; 
            	        	//$(the_element).css("background-color", "#FAF8CC");
  				$(read_element).hide();
            	        	                                        
            	         }

				         
				       
				       });
            //$('.subject a').each()
            
          });
	  $(function(){
	    $('#forum-comments .title a').click(function(ev){
	    	ev.preventDefault();
	    	var nodeid = $(this).parent().parent().parent().attr("id");
	    	var patt=/\d*$/;
	    	var theid = (nodeid.match(patt));
	    	var the_element = '#node-' + theid;
                var read_element = the_element + ' .read';
	    	//$(the_element).css("background-color", "#FAF8CC");
		$(read_element).hide();
	        
	    	var selector = '#' + nodeid + ' .content';
	    	var selector2 = '#' + nodeid + ' .links';
	    	if ($(selector).css('display') == 'none') {
	    	  $(selector).show();
	    	  $(selector2).show();
		      url = 'http://drupaltest3.babson.edu/bell/mark_as_read';
	    	  $.post(url, {commentid: theid},
				       function(data){
				         //alert('finished ajax call');  //for testing
				         //$('#page-content').load('http://bell:10088/the_wall_page_content');
				         
				       
				       });
	    	}
	    	else{
	    	  var the_element = '#node-' + theid;
	    	  //$(the_element).css("background-color", "#FAF8CC");
	    	  $(selector).hide();
	    	  $(selector2).hide();
	    	}
	    });
	  });
}
