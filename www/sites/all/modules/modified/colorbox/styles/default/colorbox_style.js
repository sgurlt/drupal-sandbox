(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
      var colorbox_share = Drupal.settings.colorbox.colorbox_share;
      if(colorbox_share == '1') {
        var current_url = window.location.href;
        var cboxShare = '<button id="cboxShare"></button>';
        var cboxShareWrapper = '<div style="height:50px;" class="cboxShareWrapper"></div>';
        var facebook_share = '<a class="facebook_share" href="http://www.facebook.com/sharer.php?u='+current_url+'">Share</a>';
        $('#cboxContent').append(cboxShare).append(cboxShareWrapper).append(facebook_share);
        $('#cboxShare').click(function() {
          $('.cboxShareWrapper').toggleClass('visible');
        });
      }
    });
  }
};

})(jQuery);
