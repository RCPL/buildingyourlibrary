/**
 * Handles the sidebar filters when on the news view. Allows only one filter at a time!
 */

(function ($) {
  Drupal.behaviors.byl2_news =  {
    attach: function(context, settings) {

      // For each active link, change the link so that the existing active filter will be removed by clicking.
      $(".form-item-field-branch-target-id a.active").attr('href', function(i, attr) {
        return attr.replace(/&?field_branch_target_id=([^&]$|[^&]*)([&\?]?)/i, "");
      });
      $("#edit-field-video-video-url-2 a.active").attr('href', function(i, attr) {
        return attr.replace(/&?field_video_video_url=([^&]$|[^&]*)([&\?]?)/i, "");
      });
      $("#edit-field-flickr-url-2 a.active").attr('href', function(i, attr) {
        return attr.replace(/&?field_flickr_url=([^&]$|[^&]*)([&\?]?)/i, "");
      });
      $("#edit-field-event-value-2 a.active").attr('href', function(i, attr) {
        return attr.replace(/&?field_event_value=([^&]$|[^&]*)([&\?]?)/i, "");
      });
      $("#edit-field-article-files-fid-2 a.active").attr('href', function(i, attr) {
        return attr.replace(/&?field_article_files_fid=([^&]$|[^&]*)([&\?]?)/i, "");
      });
      // Get rid of any trailing question marks that might have been left behind on the active links.
      $("#views-exposed-form-news-page a.active").attr('href', function(i, attr) {
        return attr.replace(/\?$/, "");
      });

      // Allow only one "type" filter on the news page.
      // Strip out the other "types" that might be in the query string parameters.
      $("#edit-field-video-video-url-2 a").not('.active').attr('href', function(i, attr) {
        return attr.replace(/field_flickr_url=([^&]$|[^&]*)&?/i, "");
      });
      $("#edit-field-video-video-url-2 a").not('.active').attr('href', function(i, attr) {
        return attr.replace(/field_event_value=([^&]$|[^&]*)&?/i, "");
      });
      $("#edit-field-video-video-url-2 a").not('.active').attr('href', function(i, attr) {
        return attr.replace(/field_article_files_fid=([^&]$|[^&]*)&?/i, "");
      });
      $("#edit-field-flickr-url-2 a").not('.active').attr('href', function(i, attr) {
        return attr.replace(/field_video_video_url=([^&]$|[^&]*)&?/i, "");
      });
      $("#edit-field-flickr-url-2 a").not('.active').attr('href', function(i, attr) {
        return attr.replace(/field_event_value=([^&]$|[^&]*)&?/i, "");
      });
      $("#edit-field-flickr-url-2 a").not('.active').attr('href', function(i, attr) {
        return attr.replace(/field_article_files_fid=([^&]$|[^&]*)&?/i, "");
      });
      $("#edit-field-event-value-2 a").not('.active').attr('href', function(i, attr) {
        return attr.replace(/field_video_video_url=([^&]$|[^&]*)&?/i, "");
      });
      $("#edit-field-event-value-2 a").not('.active').attr('href', function(i, attr) {
        return attr.replace(/field_flickr_url=([^&]$|[^&]*)&?/i, "");
      });
      $("#edit-field-event-value-2 a").not('.active').attr('href', function(i, attr) {
        return attr.replace(/field_article_files_fid=([^&]$|[^&]*)&?/i, "");
      });
      $("#edit-field-article-files-fid-2 a").not('.active').attr('href', function(i, attr) {
        return attr.replace(/field_video_video_url=([^&]$|[^&]*)&?/i, "");
      });
      $("#edit-field-article-files-fid-2 a").not('.active').attr('href', function(i, attr) {
        return attr.replace(/field_flickr_url=([^&]$|[^&]*)&?/i, "");
      });
      $("#edit-field-article-files-fid-2 a").not('.active').attr('href', function(i, attr) {
        return attr.replace(/field_event_value=([^&]$|[^&]*)&?/i, "");
      });







    }
  };
})(jQuery);
