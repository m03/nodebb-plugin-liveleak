(function(module) {
  "use strict";

  var basicUrl = /<a href="(?:https?:\/\/)?(?:www\.)?liveleak\.(?:com|net|org)\/(?:e\/|view\?i=)([a-f0-9\-_]+)[&\/]?.*">.*<\/a>/gi,
      lleUrl = /<a href="(?:https?:\/\/)?(?:www\.)?liveleak\.(?:com|net|org)\/ll_embed\?f=([a-f0-9\-_]+)[&\/]?.*">.*<\/a>/gi,
      basicEmbed = '<div class="video-container"><iframe class="liveleak-plugin" src="//www.liveleak.com/e/$1" allowfullscreen></iframe></div>',
      llEmbed = '<div class="video-container"><iframe class="liveleak-plugin" src="//www.liveleak.com/ll_embed?f=$1" allowfullscreen></iframe></div>',
      Liveleak = {};
  
  Liveleak.parse = function(postContent, callback) {
    postContent = postContent.replace(basicUrl, basicEmbed);
    postContent = postContent.replace(lleUrl, llEmbed);

    callback(null, postContent);
  };

  module.exports  = Liveleak;
}(module));

