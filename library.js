(function(module) {
  "use strict";

  var basicUrl    = /<a href="(?:https?:\/\/)?(?:www\.)?liveleak\.(?:com|net|org)\/(?:e\/|view\?i=)([a-f0-9\-_]+)[&\/]?.*">.*<\/a>/gi;
  var llembedUrl  = /<a href="(?:https?:\/\/)?(?:www\.)?liveleak\.(?:com|net|org)\/ll_embed\?f=([a-f0-9\-_]+)[&\/]?.*">.*<\/a>/gi;
  var Liveleak    = {};
  
  Liveleak.parse  = function(postContent, callback) {
    var embed     = '<div class="video-container"><iframe class="liveleak-plugin" src="//www.liveleak.com/e/$1" allowfullscreen></iframe></div>';

    if (postContent.match(basicUrl)) {
      postContent = postContent.replace(basicUrl, embed);
    }
    if (postContent.match(llembedUrl)) {
      embed       = '<div class="video-container"><iframe class="liveleak-plugin" src="//www.liveleak.com/ll_embed?f=$1" allowfullscreen></iframe></div>';
      postContent = postContent.replace(llembedUrl, embed);
    }

    callback(null, postContent);
  };

  module.exports  = Liveleak;
}(module));

