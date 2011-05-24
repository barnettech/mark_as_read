written by James Barnett http://www.barnettech.com for Babson College 5/24/2011
DRUPAL MODULE DESCRIPTION:  This module was written for the Drupal 6 version of Drupal Commons, a distribtion which Acquia created and supports.  The module works with the Group Forums module, also located in GIT, and uses jquery and ajax to collapse comment threads, has a comment expand to be read upon clicking the title of the comment, and upon click it tracks if the comment has already been read.  NODE COMMENT must be installed.  Unread comments simply state in a red font "NEW POST".


INSTALLATION INSTRUCTIONS:

1.)  Copy the template file node-view-nodecomments.tpl.php into your theme folder and wrap node comments with a div to replace with the word "already read" or "new" or to change the text background color.  This view template file will touch the node comments.

2.)  The template file advf-forum-post.tpl.php should be copied to your theme folder if you want to wrap the main advanced forum post text in a div for jquery to act upon.

3.)  Copy the js folder into your theme for the jquery to act upon your advanced forums with nodecomments turned on.  Then you will have the mark as read feature enabled

4.)  Put this in your css file:
.read {
  color: red;
  background-color: #FAF8CC;
}

5.)  Copy advf-forum-post.tpl.php into your theme directory, this file loads up the comments.js with all the jquery goodness
