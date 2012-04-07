﻿(function($) {
    "use strict";

    var root = this;

    // Log all AJAX requests to Google Analytics
    $(function() {
        $('#content').ajaxSend(function(event, jqXhr, options) {
            var gaq = root._gaq;
            if (gaq) {
                gaq.push(['_trackPageview', options.url]);
            }
        });
    });
}).call(window, jQuery);
