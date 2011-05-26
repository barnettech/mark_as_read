if (Drupal.jsEnabled) {
          $(document).ready(function() {
            //alert('hello');
        	var expand = getCookie('expand-comments');
        	if(expand=='yes'){
        		$('#expand-all :checkbox').attr('checked',true);
        		$('#forum-comments .content').show();
                $('#forum-comments .links').show();
        	}else{
        	  $('#forum-comments .content').hide();
              $('#forum-comments .links').hide();
        	}
            
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
        
          //after page load events
	  $(function(){
          $('#expand-all :checkbox').click(function() {
		    //alert('hello');
        	if ($('#forum-comments .content').css('display') == 'none') {
			  $('#forum-comments .content').show();
              $('#forum-comments .links').show();
              setCookie('expand-comments','yes',365);
        	}else{
        		$('#forum-comments .content').hide();
                $('#forum-comments .links').hide();
                setCookie('expand-comments','no',365);
        	}
		  
			
			
		});
        
         $('#mark-as-read :checkbox').click(function(){
        	$('#mark-as-unread :checkbox').attr('checked', false);
        	var nodeid = $(this).parent().parent().parent().parent().attr("id");
        	var patt=/\d*$/;
	    	var theid = (nodeid.match(patt));
	    	var the_element = '#node-' + theid;
            var read_element = the_element + ' .read';
	        $(read_element).hide();
        	url = 'http://drupaltest3.babson.edu/bell/mark_as_read';
        	var x=1;
        	if(x==1){
  	    	$.post(url, {commentid: theid},
				       function(data){
				         //alert('finished ajax call');  //for testing
				         //$('#page-content').load('http://bell:10088/the_wall_page_content');
				         
				       
				       });
	    	}
           });
         $('#mark-as-unread :checkbox').click(function(){
        	$('#mark-as-read :checkbox').attr('checked', false);
         	var nodeid = $(this).parent().parent().parent().parent().attr("id");
         	var patt=/\d*$/;
 	    	var theid = (nodeid.match(patt));
 	    	var the_element = '#node-' + theid;
             var read_element = the_element + ' .read';
 	        $(read_element).show();
         	url = 'http://drupaltest3.babson.edu/bell/mark_as_unread';
         	var x=1;
         	if(x==1){
   	    	$.post(url, {commentid: theid},
 				       function(data){
 				         //alert('finished ajax call');  //for testing
 				         //$('#page-content').load('http://bell:10088/the_wall_page_content');
 				         
 				       
 				       });
 	    	}
            });
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
	  
	  function setCookie(c_name,value,exdays)
	  {
	  var exdate=new Date();
	  exdate.setDate(exdate.getDate() + exdays);
	  var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	  document.cookie=c_name + "=" + c_value;
	  }
	  function getCookie(c_name)
	  {
	  var i,x,y,ARRcookies=document.cookie.split(";");
	  for (i=0;i<ARRcookies.length;i++)
	  {
	    x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	    y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	    x=x.replace(/^\s+|\s+$/g,"");
	    if (x==c_name)
	      {
	      return unescape(y);
	      }
	    }
	  }
}
