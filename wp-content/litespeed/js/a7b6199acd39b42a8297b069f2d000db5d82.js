jQuery(function($) {
  if (!window.Waypoint) {
    $(
      ".elementor-section.lazy-background,.elementor-column-wrap.lazy-background"
    ).removeClass("lazy-background");
    if (window.console && console.warn) {
      console.warn(
        "Waypoint library is not loaded so backgrounds lazy loading is turned OFF"
      );
    }
    return;
  }
  $(".lazy-background").each(function() {
    var $section = $(this);
    new Waypoint({
      element: $section.get(0),
      handler: function(direction) {
        $section.removeClass("lazy-background");
      },
      offset: $(window).height() * 1.5
    });
  });
}); /*!
 * Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
(function() {
  var l, a;
  (l = this), (a = function() {
    "use strict";
    var l = {},
      a = {};
    try {
      "undefined" != typeof window && (l = window), "undefined" !=
        typeof document && (a = document);
    } catch (l) {}
    var e = (l.navigator || {}).userAgent,
      r = void 0 === e ? "" : e,
      n = l,
      o = a,
      u = (
        n.document,
        !!o.documentElement &&
          !!o.head &&
          "function" == typeof o.addEventListener &&
          o.createElement,
        ~r.indexOf("MSIE") || r.indexOf("Trident/"),
        "___FONT_AWESOME___"
      ),
      t = (function() {
        try {
          return "production" === process.env.NODE_ENV;
        } catch (l) {
          return !1;
        }
      })();
    var f = n || {};
    f[u] || (f[u] = {}), f[u].styles || (f[u].styles = {}), f[u].hooks ||
      (f[u].hooks = {}), f[u].shims || (f[u].shims = []);
    var i = f[u],
      s = [
        ["glass", null, "glass-martini"],
        ["meetup", "fab", null],
        ["star-o", "far", "star"],
        ["remove", null, "times"],
        ["close", null, "times"],
        ["gear", null, "cog"],
        ["trash-o", "far", "trash-alt"],
        ["file-o", "far", "file"],
        ["clock-o", "far", "clock"],
        ["arrow-circle-o-down", "far", "arrow-alt-circle-down"],
        ["arrow-circle-o-up", "far", "arrow-alt-circle-up"],
        ["play-circle-o", "far", "play-circle"],
        ["repeat", null, "redo"],
        ["rotate-right", null, "redo"],
        ["refresh", null, "sync"],
        ["list-alt", "far", null],
        ["dedent", null, "outdent"],
        ["video-camera", null, "video"],
        ["picture-o", "far", "image"],
        ["photo", "far", "image"],
        ["image", "far", "image"],
        ["pencil", null, "pencil-alt"],
        ["map-marker", null, "map-marker-alt"],
        ["pencil-square-o", "far", "edit"],
        ["share-square-o", "far", "share-square"],
        ["check-square-o", "far", "check-square"],
        ["arrows", null, "arrows-alt"],
        ["times-circle-o", "far", "times-circle"],
        ["check-circle-o", "far", "check-circle"],
        ["mail-forward", null, "share"],
        ["expand", null, "expand-alt"],
        ["compress", null, "compress-alt"],
        ["eye", "far", null],
        ["eye-slash", "far", null],
        ["warning", null, "exclamation-triangle"],
        ["calendar", null, "calendar-alt"],
        ["arrows-v", null, "arrows-alt-v"],
        ["arrows-h", null, "arrows-alt-h"],
        ["bar-chart", "far", "chart-bar"],
        ["bar-chart-o", "far", "chart-bar"],
        ["twitter-square", "fab", null],
        ["facebook-square", "fab", null],
        ["gears", null, "cogs"],
        ["thumbs-o-up", "far", "thumbs-up"],
        ["thumbs-o-down", "far", "thumbs-down"],
        ["heart-o", "far", "heart"],
        ["sign-out", null, "sign-out-alt"],
        ["linkedin-square", "fab", "linkedin"],
        ["thumb-tack", null, "thumbtack"],
        ["external-link", null, "external-link-alt"],
        ["sign-in", null, "sign-in-alt"],
        ["github-square", "fab", null],
        ["lemon-o", "far", "lemon"],
        ["square-o", "far", "square"],
        ["bookmark-o", "far", "bookmark"],
        ["twitter", "fab", null],
        ["facebook", "fab", "facebook-f"],
        ["facebook-f", "fab", "facebook-f"],
        ["github", "fab", null],
        ["credit-card", "far", null],
        ["feed", null, "rss"],
        ["hdd-o", "far", "hdd"],
        ["hand-o-right", "far", "hand-point-right"],
        ["hand-o-left", "far", "hand-point-left"],
        ["hand-o-up", "far", "hand-point-up"],
        ["hand-o-down", "far", "hand-point-down"],
        ["arrows-alt", null, "expand-arrows-alt"],
        ["group", null, "users"],
        ["chain", null, "link"],
        ["scissors", null, "cut"],
        ["files-o", "far", "copy"],
        ["floppy-o", "far", "save"],
        ["navicon", null, "bars"],
        ["reorder", null, "bars"],
        ["pinterest", "fab", null],
        ["pinterest-square", "fab", null],
        ["google-plus-square", "fab", null],
        ["google-plus", "fab", "google-plus-g"],
        ["money", "far", "money-bill-alt"],
        ["unsorted", null, "sort"],
        ["sort-desc", null, "sort-down"],
        ["sort-asc", null, "sort-up"],
        ["linkedin", "fab", "linkedin-in"],
        ["rotate-left", null, "undo"],
        ["legal", null, "gavel"],
        ["tachometer", null, "tachometer-alt"],
        ["dashboard", null, "tachometer-alt"],
        ["comment-o", "far", "comment"],
        ["comments-o", "far", "comments"],
        ["flash", null, "bolt"],
        ["clipboard", "far", null],
        ["paste", "far", "clipboard"],
        ["lightbulb-o", "far", "lightbulb"],
        ["exchange", null, "exchange-alt"],
        ["cloud-download", null, "cloud-download-alt"],
        ["cloud-upload", null, "cloud-upload-alt"],
        ["bell-o", "far", "bell"],
        ["cutlery", null, "utensils"],
        ["file-text-o", "far", "file-alt"],
        ["building-o", "far", "building"],
        ["hospital-o", "far", "hospital"],
        ["tablet", null, "tablet-alt"],
        ["mobile", null, "mobile-alt"],
        ["mobile-phone", null, "mobile-alt"],
        ["circle-o", "far", "circle"],
        ["mail-reply", null, "reply"],
        ["github-alt", "fab", null],
        ["folder-o", "far", "folder"],
        ["folder-open-o", "far", "folder-open"],
        ["smile-o", "far", "smile"],
        ["frown-o", "far", "frown"],
        ["meh-o", "far", "meh"],
        ["keyboard-o", "far", "keyboard"],
        ["flag-o", "far", "flag"],
        ["mail-reply-all", null, "reply-all"],
        ["star-half-o", "far", "star-half"],
        ["star-half-empty", "far", "star-half"],
        ["star-half-full", "far", "star-half"],
        ["code-fork", null, "code-branch"],
        ["chain-broken", null, "unlink"],
        ["shield", null, "shield-alt"],
        ["calendar-o", "far", "calendar"],
        ["maxcdn", "fab", null],
        ["html5", "fab", null],
        ["css3", "fab", null],
        ["ticket", null, "ticket-alt"],
        ["minus-square-o", "far", "minus-square"],
        ["level-up", null, "level-up-alt"],
        ["level-down", null, "level-down-alt"],
        ["pencil-square", null, "pen-square"],
        ["external-link-square", null, "external-link-square-alt"],
        ["compass", "far", null],
        ["caret-square-o-down", "far", "caret-square-down"],
        ["toggle-down", "far", "caret-square-down"],
        ["caret-square-o-up", "far", "caret-square-up"],
        ["toggle-up", "far", "caret-square-up"],
        ["caret-square-o-right", "far", "caret-square-right"],
        ["toggle-right", "far", "caret-square-right"],
        ["eur", null, "euro-sign"],
        ["euro", null, "euro-sign"],
        ["gbp", null, "pound-sign"],
        ["usd", null, "dollar-sign"],
        ["dollar", null, "dollar-sign"],
        ["inr", null, "rupee-sign"],
        ["rupee", null, "rupee-sign"],
        ["jpy", null, "yen-sign"],
        ["cny", null, "yen-sign"],
        ["rmb", null, "yen-sign"],
        ["yen", null, "yen-sign"],
        ["rub", null, "ruble-sign"],
        ["ruble", null, "ruble-sign"],
        ["rouble", null, "ruble-sign"],
        ["krw", null, "won-sign"],
        ["won", null, "won-sign"],
        ["btc", "fab", null],
        ["bitcoin", "fab", "btc"],
        ["file-text", null, "file-alt"],
        ["sort-alpha-asc", null, "sort-alpha-down"],
        ["sort-alpha-desc", null, "sort-alpha-down-alt"],
        ["sort-amount-asc", null, "sort-amount-down"],
        ["sort-amount-desc", null, "sort-amount-down-alt"],
        ["sort-numeric-asc", null, "sort-numeric-down"],
        ["sort-numeric-desc", null, "sort-numeric-down-alt"],
        ["youtube-square", "fab", null],
        ["youtube", "fab", null],
        ["xing", "fab", null],
        ["xing-square", "fab", null],
        ["youtube-play", "fab", "youtube"],
        ["dropbox", "fab", null],
        ["stack-overflow", "fab", null],
        ["instagram", "fab", null],
        ["flickr", "fab", null],
        ["adn", "fab", null],
        ["bitbucket", "fab", null],
        ["bitbucket-square", "fab", "bitbucket"],
        ["tumblr", "fab", null],
        ["tumblr-square", "fab", null],
        ["long-arrow-down", null, "long-arrow-alt-down"],
        ["long-arrow-up", null, "long-arrow-alt-up"],
        ["long-arrow-left", null, "long-arrow-alt-left"],
        ["long-arrow-right", null, "long-arrow-alt-right"],
        ["apple", "fab", null],
        ["windows", "fab", null],
        ["android", "fab", null],
        ["linux", "fab", null],
        ["dribbble", "fab", null],
        ["skype", "fab", null],
        ["foursquare", "fab", null],
        ["trello", "fab", null],
        ["gratipay", "fab", null],
        ["gittip", "fab", "gratipay"],
        ["sun-o", "far", "sun"],
        ["moon-o", "far", "moon"],
        ["vk", "fab", null],
        ["weibo", "fab", null],
        ["renren", "fab", null],
        ["pagelines", "fab", null],
        ["stack-exchange", "fab", null],
        ["arrow-circle-o-right", "far", "arrow-alt-circle-right"],
        ["arrow-circle-o-left", "far", "arrow-alt-circle-left"],
        ["caret-square-o-left", "far", "caret-square-left"],
        ["toggle-left", "far", "caret-square-left"],
        ["dot-circle-o", "far", "dot-circle"],
        ["vimeo-square", "fab", null],
        ["try", null, "lira-sign"],
        ["turkish-lira", null, "lira-sign"],
        ["plus-square-o", "far", "plus-square"],
        ["slack", "fab", null],
        ["wordpress", "fab", null],
        ["openid", "fab", null],
        ["institution", null, "university"],
        ["bank", null, "university"],
        ["mortar-board", null, "graduation-cap"],
        ["yahoo", "fab", null],
        ["google", "fab", null],
        ["reddit", "fab", null],
        ["reddit-square", "fab", null],
        ["stumbleupon-circle", "fab", null],
        ["stumbleupon", "fab", null],
        ["delicious", "fab", null],
        ["digg", "fab", null],
        ["pied-piper-pp", "fab", null],
        ["pied-piper-alt", "fab", null],
        ["drupal", "fab", null],
        ["joomla", "fab", null],
        ["spoon", null, "utensil-spoon"],
        ["behance", "fab", null],
        ["behance-square", "fab", null],
        ["steam", "fab", null],
        ["steam-square", "fab", null],
        ["automobile", null, "car"],
        ["envelope-o", "far", "envelope"],
        ["spotify", "fab", null],
        ["deviantart", "fab", null],
        ["soundcloud", "fab", null],
        ["file-pdf-o", "far", "file-pdf"],
        ["file-word-o", "far", "file-word"],
        ["file-excel-o", "far", "file-excel"],
        ["file-powerpoint-o", "far", "file-powerpoint"],
        ["file-image-o", "far", "file-image"],
        ["file-photo-o", "far", "file-image"],
        ["file-picture-o", "far", "file-image"],
        ["file-archive-o", "far", "file-archive"],
        ["file-zip-o", "far", "file-archive"],
        ["file-audio-o", "far", "file-audio"],
        ["file-sound-o", "far", "file-audio"],
        ["file-video-o", "far", "file-video"],
        ["file-movie-o", "far", "file-video"],
        ["file-code-o", "far", "file-code"],
        ["vine", "fab", null],
        ["codepen", "fab", null],
        ["jsfiddle", "fab", null],
        ["life-ring", "far", null],
        ["life-bouy", "far", "life-ring"],
        ["life-buoy", "far", "life-ring"],
        ["life-saver", "far", "life-ring"],
        ["support", "far", "life-ring"],
        ["circle-o-notch", null, "circle-notch"],
        ["rebel", "fab", null],
        ["ra", "fab", "rebel"],
        ["resistance", "fab", "rebel"],
        ["empire", "fab", null],
        ["ge", "fab", "empire"],
        ["git-square", "fab", null],
        ["git", "fab", null],
        ["hacker-news", "fab", null],
        ["y-combinator-square", "fab", "hacker-news"],
        ["yc-square", "fab", "hacker-news"],
        ["tencent-weibo", "fab", null],
        ["qq", "fab", null],
        ["weixin", "fab", null],
        ["wechat", "fab", "weixin"],
        ["send", null, "paper-plane"],
        ["paper-plane-o", "far", "paper-plane"],
        ["send-o", "far", "paper-plane"],
        ["circle-thin", "far", "circle"],
        ["header", null, "heading"],
        ["sliders", null, "sliders-h"],
        ["futbol-o", "far", "futbol"],
        ["soccer-ball-o", "far", "futbol"],
        ["slideshare", "fab", null],
        ["twitch", "fab", null],
        ["yelp", "fab", null],
        ["newspaper-o", "far", "newspaper"],
        ["paypal", "fab", null],
        ["google-wallet", "fab", null],
        ["cc-visa", "fab", null],
        ["cc-mastercard", "fab", null],
        ["cc-discover", "fab", null],
        ["cc-amex", "fab", null],
        ["cc-paypal", "fab", null],
        ["cc-stripe", "fab", null],
        ["bell-slash-o", "far", "bell-slash"],
        ["trash", null, "trash-alt"],
        ["copyright", "far", null],
        ["eyedropper", null, "eye-dropper"],
        ["area-chart", null, "chart-area"],
        ["pie-chart", null, "chart-pie"],
        ["line-chart", null, "chart-line"],
        ["lastfm", "fab", null],
        ["lastfm-square", "fab", null],
        ["ioxhost", "fab", null],
        ["angellist", "fab", null],
        ["cc", "far", "closed-captioning"],
        ["ils", null, "shekel-sign"],
        ["shekel", null, "shekel-sign"],
        ["sheqel", null, "shekel-sign"],
        ["meanpath", "fab", "font-awesome"],
        ["buysellads", "fab", null],
        ["connectdevelop", "fab", null],
        ["dashcube", "fab", null],
        ["forumbee", "fab", null],
        ["leanpub", "fab", null],
        ["sellsy", "fab", null],
        ["shirtsinbulk", "fab", null],
        ["simplybuilt", "fab", null],
        ["skyatlas", "fab", null],
        ["diamond", "far", "gem"],
        ["intersex", null, "transgender"],
        ["facebook-official", "fab", "facebook"],
        ["pinterest-p", "fab", null],
        ["whatsapp", "fab", null],
        ["hotel", null, "bed"],
        ["viacoin", "fab", null],
        ["medium", "fab", null],
        ["y-combinator", "fab", null],
        ["yc", "fab", "y-combinator"],
        ["optin-monster", "fab", null],
        ["opencart", "fab", null],
        ["expeditedssl", "fab", null],
        ["battery-4", null, "battery-full"],
        ["battery", null, "battery-full"],
        ["battery-3", null, "battery-three-quarters"],
        ["battery-2", null, "battery-half"],
        ["battery-1", null, "battery-quarter"],
        ["battery-0", null, "battery-empty"],
        ["object-group", "far", null],
        ["object-ungroup", "far", null],
        ["sticky-note-o", "far", "sticky-note"],
        ["cc-jcb", "fab", null],
        ["cc-diners-club", "fab", null],
        ["clone", "far", null],
        ["hourglass-o", "far", "hourglass"],
        ["hourglass-1", null, "hourglass-start"],
        ["hourglass-2", null, "hourglass-half"],
        ["hourglass-3", null, "hourglass-end"],
        ["hand-rock-o", "far", "hand-rock"],
        ["hand-grab-o", "far", "hand-rock"],
        ["hand-paper-o", "far", "hand-paper"],
        ["hand-stop-o", "far", "hand-paper"],
        ["hand-scissors-o", "far", "hand-scissors"],
        ["hand-lizard-o", "far", "hand-lizard"],
        ["hand-spock-o", "far", "hand-spock"],
        ["hand-pointer-o", "far", "hand-pointer"],
        ["hand-peace-o", "far", "hand-peace"],
        ["registered", "far", null],
        ["creative-commons", "fab", null],
        ["gg", "fab", null],
        ["gg-circle", "fab", null],
        ["tripadvisor", "fab", null],
        ["odnoklassniki", "fab", null],
        ["odnoklassniki-square", "fab", null],
        ["get-pocket", "fab", null],
        ["wikipedia-w", "fab", null],
        ["safari", "fab", null],
        ["chrome", "fab", null],
        ["firefox", "fab", null],
        ["opera", "fab", null],
        ["internet-explorer", "fab", null],
        ["television", null, "tv"],
        ["contao", "fab", null],
        ["500px", "fab", null],
        ["amazon", "fab", null],
        ["calendar-plus-o", "far", "calendar-plus"],
        ["calendar-minus-o", "far", "calendar-minus"],
        ["calendar-times-o", "far", "calendar-times"],
        ["calendar-check-o", "far", "calendar-check"],
        ["map-o", "far", "map"],
        ["commenting", null, "comment-dots"],
        ["commenting-o", "far", "comment-dots"],
        ["houzz", "fab", null],
        ["vimeo", "fab", "vimeo-v"],
        ["black-tie", "fab", null],
        ["fonticons", "fab", null],
        ["reddit-alien", "fab", null],
        ["edge", "fab", null],
        ["credit-card-alt", null, "credit-card"],
        ["codiepie", "fab", null],
        ["modx", "fab", null],
        ["fort-awesome", "fab", null],
        ["usb", "fab", null],
        ["product-hunt", "fab", null],
        ["mixcloud", "fab", null],
        ["scribd", "fab", null],
        ["pause-circle-o", "far", "pause-circle"],
        ["stop-circle-o", "far", "stop-circle"],
        ["bluetooth", "fab", null],
        ["bluetooth-b", "fab", null],
        ["gitlab", "fab", null],
        ["wpbeginner", "fab", null],
        ["wpforms", "fab", null],
        ["envira", "fab", null],
        ["wheelchair-alt", "fab", "accessible-icon"],
        ["question-circle-o", "far", "question-circle"],
        ["volume-control-phone", null, "phone-volume"],
        ["asl-interpreting", null, "american-sign-language-interpreting"],
        ["deafness", null, "deaf"],
        ["hard-of-hearing", null, "deaf"],
        ["glide", "fab", null],
        ["glide-g", "fab", null],
        ["signing", null, "sign-language"],
        ["viadeo", "fab", null],
        ["viadeo-square", "fab", null],
        ["snapchat", "fab", null],
        ["snapchat-ghost", "fab", null],
        ["snapchat-square", "fab", null],
        ["pied-piper", "fab", null],
        ["first-order", "fab", null],
        ["yoast", "fab", null],
        ["themeisle", "fab", null],
        ["google-plus-official", "fab", "google-plus"],
        ["google-plus-circle", "fab", "google-plus"],
        ["font-awesome", "fab", null],
        ["fa", "fab", "font-awesome"],
        ["handshake-o", "far", "handshake"],
        ["envelope-open-o", "far", "envelope-open"],
        ["linode", "fab", null],
        ["address-book-o", "far", "address-book"],
        ["vcard", null, "address-card"],
        ["address-card-o", "far", "address-card"],
        ["vcard-o", "far", "address-card"],
        ["user-circle-o", "far", "user-circle"],
        ["user-o", "far", "user"],
        ["id-badge", "far", null],
        ["drivers-license", null, "id-card"],
        ["id-card-o", "far", "id-card"],
        ["drivers-license-o", "far", "id-card"],
        ["quora", "fab", null],
        ["free-code-camp", "fab", null],
        ["telegram", "fab", null],
        ["thermometer-4", null, "thermometer-full"],
        ["thermometer", null, "thermometer-full"],
        ["thermometer-3", null, "thermometer-three-quarters"],
        ["thermometer-2", null, "thermometer-half"],
        ["thermometer-1", null, "thermometer-quarter"],
        ["thermometer-0", null, "thermometer-empty"],
        ["bathtub", null, "bath"],
        ["s15", null, "bath"],
        ["window-maximize", "far", null],
        ["window-restore", "far", null],
        ["times-rectangle", null, "window-close"],
        ["window-close-o", "far", "window-close"],
        ["times-rectangle-o", "far", "window-close"],
        ["bandcamp", "fab", null],
        ["grav", "fab", null],
        ["etsy", "fab", null],
        ["imdb", "fab", null],
        ["ravelry", "fab", null],
        ["eercast", "fab", "sellcast"],
        ["snowflake-o", "far", "snowflake"],
        ["superpowers", "fab", null],
        ["wpexplorer", "fab", null],
        ["cab", null, "taxi"]
      ];
    return (function(l) {
      try {
        l();
      } catch (l) {
        if (!t) throw l;
      }
    })(function() {
      var l;
      "function" == typeof i.hooks.addShims
        ? i.hooks.addShims(s)
        : (l = i.shims).push.apply(l, s);
    }), s;
  }), "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = a())
    : "function" == typeof define && define.amd
      ? define(a)
      : (l["fontawesome-free-shims"] = a());
})();
document.addEventListener("DOMContentLoaded", function() {
  let snapchatIcons = document.querySelectorAll(".fab.fa-snapchat-ghost");
  snapchatIcons.forEach(function(icon) {
    icon.classList.remove("fab", "fa-snapchat-ghost");
    icon.classList.add("fa", "fa-tumblr");
    icon.setAttribute("aria-hidden", "true");
  });
});
!(function(f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function() {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = "2.0";
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(
  window,
  document,
  "script",
  "https://connect.facebook.net/en_US/fbevents.js"
);
fbq("init", "718082439726509");
fbq("track", "PageView");
(function(c, l, a, r, i, t, y) {
  c[a] =
    c[a] ||
    function() {
      (c[a].q = c[a].q || []).push(arguments);
    };
  t = l.createElement(r);
  t.async = 1;
  t.src = "https://www.clarity.ms/tag/" + i;
  y = l.getElementsByTagName(r)[0];
  y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "i8t18hlw76");
var cffajaxurl = "https://taj777news.com/wp-admin/admin-ajax.php";
var cfflinkhashtags = "true";
function mycustom_replaceTwitterIcon() {
  const mycustom_twitterIcon = document.querySelector(".fab.fa-twitter");
  if (mycustom_twitterIcon) {
    const mycustom_img = document.createElement("img");
    mycustom_img.src =
      "https://taj777news.com/wp-content/uploads/2023/12/twitter-x-logog.png";
    mycustom_img.alt = "Twitter";
    mycustom_img.width = "12";
    mycustom_img.className = "fab-replace";
    mycustom_twitterIcon.replaceWith(mycustom_img);
  }
}
function mycustom_replaceTwitterImage() {
  const mycustom_twitterImage = document.querySelector(
    ".attachment-full.wp-image-759"
  );
  if (mycustom_twitterImage) {
    const mycustom_img = document.createElement("img");
    mycustom_img.src =
      "https://taj777news.com/wp-content/uploads/2023/12/twitter-x-logog.png";
    mycustom_img.alt = "Id247rummy Twitter-logo";
    mycustom_img.className = "attachment-full size-full wp-image-759";
    mycustom_img.width = "73";
    mycustom_img.height = "73";
    mycustom_img.loading = "lazy";
    mycustom_img.decoding = "async";
    mycustom_twitterImage.replaceWith(mycustom_img);
  }
}
document.addEventListener("DOMContentLoaded", function() {
  mycustom_replaceTwitterIcon();
  mycustom_replaceTwitterImage();
});
const lazyloadRunObserver = () => {
  const lazyloadBackgrounds = document.querySelectorAll(
    `.e-con.e-parent:not(.e-lazyloaded)`
  );
  const lazyloadBackgroundObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let lazyloadBackground = entry.target;
          if (lazyloadBackground) {
            lazyloadBackground.classList.add("e-lazyloaded");
          }
          lazyloadBackgroundObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "200px 0px 200px 0px" }
  );
  lazyloadBackgrounds.forEach(lazyloadBackground => {
    lazyloadBackgroundObserver.observe(lazyloadBackground);
  });
};
const events = ["DOMContentLoaded", "elementor/lazyload/observe"];
events.forEach(event => {
  document.addEventListener(event, lazyloadRunObserver);
});
var cffOptions = {
  placeholder:
    "https://taj777news.com/wp-content/plugins/custom-facebook-feed/assets/img/placeholder.png"
};
var cff_js_exists = typeof cff_js_exists !== "undefined" ? !0 : !1;
if (!cff_js_exists) {
  if (jQuery("#cff.cff-masonry-js").length) {
    !(function(a) {
      function b() {}
      function c(a) {
        function c(b) {
          b.prototype.option ||
            (b.prototype.option = function(b) {
              a.isPlainObject(b) &&
                (this.options = a.extend(!0, this.options, b));
            });
        }
        function e(b, c) {
          a.fn[b] = function(e) {
            if ("string" == typeof e) {
              for (
                var g = d.call(arguments, 1), h = 0, i = this.length;
                i > h;
                h++
              ) {
                var j = this[h],
                  k = a.data(j, b);
                if (k)
                  if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                    var l = k[e].apply(k, g);
                    if (void 0 !== l) return l;
                  } else f("no such method '" + e + "' for " + b + " instance");
                else
                  f(
                    "cannot call methods on " +
                      b +
                      " prior to initialization; attempted to call '" +
                      e +
                      "'"
                  );
              }
              return this;
            }
            return this.each(function() {
              var d = a.data(this, b);
              d
                ? (d.option(e), d._init())
                : ((d = new c(this, e)), a.data(this, b, d));
            });
          };
        }
        if (a) {
          var f =
            "undefined" == typeof console
              ? b
              : function(a) {
                  console.error(a);
                };
          return (a.bridget = function(a, b) {
            c(b), e(a, b);
          }), a.bridget;
        }
      }
      var d = Array.prototype.slice;
      "function" == typeof define && define.amd
        ? define("jquery-bridget/jquery.bridget", ["jquery"], c)
        : c("object" == typeof exports ? require("jquery") : a.jQuery);
    })(window), (function(a) {
      function b(b) {
        var c = a.event;
        return (c.target = c.target || c.srcElement || b), c;
      }
      var c = document.documentElement,
        d = function() {};
      c.addEventListener
        ? (d = function(a, b, c) {
            a.addEventListener(b, c, !1);
          })
        : c.attachEvent &&
          (d = function(a, c, d) {
            (a[c + d] = d.handleEvent
              ? function() {
                  var c = b(a);
                  d.handleEvent.call(d, c);
                }
              : function() {
                  var c = b(a);
                  d.call(a, c);
                }), a.attachEvent("on" + c, a[c + d]);
          });
      var e = function() {};
      c.removeEventListener
        ? (e = function(a, b, c) {
            a.removeEventListener(b, c, !1);
          })
        : c.detachEvent &&
          (e = function(a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
              delete a[b + c];
            } catch (d) {
              a[b + c] = void 0;
            }
          });
      var f = { bind: d, unbind: e };
      "function" == typeof define && define.amd
        ? define("eventie/eventie", f)
        : "object" == typeof exports ? (module.exports = f) : (a.eventie = f);
    })(window), function() {
      function a() {}
      function b(a, b) {
        for (var c = a.length; c--; ) if (a[c].listener === b) return c;
        return -1;
      }
      function c(a) {
        return function() {
          return this[a].apply(this, arguments);
        };
      }
      var d = a.prototype,
        e = this,
        f = e.EventEmitter;
      (d.getListeners = function(a) {
        var b,
          c,
          d = this._getEvents();
        if (a instanceof RegExp) {
          b = {};
          for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c]);
        } else b = d[a] || (d[a] = []);
        return b;
      }), (d.flattenListeners = function(a) {
        var b,
          c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c;
      }), (d.getListenersAsObject = function(a) {
        var b,
          c = this.getListeners(a);
        return c instanceof Array && ((b = {}), (b[a] = c)), b || c;
      }), (d.addListener = function(a, c) {
        var d,
          e = this.getListenersAsObject(a),
          f = "object" == typeof c;
        for (d in e)
          e.hasOwnProperty(d) &&
            -1 === b(e[d], c) &&
            e[d].push(f ? c : { listener: c, once: !1 });
        return this;
      }), (d.on = c("addListener")), (d.addOnceListener = function(a, b) {
        return this.addListener(a, { listener: b, once: !0 });
      }), (d.once = c("addOnceListener")), (d.defineEvent = function(a) {
        return this.getListeners(a), this;
      }), (d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this;
      }), (d.removeListener = function(a, c) {
        var d,
          e,
          f = this.getListenersAsObject(a);
        for (e in f)
          f.hasOwnProperty(e) &&
            ((d = b(f[e], c)), -1 !== d && f[e].splice(d, 1));
        return this;
      }), (d.off = c("removeListener")), (d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b);
      }), (d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b);
      }), (d.manipulateListeners = function(a, b, c) {
        var d,
          e,
          f = a ? this.removeListener : this.addListener,
          g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
          for (d = c.length; d--; ) f.call(this, b, c[d]);
        else
          for (d in b)
            b.hasOwnProperty(d) &&
              (e = b[d]) &&
              ("function" == typeof e
                ? f.call(this, d, e)
                : g.call(this, d, e));
        return this;
      }), (d.removeEvent = function(a) {
        var b,
          c = typeof a,
          d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp)
          for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this;
      }), (d.removeAllListeners = c("removeEvent")), (d.emitEvent = function(
        a,
        b
      ) {
        var c,
          d,
          e,
          f,
          g = this.getListenersAsObject(a);
        for (e in g)
          if (g.hasOwnProperty(e))
            for (d = g[e].length; d--; )
              (c = g[e][d]), c.once === !0 &&
                this.removeListener(a, c.listener), (f = c.listener.apply(
                this,
                b || []
              )), f === this._getOnceReturnValue() &&
                this.removeListener(a, c.listener);
        return this;
      }), (d.trigger = c("emitEvent")), (d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b);
      }), (d.setOnceReturnValue = function(a) {
        return (this._onceReturnValue = a), this;
      }), (d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue")
          ? this._onceReturnValue
          : !0;
      }), (d._getEvents = function() {
        return this._events || (this._events = {});
      }), (a.noConflict = function() {
        return (e.EventEmitter = f), a;
      }), "function" == typeof define && define.amd
        ? define("eventEmitter/EventEmitter", [], function() {
            return a;
          })
        : "object" == typeof module && module.exports
          ? (module.exports = a)
          : (e.EventEmitter = a);
    }.call(this), (function(a) {
      function b(a) {
        if (a) {
          if ("string" == typeof d[a]) return a;
          a = a.charAt(0).toUpperCase() + a.slice(1);
          for (var b, e = 0, f = c.length; f > e; e++)
            if (((b = c[e] + a), "string" == typeof d[b])) return b;
        }
      }
      var c = "Webkit Moz ms Ms O".split(" "),
        d = document.documentElement.style;
      "function" == typeof define && define.amd
        ? define("get-style-property/get-style-property", [], function() {
            return b;
          })
        : "object" == typeof exports
          ? (module.exports = b)
          : (a.getStyleProperty = b);
    })(window), (function(a) {
      function b(a) {
        var b = parseFloat(a),
          c = -1 === a.indexOf("%") && !isNaN(b);
        return c && b;
      }
      function c() {}
      function d() {
        for (
          var a = {
              width: 0,
              height: 0,
              innerWidth: 0,
              innerHeight: 0,
              outerWidth: 0,
              outerHeight: 0
            },
            b = 0,
            c = g.length;
          c > b;
          b++
        ) {
          var d = g[b];
          a[d] = 0;
        }
        return a;
      }
      function e(c) {
        function e() {
          if (!m) {
            m = !0;
            var d = a.getComputedStyle;
            if (
              (
                (j = (function() {
                  var a = d
                    ? function(a) {
                        return d(a, null);
                      }
                    : function(a) {
                        return a.currentStyle;
                      };
                  return function(b) {
                    var c = a(b);
                    return c ||
                      f(
                        "Style returned " +
                          c +
                          ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
                      ), c;
                  };
                })()),
                (k = c("boxSizing"))
              )
            ) {
              var e = document.createElement("div");
              (e.style.width = "200px"), (e.style.padding =
                "1px 2px 3px 4px"), (e.style.borderStyle =
                "solid"), (e.style.borderWidth = "1px 2px 3px 4px"), (e.style[
                k
              ] =
                "border-box");
              var g = document.body || document.documentElement;
              g.appendChild(e);
              var h = j(e);
              (l = 200 === b(h.width)), g.removeChild(e);
            }
          }
        }
        function h(a) {
          if (
            (
              e(),
              "string" == typeof a && (a = document.querySelector(a)),
              a && "object" == typeof a && a.nodeType
            )
          ) {
            var c = j(a);
            if ("none" === c.display) return d();
            var f = {};
            (f.width = a.offsetWidth), (f.height = a.offsetHeight);
            for (
              var h = (f.isBorderBox = !(!k || !c[k] || "border-box" !== c[k])),
                m = 0,
                n = g.length;
              n > m;
              m++
            ) {
              var o = g[m],
                p = c[o];
              p = i(a, p);
              var q = parseFloat(p);
              f[o] = isNaN(q) ? 0 : q;
            }
            var r = f.paddingLeft + f.paddingRight,
              s = f.paddingTop + f.paddingBottom,
              t = f.marginLeft + f.marginRight,
              u = f.marginTop + f.marginBottom,
              v = f.borderLeftWidth + f.borderRightWidth,
              w = f.borderTopWidth + f.borderBottomWidth,
              x = h && l,
              y = b(c.width);
            y !== !1 && (f.width = y + (x ? 0 : r + v));
            var z = b(c.height);
            return z !== !1 && (f.height = z + (x ? 0 : s + w)), (f.innerWidth =
              f.width - (r + v)), (f.innerHeight =
              f.height - (s + w)), (f.outerWidth =
              f.width + t), (f.outerHeight = f.height + u), f;
          }
        }
        function i(b, c) {
          if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
          var d = b.style,
            e = d.left,
            f = b.runtimeStyle,
            g = f && f.left;
          return g && (f.left = b.currentStyle.left), (d.left = c), (c =
            d.pixelLeft), (d.left = e), g && (f.left = g), c;
        }
        var j,
          k,
          l,
          m = !1;
        return h;
      }
      var f =
          "undefined" == typeof console
            ? c
            : function(a) {
                console.error(a);
              },
        g = [
          "paddingLeft",
          "paddingRight",
          "paddingTop",
          "paddingBottom",
          "marginLeft",
          "marginRight",
          "marginTop",
          "marginBottom",
          "borderLeftWidth",
          "borderRightWidth",
          "borderTopWidth",
          "borderBottomWidth"
        ];
      "function" == typeof define && define.amd
        ? define(
            "get-size/get-size",
            ["get-style-property/get-style-property"],
            e
          )
        : "object" == typeof exports
          ? (module.exports = e(require("desandro-get-style-property")))
          : (a.getSize = e(a.getStyleProperty));
    })(window), (function(a) {
      function b(a) {
        "function" == typeof a && (b.isReady ? a() : g.push(a));
      }
      function c(a) {
        var c = "readystatechange" === a.type && "complete" !== f.readyState;
        b.isReady || c || d();
      }
      function d() {
        b.isReady = !0;
        for (var a = 0, c = g.length; c > a; a++) {
          var d = g[a];
          d();
        }
      }
      function e(e) {
        return "complete" === f.readyState
          ? d()
          : (
              e.bind(f, "DOMContentLoaded", c),
              e.bind(f, "readystatechange", c),
              e.bind(a, "load", c)
            ), b;
      }
      var f = a.document,
        g = [];
      (b.isReady = !1), "function" == typeof define && define.amd
        ? define("doc-ready/doc-ready", ["eventie/eventie"], e)
        : "object" == typeof exports
          ? (module.exports = e(require("eventie")))
          : (a.docReady = e(a.eventie));
    })(window), (function(a) {
      function b(a, b) {
        return a[g](b);
      }
      function c(a) {
        if (!a.parentNode) {
          var b = document.createDocumentFragment();
          b.appendChild(a);
        }
      }
      function d(a, b) {
        c(a);
        for (
          var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length;
          f > e;
          e++
        )
          if (d[e] === a) return !0;
        return !1;
      }
      function e(a, d) {
        return c(a), b(a, d);
      }
      var f,
        g = (function() {
          if (a.matches) return "matches";
          if (a.matchesSelector) return "matchesSelector";
          for (
            var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length;
            d > c;
            c++
          ) {
            var e = b[c],
              f = e + "MatchesSelector";
            if (a[f]) return f;
          }
        })();
      if (g) {
        var h = document.createElement("div"),
          i = b(h, "div");
        f = i ? b : e;
      } else f = d;
      "function" == typeof define && define.amd
        ? define("matches-selector/matches-selector", [], function() {
            return f;
          })
        : "object" == typeof exports
          ? (module.exports = f)
          : (window.matchesSelector = f);
    })(Element.prototype), (function(a, b) {
      "function" == typeof define && define.amd
        ? define(
            "fizzy-ui-utils/utils",
            ["doc-ready/doc-ready", "matches-selector/matches-selector"],
            function(c, d) {
              return b(a, c, d);
            }
          )
        : "object" == typeof exports
          ? (module.exports = b(
              a,
              require("doc-ready"),
              require("desandro-matches-selector")
            ))
          : (a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector));
    })(window, function(a, b, c) {
      var d = {};
      (d.extend = function(a, b) {
        for (var c in b) a[c] = b[c];
        return a;
      }), (d.modulo = function(a, b) {
        return (a % b + b) % b;
      });
      var e = Object.prototype.toString;
      (d.isArray = function(a) {
        return "[object Array]" == e.call(a);
      }), (d.makeArray = function(a) {
        var b = [];
        if (d.isArray(a)) b = a;
        else if (a && "number" == typeof a.length)
          for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
        else b.push(a);
        return b;
      }), (d.indexOf = Array.prototype.indexOf
        ? function(a, b) {
            return a.indexOf(b);
          }
        : function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
          }), (d.removeFrom = function(a, b) {
        var c = d.indexOf(a, b);
        -1 != c && a.splice(c, 1);
      }), (d.isElement =
        "function" == typeof HTMLElement || "object" == typeof HTMLElement
          ? function(a) {
              return a instanceof HTMLElement;
            }
          : function(a) {
              return (
                a &&
                "object" == typeof a &&
                1 == a.nodeType &&
                "string" == typeof a.nodeName
              );
            }), (d.setText = (function() {
        function a(a, c) {
          (b =
            b ||
            (void 0 !== document.documentElement.textContent
              ? "textContent"
              : "innerText")), (a[b] = c);
        }
        var b;
        return a;
      })()), (d.getParent = function(a, b) {
        for (; a != document.body; )
          if (((a = a.parentNode), c(a, b))) return a;
      }), (d.getQueryElement = function(a) {
        return "string" == typeof a ? document.querySelector(a) : a;
      }), (d.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a);
      }), (d.filterFindElements = function(a, b) {
        a = d.makeArray(a);
        for (var e = [], f = 0, g = a.length; g > f; f++) {
          var h = a[f];
          if (d.isElement(h))
            if (b) {
              c(h, b) && e.push(h);
              for (
                var i = h.querySelectorAll(b), j = 0, k = i.length;
                k > j;
                j++
              )
                e.push(i[j]);
            } else e.push(h);
        }
        return e;
      }), (d.debounceMethod = function(a, b, c) {
        var d = a.prototype[b],
          e = b + "Timeout";
        a.prototype[b] = function() {
          var a = this[e];
          a && clearTimeout(a);
          var b = arguments,
            f = this;
          this[e] = setTimeout(function() {
            d.apply(f, b), delete f[e];
          }, c || 100);
        };
      }), (d.toDashed = function(a) {
        return a
          .replace(/(.)([A-Z])/g, function(a, b, c) {
            return b + "-" + c;
          })
          .toLowerCase();
      });
      var f = a.console;
      return (d.htmlInit = function(c, e) {
        b(function() {
          for (
            var b = d.toDashed(e),
              g = document.querySelectorAll(".js-" + b),
              h = "data-" + b + "-options",
              i = 0,
              j = g.length;
            j > i;
            i++
          ) {
            var k,
              l = g[i],
              m = l.getAttribute(h);
            try {
              k = m && JSON.parse(m);
            } catch (n) {
              f &&
                f.error(
                  "Error parsing " +
                    h +
                    " on " +
                    l.nodeName.toLowerCase() +
                    (l.id ? "#" + l.id : "") +
                    ": " +
                    n
                );
              continue;
            }
            var o = new c(l, k),
              p = a.jQuery;
            p && p.data(l, e, o);
          }
        });
      }), d;
    }), (function(a, b) {
      "function" == typeof define && define.amd
        ? define(
            "outlayer/item",
            [
              "eventEmitter/EventEmitter",
              "get-size/get-size",
              "get-style-property/get-style-property",
              "fizzy-ui-utils/utils"
            ],
            function(c, d, e, f) {
              return b(a, c, d, e, f);
            }
          )
        : "object" == typeof exports
          ? (module.exports = b(
              a,
              require("wolfy87-eventemitter"),
              require("get-size"),
              require("desandro-get-style-property"),
              require("fizzy-ui-utils")
            ))
          : (
              (a.Outlayer = {}),
              (a.Outlayer.Item = b(
                a,
                a.EventEmitter,
                a.getSize,
                a.getStyleProperty,
                a.fizzyUIUtils
              ))
            );
    })(window, function(a, b, c, d, e) {
      function f(a) {
        for (var b in a) return !1;
        return (b = null), !0;
      }
      function g(a, b) {
        a &&
          (
            (this.element = a),
            (this.layout = b),
            (this.position = { x: 0, y: 0 }),
            this._create()
          );
      }
      var h = a.getComputedStyle,
        i = h
          ? function(a) {
              return h(a, null);
            }
          : function(a) {
              return a.currentStyle;
            },
        j = d("transition"),
        k = d("transform"),
        l = j && k,
        m = !!d("perspective"),
        n = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "otransitionend",
          transition: "transitionend"
        }[j],
        o = [
          "transform",
          "transition",
          "transitionDuration",
          "transitionProperty"
        ],
        p = (function() {
          for (var a = {}, b = 0, c = o.length; c > b; b++) {
            var e = o[b],
              f = d(e);
            f && f !== e && (a[e] = f);
          }
          return a;
        })();
      e.extend(g.prototype, b.prototype), (g.prototype._create = function() {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({
          position: "absolute"
        });
      }), (g.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a);
      }), (g.prototype.getSize = function() {
        this.size = c(this.element);
      }), (g.prototype.css = function(a) {
        var b = this.element.style;
        for (var c in a) {
          var d = p[c] || c;
          b[d] = a[c];
        }
      }), (g.prototype.getPosition = function() {
        var a = i(this.element),
          b = this.layout.options,
          c = b.isOriginLeft,
          d = b.isOriginTop,
          e = parseInt(a[c ? "left" : "right"], 10),
          f = parseInt(a[d ? "top" : "bottom"], 10);
        (e = isNaN(e) ? 0 : e), (f = isNaN(f) ? 0 : f);
        var g = this.layout.size;
        (e -= c ? g.paddingLeft : g.paddingRight), (f -= d
          ? g.paddingTop
          : g.paddingBottom), (this.position.x = e), (this.position.y = f);
      }), (g.prototype.layoutPosition = function() {
        var a = this.layout.size,
          b = this.layout.options,
          c = {},
          d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
          e = b.isOriginLeft ? "left" : "right",
          f = b.isOriginLeft ? "right" : "left",
          g = this.position.x + a[d];
        (g =
          b.percentPosition && !b.isHorizontal
            ? g / a.width * 100 + "%"
            : g + "px"), (c[e] = g), (c[f] = "");
        var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
          i = b.isOriginTop ? "top" : "bottom",
          j = b.isOriginTop ? "bottom" : "top",
          k = this.position.y + a[h];
        (k =
          b.percentPosition && b.isHorizontal
            ? k / a.height * 100 + "%"
            : k + "px"), (c[i] = k), (c[j] = ""), this.css(
          c
        ), this.emitEvent("layout", [this]);
      });
      var q = m
        ? function(a, b) {
            return "translate3d(" + a + "px, " + b + "px, 0)";
          }
        : function(a, b) {
            return "translate(" + a + "px, " + b + "px)";
          };
      (g.prototype._transitionTo = function(a, b) {
        this.getPosition();
        var c = this.position.x,
          d = this.position.y,
          e = parseInt(a, 10),
          f = parseInt(b, 10),
          g = e === this.position.x && f === this.position.y;
        if ((this.setPosition(a, b), g && !this.isTransitioning))
          return void this.layoutPosition();
        var h = a - c,
          i = b - d,
          j = {},
          k = this.layout.options;
        (h = k.isOriginLeft ? h : -h), (i = k.isOriginTop
          ? i
          : -i), (j.transform = q(h, i)), this.transition({
          to: j,
          onTransitionEnd: { transform: this.layoutPosition },
          isCleaning: !0
        });
      }), (g.prototype.goTo = function(a, b) {
        this.setPosition(a, b), this.layoutPosition();
      }), (g.prototype.moveTo = l ? g.prototype._transitionTo : g.prototype.goTo), (g.prototype.setPosition = function(
        a,
        b
      ) {
        (this.position.x = parseInt(a, 10)), (this.position.y = parseInt(
          b,
          10
        ));
      }), (g.prototype._nonTransition = function(a) {
        this.css(a.to), a.isCleaning && this._removeStyles(a.to);
        for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this);
      }), (g.prototype._transition = function(a) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(a);
        var b = this._transn;
        for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
        for (c in a.to)
          (b.ingProperties[c] = !0), a.isCleaning && (b.clean[c] = !0);
        if (a.from) {
          this.css(a.from);
          var d = this.element.offsetHeight;
          d = null;
        }
        this.enableTransition(a.to), this.css(
          a.to
        ), (this.isTransitioning = !0);
      });
      var r = k && e.toDashed(k) + ",opacity";
      (g.prototype.enableTransition = function() {
        this.isTransitioning ||
          (
            this.css({
              transitionProperty: r,
              transitionDuration: this.layout.options.transitionDuration
            }),
            this.element.addEventListener(n, this, !1)
          );
      }), (g.prototype.transition = g.prototype[j ? "_transition" : "_nonTransition"]), (g.prototype.onwebkitTransitionEnd = function(
        a
      ) {
        this.ontransitionend(a);
      }), (g.prototype.onotransitionend = function(a) {
        this.ontransitionend(a);
      });
      var s = {
        "-webkit-transform": "transform",
        "-moz-transform": "transform",
        "-o-transform": "transform"
      };
      (g.prototype.ontransitionend = function(a) {
        if (a.target === this.element) {
          var b = this._transn,
            c = s[a.propertyName] || a.propertyName;
          if (
            (
              delete b.ingProperties[c],
              f(b.ingProperties) && this.disableTransition(),
              c in b.clean &&
                ((this.element.style[a.propertyName] = ""), delete b.clean[c]),
              c in b.onEnd
            )
          ) {
            var d = b.onEnd[c];
            d.call(this), delete b.onEnd[c];
          }
          this.emitEvent("transitionEnd", [this]);
        }
      }), (g.prototype.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(
          n,
          this,
          !1
        ), (this.isTransitioning = !1);
      }), (g.prototype._removeStyles = function(a) {
        var b = {};
        for (var c in a) b[c] = "";
        this.css(b);
      });
      var t = { transitionProperty: "", transitionDuration: "" };
      return (g.prototype.removeTransitionStyles = function() {
        this.css(t);
      }), (g.prototype.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
          display: ""
        }), this.emitEvent("remove", [this]);
      }), (g.prototype.remove = function() {
        if (!j || !parseFloat(this.layout.options.transitionDuration))
          return void this.removeElem();
        var a = this;
        this.once("transitionEnd", function() {
          a.removeElem();
        }), this.hide();
      }), (g.prototype.reveal = function() {
        delete this.isHidden, this.css({ display: "" });
        var a = this.layout.options,
          b = {},
          c = this.getHideRevealTransitionEndProperty("visibleStyle");
        (b[c] = this.onRevealTransitionEnd), this.transition({
          from: a.hiddenStyle,
          to: a.visibleStyle,
          isCleaning: !0,
          onTransitionEnd: b
        });
      }), (g.prototype.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal");
      }), (g.prototype.getHideRevealTransitionEndProperty = function(a) {
        var b = this.layout.options[a];
        if (b.opacity) return "opacity";
        for (var c in b) return c;
      }), (g.prototype.hide = function() {
        (this.isHidden = !0), this.css({ display: "" });
        var a = this.layout.options,
          b = {},
          c = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (b[c] = this.onHideTransitionEnd), this.transition({
          from: a.visibleStyle,
          to: a.hiddenStyle,
          isCleaning: !0,
          onTransitionEnd: b
        });
      }), (g.prototype.onHideTransitionEnd = function() {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }), (g.prototype.destroy = function() {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: ""
        });
      }), g;
    }), (function(a, b) {
      "function" == typeof define && define.amd
        ? define(
            "outlayer/outlayer",
            [
              "eventie/eventie",
              "eventEmitter/EventEmitter",
              "get-size/get-size",
              "fizzy-ui-utils/utils",
              "./item"
            ],
            function(c, d, e, f, g) {
              return b(a, c, d, e, f, g);
            }
          )
        : "object" == typeof exports
          ? (module.exports = b(
              a,
              require("eventie"),
              require("wolfy87-eventemitter"),
              require("get-size"),
              require("fizzy-ui-utils"),
              require("./item")
            ))
          : (a.Outlayer = b(
              a,
              a.eventie,
              a.EventEmitter,
              a.getSize,
              a.fizzyUIUtils,
              a.Outlayer.Item
            ));
    })(window, function(a, b, c, d, e, f) {
      function g(a, b) {
        var c = e.getQueryElement(a);
        if (!c)
          return void (
            h &&
            h.error(
              "Bad element for " + this.constructor.namespace + ": " + (c || a)
            )
          );
        (this.element = c), i && (this.$element = i(this.element)), (this.options = e.extend({}, this.constructor.defaults)), this.option(b);
        var d = ++k;
        (this.element.outlayerGUID = d), (l[d] = this), this._create(), this.options.isInitLayout && this.layout();
      }
      var h = a.console,
        i = a.jQuery,
        j = function() {},
        k = 0,
        l = {};
      return (g.namespace =
        "outlayer"), (g.Item = f), (g.defaults = { containerStyle: { position: "relative" }, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }), e.extend(g.prototype, c.prototype), (g.prototype.option = function(
        a
      ) {
        e.extend(this.options, a);
      }), (g.prototype._create = function() {
        this.reloadItems(), (this.stamps = []), this.stamp(
          this.options.stamp
        ), e.extend(this.element.style, this.options.containerStyle), this
          .options.isResizeBound && this.bindResize();
      }), (g.prototype.reloadItems = function() {
        this.items = this._itemize(this.element.children);
      }), (g.prototype._itemize = function(a) {
        for (
          var b = this._filterFindItemElements(a),
            c = this.constructor.Item,
            d = [],
            e = 0,
            f = b.length;
          f > e;
          e++
        ) {
          var g = b[e],
            h = new c(g, this);
          d.push(h);
        }
        return d;
      }), (g.prototype._filterFindItemElements = function(a) {
        return e.filterFindElements(a, this.options.itemSelector);
      }), (g.prototype.getItemElements = function() {
        for (var a = [], b = 0, c = this.items.length; c > b; b++)
          a.push(this.items[b].element);
        return a;
      }), (g.prototype.layout = function() {
        this._resetLayout(), this._manageStamps();
        var a =
          void 0 !== this.options.isLayoutInstant
            ? this.options.isLayoutInstant
            : !this._isLayoutInited;
        this.layoutItems(this.items, a), (this._isLayoutInited = !0);
      }), (g.prototype._init = g.prototype.layout), (g.prototype._resetLayout = function() {
        this.getSize();
      }), (g.prototype.getSize = function() {
        this.size = d(this.element);
      }), (g.prototype._getMeasurement = function(a, b) {
        var c,
          f = this.options[a];
        f
          ? (
              "string" == typeof f
                ? (c = this.element.querySelector(f))
                : e.isElement(f) && (c = f),
              (this[a] = c ? d(c)[b] : f)
            )
          : (this[a] = 0);
      }), (g.prototype.layoutItems = function(a, b) {
        (a = this._getItemsForLayout(a)), this._layoutItems(
          a,
          b
        ), this._postLayout();
      }), (g.prototype._getItemsForLayout = function(a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
          var e = a[c];
          e.isIgnored || b.push(e);
        }
        return b;
      }), (g.prototype._layoutItems = function(a, b) {
        if ((this._emitCompleteOnItems("layout", a), a && a.length)) {
          for (var c = [], d = 0, e = a.length; e > d; d++) {
            var f = a[d],
              g = this._getItemLayoutPosition(f);
            (g.item = f), (g.isInstant = b || f.isLayoutInstant), c.push(g);
          }
          this._processLayoutQueue(c);
        }
      }), (g.prototype._getItemLayoutPosition = function() {
        return { x: 0, y: 0 };
      }), (g.prototype._processLayoutQueue = function(a) {
        for (var b = 0, c = a.length; c > b; b++) {
          var d = a[b];
          this._positionItem(d.item, d.x, d.y, d.isInstant);
        }
      }), (g.prototype._positionItem = function(a, b, c, d) {
        d ? a.goTo(b, c) : a.moveTo(b, c);
      }), (g.prototype._postLayout = function() {
        this.resizeContainer();
      }), (g.prototype.resizeContainer = function() {
        if (this.options.isResizingContainer) {
          var a = this._getContainerSize();
          a &&
            (
              this._setContainerMeasure(a.width, !0),
              this._setContainerMeasure(a.height, !1)
            );
        }
      }), (g.prototype._getContainerSize = j), (g.prototype._setContainerMeasure = function(
        a,
        b
      ) {
        if (void 0 !== a) {
          var c = this.size;
          c.isBorderBox &&
            (a += b
              ? c.paddingLeft +
                c.paddingRight +
                c.borderLeftWidth +
                c.borderRightWidth
              : c.paddingBottom +
                c.paddingTop +
                c.borderTopWidth +
                c.borderBottomWidth), (a = Math.max(a, 0)), (this.element.style[
            b ? "width" : "height"
          ] =
            a + "px");
        }
      }), (g.prototype._emitCompleteOnItems = function(a, b) {
        function c() {
          e.emitEvent(a + "Complete", [b]);
        }
        function d() {
          g++, g === f && c();
        }
        var e = this,
          f = b.length;
        if (!b || !f) return void c();
        for (var g = 0, h = 0, i = b.length; i > h; h++) {
          var j = b[h];
          j.once(a, d);
        }
      }), (g.prototype.ignore = function(a) {
        var b = this.getItem(a);
        b && (b.isIgnored = !0);
      }), (g.prototype.unignore = function(a) {
        var b = this.getItem(a);
        b && delete b.isIgnored;
      }), (g.prototype.stamp = function(a) {
        if ((a = this._find(a))) {
          this.stamps = this.stamps.concat(a);
          for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            this.ignore(d);
          }
        }
      }), (g.prototype.unstamp = function(a) {
        if ((a = this._find(a)))
          for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            e.removeFrom(this.stamps, d), this.unignore(d);
          }
      }), (g.prototype._find = function(a) {
        return a
          ? (
              "string" == typeof a && (a = this.element.querySelectorAll(a)),
              (a = e.makeArray(a))
            )
          : void 0;
      }), (g.prototype._manageStamps = function() {
        if (this.stamps && this.stamps.length) {
          this._getBoundingRect();
          for (var a = 0, b = this.stamps.length; b > a; a++) {
            var c = this.stamps[a];
            this._manageStamp(c);
          }
        }
      }), (g.prototype._getBoundingRect = function() {
        var a = this.element.getBoundingClientRect(),
          b = this.size;
        this._boundingRect = {
          left: a.left + b.paddingLeft + b.borderLeftWidth,
          top: a.top + b.paddingTop + b.borderTopWidth,
          right: a.right - (b.paddingRight + b.borderRightWidth),
          bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
        };
      }), (g.prototype._manageStamp = j), (g.prototype._getElementOffset = function(
        a
      ) {
        var b = a.getBoundingClientRect(),
          c = this._boundingRect,
          e = d(a),
          f = {
            left: b.left - c.left - e.marginLeft,
            top: b.top - c.top - e.marginTop,
            right: c.right - b.right - e.marginRight,
            bottom: c.bottom - b.bottom - e.marginBottom
          };
        return f;
      }), (g.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a);
      }), (g.prototype.bindResize = function() {
        this.isResizeBound ||
          (b.bind(a, "resize", this), (this.isResizeBound = !0));
      }), (g.prototype.unbindResize = function() {
        this.isResizeBound &&
          b.unbind(a, "resize", this), (this.isResizeBound = !1);
      }), (g.prototype.onresize = function() {
        function a() {
          b.resize(), delete b.resizeTimeout;
        }
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var b = this;
        this.resizeTimeout = setTimeout(a, 100);
      }), (g.prototype.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }), (g.prototype.needsResizeLayout = function() {
        var a = d(this.element),
          b = this.size && a;
        return b && a.innerWidth !== this.size.innerWidth;
      }), (g.prototype.addItems = function(a) {
        var b = this._itemize(a);
        return b.length && (this.items = this.items.concat(b)), b;
      }), (g.prototype.appended = function(a) {
        var b = this.addItems(a);
        b.length && (this.layoutItems(b, !0), this.reveal(b));
      }), (g.prototype.prepended = function(a) {
        var b = this._itemize(a);
        if (b.length) {
          var c = this.items.slice(0);
          (this.items = b.concat(
            c
          )), this._resetLayout(), this._manageStamps(), this.layoutItems(
            b,
            !0
          ), this.reveal(b), this.layoutItems(c);
        }
      }), (g.prototype.reveal = function(a) {
        this._emitCompleteOnItems("reveal", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
          var d = a[c];
          d.reveal();
        }
      }), (g.prototype.hide = function(a) {
        this._emitCompleteOnItems("hide", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
          var d = a[c];
          d.hide();
        }
      }), (g.prototype.revealItemElements = function(a) {
        var b = this.getItems(a);
        this.reveal(b);
      }), (g.prototype.hideItemElements = function(a) {
        var b = this.getItems(a);
        this.hide(b);
      }), (g.prototype.getItem = function(a) {
        for (var b = 0, c = this.items.length; c > b; b++) {
          var d = this.items[b];
          if (d.element === a) return d;
        }
      }), (g.prototype.getItems = function(a) {
        a = e.makeArray(a);
        for (var b = [], c = 0, d = a.length; d > c; c++) {
          var f = a[c],
            g = this.getItem(f);
          g && b.push(g);
        }
        return b;
      }), (g.prototype.remove = function(a) {
        var b = this.getItems(a);
        if ((this._emitCompleteOnItems("remove", b), b && b.length))
          for (var c = 0, d = b.length; d > c; c++) {
            var f = b[c];
            f.remove(), e.removeFrom(this.items, f);
          }
      }), (g.prototype.destroy = function() {
        var a = this.element.style;
        (a.height = ""), (a.position = ""), (a.width = "");
        for (var b = 0, c = this.items.length; c > b; b++) {
          var d = this.items[b];
          d.destroy();
        }
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete l[e], delete this.element.outlayerGUID, i &&
          i.removeData(this.element, this.constructor.namespace);
      }), (g.data = function(a) {
        a = e.getQueryElement(a);
        var b = a && a.outlayerGUID;
        return b && l[b];
      }), (g.create = function(a, b) {
        function c() {
          g.apply(this, arguments);
        }
        return Object.create
          ? (c.prototype = Object.create(g.prototype))
          : e.extend(
              c.prototype,
              g.prototype
            ), (c.prototype.constructor = c), (c.defaults = e.extend(
          {},
          g.defaults
        )), e.extend(
          c.defaults,
          b
        ), (c.prototype.settings = {}), (c.namespace = a), (c.data =
          g.data), (c.Item = function() {
          f.apply(this, arguments);
        }), (c.Item.prototype = new f()), e.htmlInit(c, a), i &&
          i.bridget &&
          i.bridget(a, c), c;
      }), (g.Item = f), g;
    }), (function(a, b) {
      "function" == typeof define && define.amd
        ? define(
            ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"],
            b
          )
        : "object" == typeof exports
          ? (module.exports = b(
              require("outlayer"),
              require("get-size"),
              require("fizzy-ui-utils")
            ))
          : (a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils));
    })(window, function(a, b, c) {
      var d = a.create("masonry");
      return (d.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurement(
          "columnWidth",
          "outerWidth"
        ), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
        var a = this.cols;
        for (this.colYs = []; a--; ) this.colYs.push(0);
        this.maxY = 0;
      }), (d.prototype.measureColumns = function() {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var a = this.items[0],
            c = a && a.element;
          this.columnWidth = (c && b(c).outerWidth) || this.containerWidth;
        }
        var d = (this.columnWidth += this.gutter),
          e = this.containerWidth + this.gutter,
          f = e / d,
          g = d - e % d,
          h = g && 1 > g ? "round" : "floor";
        (f = Math[h](f)), (this.cols = Math.max(f, 1));
      }), (d.prototype.getContainerWidth = function() {
        var a = this.options.isFitWidth
            ? this.element.parentNode
            : this.element,
          c = b(a);
        this.containerWidth = c && c.innerWidth;
      }), (d.prototype._getItemLayoutPosition = function(a) {
        a.getSize();
        var b = a.size.outerWidth % this.columnWidth,
          d = b && 1 > b ? "round" : "ceil",
          e = Math[d](a.size.outerWidth / this.columnWidth);
        e = Math.min(e, this.cols);
        for (
          var f = this._getColGroup(e),
            g = Math.min.apply(Math, f),
            h = c.indexOf(f, g),
            i = { x: this.columnWidth * h, y: g },
            j = g + a.size.outerHeight,
            k = this.cols + 1 - f.length,
            l = 0;
          k > l;
          l++
        )
          this.colYs[h + l] = j;
        return i;
      }), (d.prototype._getColGroup = function(a) {
        if (2 > a) return this.colYs;
        for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
          var e = this.colYs.slice(d, d + a);
          b[d] = Math.max.apply(Math, e);
        }
        return b;
      }), (d.prototype._manageStamp = function(a) {
        var c = b(a),
          d = this._getElementOffset(a),
          e = this.options.isOriginLeft ? d.left : d.right,
          f = e + c.outerWidth,
          g = Math.floor(e / this.columnWidth);
        g = Math.max(0, g);
        var h = Math.floor(f / this.columnWidth);
        (h -= f % this.columnWidth ? 0 : 1), (h = Math.min(this.cols - 1, h));
        for (
          var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight,
            j = g;
          h >= j;
          j++
        )
          this.colYs[j] = Math.max(i, this.colYs[j]);
      }), (d.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var a = { height: this.maxY };
        return this.options.isFitWidth &&
          (a.width = this._getContainerFitWidth()), a;
      }), (d.prototype._getContainerFitWidth = function() {
        for (var a = 0, b = this.cols; --b && 0 === this.colYs[b]; ) a++;
        return (this.cols - a) * this.columnWidth - this.gutter;
      }), (d.prototype.needsResizeLayout = function() {
        var a = this.containerWidth;
        return this.getContainerWidth(), a !== this.containerWidth;
      }), d;
    });
    function cffAddMasonry($self) {
      var evt = jQuery.Event("cffbeforemasonry");
      evt.$self = $self;
      jQuery(window).trigger(evt);
      if (typeof $self.masonry !== "function") {
        return;
      }
      var windowWidth = jQuery(window).width(),
        masonryEnabled = !1;
      if (windowWidth > 800) {
        if ($self.hasClass("masonry-1-desktop")) {
          $self.addClass("cff-disable-masonry");
        } else {
          masonryEnabled = !0;
          $self
            .addClass("cff-masonry cff-masonry-js")
            .removeClass("cff-disable-masonry");
        }
      } else if (windowWidth > 480) {
        if (
          $self.hasClass("masonry-2-tablet") ||
          $self.hasClass("masonry-3-tablet") ||
          $self.hasClass("masonry-4-tablet") ||
          $self.hasClass("masonry-5-tablet") ||
          $self.hasClass("masonry-6-tablet")
        ) {
          masonryEnabled = !0;
          $self
            .addClass("cff-masonry cff-masonry-js")
            .removeClass("cff-disable-masonry");
        } else {
          $self.addClass("cff-disable-masonry");
        }
      } else {
        if (
          $self.hasClass("masonry-2-mobile") ||
          $self.hasClass("masonry-3-mobile")
        ) {
          masonryEnabled = !0;
          $self
            .addClass("cff-masonry cff-masonry-js")
            .removeClass("cff-disable-masonry");
        } else {
          $self.addClass("cff-disable-masonry");
        }
      }
      if (masonryEnabled) {
        if ($self.find(".cff-item").length) {
          var itemSelector = {
            itemSelector: ".cff-new, .cff-item, .cff-likebox"
          };
          $self.find(".cff-posts-wrap").masonry(itemSelector);
          $self.find(".cff-item").each(function() {
            jQuery(this).css("margin-bottom", "15px");
          });
        }
      }
    }
  }
  function cff_init() {
    jQuery("#cff .cff-item").each(function() {
      var $self = jQuery(this);
      if ($self.find(".cff-viewpost-facebook").parent("p").length) {
        $self.find(".cff-viewpost-facebook").unwrap("p");
      }
      if ($self.find(".cff-author").parent("p").length) {
        $self.find(".cff-author").eq(1).unwrap("p");
        $self.find(".cff-author").eq(1).remove();
      }
      if ($self.find("#cff .cff-link").parent("p").length) {
        $self.find("#cff .cff-link").unwrap("p");
      }
      var expanded = !1,
        $post_text = $self.find(".cff-post-text .cff-text"),
        text_limit = $self.closest("#cff").attr("data-char");
      if (typeof text_limit === "undefined" || text_limit == "")
        text_limit = 99999;
      var full_text = $post_text.html();
      if (full_text == undefined) full_text = "";
      var cff_trunc_regx = new RegExp(/(<[^>]*>)/g);
      var cff_trunc_counter = 0;
      full_text_arr = full_text.split(cff_trunc_regx);
      for (var i = 0, len = full_text_arr.length; i < len; i++) {
        if (!cff_trunc_regx.test(full_text_arr[i])) {
          if (cff_trunc_counter == text_limit) {
            full_text_arr.splice(i, 1);
            continue;
          }
          cff_trunc_counter = cff_trunc_counter + full_text_arr[i].length;
          if (cff_trunc_counter > text_limit) {
            var diff = cff_trunc_counter - text_limit;
            full_text_arr[i] = full_text_arr[i].slice(0, -diff);
            cff_trunc_counter = text_limit;
            if (full_text.length > text_limit) $self.find(".cff-expand").show();
          }
        }
      }
      var short_text = full_text_arr.join("");
      short_text = short_text.replace(/(<(?!\/)[^>]+>)+(<\/[^>]+>)/g, "");
      var lastChar = short_text.substr(short_text.length - 1);
      if (lastChar == "<")
        short_text = short_text.substring(0, short_text.length - 1);
      short_text = short_text.replace(/(<br>\s*)+$/, "");
      short_text = short_text.replace(/(<img class="cff-linebreak">\s*)+$/, "");
      $post_text.html(short_text);
      $self.find(".cff-expand").on("click", function(e) {
        e.preventDefault();
        var $expand = jQuery(this),
          $more = $expand.find(".cff-more"),
          $less = $expand.find(".cff-less");
        if (expanded == !1) {
          $post_text.html(full_text);
          expanded = !0;
          $more.hide();
          $less.show();
        } else {
          $post_text.html(short_text);
          expanded = !1;
          $more.show();
          $less.hide();
        }
        cffLinkHashtags();
        $post_text.find("a").attr("target", "_blank");
        if (
          $self.closest(".cff").hasClass("cff-masonry-js") &&
          !$self.closest(".cff").hasClass("cff-masonry-css")
        ) {
          cffAddMasonry($self.closest(".cff"));
        }
      });
      $post_text
        .find("a")
        .add($self.find(".cff-post-desc a"))
        .attr({ target: "_blank", rel: "nofollow" });
      $sharedLink = $self.find(".cff-shared-link");
      if ($sharedLink.text() == "") {
        $sharedLink.remove();
      }
      function cffLinkHashtags() {
        var cffTextStr = $self.find(".cff-text").html(),
          cffDescStr = $self.find(".cff-post-desc").html(),
          regex = /(^|\s)#(\w*[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]+\w*)/gi,
          linkcolor = $self.find(".cff-text").attr("data-color");
        function replacer(hash) {
          var replacementString = jQuery.trim(hash);
          if (/^#[0-9A-F]{6}$/i.test(replacementString)) {
            return replacementString;
          } else {
            return (
              ' <a href="https://www.facebook.com/hashtag/' +
              replacementString.substring(1) +
              '" target="_blank" rel="nofollow" style="color:#' +
              linkcolor +
              '">' +
              replacementString +
              "</a>"
            );
          }
        }
        if (typeof cfflinkhashtags == "undefined") cfflinkhashtags = "true";
        if (cfflinkhashtags == "true") {
          var $cffText = $self.find(".cff-text");
          if (
            $cffText.length > 0 &&
            $cffText.find(".cff-post-text-link").length == 0
          ) {
            cffTextStr = cffTextStr.replace(/<br>/g, "<br> ");
            $cffText.html(cffTextStr.replace(regex, replacer));
          }
        }
        if ($self.find(".cff-post-desc").length > 0)
          $self
            .find(".cff-post-desc")
            .html(cffDescStr.replace(regex, replacer));
      }
      cffLinkHashtags();
      $self
        .find(".cff-text a")
        .add($self.find(".cff-post-desc a"))
        .attr({ target: "_blank", rel: "nofollow noopener noreferrer" });
      $self.find(".cff-share-link").on("click", function(e) {
        e.preventDefault();
        var $cffShareTooltip = $self.find(".cff-share-tooltip");
        if ($cffShareTooltip.is(":visible")) {
          $cffShareTooltip.hide().find("a").removeClass("cff-show");
        } else {
          $cffShareTooltip.show();
          var time = 0;
          $cffShareTooltip.find("a").each(function() {
            var $cffShareIcon = jQuery(this);
            setTimeout(function() {
              $cffShareIcon.addClass("cff-show");
            }, time);
            time += 20;
          });
        }
      });
    });
    jQuery(".cff-wrapper").each(function() {
      var $cff = jQuery(this).find("#cff");
      var $cffElm = jQuery(this);
      setTimeout(function() {
        var consent = checkConsent($cffElm);
        if (consent) {
          addFullFeatures($cffElm);
        } else {
          jQuery(".cff-gdpr-notice").css({ display: "inline-block" });
          if ($cffElm.find(".cff-visual-header").length) {
            $cffElm
              .find(".cff-header-text")
              .closest(".cff-visual-header")
              .addClass("cff-no-consent");
          }
        }
      }, 250);
      if (typeof $cff.attr("data-nummobile") !== "undefined") {
        var num =
            typeof $cff.attr("data-pag-num") !== "undefined" &&
            $cff.attr("data-pag-num") !== ""
              ? parseInt($cff.attr("data-pag-num"))
              : 1,
          nummobile =
            typeof $cff.attr("data-nummobile") !== "undefined" &&
            $cff.attr("data-nummobile") !== ""
              ? parseInt($cff.attr("data-nummobile"))
              : num,
          itemSelector = $cff.find(".cff-item").length
            ? ".cff-item"
            : ".cff-album-item";
        if (jQuery(window).width() < 480) {
          if (nummobile < $cff.find(itemSelector).length) {
            $cff
              .find(itemSelector)
              .slice(nummobile - $cff.find(itemSelector).length)
              .addClass("cff-num-diff-hide");
          }
        } else {
          if (num < $cff.find(itemSelector).length) {
            $cff
              .find(itemSelector)
              .slice(num - $cff.find(itemSelector).length)
              .addClass("cff-num-diff-hide");
          }
        }
        $cff.removeAttr("data-nummobile");
      }
      if ($cff.hasClass("cff-masonry-js")) {
        cffAddMasonry($cff);
        setTimeout(function() {
          cffAddMasonry($cff);
        }, 500);
        jQuery(window).on("resize", function() {
          setTimeout(function() {
            cffAddMasonry($cff);
          }, 500);
        });
        if ($cff.find(".cff-credit").length) $cff.css("padding-bottom", 30);
      }
    });
    function cffSizeVisualHeader() {
      jQuery(".cff-visual-header.cff-has-cover").each(function() {
        var wrapperHeight = jQuery(this).find(".cff-header-hero").innerHeight(),
          imageHeight = jQuery(this).find(".cff-header-hero img").innerHeight(),
          wrapperWidth = jQuery(this).find(".cff-header-hero").innerWidth(),
          imageWidth = jQuery(this).find(".cff-header-hero img").innerWidth(),
          wrapperAspect = wrapperWidth / wrapperHeight,
          imageAspect = imageWidth / imageHeight,
          width =
            wrapperAspect < imageAspect
              ? wrapperHeight * imageAspect + "px"
              : "100%",
          difference = imageHeight - wrapperHeight,
          topMargin = Math.max(0, Math.round(difference / 2)),
          leftMargin =
            width !== "100%"
              ? Math.max(
                  0,
                  Math.round((wrapperHeight * imageAspect - wrapperWidth) / 2)
                )
              : 0;
        jQuery(this)
          .find(".cff-header-hero img")
          .css({
            opacity: 1,
            display: "block",
            visibility: "visible",
            "max-width": "none",
            "max-height": "none",
            "margin-top": -topMargin + "px",
            "margin-left": -leftMargin + "px",
            width: width
          });
      });
    }
    setTimeout(cffSizeVisualHeader, 200);
    jQuery(window).on("resize", function() {
      setTimeout(function() {
        cffSizeVisualHeader();
      }, 500);
    });
  }
  cff_init();
  function checkConsent(ctn) {
    ctn = ctn.find(".cff-list-container");
    var flags =
        typeof ctn.attr("data-cff-flags") !== "undefined"
          ? ctn.attr("data-cff-flags").split(",")
          : [],
      gdpr = flags.indexOf("gdpr") > -1,
      overrideBlockCDN = flags.indexOf("overrideBlockCDN") > -1,
      consentGiven = !1;
    if (consentGiven || !gdpr) {
      return !0;
    }
    if (typeof window.cookieyes !== "undefined") {
      console.log("here");
      if (typeof window.cookieyes._ckyConsentStore.get !== "undefined") {
        consentGiven =
          window.cookieyes._ckyConsentStore.get("functional") === "yes";
      }
    } else if (typeof CLI_Cookie !== "undefined") {
      if (CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) !== null) {
        if (CLI_Cookie.read("cookielawinfo-checkbox-non-necessary") !== null) {
          consentGiven =
            CLI_Cookie.read("cookielawinfo-checkbox-non-necessary") === "yes";
        }
        if (CLI_Cookie.read("cookielawinfo-checkbox-necessary") !== null) {
          consentGiven =
            CLI_Cookie.read("cookielawinfo-checkbox-necessary") === "yes";
        }
      }
    } else if (typeof window.cnArgs !== "undefined") {
      var value = "; " + document.cookie,
        parts = value.split("; cookie_notice_accepted=");
      if (parts.length === 2) {
        var val = parts.pop().split(";").shift();
        consentGiven = val === "true";
      }
    } else if (
      typeof window.complianz !== "undefined" ||
      typeof window.cookieconsent !== "undefined"
    ) {
      consentGiven = cffCmplzGetCookie("cmplz_marketing") === "allow";
    } else if (typeof window.Cookiebot !== "undefined") {
      consentGiven = Cookiebot.consented;
    } else if (typeof window.BorlabsCookie !== "undefined") {
      consentGiven = window.BorlabsCookie.checkCookieConsent("facebook");
    }
    return consentGiven;
  }
  function cffCmplzGetCookie(cname) {
    var name = cname + "=";
    var cArr = window.document.cookie.split(";");
    for (var i = 0; i < cArr.length; i++) {
      var c = cArr[i].trim();
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
  }
  function addFullFeatures(ctn) {
    ctn = jQuery(ctn);
    jQuery(".cff-gdpr-notice").remove();
    ctn.find(".cff-author-img").each(function() {
      jQuery(this).find("img").attr("src", jQuery(this).attr("data-avatar"));
      jQuery(this).removeClass("cff-no-consent");
    });
    ctn.find(".cff-likebox iframe").each(function() {
      var $likebox = jQuery(this),
        likeboxWidth = $likebox.attr("data-likebox-width"),
        cffFeedWidth = $likebox.parent().width();
      if (likeboxWidth == "") likeboxWidth = 340;
      if (cffFeedWidth < likeboxWidth) likeboxWidth = cffFeedWidth;
      $likebox.attr(
        "src",
        "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F" +
          $likebox.attr("data-likebox-id") +
          "%2F&tabs&width=" +
          Math.floor(likeboxWidth) +
          "&small_header=" +
          $likebox.attr("data-likebox-header") +
          "&adapt_container_width=true&hide_cover=" +
          $likebox.attr("data-hide-cover") +
          "&hide_cta=" +
          $likebox.attr("data-hide-cta") +
          "&show_facepile=" +
          $likebox.attr("data-likebox-faces") +
          "&locale=" +
          $likebox.attr("data-locale")
      );
    });
    if (jQuery(".cff-visual-header").length) {
      jQuery(".cff-visual-header").each(function() {
        jQuery(this).removeClass("cff-no-consent");
        if (jQuery(this).find(".cff-header-hero").length) {
          jQuery(this)
            .find(".cff-header-hero")
            .find("img")
            .attr(
              "src",
              jQuery(this)
                .find(".cff-header-hero")
                .find("img")
                .attr("data-cover-url")
            );
        }
        if (jQuery(this).find(".cff-header-img").length) {
          jQuery(this)
            .find(".cff-header-img")
            .find("img")
            .attr(
              "src",
              jQuery(this)
                .find(".cff-header-img")
                .find("img")
                .attr("data-avatar")
            );
        }
      });
    }
  }
  function afterConsentToggled(isConsent, ctn) {
    if (isConsent) {
      addFullFeatures(ctn);
    }
  }
  function cffGetFeedLocatorDataArray() {
    var feedLocatorData = [];
    jQuery(".cff-list-container").each(function() {
      $cffPagUrl = jQuery(this).find(".cff-pag-url");
      var locatorNonce = "";
      if (typeof $cffPagUrl.attr("data-locatornonce") !== "undefined") {
        locatorNonce = $cffPagUrl.attr("data-locatornonce");
      }
      var singleFeedLocatorData = {
        feedID: $cffPagUrl.attr("data-feed-id"),
        postID: $cffPagUrl.attr("data-post-id"),
        shortCodeAtts:
          jQuery.trim($cffPagUrl.attr("data-cff-shortcode")) == ""
            ? null
            : JSON.parse($cffPagUrl.attr("data-cff-shortcode")),
        location: locationGuess(jQuery(this)),
        locator_nonce: locatorNonce
      };
      feedLocatorData.push(singleFeedLocatorData);
    });
    return feedLocatorData;
  }
  function locationGuess($cff = !1) {
    var $feed = $cff == !1 ? jQuery(this.el) : $cff,
      location = "content";
    if ($feed.closest("footer").length) {
      location = "footer";
    } else if (
      $feed.closest(".header").length ||
      $feed.closest("header").length
    ) {
      location = "header";
    } else if (
      $feed.closest(".sidebar").length ||
      $feed.closest("aside").length
    ) {
      location = "sidebar";
    }
    return location;
  }
  jQuery(document).ready(function() {
    var $ = jQuery;
    $("#cookie-notice a").on("click", function() {
      setTimeout(function() {
        jQuery(".cff-wrapper").each(function(index) {
          afterConsentToggled(checkConsent(jQuery(this)), jQuery(this));
        });
      }, 1000);
    });
    $("#cookie-law-info-bar a").on("click", function() {
      setTimeout(function() {
        jQuery(".cff-wrapper").each(function(index) {
          afterConsentToggled(checkConsent(jQuery(this)), jQuery(this));
        });
      }, 1000);
    });
    $(
      ".cli-user-preference-checkbox, .cky-notice button"
    ).on("click", function() {
      setTimeout(function() {
        jQuery(".cff-wrapper").each(function(index) {
          afterConsentToggled(!1, jQuery(this));
        });
      }, 1000);
    });
    $(window).on("CookiebotOnAccept", function(event) {
      jQuery(".cff-wrapper").each(function(index) {
        afterConsentToggled(!0, jQuery(this));
      });
    });
    $(".cmplz-btn").on("click", function() {
      if (typeof cmplz_accepted_categories === "function") {
        setTimeout(function() {
          var accepted = cmplz_accepted_categories();
          if (accepted.indexOf("marketing") > -1) {
            jQuery(".cff-wrapper").each(function(index) {
              afterConsentToggled(!0, jQuery(this));
            });
          }
        }, 1000);
      }
    });
    $(document).on("cmplzEnableScripts", function(event) {
      if (event.detail === "marketing") {
        jQuery(".cff-wrapper").each(function(index) {
          afterConsentToggled(!0, jQuery(this));
        });
      }
    });
    $(document).on("cmplzFireCategories", function(event) {
      if (event.detail.category === "marketing") {
        jQuery(".cff-wrapper").each(function(index) {
          afterConsentToggled(!1, jQuery(this));
        });
      }
    });
    $(document).on("borlabs-cookie-consent-saved", function(event) {
      jQuery(".cff-wrapper").each(function(index) {
        afterConsentToggled(!0, jQuery(this));
      });
    });
    if ($(".cff-list-container").length) {
      var feedLocatorData = cffGetFeedLocatorDataArray();
      $.ajax({
        url: cffajaxurl,
        type: "POST",
        data: { action: "feed_locator", feedLocatorData: feedLocatorData }
      });
    }
  });
} /*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!(function(t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e(require("@popperjs/core")))
    : "function" == typeof define && define.amd
      ? define(["@popperjs/core"], e)
      : ((t =
          "undefined" != typeof globalThis
            ? globalThis
            : t || self).bootstrap = e(t.Popper));
})(this, function(t) {
  "use strict";
  function e(t) {
    if (t && t.__esModule) return t;
    const e = Object.create(null);
    if (t)
      for (const i in t)
        if ("default" !== i) {
          const s = Object.getOwnPropertyDescriptor(t, i);
          Object.defineProperty(
            e,
            i,
            s.get ? s : { enumerable: !0, get: () => t[i] }
          );
        }
    return (e.default = t), Object.freeze(e);
  }
  const i = e(t),
    s = "transitionend",
    n = t => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") &&
          !i.startsWith("#") &&
          (i = `#${i.split("#")[1]}`), (e = i && "#" !== i ? i.trim() : null);
      }
      return e;
    },
    o = t => {
      const e = n(t);
      return e && document.querySelector(e) ? e : null;
    },
    r = t => {
      const e = n(t);
      return e ? document.querySelector(e) : null;
    },
    a = t => {
      t.dispatchEvent(new Event(s));
    },
    l = t =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    c = t =>
      l(t)
        ? t.jquery ? t[0] : t
        : "string" == typeof t && t.length > 0
          ? document.querySelector(t)
          : null,
    h = (t, e, i) => {
      Object.keys(i).forEach(s => {
        const n = i[s],
          o = e[s],
          r =
            o && l(o)
              ? "element"
              : null == (a = o)
                ? `${a}`
                : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
        var a;
        if (!new RegExp(n).test(r))
          throw new TypeError(
            `${t.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`
          );
      });
    },
    d = t =>
      !(!l(t) || 0 === t.getClientRects().length) &&
      "visible" === getComputedStyle(t).getPropertyValue("visibility"),
    u = t =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    g = t => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode ? g(t.parentNode) : null;
    },
    _ = () => {},
    f = t => {
      t.offsetHeight;
    },
    p = () => {
      const { jQuery: t } = window;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    },
    m = [],
    b = () => "rtl" === document.documentElement.dir,
    v = t => {
      var e;
      (e = () => {
        const e = p();
        if (e) {
          const i = t.NAME,
            s = e.fn[i];
          (e.fn[i] = t.jQueryInterface), (e.fn[i].Constructor = t), (e.fn[
            i
          ].noConflict = () => ((e.fn[i] = s), t.jQueryInterface));
        }
      }), "loading" === document.readyState
        ? (
            m.length ||
              document.addEventListener("DOMContentLoaded", () => {
                m.forEach(t => t());
              }),
            m.push(e)
          )
        : e();
    },
    y = t => {
      "function" == typeof t && t();
    },
    E = (t, e, i = !0) => {
      if (!i) return void y(t);
      const n =
        (t => {
          if (!t) return 0;
          let {
            transitionDuration: e,
            transitionDelay: i
          } = window.getComputedStyle(t);
          const s = Number.parseFloat(e),
            n = Number.parseFloat(i);
          return s || n
            ? (
                (e = e.split(",")[0]),
                (i = i.split(",")[0]),
                1e3 * (Number.parseFloat(e) + Number.parseFloat(i))
              )
            : 0;
        })(e) + 5;
      let o = !1;
      const r = ({ target: i }) => {
        i === e && ((o = !0), e.removeEventListener(s, r), y(t));
      };
      e.addEventListener(s, r), setTimeout(() => {
        o || a(e);
      }, n);
    },
    w = (t, e, i, s) => {
      let n = t.indexOf(e);
      if (-1 === n) return t[!i && s ? t.length - 1 : 0];
      const o = t.length;
      return (n += i ? 1 : -1), s && (n = (n + o) % o), t[
        Math.max(0, Math.min(n, o - 1))
      ];
    },
    A = /[^.]*(?=\..*)\.|.*/,
    T = /\..*/,
    C = /::\d+$/,
    k = {};
  let L = 1;
  const S = { mouseenter: "mouseover", mouseleave: "mouseout" },
    O = /^(mouseenter|mouseleave)/i,
    N = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll"
    ]);
  function D(t, e) {
    return (e && `${e}::${L++}`) || t.uidEvent || L++;
  }
  function I(t) {
    const e = D(t);
    return (t.uidEvent = e), (k[e] = k[e] || {}), k[e];
  }
  function P(t, e, i = null) {
    const s = Object.keys(t);
    for (let n = 0, o = s.length; n < o; n++) {
      const o = t[s[n]];
      if (o.originalHandler === e && o.delegationSelector === i) return o;
    }
    return null;
  }
  function x(t, e, i) {
    const s = "string" == typeof e,
      n = s ? i : e;
    let o = H(t);
    return N.has(o) || (o = t), [s, n, o];
  }
  function M(t, e, i, s, n) {
    if ("string" != typeof e || !t) return;
    if ((i || ((i = s), (s = null)), O.test(e))) {
      const t = t =>
        function(e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      s ? (s = t(s)) : (i = t(i));
    }
    const [o, r, a] = x(e, i, s),
      l = I(t),
      c = l[a] || (l[a] = {}),
      h = P(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && n);
    const d = D(r, e.replace(A, "")),
      u = o
        ? (function(t, e, i) {
            return function s(n) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = n; r && r !== this; r = r.parentNode)
                for (let a = o.length; a--; )
                  if (o[a] === r)
                    return (n.delegateTarget = r), s.oneOff &&
                      $.off(t, n.type, e, i), i.apply(r, [n]);
              return null;
            };
          })(t, i, s)
        : (function(t, e) {
            return function i(s) {
              return (s.delegateTarget = t), i.oneOff &&
                $.off(t, s.type, e), e.apply(t, [s]);
            };
          })(t, i);
    (u.delegationSelector = o
      ? i
      : null), (u.originalHandler = r), (u.oneOff = n), (u.uidEvent = d), (c[d] = u), t.addEventListener(a, u, o);
  }
  function j(t, e, i, s, n) {
    const o = P(e[i], s, n);
    o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]);
  }
  function H(t) {
    return (t = t.replace(T, "")), S[t] || t;
  }
  const $ = {
      on(t, e, i, s) {
        M(t, e, i, s, !1);
      },
      one(t, e, i, s) {
        M(t, e, i, s, !0);
      },
      off(t, e, i, s) {
        if ("string" != typeof e || !t) return;
        const [n, o, r] = x(e, i, s),
          a = r !== e,
          l = I(t),
          c = e.startsWith(".");
        if (void 0 !== o) {
          if (!l || !l[r]) return;
          return void j(t, l, r, o, n ? i : null);
        }
        c &&
          Object.keys(l).forEach(i => {
            !(function(t, e, i, s) {
              const n = e[i] || {};
              Object.keys(n).forEach(o => {
                if (o.includes(s)) {
                  const s = n[o];
                  j(t, e, i, s.originalHandler, s.delegationSelector);
                }
              });
            })(t, l, i, e.slice(1));
          });
        const h = l[r] || {};
        Object.keys(h).forEach(i => {
          const s = i.replace(C, "");
          if (!a || e.includes(s)) {
            const e = h[i];
            j(t, l, r, e.originalHandler, e.delegationSelector);
          }
        });
      },
      trigger(t, e, i) {
        if ("string" != typeof e || !t) return null;
        const s = p(),
          n = H(e),
          o = e !== n,
          r = N.has(n);
        let a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
        return o &&
          s &&
          (
            (a = s.Event(e, i)),
            s(t).trigger(a),
            (l = !a.isPropagationStopped()),
            (c = !a.isImmediatePropagationStopped()),
            (h = a.isDefaultPrevented())
          ), r
          ? ((d = document.createEvent("HTMLEvents")), d.initEvent(n, l, !0))
          : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })), void 0 !==
          i &&
          Object.keys(i).forEach(t => {
            Object.defineProperty(d, t, { get: () => i[t] });
          }), h && d.preventDefault(), c &&
          t.dispatchEvent(d), d.defaultPrevented &&
          void 0 !== a &&
          a.preventDefault(), d;
      }
    },
    B = new Map(),
    z = {
      set(t, e, i) {
        B.has(t) || B.set(t, new Map());
        const s = B.get(t);
        s.has(e) || 0 === s.size
          ? s.set(e, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(
                s.keys()
              )[0]}.`
            );
      },
      get: (t, e) => (B.has(t) && B.get(t).get(e)) || null,
      remove(t, e) {
        if (!B.has(t)) return;
        const i = B.get(t);
        i.delete(e), 0 === i.size && B.delete(t);
      }
    };
  class R {
    constructor(t) {
      (t = c(t)) &&
        (
          (this._element = t),
          z.set(this._element, this.constructor.DATA_KEY, this)
        );
    }
    dispose() {
      z.remove(
        this._element,
        this.constructor.DATA_KEY
      ), $.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(
        this
      ).forEach(t => {
        this[t] = null;
      });
    }
    _queueCallback(t, e, i = !0) {
      E(t, e, i);
    }
    static getInstance(t) {
      return z.get(c(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.1.3";
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  const F = (t, e = "hide") => {
    const i = `click.dismiss${t.EVENT_KEY}`,
      s = t.NAME;
    $.on(document, i, `[data-bs-dismiss="${s}"]`, function(i) {
      if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), u(this)))
        return;
      const n = r(this) || this.closest(`.${s}`);
      t.getOrCreateInstance(n)[e]();
    });
  };
  class q extends R {
    static get NAME() {
      return "alert";
    }
    close() {
      if ($.trigger(this._element, "close.bs.alert").defaultPrevented) return;
      this._element.classList.remove("show");
      const t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(), $.trigger(this._element, "closed.bs.alert"), this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = q.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  F(q, "close"), v(q);
  const W = '[data-bs-toggle="button"]';
  class U extends R {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = U.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  function K(t) {
    return (
      "true" === t ||
      ("false" !== t &&
        (t === Number(t).toString()
          ? Number(t)
          : "" === t || "null" === t ? null : t))
    );
  }
  function V(t) {
    return t.replace(/[A-Z]/g, t => `-${t.toLowerCase()}`);
  }
  $.on(document, "click.bs.button.data-api", W, t => {
    t.preventDefault();
    const e = t.target.closest(W);
    U.getOrCreateInstance(e).toggle();
  }), v(U);
  const X = {
      setDataAttribute(t, e, i) {
        t.setAttribute(`data-bs-${V(e)}`, i);
      },
      removeDataAttribute(t, e) {
        t.removeAttribute(`data-bs-${V(e)}`);
      },
      getDataAttributes(t) {
        if (!t) return {};
        const e = {};
        return Object.keys(t.dataset)
          .filter(t => t.startsWith("bs"))
          .forEach(i => {
            let s = i.replace(/^bs/, "");
            (s = s.charAt(0).toLowerCase() + s.slice(1, s.length)), (e[s] = K(
              t.dataset[i]
            ));
          }), e;
      },
      getDataAttribute: (t, e) => K(t.getAttribute(`data-bs-${V(e)}`)),
      offset(t) {
        const e = t.getBoundingClientRect();
        return {
          top: e.top + window.pageYOffset,
          left: e.left + window.pageXOffset
        };
      },
      position: t => ({ top: t.offsetTop, left: t.offsetLeft })
    },
    Y = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
      parents(t, e) {
        const i = [];
        let s = t.parentNode;
        for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType; )
          s.matches(e) && i.push(s), (s = s.parentNode);
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]'
        ]
          .map(t => `${t}:not([tabindex^="-"])`)
          .join(", ");
        return this.find(e, t).filter(t => !u(t) && d(t));
      }
    },
    Q = "carousel",
    G = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0
    },
    Z = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean"
    },
    J = "next",
    tt = "prev",
    et = "left",
    it = "right",
    st = { ArrowLeft: it, ArrowRight: et },
    nt = "slid.bs.carousel",
    ot = "active",
    rt = ".active.carousel-item";
  class at extends R {
    constructor(t, e) {
      super(
        t
      ), (this._items = null), (this._interval = null), (this._activeElement = null), (this._isPaused = !1), (this._isSliding = !1), (this.touchTimeout = null), (this.touchStartX = 0), (this.touchDeltaX = 0), (this._config = this._getConfig(e)), (this._indicatorsElement = Y.findOne(".carousel-indicators", this._element)), (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0), (this._pointerEvent = Boolean(window.PointerEvent)), this._addEventListeners();
    }
    static get Default() {
      return G;
    }
    static get NAME() {
      return Q;
    }
    next() {
      this._slide(J);
    }
    nextWhenVisible() {
      !document.hidden && d(this._element) && this.next();
    }
    prev() {
      this._slide(tt);
    }
    pause(t) {
      t ||
        (this._isPaused = !0), Y.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (a(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
    }
    cycle(t) {
      t ||
        (this._isPaused = !1), this._interval && (clearInterval(this._interval), (this._interval = null)), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)));
    }
    to(t) {
      this._activeElement = Y.findOne(rt, this._element);
      const e = this._getItemIndex(this._activeElement);
      if (t > this._items.length - 1 || t < 0) return;
      if (this._isSliding)
        return void $.one(this._element, nt, () => this.to(t));
      if (e === t) return this.pause(), void this.cycle();
      const i = t > e ? J : tt;
      this._slide(i, this._items[t]);
    }
    _getConfig(t) {
      return (t = {
        ...G,
        ...X.getDataAttributes(this._element),
        ...("object" == typeof t ? t : {})
      }), h(Q, t, Z), t;
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      (this.touchDeltaX = 0), e && this._slide(e > 0 ? it : et);
    }
    _addEventListeners() {
      this._config.keyboard &&
        $.on(this._element, "keydown.bs.carousel", t =>
          this._keydown(t)
        ), "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)), $.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const t = t =>
          this._pointerEvent &&
          ("pen" === t.pointerType || "touch" === t.pointerType),
        e = e => {
          t(e)
            ? (this.touchStartX = e.clientX)
            : this._pointerEvent || (this.touchStartX = e.touches[0].clientX);
        },
        i = t => {
          this.touchDeltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this.touchStartX;
        },
        s = e => {
          t(e) &&
            (this.touchDeltaX =
              e.clientX - this.touchStartX), this._handleSwipe(), "hover" ===
            this._config.pause &&
            (
              this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                t => this.cycle(t),
                500 + this._config.interval
              ))
            );
        };
      Y.find(".carousel-item img", this._element).forEach(t => {
        $.on(t, "dragstart.bs.carousel", t => t.preventDefault());
      }), this._pointerEvent ? ($.on(this._element, "pointerdown.bs.carousel", t => e(t)), $.on(this._element, "pointerup.bs.carousel", t => s(t)), this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.carousel", t => e(t)), $.on(this._element, "touchmove.bs.carousel", t => i(t)), $.on(this._element, "touchend.bs.carousel", t => s(t)));
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = st[t.key];
      e && (t.preventDefault(), this._slide(e));
    }
    _getItemIndex(t) {
      return (this._items =
        t && t.parentNode
          ? Y.find(".carousel-item", t.parentNode)
          : []), this._items.indexOf(t);
    }
    _getItemByOrder(t, e) {
      const i = t === J;
      return w(this._items, e, i, this._config.wrap);
    }
    _triggerSlideEvent(t, e) {
      const i = this._getItemIndex(t),
        s = this._getItemIndex(Y.findOne(rt, this._element));
      return $.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: t,
        direction: e,
        from: s,
        to: i
      });
    }
    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = Y.findOne(".active", this._indicatorsElement);
        e.classList.remove(ot), e.removeAttribute("aria-current");
        const i = Y.find("[data-bs-target]", this._indicatorsElement);
        for (let e = 0; e < i.length; e++)
          if (
            Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(t)
          ) {
            i[e].classList.add(ot), i[e].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      const t = this._activeElement || Y.findOne(rt, this._element);
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      e
        ? (
            (this._config.defaultInterval =
              this._config.defaultInterval || this._config.interval),
            (this._config.interval = e)
          )
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(t, e) {
      const i = this._directionToOrder(t),
        s = Y.findOne(rt, this._element),
        n = this._getItemIndex(s),
        o = e || this._getItemByOrder(i, s),
        r = this._getItemIndex(o),
        a = Boolean(this._interval),
        l = i === J,
        c = l ? "carousel-item-start" : "carousel-item-end",
        h = l ? "carousel-item-next" : "carousel-item-prev",
        d = this._orderToDirection(i);
      if (o && o.classList.contains(ot)) return void (this._isSliding = !1);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(o, d).defaultPrevented) return;
      if (!s || !o) return;
      (this._isSliding = !0), a && this.pause(), this._setActiveIndicatorElement(o), (this._activeElement = o);
      const u = () => {
        $.trigger(this._element, nt, {
          relatedTarget: o,
          direction: d,
          from: n,
          to: r
        });
      };
      if (this._element.classList.contains("slide")) {
        o.classList.add(h), f(o), s.classList.add(c), o.classList.add(c);
        const t = () => {
          o.classList.remove(c, h), o.classList.add(ot), s.classList.remove(
            ot,
            h,
            c
          ), (this._isSliding = !1), setTimeout(u, 0);
        };
        this._queueCallback(t, s, !0);
      } else s.classList.remove(ot), o.classList.add(ot), (this._isSliding = !1), u();
      a && this.cycle();
    }
    _directionToOrder(t) {
      return [it, et].includes(t)
        ? b() ? (t === et ? tt : J) : t === et ? J : tt
        : t;
    }
    _orderToDirection(t) {
      return [J, tt].includes(t)
        ? b() ? (t === tt ? et : it) : t === tt ? it : et
        : t;
    }
    static carouselInterface(t, e) {
      const i = at.getOrCreateInstance(t, e);
      let { _config: s } = i;
      "object" == typeof e && (s = { ...s, ...e });
      const n = "string" == typeof e ? e : s.slide;
      if ("number" == typeof e) i.to(e);
      else if ("string" == typeof n) {
        if (void 0 === i[n]) throw new TypeError(`No method named "${n}"`);
        i[n]();
      } else s.interval && s.ride && (i.pause(), i.cycle());
    }
    static jQueryInterface(t) {
      return this.each(function() {
        at.carouselInterface(this, t);
      });
    }
    static dataApiClickHandler(t) {
      const e = r(this);
      if (!e || !e.classList.contains("carousel")) return;
      const i = { ...X.getDataAttributes(e), ...X.getDataAttributes(this) },
        s = this.getAttribute("data-bs-slide-to");
      s &&
        (i.interval = !1), at.carouselInterface(e, i), s && at.getInstance(e).to(s), t.preventDefault();
    }
  }
  $.on(
    document,
    "click.bs.carousel.data-api",
    "[data-bs-slide], [data-bs-slide-to]",
    at.dataApiClickHandler
  ), $.on(window, "load.bs.carousel.data-api", () => {
    const t = Y.find('[data-bs-ride="carousel"]');
    for (let e = 0, i = t.length; e < i; e++)
      at.carouselInterface(t[e], at.getInstance(t[e]));
  }), v(at);
  const lt = "collapse",
    ct = { toggle: !0, parent: null },
    ht = { toggle: "boolean", parent: "(null|element)" },
    dt = "show",
    ut = "collapse",
    gt = "collapsing",
    _t = "collapsed",
    ft = ":scope .collapse .collapse",
    pt = '[data-bs-toggle="collapse"]';
  class mt extends R {
    constructor(t, e) {
      super(
        t
      ), (this._isTransitioning = !1), (this._config = this._getConfig(e)), (this._triggerArray = []);
      const i = Y.find(pt);
      for (let t = 0, e = i.length; t < e; t++) {
        const e = i[t],
          s = o(e),
          n = Y.find(s).filter(t => t === this._element);
        null !== s &&
          n.length &&
          ((this._selector = s), this._triggerArray.push(e));
      }
      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
    }
    static get Default() {
      return ct;
    }
    static get NAME() {
      return lt;
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t,
        e = [];
      if (this._config.parent) {
        const t = Y.find(ft, this._config.parent);
        e = Y.find(
          ".collapse.show, .collapse.collapsing",
          this._config.parent
        ).filter(e => !t.includes(e));
      }
      const i = Y.findOne(this._selector);
      if (e.length) {
        const s = e.find(t => i !== t);
        if (((t = s ? mt.getInstance(s) : null), t && t._isTransitioning))
          return;
      }
      if ($.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      e.forEach(e => {
        i !== e && mt.getOrCreateInstance(e, { toggle: !1 }).hide(), t ||
          z.set(e, "bs.collapse", null);
      });
      const s = this._getDimension();
      this._element.classList.remove(
        ut
      ), this._element.classList.add(gt), (this._element.style[s] = 0), this._addAriaAndCollapsedClass(this._triggerArray, !0), (this._isTransitioning = !0);
      const n = `scroll${s[0].toUpperCase() + s.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1), this._element.classList.remove(
            gt
          ), this._element.classList.add(ut, dt), (this._element.style[s] =
            ""), $.trigger(this._element, "shown.bs.collapse");
        },
        this._element,
        !0
      ), (this._element.style[s] = `${this._element[n]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] = `${this._element.getBoundingClientRect()[
        t
      ]}px`), f(this._element), this._element.classList.add(gt), this._element.classList.remove(ut, dt);
      const e = this._triggerArray.length;
      for (let t = 0; t < e; t++) {
        const e = this._triggerArray[t],
          i = r(e);
        i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1);
      }
      (this._isTransitioning = !0), (this._element.style[t] = ""), this._queueCallback(
        () => {
          (this._isTransitioning = !1), this._element.classList.remove(
            gt
          ), this._element.classList.add(ut), $.trigger(
            this._element,
            "hidden.bs.collapse"
          );
        },
        this._element,
        !0
      );
    }
    _isShown(t = this._element) {
      return t.classList.contains(dt);
    }
    _getConfig(t) {
      return ((t = {
        ...ct,
        ...X.getDataAttributes(this._element),
        ...t
      }).toggle = Boolean(t.toggle)), (t.parent = c(t.parent)), h(lt, t, ht), t;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = Y.find(ft, this._config.parent);
      Y.find(pt, this._config.parent).filter(e => !t.includes(e)).forEach(t => {
        const e = r(t);
        e && this._addAriaAndCollapsedClass([t], this._isShown(e));
      });
    }
    _addAriaAndCollapsedClass(t, e) {
      t.length &&
        t.forEach(t => {
          e ? t.classList.remove(_t) : t.classList.add(_t), t.setAttribute(
            "aria-expanded",
            e
          );
        });
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = {};
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
        const i = mt.getOrCreateInstance(this, e);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t]();
        }
      });
    }
  }
  $.on(document, "click.bs.collapse.data-api", pt, function(t) {
    ("A" === t.target.tagName ||
      (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
      t.preventDefault();
    const e = o(this);
    Y.find(e).forEach(t => {
      mt.getOrCreateInstance(t, { toggle: !1 }).toggle();
    });
  }), v(mt);
  const bt = "dropdown",
    vt = "Escape",
    yt = "Space",
    Et = "ArrowUp",
    wt = "ArrowDown",
    At = new RegExp("ArrowUp|ArrowDown|Escape"),
    Tt = "click.bs.dropdown.data-api",
    Ct = "keydown.bs.dropdown.data-api",
    kt = "show",
    Lt = '[data-bs-toggle="dropdown"]',
    St = ".dropdown-menu",
    Ot = b() ? "top-end" : "top-start",
    Nt = b() ? "top-start" : "top-end",
    Dt = b() ? "bottom-end" : "bottom-start",
    It = b() ? "bottom-start" : "bottom-end",
    Pt = b() ? "left-start" : "right-start",
    xt = b() ? "right-start" : "left-start",
    Mt = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0
    },
    jt = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)"
    };
  class Ht extends R {
    constructor(t, e) {
      super(
        t
      ), (this._popper = null), (this._config = this._getConfig(e)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return Mt;
    }
    static get DefaultType() {
      return jt;
    }
    static get NAME() {
      return bt;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (u(this._element) || this._isShown(this._menu)) return;
      const t = { relatedTarget: this._element };
      if ($.trigger(this._element, "show.bs.dropdown", t).defaultPrevented)
        return;
      const e = Ht.getParentFromElement(this._element);
      this._inNavbar
        ? X.setDataAttribute(this._menu, "popper", "none")
        : this._createPopper(
            e
          ), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => $.on(t, "mouseover", _)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(kt), this._element.classList.add(kt), $.trigger(this._element, "shown.bs.dropdown", t);
    }
    hide() {
      if (u(this._element) || !this._isShown(this._menu)) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
    }
    _completeHide(t) {
      $.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
        (
          "ontouchstart" in document.documentElement &&
            []
              .concat(...document.body.children)
              .forEach(t => $.off(t, "mouseover", _)),
          this._popper && this._popper.destroy(),
          this._menu.classList.remove(kt),
          this._element.classList.remove(kt),
          this._element.setAttribute("aria-expanded", "false"),
          X.removeDataAttribute(this._menu, "popper"),
          $.trigger(this._element, "hidden.bs.dropdown", t)
        );
    }
    _getConfig(t) {
      if (
        (
          (t = {
            ...this.constructor.Default,
            ...X.getDataAttributes(this._element),
            ...t
          }),
          h(bt, t, this.constructor.DefaultType),
          "object" == typeof t.reference &&
            !l(t.reference) &&
            "function" != typeof t.reference.getBoundingClientRect
        )
      )
        throw new TypeError(
          `${bt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper(t) {
      if (void 0 === i)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let e = this._element;
      "parent" === this._config.reference
        ? (e = t)
        : l(this._config.reference)
          ? (e = c(this._config.reference))
          : "object" == typeof this._config.reference &&
            (e = this._config.reference);
      const s = this._getPopperConfig(),
        n = s.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
      (this._popper = i.createPopper(
        e,
        this._menu,
        s
      )), n && X.setDataAttribute(this._menu, "popper", "static");
    }
    _isShown(t = this._element) {
      return t.classList.contains(kt);
    }
    _getMenuElement() {
      return Y.next(this._element, St)[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return Pt;
      if (t.classList.contains("dropstart")) return xt;
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? Nt : Ot) : e ? It : Dt;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map(t => Number.parseInt(t, 10))
        : "function" == typeof t ? e => t(e, this._element) : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary }
          },
          { name: "offset", options: { offset: this._getOffset() } }
        ]
      };
      return "static" === this._config.display &&
        (t.modifiers = [
          { name: "applyStyles", enabled: !1 }
        ]), { ...t, ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig) };
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = Y.find(
        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        this._menu
      ).filter(d);
      i.length && w(i, e, t === wt, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = Ht.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (t && (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)))
        return;
      const e = Y.find(Lt);
      for (let i = 0, s = e.length; i < s; i++) {
        const s = Ht.getInstance(e[i]);
        if (!s || !1 === s._config.autoClose) continue;
        if (!s._isShown()) continue;
        const n = { relatedTarget: s._element };
        if (t) {
          const e = t.composedPath(),
            i = e.includes(s._menu);
          if (
            e.includes(s._element) ||
            ("inside" === s._config.autoClose && !i) ||
            ("outside" === s._config.autoClose && i)
          )
            continue;
          if (
            s._menu.contains(t.target) &&
            (("keyup" === t.type && "Tab" === t.key) ||
              /input|select|option|textarea|form/i.test(t.target.tagName))
          )
            continue;
          "click" === t.type && (n.clickEvent = t);
        }
        s._completeHide(n);
      }
    }
    static getParentFromElement(t) {
      return r(t) || t.parentNode;
    }
    static dataApiKeydownHandler(t) {
      if (
        /input|textarea/i.test(t.target.tagName)
          ? t.key === yt ||
            (t.key !== vt &&
              ((t.key !== wt && t.key !== Et) || t.target.closest(St)))
          : !At.test(t.key)
      )
        return;
      const e = this.classList.contains(kt);
      if (!e && t.key === vt) return;
      if ((t.preventDefault(), t.stopPropagation(), u(this))) return;
      const i = this.matches(Lt) ? this : Y.prev(this, Lt)[0],
        s = Ht.getOrCreateInstance(i);
      if (t.key !== vt)
        return t.key === Et || t.key === wt
          ? (e || s.show(), void s._selectMenuItem(t))
          : void ((e && t.key !== yt) || Ht.clearMenus());
      s.hide();
    }
  }
  $.on(
    document,
    Ct,
    Lt,
    Ht.dataApiKeydownHandler
  ), $.on(document, Ct, St, Ht.dataApiKeydownHandler), $.on(document, Tt, Ht.clearMenus), $.on(document, "keyup.bs.dropdown.data-api", Ht.clearMenus), $.on(
    document,
    Tt,
    Lt,
    function(t) {
      t.preventDefault(), Ht.getOrCreateInstance(this).toggle();
    }
  ), v(Ht);
  const $t = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    Bt = ".sticky-top";
  class zt {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", e => e + t), this._setElementAttributes($t, "paddingRight", e => e + t), this._setElementAttributes(Bt, "marginRight", e => e - t);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(
        this._element,
        "overflow"
      ), (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      const s = this.getWidth();
      this._applyManipulationCallback(t, t => {
        if (t !== this._element && window.innerWidth > t.clientWidth + s)
          return;
        this._saveInitialAttribute(t, e);
        const n = window.getComputedStyle(t)[e];
        t.style[e] = `${i(Number.parseFloat(n))}px`;
      });
    }
    reset() {
      this._resetElementAttributes(
        this._element,
        "overflow"
      ), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes($t, "paddingRight"), this._resetElementAttributes(Bt, "marginRight");
    }
    _saveInitialAttribute(t, e) {
      const i = t.style[e];
      i && X.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, t => {
        const i = X.getDataAttribute(t, e);
        void 0 === i
          ? t.style.removeProperty(e)
          : (X.removeDataAttribute(t, e), (t.style[e] = i));
      });
    }
    _applyManipulationCallback(t, e) {
      l(t) ? e(t) : Y.find(t, this._element).forEach(e);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  const Rt = {
      className: "modal-backdrop",
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null
    },
    Ft = {
      className: "string",
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)"
    },
    qt = "show",
    Wt = "mousedown.bs.backdrop";
  class Ut {
    constructor(t) {
      (this._config = this._getConfig(
        t
      )), (this._isAppended = !1), (this._element = null);
    }
    show(t) {
      this._config.isVisible
        ? (
            this._append(),
            this._config.isAnimated && f(this._getElement()),
            this._getElement().classList.add(qt),
            this._emulateAnimation(() => {
              y(t);
            })
          )
        : y(t);
    }
    hide(t) {
      this._config.isVisible
        ? (
            this._getElement().classList.remove(qt),
            this._emulateAnimation(() => {
              this.dispose(), y(t);
            })
          )
        : y(t);
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = this._config.className), this._config.isAnimated &&
          t.classList.add("fade"), (this._element = t);
      }
      return this._element;
    }
    _getConfig(t) {
      return ((t = {
        ...Rt,
        ...("object" == typeof t ? t : {})
      }).rootElement = c(t.rootElement)), h("backdrop", t, Ft), t;
    }
    _append() {
      this._isAppended ||
        (
          this._config.rootElement.append(this._getElement()),
          $.on(this._getElement(), Wt, () => {
            y(this._config.clickCallback);
          }),
          (this._isAppended = !0)
        );
    }
    dispose() {
      this._isAppended &&
        (
          $.off(this._element, Wt),
          this._element.remove(),
          (this._isAppended = !1)
        );
    }
    _emulateAnimation(t) {
      E(t, this._getElement(), this._config.isAnimated);
    }
  }
  const Kt = { trapElement: null, autofocus: !0 },
    Vt = { trapElement: "element", autofocus: "boolean" },
    Xt = ".bs.focustrap",
    Yt = "backward";
  class Qt {
    constructor(t) {
      (this._config = this._getConfig(
        t
      )), (this._isActive = !1), (this._lastTabNavDirection = null);
    }
    activate() {
      const { trapElement: t, autofocus: e } = this._config;
      this._isActive ||
        (
          e && t.focus(),
          $.off(document, Xt),
          $.on(document, "focusin.bs.focustrap", t => this._handleFocusin(t)),
          $.on(document, "keydown.tab.bs.focustrap", t =>
            this._handleKeydown(t)
          ),
          (this._isActive = !0)
        );
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), $.off(document, Xt));
    }
    _handleFocusin(t) {
      const { target: e } = t,
        { trapElement: i } = this._config;
      if (e === document || e === i || i.contains(e)) return;
      const s = Y.focusableChildren(i);
      0 === s.length
        ? i.focus()
        : this._lastTabNavDirection === Yt
          ? s[s.length - 1].focus()
          : s[0].focus();
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? Yt : "forward");
    }
    _getConfig(t) {
      return (t = {
        ...Kt,
        ...("object" == typeof t ? t : {})
      }), h("focustrap", t, Vt), t;
    }
  }
  const Gt = "modal",
    Zt = "Escape",
    Jt = { backdrop: !0, keyboard: !0, focus: !0 },
    te = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean"
    },
    ee = "hidden.bs.modal",
    ie = "show.bs.modal",
    se = "resize.bs.modal",
    ne = "click.dismiss.bs.modal",
    oe = "keydown.dismiss.bs.modal",
    re = "mousedown.dismiss.bs.modal",
    ae = "modal-open",
    le = "show",
    ce = "modal-static";
  class he extends R {
    constructor(t, e) {
      super(
        t
      ), (this._config = this._getConfig(e)), (this._dialog = Y.findOne(".modal-dialog", this._element)), (this._backdrop = this._initializeBackDrop()), (this._focustrap = this._initializeFocusTrap()), (this._isShown = !1), (this._ignoreBackdropClick = !1), (this._isTransitioning = !1), (this._scrollBar = new zt());
    }
    static get Default() {
      return Jt;
    }
    static get NAME() {
      return Gt;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        $.trigger(this._element, ie, { relatedTarget: t }).defaultPrevented ||
        (
          (this._isShown = !0),
          this._isAnimated() && (this._isTransitioning = !0),
          this._scrollBar.hide(),
          document.body.classList.add(ae),
          this._adjustDialog(),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          $.on(this._dialog, re, () => {
            $.one(this._element, "mouseup.dismiss.bs.modal", t => {
              t.target === this._element && (this._ignoreBackdropClick = !0);
            });
          }),
          this._showBackdrop(() => this._showElement(t))
        );
    }
    hide() {
      if (!this._isShown || this._isTransitioning) return;
      if ($.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
      this._isShown = !1;
      const t = this._isAnimated();
      t &&
        (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(le), $.off(this._element, ne), $.off(this._dialog, re), this._queueCallback(() => this._hideModal(), this._element, t);
    }
    dispose() {
      [window, this._dialog].forEach(t =>
        $.off(t, ".bs.modal")
      ), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new Ut({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new Qt({ trapElement: this._element });
    }
    _getConfig(t) {
      return (t = {
        ...Jt,
        ...X.getDataAttributes(this._element),
        ...("object" == typeof t ? t : {})
      }), h(Gt, t, te), t;
    }
    _showElement(t) {
      const e = this._isAnimated(),
        i = Y.findOne(".modal-body", this._dialog);
      (this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.append(
          this._element
        ), (this._element.style.display = "block"), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), (this._element.scrollTop = 0), i && (i.scrollTop = 0), e && f(this._element), this._element.classList.add(le), this._queueCallback(
        () => {
          this._config.focus &&
            this._focustrap.activate(), (this._isTransitioning = !1), $.trigger(
            this._element,
            "shown.bs.modal",
            { relatedTarget: t }
          );
        },
        this._dialog,
        e
      );
    }
    _setEscapeEvent() {
      this._isShown
        ? $.on(this._element, oe, t => {
            this._config.keyboard && t.key === Zt
              ? (t.preventDefault(), this.hide())
              : this._config.keyboard ||
                t.key !== Zt ||
                this._triggerBackdropTransition();
          })
        : $.off(this._element, oe);
    }
    _setResizeEvent() {
      this._isShown
        ? $.on(window, se, () => this._adjustDialog())
        : $.off(window, se);
    }
    _hideModal() {
      (this._element.style.display =
        "none"), this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), (this._isTransitioning = !1), this._backdrop.hide(
        () => {
          document.body.classList.remove(
            ae
          ), this._resetAdjustments(), this._scrollBar.reset(), $.trigger(
            this._element,
            ee
          );
        }
      );
    }
    _showBackdrop(t) {
      $.on(this._element, ne, t => {
        this._ignoreBackdropClick
          ? (this._ignoreBackdropClick = !1)
          : t.target === t.currentTarget &&
            (!0 === this._config.backdrop
              ? this.hide()
              : "static" === this._config.backdrop &&
                this._triggerBackdropTransition());
      }), this._backdrop.show(t);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
        return;
      const { classList: t, scrollHeight: e, style: i } = this._element,
        s = e > document.documentElement.clientHeight;
      (!s && "hidden" === i.overflowY) ||
        t.contains(ce) ||
        (
          s || (i.overflowY = "hidden"),
          t.add(ce),
          this._queueCallback(() => {
            t.remove(ce), s ||
              this._queueCallback(() => {
                i.overflowY = "";
              }, this._dialog);
          }, this._dialog),
          this._element.focus()
        );
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      ((!i && t && !b()) || (i && !t && b())) &&
        (this._element.style.paddingLeft = `${e}px`), ((i && !t && !b()) || (!i && t && b())) && (this._element.style.paddingRight = `${e}px`);
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft =
        ""), (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function() {
        const i = he.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  $.on(
    document,
    "click.bs.modal.data-api",
    '[data-bs-toggle="modal"]',
    function(t) {
      const e = r(this);
      ["A", "AREA"].includes(this.tagName) &&
        t.preventDefault(), $.one(e, ie, t => {
        t.defaultPrevented ||
          $.one(e, ee, () => {
            d(this) && this.focus();
          });
      });
      const i = Y.findOne(".modal.show");
      i && he.getInstance(i).hide(), he.getOrCreateInstance(e).toggle(this);
    }
  ), F(he), v(he);
  const de = "offcanvas",
    ue = { backdrop: !0, keyboard: !0, scroll: !1 },
    ge = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
    _e = "show",
    fe = ".offcanvas.show",
    pe = "hidden.bs.offcanvas";
  class me extends R {
    constructor(t, e) {
      super(
        t
      ), (this._config = this._getConfig(e)), (this._isShown = !1), (this._backdrop = this._initializeBackDrop()), (this._focustrap = this._initializeFocusTrap()), this._addEventListeners();
    }
    static get NAME() {
      return de;
    }
    static get Default() {
      return ue;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        $.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
          .defaultPrevented ||
        (
          (this._isShown = !0),
          (this._element.style.visibility = "visible"),
          this._backdrop.show(),
          this._config.scroll || new zt().hide(),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.classList.add(_e),
          this._queueCallback(
            () => {
              this._config.scroll || this._focustrap.activate(), $.trigger(
                this._element,
                "shown.bs.offcanvas",
                { relatedTarget: t }
              );
            },
            this._element,
            !0
          )
        );
    }
    hide() {
      this._isShown &&
        ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
          (
            this._focustrap.deactivate(),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.remove(_e),
            this._backdrop.hide(),
            this._queueCallback(
              () => {
                this._element.setAttribute(
                  "aria-hidden",
                  !0
                ), this._element.removeAttribute(
                  "aria-modal"
                ), this._element.removeAttribute(
                  "role"
                ), (this._element.style.visibility = "hidden"), this._config
                  .scroll || new zt().reset(), $.trigger(this._element, pe);
              },
              this._element,
              !0
            )
          ));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _getConfig(t) {
      return (t = {
        ...ue,
        ...X.getDataAttributes(this._element),
        ...("object" == typeof t ? t : {})
      }), h(de, t, ge), t;
    }
    _initializeBackDrop() {
      return new Ut({
        className: "offcanvas-backdrop",
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide()
      });
    }
    _initializeFocusTrap() {
      return new Qt({ trapElement: this._element });
    }
    _addEventListeners() {
      $.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
        this._config.keyboard && "Escape" === t.key && this.hide();
      });
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = me.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  $.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function(t) {
      const e = r(this);
      if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), u(this)))
        return;
      $.one(e, pe, () => {
        d(this) && this.focus();
      });
      const i = Y.findOne(fe);
      i && i !== e && me.getInstance(i).hide(), me
        .getOrCreateInstance(e)
        .toggle(this);
    }
  ), $.on(window, "load.bs.offcanvas.data-api", () => Y.find(fe).forEach(t => me.getOrCreateInstance(t).show())), F(me), v(me);
  const be = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href"
    ]),
    ve = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    ye = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Ee = (t, e) => {
      const i = t.nodeName.toLowerCase();
      if (e.includes(i))
        return (
          !be.has(i) || Boolean(ve.test(t.nodeValue) || ye.test(t.nodeValue))
        );
      const s = e.filter(t => t instanceof RegExp);
      for (let t = 0, e = s.length; t < e; t++) if (s[t].test(i)) return !0;
      return !1;
    };
  function we(t, e, i) {
    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);
    const s = new window.DOMParser().parseFromString(t, "text/html"),
      n = [].concat(...s.body.querySelectorAll("*"));
    for (let t = 0, i = n.length; t < i; t++) {
      const i = n[t],
        s = i.nodeName.toLowerCase();
      if (!Object.keys(e).includes(s)) {
        i.remove();
        continue;
      }
      const o = [].concat(...i.attributes),
        r = [].concat(e["*"] || [], e[s] || []);
      o.forEach(t => {
        Ee(t, r) || i.removeAttribute(t.nodeName);
      });
    }
    return s.body.innerHTML;
  }
  const Ae = "tooltip",
    Te = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Ce = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)"
    },
    ke = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: b() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: b() ? "right" : "left"
    },
    Le = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      },
      popperConfig: null
    },
    Se = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip"
    },
    Oe = "fade",
    Ne = "show",
    De = "show",
    Ie = "out",
    Pe = ".tooltip-inner",
    xe = ".modal",
    Me = "hide.bs.modal",
    je = "hover",
    He = "focus";
  class $e extends R {
    constructor(t, e) {
      if (void 0 === i)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(
        t
      ), (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this._config = this._getConfig(e)), (this.tip = null), this._setListeners();
    }
    static get Default() {
      return Le;
    }
    static get NAME() {
      return Ae;
    }
    static get Event() {
      return Se;
    }
    static get DefaultType() {
      return Ce;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled)
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          (e._activeTrigger.click = !e._activeTrigger
            .click), e._isWithActiveTrigger()
            ? e._enter(null, e)
            : e._leave(null, e);
        } else {
          if (this.getTipElement().classList.contains(Ne))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(
        this._timeout
      ), $.off(this._element.closest(xe), Me, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = $.trigger(this._element, this.constructor.Event.SHOW),
        e = g(this._element),
        s =
          null === e
            ? this._element.ownerDocument.documentElement.contains(
                this._element
              )
            : e.contains(this._element);
      if (t.defaultPrevented || !s) return;
      "tooltip" === this.constructor.NAME &&
        this.tip &&
        this.getTitle() !== this.tip.querySelector(Pe).innerHTML &&
        (this._disposePopper(), this.tip.remove(), (this.tip = null));
      const n = this.getTipElement(),
        o = (t => {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));
          return t;
        })(this.constructor.NAME);
      n.setAttribute(
        "id",
        o
      ), this._element.setAttribute("aria-describedby", o), this._config.animation && n.classList.add(Oe);
      const r =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, n, this._element)
            : this._config.placement,
        a = this._getAttachment(r);
      this._addAttachmentClass(a);
      const { container: l } = this._config;
      z.set(
        n,
        this.constructor.DATA_KEY,
        this
      ), this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(n), $.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : (this._popper = i.createPopper(this._element, n, this._getPopperConfig(a))), n.classList.add(Ne);
      const c = this._resolvePossibleFunction(this._config.customClass);
      c && n.classList.add(...c.split(" ")), "ontouchstart" in
        document.documentElement &&
        [].concat(...document.body.children).forEach(t => {
          $.on(t, "mouseover", _);
        });
      const h = this.tip.classList.contains(Oe);
      this._queueCallback(
        () => {
          const t = this._hoverState;
          (this._hoverState = null), $.trigger(
            this._element,
            this.constructor.Event.SHOWN
          ), t === Ie && this._leave(null, this);
        },
        this.tip,
        h
      );
    }
    hide() {
      if (!this._popper) return;
      const t = this.getTipElement();
      if (
        $.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
      )
        return;
      t.classList.remove(
        Ne
      ), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => $.off(t, "mouseover", _)), (this._activeTrigger.click = !1), (this._activeTrigger.focus = !1), (this._activeTrigger.hover = !1);
      const e = this.tip.classList.contains(Oe);
      this._queueCallback(
        () => {
          this._isWithActiveTrigger() ||
            (
              this._hoverState !== De && t.remove(),
              this._cleanTipClass(),
              this._element.removeAttribute("aria-describedby"),
              $.trigger(this._element, this.constructor.Event.HIDDEN),
              this._disposePopper()
            );
        },
        this.tip,
        e
      ), (this._hoverState = "");
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      t.innerHTML = this._config.template;
      const e = t.children[0];
      return this.setContent(
        e
      ), e.classList.remove(Oe, Ne), (this.tip = e), this.tip;
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), Pe);
    }
    _sanitizeAndSetContent(t, e, i) {
      const s = Y.findOne(i, t);
      e || !s ? this.setElementContent(s, e) : s.remove();
    }
    setElementContent(t, e) {
      if (null !== t)
        return l(e)
          ? (
              (e = c(e)),
              void (this._config.html
                ? e.parentNode !== t && ((t.innerHTML = ""), t.append(e))
                : (t.textContent = e.textContent))
            )
          : void (this._config.html
              ? (
                  this._config.sanitize &&
                    (e = we(
                      e,
                      this._config.allowList,
                      this._config.sanitizeFn
                    )),
                  (t.innerHTML = e)
                )
              : (t.textContent = e));
    }
    getTitle() {
      const t =
        this._element.getAttribute("data-bs-original-title") ||
        this._config.title;
      return this._resolvePossibleFunction(t);
    }
    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }
    _initializeOnDelegatedTarget(t, e) {
      return (
        e ||
        this.constructor.getOrCreateInstance(
          t.delegateTarget,
          this._getDelegateConfig()
        )
      );
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map(t => Number.parseInt(t, 10))
        : "function" == typeof t ? e => t(e, this._element) : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t.call(this._element) : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements }
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary }
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` }
          },
          {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: t => this._handlePopperPlacementChange(t)
          }
        ],
        onFirstUpdate: t => {
          t.options.placement !== t.placement &&
            this._handlePopperPlacementChange(t);
        }
      };
      return {
        ...e,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig)
      };
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
      );
    }
    _getAttachment(t) {
      return ke[t.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach(t => {
        if ("click" === t)
          $.on(
            this._element,
            this.constructor.Event.CLICK,
            this._config.selector,
            t => this.toggle(t)
          );
        else if ("manual" !== t) {
          const e =
              t === je
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN,
            i =
              t === je
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT;
          $.on(this._element, e, this._config.selector, t =>
            this._enter(t)
          ), $.on(this._element, i, this._config.selector, t => this._leave(t));
        }
      }), (this._hideModalHandler = () => {
        this._element && this.hide();
      }), $.on(this._element.closest(xe), Me, this._hideModalHandler), this._config.selector ? (this._config = { ...this._config, trigger: "manual", selector: "" }) : this._fixTitle();
    }
    _fixTitle() {
      const t = this._element.getAttribute("title"),
        e = typeof this._element.getAttribute("data-bs-original-title");
      (t || "string" !== e) &&
        (
          this._element.setAttribute("data-bs-original-title", t || ""),
          !t ||
            this._element.getAttribute("aria-label") ||
            this._element.textContent ||
            this._element.setAttribute("aria-label", t),
          this._element.setAttribute("title", "")
        );
    }
    _enter(t, e) {
      (e = this._initializeOnDelegatedTarget(
        t,
        e
      )), t && (e._activeTrigger["focusin" === t.type ? He : je] = !0), e
        .getTipElement()
        .classList.contains(Ne) || e._hoverState === De
        ? (e._hoverState = De)
        : (
            clearTimeout(e._timeout),
            (e._hoverState = De),
            e._config.delay && e._config.delay.show
              ? (e._timeout = setTimeout(() => {
                  e._hoverState === De && e.show();
                }, e._config.delay.show))
              : e.show()
          );
    }
    _leave(t, e) {
      (e = this._initializeOnDelegatedTarget(
        t,
        e
      )), t && (e._activeTrigger["focusout" === t.type ? He : je] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() ||
        (
          clearTimeout(e._timeout),
          (e._hoverState = Ie),
          e._config.delay && e._config.delay.hide
            ? (e._timeout = setTimeout(() => {
                e._hoverState === Ie && e.hide();
              }, e._config.delay.hide))
            : e.hide()
        );
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger)
        if (this._activeTrigger[t]) return !0;
      return !1;
    }
    _getConfig(t) {
      const e = X.getDataAttributes(this._element);
      return Object.keys(e).forEach(t => {
        Te.has(t) && delete e[t];
      }), ((t = { ...this.constructor.Default, ...e, ...("object" == typeof t && t ? t : {}) }).container = !1 === t.container ? document.body : c(t.container)), "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), h(Ae, t, this.constructor.DefaultType), t.sanitize && (t.template = we(t.template, t.allowList, t.sanitizeFn)), t;
    }
    _getDelegateConfig() {
      const t = {};
      for (const e in this._config)
        this.constructor.Default[e] !== this._config[e] &&
          (t[e] = this._config[e]);
      return t;
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
        i = t.getAttribute("class").match(e);
      null !== i &&
        i.length > 0 &&
        i.map(t => t.trim()).forEach(e => t.classList.remove(e));
    }
    _getBasicClassPrefix() {
      return "bs-tooltip";
    }
    _handlePopperPlacementChange(t) {
      const { state: e } = t;
      e &&
        (
          (this.tip = e.elements.popper),
          this._cleanTipClass(),
          this._addAttachmentClass(this._getAttachment(e.placement))
        );
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null));
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = $e.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  v($e);
  const Be = {
      ...$e.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    },
    ze = { ...$e.DefaultType, content: "(string|element|function)" },
    Re = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover"
    };
  class Fe extends $e {
    static get Default() {
      return Be;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return Re;
    }
    static get DefaultType() {
      return ze;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent(t) {
      this._sanitizeAndSetContent(
        t,
        this.getTitle(),
        ".popover-header"
      ), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    _getBasicClassPrefix() {
      return "bs-popover";
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = Fe.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  v(Fe);
  const qe = "scrollspy",
    We = { offset: 10, method: "auto", target: "" },
    Ue = { offset: "number", method: "string", target: "(string|element)" },
    Ke = "active",
    Ve = ".nav-link, .list-group-item, .dropdown-item",
    Xe = "position";
  class Ye extends R {
    constructor(t, e) {
      super(
        t
      ), (this._scrollElement = "BODY" === this._element.tagName ? window : this._element), (this._config = this._getConfig(e)), (this._offsets = []), (this._targets = []), (this._activeTarget = null), (this._scrollHeight = 0), $.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process();
    }
    static get Default() {
      return We;
    }
    static get NAME() {
      return qe;
    }
    refresh() {
      const t =
          this._scrollElement === this._scrollElement.window ? "offset" : Xe,
        e = "auto" === this._config.method ? t : this._config.method,
        i = e === Xe ? this._getScrollTop() : 0;
      (this._offsets = []), (this._targets = []), (this._scrollHeight = this._getScrollHeight()), Y.find(
        Ve,
        this._config.target
      )
        .map(t => {
          const s = o(t),
            n = s ? Y.findOne(s) : null;
          if (n) {
            const t = n.getBoundingClientRect();
            if (t.width || t.height) return [X[e](n).top + i, s];
          }
          return null;
        })
        .filter(t => t)
        .sort((t, e) => t[0] - e[0])
        .forEach(t => {
          this._offsets.push(t[0]), this._targets.push(t[1]);
        });
    }
    dispose() {
      $.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
    }
    _getConfig(t) {
      return ((t = {
        ...We,
        ...X.getDataAttributes(this._element),
        ...("object" == typeof t && t ? t : {})
      }).target =
        c(t.target) || document.documentElement), h(qe, t, Ue), t;
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        i = this._config.offset + e - this._getOffsetHeight();
      if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
          return (this._activeTarget = null), void this._clear();
        for (let e = this._offsets.length; e--; )
          this._activeTarget !== this._targets[e] &&
            t >= this._offsets[e] &&
            (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
            this._activate(this._targets[e]);
      }
    }
    _activate(t) {
      (this._activeTarget = t), this._clear();
      const e = Ve.split(",").map(
          e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`
        ),
        i = Y.findOne(e.join(","), this._config.target);
      i.classList.add(Ke), i.classList.contains("dropdown-item")
        ? Y.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(
            Ke
          )
        : Y.parents(i, ".nav, .list-group").forEach(t => {
            Y.prev(t, ".nav-link, .list-group-item").forEach(t =>
              t.classList.add(Ke)
            ), Y.prev(t, ".nav-item").forEach(t => {
              Y.children(t, ".nav-link").forEach(t => t.classList.add(Ke));
            });
          }), $.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: t });
    }
    _clear() {
      Y.find(Ve, this._config.target)
        .filter(t => t.classList.contains(Ke))
        .forEach(t => t.classList.remove(Ke));
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = Ye.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  $.on(window, "load.bs.scrollspy.data-api", () => {
    Y.find('[data-bs-spy="scroll"]').forEach(t => new Ye(t));
  }), v(Ye);
  const Qe = "active",
    Ge = "fade",
    Ze = "show",
    Je = ".active",
    ti = ":scope > li > .active";
  class ei extends R {
    static get NAME() {
      return "tab";
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains(Qe)
      )
        return;
      let t;
      const e = r(this._element),
        i = this._element.closest(".nav, .list-group");
      if (i) {
        const e = "UL" === i.nodeName || "OL" === i.nodeName ? ti : Je;
        (t = Y.find(e, i)), (t = t[t.length - 1]);
      }
      const s = t
        ? $.trigger(t, "hide.bs.tab", { relatedTarget: this._element })
        : null;
      if (
        $.trigger(this._element, "show.bs.tab", { relatedTarget: t })
          .defaultPrevented ||
        (null !== s && s.defaultPrevented)
      )
        return;
      this._activate(this._element, i);
      const n = () => {
        $.trigger(t, "hidden.bs.tab", {
          relatedTarget: this._element
        }), $.trigger(this._element, "shown.bs.tab", { relatedTarget: t });
      };
      e ? this._activate(e, e.parentNode, n) : n();
    }
    _activate(t, e, i) {
      const s = (!e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
          ? Y.children(e, Je)
          : Y.find(ti, e))[0],
        n = i && s && s.classList.contains(Ge),
        o = () => this._transitionComplete(t, s, i);
      s && n ? (s.classList.remove(Ze), this._queueCallback(o, t, !0)) : o();
    }
    _transitionComplete(t, e, i) {
      if (e) {
        e.classList.remove(Qe);
        const t = Y.findOne(":scope > .dropdown-menu .active", e.parentNode);
        t && t.classList.remove(Qe), "tab" === e.getAttribute("role") &&
          e.setAttribute("aria-selected", !1);
      }
      t.classList.add(
        Qe
      ), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), f(t), t.classList.contains(Ge) && t.classList.add(Ze);
      let s = t.parentNode;
      if (
        (
          s && "LI" === s.nodeName && (s = s.parentNode),
          s && s.classList.contains("dropdown-menu")
        )
      ) {
        const e = t.closest(".dropdown");
        e &&
          Y.find(".dropdown-toggle", e).forEach(t =>
            t.classList.add(Qe)
          ), t.setAttribute("aria-expanded", !0);
      }
      i && i();
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = ei.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  $.on(
    document,
    "click.bs.tab.data-api",
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function(t) {
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(), u(this) ||
        ei.getOrCreateInstance(this).show();
    }
  ), v(ei);
  const ii = "toast",
    si = "hide",
    ni = "show",
    oi = "showing",
    ri = { animation: "boolean", autohide: "boolean", delay: "number" },
    ai = { animation: !0, autohide: !0, delay: 5e3 };
  class li extends R {
    constructor(t, e) {
      super(
        t
      ), (this._config = this._getConfig(e)), (this._timeout = null), (this._hasMouseInteraction = !1), (this._hasKeyboardInteraction = !1), this._setListeners();
    }
    static get DefaultType() {
      return ri;
    }
    static get Default() {
      return ai;
    }
    static get NAME() {
      return ii;
    }
    show() {
      $.trigger(this._element, "show.bs.toast").defaultPrevented ||
        (
          this._clearTimeout(),
          this._config.animation && this._element.classList.add("fade"),
          this._element.classList.remove(si),
          f(this._element),
          this._element.classList.add(ni),
          this._element.classList.add(oi),
          this._queueCallback(
            () => {
              this._element.classList.remove(oi), $.trigger(
                this._element,
                "shown.bs.toast"
              ), this._maybeScheduleHide();
            },
            this._element,
            this._config.animation
          )
        );
    }
    hide() {
      this._element.classList.contains(ni) &&
        ($.trigger(this._element, "hide.bs.toast").defaultPrevented ||
          (
            this._element.classList.add(oi),
            this._queueCallback(
              () => {
                this._element.classList.add(si), this._element.classList.remove(
                  oi
                ), this._element.classList.remove(ni), $.trigger(
                  this._element,
                  "hidden.bs.toast"
                );
              },
              this._element,
              this._config.animation
            )
          ));
    }
    dispose() {
      this._clearTimeout(), this._element.classList.contains(ni) && this._element.classList.remove(ni), super.dispose();
    }
    _getConfig(t) {
      return (t = {
        ...ai,
        ...X.getDataAttributes(this._element),
        ...("object" == typeof t && t ? t : {})
      }), h(ii, t, this.constructor.DefaultType), t;
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      $.on(this._element, "mouseover.bs.toast", t =>
        this._onInteraction(t, !0)
      ), $.on(this._element, "mouseout.bs.toast", t => this._onInteraction(t, !1)), $.on(this._element, "focusin.bs.toast", t => this._onInteraction(t, !0)), $.on(this._element, "focusout.bs.toast", t => this._onInteraction(t, !1));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = li.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return F(
    li
  ), v(li), { Alert: q, Button: U, Carousel: at, Collapse: mt, Dropdown: Ht, Modal: he, Offcanvas: me, Popover: Fe, ScrollSpy: Ye, Tab: ei, Toast: li, Tooltip: $e };
}); /*! This file is auto-generated */
//# sourceMappingURL=bootstrap.min.js.map
window.addComment = (function(v) {
  var I,
    C,
    h,
    E = v.document,
    b = {
      commentReplyClass: "comment-reply-link",
      commentReplyTitleId: "reply-title",
      cancelReplyId: "cancel-comment-reply-link",
      commentFormId: "commentform",
      temporaryFormId: "wp-temp-form-div",
      parentIdFieldId: "comment_parent",
      postIdFieldId: "comment_post_ID"
    },
    e = v.MutationObserver || v.WebKitMutationObserver || v.MozMutationObserver,
    r = "querySelector" in E && "addEventListener" in v,
    n = !!E.documentElement.dataset;
  function t() {
    d(), e && new e(o).observe(E.body, { childList: !0, subtree: !0 });
  }
  function d(e) {
    if (r && ((I = g(b.cancelReplyId)), (C = g(b.commentFormId)), I)) {
      I.addEventListener("touchstart", l), I.addEventListener("click", l);
      function t(e) {
        if (
          (e.metaKey || e.ctrlKey) &&
          13 === e.keyCode &&
          "a" !== E.activeElement.tagName.toLowerCase()
        )
          return C.removeEventListener(
            "keydown",
            t
          ), e.preventDefault(), C.submit.click(), !1;
      }
      C && C.addEventListener("keydown", t);
      for (
        var n,
          d = (function(e) {
            var t = b.commentReplyClass;
            (e && e.childNodes) || (e = E);
            e = E.getElementsByClassName
              ? e.getElementsByClassName(t)
              : e.querySelectorAll("." + t);
            return e;
          })(e),
          o = 0,
          i = d.length;
        o < i;
        o++
      )
        (n = d[o]).addEventListener("touchstart", a), n.addEventListener(
          "click",
          a
        );
    }
  }
  function l(e) {
    var t,
      n,
      d = g(b.temporaryFormId);
    d &&
      h &&
      (
        (g(b.parentIdFieldId).value = "0"),
        (t = d.textContent),
        d.parentNode.replaceChild(h, d),
        (this.style.display = "none"),
        (n =
          (d = (d = g(b.commentReplyTitleId)) && d.firstChild) &&
          d.nextSibling),
        d &&
          d.nodeType === Node.TEXT_NODE &&
          t &&
          (
            n &&
              "A" === n.nodeName &&
              n.id !== b.cancelReplyId &&
              (n.style.display = ""),
            (d.textContent = t)
          ),
        e.preventDefault()
      );
  }
  function a(e) {
    var t = g(b.commentReplyTitleId),
      t = t && t.firstChild.textContent,
      n = this,
      d = m(n, "belowelement"),
      o = m(n, "commentid"),
      i = m(n, "respondelement"),
      r = m(n, "postid"),
      n = m(n, "replyto") || t;
    d &&
      o &&
      i &&
      r &&
      !1 === v.addComment.moveForm(d, o, i, r, n) &&
      e.preventDefault();
  }
  function o(e) {
    for (var t = e.length; t--; ) if (e[t].addedNodes.length) return void d();
  }
  function m(e, t) {
    return n ? e.dataset[t] : e.getAttribute("data-" + t);
  }
  function g(e) {
    return E.getElementById(e);
  }
  return r && "loading" !== E.readyState
    ? t()
    : r && v.addEventListener("DOMContentLoaded", t, !1), {
    init: d,
    moveForm: function(e, t, n, d, o) {
      var i,
        r,
        l,
        a,
        m,
        c,
        s,
        e = g(e),
        n = ((h = g(n)), g(b.parentIdFieldId)),
        y = g(b.postIdFieldId),
        p = g(b.commentReplyTitleId),
        u = (p = p && p.firstChild) && p.nextSibling;
      if (e && h && n) {
        void 0 === o && (o = p && p.textContent), (a = h), (m =
          b.temporaryFormId), (c = g(m)), (s = (s = g(b.commentReplyTitleId))
          ? s.firstChild.textContent
          : ""), c ||
          (
            ((c = E.createElement("div")).id = m),
            (c.style.display = "none"),
            (c.textContent = s),
            a.parentNode.insertBefore(c, a)
          ), d && y && (y.value = d), (n.value = t), (I.style.display =
          ""), e.parentNode.insertBefore(h, e.nextSibling), p &&
          p.nodeType === Node.TEXT_NODE &&
          (
            u &&
              "A" === u.nodeName &&
              u.id !== b.cancelReplyId &&
              (u.style.display = "none"),
            (p.textContent = o)
          ), (I.onclick = function() {
          return !1;
        });
        try {
          for (var f = 0; f < C.elements.length; f++)
            if (
              (
                (i = C.elements[f]),
                (r = !1),
                "getComputedStyle" in v
                  ? (l = v.getComputedStyle(i))
                  : E.documentElement.currentStyle && (l = i.currentStyle),
                ((i.offsetWidth <= 0 && i.offsetHeight <= 0) ||
                  "hidden" === l.visibility) &&
                  (r = !0),
                "hidden" !== i.type && !i.disabled && !r
              )
            ) {
              i.focus();
              break;
            }
        } catch (e) {}
        return !1;
      }
    }
  };
})(window);
(function($) {
  "use strict";
  function neeon_color_mode() {
    window.onload = function() {
      const toggleSwitch = document.querySelector(
        '.header__switch__label input[type="checkbox"]'
      );
      const currentTheme = localStorage.getItem("theme");
      if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
        if (currentTheme === "dark-mode") {
          toggleSwitch.checked = !0;
        }
      }
      function switchTheme(e) {
        if (e.target.checked) {
          document.documentElement.setAttribute("data-theme", "dark-mode");
          localStorage.setItem("theme", "dark-mode");
        } else {
          document.documentElement.setAttribute("data-theme", "light-mode");
          localStorage.setItem("theme", "light-mode");
        }
      }
      if (toggleSwitch) {
        toggleSwitch.addEventListener("change", switchTheme, !1);
      }
    };
  }
  neeon_color_mode();
})(jQuery);
!(function(e) {
  (e.fn.ticker = function(t) {
    var o = e.extend({}, e.fn.ticker.defaults, t);
    if (0 == e(this).length)
      return window.console && window.console.log
        ? window.console.log("Element does not exist in DOM!")
        : alert("Element does not exist in DOM!"), !1;
    var n = "#" + e(this).attr("id"),
      i = e(this).get(0).tagName;
    return this.each(function() {
      function t(e) {
        var t,
          o = 0;
        for (t in e) e.hasOwnProperty(t) && o++;
        return o;
      }
      function d() {
        var e = new Date();
        return e.getTime();
      }
      function l(e) {
        o.debugMode &&
          (window.console && window.console.log
            ? window.console.log(e)
            : alert(e));
      }
      function a() {
        s(), e(n).wrap(
          '<div id="' + f.dom.wrapperID.replace("#", "") + '"></div>'
        ), e(f.dom.wrapperID).children().remove(), e(f.dom.wrapperID).append('<div id="' + f.dom.tickerID.replace("#", "") + '" class="ticker"><div id="' + f.dom.titleID.replace("#", "") + '" class="ticker-title"><span><!-- --></span></div><p id="' + f.dom.contentID.replace("#", "") + '" class="ticker-content"></p><div id="' + f.dom.revealID.replace("#", "") + '" class="ticker-swipe"><span><!-- --></span></div></div>'), e(f.dom.wrapperID).removeClass("no-js").addClass("ticker-wrapper has-js " + o.direction), e(f.dom.tickerElem + "," + f.dom.contentID).hide(), o.controls &&
          (
            e(
              f.dom.controlsID
            ).on("click mouseover mousedown mouseout mouseup", function(t) {
              var o = t.target.id;
              if ("click" == t.type)
                switch (o) {
                  case f.dom.prevID.replace("#", ""):
                    (f.paused = !0), e(f.dom.playPauseID).addClass("paused"), h(
                      "prev"
                    );
                    break;
                  case f.dom.nextID.replace("#", ""):
                    (f.paused = !0), e(f.dom.playPauseID).addClass("paused"), h(
                      "next"
                    );
                    break;
                  case f.dom.playPauseID.replace("#", ""):
                    1 == f.play
                      ? (
                          (f.paused = !0),
                          e(f.dom.playPauseID).addClass("paused"),
                          p()
                        )
                      : (
                          (f.paused = !1),
                          e(f.dom.playPauseID).removeClass("paused"),
                          u()
                        );
                }
              else
                "mouseover" == t.type && e("#" + o).hasClass("controls")
                  ? e("#" + o).addClass("over")
                  : "mousedown" == t.type && e("#" + o).hasClass("controls")
                    ? e("#" + o).addClass("down")
                    : "mouseup" == t.type && e("#" + o).hasClass("controls")
                      ? e("#" + o).removeClass("down")
                      : "mouseout" == t.type &&
                        e("#" + o).hasClass("controls") &&
                        e("#" + o).removeClass("over");
            }),
            e(f.dom.wrapperID).append(
              '<ul id="' +
                f.dom.controlsID.replace("#", "") +
                '" class="ticker-controls"><li id="' +
                f.dom.playPauseID.replace("#", "") +
                '" class="jnt-play-pause controls"><a href=""><!-- --></a></li><li id="' +
                f.dom.prevID.replace("#", "") +
                '" class="jnt-prev controls"><a href=""><!-- --></a></li><li id="' +
                f.dom.nextID.replace("#", "") +
                '" class="jnt-next controls"><a href=""><!-- --></a></li></ul>'
            )
          ), "fade" != o.displayType &&
          e(f.dom.contentID)
            .mouseover(function() {
              0 == f.paused && p();
            })
            .mouseout(function() {
              0 == f.paused && u();
            }), o.ajaxFeed || r();
      }
      function s() {
        if (0 == f.contentLoaded)
          if (o.ajaxFeed)
            "xml" == o.feedType
              ? e.ajax({
                  url: o.feedUrl,
                  cache: !1,
                  dataType: o.feedType,
                  async: !0,
                  success: function(e) {
                    count = 0;
                    for (var n = 0; n < e.childNodes.length; n++)
                      "rss" == e.childNodes[n].nodeName &&
                        (xmlContent = e.childNodes[n]);
                    for (var i = 0; i < xmlContent.childNodes.length; i++)
                      "channel" == xmlContent.childNodes[i].nodeName &&
                        (xmlChannel = xmlContent.childNodes[i]);
                    for (var d = 0; d < xmlChannel.childNodes.length; d++)
                      if ("item" == xmlChannel.childNodes[d].nodeName) {
                        xmlItems = xmlChannel.childNodes[d];
                        for (
                          var a, s = !1, c = 0;
                          c < xmlItems.childNodes.length;
                          c++
                        )
                          "title" == xmlItems.childNodes[c].nodeName
                            ? (a = xmlItems.childNodes[c].lastChild.nodeValue)
                            : "link" == xmlItems.childNodes[c].nodeName &&
                              (s =
                                xmlItems.childNodes[c].lastChild
                                  .nodeValue), a !== !1 &&
                            "" != a &&
                            s !== !1 &&
                            (
                              (f.newsArr["item-" + count] = {
                                type: o.titleText,
                                content: '<a href="' + s + '">' + a + "</a>"
                              }),
                              count++,
                              (a = !1),
                              (s = !1)
                            );
                      }
                    return t(f.newsArr) < 1
                      ? (
                          l(
                            "Couldn't find any content from the XML feed for the ticker to use!"
                          ),
                          !1
                        )
                      : ((f.contentLoaded = !0), void r());
                  }
                })
              : l("Code Me!");
          else {
            if (!o.htmlFeed)
              return l(
                "The ticker is set to not use any types of content! Check the settings for the ticker."
              ), !1;
            if (!(e(n + " LI").length > 0))
              return l(
                "Couldn't find HTML any content for the ticker to use!"
              ), !1;
            e(n + " LI").each(function(t) {
              f.newsArr["item-" + t] = {
                type: o.titleText,
                content: e(this).html()
              };
            });
          }
      }
      function r() {
        (f.contentLoaded = !0), e(f.dom.titleElem).html(f.newsArr["item-" + f.position].type), e(f.dom.contentID).html(f.newsArr["item-" + f.position].content), f.position == t(f.newsArr) - 1 ? (f.position = 0) : f.position++, (distance = e(f.dom.contentID).width()), (time = distance / o.speed), c();
      }
      function c() {
        if ((e(f.dom.contentID).css("opacity", "1"), !f.play)) return !1;
        var t = e(f.dom.titleID).width() + 20;
        e(f.dom.revealID).css(o.direction, t + "px"), "fade" == o.displayType
          ? e(f.dom.revealID).hide(0, function() {
              e(f.dom.contentID)
                .css(o.direction, t + "px")
                .fadeIn(o.fadeInSpeed, m);
            })
          : "scroll" == o.displayType ||
            e(f.dom.revealElem).show(0, function() {
              e(f.dom.contentID)
                .css(o.direction, t + "px")
                .show(), (contentWindowSize = e(f.dom.tickerID).width() - e(f.dom.titleID).width() - 20), e(f.dom.contentID).width() <= contentWindowSize ? ((animationAction = "right" == o.direction ? { marginRight: distance + "px" } : { marginLeft: distance + "px" }), e(f.dom.revealID).css("margin-" + o.direction, "0px").delay(20).animate(animationAction, time, "linear", m)) : ((delay_scroll = contentWindowSize / o.speed), (time_scroll = e(f.dom.contentID).width() / o.speed - delay_scroll), (animationAction = "right" == o.direction ? { marginRight: contentWindowSize - 7 + "px" } : { marginLeft: contentWindowSize - 7 + "px" }), e(f.dom.revealID).css("margin-" + o.direction, "0px").delay(20).animate(animationAction, delay_scroll, "linear"), (scrollSize = e(f.dom.titleID).width() + 20 - e(f.dom.contentID).width() + contentWindowSize), (animationAction_scroll = "right" == o.direction ? { right: scrollSize + "px" } : { left: scrollSize + "px" }), e(f.dom.contentID).delay(delay_scroll).animate(animationAction_scroll, time_scroll, "linear", m));
            });
      }
      function m() {
        f.play
          ? (
              e(f.dom.contentID).delay(o.pauseOnItems).fadeOut(o.fadeOutSpeed),
              "fade" == o.displayType
                ? e(f.dom.contentID).fadeOut(o.fadeOutSpeed, function() {
                    e(f.dom.wrapperID)
                      .find(f.dom.revealElem + "," + f.dom.contentID)
                      .hide()
                      .end()
                      .find(f.dom.tickerID + "," + f.dom.revealID)
                      .show()
                      .end()
                      .find(f.dom.tickerID + "," + f.dom.revealID)
                      .removeAttr("style"), r();
                  })
                : e(f.dom.revealID).hide(0, function() {
                    e(f.dom.contentID).fadeOut(o.fadeOutSpeed, function() {
                      e(f.dom.wrapperID)
                        .find(f.dom.revealElem + "," + f.dom.contentID)
                        .hide()
                        .end()
                        .find(f.dom.tickerID + "," + f.dom.revealID)
                        .show()
                        .end()
                        .find(f.dom.tickerID + "," + f.dom.revealID)
                        .removeAttr("style"), r();
                    });
                  })
            )
          : e(f.dom.revealElem).hide();
      }
      function p() {
        (f.play = !1), e(f.dom.tickerID + "," + f.dom.revealID + "," + f.dom.titleID + "," + f.dom.titleElem + "," + f.dom.revealElem + "," + f.dom.contentID).stop(!0, !0), e(f.dom.revealID + "," + f.dom.revealElem).hide(), e(f.dom.wrapperID).find(f.dom.titleID + "," + f.dom.titleElem).show().end().find(f.dom.contentID).show();
      }
      function u() {
        (f.play = !0), (f.paused = !1), m();
      }
      function h(o) {
        switch ((p(), o)) {
          case "prev":
            0 == f.position
              ? (f.position = t(f.newsArr) - 2)
              : 1 == f.position
                ? (f.position = t(f.newsArr) - 1)
                : (f.position =
                    f.position -
                    2), e(f.dom.titleElem).html(f.newsArr["item-" + f.position].type), e(f.dom.contentID).html(f.newsArr["item-" + f.position].content);
            break;
          case "next":
            e(f.dom.titleElem).html(
              f.newsArr["item-" + f.position].type
            ), e(f.dom.contentID).html(f.newsArr["item-" + f.position].content);
        }
        f.position == t(f.newsArr) - 1 ? (f.position = 0) : f.position++;
      }
      var I = d(),
        f = {
          position: 0,
          time: 0,
          distance: 0,
          newsArr: {},
          play: !0,
          paused: !1,
          contentLoaded: !1,
          dom: {
            contentID: "#ticker-content-" + I,
            titleID: "#ticker-title-" + I,
            titleElem: "#ticker-title-" + I + " SPAN",
            tickerID: "#ticker-" + I,
            wrapperID: "#ticker-wrapper-" + I,
            revealID: "#ticker-swipe-" + I,
            revealElem: "#ticker-swipe-" + I + " SPAN",
            controlsID: "#ticker-controls-" + I,
            prevID: "#prev-" + I,
            nextID: "#next-" + I,
            playPauseID: "#play-pause-" + I
          }
        };
      return "UL" != i && "OL" != i && o.htmlFeed === !0
        ? (
            l(
              "Cannot use <" +
                i.toLowerCase() +
                "> type of element for this plugin - must of type <ul> or <ol>"
            ),
            !1
          )
        : (
            "rtl" == o.direction
              ? (o.direction = "right")
              : (o.direction = "left"),
            void a()
          );
    });
  }), (e.fn.ticker.defaults = {
    speed: 0.05,
    ajaxFeed: !1,
    feedUrl: "",
    feedType: "xml",
    displayType: "reveal",
    htmlFeed: !0,
    debugMode: !0,
    controls: !1,
    direction: "ltr",
    pauseOnItems: 3e3,
    fadeInSpeed: 600,
    fadeOutSpeed: 300
  }), e("#sample").ticker();
})(jQuery);
!(function(i) {
  i.fn.theiaStickySidebar = function(t) {
    function e(t, e) {
      var a = o(t, e);
      a ||
        (
          console.log(
            "TSS: Body width smaller than options.minWidth. Init is delayed."
          ),
          i(document).on(
            "scroll." + t.namespace,
            (function(t, e) {
              return function(a) {
                var n = o(t, e);
                n && i(this).unbind(a);
              };
            })(t, e)
          ),
          i(window).on(
            "resize." + t.namespace,
            (function(t, e) {
              return function(a) {
                var n = o(t, e);
                n && i(this).unbind(a);
              };
            })(t, e)
          )
        );
    }
    function o(t, e) {
      return (
        t.initialized === !0 ||
        (!(i("body").width() < t.minWidth) && (a(t, e), !0))
      );
    }
    function a(t, e) {
      t.initialized = !0;
      var o = i("#theia-sticky-sidebar-stylesheet-" + t.namespace);
      0 === o.length &&
        i("head").append(
          i(
            '<style id="theia-sticky-sidebar-stylesheet-' +
              t.namespace +
              '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'
          )
        ), e.each(function() {
        function e() {
          (a.fixedScrollTop = 0), a.sidebar.css({ "min-height": "1px" }), a.stickySidebar.css({ position: "static", width: "", transform: "none" });
        }
        function o(t) {
          var e = t.height();
          return t.children().each(function() {
            e = Math.max(e, i(this).height());
          }), e;
        }
        var a = {};
        if (
          (
            (a.sidebar = i(this)),
            (a.options = t || {}),
            (a.container = i(a.options.containerSelector)),
            0 == a.container.length && (a.container = a.sidebar.parent()),
            a.sidebar.parents().css("-webkit-transform", "none"),
            a.sidebar.css({
              position: a.options.defaultPosition,
              overflow: "visible",
              "-webkit-box-sizing": "border-box",
              "-moz-box-sizing": "border-box",
              "box-sizing": "border-box"
            }),
            (a.stickySidebar = a.sidebar.find(".theiaStickySidebar")),
            0 == a.stickySidebar.length
          )
        ) {
          var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
          a.sidebar
            .find("script")
            .filter(function(i, t) {
              return 0 === t.type.length || t.type.match(s);
            })
            .remove(), (a.stickySidebar = i("<div>")
            .addClass("theiaStickySidebar")
            .append(a.sidebar.children())), a.sidebar.append(a.stickySidebar);
        }
        (a.marginBottom = parseInt(
          a.sidebar.css("margin-bottom")
        )), (a.paddingTop = parseInt(a.sidebar.css("padding-top"))), (a.paddingBottom = parseInt(a.sidebar.css("padding-bottom")));
        var r = a.stickySidebar.offset().top,
          d = a.stickySidebar.outerHeight();
        a.stickySidebar.css(
          "padding-top",
          1
        ), a.stickySidebar.css("padding-bottom", 1), (r -= a.stickySidebar.offset().top), (d = a.stickySidebar.outerHeight() - d - r), 0 == r ? (a.stickySidebar.css("padding-top", 0), (a.stickySidebarPaddingTop = 0)) : (a.stickySidebarPaddingTop = 1), 0 == d ? (a.stickySidebar.css("padding-bottom", 0), (a.stickySidebarPaddingBottom = 0)) : (a.stickySidebarPaddingBottom = 1), (a.previousScrollTop = null), (a.fixedScrollTop = 0), e(), (a.onScroll = function(
          a
        ) {
          if (a.stickySidebar.is(":visible")) {
            if (i("body").width() < a.options.minWidth) return void e();
            if (a.options.disableOnResponsiveLayouts) {
              var s = a.sidebar.outerWidth("none" == a.sidebar.css("float"));
              if (s + 50 > a.container.width()) return void e();
            }
            var r = i(document).scrollTop(),
              d = "static";
            if (
              r >=
              a.sidebar.offset().top +
                (a.paddingTop - a.options.additionalMarginTop)
            ) {
              var c,
                p = a.paddingTop + t.additionalMarginTop,
                b = a.paddingBottom + a.marginBottom + t.additionalMarginBottom,
                l = a.sidebar.offset().top,
                f = a.sidebar.offset().top + o(a.container),
                h = 0 + t.additionalMarginTop,
                g = a.stickySidebar.outerHeight() + p + b < i(window).height();
              c = g
                ? h + a.stickySidebar.outerHeight()
                : i(window).height() -
                  a.marginBottom -
                  a.paddingBottom -
                  t.additionalMarginBottom;
              var u = l - r + a.paddingTop,
                S = f - r - a.paddingBottom - a.marginBottom,
                y = a.stickySidebar.offset().top - r,
                m = a.previousScrollTop - r;
              "fixed" == a.stickySidebar.css("position") &&
                "modern" == a.options.sidebarBehavior &&
                (y += m), "stick-to-top" == a.options.sidebarBehavior &&
                (y = t.additionalMarginTop), "stick-to-bottom" ==
                a.options.sidebarBehavior &&
                (y = c - a.stickySidebar.outerHeight()), (y =
                m > 0
                  ? Math.min(y, h)
                  : Math.max(
                      y,
                      c - a.stickySidebar.outerHeight()
                    )), (y = Math.max(y, u)), (y = Math.min(
                y,
                S - a.stickySidebar.outerHeight()
              ));
              var k = a.container.height() == a.stickySidebar.outerHeight();
              d =
                (k || y != h) && (k || y != c - a.stickySidebar.outerHeight())
                  ? r + y - a.sidebar.offset().top - a.paddingTop <=
                    t.additionalMarginTop
                    ? "static"
                    : "absolute"
                  : "fixed";
            }
            if ("fixed" == d) {
              var v = i(document).scrollLeft();
              a.stickySidebar.css({
                position: "fixed",
                width: n(a.stickySidebar) + "px",
                transform: "translateY(" + y + "px)",
                left:
                  a.sidebar.offset().left +
                  parseInt(a.sidebar.css("padding-left")) -
                  v +
                  "px",
                top: "0px"
              });
            } else if ("absolute" == d) {
              var x = {};
              "absolute" != a.stickySidebar.css("position") &&
                (
                  (x.position = "absolute"),
                  (x.transform =
                    "translateY(" +
                    (r +
                      y -
                      a.sidebar.offset().top -
                      a.stickySidebarPaddingTop -
                      a.stickySidebarPaddingBottom) +
                    "px)"),
                  (x.top = "0px")
                ), (x.width = n(a.stickySidebar) + "px"), (x.left =
                ""), a.stickySidebar.css(x);
            } else "static" == d && e();
            "static" != d &&
              1 == a.options.updateSidebarHeight &&
              a.sidebar.css({
                "min-height":
                  a.stickySidebar.outerHeight() +
                  a.stickySidebar.offset().top -
                  a.sidebar.offset().top +
                  a.paddingBottom
              }), (a.previousScrollTop = r);
          }
        }), a.onScroll(a), i(document).on(
          "scroll." + a.options.namespace,
          (function(i) {
            return function() {
              i.onScroll(i);
            };
          })(a)
        ), i(window).on(
          "resize." + a.options.namespace,
          (function(i) {
            return function() {
              i.stickySidebar.css({ position: "static" }), i.onScroll(i);
            };
          })(a)
        ), "undefined" != typeof ResizeSensor &&
          new ResizeSensor(
            a.stickySidebar[0],
            (function(i) {
              return function() {
                i.onScroll(i);
              };
            })(a)
          );
      });
    }
    function n(i) {
      var t;
      try {
        t = i[0].getBoundingClientRect().width;
      } catch (i) {}
      return "undefined" == typeof t && (t = i.width()), t;
    }
    var s = {
      containerSelector: "",
      additionalMarginTop: 0,
      additionalMarginBottom: 0,
      updateSidebarHeight: !0,
      minWidth: 0,
      disableOnResponsiveLayouts: !0,
      sidebarBehavior: "modern",
      defaultPosition: "relative",
      namespace: "TSS"
    };
    return (t = i.extend(s, t)), (t.additionalMarginTop =
      parseInt(t.additionalMarginTop) || 0), (t.additionalMarginBottom =
      parseInt(t.additionalMarginBottom) || 0), e(t, this), this;
  };
})(
  jQuery
); /*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!(function(a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function(a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function() {},
    u = !!window.jQuery,
    v = a(window),
    w = function(a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function(b, c, d, e) {
      var f = document.createElement("div");
      return (f.className = "mfp-" + b), d && (f.innerHTML = d), e
        ? c && c.appendChild(f)
        : ((f = a(f)), c && f.appendTo(c)), f;
    },
    y = function(c, d) {
      b.ev.triggerHandler(o + c, d), b.st.callbacks &&
        (
          (c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])
        );
    },
    z = function(c) {
      return (c === g && b.currTemplate.closeBtn) ||
        (
          (b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose)
          )),
          (g = c)
        ), b.currTemplate.closeBtn;
    },
    A = function() {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function() {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function() {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 =
        document.all &&
        !document.addEventListener), (b.isAndroid = /android/gi.test(
        c
      )), (b.isIOS = /iphone|ipad|ipod/gi.test(
        c
      )), (b.supportsTransition = B()), (b.probablyMobile =
        b.isAndroid ||
        b.isIOS ||
        /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
          navigator.userAgent
        )), (d = a(document)), (b.popupsCache = {});
    },
    open: function(c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]), (b.index =
          c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []), (f = ""), c.mainEl && c.mainEl.length
        ? (b.ev = c.mainEl.eq(0))
        : (b.ev = d), c.key
        ? (
            b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key])
          )
        : (b.currTemplate = {}), (b.st = a.extend(
        !0,
        {},
        a.magnificPopup.defaults,
        c
      )), (b.fixedContentPos =
        "auto" === b.st.fixedContentPos
          ? !b.probablyMobile
          : b.st.fixedContentPos), b.st.modal &&
        (
          (b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)
        ), b.bgOverlay ||
        (
          (b.bgOverlay = x("bg").on("click" + p, function() {
            b.close();
          })),
          (b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
            b._checkIfClose(a.target) && b.close();
          })),
          (b.container = x("container", b.wrap))
        ), (b.contentContainer = x("content")), b.st.preloader &&
        (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"), b.st.showCloseBtn &&
        (b.st.closeBtnInside
          ? (
              w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in")
            )
          : b.wrap.append(z())), b.st.alignTop &&
        (f += " mfp-align-top"), b.fixedContentPos
        ? b.wrap.css({
            overflow: b.st.overflowY,
            overflowX: "hidden",
            overflowY: b.st.overflowY
          })
        : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st
        .fixedBgPos === !1 ||
        ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
        b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st
        .enableEscapeKey &&
        d.on("keyup" + p, function(a) {
          27 === a.keyCode && b.close();
        }), v.on("resize" + p, function() {
        b.updateSize();
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f &&
        b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return b.isIE7 && (r += " mfp-ie7"), r &&
        b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a(
        "html"
      ).css(n), b.bgOverlay
        .add(b.wrap)
        .prependTo(b.st.prependTo || a(document.body)), (b._lastFocusedEl =
        document.activeElement), setTimeout(function() {
        b.content
          ? (b._addClassToMFP(q), b._setFocus())
          : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
      }, 16), (b.isOpen = !0), b.updateSize(k), y(m), c;
    },
    close: function() {
      b.isOpen &&
        (
          y(i),
          (b.isOpen = !1),
          b.st.removalDelay && !b.isLowIE && b.supportsTransition
            ? (
                b._addClassToMFP(r),
                setTimeout(function() {
                  b._close();
                }, b.st.removalDelay)
              )
            : b._close()
        );
    },
    _close: function() {
      y(h);
      var c = r + " " + q + " ";
      if (
        (
          b.bgOverlay.detach(),
          b.wrap.detach(),
          b.container.empty(),
          b.st.mainClass && (c += b.st.mainClass + " "),
          b._removeClassFromMFP(c),
          b.fixedContentPos
        )
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""), a(
          "html"
        ).css(e);
      }
      d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap
        .attr("class", "mfp-wrap")
        .removeAttr("style"), b.bgOverlay.attr(
        "class",
        "mfp-bg"
      ), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn ||
        (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
        (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()), b.st
        .autoFocusLast &&
        b._lastFocusedEl &&
        a(
          b._lastFocusedEl
        ).focus(), (b.currItem = null), (b.content = null), (b.currTemplate = null), (b.prevHeight = 0), y(
        j
      );
    },
    updateSize: function(a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function() {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed ||
        (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (
          y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
          (b.currItem = c),
          !b.currTemplate[d]
        )
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f), f
          ? (b.currTemplate[d] = a(f))
          : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      );
      b.appendContent(g, d), (c.preloaded = !0), y(n, c), (e =
        c.type), b.container.prepend(b.contentContainer), y("AfterChange");
    },
    appendContent: function(a, c) {
      (b.content = a), a
        ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
          ? b.content.find(".mfp-close").length || b.content.append(z())
          : (b.content = a)
        : (b.content = ""), y(k), b.container.addClass(
        "mfp-" + c + "-holder"
      ), b.contentContainer.append(b.content);
    },
    parseEl: function(c) {
      var d,
        e = b.items[c];
      if (
        (
          e.tagName
            ? (e = { el: a(e) })
            : ((d = e.type), (e = { data: e, src: e.src })),
          e.el
        )
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")), e.src ||
          (e.src = e.el.attr("href"));
      }
      return (e.type =
        d || b.st.type || "inline"), (e.index = c), (e.parsed = !0), (b.items[
        c
      ] = e), y("ElementParse", e), b.items[c];
    },
    addGroup: function(a, c) {
      var d = function(d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a), c.items
        ? ((c.isObj = !0), a.off(e).on(e, d))
        : (
            (c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d))
          );
    },
    _openClick: function(c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type &&
          (c.preventDefault(), b.isOpen && c.stopPropagation()), (e.el = a(
          c.mfpEl
        )), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
      }
    },
    updateStatus: function(a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d ||
          "loading" !== a ||
          (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e), (a = e.status), (d = e.text), b.preloader.html(
          d
        ), b.preloader.find("a").on("click", function(a) {
          a.stopImmediatePropagation();
        }), b.container.addClass("mfp-s-" + a), (c = a);
      }
    },
    _checkIfClose: function(c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function(a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function(a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function(a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function() {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function(c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function(b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(
        c,
        d
      ) {
        if (void 0 === d || d === !1) return !0;
        if (((e = c.split("_")), e.length > 1)) {
          var f = b.find(p + "-" + e[0]);
          if (f.length > 0) {
            var g = e[1];
            "replaceWith" === g
              ? f[0] !== d[0] && f.replaceWith(d)
              : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
          }
        } else b.find(p + "-" + c).html(d);
      });
    },
    _getScrollbarSize: function() {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"), document.body.appendChild(
          a
        ), (b.scrollbarSize =
          a.offsetWidth - a.clientWidth), document.body.removeChild(a);
      }
      return b.scrollbarSize;
    }
  }), (a.magnificPopup = {
    instance: null,
    proto: t.prototype,
    modules: [],
    open: function(b, c) {
      return A(), (b = b ? a.extend(!0, {}, b) : {}), (b.isObj = !0), (b.index =
        c || 0), this.instance.open(b);
    },
    close: function() {
      return a.magnificPopup.instance && a.magnificPopup.instance.close();
    },
    registerModule: function(b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(
        this.proto,
        c.proto
      ), this.modules.push(b);
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup:
        '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: !0
    }
  }), (a.fn.magnificPopup = function(c) {
    A();
    var d = a(this);
    if ("string" == typeof c)
      if ("open" === c) {
        var e,
          f = u ? d.data("magnificPopup") : d[0].magnificPopup,
          g = parseInt(arguments[1], 10) || 0;
        f.items
          ? (e = f.items[g])
          : (
              (e = d),
              f.delegate && (e = e.find(f.delegate)),
              (e = e.eq(g))
            ), b._openClick({ mfpEl: e }, d, f);
      } else
        b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    else
      (c = a.extend(!0, {}, c)), u
        ? d.data("magnificPopup", c)
        : (d[0].magnificPopup = c), b.addGroup(d, c);
    return d;
  });
  var C,
    D,
    E,
    F = "inline",
    G = function() {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function() {
        b.types.push(F), w(h + "." + F, function() {
          G();
        });
      },
      getInline: function(c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (
                D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
                (E = f.after(D).detach().removeClass(C))
              ), b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      }
    }
  });
  var H,
    I = "ajax",
    J = function() {
      H && a(document.body).removeClass(H);
    },
    K = function() {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function() {
        b.types.push(I), (H = b.st.ajax.cursor), w(h + "." + I, K), w(
          "BeforeChange." + I,
          K
        );
      },
      getAjax: function(c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function(d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g), b.appendContent(
                a(g.data),
                I
              ), (c.finished = !0), J(), b._setFocus(), setTimeout(function() {
                b.wrap.addClass(q);
              }, 16), b.updateStatus("ready"), y("AjaxContentAdded");
            },
            error: function() {
              J(), (c.finished = c.loadError = !0), b.updateStatus(
                "error",
                b.st.ajax.tError.replace("%url%", c.src)
              );
            }
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), "";
      }
    }
  });
  var L,
    M = function(c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function() {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"), w(m + d, function() {
          "image" === b.currItem.type &&
            c.cursor &&
            a(document.body).addClass(c.cursor);
        }), w(h + d, function() {
          c.cursor &&
            a(document.body).removeClass(c.cursor), v.off("resize" + p);
        }), w("Resize" + d, b.resizeImage), b.isLowIE &&
          w("AfterChange", b.resizeImage);
      },
      resizeImage: function() {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)), a.img.css(
            "max-height",
            b.wH - c
          );
        }
      },
      _onImageHasSize: function(a) {
        a.img &&
          (
            (a.hasSize = !0),
            L && clearInterval(L),
            (a.isCheckingImgSize = !1),
            y("ImageHasSize", a),
            a.imgHidden &&
              (
                b.content && b.content.removeClass("mfp-loading"),
                (a.imgHidden = !1)
              )
          );
      },
      findImageSize: function(a) {
        var c = 0,
          d = a.img[0],
          e = function(f) {
            L && clearInterval(L), (L = setInterval(function() {
              return d.naturalWidth > 0
                ? void b._onImageHasSize(a)
                : (
                    c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c ? e(50) : 100 === c && e(500))
                  );
            }, f));
          };
        e(1);
      },
      getImage: function(c, d) {
        var e = 0,
          f = function() {
            c &&
              (c.img[0].complete
                ? (
                    c.img.off(".mfploader"),
                    c === b.currItem &&
                      (b._onImageHasSize(c), b.updateStatus("ready")),
                    (c.hasSize = !0),
                    (c.loaded = !0),
                    y("ImageLoadComplete")
                  )
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function() {
            c &&
              (
                c.img.off(".mfploader"),
                c === b.currItem &&
                  (
                    b._onImageHasSize(c),
                    b.updateStatus("error", h.tError.replace("%url%", c.src))
                  ),
                (c.hasSize = !0),
                (c.loaded = !0),
                (c.loadError = !0)
              );
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"), c.el &&
            c.el.find("img").length &&
            (j.alt = c.el.find("img").attr("alt")), (c.img = a(j)
            .on("load.mfploader", f)
            .on("error.mfploader", g)), (j.src = c.src), i.is("img") &&
            (c.img = c.img.clone()), (j = c.img[0]), j.naturalWidth > 0
            ? (c.hasSize = !0)
            : j.width || (c.hasSize = !1);
        }
        return b._parseMarkup(
          d,
          { title: M(c), img_replaceWith: c.img },
          c
        ), b.resizeImage(), c.hasSize
          ? (
              L && clearInterval(L),
              c.loadError
                ? (
                    d.addClass("mfp-loading"),
                    b.updateStatus("error", h.tError.replace("%url%", c.src))
                  )
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d
            )
          : (
              b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                (
                  (c.imgHidden = !0),
                  d.addClass("mfp-loading"),
                  b.findImageSize(c)
                ),
              d
            );
      }
    }
  });
  var N,
    O = function() {
      return void 0 === N &&
        (N = void 0 !== document.createElement("p").style.MozTransform), N;
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function(a) {
        return a.is("img") ? a : a.find("img");
      }
    },
    proto: {
      initZoom: function() {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function(a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden"
                },
                f = "transition";
              return (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[
                f
              ] = d), b.css(e), b;
            },
            k = function() {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function() {
            if (b._allowZoom()) {
              if (
                (
                  clearTimeout(e),
                  b.content.css("visibility", "hidden"),
                  (a = b._getItemToZoom()),
                  !a
                )
              )
                return void k();
              (f = j(a)), f.css(b._getOffset()), b.wrap.append(
                f
              ), (e = setTimeout(function() {
                f.css(b._getOffset(!0)), (e = setTimeout(function() {
                  k(), setTimeout(function() {
                    f.remove(), (a = f = null), y("ZoomAnimationEnded");
                  }, 16);
                }, g));
              }, 16));
            }
          }), w(i + d, function() {
            if (b._allowZoom()) {
              if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                if (((a = b._getItemToZoom()), !a)) return;
                f = j(a);
              }
              f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css(
                "visibility",
                "hidden"
              ), setTimeout(function() {
                f.css(b._getOffset());
              }, 16);
            }
          }), w(h + d, function() {
            b._allowZoom() && (k(), f && f.remove(), (a = null));
          });
        }
      },
      _allowZoom: function() {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function() {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function(c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
        };
        return O()
          ? (h["-moz-transform"] = h.transform =
              "translate(" + e.left + "px," + e.top + "px)")
          : ((h.left = e.left), (h.top = e.top)), h;
      }
    }
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function(a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (
            a || (c[0].src = Q),
            b.isIE8 && c.css("display", a ? "block" : "none")
          );
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" }
      }
    },
    proto: {
      initIframe: function() {
        b.types.push(P), w("BeforeChange", function(a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0));
        }), w(h + "." + P, function() {
          R();
        });
      },
      getIframe: function(c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function() {
          return e.indexOf(this.index) > -1
            ? (
                this.id &&
                  (e =
                    "string" == typeof this.id
                      ? e.substr(
                          e.lastIndexOf(this.id) + this.id.length,
                          e.length
                        )
                      : this.id.call(this, e)),
                (e = this.src.replace("%id%", e)),
                !1
              )
            : void 0;
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(
          d,
          g,
          c
        ), b.updateStatus("ready"), d;
      }
    }
  });
  var S = function(a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function(a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function() {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (b.direction = !0), c && c.enabled
          ? (
              (f += " mfp-gallery"),
              w(m + e, function() {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function() {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }), d.on("keydown" + e, function(a) {
                  37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                });
              }),
              w("UpdateStatus" + e, function(a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function(a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function() {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s));
                  e.click(function() {
                    b.prev();
                  }), f.click(function() {
                    b.next();
                  }), b.container.append(e.add(f));
                }
              }),
              w(n + e, function() {
                b._preloadTimeout &&
                  clearTimeout(
                    b._preloadTimeout
                  ), (b._preloadTimeout = setTimeout(function() {
                  b.preloadNearbyImages(), (b._preloadTimeout = null);
                }, 16));
              }),
              void w(h + e, function() {
                d.off(
                  e
                ), b.wrap.off("click" + e), (b.arrowRight = b.arrowLeft = null);
              })
            )
          : !1;
      },
      next: function() {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function() {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function(a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function() {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function(c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" ===
            d.type &&
            (d.img = a('<img class="mfp-img" />')
              .on("load.mfploader", function() {
                d.hasSize = !0;
              })
              .on("error.mfploader", function() {
                (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
              })
              .attr("src", d.src)), (d.preloaded = !0);
        }
      }
    }
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function(a) {
        return a.src.replace(/\.\w+$/, function(a) {
          return "@2x" + a;
        });
      },
      ratio: 1
    },
    proto: {
      initRetina: function() {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c), c > 1 &&
            (
              w("ImageHasSize." + U, function(a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%"
                });
              }),
              w("ElementParse." + U, function(b, d) {
                d.src = a.replaceSrc(d, c);
              })
            );
        }
      }
    }
  }), A();
});
/*! WOW - v1.0.0 - 2014-07-30
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */ (function() {
  var a,
    b,
    c,
    d = function(a, b) {
      return function() {
        return a.apply(b, arguments);
      };
    },
    e =
      [].indexOf ||
      function(a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (b in this && this[b] === a) return b;
        return -1;
      };
  (b = (function() {
    function a() {}
    return (a.prototype.extend = function(a, b) {
      var c, d;
      for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
      return a;
    }), (a.prototype.isMobile = function(a) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        a
      );
    }), a;
  })()), (c =
    this.WeakMap ||
    this.MozWeakMap ||
    (c = (function() {
      function a() {
        (this.keys = []), (this.values = []);
      }
      return (a.prototype.get = function(a) {
        var b, c, d, e, f;
        for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
          if (((c = f[b]), c === a)) return this.values[b];
      }), (a.prototype.set = function(a, b) {
        var c, d, e, f, g;
        for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
          if (((d = g[c]), d === a)) return void (this.values[c] = b);
        return this.keys.push(a), this.values.push(b);
      }), a;
    })())), (a =
    this.MutationObserver ||
    this.WebkitMutationObserver ||
    this.MozMutationObserver ||
    (a = (function() {
      function a() {
        console.warn(
          "MutationObserver is not supported by your browser."
        ), console.warn(
          "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
        );
      }
      return (a.notSupported = !0), (a.prototype.observe = function() {}), a;
    })())), (this.WOW = (function() {
    function f(a) {
      null == a && (a = {}), (this.scrollCallback = d(
        this.scrollCallback,
        this
      )), (this.scrollHandler = d(this.scrollHandler, this)), (this.start = d(
        this.start,
        this
      )), (this.scrolled = !0), (this.config = this.util().extend(
        a,
        this.defaults
      )), (this.animationNameCache = new c());
    }
    return (f.prototype.defaults = {
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0
    }), (f.prototype.init = function() {
      var a;
      return (this.element = window.document.documentElement), "interactive" ===
        (a = document.readyState) || "complete" === a
        ? this.start()
        : document.addEventListener(
            "DOMContentLoaded",
            this.start
          ), (this.finished = []);
    }), (f.prototype.start = function() {
      var b, c, d, e;
      if (
        (
          (this.stopped = !1),
          (this.boxes = function() {
            var a, c, d, e;
            for (
              d = this.element.getElementsByClassName(
                this.config.boxClass
              ), e = [], a = 0, c = d.length;
              c > a;
              a++
            )
              (b = d[a]), e.push(b);
            return e;
          }.call(this)),
          (this.all = function() {
            var a, c, d, e;
            for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
              (b = d[a]), e.push(b);
            return e;
          }.call(this)),
          this.boxes.length
        )
      )
        if (this.disabled()) this.resetStyle();
        else {
          for (e = this.boxes, c = 0, d = e.length; d > c; c++)
            (b = e[c]), this.applyStyle(b, !0);
          window.addEventListener(
            "scroll",
            this.scrollHandler,
            !1
          ), window.addEventListener(
            "resize",
            this.scrollHandler,
            !1
          ), (this.interval = setInterval(this.scrollCallback, 50));
        }
      return this.config.live
        ? new a(
            (function(a) {
              return function(b) {
                var c, d, e, f, g;
                for (g = [], e = 0, f = b.length; f > e; e++)
                  (d = b[e]), g.push(
                    function() {
                      var a, b, e, f;
                      for (
                        e = d.addedNodes || [], f = [], a = 0, b = e.length;
                        b > a;
                        a++
                      )
                        (c = e[a]), f.push(this.doSync(c));
                      return f;
                    }.call(a)
                  );
                return g;
              };
            })(this)
          ).observe(document.body, { childList: !0, subtree: !0 })
        : void 0;
    }), (f.prototype.stop = function() {
      return (this.stopped = !0), window.removeEventListener(
        "scroll",
        this.scrollHandler,
        !1
      ), window.removeEventListener("resize", this.scrollHandler, !1), null !=
      this.interval
        ? clearInterval(this.interval)
        : void 0;
    }), (f.prototype.sync = function() {
      return a.notSupported ? this.doSync(this.element) : void 0;
    }), (f.prototype.doSync = function(a) {
      var b, c, d, f, g;
      if (!this.stopped) {
        if ((null == a && (a = this.element), 1 !== a.nodeType)) return;
        for (
          a = a.parentNode || a, f = a.getElementsByClassName(
            this.config.boxClass
          ), g = [], c = 0, d = f.length;
          d > c;
          c++
        )
          (b = f[c]), e.call(this.all, b) < 0
            ? (
                this.applyStyle(b, !0),
                this.boxes.push(b),
                this.all.push(b),
                g.push((this.scrolled = !0))
              )
            : g.push(void 0);
        return g;
      }
    }), (f.prototype.show = function(a) {
      return this.applyStyle(a), (a.className =
        "" + a.className + " " + this.config.animateClass);
    }), (f.prototype.applyStyle = function(a, b) {
      var c, d, e;
      return (d = a.getAttribute("data-wow-duration")), (c = a.getAttribute(
        "data-wow-delay"
      )), (e = a.getAttribute("data-wow-iteration")), this.animate(
        (function(f) {
          return function() {
            return f.customStyle(a, b, d, c, e);
          };
        })(this)
      );
    }), (f.prototype.animate = (function() {
      return "requestAnimationFrame" in window
        ? function(a) {
            return window.requestAnimationFrame(a);
          }
        : function(a) {
            return a();
          };
    })()), (f.prototype.resetStyle = function() {
      var a, b, c, d, e;
      for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
        (a = d[b]), e.push(a.setAttribute("style", "visibility: visible;"));
      return e;
    }), (f.prototype.customStyle = function(a, b, c, d, e) {
      return b && this.cacheAnimationName(a), (a.style.visibility = b
        ? "hidden"
        : "visible"), c &&
        this.vendorSet(a.style, { animationDuration: c }), d &&
        this.vendorSet(a.style, { animationDelay: d }), e &&
        this.vendorSet(a.style, {
          animationIterationCount: e
        }), this.vendorSet(a.style, {
        animationName: b ? "none" : this.cachedAnimationName(a)
      }), a;
    }), (f.prototype.vendors = [
      "moz",
      "webkit"
    ]), (f.prototype.vendorSet = function(a, b) {
      var c, d, e, f;
      f = [];
      for (c in b)
        (d = b[c]), (a["" + c] = d), f.push(
          function() {
            var b, f, g, h;
            for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++)
              (e = g[b]), h.push(
                (a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d)
              );
            return h;
          }.call(this)
        );
      return f;
    }), (f.prototype.vendorCSS = function(a, b) {
      var c, d, e, f, g, h;
      for (
        d = window.getComputedStyle(a), c = d.getPropertyCSSValue(b), h = this
          .vendors, f = 0, g = h.length;
        g > f;
        f++
      )
        (e = h[f]), (c = c || d.getPropertyCSSValue("-" + e + "-" + b));
      return c;
    }), (f.prototype.animationName = function(a) {
      var b;
      try {
        b = this.vendorCSS(a, "animation-name").cssText;
      } catch (c) {
        b = window.getComputedStyle(a).getPropertyValue("animation-name");
      }
      return "none" === b ? "" : b;
    }), (f.prototype.cacheAnimationName = function(a) {
      return this.animationNameCache.set(a, this.animationName(a));
    }), (f.prototype.cachedAnimationName = function(a) {
      return this.animationNameCache.get(a);
    }), (f.prototype.scrollHandler = function() {
      return (this.scrolled = !0);
    }), (f.prototype.scrollCallback = function() {
      var a;
      return !this.scrolled ||
      (
        (this.scrolled = !1),
        (this.boxes = function() {
          var b, c, d, e;
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
            (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
          return e;
        }.call(this)),
        this.boxes.length || this.config.live
      )
        ? void 0
        : this.stop();
    }), (f.prototype.offsetTop = function(a) {
      for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
      for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
      return b;
    }), (f.prototype.isVisible = function(a) {
      var b, c, d, e, f;
      return (c = a.getAttribute("data-wow-offset") || this.config.offset), (f =
        window.pageYOffset), (e =
        f +
        Math.min(this.element.clientHeight, innerHeight) -
        c), (d = this.offsetTop(a)), (b = d + a.clientHeight), e >= d && b >= f;
    }), (f.prototype.util = function() {
      return null != this._util ? this._util : (this._util = new b());
    }), (f.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    }), f;
  })());
}.call(
  this
)); /*! Copyright (c) 2016 THE ULTRASOFT (http://theultrasoft.com)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Project: Parallaxie
 * Version: 0.5
 *
 * Requires: jQuery 1.9+
 */
(function($) {
  $.fn.parallaxie = function(options) {
    var options = $.extend(
      {
        speed: 0.2,
        repeat: "no-repeat",
        size: "cover",
        pos_x: "center",
        offset: 0
      },
      options
    );
    this.each(function() {
      var $el = $(this);
      var local_options = $el.data("parallaxie");
      if (typeof local_options != "object") local_options = {};
      local_options = $.extend({}, options, local_options);
      var image_url = $el.data("image");
      if (typeof image_url == "undefined") {
        image_url = $el.css("background-image");
        if (!image_url) return;
        var pos_y =
          local_options.offset +
          ($el.offset().top - $(window).scrollTop()) *
            (1 - local_options.speed);
        $el.css({
          "background-image": image_url,
          "background-size": local_options.size,
          "background-repeat": local_options.repeat,
          "background-attachment": "fixed",
          "background-position": local_options.pos_x + " " + pos_y + "px"
        });
        $(window).scroll(function() {
          var pos_y =
            local_options.offset +
            ($el.offset().top - $(window).scrollTop()) *
              (1 - local_options.speed);
          $el.data("pos_y", pos_y);
          $el.css(
            "background-position",
            local_options.pos_x + " " + pos_y + "px"
          );
        });
      }
    });
    return this;
  };
})(
  jQuery
); /*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!(function(t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("jquery")))
      : (t.jQueryBridget = e(t, t.jQuery));
})(window, function(t, e) {
  "use strict";
  function i(i, s, a) {
    function u(t, e, o) {
      var n,
        s = "$()." + i + '("' + e + '")';
      return t.each(function(t, u) {
        var h = a.data(u, i);
        if (!h)
          return void r(i + " not initialized. Cannot call methods, i.e. " + s);
        var d = h[e];
        if (!d || "_" == e.charAt(0))
          return void r(s + " is not a valid method");
        var l = d.apply(h, o);
        n = void 0 === n ? l : n;
      }), void 0 !== n ? n : t;
    }
    function h(t, e) {
      t.each(function(t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
      });
    }
    (a = a || e || t.jQuery), a &&
      (
        s.prototype.option ||
          (s.prototype.option = function(t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function(t) {
          if ("string" == typeof t) {
            var e = n.call(arguments, 1);
            return u(this, t, e);
          }
          return h(this, t), this;
        }),
        o(a)
      );
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var n = Array.prototype.slice,
    s = t.console,
    r =
      "undefined" == typeof s
        ? function() {}
        : function(t) {
            s.error(t);
          };
  return o(e || t.jQuery), i;
}), (function(t, e) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", e)
    : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
})("undefined" != typeof window ? window : this, function() {
  function t() {}
  var e = t.prototype;
  return (e.on = function(t, e) {
    if (t && e) {
      var i = (this._events = this._events || {}),
        o = (i[t] = i[t] || []);
      return o.indexOf(e) == -1 && o.push(e), this;
    }
  }), (e.once = function(t, e) {
    if (t && e) {
      this.on(t, e);
      var i = (this._onceEvents = this._onceEvents || {}),
        o = (i[t] = i[t] || {});
      return (o[e] = !0), this;
    }
  }), (e.off = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var o = i.indexOf(e);
      return o != -1 && i.splice(o, 1), this;
    }
  }), (e.emitEvent = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      (i = i.slice(0)), (e = e || []);
      for (
        var o = this._onceEvents && this._onceEvents[t], n = 0;
        n < i.length;
        n++
      ) {
        var s = i[n],
          r = o && o[s];
        r && (this.off(t, s), delete o[s]), s.apply(this, e);
      }
      return this;
    }
  }), (e.allOff = function() {
    delete this._events, delete this._onceEvents;
  }), t;
}), (function(t, e) {
  "function" == typeof define && define.amd
    ? define("get-size/get-size", e)
    : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
})(window, function() {
  "use strict";
  function t(t) {
    var e = parseFloat(t),
      i = t.indexOf("%") == -1 && !isNaN(e);
    return i && e;
  }
  function e() {}
  function i() {
    for (
      var t = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        },
        e = 0;
      e < h;
      e++
    ) {
      var i = u[e];
      t[i] = 0;
    }
    return t;
  }
  function o(t) {
    var e = getComputedStyle(t);
    return e ||
      a(
        "Style returned " +
          e +
          ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
      ), e;
  }
  function n() {
    if (!d) {
      d = !0;
      var e = document.createElement("div");
      (e.style.width = "200px"), (e.style.padding =
        "1px 2px 3px 4px"), (e.style.borderStyle =
        "solid"), (e.style.borderWidth =
        "1px 2px 3px 4px"), (e.style.boxSizing = "border-box");
      var i = document.body || document.documentElement;
      i.appendChild(e);
      var n = o(e);
      (r =
        200 == Math.round(t(n.width))), (s.isBoxSizeOuter = r), i.removeChild(
        e
      );
    }
  }
  function s(e) {
    if (
      (
        n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType
      )
    ) {
      var s = o(e);
      if ("none" == s.display) return i();
      var a = {};
      (a.width = e.offsetWidth), (a.height = e.offsetHeight);
      for (
        var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0;
        l < h;
        l++
      ) {
        var f = u[l],
          c = s[f],
          m = parseFloat(c);
        a[f] = isNaN(m) ? 0 : m;
      }
      var p = a.paddingLeft + a.paddingRight,
        y = a.paddingTop + a.paddingBottom,
        g = a.marginLeft + a.marginRight,
        v = a.marginTop + a.marginBottom,
        _ = a.borderLeftWidth + a.borderRightWidth,
        z = a.borderTopWidth + a.borderBottomWidth,
        I = d && r,
        x = t(s.width);
      x !== !1 && (a.width = x + (I ? 0 : p + _));
      var S = t(s.height);
      return S !== !1 && (a.height = S + (I ? 0 : y + z)), (a.innerWidth =
        a.width - (p + _)), (a.innerHeight =
        a.height - (y + z)), (a.outerWidth = a.width + g), (a.outerHeight =
        a.height + v), a;
    }
  }
  var r,
    a =
      "undefined" == typeof console
        ? e
        : function(t) {
            console.error(t);
          },
    u = [
      "paddingLeft",
      "paddingRight",
      "paddingTop",
      "paddingBottom",
      "marginLeft",
      "marginRight",
      "marginTop",
      "marginBottom",
      "borderLeftWidth",
      "borderRightWidth",
      "borderTopWidth",
      "borderBottomWidth"
    ],
    h = u.length,
    d = !1;
  return s;
}), (function(t, e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define("desandro-matches-selector/matches-selector", e)
    : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
})(window, function() {
  "use strict";
  var t = (function() {
    var t = window.Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";
    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var o = e[i],
        n = o + "MatchesSelector";
      if (t[n]) return n;
    }
  })();
  return function(e, i) {
    return e[t](i);
  };
}), (function(t, e) {
  "function" == typeof define && define.amd
    ? define(
        "fizzy-ui-utils/utils",
        ["desandro-matches-selector/matches-selector"],
        function(i) {
          return e(t, i);
        }
      )
    : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
})(window, function(t, e) {
  var i = {};
  (i.extend = function(t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  }), (i.modulo = function(t, e) {
    return (t % e + e) % e;
  });
  var o = Array.prototype.slice;
  (i.makeArray = function(t) {
    if (Array.isArray(t)) return t;
    if (null === t || void 0 === t) return [];
    var e = "object" == typeof t && "number" == typeof t.length;
    return e ? o.call(t) : [t];
  }), (i.removeFrom = function(t, e) {
    var i = t.indexOf(e);
    i != -1 && t.splice(i, 1);
  }), (i.getParent = function(t, i) {
    for (; t.parentNode && t != document.body; )
      if (((t = t.parentNode), e(t, i))) return t;
  }), (i.getQueryElement = function(t) {
    return "string" == typeof t ? document.querySelector(t) : t;
  }), (i.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }), (i.filterFindElements = function(t, o) {
    t = i.makeArray(t);
    var n = [];
    return t.forEach(function(t) {
      if (t instanceof HTMLElement) {
        if (!o) return void n.push(t);
        e(t, o) && n.push(t);
        for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
          n.push(i[s]);
      }
    }), n;
  }), (i.debounceMethod = function(t, e, i) {
    i = i || 100;
    var o = t.prototype[e],
      n = e + "Timeout";
    t.prototype[e] = function() {
      var t = this[n];
      clearTimeout(t);
      var e = arguments,
        s = this;
      this[n] = setTimeout(function() {
        o.apply(s, e), delete s[n];
      }, i);
    };
  }), (i.docReady = function(t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e
      ? setTimeout(t)
      : document.addEventListener("DOMContentLoaded", t);
  }), (i.toDashed = function(t) {
    return t
      .replace(/(.)([A-Z])/g, function(t, e, i) {
        return e + "-" + i;
      })
      .toLowerCase();
  });
  var n = t.console;
  return (i.htmlInit = function(e, o) {
    i.docReady(function() {
      var s = i.toDashed(o),
        r = "data-" + s,
        a = document.querySelectorAll("[" + r + "]"),
        u = document.querySelectorAll(".js-" + s),
        h = i.makeArray(a).concat(i.makeArray(u)),
        d = r + "-options",
        l = t.jQuery;
      h.forEach(function(t) {
        var i,
          s = t.getAttribute(r) || t.getAttribute(d);
        try {
          i = s && JSON.parse(s);
        } catch (a) {
          return void (
            n && n.error("Error parsing " + r + " on " + t.className + ": " + a)
          );
        }
        var u = new e(t, i);
        l && l.data(t, o, u);
      });
    });
  }), i;
}), (function(t, e) {
  "function" == typeof define && define.amd
    ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e)
    : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
})(window, function(t, e) {
  "use strict";
  function i(t) {
    for (var e in t) return !1;
    return (e = null), !0;
  }
  function o(t, e) {
    t &&
      (
        (this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create()
      );
  }
  function n(t) {
    return t.replace(/([A-Z])/g, function(t) {
      return "-" + t.toLowerCase();
    });
  }
  var s = document.documentElement.style,
    r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
    a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
    u = {
      WebkitTransition: "webkitTransitionEnd",
      transition: "transitionend"
    }[r],
    h = {
      transform: a,
      transition: r,
      transitionDuration: r + "Duration",
      transitionProperty: r + "Property",
      transitionDelay: r + "Delay"
    },
    d = (o.prototype = Object.create(t.prototype));
  (d.constructor = o), (d._create = function() {
    (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({
      position: "absolute"
    });
  }), (d.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }), (d.getSize = function() {
    this.size = e(this.element);
  }), (d.css = function(t) {
    var e = this.element.style;
    for (var i in t) {
      var o = h[i] || i;
      e[o] = t[i];
    }
  }), (d.getPosition = function() {
    var t = getComputedStyle(this.element),
      e = this.layout._getOption("originLeft"),
      i = this.layout._getOption("originTop"),
      o = t[e ? "left" : "right"],
      n = t[i ? "top" : "bottom"],
      s = parseFloat(o),
      r = parseFloat(n),
      a = this.layout.size;
    o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 &&
      (r = r / 100 * a.height), (s = isNaN(s) ? 0 : s), (r = isNaN(r)
      ? 0
      : r), (s -= e ? a.paddingLeft : a.paddingRight), (r -= i
      ? a.paddingTop
      : a.paddingBottom), (this.position.x = s), (this.position.y = r);
  }), (d.layoutPosition = function() {
    var t = this.layout.size,
      e = {},
      i = this.layout._getOption("originLeft"),
      o = this.layout._getOption("originTop"),
      n = i ? "paddingLeft" : "paddingRight",
      s = i ? "left" : "right",
      r = i ? "right" : "left",
      a = this.position.x + t[n];
    (e[s] = this.getXValue(a)), (e[r] = "");
    var u = o ? "paddingTop" : "paddingBottom",
      h = o ? "top" : "bottom",
      d = o ? "bottom" : "top",
      l = this.position.y + t[u];
    (e[h] = this.getYValue(l)), (e[d] = ""), this.css(
      e
    ), this.emitEvent("layout", [this]);
  }), (d.getXValue = function(t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && !e
      ? t / this.layout.size.width * 100 + "%"
      : t + "px";
  }), (d.getYValue = function(t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && e
      ? t / this.layout.size.height * 100 + "%"
      : t + "px";
  }), (d._transitionTo = function(t, e) {
    this.getPosition();
    var i = this.position.x,
      o = this.position.y,
      n = t == this.position.x && e == this.position.y;
    if ((this.setPosition(t, e), n && !this.isTransitioning))
      return void this.layoutPosition();
    var s = t - i,
      r = e - o,
      a = {};
    (a.transform = this.getTranslate(s, r)), this.transition({
      to: a,
      onTransitionEnd: { transform: this.layoutPosition },
      isCleaning: !0
    });
  }), (d.getTranslate = function(t, e) {
    var i = this.layout._getOption("originLeft"),
      o = this.layout._getOption("originTop");
    return (t = i ? t : -t), (e = o ? e : -e), "translate3d(" +
      t +
      "px, " +
      e +
      "px, 0)";
  }), (d.goTo = function(t, e) {
    this.setPosition(t, e), this.layoutPosition();
  }), (d.moveTo = d._transitionTo), (d.setPosition = function(t, e) {
    (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
  }), (d._nonTransition = function(t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);
    for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
  }), (d.transition = function(t) {
    if (!parseFloat(this.layout.options.transitionDuration))
      return void this._nonTransition(t);
    var e = this._transn;
    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
    for (i in t.to)
      (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
    if (t.from) {
      this.css(t.from);
      var o = this.element.offsetHeight;
      o = null;
    }
    this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
  });
  var l = "opacity," + n(a);
  (d.enableTransition = function() {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;
      (t = "number" == typeof t ? t + "ms" : t), this.css({
        transitionProperty: l,
        transitionDuration: t,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(u, this, !1);
    }
  }), (d.onwebkitTransitionEnd = function(t) {
    this.ontransitionend(t);
  }), (d.onotransitionend = function(t) {
    this.ontransitionend(t);
  });
  var f = { "-webkit-transform": "transform" };
  (d.ontransitionend = function(t) {
    if (t.target === this.element) {
      var e = this._transn,
        o = f[t.propertyName] || t.propertyName;
      if (
        (
          delete e.ingProperties[o],
          i(e.ingProperties) && this.disableTransition(),
          o in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[o]),
          o in e.onEnd
        )
      ) {
        var n = e.onEnd[o];
        n.call(this), delete e.onEnd[o];
      }
      this.emitEvent("transitionEnd", [this]);
    }
  }), (d.disableTransition = function() {
    this.removeTransitionStyles(), this.element.removeEventListener(
      u,
      this,
      !1
    ), (this.isTransitioning = !1);
  }), (d._removeStyles = function(t) {
    var e = {};
    for (var i in t) e[i] = "";
    this.css(e);
  });
  var c = {
    transitionProperty: "",
    transitionDuration: "",
    transitionDelay: ""
  };
  return (d.removeTransitionStyles = function() {
    this.css(c);
  }), (d.stagger = function(t) {
    (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
  }), (d.removeElem = function() {
    this.element.parentNode.removeChild(this.element), this.css({
      display: ""
    }), this.emitEvent("remove", [this]);
  }), (d.remove = function() {
    return r && parseFloat(this.layout.options.transitionDuration)
      ? (
          this.once("transitionEnd", function() {
            this.removeElem();
          }),
          void this.hide()
        )
      : void this.removeElem();
  }), (d.reveal = function() {
    delete this.isHidden, this.css({ display: "" });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("visibleStyle");
    (e[i] = this.onRevealTransitionEnd), this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    });
  }), (d.onRevealTransitionEnd = function() {
    this.isHidden || this.emitEvent("reveal");
  }), (d.getHideRevealTransitionEndProperty = function(t) {
    var e = this.layout.options[t];
    if (e.opacity) return "opacity";
    for (var i in e) return i;
  }), (d.hide = function() {
    (this.isHidden = !0), this.css({ display: "" });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("hiddenStyle");
    (e[i] = this.onHideTransitionEnd), this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    });
  }), (d.onHideTransitionEnd = function() {
    this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
  }), (d.destroy = function() {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    });
  }), o;
}), (function(t, e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(
        "outlayer/outlayer",
        [
          "ev-emitter/ev-emitter",
          "get-size/get-size",
          "fizzy-ui-utils/utils",
          "./item"
        ],
        function(i, o, n, s) {
          return e(t, i, o, n, s);
        }
      )
    : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
})(window, function(t, e, i, o, n) {
  "use strict";
  function s(t, e) {
    var i = o.getQueryElement(t);
    if (!i)
      return void (
        u &&
        u.error(
          "Bad element for " + this.constructor.namespace + ": " + (i || t)
        )
      );
    (this.element = i), h && (this.$element = h(this.element)), (this.options = o.extend({}, this.constructor.defaults)), this.option(e);
    var n = ++l;
    (this.element.outlayerGUID = n), (f[n] = this), this._create();
    var s = this._getOption("initLayout");
    s && this.layout();
  }
  function r(t) {
    function e() {
      t.apply(this, arguments);
    }
    return (e.prototype = Object.create(
      t.prototype
    )), (e.prototype.constructor = e), e;
  }
  function a(t) {
    if ("number" == typeof t) return t;
    var e = t.match(/(^\d*\.?\d*)(\w*)/),
      i = e && e[1],
      o = e && e[2];
    if (!i.length) return 0;
    i = parseFloat(i);
    var n = m[o] || 1;
    return i * n;
  }
  var u = t.console,
    h = t.jQuery,
    d = function() {},
    l = 0,
    f = {};
  (s.namespace =
    "outlayer"), (s.Item = n), (s.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } });
  var c = s.prototype;
  o.extend(c, e.prototype), (c.option = function(t) {
    o.extend(this.options, t);
  }), (c._getOption = function(t) {
    var e = this.constructor.compatOptions[t];
    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
  }), (s.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }), (c._create = function() {
    this.reloadItems(), (this.stamps = []), this.stamp(
      this.options.stamp
    ), o.extend(this.element.style, this.options.containerStyle);
    var t = this._getOption("resize");
    t && this.bindResize();
  }), (c.reloadItems = function() {
    this.items = this._itemize(this.element.children);
  }), (c._itemize = function(t) {
    for (
      var e = this._filterFindItemElements(t),
        i = this.constructor.Item,
        o = [],
        n = 0;
      n < e.length;
      n++
    ) {
      var s = e[n],
        r = new i(s, this);
      o.push(r);
    }
    return o;
  }), (c._filterFindItemElements = function(t) {
    return o.filterFindElements(t, this.options.itemSelector);
  }), (c.getItemElements = function() {
    return this.items.map(function(t) {
      return t.element;
    });
  }), (c.layout = function() {
    this._resetLayout(), this._manageStamps();
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    this.layoutItems(this.items, e), (this._isLayoutInited = !0);
  }), (c._init = c.layout), (c._resetLayout = function() {
    this.getSize();
  }), (c.getSize = function() {
    this.size = i(this.element);
  }), (c._getMeasurement = function(t, e) {
    var o,
      n = this.options[t];
    n
      ? (
          "string" == typeof n
            ? (o = this.element.querySelector(n))
            : n instanceof HTMLElement && (o = n),
          (this[t] = o ? i(o)[e] : n)
        )
      : (this[t] = 0);
  }), (c.layoutItems = function(t, e) {
    (t = this._getItemsForLayout(t)), this._layoutItems(
      t,
      e
    ), this._postLayout();
  }), (c._getItemsForLayout = function(t) {
    return t.filter(function(t) {
      return !t.isIgnored;
    });
  }), (c._layoutItems = function(t, e) {
    if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
      var i = [];
      t.forEach(function(t) {
        var o = this._getItemLayoutPosition(t);
        (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
      }, this), this._processLayoutQueue(i);
    }
  }), (c._getItemLayoutPosition = function() {
    return { x: 0, y: 0 };
  }), (c._processLayoutQueue = function(t) {
    this.updateStagger(), t.forEach(function(t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e);
    }, this);
  }), (c.updateStagger = function() {
    var t = this.options.stagger;
    return null === t || void 0 === t
      ? void (this.stagger = 0)
      : ((this.stagger = a(t)), this.stagger);
  }), (c._positionItem = function(t, e, i, o, n) {
    o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
  }), (c._postLayout = function() {
    this.resizeContainer();
  }), (c.resizeContainer = function() {
    var t = this._getOption("resizeContainer");
    if (t) {
      var e = this._getContainerSize();
      e &&
        (
          this._setContainerMeasure(e.width, !0),
          this._setContainerMeasure(e.height, !1)
        );
    }
  }), (c._getContainerSize = d), (c._setContainerMeasure = function(t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox &&
        (t += e
          ? i.paddingLeft +
            i.paddingRight +
            i.borderLeftWidth +
            i.borderRightWidth
          : i.paddingBottom +
            i.paddingTop +
            i.borderTopWidth +
            i.borderBottomWidth), (t = Math.max(t, 0)), (this.element.style[
        e ? "width" : "height"
      ] =
        t + "px");
    }
  }), (c._emitCompleteOnItems = function(t, e) {
    function i() {
      n.dispatchEvent(t + "Complete", null, [e]);
    }
    function o() {
      r++, r == s && i();
    }
    var n = this,
      s = e.length;
    if (!e || !s) return void i();
    var r = 0;
    e.forEach(function(e) {
      e.once(t, o);
    });
  }), (c.dispatchEvent = function(t, e, i) {
    var o = e ? [e].concat(i) : i;
    if ((this.emitEvent(t, o), h))
      if (((this.$element = this.$element || h(this.element)), e)) {
        var n = h.Event(e);
        (n.type = t), this.$element.trigger(n, i);
      } else this.$element.trigger(t, i);
  }), (c.ignore = function(t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0);
  }), (c.unignore = function(t) {
    var e = this.getItem(t);
    e && delete e.isIgnored;
  }), (c.stamp = function(t) {
    (t = this._find(t)), t &&
      ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
  }), (c.unstamp = function(t) {
    (t = this._find(t)), t &&
      t.forEach(function(t) {
        o.removeFrom(this.stamps, t), this.unignore(t);
      }, this);
  }), (c._find = function(t) {
    if (t)
      return "string" == typeof t &&
        (t = this.element.querySelectorAll(t)), (t = o.makeArray(t));
  }), (c._manageStamps = function() {
    this.stamps &&
      this.stamps.length &&
      (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
  }), (c._getBoundingRect = function() {
    var t = this.element.getBoundingClientRect(),
      e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    };
  }), (c._manageStamp = d), (c._getElementOffset = function(t) {
    var e = t.getBoundingClientRect(),
      o = this._boundingRect,
      n = i(t),
      s = {
        left: e.left - o.left - n.marginLeft,
        top: e.top - o.top - n.marginTop,
        right: o.right - e.right - n.marginRight,
        bottom: o.bottom - e.bottom - n.marginBottom
      };
    return s;
  }), (c.handleEvent = o.handleEvent), (c.bindResize = function() {
    t.addEventListener("resize", this), (this.isResizeBound = !0);
  }), (c.unbindResize = function() {
    t.removeEventListener("resize", this), (this.isResizeBound = !1);
  }), (c.onresize = function() {
    this.resize();
  }), o.debounceMethod(s, "onresize", 100), (c.resize = function() {
    this.isResizeBound && this.needsResizeLayout() && this.layout();
  }), (c.needsResizeLayout = function() {
    var t = i(this.element),
      e = this.size && t;
    return e && t.innerWidth !== this.size.innerWidth;
  }), (c.addItems = function(t) {
    var e = this._itemize(t);
    return e.length && (this.items = this.items.concat(e)), e;
  }), (c.appended = function(t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e));
  }), (c.prepended = function(t) {
    var e = this._itemize(t);
    if (e.length) {
      var i = this.items.slice(0);
      (this.items = e.concat(
        i
      )), this._resetLayout(), this._manageStamps(), this.layoutItems(
        e,
        !0
      ), this.reveal(e), this.layoutItems(i);
    }
  }), (c.reveal = function(t) {
    if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
      var e = this.updateStagger();
      t.forEach(function(t, i) {
        t.stagger(i * e), t.reveal();
      });
    }
  }), (c.hide = function(t) {
    if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
      var e = this.updateStagger();
      t.forEach(function(t, i) {
        t.stagger(i * e), t.hide();
      });
    }
  }), (c.revealItemElements = function(t) {
    var e = this.getItems(t);
    this.reveal(e);
  }), (c.hideItemElements = function(t) {
    var e = this.getItems(t);
    this.hide(e);
  }), (c.getItem = function(t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];
      if (i.element == t) return i;
    }
  }), (c.getItems = function(t) {
    t = o.makeArray(t);
    var e = [];
    return t.forEach(function(t) {
      var i = this.getItem(t);
      i && e.push(i);
    }, this), e;
  }), (c.remove = function(t) {
    var e = this.getItems(t);
    this._emitCompleteOnItems("remove", e), e &&
      e.length &&
      e.forEach(function(t) {
        t.remove(), o.removeFrom(this.items, t);
      }, this);
  }), (c.destroy = function() {
    var t = this.element.style;
    (t.height = ""), (t.position = ""), (t.width =
      ""), this.items.forEach(function(t) {
      t.destroy();
    }), this.unbindResize();
    var e = this.element.outlayerGUID;
    delete f[e], delete this.element.outlayerGUID, h &&
      h.removeData(this.element, this.constructor.namespace);
  }), (s.data = function(t) {
    t = o.getQueryElement(t);
    var e = t && t.outlayerGUID;
    return e && f[e];
  }), (s.create = function(t, e) {
    var i = r(s);
    return (i.defaults = o.extend({}, s.defaults)), o.extend(
      i.defaults,
      e
    ), (i.compatOptions = o.extend(
      {},
      s.compatOptions
    )), (i.namespace = t), (i.data = s.data), (i.Item = r(n)), o.htmlInit(
      i,
      t
    ), h && h.bridget && h.bridget(t, i), i;
  });
  var m = { ms: 1, s: 1e3 };
  return (s.Item = n), s;
}), (function(t, e) {
  "function" == typeof define && define.amd
    ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
    : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
})(window, function(t) {
  "use strict";
  function e() {
    t.Item.apply(this, arguments);
  }
  var i = (e.prototype = Object.create(t.Item.prototype)),
    o = i._create;
  (i._create = function() {
    (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
  }), (i.updateSortData = function() {
    if (!this.isIgnored) {
      (this.sortData.id = this.id), (this.sortData[
        "original-order"
      ] = this.id), (this.sortData.random = Math.random());
      var t = this.layout.options.getSortData,
        e = this.layout._sorters;
      for (var i in t) {
        var o = e[i];
        this.sortData[i] = o(this.element, this);
      }
    }
  });
  var n = i.destroy;
  return (i.destroy = function() {
    n.apply(this, arguments), this.css({ display: "" });
  }), e;
}), (function(t, e) {
  "function" == typeof define && define.amd
    ? define(
        "isotope-layout/js/layout-mode",
        ["get-size/get-size", "outlayer/outlayer"],
        e
      )
    : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : (
          (t.Isotope = t.Isotope || {}),
          (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
        );
})(window, function(t, e) {
  "use strict";
  function i(t) {
    (this.isotope = t), t && ((this.options = t.options[this.namespace]), (this.element = t.element), (this.items = t.filteredItems), (this.size = t.size));
  }
  var o = i.prototype,
    n = [
      "_resetLayout",
      "_getItemLayoutPosition",
      "_manageStamp",
      "_getContainerSize",
      "_getElementOffset",
      "needsResizeLayout",
      "_getOption"
    ];
  return n.forEach(function(t) {
    o[t] = function() {
      return e.prototype[t].apply(this.isotope, arguments);
    };
  }), (o.needsVerticalResizeLayout = function() {
    var e = t(this.isotope.element),
      i = this.isotope.size && e;
    return i && e.innerHeight != this.isotope.size.innerHeight;
  }), (o._getMeasurement = function() {
    this.isotope._getMeasurement.apply(this, arguments);
  }), (o.getColumnWidth = function() {
    this.getSegmentSize("column", "Width");
  }), (o.getRowHeight = function() {
    this.getSegmentSize("row", "Height");
  }), (o.getSegmentSize = function(t, e) {
    var i = t + e,
      o = "outer" + e;
    if ((this._getMeasurement(i, o), !this[i])) {
      var n = this.getFirstItemSize();
      this[i] = (n && n[o]) || this.isotope.size["inner" + e];
    }
  }), (o.getFirstItemSize = function() {
    var e = this.isotope.filteredItems[0];
    return e && e.element && t(e.element);
  }), (o.layout = function() {
    this.isotope.layout.apply(this.isotope, arguments);
  }), (o.getSize = function() {
    this.isotope.getSize(), (this.size = this.isotope.size);
  }), (i.modes = {}), (i.create = function(t, e) {
    function n() {
      i.apply(this, arguments);
    }
    return (n.prototype = Object.create(o)), (n.prototype.constructor = n), e &&
      (n.options = e), (n.prototype.namespace = t), (i.modes[t] = n), n;
  }), i;
}), (function(t, e) {
  "function" == typeof define && define.amd
    ? define(
        "masonry-layout/masonry",
        ["outlayer/outlayer", "get-size/get-size"],
        e
      )
    : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
})(window, function(t, e) {
  var i = t.create("masonry");
  i.compatOptions.fitWidth = "isFitWidth";
  var o = i.prototype;
  return (o._resetLayout = function() {
    this.getSize(), this._getMeasurement(
      "columnWidth",
      "outerWidth"
    ), this._getMeasurement(
      "gutter",
      "outerWidth"
    ), this.measureColumns(), (this.colYs = []);
    for (var t = 0; t < this.cols; t++) this.colYs.push(0);
    (this.maxY = 0), (this.horizontalColIndex = 0);
  }), (o.measureColumns = function() {
    if ((this.getContainerWidth(), !this.columnWidth)) {
      var t = this.items[0],
        i = t && t.element;
      this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
    }
    var o = (this.columnWidth += this.gutter),
      n = this.containerWidth + this.gutter,
      s = n / o,
      r = o - n % o,
      a = r && r < 1 ? "round" : "floor";
    (s = Math[a](s)), (this.cols = Math.max(s, 1));
  }), (o.getContainerWidth = function() {
    var t = this._getOption("fitWidth"),
      i = t ? this.element.parentNode : this.element,
      o = e(i);
    this.containerWidth = o && o.innerWidth;
  }), (o._getItemLayoutPosition = function(t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
      i = e && e < 1 ? "round" : "ceil",
      o = Math[i](t.size.outerWidth / this.columnWidth);
    o = Math.min(o, this.cols);
    for (
      var n = this.options.horizontalOrder
          ? "_getHorizontalColPosition"
          : "_getTopColPosition",
        s = this[n](o, t),
        r = { x: this.columnWidth * s.col, y: s.y },
        a = s.y + t.size.outerHeight,
        u = o + s.col,
        h = s.col;
      h < u;
      h++
    )
      this.colYs[h] = a;
    return r;
  }), (o._getTopColPosition = function(t) {
    var e = this._getTopColGroup(t),
      i = Math.min.apply(Math, e);
    return { col: e.indexOf(i), y: i };
  }), (o._getTopColGroup = function(t) {
    if (t < 2) return this.colYs;
    for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
      e[o] = this._getColGroupY(o, t);
    return e;
  }), (o._getColGroupY = function(t, e) {
    if (e < 2) return this.colYs[t];
    var i = this.colYs.slice(t, t + e);
    return Math.max.apply(Math, i);
  }), (o._getHorizontalColPosition = function(t, e) {
    var i = this.horizontalColIndex % this.cols,
      o = t > 1 && i + t > this.cols;
    i = o ? 0 : i;
    var n = e.size.outerWidth && e.size.outerHeight;
    return (this.horizontalColIndex = n ? i + t : this.horizontalColIndex), {
      col: i,
      y: this._getColGroupY(i, t)
    };
  }), (o._manageStamp = function(t) {
    var i = e(t),
      o = this._getElementOffset(t),
      n = this._getOption("originLeft"),
      s = n ? o.left : o.right,
      r = s + i.outerWidth,
      a = Math.floor(s / this.columnWidth);
    a = Math.max(0, a);
    var u = Math.floor(r / this.columnWidth);
    (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
    for (
      var h = this._getOption("originTop"),
        d = (h ? o.top : o.bottom) + i.outerHeight,
        l = a;
      l <= u;
      l++
    )
      this.colYs[l] = Math.max(d, this.colYs[l]);
  }), (o._getContainerSize = function() {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = { height: this.maxY };
    return this._getOption("fitWidth") &&
      (t.width = this._getContainerFitWidth()), t;
  }), (o._getContainerFitWidth = function() {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
    return (this.cols - t) * this.columnWidth - this.gutter;
  }), (o.needsResizeLayout = function() {
    var t = this.containerWidth;
    return this.getContainerWidth(), t != this.containerWidth;
  }), i;
}), (function(t, e) {
  "function" == typeof define && define.amd
    ? define(
        "isotope-layout/js/layout-modes/masonry",
        ["../layout-mode", "masonry-layout/masonry"],
        e
      )
    : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
})(window, function(t, e) {
  "use strict";
  var i = t.create("masonry"),
    o = i.prototype,
    n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
  for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
  var r = o.measureColumns;
  o.measureColumns = function() {
    (this.items = this.isotope.filteredItems), r.call(this);
  };
  var a = o._getOption;
  return (o._getOption = function(t) {
    return "fitWidth" == t
      ? void 0 !== this.options.isFitWidth
        ? this.options.isFitWidth
        : this.options.fitWidth
      : a.apply(this.isotope, arguments);
  }), i;
}), (function(t, e) {
  "function" == typeof define && define.amd
    ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
    : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
})(window, function(t) {
  "use strict";
  var e = t.create("fitRows"),
    i = e.prototype;
  return (i._resetLayout = function() {
    (this.x = 0), (this.y = 0), (this.maxY = 0), this._getMeasurement(
      "gutter",
      "outerWidth"
    );
  }), (i._getItemLayoutPosition = function(t) {
    t.getSize();
    var e = t.size.outerWidth + this.gutter,
      i = this.isotope.size.innerWidth + this.gutter;
    0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
    var o = { x: this.x, y: this.y };
    return (this.maxY = Math.max(
      this.maxY,
      this.y + t.size.outerHeight
    )), (this.x += e), o;
  }), (i._getContainerSize = function() {
    return { height: this.maxY };
  }), e;
}), (function(t, e) {
  "function" == typeof define && define.amd
    ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
    : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
})(window, function(t) {
  "use strict";
  var e = t.create("vertical", { horizontalAlignment: 0 }),
    i = e.prototype;
  return (i._resetLayout = function() {
    this.y = 0;
  }), (i._getItemLayoutPosition = function(t) {
    t.getSize();
    var e =
        (this.isotope.size.innerWidth - t.size.outerWidth) *
        this.options.horizontalAlignment,
      i = this.y;
    return (this.y += t.size.outerHeight), { x: e, y: i };
  }), (i._getContainerSize = function() {
    return { height: this.y };
  }), e;
}), (function(t, e) {
  "function" == typeof define && define.amd
    ? define(
        [
          "outlayer/outlayer",
          "get-size/get-size",
          "desandro-matches-selector/matches-selector",
          "fizzy-ui-utils/utils",
          "isotope-layout/js/item",
          "isotope-layout/js/layout-mode",
          "isotope-layout/js/layout-modes/masonry",
          "isotope-layout/js/layout-modes/fit-rows",
          "isotope-layout/js/layout-modes/vertical"
        ],
        function(i, o, n, s, r, a) {
          return e(t, i, o, n, s, r, a);
        }
      )
    : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
})(window, function(t, e, i, o, n, s, r) {
  function a(t, e) {
    return function(i, o) {
      for (var n = 0; n < t.length; n++) {
        var s = t[n],
          r = i.sortData[s],
          a = o.sortData[s];
        if (r > a || r < a) {
          var u = void 0 !== e[s] ? e[s] : e,
            h = u ? 1 : -1;
          return (r > a ? 1 : -1) * h;
        }
      }
      return 0;
    };
  }
  var u = t.jQuery,
    h = String.prototype.trim
      ? function(t) {
          return t.trim();
        }
      : function(t) {
          return t.replace(/^\s+|\s+$/g, "");
        },
    d = e.create("isotope", {
      layoutMode: "masonry",
      isJQueryFiltering: !0,
      sortAscending: !0
    });
  (d.Item = s), (d.LayoutMode = r);
  var l = d.prototype;
  (l._create = function() {
    (this.itemGUID = 0), (this._sorters = {}), this._getSorters(), e.prototype._create.call(
      this
    ), (this.modes = {}), (this.filteredItems = this.items), (this.sortHistory = [
      "original-order"
    ]);
    for (var t in r.modes) this._initLayoutMode(t);
  }), (l.reloadItems = function() {
    (this.itemGUID = 0), e.prototype.reloadItems.call(this);
  }), (l._itemize = function() {
    for (
      var t = e.prototype._itemize.apply(this, arguments), i = 0;
      i < t.length;
      i++
    ) {
      var o = t[i];
      o.id = this.itemGUID++;
    }
    return this._updateItemsSortData(t), t;
  }), (l._initLayoutMode = function(t) {
    var e = r.modes[t],
      i = this.options[t] || {};
    (this.options[t] = e.options ? n.extend(e.options, i) : i), (this.modes[
      t
    ] = new e(this));
  }), (l.layout = function() {
    return !this._isLayoutInited && this._getOption("initLayout")
      ? void this.arrange()
      : void this._layout();
  }), (l._layout = function() {
    var t = this._getIsInstant();
    this._resetLayout(), this._manageStamps(), this.layoutItems(
      this.filteredItems,
      t
    ), (this._isLayoutInited = !0);
  }), (l.arrange = function(t) {
    this.option(t), this._getIsInstant();
    var e = this._filter(this.items);
    (this.filteredItems = e.matches), this._bindArrangeComplete(), this
      ._isInstant
      ? this._noTransition(this._hideReveal, [e])
      : this._hideReveal(e), this._sort(), this._layout();
  }), (l._init = l.arrange), (l._hideReveal = function(t) {
    this.reveal(t.needReveal), this.hide(t.needHide);
  }), (l._getIsInstant = function() {
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    return (this._isInstant = e), e;
  }), (l._bindArrangeComplete = function() {
    function t() {
      e &&
        i &&
        o &&
        n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
    }
    var e,
      i,
      o,
      n = this;
    this.once("layoutComplete", function() {
      (e = !0), t();
    }), this.once("hideComplete", function() {
      (i = !0), t();
    }), this.once("revealComplete", function() {
      (o = !0), t();
    });
  }), (l._filter = function(t) {
    var e = this.options.filter;
    e = e || "*";
    for (
      var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0;
      r < t.length;
      r++
    ) {
      var a = t[r];
      if (!a.isIgnored) {
        var u = s(a);
        u && i.push(a), u && a.isHidden
          ? o.push(a)
          : u || a.isHidden || n.push(a);
      }
    }
    return { matches: i, needReveal: o, needHide: n };
  }), (l._getFilterTest = function(t) {
    return u && this.options.isJQueryFiltering
      ? function(e) {
          return u(e.element).is(t);
        }
      : "function" == typeof t
        ? function(e) {
            return t(e.element);
          }
        : function(e) {
            return o(e.element, t);
          };
  }), (l.updateSortData = function(t) {
    var e;
    t
      ? ((t = n.makeArray(t)), (e = this.getItems(t)))
      : (e = this.items), this._getSorters(), this._updateItemsSortData(e);
  }), (l._getSorters = function() {
    var t = this.options.getSortData;
    for (var e in t) {
      var i = t[e];
      this._sorters[e] = f(i);
    }
  }), (l._updateItemsSortData = function(t) {
    for (var e = t && t.length, i = 0; e && i < e; i++) {
      var o = t[i];
      o.updateSortData();
    }
  });
  var f = (function() {
    function t(t) {
      if ("string" != typeof t) return t;
      var i = h(t).split(" "),
        o = i[0],
        n = o.match(/^\[(.+)\]$/),
        s = n && n[1],
        r = e(s, o),
        a = d.sortDataParsers[i[1]];
      return (t = a
        ? function(t) {
            return t && a(r(t));
          }
        : function(t) {
            return t && r(t);
          });
    }
    function e(t, e) {
      return t
        ? function(e) {
            return e.getAttribute(t);
          }
        : function(t) {
            var i = t.querySelector(e);
            return i && i.textContent;
          };
    }
    return t;
  })();
  (d.sortDataParsers = {
    parseInt: function(t) {
      return parseInt(t, 10);
    },
    parseFloat: function(t) {
      return parseFloat(t);
    }
  }), (l._sort = function() {
    if (this.options.sortBy) {
      var t = n.makeArray(this.options.sortBy);
      this._getIsSameSortBy(t) ||
        (this.sortHistory = t.concat(this.sortHistory));
      var e = a(this.sortHistory, this.options.sortAscending);
      this.filteredItems.sort(e);
    }
  }), (l._getIsSameSortBy = function(t) {
    for (var e = 0; e < t.length; e++)
      if (t[e] != this.sortHistory[e]) return !1;
    return !0;
  }), (l._mode = function() {
    var t = this.options.layoutMode,
      e = this.modes[t];
    if (!e) throw new Error("No layout mode: " + t);
    return (e.options = this.options[t]), e;
  }), (l._resetLayout = function() {
    e.prototype._resetLayout.call(this), this._mode()._resetLayout();
  }), (l._getItemLayoutPosition = function(t) {
    return this._mode()._getItemLayoutPosition(t);
  }), (l._manageStamp = function(t) {
    this._mode()._manageStamp(t);
  }), (l._getContainerSize = function() {
    return this._mode()._getContainerSize();
  }), (l.needsResizeLayout = function() {
    return this._mode().needsResizeLayout();
  }), (l.appended = function(t) {
    var e = this.addItems(t);
    if (e.length) {
      var i = this._filterRevealAdded(e);
      this.filteredItems = this.filteredItems.concat(i);
    }
  }), (l.prepended = function(t) {
    var e = this._itemize(t);
    if (e.length) {
      this._resetLayout(), this._manageStamps();
      var i = this._filterRevealAdded(e);
      this.layoutItems(this.filteredItems), (this.filteredItems = i.concat(
        this.filteredItems
      )), (this.items = e.concat(this.items));
    }
  }), (l._filterRevealAdded = function(t) {
    var e = this._filter(t);
    return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(
      e.matches,
      !0
    ), e.matches;
  }), (l.insert = function(t) {
    var e = this.addItems(t);
    if (e.length) {
      var i,
        o,
        n = e.length;
      for (i = 0; i < n; i++) (o = e[i]), this.element.appendChild(o.element);
      var s = this._filter(e).matches;
      for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
      for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
      this.reveal(s);
    }
  });
  var c = l.remove;
  return (l.remove = function(t) {
    t = n.makeArray(t);
    var e = this.getItems(t);
    c.call(this, t);
    for (var i = e && e.length, o = 0; i && o < i; o++) {
      var s = e[o];
      n.removeFrom(this.filteredItems, s);
    }
  }), (l.shuffle = function() {
    for (var t = 0; t < this.items.length; t++) {
      var e = this.items[t];
      e.sortData.random = Math.random();
    }
    (this.options.sortBy = "random"), this._sort(), this._layout();
  }), (l._noTransition = function(t, e) {
    var i = this.options.transitionDuration;
    this.options.transitionDuration = 0;
    var o = t.apply(this, e);
    return (this.options.transitionDuration = i), o;
  }), (l.getFilteredItemElements = function() {
    return this.filteredItems.map(function(t) {
      return t.element;
    });
  }), d;
}); /**
 * Swiper 6.7.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 31, 2021
 */
!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).Swiper = t());
})(this, function() {
  "use strict";
  function e(e, t) {
    for (var a = 0; a < t.length; a++) {
      var i = t[a];
      (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in
        i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  function t() {
    return (t =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = arguments[t];
          for (var i in a)
            Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
        }
        return e;
      }).apply(this, arguments);
  }
  function a(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function i(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(
      t
    ).forEach(function(s) {
      void 0 === e[s]
        ? (e[s] = t[s])
        : a(t[s]) && a(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s]);
    });
  }
  var s = {
    body: {},
    addEventListener: function() {},
    removeEventListener: function() {},
    activeElement: { blur: function() {}, nodeName: "" },
    querySelector: function() {
      return null;
    },
    querySelectorAll: function() {
      return [];
    },
    getElementById: function() {
      return null;
    },
    createEvent: function() {
      return { initEvent: function() {} };
    },
    createElement: function() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function() {},
        getElementsByTagName: function() {
          return [];
        }
      };
    },
    createElementNS: function() {
      return {};
    },
    importNode: function() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function r() {
    var e = "undefined" != typeof document ? document : {};
    return i(e, s), e;
  }
  var n = {
    document: s,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function() {},
      pushState: function() {},
      go: function() {},
      back: function() {}
    },
    CustomEvent: function() {
      return this;
    },
    addEventListener: function() {},
    removeEventListener: function() {},
    getComputedStyle: function() {
      return {
        getPropertyValue: function() {
          return "";
        }
      };
    },
    Image: function() {},
    Date: function() {},
    screen: {},
    setTimeout: function() {},
    clearTimeout: function() {},
    matchMedia: function() {
      return {};
    },
    requestAnimationFrame: function(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };
  function l() {
    var e = "undefined" != typeof window ? window : {};
    return i(e, n), e;
  }
  function o(e) {
    return (o = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function d(e, t) {
    return (d =
      Object.setPrototypeOf ||
      function(e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function p() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Date.prototype.toString.call(
        Reflect.construct(Date, [], function() {})
      ), !0;
    } catch (e) {
      return !1;
    }
  }
  function u(e, t, a) {
    return (u = p()
      ? Reflect.construct
      : function(e, t, a) {
          var i = [null];
          i.push.apply(i, t);
          var s = new (Function.bind.apply(e, i))();
          return a && d(s, a.prototype), s;
        }).apply(null, arguments);
  }
  function c(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (c = function(e) {
      if (
        null === e ||
        ((a = e), -1 === Function.toString.call(a).indexOf("[native code]"))
      )
        return e;
      var a;
      if ("function" != typeof e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, i);
      }
      function i() {
        return u(e, arguments, o(this).constructor);
      }
      return (i.prototype = Object.create(e.prototype, {
        constructor: {
          value: i,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })), d(i, e);
    })(e);
  }
  var h = (function(e) {
    var t, a;
    function i(t) {
      var a, i, s;
      return (a = e.call.apply(e, [this].concat(t)) || this), (i = (function(
        e
      ) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      })(a)), (s = i.__proto__), Object.defineProperty(i, "__proto__", {
        get: function() {
          return s;
        },
        set: function(e) {
          s.__proto__ = e;
        }
      }), a;
    }
    return (a = e), ((t = i).prototype = Object.create(
      a.prototype
    )), (t.prototype.constructor = t), (t.__proto__ = a), i;
  })(c(Array));
  function v(e) {
    void 0 === e && (e = []);
    var t = [];
    return e.forEach(function(e) {
      Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
    }), t;
  }
  function f(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function m(e, t) {
    var a = l(),
      i = r(),
      s = [];
    if (!t && e instanceof h) return e;
    if (!e) return new h(s);
    if ("string" == typeof e) {
      var n = e.trim();
      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        var o = "div";
        0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") &&
          (o = "tbody"), (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) ||
          (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 ===
          n.indexOf("<option") && (o = "select");
        var d = i.createElement(o);
        d.innerHTML = n;
        for (var p = 0; p < d.childNodes.length; p += 1)
          s.push(d.childNodes[p]);
      } else
        s = (function(e, t) {
          if ("string" != typeof e) return [e];
          for (
            var a = [], i = t.querySelectorAll(e), s = 0;
            s < i.length;
            s += 1
          )
            a.push(i[s]);
          return a;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === a || e === i) s.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof h) return e;
      s = e;
    }
    return new h(
      (function(e) {
        for (var t = [], a = 0; a < e.length; a += 1)
          -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t;
      })(s)
    );
  }
  m.fn = h.prototype;
  var g,
    b,
    y,
    w = {
      addClass: function() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = v(
          t.map(function(e) {
            return e.split(" ");
          })
        );
        return this.forEach(function(e) {
          var t;
          (t = e.classList).add.apply(t, i);
        }), this;
      },
      removeClass: function() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = v(
          t.map(function(e) {
            return e.split(" ");
          })
        );
        return this.forEach(function(e) {
          var t;
          (t = e.classList).remove.apply(t, i);
        }), this;
      },
      hasClass: function() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = v(
          t.map(function(e) {
            return e.split(" ");
          })
        );
        return (
          f(this, function(e) {
            return (
              i.filter(function(t) {
                return e.classList.contains(t);
              }).length > 0
            );
          }).length > 0
        );
      },
      toggleClass: function() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = v(
          t.map(function(e) {
            return e.split(" ");
          })
        );
        this.forEach(function(e) {
          i.forEach(function(t) {
            e.classList.toggle(t);
          });
        });
      },
      attr: function(e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (var a = 0; a < this.length; a += 1)
          if (2 === arguments.length) this[a].setAttribute(e, t);
          else
            for (var i in e) (this[a][i] = e[i]), this[a].setAttribute(i, e[i]);
        return this;
      },
      removeAttr: function(e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function(e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function(e) {
        for (var t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? e + "ms" : e;
        return this;
      },
      on: function() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = t[0],
          s = t[1],
          r = t[2],
          n = t[3];
        function l(e) {
          var t = e.target;
          if (t) {
            var a = e.target.dom7EventData || [];
            if ((a.indexOf(e) < 0 && a.unshift(e), m(t).is(s))) r.apply(t, a);
            else
              for (var i = m(t).parents(), n = 0; n < i.length; n += 1)
                m(i[n]).is(s) && r.apply(i[n], a);
          }
        }
        function o(e) {
          var t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
        }
        "function" == typeof t[1] &&
          ((i = t[0]), (r = t[1]), (n = t[2]), (s = void 0)), n || (n = !1);
        for (var d, p = i.split(" "), u = 0; u < this.length; u += 1) {
          var c = this[u];
          if (s)
            for (d = 0; d < p.length; d += 1) {
              var h = p[d];
              c.dom7LiveListeners || (c.dom7LiveListeners = {}), c
                .dom7LiveListeners[h] ||
                (c.dom7LiveListeners[h] = []), c.dom7LiveListeners[h].push({
                listener: r,
                proxyListener: l
              }), c.addEventListener(h, l, n);
            }
          else
            for (d = 0; d < p.length; d += 1) {
              var v = p[d];
              c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[v] ||
                (c.dom7Listeners[v] = []), c.dom7Listeners[v].push({
                listener: r,
                proxyListener: o
              }), c.addEventListener(v, o, n);
            }
        }
        return this;
      },
      off: function() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var i = t[0],
          s = t[1],
          r = t[2],
          n = t[3];
        "function" == typeof t[1] &&
          ((i = t[0]), (r = t[1]), (n = t[2]), (s = void 0)), n || (n = !1);
        for (var l = i.split(" "), o = 0; o < l.length; o += 1)
          for (var d = l[o], p = 0; p < this.length; p += 1) {
            var u = this[p],
              c = void 0;
            if (
              (
                !s && u.dom7Listeners
                  ? (c = u.dom7Listeners[d])
                  : s && u.dom7LiveListeners && (c = u.dom7LiveListeners[d]),
                c && c.length
              )
            )
              for (var h = c.length - 1; h >= 0; h -= 1) {
                var v = c[h];
                (r && v.listener === r) ||
                (r &&
                  v.listener &&
                  v.listener.dom7proxy &&
                  v.listener.dom7proxy === r)
                  ? (
                      u.removeEventListener(d, v.proxyListener, n),
                      c.splice(h, 1)
                    )
                  : r ||
                    (
                      u.removeEventListener(d, v.proxyListener, n),
                      c.splice(h, 1)
                    );
              }
          }
        return this;
      },
      trigger: function() {
        for (
          var e = l(), t = arguments.length, a = new Array(t), i = 0;
          i < t;
          i++
        )
          a[i] = arguments[i];
        for (var s = a[0].split(" "), r = a[1], n = 0; n < s.length; n += 1)
          for (var o = s[n], d = 0; d < this.length; d += 1) {
            var p = this[d];
            if (e.CustomEvent) {
              var u = new e.CustomEvent(o, {
                detail: r,
                bubbles: !0,
                cancelable: !0
              });
              (p.dom7EventData = a.filter(function(e, t) {
                return t > 0;
              })), p.dispatchEvent(
                u
              ), (p.dom7EventData = []), delete p.dom7EventData;
            }
          }
        return this;
      },
      transitionEnd: function(e) {
        var t = this;
        return e &&
          t.on("transitionend", function a(i) {
            i.target === this && (e.call(this, i), t.off("transitionend", a));
          }), this;
      },
      outerWidth: function(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(t.getPropertyValue("margin-right")) +
              parseFloat(t.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(t.getPropertyValue("margin-top")) +
              parseFloat(t.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function() {
        var e = l();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function() {
        if (this.length > 0) {
          var e = l(),
            t = r(),
            a = this[0],
            i = a.getBoundingClientRect(),
            s = t.body,
            n = a.clientTop || s.clientTop || 0,
            o = a.clientLeft || s.clientLeft || 0,
            d = a === e ? e.scrollY : a.scrollTop,
            p = a === e ? e.scrollX : a.scrollLeft;
          return { top: i.top + d - n, left: i.left + p - o };
        }
        return null;
      },
      css: function(e, t) {
        var a,
          i = l();
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (a = 0; a < this.length; a += 1)
              for (var s in e) this[a].style[s] = e[s];
            return this;
          }
          if (this[0])
            return i.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
          return this;
        }
        return this;
      },
      each: function(e) {
        return e
          ? (
              this.forEach(function(t, a) {
                e.apply(t, [t, a]);
              }),
              this
            )
          : this;
      },
      html: function(e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function(e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function(e) {
        var t,
          a,
          i = l(),
          s = r(),
          n = this[0];
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (t = m(e), a = 0; a < t.length; a += 1) if (t[a] === n) return !0;
          return !1;
        }
        if (e === s) return n === s;
        if (e === i) return n === i;
        if (e.nodeType || e instanceof h) {
          for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
            if (t[a] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function() {
        var e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function(e) {
        if (void 0 === e) return this;
        var t = this.length;
        if (e > t - 1) return m([]);
        if (e < 0) {
          var a = t + e;
          return m(a < 0 ? [] : [this[a]]);
        }
        return m([this[e]]);
      },
      append: function() {
        for (var e, t = r(), a = 0; a < arguments.length; a += 1) {
          e = a < 0 || arguments.length <= a ? void 0 : arguments[a];
          for (var i = 0; i < this.length; i += 1)
            if ("string" == typeof e) {
              var s = t.createElement("div");
              for (s.innerHTML = e; s.firstChild; )
                this[i].appendChild(s.firstChild);
            } else if (e instanceof h)
              for (var n = 0; n < e.length; n += 1) this[i].appendChild(e[n]);
            else this[i].appendChild(e);
        }
        return this;
      },
      prepend: function(e) {
        var t,
          a,
          i = r();
        for (t = 0; t < this.length; t += 1)
          if ("string" == typeof e) {
            var s = i.createElement("div");
            for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1)
              this[t].insertBefore(s.childNodes[a], this[t].childNodes[0]);
          } else if (e instanceof h)
            for (a = 0; a < e.length; a += 1)
              this[t].insertBefore(e[a], this[t].childNodes[0]);
          else this[t].insertBefore(e, this[t].childNodes[0]);
        return this;
      },
      next: function(e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e)
              ? m([this[0].nextElementSibling])
              : m([])
            : this[0].nextElementSibling
              ? m([this[0].nextElementSibling])
              : m([])
          : m([]);
      },
      nextAll: function(e) {
        var t = [],
          a = this[0];
        if (!a) return m([]);
        for (; a.nextElementSibling; ) {
          var i = a.nextElementSibling;
          e ? m(i).is(e) && t.push(i) : t.push(i), (a = i);
        }
        return m(t);
      },
      prev: function(e) {
        if (this.length > 0) {
          var t = this[0];
          return e
            ? t.previousElementSibling && m(t.previousElementSibling).is(e)
              ? m([t.previousElementSibling])
              : m([])
            : t.previousElementSibling ? m([t.previousElementSibling]) : m([]);
        }
        return m([]);
      },
      prevAll: function(e) {
        var t = [],
          a = this[0];
        if (!a) return m([]);
        for (; a.previousElementSibling; ) {
          var i = a.previousElementSibling;
          e ? m(i).is(e) && t.push(i) : t.push(i), (a = i);
        }
        return m(t);
      },
      parent: function(e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          null !== this[a].parentNode &&
            (e
              ? m(this[a].parentNode).is(e) && t.push(this[a].parentNode)
              : t.push(this[a].parentNode));
        return m(t);
      },
      parents: function(e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          for (var i = this[a].parentNode; i; )
            e ? m(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        return m(t);
      },
      closest: function(e) {
        var t = this;
        return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function(e) {
        for (var t = [], a = 0; a < this.length; a += 1) {
          try {
            var i = this[a].querySelectorAll(e);
          } catch (t) {
            console.log(e);
          }
          for (var s = 0; s < i.length; s += 1) t.push(i[s]);
        }
        return m(t);
      },
      children: function(e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          for (var i = this[a].children, s = 0; s < i.length; s += 1)
            (e && !m(i[s]).is(e)) || t.push(i[s]);
        return m(t);
      },
      filter: function(e) {
        return m(f(this, e));
      },
      remove: function() {
        for (var e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      }
    };
  function E(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function x() {
    return Date.now();
  }
  function T(e, t) {
    void 0 === t && (t = "x");
    var a,
      i,
      s,
      r = l(),
      n = (function(e) {
        var t,
          a = l();
        return a.getComputedStyle && (t = a.getComputedStyle(e, null)), !t &&
          e.currentStyle &&
          (t = e.currentStyle), t || (t = e.style), t;
      })(e);
    return r.WebKitCSSMatrix
      ? (
          (i = n.transform || n.webkitTransform).split(",").length > 6 &&
            (i = i
              .split(", ")
              .map(function(e) {
                return e.replace(",", ".");
              })
              .join(", ")),
          (s = new r.WebKitCSSMatrix("none" === i ? "" : i))
        )
      : (a = (s =
          n.MozTransform ||
          n.OTransform ||
          n.MsTransform ||
          n.msTransform ||
          n.transform ||
          n
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,"))
          .toString()
          .split(
            ","
          )), "x" === t && (i = r.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = r.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
  }
  function C(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function S() {
    for (
      var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"],
        a = 1;
      a < arguments.length;
      a += 1
    ) {
      var i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
      if (null != i)
        for (
          var s = Object.keys(Object(i)).filter(function(e) {
              return t.indexOf(e) < 0;
            }),
            r = 0,
            n = s.length;
          r < n;
          r += 1
        ) {
          var l = s[r],
            o = Object.getOwnPropertyDescriptor(i, l);
          void 0 !== o &&
            o.enumerable &&
            (C(e[l]) && C(i[l])
              ? i[l].__swiper__ ? (e[l] = i[l]) : S(e[l], i[l])
              : !C(e[l]) && C(i[l])
                ? ((e[l] = {}), i[l].__swiper__ ? (e[l] = i[l]) : S(e[l], i[l]))
                : (e[l] = i[l]));
        }
    }
    return e;
  }
  function M(e, t) {
    Object.keys(t).forEach(function(a) {
      C(t[a]) &&
        Object.keys(t[a]).forEach(function(i) {
          "function" == typeof t[a][i] && (t[a][i] = t[a][i].bind(e));
        }), (e[a] = t[a]);
    });
  }
  function z(e) {
    return void 0 === e &&
      (e = ""), "." + e.trim().replace(/([\.:\/])/g, "\\$1").replace(/ /g, ".");
  }
  function P(e, t, a, i) {
    var s = r();
    return a &&
      Object.keys(i).forEach(function(a) {
        if (!t[a] && !0 === t.auto) {
          var r = s.createElement("div");
          (r.className = i[a]), e.append(r), (t[a] = r);
        }
      }), t;
  }
  function k() {
    return g ||
      (g = (function() {
        var e = l(),
          t = r();
        return {
          touch: !!(
            "ontouchstart" in e ||
            (e.DocumentTouch && t instanceof e.DocumentTouch)
          ),
          pointerEvents:
            !!e.PointerEvent &&
            "maxTouchPoints" in e.navigator &&
            e.navigator.maxTouchPoints >= 0,
          observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
          passiveListener: (function() {
            var t = !1;
            try {
              var a = Object.defineProperty({}, "passive", {
                get: function() {
                  t = !0;
                }
              });
              e.addEventListener("testPassiveListener", null, a);
            } catch (e) {}
            return t;
          })(),
          gestures: "ongesturestart" in e
        };
      })()), g;
  }
  function $(e) {
    return void 0 === e && (e = {}), b ||
      (b = (function(e) {
        var t = (void 0 === e ? {} : e).userAgent,
          a = k(),
          i = l(),
          s = i.navigator.platform,
          r = t || i.navigator.userAgent,
          n = { ios: !1, android: !1 },
          o = i.screen.width,
          d = i.screen.height,
          p = r.match(/(Android);?[\s\/]+([\d.]+)?/),
          u = r.match(/(iPad).*OS\s([\d_]+)/),
          c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
          h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          v = "Win32" === s,
          f = "MacIntel" === s;
        return !u &&
          f &&
          a.touch &&
          [
            "1024x1366",
            "1366x1024",
            "834x1194",
            "1194x834",
            "834x1112",
            "1112x834",
            "768x1024",
            "1024x768",
            "820x1180",
            "1180x820",
            "810x1080",
            "1080x810"
          ].indexOf(o + "x" + d) >= 0 &&
          (
            (u = r.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]),
            (f = !1)
          ), p && !v && ((n.os = "android"), (n.android = !0)), (u || h || c) &&
          ((n.os = "ios"), (n.ios = !0)), n;
      })(e)), b;
  }
  function L() {
    return y ||
      (y = (function() {
        var e,
          t = l();
        return {
          isEdge: !!t.navigator.userAgent.match(/Edge/g),
          isSafari: (
            (e = t.navigator.userAgent.toLowerCase()),
            e.indexOf("safari") >= 0 &&
              e.indexOf("chrome") < 0 &&
              e.indexOf("android") < 0
          ),
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
            t.navigator.userAgent
          )
        };
      })()), y;
  }
  Object.keys(w).forEach(function(e) {
    Object.defineProperty(m.fn, e, { value: w[e], writable: !0 });
  });
  var I = {
      name: "resize",
      create: function() {
        var e = this;
        S(e, {
          resize: {
            observer: null,
            createObserver: function() {
              e &&
                !e.destroyed &&
                e.initialized &&
                (
                  (e.resize.observer = new ResizeObserver(function(t) {
                    var a = e.width,
                      i = e.height,
                      s = a,
                      r = i;
                    t.forEach(function(t) {
                      var a = t.contentBoxSize,
                        i = t.contentRect,
                        n = t.target;
                      (n && n !== e.el) ||
                        (
                          (s = i ? i.width : (a[0] || a).inlineSize),
                          (r = i ? i.height : (a[0] || a).blockSize)
                        );
                    }), (s === a && r === i) || e.resize.resizeHandler();
                  })),
                  e.resize.observer.observe(e.el)
                );
            },
            removeObserver: function() {
              e.resize.observer &&
                e.resize.observer.unobserve &&
                e.el &&
                (e.resize.observer.unobserve(e.el), (e.resize.observer = null));
            },
            resizeHandler: function() {
              e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function() {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            }
          }
        });
      },
      on: {
        init: function(e) {
          var t = l();
          e.params.resizeObserver && void 0 !== l().ResizeObserver
            ? e.resize.createObserver()
            : (
                t.addEventListener("resize", e.resize.resizeHandler),
                t.addEventListener(
                  "orientationchange",
                  e.resize.orientationChangeHandler
                )
              );
        },
        destroy: function(e) {
          var t = l();
          e.resize.removeObserver(), t.removeEventListener(
            "resize",
            e.resize.resizeHandler
          ), t.removeEventListener(
            "orientationchange",
            e.resize.orientationChangeHandler
          );
        }
      }
    },
    O = {
      attach: function(e, t) {
        void 0 === t && (t = {});
        var a = l(),
          i = this,
          s = new (a.MutationObserver || a.WebkitMutationObserver)(function(e) {
            if (1 !== e.length) {
              var t = function() {
                i.emit("observerUpdate", e[0]);
              };
              a.requestAnimationFrame
                ? a.requestAnimationFrame(t)
                : a.setTimeout(t, 0);
            } else i.emit("observerUpdate", e[0]);
          });
        s.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }), i.observer.observers.push(s);
      },
      init: function() {
        var e = this;
        if (e.support.observer && e.params.observer) {
          if (e.params.observeParents)
            for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
              e.observer.attach(t[a]);
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren
          }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function() {
        this.observer.observers.forEach(function(e) {
          e.disconnect();
        }), (this.observer.observers = []);
      }
    },
    A = {
      name: "observer",
      params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
      create: function() {
        M(this, { observer: t({}, O, { observers: [] }) });
      },
      on: {
        init: function(e) {
          e.observer.init();
        },
        destroy: function(e) {
          e.observer.destroy();
        }
      }
    };
  function D(e) {
    var t = this,
      a = r(),
      i = l(),
      s = t.touchEventsData,
      n = t.params,
      o = t.touches;
    if (t.enabled && (!t.animating || !n.preventInteractionOnTransition)) {
      var d = e;
      d.originalEvent && (d = d.originalEvent);
      var p = m(d.target);
      if ("wrapper" !== n.touchEventsTarget || p.closest(t.wrapperEl).length)
        if (
          (
            (s.isTouchEvent = "touchstart" === d.type),
            s.isTouchEvent || !("which" in d) || 3 !== d.which
          )
        )
          if (!(!s.isTouchEvent && "button" in d && d.button > 0))
            if (!s.isTouched || !s.isMoved)
              if (
                (
                  !!n.noSwipingClass &&
                    "" !== n.noSwipingClass &&
                    d.target &&
                    d.target.shadowRoot &&
                    e.path &&
                    e.path[0] &&
                    (p = m(e.path[0])),
                  n.noSwiping &&
                    p.closest(
                      n.noSwipingSelector
                        ? n.noSwipingSelector
                        : "." + n.noSwipingClass
                    )[0]
                )
              )
                t.allowClick = !0;
              else if (!n.swipeHandler || p.closest(n.swipeHandler)[0]) {
                (o.currentX =
                  "touchstart" === d.type
                    ? d.targetTouches[0].pageX
                    : d.pageX), (o.currentY =
                  "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY);
                var u = o.currentX,
                  c = o.currentY,
                  h = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                  v = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                if (h && (u <= v || u >= i.innerWidth - v)) {
                  if ("prevent" !== h) return;
                  e.preventDefault();
                }
                if (
                  (
                    S(s, {
                      isTouched: !0,
                      isMoved: !1,
                      allowTouchCallbacks: !0,
                      isScrolling: void 0,
                      startMoving: void 0
                    }),
                    (o.startX = u),
                    (o.startY = c),
                    (s.touchStartTime = x()),
                    (t.allowClick = !0),
                    t.updateSize(),
                    (t.swipeDirection = void 0),
                    n.threshold > 0 && (s.allowThresholdMove = !1),
                    "touchstart" !== d.type
                  )
                ) {
                  var f = !0;
                  p.is(s.formElements) && (f = !1), a.activeElement &&
                    m(a.activeElement).is(s.formElements) &&
                    a.activeElement !== p[0] &&
                    a.activeElement.blur();
                  var g = f && t.allowTouchMove && n.touchStartPreventDefault;
                  (!n.touchStartForcePreventDefault && !g) ||
                    p[0].isContentEditable ||
                    d.preventDefault();
                }
                t.emit("touchStart", d);
              }
    }
  }
  function N(e) {
    var t = r(),
      a = this,
      i = a.touchEventsData,
      s = a.params,
      n = a.touches,
      l = a.rtlTranslate;
    if (a.enabled) {
      var o = e;
      if ((o.originalEvent && (o = o.originalEvent), i.isTouched)) {
        if (!i.isTouchEvent || "touchmove" === o.type) {
          var d =
              "touchmove" === o.type &&
              o.targetTouches &&
              (o.targetTouches[0] || o.changedTouches[0]),
            p = "touchmove" === o.type ? d.pageX : o.pageX,
            u = "touchmove" === o.type ? d.pageY : o.pageY;
          if (o.preventedByNestedSwiper)
            return (n.startX = p), void (n.startY = u);
          if (!a.allowTouchMove)
            return (a.allowClick = !1), void (
              i.isTouched &&
              (
                S(n, { startX: p, startY: u, currentX: p, currentY: u }),
                (i.touchStartTime = x())
              )
            );
          if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
            if (a.isVertical()) {
              if (
                (u < n.startY && a.translate <= a.maxTranslate()) ||
                (u > n.startY && a.translate >= a.minTranslate())
              )
                return (i.isTouched = !1), void (i.isMoved = !1);
            } else if (
              (p < n.startX && a.translate <= a.maxTranslate()) ||
              (p > n.startX && a.translate >= a.minTranslate())
            )
              return;
          if (
            i.isTouchEvent &&
            t.activeElement &&
            o.target === t.activeElement &&
            m(o.target).is(i.formElements)
          )
            return (i.isMoved = !0), void (a.allowClick = !1);
          if (
            (
              i.allowTouchCallbacks && a.emit("touchMove", o),
              !(o.targetTouches && o.targetTouches.length > 1)
            )
          ) {
            (n.currentX = p), (n.currentY = u);
            var c = n.currentX - n.startX,
              h = n.currentY - n.startY;
            if (
              !(
                a.params.threshold &&
                Math.sqrt(Math.pow(c, 2) + Math.pow(h, 2)) < a.params.threshold
              )
            ) {
              var v;
              if (void 0 === i.isScrolling)
                (a.isHorizontal() && n.currentY === n.startY) ||
                (a.isVertical() && n.currentX === n.startX)
                  ? (i.isScrolling = !1)
                  : c * c + h * h >= 25 &&
                    (
                      (v =
                        180 * Math.atan2(Math.abs(h), Math.abs(c)) / Math.PI),
                      (i.isScrolling = a.isHorizontal()
                        ? v > s.touchAngle
                        : 90 - v > s.touchAngle)
                    );
              if (
                (
                  i.isScrolling && a.emit("touchMoveOpposite", o),
                  void 0 === i.startMoving &&
                    ((n.currentX === n.startX && n.currentY === n.startY) ||
                      (i.startMoving = !0)),
                  i.isScrolling
                )
              )
                i.isTouched = !1;
              else if (i.startMoving) {
                (a.allowClick = !1), !s.cssMode &&
                  o.cancelable &&
                  o.preventDefault(), s.touchMoveStopPropagation &&
                  !s.nested &&
                  o.stopPropagation(), i.isMoved ||
                  (
                    s.loop && a.loopFix(),
                    (i.startTranslate = a.getTranslate()),
                    a.setTransition(0),
                    a.animating &&
                      a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                    (i.allowMomentumBounce = !1),
                    !s.grabCursor ||
                      (!0 !== a.allowSlideNext && !0 !== a.allowSlidePrev) ||
                      a.setGrabCursor(!0),
                    a.emit("sliderFirstMove", o)
                  ), a.emit("sliderMove", o), (i.isMoved = !0);
                var f = a.isHorizontal() ? c : h;
                (n.diff = f), (f *= s.touchRatio), l &&
                  (f = -f), (a.swipeDirection =
                  f > 0 ? "prev" : "next"), (i.currentTranslate =
                  f + i.startTranslate);
                var g = !0,
                  b = s.resistanceRatio;
                if (
                  (
                    s.touchReleaseOnEdges && (b = 0),
                    f > 0 && i.currentTranslate > a.minTranslate()
                      ? (
                          (g = !1),
                          s.resistance &&
                            (i.currentTranslate =
                              a.minTranslate() -
                              1 +
                              Math.pow(
                                -a.minTranslate() + i.startTranslate + f,
                                b
                              ))
                        )
                      : f < 0 &&
                        i.currentTranslate < a.maxTranslate() &&
                        (
                          (g = !1),
                          s.resistance &&
                            (i.currentTranslate =
                              a.maxTranslate() +
                              1 -
                              Math.pow(
                                a.maxTranslate() - i.startTranslate - f,
                                b
                              ))
                        ),
                    g && (o.preventedByNestedSwiper = !0),
                    !a.allowSlideNext &&
                      "next" === a.swipeDirection &&
                      i.currentTranslate < i.startTranslate &&
                      (i.currentTranslate = i.startTranslate),
                    !a.allowSlidePrev &&
                      "prev" === a.swipeDirection &&
                      i.currentTranslate > i.startTranslate &&
                      (i.currentTranslate = i.startTranslate),
                    a.allowSlidePrev ||
                      a.allowSlideNext ||
                      (i.currentTranslate = i.startTranslate),
                    s.threshold > 0
                  )
                ) {
                  if (!(Math.abs(f) > s.threshold || i.allowThresholdMove))
                    return void (i.currentTranslate = i.startTranslate);
                  if (!i.allowThresholdMove)
                    return (i.allowThresholdMove = !0), (n.startX =
                      n.currentX), (n.startY =
                      n.currentY), (i.currentTranslate =
                      i.startTranslate), void (n.diff = a.isHorizontal()
                      ? n.currentX - n.startX
                      : n.currentY - n.startY);
                }
                s.followFinger &&
                  !s.cssMode &&
                  (
                    (s.freeMode ||
                      s.watchSlidesProgress ||
                      s.watchSlidesVisibility) &&
                      (a.updateActiveIndex(), a.updateSlidesClasses()),
                    s.freeMode &&
                      (
                        0 === i.velocities.length &&
                          i.velocities.push({
                            position: n[a.isHorizontal() ? "startX" : "startY"],
                            time: i.touchStartTime
                          }),
                        i.velocities.push({
                          position:
                            n[a.isHorizontal() ? "currentX" : "currentY"],
                          time: x()
                        })
                      ),
                    a.updateProgress(i.currentTranslate),
                    a.setTranslate(i.currentTranslate)
                  );
              }
            }
          }
        }
      } else i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", o);
    }
  }
  function G(e) {
    var t = this,
      a = t.touchEventsData,
      i = t.params,
      s = t.touches,
      r = t.rtlTranslate,
      n = t.$wrapperEl,
      l = t.slidesGrid,
      o = t.snapGrid;
    if (t.enabled) {
      var d = e;
      if (
        (
          d.originalEvent && (d = d.originalEvent),
          a.allowTouchCallbacks && t.emit("touchEnd", d),
          (a.allowTouchCallbacks = !1),
          !a.isTouched
        )
      )
        return a.isMoved &&
          i.grabCursor &&
          t.setGrabCursor(!1), (a.isMoved = !1), void (a.startMoving = !1);
      i.grabCursor &&
        a.isMoved &&
        a.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      var p,
        u = x(),
        c = u - a.touchStartTime;
      if (
        (
          t.allowClick &&
            (
              t.updateClickedSlide(d),
              t.emit("tap click", d),
              c < 300 &&
                u - a.lastClickTime < 300 &&
                t.emit("doubleTap doubleClick", d)
            ),
          (a.lastClickTime = x()),
          E(function() {
            t.destroyed || (t.allowClick = !0);
          }),
          !a.isTouched ||
            !a.isMoved ||
            !t.swipeDirection ||
            0 === s.diff ||
            a.currentTranslate === a.startTranslate
        )
      )
        return (a.isTouched = !1), (a.isMoved = !1), void (a.startMoving = !1);
      if (
        (
          (a.isTouched = !1),
          (a.isMoved = !1),
          (a.startMoving = !1),
          (p = i.followFinger
            ? r ? t.translate : -t.translate
            : -a.currentTranslate),
          !i.cssMode
        )
      )
        if (i.freeMode) {
          if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (p > -t.maxTranslate())
            return void (t.slides.length < o.length
              ? t.slideTo(o.length - 1)
              : t.slideTo(t.slides.length - 1));
          if (i.freeModeMomentum) {
            if (a.velocities.length > 1) {
              var h = a.velocities.pop(),
                v = a.velocities.pop(),
                f = h.position - v.position,
                m = h.time - v.time;
              (t.velocity = f / m), (t.velocity /= 2), Math.abs(t.velocity) <
                i.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 ||
                x() - h.time > 300) &&
                (t.velocity = 0);
            } else t.velocity = 0;
            (t.velocity *=
              i.freeModeMomentumVelocityRatio), (a.velocities.length = 0);
            var g = 1e3 * i.freeModeMomentumRatio,
              b = t.velocity * g,
              y = t.translate + b;
            r && (y = -y);
            var w,
              T,
              C = !1,
              S = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
            if (y < t.maxTranslate())
              i.freeModeMomentumBounce
                ? (
                    y + t.maxTranslate() < -S && (y = t.maxTranslate() - S),
                    (w = t.maxTranslate()),
                    (C = !0),
                    (a.allowMomentumBounce = !0)
                  )
                : (y = t.maxTranslate()), i.loop &&
                i.centeredSlides &&
                (T = !0);
            else if (y > t.minTranslate())
              i.freeModeMomentumBounce
                ? (
                    y - t.minTranslate() > S && (y = t.minTranslate() + S),
                    (w = t.minTranslate()),
                    (C = !0),
                    (a.allowMomentumBounce = !0)
                  )
                : (y = t.minTranslate()), i.loop &&
                i.centeredSlides &&
                (T = !0);
            else if (i.freeModeSticky) {
              for (var M, z = 0; z < o.length; z += 1)
                if (o[z] > -y) {
                  M = z;
                  break;
                }
              y = -(y =
                Math.abs(o[M] - y) < Math.abs(o[M - 1] - y) ||
                "next" === t.swipeDirection
                  ? o[M]
                  : o[M - 1]);
            }
            if (
              (
                T &&
                  t.once("transitionEnd", function() {
                    t.loopFix();
                  }),
                0 !== t.velocity
              )
            ) {
              if (
                (
                  (g = r
                    ? Math.abs((-y - t.translate) / t.velocity)
                    : Math.abs((y - t.translate) / t.velocity)),
                  i.freeModeSticky
                )
              ) {
                var P = Math.abs((r ? -y : y) - t.translate),
                  k = t.slidesSizesGrid[t.activeIndex];
                g = P < k ? i.speed : P < 2 * k ? 1.5 * i.speed : 2.5 * i.speed;
              }
            } else if (i.freeModeSticky) return void t.slideToClosest();
            i.freeModeMomentumBounce && C
              ? (
                  t.updateProgress(w),
                  t.setTransition(g),
                  t.setTranslate(y),
                  t.transitionStart(!0, t.swipeDirection),
                  (t.animating = !0),
                  n.transitionEnd(function() {
                    t &&
                      !t.destroyed &&
                      a.allowMomentumBounce &&
                      (
                        t.emit("momentumBounce"),
                        t.setTransition(i.speed),
                        setTimeout(function() {
                          t.setTranslate(w), n.transitionEnd(function() {
                            t && !t.destroyed && t.transitionEnd();
                          });
                        }, 0)
                      );
                  })
                )
              : t.velocity
                ? (
                    t.updateProgress(y),
                    t.setTransition(g),
                    t.setTranslate(y),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating ||
                      (
                        (t.animating = !0),
                        n.transitionEnd(function() {
                          t && !t.destroyed && t.transitionEnd();
                        })
                      )
                  )
                : (
                    t.emit("_freeModeNoMomentumRelease"),
                    t.updateProgress(y)
                  ), t.updateActiveIndex(), t.updateSlidesClasses();
          } else {
            if (i.freeModeSticky) return void t.slideToClosest();
            i.freeMode && t.emit("_freeModeNoMomentumRelease");
          }
          (!i.freeModeMomentum || c >= i.longSwipesMs) &&
            (
              t.updateProgress(),
              t.updateActiveIndex(),
              t.updateSlidesClasses()
            );
        } else {
          for (
            var $ = 0, L = t.slidesSizesGrid[0], I = 0;
            I < l.length;
            I += I < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
          ) {
            var O = I < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            void 0 !== l[I + O]
              ? p >= l[I] && p < l[I + O] && (($ = I), (L = l[I + O] - l[I]))
              : p >= l[I] && (($ = I), (L = l[l.length - 1] - l[l.length - 2]));
          }
          var A = (p - l[$]) / L,
            D = $ < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          if (c > i.longSwipesMs) {
            if (!i.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection &&
              (A >= i.longSwipesRatio
                ? t.slideTo($ + D)
                : t.slideTo($)), "prev" === t.swipeDirection &&
              (A > 1 - i.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($));
          } else {
            if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation &&
            (d.target === t.navigation.nextEl ||
              d.target === t.navigation.prevEl)
              ? d.target === t.navigation.nextEl
                ? t.slideTo($ + D)
                : t.slideTo($)
              : (
                  "next" === t.swipeDirection && t.slideTo($ + D),
                  "prev" === t.swipeDirection && t.slideTo($)
                );
          }
        }
    }
  }
  function B() {
    var e = this,
      t = e.params,
      a = e.el;
    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
        s = e.allowSlidePrev,
        r = e.snapGrid;
      (e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" ===
        t.slidesPerView ||
        t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        e.autoplay.run(), (e.allowSlidePrev = s), (e.allowSlideNext = i), e
        .params.watchOverflow &&
        r !== e.snapGrid &&
        e.checkOverflow();
    }
  }
  function H(e) {
    var t = this;
    t.enabled &&
      (t.allowClick ||
        (
          t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())
        ));
  }
  function X() {
    var e = this,
      t = e.wrapperEl,
      a = e.rtlTranslate;
    if (e.enabled) {
      (e.previousTranslate = e.translate), e.isHorizontal()
        ? (e.translate = a
            ? t.scrollWidth - t.offsetWidth - t.scrollLeft
            : -t.scrollLeft)
        : (e.translate = -t.scrollTop), -0 === e.translate &&
        (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
      var i = e.maxTranslate() - e.minTranslate();
      (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress &&
        e.updateProgress(a ? -e.translate : e.translate), e.emit(
        "setTranslate",
        e.translate,
        !1
      );
    }
  }
  var Y = !1;
  function R() {}
  var W = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !1,
      nested: !1,
      createElements: !1,
      enabled: !0,
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1
    },
    V = {
      modular: {
        useParams: function(e) {
          var t = this;
          t.modules &&
            Object.keys(t.modules).forEach(function(a) {
              var i = t.modules[a];
              i.params && S(e, i.params);
            });
        },
        useModules: function(e) {
          void 0 === e && (e = {});
          var t = this;
          t.modules &&
            Object.keys(t.modules).forEach(function(a) {
              var i = t.modules[a],
                s = e[a] || {};
              i.on &&
                t.on &&
                Object.keys(i.on).forEach(function(e) {
                  t.on(e, i.on[e]);
                }), i.create && i.create.bind(t)(s);
            });
        }
      },
      eventsEmitter: {
        on: function(e, t, a) {
          var i = this;
          if ("function" != typeof t) return i;
          var s = a ? "unshift" : "push";
          return e.split(" ").forEach(function(e) {
            i.eventsListeners[e] ||
              (i.eventsListeners[e] = []), i.eventsListeners[e][s](t);
          }), i;
        },
        once: function(e, t, a) {
          var i = this;
          if ("function" != typeof t) return i;
          function s() {
            i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
            for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++)
              r[n] = arguments[n];
            t.apply(i, r);
          }
          return (s.__emitterProxy = t), i.on(e, s, a);
        },
        onAny: function(e, t) {
          var a = this;
          if ("function" != typeof e) return a;
          var i = t ? "unshift" : "push";
          return a.eventsAnyListeners.indexOf(e) < 0 &&
            a.eventsAnyListeners[i](e), a;
        },
        offAny: function(e) {
          var t = this;
          if (!t.eventsAnyListeners) return t;
          var a = t.eventsAnyListeners.indexOf(e);
          return a >= 0 && t.eventsAnyListeners.splice(a, 1), t;
        },
        off: function(e, t) {
          var a = this;
          return a.eventsListeners
            ? (
                e.split(" ").forEach(function(e) {
                  void 0 === t
                    ? (a.eventsListeners[e] = [])
                    : a.eventsListeners[e] &&
                      a.eventsListeners[e].forEach(function(i, s) {
                        (i === t ||
                          (i.__emitterProxy && i.__emitterProxy === t)) &&
                          a.eventsListeners[e].splice(s, 1);
                      });
                }),
                a
              )
            : a;
        },
        emit: function() {
          var e,
            t,
            a,
            i = this;
          if (!i.eventsListeners) return i;
          for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
            r[n] = arguments[n];
          "string" == typeof r[0] || Array.isArray(r[0])
            ? ((e = r[0]), (t = r.slice(1, r.length)), (a = i))
            : (
                (e = r[0].events),
                (t = r[0].data),
                (a = r[0].context || i)
              ), t.unshift(a);
          var l = Array.isArray(e) ? e : e.split(" ");
          return l.forEach(function(e) {
            i.eventsAnyListeners &&
              i.eventsAnyListeners.length &&
              i.eventsAnyListeners.forEach(function(i) {
                i.apply(a, [e].concat(t));
              }), i.eventsListeners &&
              i.eventsListeners[e] &&
              i.eventsListeners[e].forEach(function(e) {
                e.apply(a, t);
              });
          }), i;
        }
      },
      update: {
        updateSize: function() {
          var e,
            t,
            a = this,
            i = a.$el;
          (e =
            void 0 !== a.params.width && null !== a.params.width
              ? a.params.width
              : i[0].clientWidth), (t =
            void 0 !== a.params.height && null !== a.params.height
              ? a.params.height
              : i[0].clientHeight), (0 === e && a.isHorizontal()) ||
            (0 === t && a.isVertical()) ||
            (
              (e =
                e -
                parseInt(i.css("padding-left") || 0, 10) -
                parseInt(i.css("padding-right") || 0, 10)),
              (t =
                t -
                parseInt(i.css("padding-top") || 0, 10) -
                parseInt(i.css("padding-bottom") || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              S(a, { width: e, height: t, size: a.isHorizontal() ? e : t })
            );
        },
        updateSlides: function() {
          var e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom"
                }[t];
          }
          function a(e, a) {
            return parseFloat(e.getPropertyValue(t(a)) || 0);
          }
          var i = e.params,
            s = e.$wrapperEl,
            r = e.size,
            n = e.rtlTranslate,
            l = e.wrongRTL,
            o = e.virtual && i.virtual.enabled,
            d = o ? e.virtual.slides.length : e.slides.length,
            p = s.children("." + e.params.slideClass),
            u = o ? e.virtual.slides.length : p.length,
            c = [],
            h = [],
            v = [],
            f = i.slidesOffsetBefore;
          "function" == typeof f && (f = i.slidesOffsetBefore.call(e));
          var m = i.slidesOffsetAfter;
          "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
          var g = e.snapGrid.length,
            b = e.slidesGrid.length,
            y = i.spaceBetween,
            w = -f,
            E = 0,
            x = 0;
          if (void 0 !== r) {
            var T, C;
            "string" == typeof y &&
              y.indexOf("%") >= 0 &&
              (y =
                parseFloat(y.replace("%", "")) /
                100 *
                r), (e.virtualSize = -y), n
              ? p.css({ marginLeft: "", marginTop: "" })
              : p.css({
                  marginRight: "",
                  marginBottom: ""
                }), i.slidesPerColumn > 1 &&
              (
                (T =
                  Math.floor(u / i.slidesPerColumn) ===
                  u / e.params.slidesPerColumn
                    ? u
                    : Math.ceil(u / i.slidesPerColumn) * i.slidesPerColumn),
                "auto" !== i.slidesPerView &&
                  "row" === i.slidesPerColumnFill &&
                  (T = Math.max(T, i.slidesPerView * i.slidesPerColumn))
              );
            for (
              var M,
                z,
                P,
                k = i.slidesPerColumn,
                $ = T / k,
                L = Math.floor(u / i.slidesPerColumn),
                I = 0;
              I < u;
              I += 1
            ) {
              C = 0;
              var O = p.eq(I);
              if (i.slidesPerColumn > 1) {
                var A = void 0,
                  D = void 0,
                  N = void 0;
                if ("row" === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
                  var G = Math.floor(
                      I / (i.slidesPerGroup * i.slidesPerColumn)
                    ),
                    B = I - i.slidesPerColumn * i.slidesPerGroup * G,
                    H =
                      0 === G
                        ? i.slidesPerGroup
                        : Math.min(
                            Math.ceil((u - G * k * i.slidesPerGroup) / k),
                            i.slidesPerGroup
                          );
                  (A =
                    (D =
                      B - (N = Math.floor(B / H)) * H + G * i.slidesPerGroup) +
                    N * T / k), O.css({
                    "-webkit-box-ordinal-group": A,
                    "-moz-box-ordinal-group": A,
                    "-ms-flex-order": A,
                    "-webkit-order": A,
                    order: A
                  });
                } else
                  "column" === i.slidesPerColumnFill
                    ? (
                        (N = I - (D = Math.floor(I / k)) * k),
                        (D > L || (D === L && N === k - 1)) &&
                          (N += 1) >= k &&
                          ((N = 0), (D += 1))
                      )
                    : (D = I - (N = Math.floor(I / $)) * $);
                O.css(
                  t("margin-top"),
                  0 !== N && i.spaceBetween && i.spaceBetween + "px"
                );
              }
              if ("none" !== O.css("display")) {
                if ("auto" === i.slidesPerView) {
                  var X = getComputedStyle(O[0]),
                    Y = O[0].style.transform,
                    R = O[0].style.webkitTransform;
                  if (
                    (
                      Y && (O[0].style.transform = "none"),
                      R && (O[0].style.webkitTransform = "none"),
                      i.roundLengths
                    )
                  )
                    C = e.isHorizontal() ? O.outerWidth(!0) : O.outerHeight(!0);
                  else {
                    var W = a(X, "width"),
                      V = a(X, "padding-left"),
                      F = a(X, "padding-right"),
                      _ = a(X, "margin-left"),
                      q = a(X, "margin-right"),
                      j = X.getPropertyValue("box-sizing");
                    if (j && "border-box" === j) C = W + _ + q;
                    else {
                      var U = O[0],
                        K = U.clientWidth;
                      C = W + V + F + _ + q + (U.offsetWidth - K);
                    }
                  }
                  Y && (O[0].style.transform = Y), R &&
                    (O[0].style.webkitTransform = R), i.roundLengths &&
                    (C = Math.floor(C));
                } else
                  (C =
                    (r - (i.slidesPerView - 1) * y) /
                    i.slidesPerView), i.roundLengths && (C = Math.floor(C)), p[
                    I
                  ] && (p[I].style[t("width")] = C + "px");
                p[I] && (p[I].swiperSlideSize = C), v.push(C), i.centeredSlides
                  ? (
                      (w = w + C / 2 + E / 2 + y),
                      0 === E && 0 !== I && (w = w - r / 2 - y),
                      0 === I && (w = w - r / 2 - y),
                      Math.abs(w) < 0.001 && (w = 0),
                      i.roundLengths && (w = Math.floor(w)),
                      x % i.slidesPerGroup == 0 && c.push(w),
                      h.push(w)
                    )
                  : (
                      i.roundLengths && (w = Math.floor(w)),
                      (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                        e.params.slidesPerGroup ==
                        0 && c.push(w),
                      h.push(w),
                      (w = w + C + y)
                    ), (e.virtualSize += C + y), (E = C), (x += 1);
              }
            }
            if (
              (
                (e.virtualSize = Math.max(e.virtualSize, r) + m),
                n &&
                  l &&
                  ("slide" === i.effect || "coverflow" === i.effect) &&
                  s.css({ width: e.virtualSize + i.spaceBetween + "px" }),
                i.setWrapperSize
              )
            )
              s.css(
                (
                  ((z = {})[t("width")] =
                    e.virtualSize + i.spaceBetween + "px"),
                  z
                )
              );
            if (i.slidesPerColumn > 1)
              if (
                (
                  (e.virtualSize = (C + i.spaceBetween) * T),
                  (e.virtualSize =
                    Math.ceil(e.virtualSize / i.slidesPerColumn) -
                    i.spaceBetween),
                  s.css(
                    (
                      ((P = {})[t("width")] =
                        e.virtualSize + i.spaceBetween + "px"),
                      P
                    )
                  ),
                  i.centeredSlides
                )
              ) {
                M = [];
                for (var Z = 0; Z < c.length; Z += 1) {
                  var J = c[Z];
                  i.roundLengths && (J = Math.floor(J)), c[Z] <
                    e.virtualSize + c[0] && M.push(J);
                }
                c = M;
              }
            if (!i.centeredSlides) {
              M = [];
              for (var Q = 0; Q < c.length; Q += 1) {
                var ee = c[Q];
                i.roundLengths && (ee = Math.floor(ee)), c[Q] <=
                  e.virtualSize - r && M.push(ee);
              }
              (c = M), Math.floor(e.virtualSize - r) -
                Math.floor(c[c.length - 1]) >
                1 && c.push(e.virtualSize - r);
            }
            if ((0 === c.length && (c = [0]), 0 !== i.spaceBetween)) {
              var te,
                ae = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
              p
                .filter(function(e, t) {
                  return !i.cssMode || t !== p.length - 1;
                })
                .css((((te = {})[ae] = y + "px"), te));
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              var ie = 0;
              v.forEach(function(e) {
                ie += e + (i.spaceBetween ? i.spaceBetween : 0);
              });
              var se = (ie -= i.spaceBetween) - r;
              c = c.map(function(e) {
                return e < 0 ? -f : e > se ? se + m : e;
              });
            }
            if (i.centerInsufficientSlides) {
              var re = 0;
              if (
                (
                  v.forEach(function(e) {
                    re += e + (i.spaceBetween ? i.spaceBetween : 0);
                  }),
                  (re -= i.spaceBetween) < r
                )
              ) {
                var ne = (r - re) / 2;
                c.forEach(function(e, t) {
                  c[t] = e - ne;
                }), h.forEach(function(e, t) {
                  h[t] = e + ne;
                });
              }
            }
            S(e, {
              slides: p,
              snapGrid: c,
              slidesGrid: h,
              slidesSizesGrid: v
            }), u !== d && e.emit("slidesLengthChange"), c.length !== g &&
              (
                e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")
              ), h.length !== b &&
              e.emit("slidesGridLengthChange"), (i.watchSlidesProgress ||
              i.watchSlidesVisibility) &&
              e.updateSlidesOffset();
          }
        },
        updateAutoHeight: function(e) {
          var t,
            a = this,
            i = [],
            s = a.virtual && a.params.virtual.enabled,
            r = 0;
          "number" == typeof e
            ? a.setTransition(e)
            : !0 === e && a.setTransition(a.params.speed);
          var n = function(e) {
            return s
              ? a.slides.filter(function(t) {
                  return (
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                  );
                })[0]
              : a.slides.eq(e)[0];
          };
          if ("auto" !== a.params.slidesPerView && a.params.slidesPerView > 1)
            if (a.params.centeredSlides)
              a.visibleSlides.each(function(e) {
                i.push(e);
              });
            else
              for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                var l = a.activeIndex + t;
                if (l > a.slides.length && !s) break;
                i.push(n(l));
              }
          else i.push(n(a.activeIndex));
          for (t = 0; t < i.length; t += 1)
            if (void 0 !== i[t]) {
              var o = i[t].offsetHeight;
              r = o > r ? o : r;
            }
          r && a.$wrapperEl.css("height", r + "px");
        },
        updateSlidesOffset: function() {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this,
            a = t.params,
            i = t.slides,
            s = t.rtlTranslate;
          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            var r = -e;
            s && (r = e), i.removeClass(
              a.slideVisibleClass
            ), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
            for (var n = 0; n < i.length; n += 1) {
              var l = i[n],
                o =
                  (r +
                    (a.centeredSlides ? t.minTranslate() : 0) -
                    l.swiperSlideOffset) /
                  (l.swiperSlideSize + a.spaceBetween);
              if (
                a.watchSlidesVisibility ||
                (a.centeredSlides && a.autoHeight)
              ) {
                var d = -(r - l.swiperSlideOffset),
                  p = d + t.slidesSizesGrid[n];
                ((d >= 0 && d < t.size - 1) ||
                  (p > 1 && p <= t.size) ||
                  (d <= 0 && p >= t.size)) &&
                  (
                    t.visibleSlides.push(l),
                    t.visibleSlidesIndexes.push(n),
                    i.eq(n).addClass(a.slideVisibleClass)
                  );
              }
              l.progress = s ? -o : o;
            }
            t.visibleSlides = m(t.visibleSlides);
          }
        },
        updateProgress: function(e) {
          var t = this;
          if (void 0 === e) {
            var a = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * a) || 0;
          }
          var i = t.params,
            s = t.maxTranslate() - t.minTranslate(),
            r = t.progress,
            n = t.isBeginning,
            l = t.isEnd,
            o = n,
            d = l;
          0 === s
            ? ((r = 0), (n = !0), (l = !0))
            : (
                (n = (r = (e - t.minTranslate()) / s) <= 0),
                (l = r >= 1)
              ), S(t, {
            progress: r,
            isBeginning: n,
            isEnd: l
          }), (i.watchSlidesProgress ||
            i.watchSlidesVisibility ||
            (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e), n &&
            !o &&
            t.emit("reachBeginning toEdge"), l &&
            !d &&
            t.emit("reachEnd toEdge"), ((o && !n) || (d && !l)) &&
            t.emit("fromEdge"), t.emit("progress", r);
        },
        updateSlidesClasses: function() {
          var e,
            t = this,
            a = t.slides,
            i = t.params,
            s = t.$wrapperEl,
            r = t.activeIndex,
            n = t.realIndex,
            l = t.virtual && i.virtual.enabled;
          a.removeClass(
            i.slideActiveClass +
              " " +
              i.slideNextClass +
              " " +
              i.slidePrevClass +
              " " +
              i.slideDuplicateActiveClass +
              " " +
              i.slideDuplicateNextClass +
              " " +
              i.slideDuplicatePrevClass
          ), (e = l
            ? t.$wrapperEl.find(
                "." + i.slideClass + '[data-swiper-slide-index="' + r + '"]'
              )
            : a.eq(r)).addClass(i.slideActiveClass), i.loop &&
            (e.hasClass(i.slideDuplicateClass)
              ? s
                  .children(
                    "." +
                      i.slideClass +
                      ":not(." +
                      i.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      n +
                      '"]'
                  )
                  .addClass(i.slideDuplicateActiveClass)
              : s
                  .children(
                    "." +
                      i.slideClass +
                      "." +
                      i.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      n +
                      '"]'
                  )
                  .addClass(i.slideDuplicateActiveClass));
          var o = e
            .nextAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop && 0 === o.length && (o = a.eq(0)).addClass(i.slideNextClass);
          var d = e
            .prevAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop &&
            0 === d.length &&
            (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop &&
            (
              o.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        o.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass)
                : s
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        o.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass),
              d.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        d.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : s
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        d.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicatePrevClass)
            ), t.emitSlidesClasses();
        },
        updateActiveIndex: function(e) {
          var t,
            a = this,
            i = a.rtlTranslate ? a.translate : -a.translate,
            s = a.slidesGrid,
            r = a.snapGrid,
            n = a.params,
            l = a.activeIndex,
            o = a.realIndex,
            d = a.snapIndex,
            p = e;
          if (void 0 === p) {
            for (var u = 0; u < s.length; u += 1)
              void 0 !== s[u + 1]
                ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2
                  ? (p = u)
                  : i >= s[u] && i < s[u + 1] && (p = u + 1)
                : i >= s[u] && (p = u);
            n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
          }
          if (r.indexOf(i) >= 0) t = r.indexOf(i);
          else {
            var c = Math.min(n.slidesPerGroupSkip, p);
            t = c + Math.floor((p - c) / n.slidesPerGroup);
          }
          if ((t >= r.length && (t = r.length - 1), p !== l)) {
            var h = parseInt(
              a.slides.eq(p).attr("data-swiper-slide-index") || p,
              10
            );
            S(a, {
              snapIndex: t,
              realIndex: h,
              previousIndex: l,
              activeIndex: p
            }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), o !==
              h && a.emit("realIndexChange"), (a.initialized ||
              a.params.runCallbacksOnInit) &&
              a.emit("slideChange");
          } else t !== d && ((a.snapIndex = t), a.emit("snapIndexChange"));
        },
        updateClickedSlide: function(e) {
          var t,
            a = this,
            i = a.params,
            s = m(e.target).closest("." + i.slideClass)[0],
            r = !1;
          if (s)
            for (var n = 0; n < a.slides.length; n += 1)
              if (a.slides[n] === s) {
                (r = !0), (t = n);
                break;
              }
          if (!s || !r)
            return (a.clickedSlide = void 0), void (a.clickedIndex = void 0);
          (a.clickedSlide = s), a.virtual && a.params.virtual.enabled
            ? (a.clickedIndex = parseInt(
                m(s).attr("data-swiper-slide-index"),
                10
              ))
            : (a.clickedIndex = t), i.slideToClickedSlide &&
            void 0 !== a.clickedIndex &&
            a.clickedIndex !== a.activeIndex &&
            a.slideToClickedSlide();
        }
      },
      translate: {
        getTranslate: function(e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this,
            a = t.params,
            i = t.rtlTranslate,
            s = t.translate,
            r = t.$wrapperEl;
          if (a.virtualTranslate) return i ? -s : s;
          if (a.cssMode) return s;
          var n = T(r[0], e);
          return i && (n = -n), n || 0;
        },
        setTranslate: function(e, t) {
          var a = this,
            i = a.rtlTranslate,
            s = a.params,
            r = a.$wrapperEl,
            n = a.wrapperEl,
            l = a.progress,
            o = 0,
            d = 0;
          a.isHorizontal() ? (o = i ? -e : e) : (d = e), s.roundLengths &&
            ((o = Math.floor(o)), (d = Math.floor(d))), s.cssMode
            ? (n[
                a.isHorizontal() ? "scrollLeft" : "scrollTop"
              ] = a.isHorizontal() ? -o : -d)
            : s.virtualTranslate ||
              r.transform(
                "translate3d(" + o + "px, " + d + "px, 0px)"
              ), (a.previousTranslate =
            a.translate), (a.translate = a.isHorizontal() ? o : d);
          var p = a.maxTranslate() - a.minTranslate();
          (0 === p ? 0 : (e - a.minTranslate()) / p) !== l &&
            a.updateProgress(e), a.emit("setTranslate", a.translate, t);
        },
        minTranslate: function() {
          return -this.snapGrid[0];
        },
        maxTranslate: function() {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function(e, t, a, i, s) {
          void 0 === e && (e = 0), void 0 === t &&
            (t = this.params.speed), void 0 === a && (a = !0), void 0 === i &&
            (i = !0);
          var r = this,
            n = r.params,
            l = r.wrapperEl;
          if (r.animating && n.preventInteractionOnTransition) return !1;
          var o,
            d = r.minTranslate(),
            p = r.maxTranslate();
          if (
            (
              (o = i && e > d ? d : i && e < p ? p : e),
              r.updateProgress(o),
              n.cssMode
            )
          ) {
            var u,
              c = r.isHorizontal();
            if (0 === t) l[c ? "scrollLeft" : "scrollTop"] = -o;
            else if (l.scrollTo)
              l.scrollTo(
                (
                  ((u = {})[c ? "left" : "top"] = -o),
                  (u.behavior = "smooth"),
                  u
                )
              );
            else l[c ? "scrollLeft" : "scrollTop"] = -o;
            return !0;
          }
          return 0 === t
            ? (
                r.setTransition(0),
                r.setTranslate(o),
                a &&
                  (
                    r.emit("beforeTransitionStart", t, s),
                    r.emit("transitionEnd")
                  )
              )
            : (
                r.setTransition(t),
                r.setTranslate(o),
                a &&
                  (
                    r.emit("beforeTransitionStart", t, s),
                    r.emit("transitionStart")
                  ),
                r.animating ||
                  (
                    (r.animating = !0),
                    r.onTranslateToWrapperTransitionEnd ||
                      (r.onTranslateToWrapperTransitionEnd = function(e) {
                        r &&
                          !r.destroyed &&
                          e.target === this &&
                          (
                            r.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            r.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            (r.onTranslateToWrapperTransitionEnd = null),
                            delete r.onTranslateToWrapperTransitionEnd,
                            a && r.emit("transitionEnd")
                          );
                      }),
                    r.$wrapperEl[0].addEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      r.onTranslateToWrapperTransitionEnd
                    )
                  )
              ), !0;
        }
      },
      transition: {
        setTransition: function(e, t) {
          var a = this;
          a.params.cssMode || a.$wrapperEl.transition(e), a.emit(
            "setTransition",
            e,
            t
          );
        },
        transitionStart: function(e, t) {
          void 0 === e && (e = !0);
          var a = this,
            i = a.activeIndex,
            s = a.params,
            r = a.previousIndex;
          if (!s.cssMode) {
            s.autoHeight && a.updateAutoHeight();
            var n = t;
            if (
              (
                n || (n = i > r ? "next" : i < r ? "prev" : "reset"),
                a.emit("transitionStart"),
                e && i !== r
              )
            ) {
              if ("reset" === n)
                return void a.emit("slideResetTransitionStart");
              a.emit("slideChangeTransitionStart"), "next" === n
                ? a.emit("slideNextTransitionStart")
                : a.emit("slidePrevTransitionStart");
            }
          }
        },
        transitionEnd: function(e, t) {
          void 0 === e && (e = !0);
          var a = this,
            i = a.activeIndex,
            s = a.previousIndex,
            r = a.params;
          if (((a.animating = !1), !r.cssMode)) {
            a.setTransition(0);
            var n = t;
            if (
              (
                n || (n = i > s ? "next" : i < s ? "prev" : "reset"),
                a.emit("transitionEnd"),
                e && i !== s
              )
            ) {
              if ("reset" === n) return void a.emit("slideResetTransitionEnd");
              a.emit("slideChangeTransitionEnd"), "next" === n
                ? a.emit("slideNextTransitionEnd")
                : a.emit("slidePrevTransitionEnd");
            }
          }
        }
      },
      slide: {
        slideTo: function(e, t, a, i, s) {
          if (
            (
              void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === a && (a = !0),
              "number" != typeof e && "string" != typeof e
            )
          )
            throw new Error(
              "The 'index' argument cannot have type other than 'number' or 'string'. [" +
                typeof e +
                "] given."
            );
          if ("string" == typeof e) {
            var r = parseInt(e, 10);
            if (!isFinite(r))
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
                  e +
                  "] given."
              );
            e = r;
          }
          var n = this,
            l = e;
          l < 0 && (l = 0);
          var o = n.params,
            d = n.snapGrid,
            p = n.slidesGrid,
            u = n.previousIndex,
            c = n.activeIndex,
            h = n.rtlTranslate,
            v = n.wrapperEl,
            f = n.enabled;
          if (
            (n.animating && o.preventInteractionOnTransition) ||
            (!f && !i && !s)
          )
            return !1;
          var m = Math.min(n.params.slidesPerGroupSkip, l),
            g = m + Math.floor((l - m) / n.params.slidesPerGroup);
          g >= d.length && (g = d.length - 1), (c || o.initialSlide || 0) ===
            (u || 0) &&
            a &&
            n.emit("beforeSlideChangeStart");
          var b,
            y = -d[g];
          if ((n.updateProgress(y), o.normalizeSlideIndex))
            for (var w = 0; w < p.length; w += 1) {
              var E = -Math.floor(100 * y),
                x = Math.floor(100 * p[w]),
                T = Math.floor(100 * p[w + 1]);
              void 0 !== p[w + 1]
                ? E >= x && E < T - (T - x) / 2
                  ? (l = w)
                  : E >= x && E < T && (l = w + 1)
                : E >= x && (l = w);
            }
          if (n.initialized && l !== c) {
            if (!n.allowSlideNext && y < n.translate && y < n.minTranslate())
              return !1;
            if (
              !n.allowSlidePrev &&
              y > n.translate &&
              y > n.maxTranslate() &&
              (c || 0) !== l
            )
              return !1;
          }
          if (
            (
              (b = l > c ? "next" : l < c ? "prev" : "reset"),
              (h && -y === n.translate) || (!h && y === n.translate)
            )
          )
            return n.updateActiveIndex(l), o.autoHeight &&
              n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !==
              o.effect && n.setTranslate(y), "reset" !== b &&
              (n.transitionStart(a, b), n.transitionEnd(a, b)), !1;
          if (o.cssMode) {
            var C,
              S = n.isHorizontal(),
              M = -y;
            if ((h && (M = v.scrollWidth - v.offsetWidth - M), 0 === t))
              v[S ? "scrollLeft" : "scrollTop"] = M;
            else if (v.scrollTo)
              v.scrollTo(
                (((C = {})[S ? "left" : "top"] = M), (C.behavior = "smooth"), C)
              );
            else v[S ? "scrollLeft" : "scrollTop"] = M;
            return !0;
          }
          return 0 === t
            ? (
                n.setTransition(0),
                n.setTranslate(y),
                n.updateActiveIndex(l),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", t, i),
                n.transitionStart(a, b),
                n.transitionEnd(a, b)
              )
            : (
                n.setTransition(t),
                n.setTranslate(y),
                n.updateActiveIndex(l),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", t, i),
                n.transitionStart(a, b),
                n.animating ||
                  (
                    (n.animating = !0),
                    n.onSlideToWrapperTransitionEnd ||
                      (n.onSlideToWrapperTransitionEnd = function(e) {
                        n &&
                          !n.destroyed &&
                          e.target === this &&
                          (
                            n.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              n.onSlideToWrapperTransitionEnd
                            ),
                            n.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              n.onSlideToWrapperTransitionEnd
                            ),
                            (n.onSlideToWrapperTransitionEnd = null),
                            delete n.onSlideToWrapperTransitionEnd,
                            n.transitionEnd(a, b)
                          );
                      }),
                    n.$wrapperEl[0].addEventListener(
                      "transitionend",
                      n.onSlideToWrapperTransitionEnd
                    ),
                    n.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      n.onSlideToWrapperTransitionEnd
                    )
                  )
              ), !0;
        },
        slideToLoop: function(e, t, a, i) {
          void 0 === e && (e = 0), void 0 === t &&
            (t = this.params.speed), void 0 === a && (a = !0);
          var s = this,
            r = e;
          return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, a, i);
        },
        slideNext: function(e, t, a) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this,
            s = i.params,
            r = i.animating;
          if (!i.enabled) return i;
          var n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          return i.slideTo(i.activeIndex + n, e, t, a);
        },
        slidePrev: function(e, t, a) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this,
            s = i.params,
            r = i.animating,
            n = i.snapGrid,
            l = i.slidesGrid,
            o = i.rtlTranslate;
          if (!i.enabled) return i;
          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var p = d(o ? i.translate : -i.translate),
            u = n.map(function(e) {
              return d(e);
            });
          n[u.indexOf(p)];
          var c,
            h = n[u.indexOf(p) - 1];
          return void 0 === h &&
            s.cssMode &&
            n.forEach(function(e) {
              !h && p >= e && (h = e);
            }), void 0 !== h &&
            (c = l.indexOf(h)) < 0 &&
            (c = i.activeIndex - 1), i.slideTo(c, e, t, a);
        },
        slideReset: function(e, t, a) {
          return void 0 === e && (e = this.params.speed), void 0 === t &&
            (t = !0), this.slideTo(this.activeIndex, e, t, a);
        },
        slideToClosest: function(e, t, a, i) {
          void 0 === e && (e = this.params.speed), void 0 === t &&
            (t = !0), void 0 === i && (i = 0.5);
          var s = this,
            r = s.activeIndex,
            n = Math.min(s.params.slidesPerGroupSkip, r),
            l = n + Math.floor((r - n) / s.params.slidesPerGroup),
            o = s.rtlTranslate ? s.translate : -s.translate;
          if (o >= s.snapGrid[l]) {
            var d = s.snapGrid[l];
            o - d > (s.snapGrid[l + 1] - d) * i &&
              (r += s.params.slidesPerGroup);
          } else {
            var p = s.snapGrid[l - 1];
            o - p <= (s.snapGrid[l] - p) * i && (r -= s.params.slidesPerGroup);
          }
          return (r = Math.max(r, 0)), (r = Math.min(
            r,
            s.slidesGrid.length - 1
          )), s.slideTo(r, e, t, a);
        },
        slideToClickedSlide: function() {
          var e,
            t = this,
            a = t.params,
            i = t.$wrapperEl,
            s =
              "auto" === a.slidesPerView
                ? t.slidesPerViewDynamic()
                : a.slidesPerView,
            r = t.clickedIndex;
          if (a.loop) {
            if (t.animating) return;
            (e = parseInt(
              m(t.clickedSlide).attr("data-swiper-slide-index"),
              10
            )), a.centeredSlides
              ? r < t.loopedSlides - s / 2 ||
                r > t.slides.length - t.loopedSlides + s / 2
                ? (
                    t.loopFix(),
                    (r = i
                      .children(
                        "." +
                          a.slideClass +
                          '[data-swiper-slide-index="' +
                          e +
                          '"]:not(.' +
                          a.slideDuplicateClass +
                          ")"
                      )
                      .eq(0)
                      .index()),
                    E(function() {
                      t.slideTo(r);
                    })
                  )
                : t.slideTo(r)
              : r > t.slides.length - s
                ? (
                    t.loopFix(),
                    (r = i
                      .children(
                        "." +
                          a.slideClass +
                          '[data-swiper-slide-index="' +
                          e +
                          '"]:not(.' +
                          a.slideDuplicateClass +
                          ")"
                      )
                      .eq(0)
                      .index()),
                    E(function() {
                      t.slideTo(r);
                    })
                  )
                : t.slideTo(r);
          } else t.slideTo(r);
        }
      },
      loop: {
        loopCreate: function() {
          var e = this,
            t = r(),
            a = e.params,
            i = e.$wrapperEl;
          i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
          var s = i.children("." + a.slideClass);
          if (a.loopFillGroupWithBlank) {
            var n = a.slidesPerGroup - s.length % a.slidesPerGroup;
            if (n !== a.slidesPerGroup) {
              for (var l = 0; l < n; l += 1) {
                var o = m(t.createElement("div")).addClass(
                  a.slideClass + " " + a.slideBlankClass
                );
                i.append(o);
              }
              s = i.children("." + a.slideClass);
            }
          }
          "auto" !== a.slidesPerView ||
            a.loopedSlides ||
            (a.loopedSlides = s.length), (e.loopedSlides = Math.ceil(
            parseFloat(a.loopedSlides || a.slidesPerView, 10)
          )), (e.loopedSlides += a.loopAdditionalSlides), e.loopedSlides >
            s.length && (e.loopedSlides = s.length);
          var d = [],
            p = [];
          s.each(function(t, a) {
            var i = m(t);
            a < e.loopedSlides &&
              p.push(
                t
              ), a < s.length && a >= s.length - e.loopedSlides && d.push(t), i.attr("data-swiper-slide-index", a);
          });
          for (var u = 0; u < p.length; u += 1)
            i.append(m(p[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
          for (var c = d.length - 1; c >= 0; c -= 1)
            i.prepend(m(d[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
        },
        loopFix: function() {
          var e = this;
          e.emit("beforeLoopFix");
          var t,
            a = e.activeIndex,
            i = e.slides,
            s = e.loopedSlides,
            r = e.allowSlidePrev,
            n = e.allowSlideNext,
            l = e.snapGrid,
            o = e.rtlTranslate;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          var d = -l[a] - e.getTranslate();
          if (a < s)
            (t = i.length - 3 * s + a), (t += s), e.slideTo(t, 0, !1, !0) &&
              0 !== d &&
              e.setTranslate((o ? -e.translate : e.translate) - d);
          else if (a >= i.length - s) {
            (t = -i.length + a + s), (t += s), e.slideTo(t, 0, !1, !0) &&
              0 !== d &&
              e.setTranslate((o ? -e.translate : e.translate) - d);
          }
          (e.allowSlidePrev = r), (e.allowSlideNext = n), e.emit("loopFix");
        },
        loopDestroy: function() {
          var e = this,
            t = e.$wrapperEl,
            a = e.params,
            i = e.slides;
          t
            .children(
              "." +
                a.slideClass +
                "." +
                a.slideDuplicateClass +
                ",." +
                a.slideClass +
                "." +
                a.slideBlankClass
            )
            .remove(), i.removeAttr("data-swiper-slide-index");
        }
      },
      grabCursor: {
        setGrabCursor: function(e) {
          var t = this;
          if (
            !(
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
          ) {
            var a = t.el;
            (a.style.cursor = "move"), (a.style.cursor = e
              ? "-webkit-grabbing"
              : "-webkit-grab"), (a.style.cursor = e
              ? "-moz-grabbin"
              : "-moz-grab"), (a.style.cursor = e ? "grabbing" : "grab");
          }
        },
        unsetGrabCursor: function() {
          var e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.el.style.cursor = "");
        }
      },
      manipulation: {
        appendSlide: function(e) {
          var t = this,
            a = t.$wrapperEl,
            i = t.params;
          if (
            (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
          )
            for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
          else a.append(e);
          i.loop && t.loopCreate(), (i.observer && t.support.observer) ||
            t.update();
        },
        prependSlide: function(e) {
          var t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
          a.loop && t.loopDestroy();
          var r = s + 1;
          if ("object" == typeof e && "length" in e) {
            for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
            r = s + e.length;
          } else i.prepend(e);
          a.loop && t.loopCreate(), (a.observer && t.support.observer) ||
            t.update(), t.slideTo(r, 0, !1);
        },
        addSlide: function(e, t) {
          var a = this,
            i = a.$wrapperEl,
            s = a.params,
            r = a.activeIndex;
          s.loop &&
            (
              (r -= a.loopedSlides),
              a.loopDestroy(),
              (a.slides = i.children("." + s.slideClass))
            );
          var n = a.slides.length;
          if (e <= 0) a.prependSlide(t);
          else if (e >= n) a.appendSlide(t);
          else {
            for (var l = r > e ? r + 1 : r, o = [], d = n - 1; d >= e; d -= 1) {
              var p = a.slides.eq(d);
              p.remove(), o.unshift(p);
            }
            if ("object" == typeof t && "length" in t) {
              for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u]);
              l = r > e ? r + t.length : r;
            } else i.append(t);
            for (var c = 0; c < o.length; c += 1) i.append(o[c]);
            s.loop && a.loopCreate(), (s.observer && a.support.observer) ||
              a.update(), s.loop
              ? a.slideTo(l + a.loopedSlides, 0, !1)
              : a.slideTo(l, 0, !1);
          }
        },
        removeSlide: function(e) {
          var t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
          a.loop &&
            (
              (s -= t.loopedSlides),
              t.loopDestroy(),
              (t.slides = i.children("." + a.slideClass))
            );
          var r,
            n = s;
          if ("object" == typeof e && "length" in e) {
            for (var l = 0; l < e.length; l += 1)
              (r = e[l]), t.slides[r] && t.slides.eq(r).remove(), r < n &&
                (n -= 1);
            n = Math.max(n, 0);
          } else
            (r = e), t.slides[r] && t.slides.eq(r).remove(), r < n &&
              (n -= 1), (n = Math.max(n, 0));
          a.loop && t.loopCreate(), (a.observer && t.support.observer) ||
            t.update(), a.loop
            ? t.slideTo(n + t.loopedSlides, 0, !1)
            : t.slideTo(n, 0, !1);
        },
        removeAllSlides: function() {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
          this.removeSlide(e);
        }
      },
      events: {
        attachEvents: function() {
          var e = this,
            t = r(),
            a = e.params,
            i = e.touchEvents,
            s = e.el,
            n = e.wrapperEl,
            l = e.device,
            o = e.support;
          (e.onTouchStart = D.bind(e)), (e.onTouchMove = N.bind(
            e
          )), (e.onTouchEnd = G.bind(e)), a.cssMode &&
            (e.onScroll = X.bind(e)), (e.onClick = H.bind(e));
          var d = !!a.nested;
          if (!o.touch && o.pointerEvents)
            s.addEventListener(i.start, e.onTouchStart, !1), t.addEventListener(
              i.move,
              e.onTouchMove,
              d
            ), t.addEventListener(i.end, e.onTouchEnd, !1);
          else {
            if (o.touch) {
              var p = !(
                "touchstart" !== i.start ||
                !o.passiveListener ||
                !a.passiveListeners
              ) && { passive: !0, capture: !1 };
              s.addEventListener(
                i.start,
                e.onTouchStart,
                p
              ), s.addEventListener(
                i.move,
                e.onTouchMove,
                o.passiveListener ? { passive: !1, capture: d } : d
              ), s.addEventListener(i.end, e.onTouchEnd, p), i.cancel &&
                s.addEventListener(i.cancel, e.onTouchEnd, p), Y ||
                (t.addEventListener("touchstart", R), (Y = !0));
            }
            ((a.simulateTouch && !l.ios && !l.android) ||
              (a.simulateTouch && !o.touch && l.ios)) &&
              (
                s.addEventListener("mousedown", e.onTouchStart, !1),
                t.addEventListener("mousemove", e.onTouchMove, d),
                t.addEventListener("mouseup", e.onTouchEnd, !1)
              );
          }
          (a.preventClicks || a.preventClicksPropagation) &&
            s.addEventListener("click", e.onClick, !0), a.cssMode &&
            n.addEventListener("scroll", e.onScroll), a.updateOnWindowResize
            ? e.on(
                l.ios || l.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                B,
                !0
              )
            : e.on("observerUpdate", B, !0);
        },
        detachEvents: function() {
          var e = this,
            t = r(),
            a = e.params,
            i = e.touchEvents,
            s = e.el,
            n = e.wrapperEl,
            l = e.device,
            o = e.support,
            d = !!a.nested;
          if (!o.touch && o.pointerEvents)
            s.removeEventListener(
              i.start,
              e.onTouchStart,
              !1
            ), t.removeEventListener(
              i.move,
              e.onTouchMove,
              d
            ), t.removeEventListener(i.end, e.onTouchEnd, !1);
          else {
            if (o.touch) {
              var p = !(
                "onTouchStart" !== i.start ||
                !o.passiveListener ||
                !a.passiveListeners
              ) && { passive: !0, capture: !1 };
              s.removeEventListener(
                i.start,
                e.onTouchStart,
                p
              ), s.removeEventListener(
                i.move,
                e.onTouchMove,
                d
              ), s.removeEventListener(i.end, e.onTouchEnd, p), i.cancel &&
                s.removeEventListener(i.cancel, e.onTouchEnd, p);
            }
            ((a.simulateTouch && !l.ios && !l.android) ||
              (a.simulateTouch && !o.touch && l.ios)) &&
              (
                s.removeEventListener("mousedown", e.onTouchStart, !1),
                t.removeEventListener("mousemove", e.onTouchMove, d),
                t.removeEventListener("mouseup", e.onTouchEnd, !1)
              );
          }
          (a.preventClicks || a.preventClicksPropagation) &&
            s.removeEventListener("click", e.onClick, !0), a.cssMode &&
            n.removeEventListener("scroll", e.onScroll), e.off(
            l.ios || l.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            B
          );
        }
      },
      breakpoints: {
        setBreakpoint: function() {
          var e = this,
            t = e.activeIndex,
            a = e.initialized,
            i = e.loopedSlides,
            s = void 0 === i ? 0 : i,
            r = e.params,
            n = e.$el,
            l = r.breakpoints;
          if (l && (!l || 0 !== Object.keys(l).length)) {
            var o = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
            if (o && e.currentBreakpoint !== o) {
              var d = o in l ? l[o] : void 0;
              d &&
                [
                  "slidesPerView",
                  "spaceBetween",
                  "slidesPerGroup",
                  "slidesPerGroupSkip",
                  "slidesPerColumn"
                ].forEach(function(e) {
                  var t = d[e];
                  void 0 !== t &&
                    (d[e] =
                      "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                        ? "slidesPerView" === e
                          ? parseFloat(t)
                          : parseInt(t, 10)
                        : "auto");
                });
              var p = d || e.originalParams,
                u = r.slidesPerColumn > 1,
                c = p.slidesPerColumn > 1,
                h = r.enabled;
              u && !c
                ? (
                    n.removeClass(
                      r.containerModifierClass +
                        "multirow " +
                        r.containerModifierClass +
                        "multirow-column"
                    ),
                    e.emitContainerClasses()
                  )
                : !u &&
                  c &&
                  (
                    n.addClass(r.containerModifierClass + "multirow"),
                    "column" === p.slidesPerColumnFill &&
                      n.addClass(r.containerModifierClass + "multirow-column"),
                    e.emitContainerClasses()
                  );
              var v = p.direction && p.direction !== r.direction,
                f = r.loop && (p.slidesPerView !== r.slidesPerView || v);
              v && a && e.changeDirection(), S(e.params, p);
              var m = e.params.enabled;
              S(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), h && !m
                ? e.disable()
                : !h && m && e.enable(), (e.currentBreakpoint = o), e.emit(
                "_beforeBreakpoint",
                p
              ), f &&
                a &&
                (
                  e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - s + e.loopedSlides, 0, !1)
                ), e.emit("breakpoint", p);
            }
          }
        },
        getBreakpoint: function(e, t, a) {
          if ((void 0 === t && (t = "window"), e && ("container" !== t || a))) {
            var i = !1,
              s = l(),
              r = "window" === t ? s.innerWidth : a.clientWidth,
              n = "window" === t ? s.innerHeight : a.clientHeight,
              o = Object.keys(e).map(function(e) {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  var t = parseFloat(e.substr(1));
                  return { value: n * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort(function(e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var d = 0; d < o.length; d += 1) {
              var p = o[d],
                u = p.point;
              p.value <= r && (i = u);
            }
            return i || "max";
          }
        }
      },
      checkOverflow: {
        checkOverflow: function() {
          var e = this,
            t = e.params,
            a = e.isLocked,
            i =
              e.slides.length > 0 &&
              t.slidesOffsetBefore +
                t.spaceBetween * (e.slides.length - 1) +
                e.slides[0].offsetWidth * e.slides.length;
          t.slidesOffsetBefore && t.slidesOffsetAfter && i
            ? (e.isLocked = i <= e.size)
            : (e.isLocked =
                1 ===
                e.snapGrid
                  .length), (e.allowSlideNext = !e.isLocked), (e.allowSlidePrev = !e.isLocked), a !==
            e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), a &&
            a !== e.isLocked &&
            ((e.isEnd = !1), e.navigation && e.navigation.update());
        }
      },
      classes: {
        addClasses: function() {
          var e,
            t,
            a,
            i = this,
            s = i.classNames,
            r = i.params,
            n = i.rtl,
            l = i.$el,
            o = i.device,
            d = i.support,
            p = (
              (e = [
                "initialized",
                r.direction,
                { "pointer-events": d.pointerEvents && !d.touch },
                { "free-mode": r.freeMode },
                { autoheight: r.autoHeight },
                { rtl: n },
                { multirow: r.slidesPerColumn > 1 },
                {
                  "multirow-column":
                    r.slidesPerColumn > 1 && "column" === r.slidesPerColumnFill
                },
                { android: o.android },
                { ios: o.ios },
                { "css-mode": r.cssMode }
              ]),
              (t = r.containerModifierClass),
              (a = []),
              e.forEach(function(e) {
                "object" == typeof e
                  ? Object.keys(e).forEach(function(i) {
                      e[i] && a.push(t + i);
                    })
                  : "string" == typeof e && a.push(t + e);
              }),
              a
            );
          s.push.apply(s, p), l.addClass(
            [].concat(s).join(" ")
          ), i.emitContainerClasses();
        },
        removeClasses: function() {
          var e = this,
            t = e.$el,
            a = e.classNames;
          t.removeClass(a.join(" ")), e.emitContainerClasses();
        }
      },
      images: {
        loadImage: function(e, t, a, i, s, r) {
          var n,
            o = l();
          function d() {
            r && r();
          }
          m(e).parent("picture")[0] || (e.complete && s)
            ? d()
            : t
              ? (
                  ((n = new o.Image()).onload = d),
                  (n.onerror = d),
                  i && (n.sizes = i),
                  a && (n.srcset = a),
                  t && (n.src = t)
                )
              : d();
        },
        preloadImages: function() {
          var e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (
                void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (
                    e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")
                  )
              );
          }
          e.imagesToLoad = e.$el.find("img");
          for (var a = 0; a < e.imagesToLoad.length; a += 1) {
            var i = e.imagesToLoad[a];
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute("src"),
              i.srcset || i.getAttribute("srcset"),
              i.sizes || i.getAttribute("sizes"),
              !0,
              t
            );
          }
        }
      }
    },
    F = {},
    _ = (function() {
      function t() {
        for (
          var e, a, i = arguments.length, s = new Array(i), r = 0;
          r < i;
          r++
        )
          s[r] = arguments[r];
        if (
          (
            1 === s.length &&
            s[0].constructor &&
            "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
              ? (a = s[0])
              : ((e = s[0]), (a = s[1])),
            a || (a = {}),
            (a = S({}, a)),
            e && !a.el && (a.el = e),
            a.el && m(a.el).length > 1
          )
        ) {
          var n = [];
          return m(a.el).each(function(e) {
            var i = S({}, a, { el: e });
            n.push(new t(i));
          }), n;
        }
        var l = this;
        (l.__swiper__ = !0), (l.support = k()), (l.device = $({
          userAgent: a.userAgent
        })), (l.browser = L()), (l.eventsListeners = {}), (l.eventsAnyListeners = []), void 0 ===
          l.modules && (l.modules = {}), Object.keys(
          l.modules
        ).forEach(function(e) {
          var t = l.modules[e];
          if (t.params) {
            var i = Object.keys(t.params)[0],
              s = t.params[i];
            if ("object" != typeof s || null === s) return;
            if (
              (
                ["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
                  !0 === a[i] &&
                  (a[i] = { auto: !0 }),
                !(i in a) || !("enabled" in s)
              )
            )
              return;
            !0 === a[i] && (a[i] = { enabled: !0 }), "object" != typeof a[i] ||
              "enabled" in a[i] ||
              (a[i].enabled = !0), a[i] || (a[i] = { enabled: !1 });
          }
        });
        var o,
          d,
          p = S({}, W);
        return l.useParams(p), (l.params = S(
          {},
          p,
          F,
          a
        )), (l.originalParams = S({}, l.params)), (l.passedParams = S(
          {},
          a
        )), l.params &&
          l.params.on &&
          Object.keys(l.params.on).forEach(function(e) {
            l.on(e, l.params.on[e]);
          }), l.params &&
          l.params.onAny &&
          l.onAny(l.params.onAny), (l.$ = m), S(l, {
          enabled: l.params.enabled,
          el: e,
          classNames: [],
          slides: m(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: function() {
            return "horizontal" === l.params.direction;
          },
          isVertical: function() {
            return "vertical" === l.params.direction;
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: l.params.allowSlideNext,
          allowSlidePrev: l.params.allowSlidePrev,
          touchEvents: (
            (o = ["touchstart", "touchmove", "touchend", "touchcancel"]),
            (d = ["mousedown", "mousemove", "mouseup"]),
            l.support.pointerEvents &&
              (d = ["pointerdown", "pointermove", "pointerup"]),
            (l.touchEventsTouch = {
              start: o[0],
              move: o[1],
              end: o[2],
              cancel: o[3]
            }),
            (l.touchEventsDesktop = { start: d[0], move: d[1], end: d[2] }),
            l.support.touch || !l.params.simulateTouch
              ? l.touchEventsTouch
              : l.touchEventsDesktop
          ),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            formElements:
              "input, select, option, textarea, button, video, label",
            lastClickTime: x(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: l.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0
        }), l.useModules(), l.emit("_swiper"), l.params.init && l.init(), l;
      }
      var a,
        i,
        s,
        n = t.prototype;
      return (n.enable = function() {
        var e = this;
        e.enabled ||
          (
            (e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable")
          );
      }), (n.disable = function() {
        var e = this;
        e.enabled &&
          (
            (e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable")
          );
      }), (n.setProgress = function(e, t) {
        var a = this;
        e = Math.min(Math.max(e, 0), 1);
        var i = a.minTranslate(),
          s = (a.maxTranslate() - i) * e + i;
        a.translateTo(
          s,
          void 0 === t ? 0 : t
        ), a.updateActiveIndex(), a.updateSlidesClasses();
      }), (n.emitContainerClasses = function() {
        var e = this;
        if (e.params._emitClasses && e.el) {
          var t = e.el.className.split(" ").filter(function(t) {
            return (
              0 === t.indexOf("swiper-container") ||
              0 === t.indexOf(e.params.containerModifierClass)
            );
          });
          e.emit("_containerClasses", t.join(" "));
        }
      }), (n.getSlideClasses = function(e) {
        var t = this;
        return e.className
          .split(" ")
          .filter(function(e) {
            return (
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
            );
          })
          .join(" ");
      }), (n.emitSlidesClasses = function() {
        var e = this;
        if (e.params._emitClasses && e.el) {
          var t = [];
          e.slides.each(function(a) {
            var i = e.getSlideClasses(a);
            t.push({ slideEl: a, classNames: i }), e.emit("_slideClass", a, i);
          }), e.emit("_slideClasses", t);
        }
      }), (n.slidesPerViewDynamic = function() {
        var e = this,
          t = e.params,
          a = e.slides,
          i = e.slidesGrid,
          s = e.size,
          r = e.activeIndex,
          n = 1;
        if (t.centeredSlides) {
          for (var l, o = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1)
            a[d] &&
              !l &&
              ((n += 1), (o += a[d].swiperSlideSize) > s && (l = !0));
          for (var p = r - 1; p >= 0; p -= 1)
            a[p] &&
              !l &&
              ((n += 1), (o += a[p].swiperSlideSize) > s && (l = !0));
        } else
          for (var u = r + 1; u < a.length; u += 1) i[u] - i[r] < s && (n += 1);
        return n;
      }), (n.update = function() {
        var e = this;
        if (e && !e.destroyed) {
          var t = e.snapGrid,
            a = e.params;
          a.breakpoints &&
            e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e
            .params.freeMode
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : (("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)) ||
              i(), a.watchOverflow &&
            t !== e.snapGrid &&
            e.checkOverflow(), e.emit("update");
        }
        function i() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
        }
      }), (n.changeDirection = function(e, t) {
        void 0 === t && (t = !0);
        var a = this,
          i = a.params.direction;
        return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e ===
          i ||
          ("horizontal" !== e && "vertical" !== e) ||
          (
            a.$el
              .removeClass("" + a.params.containerModifierClass + i)
              .addClass("" + a.params.containerModifierClass + e),
            a.emitContainerClasses(),
            (a.params.direction = e),
            a.slides.each(function(t) {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            a.emit("changeDirection"),
            t && a.update()
          ), a;
      }), (n.mount = function(e) {
        var t = this;
        if (t.mounted) return !0;
        var a = m(e || t.params.el);
        if (!(e = a[0])) return !1;
        e.swiper = t;
        var i = (function() {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            var i = m(e.shadowRoot.querySelector("." + t.params.wrapperClass));
            return (i.children = function(e) {
              return a.children(e);
            }), i;
          }
          return a.children("." + t.params.wrapperClass);
        })();
        if (0 === i.length && t.params.createElements) {
          var s = r().createElement("div");
          (i = m(s)), (s.className = t.params.wrapperClass), a.append(
            s
          ), a.children("." + t.params.slideClass).each(function(e) {
            i.append(e);
          });
        }
        return S(t, {
          $el: a,
          el: e,
          $wrapperEl: i,
          wrapperEl: i[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction")),
          wrongRTL: "-webkit-box" === i.css("display")
        }), !0;
      }), (n.init = function(e) {
        var t = this;
        return t.initialized ||
          !1 === t.mount(e) ||
          (
            t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")
          ), t;
      }), (n.destroy = function(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var a,
          i = this,
          s = i.params,
          r = i.$el,
          n = i.$wrapperEl,
          l = i.slides;
        return void 0 === i.params ||
          i.destroyed ||
          (
            i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            t &&
              (
                i.removeClasses(),
                r.removeAttr("style"),
                n.removeAttr("style"),
                l &&
                  l.length &&
                  l
                    .removeClass(
                      [
                        s.slideVisibleClass,
                        s.slideActiveClass,
                        s.slideNextClass,
                        s.slidePrevClass
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")
              ),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach(function(e) {
              i.off(e);
            }),
            !1 !== e &&
              (
                (i.$el[0].swiper = null),
                (a = i),
                Object.keys(a).forEach(function(e) {
                  try {
                    a[e] = null;
                  } catch (e) {}
                  try {
                    delete a[e];
                  } catch (e) {}
                })
              ),
            (i.destroyed = !0)
          ), null;
      }), (t.extendDefaults = function(e) {
        S(F, e);
      }), (t.installModule = function(e) {
        t.prototype.modules || (t.prototype.modules = {});
        var a = e.name || Object.keys(t.prototype.modules).length + "_" + x();
        t.prototype.modules[a] = e;
      }), (t.use = function(e) {
        return Array.isArray(e)
          ? (
              e.forEach(function(e) {
                return t.installModule(e);
              }),
              t
            )
          : (t.installModule(e), t);
      }), (a = t), (s = [
        {
          key: "extendedDefaults",
          get: function() {
            return F;
          }
        },
        {
          key: "defaults",
          get: function() {
            return W;
          }
        }
      ]), (i = null) && e(a.prototype, i), s && e(a, s), t;
    })();
  Object.keys(V).forEach(function(e) {
    Object.keys(V[e]).forEach(function(t) {
      _.prototype[t] = V[e][t];
    });
  }), _.use([I, A]);
  var q = {
      update: function(e) {
        var t = this,
          a = t.params,
          i = a.slidesPerView,
          s = a.slidesPerGroup,
          r = a.centeredSlides,
          n = t.params.virtual,
          l = n.addSlidesBefore,
          o = n.addSlidesAfter,
          d = t.virtual,
          p = d.from,
          u = d.to,
          c = d.slides,
          h = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
        t.updateActiveIndex();
        var m,
          g,
          b,
          y = t.activeIndex || 0;
        (m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"), r
          ? ((g = Math.floor(i / 2) + s + o), (b = Math.floor(i / 2) + s + l))
          : ((g = i + (s - 1) + o), (b = s + l));
        var w = Math.max((y || 0) - b, 0),
          E = Math.min((y || 0) + g, c.length - 1),
          x = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);
        function T() {
          t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy &&
            t.params.lazy.enabled &&
            t.lazy.load();
        }
        if (
          (
            S(t.virtual, {
              from: w,
              to: E,
              offset: x,
              slidesGrid: t.slidesGrid
            }),
            p === w && u === E && !e
          )
        )
          return t.slidesGrid !== h &&
            x !== f &&
            t.slides.css(m, x + "px"), void t.updateProgress();
        if (t.params.virtual.renderExternal)
          return t.params.virtual.renderExternal.call(t, {
            offset: x,
            from: w,
            to: E,
            slides: (function() {
              for (var e = [], t = w; t <= E; t += 1) e.push(c[t]);
              return e;
            })()
          }), void (t.params.virtual.renderExternalUpdate && T());
        var C = [],
          M = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
        else
          for (var z = p; z <= u; z += 1)
            (z < w || z > E) &&
              t.$wrapperEl
                .find(
                  "." +
                    t.params.slideClass +
                    '[data-swiper-slide-index="' +
                    z +
                    '"]'
                )
                .remove();
        for (var P = 0; P < c.length; P += 1)
          P >= w &&
            P <= E &&
            (void 0 === u || e
              ? M.push(P)
              : (P > u && M.push(P), P < p && C.push(P)));
        M.forEach(function(e) {
          t.$wrapperEl.append(v(c[e], e));
        }), C.sort(function(e, t) {
          return t - e;
        }).forEach(function(e) {
          t.$wrapperEl.prepend(v(c[e], e));
        }), t.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T();
      },
      renderSlide: function(e, t) {
        var a = this,
          i = a.params.virtual;
        if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
        var s = i.renderSlide
          ? m(i.renderSlide.call(a, e, t))
          : m(
              '<div class="' +
                a.params.slideClass +
                '" data-swiper-slide-index="' +
                t +
                '">' +
                e +
                "</div>"
            );
        return s.attr("data-swiper-slide-index") ||
          s.attr("data-swiper-slide-index", t), i.cache &&
          (a.virtual.cache[t] = s), s;
      },
      appendSlide: function(e) {
        var t = this;
        if ("object" == typeof e && "length" in e)
          for (var a = 0; a < e.length; a += 1)
            e[a] && t.virtual.slides.push(e[a]);
        else t.virtual.slides.push(e);
        t.virtual.update(!0);
      },
      prependSlide: function(e) {
        var t = this,
          a = t.activeIndex,
          i = a + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (var r = 0; r < e.length; r += 1)
            e[r] && t.virtual.slides.unshift(e[r]);
          (i = a + e.length), (s = e.length);
        } else t.virtual.slides.unshift(e);
        if (t.params.virtual.cache) {
          var n = t.virtual.cache,
            l = {};
          Object.keys(n).forEach(function(e) {
            var t = n[e],
              a = t.attr("data-swiper-slide-index");
            a &&
              t.attr(
                "data-swiper-slide-index",
                parseInt(a, 10) + 1
              ), (l[parseInt(e, 10) + s] = t);
          }), (t.virtual.cache = l);
        }
        t.virtual.update(!0), t.slideTo(i, 0);
      },
      removeSlide: function(e) {
        var t = this;
        if (null != e) {
          var a = t.activeIndex;
          if (Array.isArray(e))
            for (var i = e.length - 1; i >= 0; i -= 1)
              t.virtual.slides.splice(e[i], 1), t.params.virtual.cache &&
                delete t.virtual.cache[e[i]], e[i] < a &&
                (a -= 1), (a = Math.max(a, 0));
          else
            t.virtual.slides.splice(e, 1), t.params.virtual.cache &&
              delete t.virtual.cache[e], e < a && (a -= 1), (a = Math.max(
              a,
              0
            ));
          t.virtual.update(!0), t.slideTo(a, 0);
        }
      },
      removeAllSlides: function() {
        var e = this;
        (e.virtual.slides = []), e.params.virtual.cache &&
          (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
      }
    },
    j = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create: function() {
        M(this, {
          virtual: t({}, q, { slides: this.params.virtual.slides, cache: {} })
        });
      },
      on: {
        beforeInit: function(e) {
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = { watchSlidesProgress: !0 };
            S(e.params, t), S(e.originalParams, t), e.params.initialSlide ||
              e.virtual.update();
          }
        },
        setTranslate: function(e) {
          e.params.virtual.enabled && e.virtual.update();
        }
      }
    },
    U = {
      handle: function(e) {
        var t = this;
        if (t.enabled) {
          var a = l(),
            i = r(),
            s = t.rtlTranslate,
            n = e;
          n.originalEvent && (n = n.originalEvent);
          var o = n.keyCode || n.charCode,
            d = t.params.keyboard.pageUpDown,
            p = d && 33 === o,
            u = d && 34 === o,
            c = 37 === o,
            h = 39 === o,
            v = 38 === o,
            f = 40 === o;
          if (
            !t.allowSlideNext &&
            ((t.isHorizontal() && h) || (t.isVertical() && f) || u)
          )
            return !1;
          if (
            !t.allowSlidePrev &&
            ((t.isHorizontal() && c) || (t.isVertical() && v) || p)
          )
            return !1;
          if (
            !(
              n.shiftKey ||
              n.altKey ||
              n.ctrlKey ||
              n.metaKey ||
              (i.activeElement &&
                i.activeElement.nodeName &&
                ("input" === i.activeElement.nodeName.toLowerCase() ||
                  "textarea" === i.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (p || u || c || h || v || f)
            ) {
              var m = !1;
              if (
                t.$el.parents("." + t.params.slideClass).length > 0 &&
                0 === t.$el.parents("." + t.params.slideActiveClass).length
              )
                return;
              var g = t.$el,
                b = g[0].clientWidth,
                y = g[0].clientHeight,
                w = a.innerWidth,
                E = a.innerHeight,
                x = t.$el.offset();
              s && (x.left -= t.$el[0].scrollLeft);
              for (
                var T = [
                    [x.left, x.top],
                    [x.left + b, x.top],
                    [x.left, x.top + y],
                    [x.left + b, x.top + y]
                  ],
                  C = 0;
                C < T.length;
                C += 1
              ) {
                var S = T[C];
                if (S[0] >= 0 && S[0] <= w && S[1] >= 0 && S[1] <= E) {
                  if (0 === S[0] && 0 === S[1]) continue;
                  m = !0;
                }
              }
              if (!m) return;
            }
            t.isHorizontal()
              ? (
                  (p || u || c || h) &&
                    (n.preventDefault
                      ? n.preventDefault()
                      : (n.returnValue = !1)),
                  (((u || h) && !s) || ((p || c) && s)) && t.slideNext(),
                  (((p || c) && !s) || ((u || h) && s)) && t.slidePrev()
                )
              : (
                  (p || u || v || f) &&
                    (n.preventDefault
                      ? n.preventDefault()
                      : (n.returnValue = !1)),
                  (u || f) && t.slideNext(),
                  (p || v) && t.slidePrev()
                ), t.emit("keyPress", o);
          }
        }
      },
      enable: function() {
        var e = this,
          t = r();
        e.keyboard.enabled ||
          (m(t).on("keydown", e.keyboard.handle), (e.keyboard.enabled = !0));
      },
      disable: function() {
        var e = this,
          t = r();
        e.keyboard.enabled &&
          (m(t).off("keydown", e.keyboard.handle), (e.keyboard.enabled = !1));
      }
    },
    K = {
      name: "keyboard",
      params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
      create: function() {
        M(this, { keyboard: t({ enabled: !1 }, U) });
      },
      on: {
        init: function(e) {
          e.params.keyboard.enabled && e.keyboard.enable();
        },
        destroy: function(e) {
          e.keyboard.enabled && e.keyboard.disable();
        }
      }
    };
  var Z = {
      lastScrollTime: x(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function() {
        return l().navigator.userAgent.indexOf("firefox") > -1
          ? "DOMMouseScroll"
          : (function() {
              var e = r(),
                t = "onwheel",
                a = t in e;
              if (!a) {
                var i = e.createElement("div");
                i.setAttribute(t, "return;"), (a =
                  "function" == typeof i.onwheel);
              }
              return !a &&
                e.implementation &&
                e.implementation.hasFeature &&
                !0 !== e.implementation.hasFeature("", "") &&
                (a = e.implementation.hasFeature("Events.wheel", "3.0")), a;
            })()
            ? "wheel"
            : "mousewheel";
      },
      normalize: function(e) {
        var t = 0,
          a = 0,
          i = 0,
          s = 0;
        return "detail" in e && (a = e.detail), "wheelDelta" in e &&
          (a = -e.wheelDelta / 120), "wheelDeltaY" in e &&
          (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e &&
          (t = -e.wheelDeltaX / 120), "axis" in e &&
          e.axis === e.HORIZONTAL_AXIS &&
          ((t = a), (a = 0)), (i = 10 * t), (s = 10 * a), "deltaY" in e &&
          (s = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey &&
          !i &&
          ((i = s), (s = 0)), (i || s) &&
          e.deltaMode &&
          (1 === e.deltaMode
            ? ((i *= 40), (s *= 40))
            : ((i *= 800), (s *= 800))), i && !t && (t = i < 1 ? -1 : 1), s &&
          !a &&
          (a = s < 1 ? -1 : 1), { spinX: t, spinY: a, pixelX: i, pixelY: s };
      },
      handleMouseEnter: function() {
        this.enabled && (this.mouseEntered = !0);
      },
      handleMouseLeave: function() {
        this.enabled && (this.mouseEntered = !1);
      },
      handle: function(e) {
        var t = e,
          a = this;
        if (a.enabled) {
          var i = a.params.mousewheel;
          a.params.cssMode && t.preventDefault();
          var s = a.$el;
          if (
            (
              "container" !== a.params.mousewheel.eventsTarget &&
                (s = m(a.params.mousewheel.eventsTarget)),
              !a.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges
            )
          )
            return !0;
          t.originalEvent && (t = t.originalEvent);
          var r = 0,
            n = a.rtlTranslate ? -1 : 1,
            l = Z.normalize(t);
          if (i.forceToAxis)
            if (a.isHorizontal()) {
              if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
              r = -l.pixelX * n;
            } else {
              if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
              r = -l.pixelY;
            }
          else
            r =
              Math.abs(l.pixelX) > Math.abs(l.pixelY)
                ? -l.pixelX * n
                : -l.pixelY;
          if (0 === r) return !0;
          i.invert && (r = -r);
          var o = a.getTranslate() + r * i.sensitivity;
          if (
            (
              o >= a.minTranslate() && (o = a.minTranslate()),
              o <= a.maxTranslate() && (o = a.maxTranslate()),
              (!!a.params.loop ||
                !(o === a.minTranslate() || o === a.maxTranslate())) &&
                a.params.nested &&
                t.stopPropagation(),
              a.params.freeMode
            )
          ) {
            var d = { time: x(), delta: Math.abs(r), direction: Math.sign(r) },
              p = a.mousewheel.lastEventBeforeSnap,
              u =
                p &&
                d.time < p.time + 500 &&
                d.delta <= p.delta &&
                d.direction === p.direction;
            if (!u) {
              (a.mousewheel.lastEventBeforeSnap = void 0), a.params.loop &&
                a.loopFix();
              var c = a.getTranslate() + r * i.sensitivity,
                h = a.isBeginning,
                v = a.isEnd;
              if (
                (
                  c >= a.minTranslate() && (c = a.minTranslate()),
                  c <= a.maxTranslate() && (c = a.maxTranslate()),
                  a.setTransition(0),
                  a.setTranslate(c),
                  a.updateProgress(),
                  a.updateActiveIndex(),
                  a.updateSlidesClasses(),
                  ((!h && a.isBeginning) || (!v && a.isEnd)) &&
                    a.updateSlidesClasses(),
                  a.params.freeModeSticky
                )
              ) {
                clearTimeout(
                  a.mousewheel.timeout
                ), (a.mousewheel.timeout = void 0);
                var f = a.mousewheel.recentWheelEvents;
                f.length >= 15 && f.shift();
                var g = f.length ? f[f.length - 1] : void 0,
                  b = f[0];
                if (
                  (
                    f.push(d),
                    g && (d.delta > g.delta || d.direction !== g.direction)
                  )
                )
                  f.splice(0);
                else if (
                  f.length >= 15 &&
                  d.time - b.time < 500 &&
                  b.delta - d.delta >= 1 &&
                  d.delta <= 6
                ) {
                  var y = r > 0 ? 0.8 : 0.2;
                  (a.mousewheel.lastEventBeforeSnap = d), f.splice(
                    0
                  ), (a.mousewheel.timeout = E(function() {
                    a.slideToClosest(a.params.speed, !0, void 0, y);
                  }, 0));
                }
                a.mousewheel.timeout ||
                  (a.mousewheel.timeout = E(function() {
                    (a.mousewheel.lastEventBeforeSnap = d), f.splice(0), a.slideToClosest(a.params.speed, !0, void 0, 0.5);
                  }, 500));
              }
              if (
                (
                  u || a.emit("scroll", t),
                  a.params.autoplay &&
                    a.params.autoplayDisableOnInteraction &&
                    a.autoplay.stop(),
                  c === a.minTranslate() || c === a.maxTranslate()
                )
              )
                return !0;
            }
          } else {
            var w = {
                time: x(),
                delta: Math.abs(r),
                direction: Math.sign(r),
                raw: e
              },
              T = a.mousewheel.recentWheelEvents;
            T.length >= 2 && T.shift();
            var C = T.length ? T[T.length - 1] : void 0;
            if (
              (
                T.push(w),
                C
                  ? (w.direction !== C.direction ||
                      w.delta > C.delta ||
                      w.time > C.time + 150) &&
                    a.mousewheel.animateSlider(w)
                  : a.mousewheel.animateSlider(w),
                a.mousewheel.releaseScroll(w)
              )
            )
              return !0;
          }
          return t.preventDefault
            ? t.preventDefault()
            : (t.returnValue = !1), !1;
        }
      },
      animateSlider: function(e) {
        var t = this,
          a = l();
        return (
          !(
            this.params.mousewheel.thresholdDelta &&
            e.delta < this.params.mousewheel.thresholdDelta
          ) &&
          (!(
            this.params.mousewheel.thresholdTime &&
            x() - t.mousewheel.lastScrollTime <
              this.params.mousewheel.thresholdTime
          ) &&
            ((e.delta >= 6 && x() - t.mousewheel.lastScrollTime < 60) ||
              (
                e.direction < 0
                  ? (t.isEnd && !t.params.loop) ||
                    t.animating ||
                    (t.slideNext(), t.emit("scroll", e.raw))
                  : (t.isBeginning && !t.params.loop) ||
                    t.animating ||
                    (t.slidePrev(), t.emit("scroll", e.raw)),
                (t.mousewheel.lastScrollTime = new a.Date().getTime()),
                !1
              )))
        );
      },
      releaseScroll: function(e) {
        var t = this,
          a = t.params.mousewheel;
        if (e.direction < 0) {
          if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0;
        } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges)
          return !0;
        return !1;
      },
      enable: function() {
        var e = this,
          t = Z.event();
        if (e.params.cssMode)
          return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (e.mousewheel.enabled) return !1;
        var a = e.$el;
        return "container" !== e.params.mousewheel.eventsTarget &&
          (a = m(e.params.mousewheel.eventsTarget)), a.on(
          "mouseenter",
          e.mousewheel.handleMouseEnter
        ), a.on("mouseleave", e.mousewheel.handleMouseLeave), a.on(
          t,
          e.mousewheel.handle
        ), (e.mousewheel.enabled = !0), !0;
      },
      disable: function() {
        var e = this,
          t = Z.event();
        if (e.params.cssMode)
          return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (!e.mousewheel.enabled) return !1;
        var a = e.$el;
        return "container" !== e.params.mousewheel.eventsTarget &&
          (a = m(e.params.mousewheel.eventsTarget)), a.off(
          t,
          e.mousewheel.handle
        ), (e.mousewheel.enabled = !1), !0;
      }
    },
    J = {
      toggleEl: function(e, t) {
        e[t ? "addClass" : "removeClass"](
          this.params.navigation.disabledClass
        ), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t);
      },
      update: function() {
        var e = this,
          t = e.params.navigation,
          a = e.navigation.toggleEl;
        if (!e.params.loop) {
          var i = e.navigation,
            s = i.$nextEl,
            r = i.$prevEl;
          r &&
            r.length > 0 &&
            (
              e.isBeginning ? a(r, !0) : a(r, !1),
              e.params.watchOverflow &&
                e.enabled &&
                r[e.isLocked ? "addClass" : "removeClass"](t.lockClass)
            ), s &&
            s.length > 0 &&
            (
              e.isEnd ? a(s, !0) : a(s, !1),
              e.params.watchOverflow &&
                e.enabled &&
                s[e.isLocked ? "addClass" : "removeClass"](t.lockClass)
            );
        }
      },
      onPrevClick: function(e) {
        var t = this;
        e.preventDefault(), (t.isBeginning && !t.params.loop) || t.slidePrev();
      },
      onNextClick: function(e) {
        var t = this;
        e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
      },
      init: function() {
        var e,
          t,
          a = this,
          i = a.params.navigation;
        (
          (a.params.navigation = P(
            a.$el,
            a.params.navigation,
            a.params.createElements,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          i.nextEl || i.prevEl
        ) &&
          (
            i.nextEl &&
              (
                (e = m(i.nextEl)),
                a.params.uniqueNavElements &&
                  "string" == typeof i.nextEl &&
                  e.length > 1 &&
                  1 === a.$el.find(i.nextEl).length &&
                  (e = a.$el.find(i.nextEl))
              ),
            i.prevEl &&
              (
                (t = m(i.prevEl)),
                a.params.uniqueNavElements &&
                  "string" == typeof i.prevEl &&
                  t.length > 1 &&
                  1 === a.$el.find(i.prevEl).length &&
                  (t = a.$el.find(i.prevEl))
              ),
            e && e.length > 0 && e.on("click", a.navigation.onNextClick),
            t && t.length > 0 && t.on("click", a.navigation.onPrevClick),
            S(a.navigation, {
              $nextEl: e,
              nextEl: e && e[0],
              $prevEl: t,
              prevEl: t && t[0]
            }),
            a.enabled ||
              (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass))
          );
      },
      destroy: function() {
        var e = this,
          t = e.navigation,
          a = t.$nextEl,
          i = t.$prevEl;
        a &&
          a.length &&
          (
            a.off("click", e.navigation.onNextClick),
            a.removeClass(e.params.navigation.disabledClass)
          ), i &&
          i.length &&
          (
            i.off("click", e.navigation.onPrevClick),
            i.removeClass(e.params.navigation.disabledClass)
          );
      }
    },
    Q = {
      update: function() {
        var e = this,
          t = e.rtl,
          a = e.params.pagination;
        if (
          a.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var i,
            s =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            r = e.pagination.$el,
            n = e.params.loop
              ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
          if (
            (
              e.params.loop
                ? (
                    (i = Math.ceil(
                      (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                    )) >
                      s - 1 - 2 * e.loopedSlides &&
                      (i -= s - 2 * e.loopedSlides),
                    i > n - 1 && (i -= n),
                    i < 0 &&
                      "bullets" !== e.params.paginationType &&
                      (i = n + i)
                  )
                : (i =
                    void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
              "bullets" === a.type &&
                e.pagination.bullets &&
                e.pagination.bullets.length > 0
            )
          ) {
            var l,
              o,
              d,
              p = e.pagination.bullets;
            if (
              (
                a.dynamicBullets &&
                  (
                    (e.pagination.bulletSize = p
                      .eq(0)
                      [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                    r.css(
                      e.isHorizontal() ? "width" : "height",
                      e.pagination.bulletSize * (a.dynamicMainBullets + 4) +
                        "px"
                    ),
                    a.dynamicMainBullets > 1 &&
                      void 0 !== e.previousIndex &&
                      (
                        (e.pagination.dynamicBulletIndex +=
                          i - e.previousIndex),
                        e.pagination.dynamicBulletIndex >
                        a.dynamicMainBullets - 1
                          ? (e.pagination.dynamicBulletIndex =
                              a.dynamicMainBullets - 1)
                          : e.pagination.dynamicBulletIndex < 0 &&
                            (e.pagination.dynamicBulletIndex = 0)
                      ),
                    (l = i - e.pagination.dynamicBulletIndex),
                    (d =
                      ((o =
                        l + (Math.min(p.length, a.dynamicMainBullets) - 1)) +
                        l) /
                      2)
                  ),
                p.removeClass(
                  a.bulletActiveClass +
                    " " +
                    a.bulletActiveClass +
                    "-next " +
                    a.bulletActiveClass +
                    "-next-next " +
                    a.bulletActiveClass +
                    "-prev " +
                    a.bulletActiveClass +
                    "-prev-prev " +
                    a.bulletActiveClass +
                    "-main"
                ),
                r.length > 1
              )
            )
              p.each(function(e) {
                var t = m(e),
                  s = t.index();
                s === i &&
                  t.addClass(
                    a.bulletActiveClass
                  ), a.dynamicBullets && (s >= l && s <= o && t.addClass(a.bulletActiveClass + "-main"), s === l && t.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), s === o && t.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next"));
              });
            else {
              var u = p.eq(i),
                c = u.index();
              if ((u.addClass(a.bulletActiveClass), a.dynamicBullets)) {
                for (var h = p.eq(l), v = p.eq(o), f = l; f <= o; f += 1)
                  p.eq(f).addClass(a.bulletActiveClass + "-main");
                if (e.params.loop)
                  if (c >= p.length - a.dynamicMainBullets) {
                    for (var g = a.dynamicMainBullets; g >= 0; g -= 1)
                      p
                        .eq(p.length - g)
                        .addClass(a.bulletActiveClass + "-main");
                    p
                      .eq(p.length - a.dynamicMainBullets - 1)
                      .addClass(a.bulletActiveClass + "-prev");
                  } else
                    h
                      .prev()
                      .addClass(a.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(
                        a.bulletActiveClass + "-prev-prev"
                      ), v
                      .next()
                      .addClass(a.bulletActiveClass + "-next")
                      .next()
                      .addClass(a.bulletActiveClass + "-next-next");
                else
                  h
                    .prev()
                    .addClass(a.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(
                      a.bulletActiveClass + "-prev-prev"
                    ), v
                    .next()
                    .addClass(a.bulletActiveClass + "-next")
                    .next()
                    .addClass(a.bulletActiveClass + "-next-next");
              }
            }
            if (a.dynamicBullets) {
              var b = Math.min(p.length, a.dynamicMainBullets + 4),
                y =
                  (e.pagination.bulletSize * b - e.pagination.bulletSize) / 2 -
                  d * e.pagination.bulletSize,
                w = t ? "right" : "left";
              p.css(e.isHorizontal() ? w : "top", y + "px");
            }
          }
          if (
            (
              "fraction" === a.type &&
                (
                  r
                    .find(z(a.currentClass))
                    .text(a.formatFractionCurrent(i + 1)),
                  r.find(z(a.totalClass)).text(a.formatFractionTotal(n))
                ),
              "progressbar" === a.type
            )
          ) {
            var E;
            E = a.progressbarOpposite
              ? e.isHorizontal() ? "vertical" : "horizontal"
              : e.isHorizontal() ? "horizontal" : "vertical";
            var x = (i + 1) / n,
              T = 1,
              C = 1;
            "horizontal" === E ? (T = x) : (C = x), r
              .find(z(a.progressbarFillClass))
              .transform(
                "translate3d(0,0,0) scaleX(" + T + ") scaleY(" + C + ")"
              )
              .transition(e.params.speed);
          }
          "custom" === a.type && a.renderCustom
            ? (
                r.html(a.renderCustom(e, i + 1, n)),
                e.emit("paginationRender", r[0])
              )
            : e.emit("paginationUpdate", r[0]), e.params.watchOverflow &&
            e.enabled &&
            r[e.isLocked ? "addClass" : "removeClass"](a.lockClass);
        }
      },
      render: function() {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el,
            s = "";
          if ("bullets" === t.type) {
            var r = e.params.loop
              ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode && !e.params.loop && r > a && (r = a);
            for (var n = 0; n < r; n += 1)
              t.renderBullet
                ? (s += t.renderBullet.call(e, n, t.bulletClass))
                : (s +=
                    "<" +
                    t.bulletElement +
                    ' class="' +
                    t.bulletClass +
                    '"></' +
                    t.bulletElement +
                    ">");
            i.html(s), (e.pagination.bullets = i.find(z(t.bulletClass)));
          }
          "fraction" === t.type &&
            (
              (s = t.renderFraction
                ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                : '<span class="' +
                  t.currentClass +
                  '"></span> / <span class="' +
                  t.totalClass +
                  '"></span>'),
              i.html(s)
            ), "progressbar" === t.type &&
            (
              (s = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : '<span class="' + t.progressbarFillClass + '"></span>'),
              i.html(s)
            ), "custom" !== t.type &&
            e.emit("paginationRender", e.pagination.$el[0]);
        }
      },
      init: function() {
        var e = this;
        e.params.pagination = P(
          e.$el,
          e.params.pagination,
          e.params.createElements,
          { el: "swiper-pagination" }
        );
        var t = e.params.pagination;
        if (t.el) {
          var a = m(t.el);
          0 !== a.length &&
            (
              e.params.uniqueNavElements &&
                "string" == typeof t.el &&
                a.length > 1 &&
                (a = e.$el.find(t.el)),
              "bullets" === t.type &&
                t.clickable &&
                a.addClass(t.clickableClass),
              a.addClass(t.modifierClass + t.type),
              "bullets" === t.type &&
                t.dynamicBullets &&
                (
                  a.addClass("" + t.modifierClass + t.type + "-dynamic"),
                  (e.pagination.dynamicBulletIndex = 0),
                  t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)
                ),
              "progressbar" === t.type &&
                t.progressbarOpposite &&
                a.addClass(t.progressbarOppositeClass),
              t.clickable &&
                a.on("click", z(t.bulletClass), function(t) {
                  t.preventDefault();
                  var a = m(this).index() * e.params.slidesPerGroup;
                  e.params.loop && (a += e.loopedSlides), e.slideTo(a);
                }),
              S(e.pagination, { $el: a, el: a[0] }),
              e.enabled || a.addClass(t.lockClass)
            );
        }
      },
      destroy: function() {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a = e.pagination.$el;
          a.removeClass(t.hiddenClass), a.removeClass(
            t.modifierClass + t.type
          ), e.pagination.bullets &&
            e.pagination.bullets.removeClass(
              t.bulletActiveClass
            ), t.clickable && a.off("click", z(t.bulletClass));
        }
      }
    },
    ee = {
      setTranslate: function() {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = e.rtlTranslate,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            l = t.$el,
            o = e.params.scrollbar,
            d = s,
            p = (r - s) * i;
          a
            ? (p = -p) > 0 ? ((d = s - p), (p = 0)) : -p + s > r && (d = r + p)
            : p < 0
              ? ((d = s + p), (p = 0))
              : p + s > r && (d = r - p), e.isHorizontal()
            ? (
                n.transform("translate3d(" + p + "px, 0, 0)"),
                (n[0].style.width = d + "px")
              )
            : (
                n.transform("translate3d(0px, " + p + "px, 0)"),
                (n[0].style.height = d + "px")
              ), o.hide &&
            (
              clearTimeout(e.scrollbar.timeout),
              (l[0].style.opacity = 1),
              (e.scrollbar.timeout = setTimeout(function() {
                (l[0].style.opacity = 0), l.transition(400);
              }, 1e3))
            );
        }
      },
      setTransition: function(e) {
        var t = this;
        t.params.scrollbar.el &&
          t.scrollbar.el &&
          t.scrollbar.$dragEl.transition(e);
      },
      updateSize: function() {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el;
          (a[0].style.width = ""), (a[0].style.height = "");
          var s,
            r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            l = n * (r / e.size);
          (s =
            "auto" === e.params.scrollbar.dragSize
              ? r * n
              : parseInt(e.params.scrollbar.dragSize, 10)), e.isHorizontal()
            ? (a[0].style.width = s + "px")
            : (a[0].style.height = s + "px"), (i[0].style.display =
            n >= 1 ? "none" : ""), e.params.scrollbar.hide &&
            (i[0].style.opacity = 0), S(t, {
            trackSize: r,
            divider: n,
            moveDivider: l,
            dragSize: s
          }), e.params.watchOverflow &&
            e.enabled &&
            t.$el[e.isLocked ? "addClass" : "removeClass"](
              e.params.scrollbar.lockClass
            );
        }
      },
      getPointerPosition: function(e) {
        return this.isHorizontal()
          ? "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
          : "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientY
            : e.clientY;
      },
      setDragPosition: function(e) {
        var t,
          a = this,
          i = a.scrollbar,
          s = a.rtlTranslate,
          r = i.$el,
          n = i.dragSize,
          l = i.trackSize,
          o = i.dragStartPos;
        (t =
          (i.getPointerPosition(e) -
            r.offset()[a.isHorizontal() ? "left" : "top"] -
            (null !== o ? o : n / 2)) /
          (l - n)), (t = Math.max(Math.min(t, 1), 0)), s && (t = 1 - t);
        var d = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
        a.updateProgress(d), a.setTranslate(
          d
        ), a.updateActiveIndex(), a.updateSlidesClasses();
      },
      onDragStart: function(e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;
        (t.scrollbar.isTouched = !0), (t.scrollbar.dragStartPos =
          e.target === n[0] || e.target === n
            ? i.getPointerPosition(e) -
              e.target.getBoundingClientRect()[
                t.isHorizontal() ? "left" : "top"
              ]
            : null), e.preventDefault(), e.stopPropagation(), s.transition(
          100
        ), n.transition(100), i.setDragPosition(e), clearTimeout(
          t.scrollbar.dragTimeout
        ), r.transition(0), a.hide && r.css("opacity", 1), t.params.cssMode &&
          t.$wrapperEl.css("scroll-snap-type", "none"), t.emit(
          "scrollbarDragStart",
          e
        );
      },
      onDragMove: function(e) {
        var t = this,
          a = t.scrollbar,
          i = t.$wrapperEl,
          s = a.$el,
          r = a.$dragEl;
        t.scrollbar.isTouched &&
          (
            e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            a.setDragPosition(e),
            i.transition(0),
            s.transition(0),
            r.transition(0),
            t.emit("scrollbarDragMove", e)
          );
      },
      onDragEnd: function(e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el;
        t.scrollbar.isTouched &&
          (
            (t.scrollbar.isTouched = !1),
            t.params.cssMode &&
              (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")),
            a.hide &&
              (
                clearTimeout(t.scrollbar.dragTimeout),
                (t.scrollbar.dragTimeout = E(function() {
                  r.css("opacity", 0), r.transition(400);
                }, 1e3))
              ),
            t.emit("scrollbarDragEnd", e),
            a.snapOnRelease && t.slideToClosest()
          );
      },
      enableDraggable: function() {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = r(),
            a = e.scrollbar,
            i = e.touchEventsTouch,
            s = e.touchEventsDesktop,
            n = e.params,
            l = e.support,
            o = a.$el[0],
            d = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            p = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          o &&
            (l.touch
              ? (
                  o.addEventListener(i.start, e.scrollbar.onDragStart, d),
                  o.addEventListener(i.move, e.scrollbar.onDragMove, d),
                  o.addEventListener(i.end, e.scrollbar.onDragEnd, p)
                )
              : (
                  o.addEventListener(s.start, e.scrollbar.onDragStart, d),
                  t.addEventListener(s.move, e.scrollbar.onDragMove, d),
                  t.addEventListener(s.end, e.scrollbar.onDragEnd, p)
                ));
        }
      },
      disableDraggable: function() {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = r(),
            a = e.scrollbar,
            i = e.touchEventsTouch,
            s = e.touchEventsDesktop,
            n = e.params,
            l = e.support,
            o = a.$el[0],
            d = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            p = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          o &&
            (l.touch
              ? (
                  o.removeEventListener(i.start, e.scrollbar.onDragStart, d),
                  o.removeEventListener(i.move, e.scrollbar.onDragMove, d),
                  o.removeEventListener(i.end, e.scrollbar.onDragEnd, p)
                )
              : (
                  o.removeEventListener(s.start, e.scrollbar.onDragStart, d),
                  t.removeEventListener(s.move, e.scrollbar.onDragMove, d),
                  t.removeEventListener(s.end, e.scrollbar.onDragEnd, p)
                ));
        }
      },
      init: function() {
        var e = this,
          t = e.scrollbar,
          a = e.$el;
        e.params.scrollbar = P(a, e.params.scrollbar, e.params.createElements, {
          el: "swiper-scrollbar"
        });
        var i = e.params.scrollbar;
        if (i.el) {
          var s = m(i.el);
          e.params.uniqueNavElements &&
            "string" == typeof i.el &&
            s.length > 1 &&
            1 === a.find(i.el).length &&
            (s = a.find(i.el));
          var r = s.find("." + e.params.scrollbar.dragClass);
          0 === r.length &&
            (
              (r = m(
                '<div class="' + e.params.scrollbar.dragClass + '"></div>'
              )),
              s.append(r)
            ), S(t, {
            $el: s,
            el: s[0],
            $dragEl: r,
            dragEl: r[0]
          }), i.draggable && t.enableDraggable(), s &&
            s[e.enabled ? "removeClass" : "addClass"](
              e.params.scrollbar.lockClass
            );
        }
      },
      destroy: function() {
        this.scrollbar.disableDraggable();
      }
    },
    te = {
      setTransform: function(e, t) {
        var a = this.rtl,
          i = m(e),
          s = a ? -1 : 1,
          r = i.attr("data-swiper-parallax") || "0",
          n = i.attr("data-swiper-parallax-x"),
          l = i.attr("data-swiper-parallax-y"),
          o = i.attr("data-swiper-parallax-scale"),
          d = i.attr("data-swiper-parallax-opacity");
        if (
          (
            n || l
              ? ((n = n || "0"), (l = l || "0"))
              : this.isHorizontal()
                ? ((n = r), (l = "0"))
                : ((l = r), (n = "0")),
            (n =
              n.indexOf("%") >= 0
                ? parseInt(n, 10) * t * s + "%"
                : n * t * s + "px"),
            (l =
              l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px"),
            null != d
          )
        ) {
          var p = d - (d - 1) * (1 - Math.abs(t));
          i[0].style.opacity = p;
        }
        if (null == o) i.transform("translate3d(" + n + ", " + l + ", 0px)");
        else {
          var u = o - (o - 1) * (1 - Math.abs(t));
          i.transform(
            "translate3d(" + n + ", " + l + ", 0px) scale(" + u + ")"
          );
        }
      },
      setTranslate: function() {
        var e = this,
          t = e.$el,
          a = e.slides,
          i = e.progress,
          s = e.snapGrid;
        t
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function(t) {
            e.parallax.setTransform(t, i);
          }), a.each(function(t, a) {
          var r = t.progress;
          e.params.slidesPerGroup > 1 &&
            "auto" !== e.params.slidesPerView &&
            (r +=
              Math.ceil(a / 2) -
              i *
                (s.length -
                  1)), (r = Math.min(Math.max(r, -1), 1)), m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t) {
            e.parallax.setTransform(t, r);
          });
        });
      },
      setTransition: function(e) {
        void 0 === e && (e = this.params.speed);
        this.$el
          .find(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function(t) {
            var a = m(t),
              i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
            0 === e && (i = 0), a.transition(i);
          });
      }
    },
    ae = {
      getDistanceBetweenTouches: function(e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
      },
      onGestureStart: function(e) {
        var t = this,
          a = t.support,
          i = t.params.zoom,
          s = t.zoom,
          r = s.gesture;
        if (
          ((s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1), !a.gestures)
        ) {
          if (
            "touchstart" !== e.type ||
            ("touchstart" === e.type && e.targetTouches.length < 2)
          )
            return;
          (s.fakeGestureTouched = !0), (r.scaleStart = ae.getDistanceBetweenTouches(
            e
          ));
        }
        (r.$slideEl && r.$slideEl.length) ||
        (
          (r.$slideEl = m(e.target).closest("." + t.params.slideClass)),
          0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)),
          (r.$imageEl = r.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass)),
          (r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
          0 !== r.$imageWrapEl.length
        )
          ? (r.$imageEl && r.$imageEl.transition(0), (t.zoom.isScaling = !0))
          : (r.$imageEl = void 0);
      },
      onGestureChange: function(e) {
        var t = this,
          a = t.support,
          i = t.params.zoom,
          s = t.zoom,
          r = s.gesture;
        if (!a.gestures) {
          if (
            "touchmove" !== e.type ||
            ("touchmove" === e.type && e.targetTouches.length < 2)
          )
            return;
          (s.fakeGestureMoved = !0), (r.scaleMove = ae.getDistanceBetweenTouches(
            e
          ));
        }
        r.$imageEl && 0 !== r.$imageEl.length
          ? (
              a.gestures
                ? (s.scale = e.scale * s.currentScale)
                : (s.scale = r.scaleMove / r.scaleStart * s.currentScale),
              s.scale > r.maxRatio &&
                (s.scale =
                  r.maxRatio - 1 + Math.pow(s.scale - r.maxRatio + 1, 0.5)),
              s.scale < i.minRatio &&
                (s.scale =
                  i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, 0.5)),
              r.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")
            )
          : "gesturechange" === e.type && s.onGestureStart(e);
      },
      onGestureEnd: function(e) {
        var t = this,
          a = t.device,
          i = t.support,
          s = t.params.zoom,
          r = t.zoom,
          n = r.gesture;
        if (!i.gestures) {
          if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
          if (
            "touchend" !== e.type ||
            ("touchend" === e.type && e.changedTouches.length < 2 && !a.android)
          )
            return;
          (r.fakeGestureTouched = !1), (r.fakeGestureMoved = !1);
        }
        n.$imageEl &&
          0 !== n.$imageEl.length &&
          (
            (r.scale = Math.max(Math.min(r.scale, n.maxRatio), s.minRatio)),
            n.$imageEl
              .transition(t.params.speed)
              .transform("translate3d(0,0,0) scale(" + r.scale + ")"),
            (r.currentScale = r.scale),
            (r.isScaling = !1),
            1 === r.scale && (n.$slideEl = void 0)
          );
      },
      onTouchStart: function(e) {
        var t = this.device,
          a = this.zoom,
          i = a.gesture,
          s = a.image;
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          (s.isTouched ||
            (
              t.android && e.cancelable && e.preventDefault(),
              (s.isTouched = !0),
              (s.touchesStart.x =
                "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (s.touchesStart.y =
                "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)
            ));
      },
      onTouchMove: function(e) {
        var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;
        if (
          i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((t.allowClick = !1), s.isTouched && i.$slideEl)
        ) {
          s.isMoved ||
            (
              (s.width = i.$imageEl[0].offsetWidth),
              (s.height = i.$imageEl[0].offsetHeight),
              (s.startX = T(i.$imageWrapEl[0], "x") || 0),
              (s.startY = T(i.$imageWrapEl[0], "y") || 0),
              (i.slideWidth = i.$slideEl[0].offsetWidth),
              (i.slideHeight = i.$slideEl[0].offsetHeight),
              i.$imageWrapEl.transition(0),
              t.rtl && ((s.startX = -s.startX), (s.startY = -s.startY))
            );
          var n = s.width * a.scale,
            l = s.height * a.scale;
          if (!(n < i.slideWidth && l < i.slideHeight)) {
            if (
              (
                (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
                (s.maxX = -s.minX),
                (s.minY = Math.min(i.slideHeight / 2 - l / 2, 0)),
                (s.maxY = -s.minY),
                (s.touchesCurrent.x =
                  "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                (s.touchesCurrent.y =
                  "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                !s.isMoved && !a.isScaling
              )
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                  s.touchesCurrent.x < s.touchesStart.x) ||
                  (Math.floor(s.maxX) === Math.floor(s.startX) &&
                    s.touchesCurrent.x > s.touchesStart.x))
              )
                return void (s.isTouched = !1);
              if (
                !t.isHorizontal() &&
                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                  s.touchesCurrent.y < s.touchesStart.y) ||
                  (Math.floor(s.maxY) === Math.floor(s.startY) &&
                    s.touchesCurrent.y > s.touchesStart.y))
              )
                return void (s.isTouched = !1);
            }
            e.cancelable &&
              e.preventDefault(), e.stopPropagation(), (s.isMoved = !0), (s.currentX =
              s.touchesCurrent.x - s.touchesStart.x + s.startX), (s.currentY =
              s.touchesCurrent.y - s.touchesStart.y + s.startY), s.currentX <
              s.minX &&
              (s.currentX =
                s.minX +
                1 -
                Math.pow(s.minX - s.currentX + 1, 0.8)), s.currentX > s.maxX &&
              (s.currentX =
                s.maxX -
                1 +
                Math.pow(s.currentX - s.maxX + 1, 0.8)), s.currentY < s.minY &&
              (s.currentY =
                s.minY +
                1 -
                Math.pow(s.minY - s.currentY + 1, 0.8)), s.currentY > s.maxY &&
              (s.currentY =
                s.maxY -
                1 +
                Math.pow(s.currentY - s.maxY + 1, 0.8)), r.prevPositionX ||
              (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY ||
              (r.prevPositionY = s.touchesCurrent.y), r.prevTime ||
              (r.prevTime = Date.now()), (r.x =
              (s.touchesCurrent.x - r.prevPositionX) /
              (Date.now() - r.prevTime) /
              2), (r.y =
              (s.touchesCurrent.y - r.prevPositionY) /
              (Date.now() - r.prevTime) /
              2), Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 &&
              (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 &&
              (r.y = 0), (r.prevPositionX =
              s.touchesCurrent.x), (r.prevPositionY =
              s.touchesCurrent.y), (r.prevTime = Date.now()), i.$imageWrapEl.transform(
              "translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
            );
          }
        }
      },
      onTouchEnd: function() {
        var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!a.isTouched || !a.isMoved)
            return (a.isTouched = !1), void (a.isMoved = !1);
          (a.isTouched = !1), (a.isMoved = !1);
          var s = 300,
            r = 300,
            n = i.x * s,
            l = a.currentX + n,
            o = i.y * r,
            d = a.currentY + o;
          0 !== i.x && (s = Math.abs((l - a.currentX) / i.x)), 0 !== i.y &&
            (r = Math.abs((d - a.currentY) / i.y));
          var p = Math.max(s, r);
          (a.currentX = l), (a.currentY = d);
          var u = a.width * e.scale,
            c = a.height * e.scale;
          (a.minX = Math.min(
            t.slideWidth / 2 - u / 2,
            0
          )), (a.maxX = -a.minX), (a.minY = Math.min(
            t.slideHeight / 2 - c / 2,
            0
          )), (a.maxY = -a.minY), (a.currentX = Math.max(
            Math.min(a.currentX, a.maxX),
            a.minX
          )), (a.currentY = Math.max(
            Math.min(a.currentY, a.maxY),
            a.minY
          )), t.$imageWrapEl
            .transition(p)
            .transform(
              "translate3d(" + a.currentX + "px, " + a.currentY + "px,0)"
            );
        }
      },
      onTransitionEnd: function() {
        var e = this,
          t = e.zoom,
          a = t.gesture;
        a.$slideEl &&
          e.previousIndex !== e.activeIndex &&
          (
            a.$imageEl && a.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            a.$imageWrapEl && a.$imageWrapEl.transform("translate3d(0,0,0)"),
            (t.scale = 1),
            (t.currentScale = 1),
            (a.$slideEl = void 0),
            (a.$imageEl = void 0),
            (a.$imageWrapEl = void 0)
          );
      },
      toggle: function(e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function(e) {
        var t,
          a,
          i,
          s,
          r,
          n,
          o,
          d,
          p,
          u,
          c,
          h,
          v,
          f,
          m,
          g,
          b = this,
          y = l(),
          w = b.zoom,
          E = b.params.zoom,
          x = w.gesture,
          T = w.image;
        (
          x.$slideEl ||
            (
              b.params.virtual && b.params.virtual.enabled && b.virtual
                ? (x.$slideEl = b.$wrapperEl.children(
                    "." + b.params.slideActiveClass
                  ))
                : (x.$slideEl = b.slides.eq(b.activeIndex)),
              (x.$imageEl = x.$slideEl.find(
                "img, svg, canvas, picture, .swiper-zoom-target"
              )),
              (x.$imageWrapEl = x.$imageEl.parent("." + E.containerClass))
            ),
          x.$imageEl &&
            0 !== x.$imageEl.length &&
            x.$imageWrapEl &&
            0 !== x.$imageWrapEl.length
        ) &&
          (
            x.$slideEl.addClass("" + E.zoomedSlideClass),
            void 0 === T.touchesStart.x && e
              ? (
                  (t =
                    "touchend" === e.type
                      ? e.changedTouches[0].pageX
                      : e.pageX),
                  (a =
                    "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY)
                )
              : ((t = T.touchesStart.x), (a = T.touchesStart.y)),
            (w.scale = x.$imageWrapEl.attr("data-swiper-zoom") || E.maxRatio),
            (w.currentScale =
              x.$imageWrapEl.attr("data-swiper-zoom") || E.maxRatio),
            e
              ? (
                  (m = x.$slideEl[0].offsetWidth),
                  (g = x.$slideEl[0].offsetHeight),
                  (i = x.$slideEl.offset().left + y.scrollX + m / 2 - t),
                  (s = x.$slideEl.offset().top + y.scrollY + g / 2 - a),
                  (o = x.$imageEl[0].offsetWidth),
                  (d = x.$imageEl[0].offsetHeight),
                  (p = o * w.scale),
                  (u = d * w.scale),
                  (v = -(c = Math.min(m / 2 - p / 2, 0))),
                  (f = -(h = Math.min(g / 2 - u / 2, 0))),
                  (r = i * w.scale) < c && (r = c),
                  r > v && (r = v),
                  (n = s * w.scale) < h && (n = h),
                  n > f && (n = f)
                )
              : ((r = 0), (n = 0)),
            x.$imageWrapEl
              .transition(300)
              .transform("translate3d(" + r + "px, " + n + "px,0)"),
            x.$imageEl
              .transition(300)
              .transform("translate3d(0,0,0) scale(" + w.scale + ")")
          );
      },
      out: function() {
        var e = this,
          t = e.zoom,
          a = e.params.zoom,
          i = t.gesture;
        i.$slideEl ||
          (
            e.params.virtual && e.params.virtual.enabled && e.virtual
              ? (i.$slideEl = e.$wrapperEl.children(
                  "." + e.params.slideActiveClass
                ))
              : (i.$slideEl = e.slides.eq(e.activeIndex)),
            (i.$imageEl = i.$slideEl.find(
              "img, svg, canvas, picture, .swiper-zoom-target"
            )),
            (i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass))
          ), i.$imageEl &&
          0 !== i.$imageEl.length &&
          i.$imageWrapEl &&
          0 !== i.$imageWrapEl.length &&
          (
            (t.scale = 1),
            (t.currentScale = 1),
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + a.zoomedSlideClass),
            (i.$slideEl = void 0)
          );
      },
      toggleGestures: function(e) {
        var t = this,
          a = t.zoom,
          i = a.slideSelector,
          s = a.passiveListener;
        t.$wrapperEl[e]("gesturestart", i, a.onGestureStart, s), t.$wrapperEl[
          e
        ]("gesturechange", i, a.onGestureChange, s), t.$wrapperEl[e](
          "gestureend",
          i,
          a.onGestureEnd,
          s
        );
      },
      enableGestures: function() {
        this.zoom.gesturesEnabled ||
          ((this.zoom.gesturesEnabled = !0), this.zoom.toggleGestures("on"));
      },
      disableGestures: function() {
        this.zoom.gesturesEnabled &&
          ((this.zoom.gesturesEnabled = !1), this.zoom.toggleGestures("off"));
      },
      enable: function() {
        var e = this,
          t = e.support,
          a = e.zoom;
        if (!a.enabled) {
          a.enabled = !0;
          var i = !(
              "touchstart" !== e.touchEvents.start ||
              !t.passiveListener ||
              !e.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            s = !t.passiveListener || { passive: !1, capture: !0 },
            r = "." + e.params.slideClass;
          (e.zoom.passiveListener = i), (e.zoom.slideSelector = r), t.gestures
            ? (
                e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i),
                e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i)
              )
            : "touchstart" === e.touchEvents.start &&
              (
                e.$wrapperEl.on(e.touchEvents.start, r, a.onGestureStart, i),
                e.$wrapperEl.on(e.touchEvents.move, r, a.onGestureChange, s),
                e.$wrapperEl.on(e.touchEvents.end, r, a.onGestureEnd, i),
                e.touchEvents.cancel &&
                  e.$wrapperEl.on(e.touchEvents.cancel, r, a.onGestureEnd, i)
              ), e.$wrapperEl.on(
            e.touchEvents.move,
            "." + e.params.zoom.containerClass,
            a.onTouchMove,
            s
          );
        }
      },
      disable: function() {
        var e = this,
          t = e.zoom;
        if (t.enabled) {
          var a = e.support;
          e.zoom.enabled = !1;
          var i = !(
              "touchstart" !== e.touchEvents.start ||
              !a.passiveListener ||
              !e.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            s = !a.passiveListener || { passive: !1, capture: !0 },
            r = "." + e.params.slideClass;
          a.gestures
            ? (
                e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i),
                e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i)
              )
            : "touchstart" === e.touchEvents.start &&
              (
                e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, i),
                e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, s),
                e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, i),
                e.touchEvents.cancel &&
                  e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, i)
              ), e.$wrapperEl.off(
            e.touchEvents.move,
            "." + e.params.zoom.containerClass,
            t.onTouchMove,
            s
          );
        }
      }
    },
    ie = {
      loadInSlide: function(e, t) {
        void 0 === t && (t = !0);
        var a = this,
          i = a.params.lazy;
        if (void 0 !== e && 0 !== a.slides.length) {
          var s =
              a.virtual && a.params.virtual.enabled
                ? a.$wrapperEl.children(
                    "." +
                      a.params.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]'
                  )
                : a.slides.eq(e),
            r = s.find(
              "." +
                i.elementClass +
                ":not(." +
                i.loadedClass +
                "):not(." +
                i.loadingClass +
                ")"
            );
          !s.hasClass(i.elementClass) ||
            s.hasClass(i.loadedClass) ||
            s.hasClass(i.loadingClass) ||
            r.push(s[0]), 0 !== r.length &&
            r.each(function(e) {
              var r = m(e);
              r.addClass(i.loadingClass);
              var n = r.attr("data-background"),
                l = r.attr("data-src"),
                o = r.attr("data-srcset"),
                d = r.attr("data-sizes"),
                p = r.parent("picture");
              a.loadImage(r[0], l || n, o, d, !1, function() {
                if (null != a && a && (!a || a.params) && !a.destroyed) {
                  if (
                    (
                      n
                        ? (
                            r.css("background-image", 'url("' + n + '")'),
                            r.removeAttr("data-background")
                          )
                        : (
                            o &&
                              (
                                r.attr("srcset", o),
                                r.removeAttr("data-srcset")
                              ),
                            d &&
                              (r.attr("sizes", d), r.removeAttr("data-sizes")),
                            p.length &&
                              p.children("source").each(function(e) {
                                var t = m(e);
                                t.attr("data-srcset") &&
                                  (
                                    t.attr("srcset", t.attr("data-srcset")),
                                    t.removeAttr("data-srcset")
                                  );
                              }),
                            l && (r.attr("src", l), r.removeAttr("data-src"))
                          ),
                      r.addClass(i.loadedClass).removeClass(i.loadingClass),
                      s.find("." + i.preloaderClass).remove(),
                      a.params.loop && t
                    )
                  ) {
                    var e = s.attr("data-swiper-slide-index");
                    if (s.hasClass(a.params.slideDuplicateClass)) {
                      var u = a.$wrapperEl.children(
                        '[data-swiper-slide-index="' +
                          e +
                          '"]:not(.' +
                          a.params.slideDuplicateClass +
                          ")"
                      );
                      a.lazy.loadInSlide(u.index(), !1);
                    } else {
                      var c = a.$wrapperEl.children(
                        "." +
                          a.params.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          e +
                          '"]'
                      );
                      a.lazy.loadInSlide(c.index(), !1);
                    }
                  }
                  a.emit("lazyImageReady", s[0], r[0]), a.params.autoHeight &&
                    a.updateAutoHeight();
                }
              }), a.emit("lazyImageLoad", s[0], r[0]);
            });
        }
      },
      load: function() {
        var e = this,
          t = e.$wrapperEl,
          a = e.params,
          i = e.slides,
          s = e.activeIndex,
          r = e.virtual && a.virtual.enabled,
          n = a.lazy,
          l = a.slidesPerView;
        function o(e) {
          if (r) {
            if (
              t.children(
                "." + a.slideClass + '[data-swiper-slide-index="' + e + '"]'
              ).length
            )
              return !0;
          } else if (i[e]) return !0;
          return !1;
        }
        function d(e) {
          return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
        }
        if (
          (
            "auto" === l && (l = 0),
            e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
            e.params.watchSlidesVisibility
          )
        )
          t.children("." + a.slideVisibleClass).each(function(t) {
            var a = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
            e.lazy.loadInSlide(a);
          });
        else if (l > 1)
          for (var p = s; p < s + l; p += 1) o(p) && e.lazy.loadInSlide(p);
        else e.lazy.loadInSlide(s);
        if (n.loadPrevNext)
          if (l > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
            for (
              var u = n.loadPrevNextAmount,
                c = l,
                h = Math.min(s + c + Math.max(u, c), i.length),
                v = Math.max(s - Math.max(c, u), 0),
                f = s + l;
              f < h;
              f += 1
            )
              o(f) && e.lazy.loadInSlide(f);
            for (var g = v; g < s; g += 1) o(g) && e.lazy.loadInSlide(g);
          } else {
            var b = t.children("." + a.slideNextClass);
            b.length > 0 && e.lazy.loadInSlide(d(b));
            var y = t.children("." + a.slidePrevClass);
            y.length > 0 && e.lazy.loadInSlide(d(y));
          }
      },
      checkInViewOnLoad: function() {
        var e = l(),
          t = this;
        if (t && !t.destroyed) {
          var a = t.params.lazy.scrollingElement
              ? m(t.params.lazy.scrollingElement)
              : m(e),
            i = a[0] === e,
            s = i ? e.innerWidth : a[0].offsetWidth,
            r = i ? e.innerHeight : a[0].offsetHeight,
            n = t.$el.offset(),
            o = !1;
          t.rtlTranslate && (n.left -= t.$el[0].scrollLeft);
          for (
            var d = [
                [n.left, n.top],
                [n.left + t.width, n.top],
                [n.left, n.top + t.height],
                [n.left + t.width, n.top + t.height]
              ],
              p = 0;
            p < d.length;
            p += 1
          ) {
            var u = d[p];
            if (u[0] >= 0 && u[0] <= s && u[1] >= 0 && u[1] <= r) {
              if (0 === u[0] && 0 === u[1]) continue;
              o = !0;
            }
          }
          var c = !(
            "touchstart" !== t.touchEvents.start ||
            !t.support.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          o
            ? (t.lazy.load(), a.off("scroll", t.lazy.checkInViewOnLoad, c))
            : t.lazy.scrollHandlerAttached ||
              (
                (t.lazy.scrollHandlerAttached = !0),
                a.on("scroll", t.lazy.checkInViewOnLoad, c)
              );
        }
      }
    },
    se = {
      LinearSpline: function(e, t) {
        var a,
          i,
          s,
          r,
          n,
          l = function(e, t) {
            for (i = -1, a = e.length; a - i > 1; )
              e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s);
            return a;
          };
        return (this.x = e), (this.y = t), (this.lastIndex =
          e.length - 1), (this.interpolate = function(e) {
          return e
            ? (
                (n = l(this.x, e)),
                (r = n - 1),
                (e - this.x[r]) *
                  (this.y[n] - this.y[r]) /
                  (this.x[n] - this.x[r]) +
                  this.y[r]
              )
            : 0;
        }), this;
      },
      getInterpolateFunction: function(e) {
        var t = this;
        t.controller.spline ||
          (t.controller.spline = t.params.loop
            ? new se.LinearSpline(t.slidesGrid, e.slidesGrid)
            : new se.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate: function(e, t) {
        var a,
          i,
          s = this,
          r = s.controller.control,
          n = s.constructor;
        function l(e) {
          var t = s.rtlTranslate ? -s.translate : s.translate;
          "slide" === s.params.controller.by &&
            (
              s.controller.getInterpolateFunction(e),
              (i = -s.controller.spline.interpolate(-t))
            ), (i && "container" !== s.params.controller.by) ||
            (
              (a =
                (e.maxTranslate() - e.minTranslate()) /
                (s.maxTranslate() - s.minTranslate())),
              (i = (t - s.minTranslate()) * a + e.minTranslate())
            ), s.params.controller.inverse &&
            (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(
            i,
            s
          ), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        if (Array.isArray(r))
          for (var o = 0; o < r.length; o += 1)
            r[o] !== t && r[o] instanceof n && l(r[o]);
        else r instanceof n && t !== r && l(r);
      },
      setTransition: function(e, t) {
        var a,
          i = this,
          s = i.constructor,
          r = i.controller.control;
        function n(t) {
          t.setTransition(e, i), 0 !== e &&
            (
              t.transitionStart(),
              t.params.autoHeight &&
                E(function() {
                  t.updateAutoHeight();
                }),
              t.$wrapperEl.transitionEnd(function() {
                r &&
                  (
                    t.params.loop &&
                      "slide" === i.params.controller.by &&
                      t.loopFix(),
                    t.transitionEnd()
                  );
              })
            );
        }
        if (Array.isArray(r))
          for (a = 0; a < r.length; a += 1)
            r[a] !== t && r[a] instanceof s && n(r[a]);
        else r instanceof s && t !== r && n(r);
      }
    },
    re = {
      getRandomNumber: function(e) {
        void 0 === e && (e = 16);
        return "x".repeat(e).replace(/x/g, function() {
          return Math.round(16 * Math.random()).toString(16);
        });
      },
      makeElFocusable: function(e) {
        return e.attr("tabIndex", "0"), e;
      },
      makeElNotFocusable: function(e) {
        return e.attr("tabIndex", "-1"), e;
      },
      addElRole: function(e, t) {
        return e.attr("role", t), e;
      },
      addElRoleDescription: function(e, t) {
        return e.attr("aria-roledescription", t), e;
      },
      addElControls: function(e, t) {
        return e.attr("aria-controls", t), e;
      },
      addElLabel: function(e, t) {
        return e.attr("aria-label", t), e;
      },
      addElId: function(e, t) {
        return e.attr("id", t), e;
      },
      addElLive: function(e, t) {
        return e.attr("aria-live", t), e;
      },
      disableEl: function(e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function(e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterOrSpaceKey: function(e) {
        if (13 === e.keyCode || 32 === e.keyCode) {
          var t = this,
            a = t.params.a11y,
            i = m(e.target);
          t.navigation &&
            t.navigation.$nextEl &&
            i.is(t.navigation.$nextEl) &&
            (
              (t.isEnd && !t.params.loop) || t.slideNext(),
              t.isEnd
                ? t.a11y.notify(a.lastSlideMessage)
                : t.a11y.notify(a.nextSlideMessage)
            ), t.navigation &&
            t.navigation.$prevEl &&
            i.is(t.navigation.$prevEl) &&
            (
              (t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning
                ? t.a11y.notify(a.firstSlideMessage)
                : t.a11y.notify(a.prevSlideMessage)
            ), t.pagination &&
            i.is(z(t.params.pagination.bulletClass)) &&
            i[0].click();
        }
      },
      notify: function(e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function() {
        var e = this;
        if (!e.params.loop && e.navigation) {
          var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
          i &&
            i.length > 0 &&
            (e.isBeginning
              ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i))
              : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))), a &&
            a.length > 0 &&
            (e.isEnd
              ? (e.a11y.disableEl(a), e.a11y.makeElNotFocusable(a))
              : (e.a11y.enableEl(a), e.a11y.makeElFocusable(a)));
        }
      },
      updatePagination: function() {
        var e = this,
          t = e.params.a11y;
        e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.bullets.each(function(a) {
            var i = m(a);
            e.a11y.makeElFocusable(
              i
            ), e.params.pagination.renderBullet || (e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1)));
          });
      },
      init: function() {
        var e = this,
          t = e.params.a11y;
        e.$el.append(e.a11y.liveRegion);
        var a = e.$el;
        t.containerRoleDescriptionMessage &&
          e.a11y.addElRoleDescription(
            a,
            t.containerRoleDescriptionMessage
          ), t.containerMessage && e.a11y.addElLabel(a, t.containerMessage);
        var i,
          s,
          r = e.$wrapperEl,
          n = r.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16),
          l = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        e.a11y.addElId(r, n), e.a11y.addElLive(
          r,
          l
        ), t.itemRoleDescriptionMessage &&
          e.a11y.addElRoleDescription(
            m(e.slides),
            t.itemRoleDescriptionMessage
          ), e.a11y.addElRole(m(e.slides), t.slideRole), e.slides.each(function(
          a
        ) {
          var i = m(a),
            s = t.slideLabelMessage
              .replace(/\{\{index\}\}/, i.index() + 1)
              .replace(/\{\{slidesLength\}\}/, e.slides.length);
          e.a11y.addElLabel(i, s);
        }), e.navigation &&
          e.navigation.$nextEl &&
          (i = e.navigation.$nextEl), e.navigation &&
          e.navigation.$prevEl &&
          (s = e.navigation.$prevEl), i &&
          i.length &&
          (
            e.a11y.makeElFocusable(i),
            "BUTTON" !== i[0].tagName &&
              (
                e.a11y.addElRole(i, "button"),
                i.on("keydown", e.a11y.onEnterOrSpaceKey)
              ),
            e.a11y.addElLabel(i, t.nextSlideMessage),
            e.a11y.addElControls(i, n)
          ), s &&
          s.length &&
          (
            e.a11y.makeElFocusable(s),
            "BUTTON" !== s[0].tagName &&
              (
                e.a11y.addElRole(s, "button"),
                s.on("keydown", e.a11y.onEnterOrSpaceKey)
              ),
            e.a11y.addElLabel(s, t.prevSlideMessage),
            e.a11y.addElControls(s, n)
          ), e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.$el.on(
            "keydown",
            z(e.params.pagination.bulletClass),
            e.a11y.onEnterOrSpaceKey
          );
      },
      destroy: function() {
        var e,
          t,
          a = this;
        a.a11y.liveRegion &&
          a.a11y.liveRegion.length > 0 &&
          a.a11y.liveRegion.remove(), a.navigation &&
          a.navigation.$nextEl &&
          (e = a.navigation.$nextEl), a.navigation &&
          a.navigation.$prevEl &&
          (t = a.navigation.$prevEl), e &&
          e.off("keydown", a.a11y.onEnterOrSpaceKey), t &&
          t.off("keydown", a.a11y.onEnterOrSpaceKey), a.pagination &&
          a.params.pagination.clickable &&
          a.pagination.bullets &&
          a.pagination.bullets.length &&
          a.pagination.$el.off(
            "keydown",
            z(a.params.pagination.bulletClass),
            a.a11y.onEnterOrSpaceKey
          );
      }
    },
    ne = {
      init: function() {
        var e = this,
          t = l();
        if (e.params.history) {
          if (!t.history || !t.history.pushState)
            return (e.params.history.enabled = !1), void (e.params.hashNavigation.enabled = !0);
          var a = e.history;
          (a.initialized = !0), (a.paths = ne.getPathValues(e.params.url)), (a
            .paths.key ||
            a.paths.value) &&
            (
              a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit),
              e.params.history.replaceState ||
                t.addEventListener("popstate", e.history.setHistoryPopState)
            );
        }
      },
      destroy: function() {
        var e = l();
        this.params.history.replaceState ||
          e.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function() {
        var e = this;
        (e.history.paths = ne.getPathValues(
          e.params.url
        )), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
      },
      getPathValues: function(e) {
        var t = l(),
          a = (e ? new URL(e) : t.location).pathname
            .slice(1)
            .split("/")
            .filter(function(e) {
              return "" !== e;
            }),
          i = a.length;
        return { key: a[i - 2], value: a[i - 1] };
      },
      setHistory: function(e, t) {
        var a = this,
          i = l();
        if (a.history.initialized && a.params.history.enabled) {
          var s;
          s = a.params.url ? new URL(a.params.url) : i.location;
          var r = a.slides.eq(t),
            n = ne.slugify(r.attr("data-history"));
          if (a.params.history.root.length > 0) {
            var o = a.params.history.root;
            "/" === o[o.length - 1] && (o = o.slice(0, o.length - 1)), (n =
              o + "/" + e + "/" + n);
          } else s.pathname.includes(e) || (n = e + "/" + n);
          var d = i.history.state;
          (d && d.value === n) ||
            (a.params.history.replaceState
              ? i.history.replaceState({ value: n }, null, n)
              : i.history.pushState({ value: n }, null, n));
        }
      },
      slugify: function(e) {
        return e
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");
      },
      scrollToSlide: function(e, t, a) {
        var i = this;
        if (t)
          for (var s = 0, r = i.slides.length; s < r; s += 1) {
            var n = i.slides.eq(s);
            if (
              ne.slugify(n.attr("data-history")) === t &&
              !n.hasClass(i.params.slideDuplicateClass)
            ) {
              var l = n.index();
              i.slideTo(l, e, a);
            }
          }
        else i.slideTo(0, e, a);
      }
    },
    le = {
      onHashCange: function() {
        var e = this,
          t = r();
        e.emit("hashChange");
        var a = t.location.hash.replace("#", "");
        if (a !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          var i = e.$wrapperEl
            .children("." + e.params.slideClass + '[data-hash="' + a + '"]')
            .index();
          if (void 0 === i) return;
          e.slideTo(i);
        }
      },
      setHash: function() {
        var e = this,
          t = l(),
          a = r();
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
          if (
            e.params.hashNavigation.replaceState &&
            t.history &&
            t.history.replaceState
          )
            t.history.replaceState(
              null,
              null,
              "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""
            ), e.emit("hashSet");
          else {
            var i = e.slides.eq(e.activeIndex),
              s = i.attr("data-hash") || i.attr("data-history");
            (a.location.hash = s || ""), e.emit("hashSet");
          }
      },
      init: function() {
        var e = this,
          t = r(),
          a = l();
        if (
          !(
            !e.params.hashNavigation.enabled ||
            (e.params.history && e.params.history.enabled)
          )
        ) {
          e.hashNavigation.initialized = !0;
          var i = t.location.hash.replace("#", "");
          if (i)
            for (var s = 0, n = e.slides.length; s < n; s += 1) {
              var o = e.slides.eq(s);
              if (
                (o.attr("data-hash") || o.attr("data-history")) === i &&
                !o.hasClass(e.params.slideDuplicateClass)
              ) {
                var d = o.index();
                e.slideTo(d, 0, e.params.runCallbacksOnInit, !0);
              }
            }
          e.params.hashNavigation.watchState &&
            m(a).on("hashchange", e.hashNavigation.onHashCange);
        }
      },
      destroy: function() {
        var e = l();
        this.params.hashNavigation.watchState &&
          m(e).off("hashchange", this.hashNavigation.onHashCange);
      }
    },
    oe = {
      run: function() {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (a =
            t.attr("data-swiper-autoplay") ||
            e.params.autoplay.delay), clearTimeout(
          e.autoplay.timeout
        ), (e.autoplay.timeout = E(function() {
          var t;
          e.params.autoplay.reverseDirection
            ? e.params.loop
              ? (
                  e.loopFix(),
                  (t = e.slidePrev(e.params.speed, !0, !0)),
                  e.emit("autoplay")
                )
              : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (
                      (t = e.slideTo(
                        e.slides.length - 1,
                        e.params.speed,
                        !0,
                        !0
                      )),
                      e.emit("autoplay")
                    )
                : (
                    (t = e.slidePrev(e.params.speed, !0, !0)),
                    e.emit("autoplay")
                  )
            : e.params.loop
              ? (
                  e.loopFix(),
                  (t = e.slideNext(e.params.speed, !0, !0)),
                  e.emit("autoplay")
                )
              : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (
                      (t = e.slideTo(0, e.params.speed, !0, !0)),
                      e.emit("autoplay")
                    )
                : (
                    (t = e.slideNext(e.params.speed, !0, !0)),
                    e.emit("autoplay")
                  ), ((e.params.cssMode && e.autoplay.running) || !1 === t) && e.autoplay.run();
        }, a));
      },
      start: function() {
        var e = this;
        return (
          void 0 === e.autoplay.timeout &&
          (!e.autoplay.running &&
            (
              (e.autoplay.running = !0),
              e.emit("autoplayStart"),
              e.autoplay.run(),
              !0
            ))
        );
      },
      stop: function() {
        var e = this;
        return (
          !!e.autoplay.running &&
          (void 0 !== e.autoplay.timeout &&
            (
              e.autoplay.timeout &&
                (
                  clearTimeout(e.autoplay.timeout),
                  (e.autoplay.timeout = void 0)
                ),
              (e.autoplay.running = !1),
              e.emit("autoplayStop"),
              !0
            ))
        );
      },
      pause: function(e) {
        var t = this;
        t.autoplay.running &&
          (t.autoplay.paused ||
            (
              t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
              (t.autoplay.paused = !0),
              0 !== e && t.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach(function(e) {
                    t.$wrapperEl[0].addEventListener(
                      e,
                      t.autoplay.onTransitionEnd
                    );
                  })
                : ((t.autoplay.paused = !1), t.autoplay.run())
            ));
      },
      onVisibilityChange: function() {
        var e = this,
          t = r();
        "hidden" === t.visibilityState &&
          e.autoplay.running &&
          e.autoplay.pause(), "visible" === t.visibilityState &&
          e.autoplay.paused &&
          (e.autoplay.run(), (e.autoplay.paused = !1));
      },
      onTransitionEnd: function(e) {
        var t = this;
        t &&
          !t.destroyed &&
          t.$wrapperEl &&
          e.target === t.$wrapperEl[0] &&
          (
            ["transitionend", "webkitTransitionEnd"].forEach(function(e) {
              t.$wrapperEl[0].removeEventListener(
                e,
                t.autoplay.onTransitionEnd
              );
            }),
            (t.autoplay.paused = !1),
            t.autoplay.running ? t.autoplay.run() : t.autoplay.stop()
          );
      },
      onMouseEnter: function() {
        var e = this;
        e.params.autoplay.disableOnInteraction
          ? e.autoplay.stop()
          : e.autoplay.pause(), [
          "transitionend",
          "webkitTransitionEnd"
        ].forEach(function(t) {
          e.$wrapperEl[0].removeEventListener(t, e.autoplay.onTransitionEnd);
        });
      },
      onMouseLeave: function() {
        var e = this;
        e.params.autoplay.disableOnInteraction ||
          ((e.autoplay.paused = !1), e.autoplay.run());
      },
      attachMouseEvents: function() {
        var e = this;
        e.params.autoplay.pauseOnMouseEnter &&
          (
            e.$el.on("mouseenter", e.autoplay.onMouseEnter),
            e.$el.on("mouseleave", e.autoplay.onMouseLeave)
          );
      },
      detachMouseEvents: function() {
        var e = this;
        e.$el.off("mouseenter", e.autoplay.onMouseEnter), e.$el.off(
          "mouseleave",
          e.autoplay.onMouseLeave
        );
      }
    },
    de = {
      setTranslate: function() {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
          var i = e.slides.eq(a),
            s = -i[0].swiperSlideOffset;
          e.params.virtualTranslate || (s -= e.translate);
          var r = 0;
          e.isHorizontal() || ((r = s), (s = 0));
          var n = e.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i
            .css({ opacity: n })
            .transform("translate3d(" + s + "px, " + r + "px, 0px)");
        }
      },
      setTransition: function(e) {
        var t = this,
          a = t.slides,
          i = t.$wrapperEl;
        if ((a.transition(e), t.params.virtualTranslate && 0 !== e)) {
          var s = !1;
          a.transitionEnd(function() {
            if (!s && t && !t.destroyed) {
              (s = !0), (t.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], a = 0;
                a < e.length;
                a += 1
              )
                i.trigger(e[a]);
            }
          });
        }
      }
    },
    pe = {
      setTranslate: function() {
        var e,
          t = this,
          a = t.$el,
          i = t.$wrapperEl,
          s = t.slides,
          r = t.width,
          n = t.height,
          l = t.rtlTranslate,
          o = t.size,
          d = t.browser,
          p = t.params.cubeEffect,
          u = t.isHorizontal(),
          c = t.virtual && t.params.virtual.enabled,
          h = 0;
        p.shadow &&
          (u
            ? (
                0 === (e = i.find(".swiper-cube-shadow")).length &&
                  (
                    (e = m('<div class="swiper-cube-shadow"></div>')),
                    i.append(e)
                  ),
                e.css({ height: r + "px" })
              )
            : 0 === (e = a.find(".swiper-cube-shadow")).length &&
              ((e = m('<div class="swiper-cube-shadow"></div>')), a.append(e)));
        for (var v = 0; v < s.length; v += 1) {
          var f = s.eq(v),
            g = v;
          c && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
          var b = 90 * g,
            y = Math.floor(b / 360);
          l && ((b = -b), (y = Math.floor(-b / 360)));
          var w = Math.max(Math.min(f[0].progress, 1), -1),
            E = 0,
            x = 0,
            T = 0;
          g % 4 == 0
            ? ((E = 4 * -y * o), (T = 0))
            : (g - 1) % 4 == 0
              ? ((E = 0), (T = 4 * -y * o))
              : (g - 2) % 4 == 0
                ? ((E = o + 4 * y * o), (T = o))
                : (g - 3) % 4 == 0 && ((E = -o), (T = 3 * o + 4 * o * y)), l &&
            (E = -E), u || ((x = E), (E = 0));
          var C =
            "rotateX(" +
            (u ? 0 : -b) +
            "deg) rotateY(" +
            (u ? b : 0) +
            "deg) translate3d(" +
            E +
            "px, " +
            x +
            "px, " +
            T +
            "px)";
          if (
            (
              w <= 1 &&
                w > -1 &&
                ((h = 90 * g + 90 * w), l && (h = 90 * -g - 90 * w)),
              f.transform(C),
              p.slideShadows
            )
          ) {
            var S = u
                ? f.find(".swiper-slide-shadow-left")
                : f.find(".swiper-slide-shadow-top"),
              M = u
                ? f.find(".swiper-slide-shadow-right")
                : f.find(".swiper-slide-shadow-bottom");
            0 === S.length &&
              (
                (S = m(
                  '<div class="swiper-slide-shadow-' +
                    (u ? "left" : "top") +
                    '"></div>'
                )),
                f.append(S)
              ), 0 === M.length &&
              (
                (M = m(
                  '<div class="swiper-slide-shadow-' +
                    (u ? "right" : "bottom") +
                    '"></div>'
                )),
                f.append(M)
              ), S.length && (S[0].style.opacity = Math.max(-w, 0)), M.length &&
              (M[0].style.opacity = Math.max(w, 0));
          }
        }
        if (
          (
            i.css({
              "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
              "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
              "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
              "transform-origin": "50% 50% -" + o / 2 + "px"
            }),
            p.shadow
          )
        )
          if (u)
            e.transform(
              "translate3d(0px, " +
                (r / 2 + p.shadowOffset) +
                "px, " +
                -r / 2 +
                "px) rotateX(90deg) rotateZ(0deg) scale(" +
                p.shadowScale +
                ")"
            );
          else {
            var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
              P =
                1.5 -
                (Math.sin(2 * z * Math.PI / 360) / 2 +
                  Math.cos(2 * z * Math.PI / 360) / 2),
              k = p.shadowScale,
              $ = p.shadowScale / P,
              L = p.shadowOffset;
            e.transform(
              "scale3d(" +
                k +
                ", 1, " +
                $ +
                ") translate3d(0px, " +
                (n / 2 + L) +
                "px, " +
                -n / 2 / $ +
                "px) rotateX(-90deg)"
            );
          }
        var I = d.isSafari || d.isWebView ? -o / 2 : 0;
        i.transform(
          "translate3d(0px,0," +
            I +
            "px) rotateX(" +
            (t.isHorizontal() ? 0 : h) +
            "deg) rotateY(" +
            (t.isHorizontal() ? -h : 0) +
            "deg)"
        );
      },
      setTransition: function(e) {
        var t = this,
          a = t.$el;
        t.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e), t.params.cubeEffect.shadow &&
          !t.isHorizontal() &&
          a.find(".swiper-cube-shadow").transition(e);
      }
    },
    ue = {
      setTranslate: function() {
        for (
          var e = this, t = e.slides, a = e.rtlTranslate, i = 0;
          i < t.length;
          i += 1
        ) {
          var s = t.eq(i),
            r = s[0].progress;
          e.params.flipEffect.limitRotation &&
            (r = Math.max(Math.min(s[0].progress, 1), -1));
          var n = -180 * r,
            l = 0,
            o = -s[0].swiperSlideOffset,
            d = 0;
          if (
            (
              e.isHorizontal()
                ? a && (n = -n)
                : ((d = o), (o = 0), (l = -n), (n = 0)),
              (s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length),
              e.params.flipEffect.slideShadows
            )
          ) {
            var p = e.isHorizontal()
                ? s.find(".swiper-slide-shadow-left")
                : s.find(".swiper-slide-shadow-top"),
              u = e.isHorizontal()
                ? s.find(".swiper-slide-shadow-right")
                : s.find(".swiper-slide-shadow-bottom");
            0 === p.length &&
              (
                (p = m(
                  '<div class="swiper-slide-shadow-' +
                    (e.isHorizontal() ? "left" : "top") +
                    '"></div>'
                )),
                s.append(p)
              ), 0 === u.length &&
              (
                (u = m(
                  '<div class="swiper-slide-shadow-' +
                    (e.isHorizontal() ? "right" : "bottom") +
                    '"></div>'
                )),
                s.append(u)
              ), p.length && (p[0].style.opacity = Math.max(-r, 0)), u.length &&
              (u[0].style.opacity = Math.max(r, 0));
          }
          s.transform(
            "translate3d(" +
              o +
              "px, " +
              d +
              "px, 0px) rotateX(" +
              l +
              "deg) rotateY(" +
              n +
              "deg)"
          );
        }
      },
      setTransition: function(e) {
        var t = this,
          a = t.slides,
          i = t.activeIndex,
          s = t.$wrapperEl;
        if (
          (
            a
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e),
            t.params.virtualTranslate && 0 !== e
          )
        ) {
          var r = !1;
          a.eq(i).transitionEnd(function() {
            if (!r && t && !t.destroyed) {
              (r = !0), (t.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], a = 0;
                a < e.length;
                a += 1
              )
                s.trigger(e[a]);
            }
          });
        }
      }
    },
    ce = {
      setTranslate: function() {
        for (
          var e = this,
            t = e.width,
            a = e.height,
            i = e.slides,
            s = e.slidesSizesGrid,
            r = e.params.coverflowEffect,
            n = e.isHorizontal(),
            l = e.translate,
            o = n ? t / 2 - l : a / 2 - l,
            d = n ? r.rotate : -r.rotate,
            p = r.depth,
            u = 0,
            c = i.length;
          u < c;
          u += 1
        ) {
          var h = i.eq(u),
            v = s[u],
            f = (o - h[0].swiperSlideOffset - v / 2) / v * r.modifier,
            g = n ? d * f : 0,
            b = n ? 0 : d * f,
            y = -p * Math.abs(f),
            w = r.stretch;
          "string" == typeof w &&
            -1 !== w.indexOf("%") &&
            (w = parseFloat(r.stretch) / 100 * v);
          var E = n ? 0 : w * f,
            x = n ? w * f : 0,
            T = 1 - (1 - r.scale) * Math.abs(f);
          Math.abs(x) < 0.001 && (x = 0), Math.abs(E) < 0.001 &&
            (E = 0), Math.abs(y) < 0.001 && (y = 0), Math.abs(g) < 0.001 &&
            (g = 0), Math.abs(b) < 0.001 && (b = 0), Math.abs(T) < 0.001 &&
            (T = 0);
          var C =
            "translate3d(" +
            x +
            "px," +
            E +
            "px," +
            y +
            "px)  rotateX(" +
            b +
            "deg) rotateY(" +
            g +
            "deg) scale(" +
            T +
            ")";
          if (
            (
              h.transform(C),
              (h[0].style.zIndex = 1 - Math.abs(Math.round(f))),
              r.slideShadows
            )
          ) {
            var S = n
                ? h.find(".swiper-slide-shadow-left")
                : h.find(".swiper-slide-shadow-top"),
              M = n
                ? h.find(".swiper-slide-shadow-right")
                : h.find(".swiper-slide-shadow-bottom");
            0 === S.length &&
              (
                (S = m(
                  '<div class="swiper-slide-shadow-' +
                    (n ? "left" : "top") +
                    '"></div>'
                )),
                h.append(S)
              ), 0 === M.length &&
              (
                (M = m(
                  '<div class="swiper-slide-shadow-' +
                    (n ? "right" : "bottom") +
                    '"></div>'
                )),
                h.append(M)
              ), S.length && (S[0].style.opacity = f > 0 ? f : 0), M.length &&
              (M[0].style.opacity = -f > 0 ? -f : 0);
          }
        }
      },
      setTransition: function(e) {
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e);
      }
    },
    he = {
      init: function() {
        var e = this,
          t = e.params.thumbs;
        if (e.thumbs.initialized) return !1;
        e.thumbs.initialized = !0;
        var a = e.constructor;
        return t.swiper instanceof a
          ? (
              (e.thumbs.swiper = t.swiper),
              S(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
              }),
              S(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
              })
            )
          : C(t.swiper) &&
            (
              (e.thumbs.swiper = new a(
                S({}, t.swiper, {
                  watchSlidesVisibility: !0,
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1
                })
              )),
              (e.thumbs.swiperCreated = !0)
            ), e.thumbs.swiper.$el.addClass(
          e.params.thumbs.thumbsContainerClass
        ), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick), !0;
      },
      onThumbClick: function() {
        var e = this,
          t = e.thumbs.swiper;
        if (t) {
          var a = t.clickedIndex,
            i = t.clickedSlide;
          if (
            !(
              (i && m(i).hasClass(e.params.thumbs.slideThumbActiveClass)) ||
              null == a
            )
          ) {
            var s;
            if (
              (
                (s = t.params.loop
                  ? parseInt(
                      m(t.clickedSlide).attr("data-swiper-slide-index"),
                      10
                    )
                  : a),
                e.params.loop
              )
            ) {
              var r = e.activeIndex;
              e.slides.eq(r).hasClass(e.params.slideDuplicateClass) &&
                (
                  e.loopFix(),
                  (e._clientLeft = e.$wrapperEl[0].clientLeft),
                  (r = e.activeIndex)
                );
              var n = e.slides
                  .eq(r)
                  .prevAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index(),
                l = e.slides
                  .eq(r)
                  .nextAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index();
              s = void 0 === n ? l : void 0 === l ? n : l - r < r - n ? l : n;
            }
            e.slideTo(s);
          }
        }
      },
      update: function(e) {
        var t = this,
          a = t.thumbs.swiper;
        if (a) {
          var i =
              "auto" === a.params.slidesPerView
                ? a.slidesPerViewDynamic()
                : a.params.slidesPerView,
            s = t.params.thumbs.autoScrollOffset,
            r = s && !a.params.loop;
          if (t.realIndex !== a.realIndex || r) {
            var n,
              l,
              o = a.activeIndex;
            if (a.params.loop) {
              a.slides.eq(o).hasClass(a.params.slideDuplicateClass) &&
                (
                  a.loopFix(),
                  (a._clientLeft = a.$wrapperEl[0].clientLeft),
                  (o = a.activeIndex)
                );
              var d = a.slides
                  .eq(o)
                  .prevAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                  .eq(0)
                  .index(),
                p = a.slides
                  .eq(o)
                  .nextAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                  .eq(0)
                  .index();
              (n =
                void 0 === d
                  ? p
                  : void 0 === p
                    ? d
                    : p - o == o - d
                      ? a.params.slidesPerGroup > 1 ? p : o
                      : p - o < o - d ? p : d), (l =
                t.activeIndex > t.previousIndex ? "next" : "prev");
            } else l = (n = t.realIndex) > t.previousIndex ? "next" : "prev";
            r && (n += "next" === l ? s : -1 * s), a.visibleSlidesIndexes &&
              a.visibleSlidesIndexes.indexOf(n) < 0 &&
              (
                a.params.centeredSlides
                  ? (n =
                      n > o
                        ? n - Math.floor(i / 2) + 1
                        : n + Math.floor(i / 2) - 1)
                  : n > o && a.params.slidesPerGroup,
                a.slideTo(n, e ? 0 : void 0)
              );
          }
          var u = 1,
            c = t.params.thumbs.slideThumbActiveClass;
          if (
            (
              t.params.slidesPerView > 1 &&
                !t.params.centeredSlides &&
                (u = t.params.slidesPerView),
              t.params.thumbs.multipleActiveThumbs || (u = 1),
              (u = Math.floor(u)),
              a.slides.removeClass(c),
              a.params.loop || (a.params.virtual && a.params.virtual.enabled)
            )
          )
            for (var h = 0; h < u; h += 1)
              a.$wrapperEl
                .children(
                  '[data-swiper-slide-index="' + (t.realIndex + h) + '"]'
                )
                .addClass(c);
          else
            for (var v = 0; v < u; v += 1)
              a.slides.eq(t.realIndex + v).addClass(c);
        }
      }
    },
    ve = [
      j,
      K,
      {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null
          }
        },
        create: function() {
          M(this, {
            mousewheel: {
              enabled: !1,
              lastScrollTime: x(),
              lastEventBeforeSnap: void 0,
              recentWheelEvents: [],
              enable: Z.enable,
              disable: Z.disable,
              handle: Z.handle,
              handleMouseEnter: Z.handleMouseEnter,
              handleMouseLeave: Z.handleMouseLeave,
              animateSlider: Z.animateSlider,
              releaseScroll: Z.releaseScroll
            }
          });
        },
        on: {
          init: function(e) {
            !e.params.mousewheel.enabled &&
              e.params.cssMode &&
              e.mousewheel.disable(), e.params.mousewheel.enabled &&
              e.mousewheel.enable();
          },
          destroy: function(e) {
            e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled &&
              e.mousewheel.disable();
          }
        }
      },
      {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock"
          }
        },
        create: function() {
          M(this, { navigation: t({}, J) });
        },
        on: {
          init: function(e) {
            e.navigation.init(), e.navigation.update();
          },
          toEdge: function(e) {
            e.navigation.update();
          },
          fromEdge: function(e) {
            e.navigation.update();
          },
          destroy: function(e) {
            e.navigation.destroy();
          },
          "enable disable": function(e) {
            var t = e.navigation,
              a = t.$nextEl,
              i = t.$prevEl;
            a &&
              a[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              ), i &&
              i[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              );
          },
          click: function(e, t) {
            var a = e.navigation,
              i = a.$nextEl,
              s = a.$prevEl,
              r = t.target;
            if (e.params.navigation.hideOnClick && !m(r).is(s) && !m(r).is(i)) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === r || e.pagination.el.contains(r))
              )
                return;
              var n;
              i
                ? (n = i.hasClass(e.params.navigation.hiddenClass))
                : s && (n = s.hasClass(e.params.navigation.hiddenClass)), !0 ===
              n
                ? e.emit("navigationShow")
                : e.emit("navigationHide"), i &&
                i.toggleClass(e.params.navigation.hiddenClass), s &&
                s.toggleClass(e.params.navigation.hiddenClass);
            }
          }
        }
      },
      {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function(e) {
              return e;
            },
            formatFractionTotal: function(e) {
              return e;
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock"
          }
        },
        create: function() {
          M(this, { pagination: t({ dynamicBulletIndex: 0 }, Q) });
        },
        on: {
          init: function(e) {
            e.pagination.init(), e.pagination.render(), e.pagination.update();
          },
          activeIndexChange: function(e) {
            (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
          },
          snapIndexChange: function(e) {
            e.params.loop || e.pagination.update();
          },
          slidesLengthChange: function(e) {
            e.params.loop && (e.pagination.render(), e.pagination.update());
          },
          snapGridLengthChange: function(e) {
            e.params.loop || (e.pagination.render(), e.pagination.update());
          },
          destroy: function(e) {
            e.pagination.destroy();
          },
          "enable disable": function(e) {
            var t = e.pagination.$el;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.pagination.lockClass
              );
          },
          click: function(e, t) {
            var a = t.target;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              e.pagination.$el.length > 0 &&
              !m(a).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && a === e.navigation.nextEl) ||
                  (e.navigation.prevEl && a === e.navigation.prevEl))
              )
                return;
              !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass)
                ? e.emit("paginationShow")
                : e.emit("paginationHide"), e.pagination.$el.toggleClass(
                e.params.pagination.hiddenClass
              );
            }
          }
        }
      },
      {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag"
          }
        },
        create: function() {
          M(this, {
            scrollbar: t(
              { isTouched: !1, timeout: null, dragTimeout: null },
              ee
            )
          });
        },
        on: {
          init: function(e) {
            e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
          },
          update: function(e) {
            e.scrollbar.updateSize();
          },
          resize: function(e) {
            e.scrollbar.updateSize();
          },
          observerUpdate: function(e) {
            e.scrollbar.updateSize();
          },
          setTranslate: function(e) {
            e.scrollbar.setTranslate();
          },
          setTransition: function(e, t) {
            e.scrollbar.setTransition(t);
          },
          "enable disable": function(e) {
            var t = e.scrollbar.$el;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.scrollbar.lockClass
              );
          },
          destroy: function(e) {
            e.scrollbar.destroy();
          }
        }
      },
      {
        name: "parallax",
        params: { parallax: { enabled: !1 } },
        create: function() {
          M(this, { parallax: t({}, te) });
        },
        on: {
          beforeInit: function(e) {
            e.params.parallax.enabled &&
              (
                (e.params.watchSlidesProgress = !0),
                (e.originalParams.watchSlidesProgress = !0)
              );
          },
          init: function(e) {
            e.params.parallax.enabled && e.parallax.setTranslate();
          },
          setTranslate: function(e) {
            e.params.parallax.enabled && e.parallax.setTranslate();
          },
          setTransition: function(e, t) {
            e.params.parallax.enabled && e.parallax.setTransition(t);
          }
        }
      },
      {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
          }
        },
        create: function() {
          var e = this;
          M(e, {
            zoom: t(
              {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3
                },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {}
                },
                velocity: {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0
                }
              },
              ae
            )
          });
          var a = 1;
          Object.defineProperty(e.zoom, "scale", {
            get: function() {
              return a;
            },
            set: function(t) {
              if (a !== t) {
                var i = e.zoom.gesture.$imageEl
                    ? e.zoom.gesture.$imageEl[0]
                    : void 0,
                  s = e.zoom.gesture.$slideEl
                    ? e.zoom.gesture.$slideEl[0]
                    : void 0;
                e.emit("zoomChange", t, i, s);
              }
              a = t;
            }
          });
        },
        on: {
          init: function(e) {
            e.params.zoom.enabled && e.zoom.enable();
          },
          destroy: function(e) {
            e.zoom.disable();
          },
          touchStart: function(e, t) {
            e.zoom.enabled && e.zoom.onTouchStart(t);
          },
          touchEnd: function(e, t) {
            e.zoom.enabled && e.zoom.onTouchEnd(t);
          },
          doubleTap: function(e, t) {
            !e.animating &&
              e.params.zoom.enabled &&
              e.zoom.enabled &&
              e.params.zoom.toggle &&
              e.zoom.toggle(t);
          },
          transitionEnd: function(e) {
            e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
          },
          slideChange: function(e) {
            e.zoom.enabled &&
              e.params.zoom.enabled &&
              e.params.cssMode &&
              e.zoom.onTransitionEnd();
          }
        }
      },
      {
        name: "lazy",
        params: {
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader"
          }
        },
        create: function() {
          M(this, { lazy: t({ initialImageLoaded: !1 }, ie) });
        },
        on: {
          beforeInit: function(e) {
            e.params.lazy.enabled &&
              e.params.preloadImages &&
              (e.params.preloadImages = !1);
          },
          init: function(e) {
            e.params.lazy.enabled &&
              !e.params.loop &&
              0 === e.params.initialSlide &&
              (e.params.lazy.checkInView
                ? e.lazy.checkInViewOnLoad()
                : e.lazy.load());
          },
          scroll: function(e) {
            e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
          },
          "scrollbarDragMove resize _freeModeNoMomentumRelease": function(e) {
            e.params.lazy.enabled && e.lazy.load();
          },
          transitionStart: function(e) {
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart &&
                  !e.lazy.initialImageLoaded)) &&
              e.lazy.load();
          },
          transitionEnd: function(e) {
            e.params.lazy.enabled &&
              !e.params.lazy.loadOnTransitionStart &&
              e.lazy.load();
          },
          slideChange: function(e) {
            e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
          }
        }
      },
      {
        name: "controller",
        params: { controller: { control: void 0, inverse: !1, by: "slide" } },
        create: function() {
          M(this, {
            controller: t({ control: this.params.controller.control }, se)
          });
        },
        on: {
          update: function(e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          resize: function(e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          observerUpdate: function(e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          setTranslate: function(e, t, a) {
            e.controller.control && e.controller.setTranslate(t, a);
          },
          setTransition: function(e, t, a) {
            e.controller.control && e.controller.setTransition(t, a);
          }
        }
      },
      {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group"
          }
        },
        create: function() {
          M(this, {
            a11y: t({}, re, {
              liveRegion: m(
                '<span class="' +
                  this.params.a11y.notificationClass +
                  '" aria-live="assertive" aria-atomic="true"></span>'
              )
            })
          });
        },
        on: {
          afterInit: function(e) {
            e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
          },
          toEdge: function(e) {
            e.params.a11y.enabled && e.a11y.updateNavigation();
          },
          fromEdge: function(e) {
            e.params.a11y.enabled && e.a11y.updateNavigation();
          },
          paginationUpdate: function(e) {
            e.params.a11y.enabled && e.a11y.updatePagination();
          },
          destroy: function(e) {
            e.params.a11y.enabled && e.a11y.destroy();
          }
        }
      },
      {
        name: "history",
        params: {
          history: { enabled: !1, root: "", replaceState: !1, key: "slides" }
        },
        create: function() {
          M(this, { history: t({}, ne) });
        },
        on: {
          init: function(e) {
            e.params.history.enabled && e.history.init();
          },
          destroy: function(e) {
            e.params.history.enabled && e.history.destroy();
          },
          "transitionEnd _freeModeNoMomentumRelease": function(e) {
            e.history.initialized &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
          },
          slideChange: function(e) {
            e.history.initialized &&
              e.params.cssMode &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
          }
        }
      },
      {
        name: "hash-navigation",
        params: {
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 }
        },
        create: function() {
          M(this, { hashNavigation: t({ initialized: !1 }, le) });
        },
        on: {
          init: function(e) {
            e.params.hashNavigation.enabled && e.hashNavigation.init();
          },
          destroy: function(e) {
            e.params.hashNavigation.enabled && e.hashNavigation.destroy();
          },
          "transitionEnd _freeModeNoMomentumRelease": function(e) {
            e.hashNavigation.initialized && e.hashNavigation.setHash();
          },
          slideChange: function(e) {
            e.hashNavigation.initialized &&
              e.params.cssMode &&
              e.hashNavigation.setHash();
          }
        }
      },
      {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
          }
        },
        create: function() {
          M(this, { autoplay: t({}, oe, { running: !1, paused: !1 }) });
        },
        on: {
          init: function(e) {
            e.params.autoplay.enabled &&
              (
                e.autoplay.start(),
                r().addEventListener(
                  "visibilitychange",
                  e.autoplay.onVisibilityChange
                ),
                e.autoplay.attachMouseEvents()
              );
          },
          beforeTransitionStart: function(e, t, a) {
            e.autoplay.running &&
              (a || !e.params.autoplay.disableOnInteraction
                ? e.autoplay.pause(t)
                : e.autoplay.stop());
          },
          sliderFirstMove: function(e) {
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction
                ? e.autoplay.stop()
                : e.autoplay.pause());
          },
          touchEnd: function(e) {
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              e.autoplay.run();
          },
          destroy: function(e) {
            e.autoplay.detachMouseEvents(), e.autoplay.running &&
              e.autoplay.stop(), r().removeEventListener(
              "visibilitychange",
              e.autoplay.onVisibilityChange
            );
          }
        }
      },
      {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create: function() {
          M(this, { fadeEffect: t({}, de) });
        },
        on: {
          beforeInit: function(e) {
            if ("fade" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "fade");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
              };
              S(e.params, t), S(e.originalParams, t);
            }
          },
          setTranslate: function(e) {
            "fade" === e.params.effect && e.fadeEffect.setTranslate();
          },
          setTransition: function(e, t) {
            "fade" === e.params.effect && e.fadeEffect.setTransition(t);
          }
        }
      },
      {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94
          }
        },
        create: function() {
          M(this, { cubeEffect: t({}, pe) });
        },
        on: {
          beforeInit: function(e) {
            if ("cube" === e.params.effect) {
              e.classNames.push(
                e.params.containerModifierClass + "cube"
              ), e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
              };
              S(e.params, t), S(e.originalParams, t);
            }
          },
          setTranslate: function(e) {
            "cube" === e.params.effect && e.cubeEffect.setTranslate();
          },
          setTransition: function(e, t) {
            "cube" === e.params.effect && e.cubeEffect.setTransition(t);
          }
        }
      },
      {
        name: "effect-flip",
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create: function() {
          M(this, { flipEffect: t({}, ue) });
        },
        on: {
          beforeInit: function(e) {
            if ("flip" === e.params.effect) {
              e.classNames.push(
                e.params.containerModifierClass + "flip"
              ), e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
              };
              S(e.params, t), S(e.originalParams, t);
            }
          },
          setTranslate: function(e) {
            "flip" === e.params.effect && e.flipEffect.setTranslate();
          },
          setTransition: function(e, t) {
            "flip" === e.params.effect && e.flipEffect.setTransition(t);
          }
        }
      },
      {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0
          }
        },
        create: function() {
          M(this, { coverflowEffect: t({}, ce) });
        },
        on: {
          beforeInit: function(e) {
            "coverflow" === e.params.effect &&
              (
                e.classNames.push(
                  e.params.containerModifierClass + "coverflow"
                ),
                e.classNames.push(e.params.containerModifierClass + "3d"),
                (e.params.watchSlidesProgress = !0),
                (e.originalParams.watchSlidesProgress = !0)
              );
          },
          setTranslate: function(e) {
            "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
          },
          setTransition: function(e, t) {
            "coverflow" === e.params.effect &&
              e.coverflowEffect.setTransition(t);
          }
        }
      },
      {
        name: "thumbs",
        params: {
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs"
          }
        },
        create: function() {
          M(this, { thumbs: t({ swiper: null, initialized: !1 }, he) });
        },
        on: {
          beforeInit: function(e) {
            var t = e.params.thumbs;
            t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
          },
          slideChange: function(e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          update: function(e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          resize: function(e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          observerUpdate: function(e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          setTransition: function(e, t) {
            var a = e.thumbs.swiper;
            a && a.setTransition(t);
          },
          beforeDestroy: function(e) {
            var t = e.thumbs.swiper;
            t && e.thumbs.swiperCreated && t && t.destroy();
          }
        }
      }
    ];
  return _.use(ve), _;
}); /*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!(function(t, e) {
  "object" == typeof module && module.exports
    ? (module.exports = e())
    : (t.EvEmitter = e());
})("undefined" != typeof window ? window : this, function() {
  function t() {}
  let e = t.prototype;
  return (e.on = function(t, e) {
    if (!t || !e) return this;
    let i = (this._events = this._events || {}),
      s = (i[t] = i[t] || []);
    return s.includes(e) || s.push(e), this;
  }), (e.once = function(t, e) {
    if (!t || !e) return this;
    this.on(t, e);
    let i = (this._onceEvents = this._onceEvents || {});
    return ((i[t] = i[t] || {})[e] = !0), this;
  }), (e.off = function(t, e) {
    let i = this._events && this._events[t];
    if (!i || !i.length) return this;
    let s = i.indexOf(e);
    return -1 != s && i.splice(s, 1), this;
  }), (e.emitEvent = function(t, e) {
    let i = this._events && this._events[t];
    if (!i || !i.length) return this;
    (i = i.slice(0)), (e = e || []);
    let s = this._onceEvents && this._onceEvents[t];
    for (let n of i) {
      s && s[n] && (this.off(t, n), delete s[n]), n.apply(this, e);
    }
    return this;
  }), (e.allOff = function() {
    return delete this._events, delete this._onceEvents, this;
  }), t;
}), /*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(t, e) {
  "object" == typeof module && module.exports
    ? (module.exports = e(t, require("ev-emitter")))
    : (t.imagesLoaded = e(t, t.EvEmitter));
})("undefined" != typeof window ? window : this, function(t, e) {
  let i = t.jQuery,
    s = t.console;
  function n(t, e, o) {
    if (!(this instanceof n)) return new n(t, e, o);
    let r = t;
    var h;
    ("string" == typeof t && (r = document.querySelectorAll(t)), r)
      ? (
          (this.elements = (
            (h = r),
            Array.isArray(h)
              ? h
              : "object" == typeof h && "number" == typeof h.length
                ? [...h]
                : [h]
          )),
          (this.options = {}),
          "function" == typeof e ? (o = e) : Object.assign(this.options, e),
          o && this.on("always", o),
          this.getImages(),
          i && (this.jqDeferred = new i.Deferred()),
          setTimeout(this.check.bind(this))
        )
      : s.error(`Bad element for imagesLoaded ${r || t}`);
  }
  (n.prototype = Object.create(
    e.prototype
  )), (n.prototype.getImages = function() {
    (this.images = []), this.elements.forEach(this.addElementImages, this);
  });
  const o = [1, 9, 11];
  n.prototype.addElementImages = function(t) {
    "IMG" === t.nodeName && this.addImage(t), !0 === this.options.background &&
      this.addElementBackgroundImages(t);
    let { nodeType: e } = t;
    if (!e || !o.includes(e)) return;
    let i = t.querySelectorAll("img");
    for (let t of i) this.addImage(t);
    if ("string" == typeof this.options.background) {
      let e = t.querySelectorAll(this.options.background);
      for (let t of e) this.addElementBackgroundImages(t);
    }
  };
  const r = /url\((['"])?(.*?)\1\)/gi;
  function h(t) {
    this.img = t;
  }
  function d(t, e) {
    (this.url = t), (this.element = e), (this.img = new Image());
  }
  return (n.prototype.addElementBackgroundImages = function(t) {
    let e = getComputedStyle(t);
    if (!e) return;
    let i = r.exec(e.backgroundImage);
    for (; null !== i; ) {
      let s = i && i[2];
      s && this.addBackground(s, t), (i = r.exec(e.backgroundImage));
    }
  }), (n.prototype.addImage = function(t) {
    let e = new h(t);
    this.images.push(e);
  }), (n.prototype.addBackground = function(t, e) {
    let i = new d(t, e);
    this.images.push(i);
  }), (n.prototype.check = function() {
    if (
      (
        (this.progressedCount = 0),
        (this.hasAnyBroken = !1),
        !this.images.length
      )
    )
      return void this.complete();
    let t = (t, e, i) => {
      setTimeout(() => {
        this.progress(t, e, i);
      });
    };
    this.images.forEach(function(e) {
      e.once("progress", t), e.check();
    });
  }), (n.prototype.progress = function(t, e, i) {
    this.progressedCount++, (this.hasAnyBroken =
      this.hasAnyBroken || !t.isLoaded), this.emitEvent("progress", [
      this,
      t,
      e
    ]), this.jqDeferred &&
      this.jqDeferred.notify &&
      this.jqDeferred.notify(this, t), this.progressedCount ===
      this.images.length && this.complete(), this.options.debug &&
      s &&
      s.log(`progress: ${i}`, t, e);
  }), (n.prototype.complete = function() {
    let t = this.hasAnyBroken ? "fail" : "done";
    if (
      (
        (this.isComplete = !0),
        this.emitEvent(t, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred
      )
    ) {
      let t = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[t](this);
    }
  }), (h.prototype = Object.create(e.prototype)), (h.prototype.check = function() {
    this.getIsImageComplete()
      ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
      : (
          (this.proxyImage = new Image()),
          this.img.crossOrigin &&
            (this.proxyImage.crossOrigin = this.img.crossOrigin),
          this.proxyImage.addEventListener("load", this),
          this.proxyImage.addEventListener("error", this),
          this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.proxyImage.src = this.img.currentSrc || this.img.src)
        );
  }), (h.prototype.getIsImageComplete = function() {
    return this.img.complete && this.img.naturalWidth;
  }), (h.prototype.confirm = function(t, e) {
    this.isLoaded = t;
    let { parentNode: i } = this.img,
      s = "PICTURE" === i.nodeName ? i : this.img;
    this.emitEvent("progress", [this, s, e]);
  }), (h.prototype.handleEvent = function(t) {
    let e = "on" + t.type;
    this[e] && this[e](t);
  }), (h.prototype.onload = function() {
    this.confirm(!0, "onload"), this.unbindEvents();
  }), (h.prototype.onerror = function() {
    this.confirm(!1, "onerror"), this.unbindEvents();
  }), (h.prototype.unbindEvents = function() {
    this.proxyImage.removeEventListener(
      "load",
      this
    ), this.proxyImage.removeEventListener(
      "error",
      this
    ), this.img.removeEventListener("load", this), this.img.removeEventListener(
      "error",
      this
    );
  }), (d.prototype = Object.create(h.prototype)), (d.prototype.check = function() {
    this.img.addEventListener("load", this), this.img.addEventListener(
      "error",
      this
    ), (this.img.src = this.url), this.getIsImageComplete() &&
      (
        this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents()
      );
  }), (d.prototype.unbindEvents = function() {
    this.img.removeEventListener("load", this), this.img.removeEventListener(
      "error",
      this
    );
  }), (d.prototype.confirm = function(t, e) {
    (this.isLoaded = t), this.emitEvent("progress", [this, this.element, e]);
  }), (n.makeJQueryPlugin = function(e) {
    (e = e || t.jQuery) &&
      (
        (i = e),
        (i.fn.imagesLoaded = function(t, e) {
          return new n(this, t, e).jqDeferred.promise(i(this));
        })
      );
  }), n.makeJQueryPlugin(), n;
}); /*! This file is auto-generated */
/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!(function(t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("jquery")))
      : (t.jQueryBridget = e(t, t.jQuery));
})(window, function(t, e) {
  "use strict";
  function i(i, r, a) {
    function h(t, e, n) {
      var o,
        r = "$()." + i + '("' + e + '")';
      return t.each(function(t, h) {
        var u = a.data(h, i);
        if (!u)
          return void s(i + " not initialized. Cannot call methods, i.e. " + r);
        var d = u[e];
        if (!d || "_" == e.charAt(0))
          return void s(r + " is not a valid method");
        var l = d.apply(u, n);
        o = void 0 === o ? l : o;
      }), void 0 !== o ? o : t;
    }
    function u(t, e) {
      t.each(function(t, n) {
        var o = a.data(n, i);
        o ? (o.option(e), o._init()) : ((o = new r(n, e)), a.data(n, i, o));
      });
    }
    (a = a || e || t.jQuery), a &&
      (
        r.prototype.option ||
          (r.prototype.option = function(t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function(t) {
          if ("string" == typeof t) {
            var e = o.call(arguments, 1);
            return h(this, t, e);
          }
          return u(this, t), this;
        }),
        n(a)
      );
  }
  function n(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var o = Array.prototype.slice,
    r = t.console,
    s =
      "undefined" == typeof r
        ? function() {}
        : function(t) {
            r.error(t);
          };
  return n(e || t.jQuery), i;
}), (function(t, e) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", e)
    : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
})("undefined" != typeof window ? window : this, function() {
  function t() {}
  var e = t.prototype;
  return (e.on = function(t, e) {
    if (t && e) {
      var i = (this._events = this._events || {}),
        n = (i[t] = i[t] || []);
      return -1 == n.indexOf(e) && n.push(e), this;
    }
  }), (e.once = function(t, e) {
    if (t && e) {
      this.on(t, e);
      var i = (this._onceEvents = this._onceEvents || {}),
        n = (i[t] = i[t] || {});
      return (n[e] = !0), this;
    }
  }), (e.off = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var n = i.indexOf(e);
      return -1 != n && i.splice(n, 1), this;
    }
  }), (e.emitEvent = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      (i = i.slice(0)), (e = e || []);
      for (
        var n = this._onceEvents && this._onceEvents[t], o = 0;
        o < i.length;
        o++
      ) {
        var r = i[o],
          s = n && n[r];
        s && (this.off(t, r), delete n[r]), r.apply(this, e);
      }
      return this;
    }
  }), (e.allOff = function() {
    delete this._events, delete this._onceEvents;
  }), t;
}), (function(t, e) {
  "function" == typeof define && define.amd
    ? define("get-size/get-size", e)
    : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
})(window, function() {
  "use strict";
  function t(t) {
    var e = parseFloat(t),
      i = -1 == t.indexOf("%") && !isNaN(e);
    return i && e;
  }
  function e() {}
  function i() {
    for (
      var t = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        },
        e = 0;
      u > e;
      e++
    ) {
      var i = h[e];
      t[i] = 0;
    }
    return t;
  }
  function n(t) {
    var e = getComputedStyle(t);
    return e ||
      a(
        "Style returned " +
          e +
          ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
      ), e;
  }
  function o() {
    if (!d) {
      d = !0;
      var e = document.createElement("div");
      (e.style.width = "200px"), (e.style.padding =
        "1px 2px 3px 4px"), (e.style.borderStyle =
        "solid"), (e.style.borderWidth =
        "1px 2px 3px 4px"), (e.style.boxSizing = "border-box");
      var i = document.body || document.documentElement;
      i.appendChild(e);
      var o = n(e);
      (s =
        200 == Math.round(t(o.width))), (r.isBoxSizeOuter = s), i.removeChild(
        e
      );
    }
  }
  function r(e) {
    if (
      (
        o(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType
      )
    ) {
      var r = n(e);
      if ("none" == r.display) return i();
      var a = {};
      (a.width = e.offsetWidth), (a.height = e.offsetHeight);
      for (
        var d = (a.isBorderBox = "border-box" == r.boxSizing), l = 0;
        u > l;
        l++
      ) {
        var c = h[l],
          f = r[c],
          m = parseFloat(f);
        a[c] = isNaN(m) ? 0 : m;
      }
      var p = a.paddingLeft + a.paddingRight,
        g = a.paddingTop + a.paddingBottom,
        y = a.marginLeft + a.marginRight,
        v = a.marginTop + a.marginBottom,
        _ = a.borderLeftWidth + a.borderRightWidth,
        z = a.borderTopWidth + a.borderBottomWidth,
        E = d && s,
        b = t(r.width);
      b !== !1 && (a.width = b + (E ? 0 : p + _));
      var x = t(r.height);
      return x !== !1 && (a.height = x + (E ? 0 : g + z)), (a.innerWidth =
        a.width - (p + _)), (a.innerHeight =
        a.height - (g + z)), (a.outerWidth = a.width + y), (a.outerHeight =
        a.height + v), a;
    }
  }
  var s,
    a =
      "undefined" == typeof console
        ? e
        : function(t) {
            console.error(t);
          },
    h = [
      "paddingLeft",
      "paddingRight",
      "paddingTop",
      "paddingBottom",
      "marginLeft",
      "marginRight",
      "marginTop",
      "marginBottom",
      "borderLeftWidth",
      "borderRightWidth",
      "borderTopWidth",
      "borderBottomWidth"
    ],
    u = h.length,
    d = !1;
  return r;
}), (function(t, e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define("desandro-matches-selector/matches-selector", e)
    : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
})(window, function() {
  "use strict";
  var t = (function() {
    var t = window.Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";
    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var n = e[i],
        o = n + "MatchesSelector";
      if (t[o]) return o;
    }
  })();
  return function(e, i) {
    return e[t](i);
  };
}), (function(t, e) {
  "function" == typeof define && define.amd
    ? define(
        "fizzy-ui-utils/utils",
        ["desandro-matches-selector/matches-selector"],
        function(i) {
          return e(t, i);
        }
      )
    : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
})(window, function(t, e) {
  var i = {};
  (i.extend = function(t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  }), (i.modulo = function(t, e) {
    return (t % e + e) % e;
  });
  var n = Array.prototype.slice;
  (i.makeArray = function(t) {
    if (Array.isArray(t)) return t;
    if (null === t || void 0 === t) return [];
    var e = "object" == typeof t && "number" == typeof t.length;
    return e ? n.call(t) : [t];
  }), (i.removeFrom = function(t, e) {
    var i = t.indexOf(e);
    -1 != i && t.splice(i, 1);
  }), (i.getParent = function(t, i) {
    for (; t.parentNode && t != document.body; )
      if (((t = t.parentNode), e(t, i))) return t;
  }), (i.getQueryElement = function(t) {
    return "string" == typeof t ? document.querySelector(t) : t;
  }), (i.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }), (i.filterFindElements = function(t, n) {
    t = i.makeArray(t);
    var o = [];
    return t.forEach(function(t) {
      if (t instanceof HTMLElement) {
        if (!n) return void o.push(t);
        e(t, n) && o.push(t);
        for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
          o.push(i[r]);
      }
    }), o;
  }), (i.debounceMethod = function(t, e, i) {
    i = i || 100;
    var n = t.prototype[e],
      o = e + "Timeout";
    t.prototype[e] = function() {
      var t = this[o];
      clearTimeout(t);
      var e = arguments,
        r = this;
      this[o] = setTimeout(function() {
        n.apply(r, e), delete r[o];
      }, i);
    };
  }), (i.docReady = function(t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e
      ? setTimeout(t)
      : document.addEventListener("DOMContentLoaded", t);
  }), (i.toDashed = function(t) {
    return t
      .replace(/(.)([A-Z])/g, function(t, e, i) {
        return e + "-" + i;
      })
      .toLowerCase();
  });
  var o = t.console;
  return (i.htmlInit = function(e, n) {
    i.docReady(function() {
      var r = i.toDashed(n),
        s = "data-" + r,
        a = document.querySelectorAll("[" + s + "]"),
        h = document.querySelectorAll(".js-" + r),
        u = i.makeArray(a).concat(i.makeArray(h)),
        d = s + "-options",
        l = t.jQuery;
      u.forEach(function(t) {
        var i,
          r = t.getAttribute(s) || t.getAttribute(d);
        try {
          i = r && JSON.parse(r);
        } catch (a) {
          return void (
            o && o.error("Error parsing " + s + " on " + t.className + ": " + a)
          );
        }
        var h = new e(t, i);
        l && l.data(t, n, h);
      });
    });
  }), i;
}), (function(t, e) {
  "function" == typeof define && define.amd
    ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e)
    : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
})(window, function(t, e) {
  "use strict";
  function i(t) {
    for (var e in t) return !1;
    return (e = null), !0;
  }
  function n(t, e) {
    t &&
      (
        (this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create()
      );
  }
  function o(t) {
    return t.replace(/([A-Z])/g, function(t) {
      return "-" + t.toLowerCase();
    });
  }
  var r = document.documentElement.style,
    s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
    a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
    h = {
      WebkitTransition: "webkitTransitionEnd",
      transition: "transitionend"
    }[s],
    u = {
      transform: a,
      transition: s,
      transitionDuration: s + "Duration",
      transitionProperty: s + "Property",
      transitionDelay: s + "Delay"
    },
    d = (n.prototype = Object.create(t.prototype));
  (d.constructor = n), (d._create = function() {
    (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({
      position: "absolute"
    });
  }), (d.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }), (d.getSize = function() {
    this.size = e(this.element);
  }), (d.css = function(t) {
    var e = this.element.style;
    for (var i in t) {
      var n = u[i] || i;
      e[n] = t[i];
    }
  }), (d.getPosition = function() {
    var t = getComputedStyle(this.element),
      e = this.layout._getOption("originLeft"),
      i = this.layout._getOption("originTop"),
      n = t[e ? "left" : "right"],
      o = t[i ? "top" : "bottom"],
      r = parseFloat(n),
      s = parseFloat(o),
      a = this.layout.size;
    -1 != n.indexOf("%") && (r = r / 100 * a.width), -1 != o.indexOf("%") &&
      (s = s / 100 * a.height), (r = isNaN(r) ? 0 : r), (s = isNaN(s)
      ? 0
      : s), (r -= e ? a.paddingLeft : a.paddingRight), (s -= i
      ? a.paddingTop
      : a.paddingBottom), (this.position.x = r), (this.position.y = s);
  }), (d.layoutPosition = function() {
    var t = this.layout.size,
      e = {},
      i = this.layout._getOption("originLeft"),
      n = this.layout._getOption("originTop"),
      o = i ? "paddingLeft" : "paddingRight",
      r = i ? "left" : "right",
      s = i ? "right" : "left",
      a = this.position.x + t[o];
    (e[r] = this.getXValue(a)), (e[s] = "");
    var h = n ? "paddingTop" : "paddingBottom",
      u = n ? "top" : "bottom",
      d = n ? "bottom" : "top",
      l = this.position.y + t[h];
    (e[u] = this.getYValue(l)), (e[d] = ""), this.css(
      e
    ), this.emitEvent("layout", [this]);
  }), (d.getXValue = function(t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && !e
      ? t / this.layout.size.width * 100 + "%"
      : t + "px";
  }), (d.getYValue = function(t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && e
      ? t / this.layout.size.height * 100 + "%"
      : t + "px";
  }), (d._transitionTo = function(t, e) {
    this.getPosition();
    var i = this.position.x,
      n = this.position.y,
      o = t == this.position.x && e == this.position.y;
    if ((this.setPosition(t, e), o && !this.isTransitioning))
      return void this.layoutPosition();
    var r = t - i,
      s = e - n,
      a = {};
    (a.transform = this.getTranslate(r, s)), this.transition({
      to: a,
      onTransitionEnd: { transform: this.layoutPosition },
      isCleaning: !0
    });
  }), (d.getTranslate = function(t, e) {
    var i = this.layout._getOption("originLeft"),
      n = this.layout._getOption("originTop");
    return (t = i ? t : -t), (e = n ? e : -e), "translate3d(" +
      t +
      "px, " +
      e +
      "px, 0)";
  }), (d.goTo = function(t, e) {
    this.setPosition(t, e), this.layoutPosition();
  }), (d.moveTo = d._transitionTo), (d.setPosition = function(t, e) {
    (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
  }), (d._nonTransition = function(t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);
    for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
  }), (d.transition = function(t) {
    if (!parseFloat(this.layout.options.transitionDuration))
      return void this._nonTransition(t);
    var e = this._transn;
    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
    for (i in t.to)
      (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
    if (t.from) {
      this.css(t.from);
      var n = this.element.offsetHeight;
      n = null;
    }
    this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
  });
  var l = "opacity," + o(a);
  (d.enableTransition = function() {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;
      (t = "number" == typeof t ? t + "ms" : t), this.css({
        transitionProperty: l,
        transitionDuration: t,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(h, this, !1);
    }
  }), (d.onwebkitTransitionEnd = function(t) {
    this.ontransitionend(t);
  }), (d.onotransitionend = function(t) {
    this.ontransitionend(t);
  });
  var c = { "-webkit-transform": "transform" };
  (d.ontransitionend = function(t) {
    if (t.target === this.element) {
      var e = this._transn,
        n = c[t.propertyName] || t.propertyName;
      if (
        (
          delete e.ingProperties[n],
          i(e.ingProperties) && this.disableTransition(),
          n in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
          n in e.onEnd
        )
      ) {
        var o = e.onEnd[n];
        o.call(this), delete e.onEnd[n];
      }
      this.emitEvent("transitionEnd", [this]);
    }
  }), (d.disableTransition = function() {
    this.removeTransitionStyles(), this.element.removeEventListener(
      h,
      this,
      !1
    ), (this.isTransitioning = !1);
  }), (d._removeStyles = function(t) {
    var e = {};
    for (var i in t) e[i] = "";
    this.css(e);
  });
  var f = {
    transitionProperty: "",
    transitionDuration: "",
    transitionDelay: ""
  };
  return (d.removeTransitionStyles = function() {
    this.css(f);
  }), (d.stagger = function(t) {
    (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
  }), (d.removeElem = function() {
    this.element.parentNode.removeChild(this.element), this.css({
      display: ""
    }), this.emitEvent("remove", [this]);
  }), (d.remove = function() {
    return s && parseFloat(this.layout.options.transitionDuration)
      ? (
          this.once("transitionEnd", function() {
            this.removeElem();
          }),
          void this.hide()
        )
      : void this.removeElem();
  }), (d.reveal = function() {
    delete this.isHidden, this.css({ display: "" });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("visibleStyle");
    (e[i] = this.onRevealTransitionEnd), this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    });
  }), (d.onRevealTransitionEnd = function() {
    this.isHidden || this.emitEvent("reveal");
  }), (d.getHideRevealTransitionEndProperty = function(t) {
    var e = this.layout.options[t];
    if (e.opacity) return "opacity";
    for (var i in e) return i;
  }), (d.hide = function() {
    (this.isHidden = !0), this.css({ display: "" });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("hiddenStyle");
    (e[i] = this.onHideTransitionEnd), this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    });
  }), (d.onHideTransitionEnd = function() {
    this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
  }), (d.destroy = function() {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    });
  }), n;
}), (function(t, e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(
        "outlayer/outlayer",
        [
          "ev-emitter/ev-emitter",
          "get-size/get-size",
          "fizzy-ui-utils/utils",
          "./item"
        ],
        function(i, n, o, r) {
          return e(t, i, n, o, r);
        }
      )
    : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
})(window, function(t, e, i, n, o) {
  "use strict";
  function r(t, e) {
    var i = n.getQueryElement(t);
    if (!i)
      return void (
        h &&
        h.error(
          "Bad element for " + this.constructor.namespace + ": " + (i || t)
        )
      );
    (this.element = i), u && (this.$element = u(this.element)), (this.options = n.extend({}, this.constructor.defaults)), this.option(e);
    var o = ++l;
    (this.element.outlayerGUID = o), (c[o] = this), this._create();
    var r = this._getOption("initLayout");
    r && this.layout();
  }
  function s(t) {
    function e() {
      t.apply(this, arguments);
    }
    return (e.prototype = Object.create(
      t.prototype
    )), (e.prototype.constructor = e), e;
  }
  function a(t) {
    if ("number" == typeof t) return t;
    var e = t.match(/(^\d*\.?\d*)(\w*)/),
      i = e && e[1],
      n = e && e[2];
    if (!i.length) return 0;
    i = parseFloat(i);
    var o = m[n] || 1;
    return i * o;
  }
  var h = t.console,
    u = t.jQuery,
    d = function() {},
    l = 0,
    c = {};
  (r.namespace =
    "outlayer"), (r.Item = o), (r.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } });
  var f = r.prototype;
  n.extend(f, e.prototype), (f.option = function(t) {
    n.extend(this.options, t);
  }), (f._getOption = function(t) {
    var e = this.constructor.compatOptions[t];
    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
  }), (r.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }), (f._create = function() {
    this.reloadItems(), (this.stamps = []), this.stamp(
      this.options.stamp
    ), n.extend(this.element.style, this.options.containerStyle);
    var t = this._getOption("resize");
    t && this.bindResize();
  }), (f.reloadItems = function() {
    this.items = this._itemize(this.element.children);
  }), (f._itemize = function(t) {
    for (
      var e = this._filterFindItemElements(t),
        i = this.constructor.Item,
        n = [],
        o = 0;
      o < e.length;
      o++
    ) {
      var r = e[o],
        s = new i(r, this);
      n.push(s);
    }
    return n;
  }), (f._filterFindItemElements = function(t) {
    return n.filterFindElements(t, this.options.itemSelector);
  }), (f.getItemElements = function() {
    return this.items.map(function(t) {
      return t.element;
    });
  }), (f.layout = function() {
    this._resetLayout(), this._manageStamps();
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    this.layoutItems(this.items, e), (this._isLayoutInited = !0);
  }), (f._init = f.layout), (f._resetLayout = function() {
    this.getSize();
  }), (f.getSize = function() {
    this.size = i(this.element);
  }), (f._getMeasurement = function(t, e) {
    var n,
      o = this.options[t];
    o
      ? (
          "string" == typeof o
            ? (n = this.element.querySelector(o))
            : o instanceof HTMLElement && (n = o),
          (this[t] = n ? i(n)[e] : o)
        )
      : (this[t] = 0);
  }), (f.layoutItems = function(t, e) {
    (t = this._getItemsForLayout(t)), this._layoutItems(
      t,
      e
    ), this._postLayout();
  }), (f._getItemsForLayout = function(t) {
    return t.filter(function(t) {
      return !t.isIgnored;
    });
  }), (f._layoutItems = function(t, e) {
    if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
      var i = [];
      t.forEach(function(t) {
        var n = this._getItemLayoutPosition(t);
        (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
      }, this), this._processLayoutQueue(i);
    }
  }), (f._getItemLayoutPosition = function() {
    return { x: 0, y: 0 };
  }), (f._processLayoutQueue = function(t) {
    this.updateStagger(), t.forEach(function(t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e);
    }, this);
  }), (f.updateStagger = function() {
    var t = this.options.stagger;
    return null === t || void 0 === t
      ? void (this.stagger = 0)
      : ((this.stagger = a(t)), this.stagger);
  }), (f._positionItem = function(t, e, i, n, o) {
    n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
  }), (f._postLayout = function() {
    this.resizeContainer();
  }), (f.resizeContainer = function() {
    var t = this._getOption("resizeContainer");
    if (t) {
      var e = this._getContainerSize();
      e &&
        (
          this._setContainerMeasure(e.width, !0),
          this._setContainerMeasure(e.height, !1)
        );
    }
  }), (f._getContainerSize = d), (f._setContainerMeasure = function(t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox &&
        (t += e
          ? i.paddingLeft +
            i.paddingRight +
            i.borderLeftWidth +
            i.borderRightWidth
          : i.paddingBottom +
            i.paddingTop +
            i.borderTopWidth +
            i.borderBottomWidth), (t = Math.max(t, 0)), (this.element.style[
        e ? "width" : "height"
      ] =
        t + "px");
    }
  }), (f._emitCompleteOnItems = function(t, e) {
    function i() {
      o.dispatchEvent(t + "Complete", null, [e]);
    }
    function n() {
      s++, s == r && i();
    }
    var o = this,
      r = e.length;
    if (!e || !r) return void i();
    var s = 0;
    e.forEach(function(e) {
      e.once(t, n);
    });
  }), (f.dispatchEvent = function(t, e, i) {
    var n = e ? [e].concat(i) : i;
    if ((this.emitEvent(t, n), u))
      if (((this.$element = this.$element || u(this.element)), e)) {
        var o = u.Event(e);
        (o.type = t), this.$element.trigger(o, i);
      } else this.$element.trigger(t, i);
  }), (f.ignore = function(t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0);
  }), (f.unignore = function(t) {
    var e = this.getItem(t);
    e && delete e.isIgnored;
  }), (f.stamp = function(t) {
    (t = this._find(t)), t &&
      ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
  }), (f.unstamp = function(t) {
    (t = this._find(t)), t &&
      t.forEach(function(t) {
        n.removeFrom(this.stamps, t), this.unignore(t);
      }, this);
  }), (f._find = function(t) {
    return t
      ? (
          "string" == typeof t && (t = this.element.querySelectorAll(t)),
          (t = n.makeArray(t))
        )
      : void 0;
  }), (f._manageStamps = function() {
    this.stamps &&
      this.stamps.length &&
      (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
  }), (f._getBoundingRect = function() {
    var t = this.element.getBoundingClientRect(),
      e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    };
  }), (f._manageStamp = d), (f._getElementOffset = function(t) {
    var e = t.getBoundingClientRect(),
      n = this._boundingRect,
      o = i(t),
      r = {
        left: e.left - n.left - o.marginLeft,
        top: e.top - n.top - o.marginTop,
        right: n.right - e.right - o.marginRight,
        bottom: n.bottom - e.bottom - o.marginBottom
      };
    return r;
  }), (f.handleEvent = n.handleEvent), (f.bindResize = function() {
    t.addEventListener("resize", this), (this.isResizeBound = !0);
  }), (f.unbindResize = function() {
    t.removeEventListener("resize", this), (this.isResizeBound = !1);
  }), (f.onresize = function() {
    this.resize();
  }), n.debounceMethod(r, "onresize", 100), (f.resize = function() {
    this.isResizeBound && this.needsResizeLayout() && this.layout();
  }), (f.needsResizeLayout = function() {
    var t = i(this.element),
      e = this.size && t;
    return e && t.innerWidth !== this.size.innerWidth;
  }), (f.addItems = function(t) {
    var e = this._itemize(t);
    return e.length && (this.items = this.items.concat(e)), e;
  }), (f.appended = function(t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e));
  }), (f.prepended = function(t) {
    var e = this._itemize(t);
    if (e.length) {
      var i = this.items.slice(0);
      (this.items = e.concat(
        i
      )), this._resetLayout(), this._manageStamps(), this.layoutItems(
        e,
        !0
      ), this.reveal(e), this.layoutItems(i);
    }
  }), (f.reveal = function(t) {
    if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
      var e = this.updateStagger();
      t.forEach(function(t, i) {
        t.stagger(i * e), t.reveal();
      });
    }
  }), (f.hide = function(t) {
    if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
      var e = this.updateStagger();
      t.forEach(function(t, i) {
        t.stagger(i * e), t.hide();
      });
    }
  }), (f.revealItemElements = function(t) {
    var e = this.getItems(t);
    this.reveal(e);
  }), (f.hideItemElements = function(t) {
    var e = this.getItems(t);
    this.hide(e);
  }), (f.getItem = function(t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];
      if (i.element == t) return i;
    }
  }), (f.getItems = function(t) {
    t = n.makeArray(t);
    var e = [];
    return t.forEach(function(t) {
      var i = this.getItem(t);
      i && e.push(i);
    }, this), e;
  }), (f.remove = function(t) {
    var e = this.getItems(t);
    this._emitCompleteOnItems("remove", e), e &&
      e.length &&
      e.forEach(function(t) {
        t.remove(), n.removeFrom(this.items, t);
      }, this);
  }), (f.destroy = function() {
    var t = this.element.style;
    (t.height = ""), (t.position = ""), (t.width =
      ""), this.items.forEach(function(t) {
      t.destroy();
    }), this.unbindResize();
    var e = this.element.outlayerGUID;
    delete c[e], delete this.element.outlayerGUID, u &&
      u.removeData(this.element, this.constructor.namespace);
  }), (r.data = function(t) {
    t = n.getQueryElement(t);
    var e = t && t.outlayerGUID;
    return e && c[e];
  }), (r.create = function(t, e) {
    var i = s(r);
    return (i.defaults = n.extend({}, r.defaults)), n.extend(
      i.defaults,
      e
    ), (i.compatOptions = n.extend(
      {},
      r.compatOptions
    )), (i.namespace = t), (i.data = r.data), (i.Item = s(o)), n.htmlInit(
      i,
      t
    ), u && u.bridget && u.bridget(t, i), i;
  });
  var m = { ms: 1, s: 1e3 };
  return (r.Item = o), r;
}), (function(t, e) {
  "function" == typeof define && define.amd
    ? define(["outlayer/outlayer", "get-size/get-size"], e)
    : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
})(window, function(t, e) {
  var i = t.create("masonry");
  i.compatOptions.fitWidth = "isFitWidth";
  var n = i.prototype;
  return (n._resetLayout = function() {
    this.getSize(), this._getMeasurement(
      "columnWidth",
      "outerWidth"
    ), this._getMeasurement(
      "gutter",
      "outerWidth"
    ), this.measureColumns(), (this.colYs = []);
    for (var t = 0; t < this.cols; t++) this.colYs.push(0);
    (this.maxY = 0), (this.horizontalColIndex = 0);
  }), (n.measureColumns = function() {
    if ((this.getContainerWidth(), !this.columnWidth)) {
      var t = this.items[0],
        i = t && t.element;
      this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
    }
    var n = (this.columnWidth += this.gutter),
      o = this.containerWidth + this.gutter,
      r = o / n,
      s = n - o % n,
      a = s && 1 > s ? "round" : "floor";
    (r = Math[a](r)), (this.cols = Math.max(r, 1));
  }), (n.getContainerWidth = function() {
    var t = this._getOption("fitWidth"),
      i = t ? this.element.parentNode : this.element,
      n = e(i);
    this.containerWidth = n && n.innerWidth;
  }), (n._getItemLayoutPosition = function(t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
      i = e && 1 > e ? "round" : "ceil",
      n = Math[i](t.size.outerWidth / this.columnWidth);
    n = Math.min(n, this.cols);
    for (
      var o = this.options.horizontalOrder
          ? "_getHorizontalColPosition"
          : "_getTopColPosition",
        r = this[o](n, t),
        s = { x: this.columnWidth * r.col, y: r.y },
        a = r.y + t.size.outerHeight,
        h = n + r.col,
        u = r.col;
      h > u;
      u++
    )
      this.colYs[u] = a;
    return s;
  }), (n._getTopColPosition = function(t) {
    var e = this._getTopColGroup(t),
      i = Math.min.apply(Math, e);
    return { col: e.indexOf(i), y: i };
  }), (n._getTopColGroup = function(t) {
    if (2 > t) return this.colYs;
    for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++)
      e[n] = this._getColGroupY(n, t);
    return e;
  }), (n._getColGroupY = function(t, e) {
    if (2 > e) return this.colYs[t];
    var i = this.colYs.slice(t, t + e);
    return Math.max.apply(Math, i);
  }), (n._getHorizontalColPosition = function(t, e) {
    var i = this.horizontalColIndex % this.cols,
      n = t > 1 && i + t > this.cols;
    i = n ? 0 : i;
    var o = e.size.outerWidth && e.size.outerHeight;
    return (this.horizontalColIndex = o ? i + t : this.horizontalColIndex), {
      col: i,
      y: this._getColGroupY(i, t)
    };
  }), (n._manageStamp = function(t) {
    var i = e(t),
      n = this._getElementOffset(t),
      o = this._getOption("originLeft"),
      r = o ? n.left : n.right,
      s = r + i.outerWidth,
      a = Math.floor(r / this.columnWidth);
    a = Math.max(0, a);
    var h = Math.floor(s / this.columnWidth);
    (h -= s % this.columnWidth ? 0 : 1), (h = Math.min(this.cols - 1, h));
    for (
      var u = this._getOption("originTop"),
        d = (u ? n.top : n.bottom) + i.outerHeight,
        l = a;
      h >= l;
      l++
    )
      this.colYs[l] = Math.max(d, this.colYs[l]);
  }), (n._getContainerSize = function() {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = { height: this.maxY };
    return this._getOption("fitWidth") &&
      (t.width = this._getContainerFitWidth()), t;
  }), (n._getContainerFitWidth = function() {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
    return (this.cols - t) * this.columnWidth - this.gutter;
  }), (n.needsResizeLayout = function() {
    var t = this.containerWidth;
    return this.getContainerWidth(), t != this.containerWidth;
  }), i;
});
var neeonObj = {
  stickyMenu: "1",
  siteLogo: '<a href="https://taj777news.com/" alt="Taj777 News"></a>',
  extraOffset: "70",
  extraOffsetMobile: "52",
  tickerTitleText: "TRENDING",
  tickerDelay: "5000",
  tickerSpeed: "0.1",
  tickerStyle: "reveal",
  rtl: "ltr",
  ajaxURL: "https://taj777news.com/wp-admin/admin-ajax.php",
  post_scroll_limit: "12",
  nonce: "63262c8bcc"
};
jQuery(document).ready(function($) {
  "use strict";
  $("a[href=\\#]").on("click", function(e) {
    e.preventDefault();
  });
  $("#myTab a").on("click", function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
  if ($(".scroll-wrap").length) {
    var progressPath = document.querySelector(".scroll-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function() {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - scroll * pathLength / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 10;
    jQuery(window).on("scroll", function() {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".scroll-wrap").addClass("active-scroll");
      } else {
        jQuery(".scroll-wrap").removeClass("active-scroll");
      }
    });
    jQuery(".scroll-wrap").on("click", function(event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return !1;
    });
  }
  $(".motion-effects").mousemove(function(e) {
    parallaxIt(e, ".motion-effects1", -100);
    parallaxIt(e, ".motion-effects2", -200);
    parallaxIt(e, ".motion-effects3", 100);
    parallaxIt(e, ".motion-effects4", 200);
    parallaxIt(e, ".motion-effects5", -50);
    parallaxIt(e, ".motion-effects6", 50);
  });
  function parallaxIt(e, target_class, movement) {
    let $wrap = $(e.target).parents(".motion-effects");
    if (!$wrap.length) return;
    let $target = $wrap.find(target_class);
    let relX = e.pageX - $wrap.offset().left;
    let relY = e.pageY - $wrap.offset().top;
    TweenMax.to($target, 1, {
      x: (relX - $wrap.width() / 2) / $wrap.width() * movement,
      y: (relY - $wrap.height() / 2) / $wrap.height() * movement
    });
  }
  if ($(".rt-parallax-bg-yes").length) {
    $(".rt-parallax-bg-yes").each(function() {
      var speed = $(this).data("speed");
      $(this).parallaxie({ speed: speed ? speed : 0.5, offset: 0 });
    });
  }
  if (typeof $.fn.theiaStickySidebar !== "undefined") {
    $(".has-sidebar .fixed-bar-coloum").theiaStickySidebar({
      additionalMarginTop: 80
    });
    $(".fixed-sidebar-addon .fixed-bar-coloum").theiaStickySidebar({
      additionalMarginTop: 160
    });
  }
  if (typeof $.fn.theiaStickySidebar !== "undefined") {
    $(".sticky-coloum-wrap .sticky-coloum-item").theiaStickySidebar({
      additionalMarginTop: 130
    });
  }
  $('a[href="#header-search"]').on("click", function(event) {
    event.preventDefault();
    $("#header-search").addClass("open");
    $('#header-search > form > input[type="search"]').focus();
  });
  $("#header-search, #header-search button.close").on("click keyup", function(
    event
  ) {
    if (
      event.target === this ||
      event.target.className === "close" ||
      event.keyCode === 27
    ) {
      $(this).removeClass("open");
    }
  });
  var galleryIsoContainer = $(".rt-masonry-grid");
  if (galleryIsoContainer.length) {
    var imageGallerIso = galleryIsoContainer.imagesLoaded(function() {
      imageGallerIso.isotope({
        itemSelector: ".rt-grid-item",
        percentPosition: !0,
        isAnimated: !0,
        masonry: { columnWidth: ".rt-grid-item" },
        animationOptions: { duration: 700, easing: "linear", queue: !1 }
      });
    });
  }
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
      $("body").addClass("not-top");
      $("body").removeClass("top");
    } else {
      $("body").addClass("top");
      $("body").removeClass("not-top");
    }
  });
  $(".btn-common").hover(
    function() {
      $(this).removeClass("rt-animation-out");
    },
    function() {
      $(this).addClass("rt-animation-out");
    }
  );
  $(document).on("click", ".print-share-button", function(e) {
    console.log();
    e.preventDefault();
    window.print();
    return !1;
  });
  $(".search-box-area").on("click", ".search-button, .search-close", function(
    event
  ) {
    event.preventDefault();
    if ($(".search-text").hasClass("active")) {
      $(".search-text, .search-close").removeClass("active");
    } else {
      $(".search-text, .search-close").addClass("active");
    }
    return !1;
  });
  var menuArea = $(".additional-menu-area");
  menuArea.on("click", ".side-menu-trigger", function(e) {
    e.preventDefault();
    var self = $(this);
    if (self.hasClass("side-menu-open")) {
      if (neeonObj.rtl == "rtl") {
        $(".sidenav").css("transform", "translateX(0%)");
      } else {
        $(".sidenav").css("transform", "translateX(0%)");
      }
      if (!menuArea.find("> .rt-cover").length) {
        menuArea.append("<div class='rt-cover'></div>");
      }
      self.removeClass("side-menu-open").addClass("side-menu-close");
    }
  });
  if (typeof $.fn.ticker == "function") {
    $("#rt-js-news").ticker({
      speed: neeonObj.tickerSpeed,
      debugMode: !0,
      titleText: neeonObj.tickerTitleText,
      displayType: neeonObj.tickerStyle,
      pauseOnItems: neeonObj.tickerDelay,
      direction: neeonObj.rtl
    });
  }
  function closeMenuArea() {
    var trigger = $(".side-menu-trigger", menuArea);
    trigger.removeClass("side-menu-close").addClass("side-menu-open");
    if (menuArea.find("> .rt-cover").length) {
      menuArea.find("> .rt-cover").remove();
    }
    if (neeonObj.rtl == "rtl") {
      $(".sidenav").css("transform", "translateX(100%)");
    } else {
      $(".sidenav").css("transform", "translateX(-100%)");
    }
  }
  menuArea.on("click", ".closebtn", function(e) {
    e.preventDefault();
    closeMenuArea();
  });
  $(document).on("click", ".rt-cover", function() {
    closeMenuArea();
  });
  var a = $(".offscreen-navigation .menu");
  if (a.length) {
    $(".menu-item-has-children").append("<span></span>");
    $(".page_item_has_children").append("<span></span>");
    a.children("li").addClass("menu-item-parent");
    $(".menu-item-has-children > span").on("click", function() {
      var _self = $(this),
        sub_menu = _self.parent().find(">.sub-menu");
      if (_self.hasClass("open")) {
        sub_menu.slideUp();
        _self.removeClass("open");
      } else {
        sub_menu.slideDown();
        _self.addClass("open");
      }
    });
    $(".page_item_has_children > span").on("click", function() {
      var _self = $(this),
        sub_menu = _self.parent().find(">.children");
      if (_self.hasClass("open")) {
        sub_menu.slideUp();
        _self.removeClass("open");
      } else {
        sub_menu.slideDown();
        _self.addClass("open");
      }
    });
  }
  $(".mean-bar .sidebarBtn").on("click", function(e) {
    e.preventDefault();
    if ($(".rt-slide-nav").is(":visible")) {
      $(".rt-slide-nav").slideUp();
      $("body").removeClass("slidemenuon");
    } else {
      $(".rt-slide-nav").slideDown();
      $("body").addClass("slidemenuon");
    }
  });
  $(window).on("scroll", function() {
    if ($("body").hasClass("sticky-header")) {
      var stickyPlaceHolder = $("#sticky-placeholder"),
        menu = $("#header-menu"),
        menuH = menu.outerHeight(),
        topHeaderH = $("#tophead").outerHeight() || 0,
        middleHeaderH = $("#header-middlebar").outerHeight() || 0,
        targrtScroll = topHeaderH + middleHeaderH;
      if ($(window).scrollTop() > targrtScroll) {
        menu.addClass("rt-sticky");
        stickyPlaceHolder.height(menuH);
      } else {
        menu.removeClass("rt-sticky");
        stickyPlaceHolder.height(0);
      }
      var stickyPlaceHolder = $("#mobile-sticky-placeholder"),
        menu = $(".mean-container"),
        menuH = menu.outerHeight(),
        topHeaderH = $("#mobile-top-fix").outerHeight() || 0,
        topAdminH = $("#wpadminbar").outerHeight() || 0,
        targrtScroll = topHeaderH + topAdminH;
      if ($(window).scrollTop() > targrtScroll) {
        menu.addClass("mobile-sticky");
        stickyPlaceHolder.height(menuH);
      } else {
        menu.removeClass("mobile-sticky");
        stickyPlaceHolder.height(0);
      }
    }
  });
  $("#shop-view-mode li a").on("click", function() {
    $("body").removeClass("product-grid-view").removeClass("product-list-view");
    if ($(this).closest("li").hasClass("list-view-nav")) {
      $("body").addClass("product-list-view");
      Cookies.set("shopview", "list");
    } else {
      $("body").addClass("product-grid-view");
      Cookies.remove("shopview");
    }
    return !1;
  });
  if (typeof $.fn.magnificPopup == "function") {
    $(".rt-video-popup").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1
    });
  }
  if (typeof $.fn.magnificPopup == "function") {
    if ($(".zoom-gallery").length) {
      $(".zoom-gallery").each(function() {
        $(this).magnificPopup({
          delegate: "a.neeon-popup-zoom",
          type: "image",
          gallery: { enabled: !0 }
        });
      });
    }
  }
  $("form.cart").on("change", "input.qty", function() {
    if (this.value === "0") this.value = "1";
    $(this.form).find("button[data-quantity]").data("quantity", this.value);
  });
  $(document.body).on("adding_to_cart", function() {
    $("a.added_to_cart").remove();
  });
  $(
    document
  ).on("click", ".quantity .input-group-btn .quantity-btn", function() {
    var $input = $(this).closest(".quantity").find(".input-text");
    if ($(this).hasClass("quantity-plus")) {
      $input.trigger("stepUp").trigger("change");
    }
    if ($(this).hasClass("quantity-minus")) {
      $input.trigger("stepDown").trigger("change");
    }
  });
  $(".quantity-btn").on("click", function() {
    $("button[name='update_cart']").prop("disabled", !1);
  });
  if ($(".header-shop-cart").length) {
    $(document).on("click", ".remove-cart-item", function() {
      var product_id = $(this).attr("data-product_id");
      var loader_url = $(this).attr("data-url");
      var main_parent = $(this).parents("li.menu-item.dropdown");
      var parent_li = $(this).parents("li.cart-item");
      parent_li.find(".remove-item-overlay").css({ display: "block" });
      $.ajax({
        type: "post",
        dataType: "json",
        url: neeonObj.ajaxURL,
        data: { action: "neeon_product_remove", product_id: product_id },
        success: function(data) {
          main_parent.html(data.mini_cart);
          $(document.body).trigger("wc_fragment_refresh");
        },
        error: function(xhr, status, error) {
          $(".header-shop-cart")
            .children("ul.minicart")
            .html(
              '<li class="cart-item"><p class="cart-update-pbm text-center">' +
                neeonObj.cart_update_pbm +
                "</p></li>"
            );
        }
      });
      return !1;
    });
  }
  $(document).on("click", ".rdtheme-wishlist-icon", function() {
    if (
      $(this).hasClass("rdtheme-add-to-wishlist") &&
      typeof yith_wcwl_l10n != "undefined"
    ) {
      var $obj = $(this),
        productId = $obj.data("product-id"),
        afterTitle = $obj.data("title-after");
      var data = {
        action: "neeon_add_to_wishlist",
        context: "frontend",
        nonce: $obj.data("nonce"),
        add_to_wishlist: productId
      };
      $.ajax({
        url: yith_wcwl_l10n.ajaxURL,
        type: "POST",
        data: data,
        success: function success(data) {
          if (data.result != "error") {
            $obj.removeClass("ajaxloading");
            $obj
              .find(".wishlist-icon")
              .removeClass("fa fa-heart")
              .addClass("fas fa-heart")
              .show();
            $obj
              .removeClass("rdtheme-add-to-wishlist")
              .addClass("rdtheme-remove-from-wishlist");
            $obj.find("span").html(afterTitle);
            $("body").trigger("rt_added_to_wishlist", [productId]);
            $("body").trigger("added_to_wishlist", [productId]);
          } else {
            console.log(data.message);
          }
        }
      });
      return !1;
    }
  });
});
function neeon_load_content_area_scripts($) {
  $(".rt-progress-circle").each(function() {
    var startcolor = $(this).data("rtstartcolor"),
      endcolor = $(this).data("rtendcolor"),
      num = $(this).data("rtnum"),
      speed = $(this).data("rtspeed"),
      suffix = $(this).data("rtsuffix");
    $(this)
      .circleProgress({
        value: 1,
        fill: endcolor,
        emptyFill: startcolor,
        thickness: 5,
        size: 140,
        animation: { duration: speed, easing: "circleProgressEasing" }
      })
      .on("circle-animation-progress", function(event, progress) {
        $(this).find(".rtin-num").html(Math.round(num * progress) + suffix);
      });
  });
}
function neeon_content_load_scripts() {
  var $ = jQuery;
  $("#preloader").fadeOut("slow", function() {
    $(this).remove();
  });
  var windowWidth = $(window).width();
  imageFunction();
  function imageFunction() {
    $("[data-bg-image]").each(function() {
      let img = $(this).data("bg-image");
      $(this).css({ backgroundImage: "url(" + img + ")" });
    });
  }
  var counterContainer = $(".counter");
  if (counterContainer.length) {
    counterContainer.counterUp({
      delay: counterContainer.data("rtsteps"),
      time: counterContainer.data("rtspeed")
    });
  }
  $(".rt-news-ticker").each(function() {
    var $this = $(this);
    var settings = $this.data("xld");
    if (typeof $.fn.ticker == "function") {
      $("#rt-news-ticker").ticker({
        speed: settings.speed,
        debugMode: !0,
        titleText: settings.titleText,
        displayType: settings.displayType,
        pauseOnItems: settings.pauseOnItems,
        direction: settings.direction
      });
    }
  });
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: !1,
    live: !0,
    scrollContainer: null
  });
  new WOW().init();
  $(".rt-swiper-slider").each(function() {
    var $this = $(this);
    var settings = $this.data("xld");
    var autoplayconditon = settings.auto;
    var $pagination = $this.find(".swiper-pagination")[0];
    var $next = $this.find(".swiper-button-next")[0];
    var $prev = $this.find(".swiper-button-prev")[0];
    var swiper = new Swiper(this, {
      autoplay: autoplayconditon,
      autoplayTimeout: settings.autoplay.delay,
      speed: settings.speed,
      loop: settings.loop,
      pauseOnMouseEnter: !0,
      slidesPerView: settings.slidesPerView,
      spaceBetween: settings.spaceBetween,
      centeredSlides: settings.centeredSlides,
      slidesPerGroup: settings.slidesPerGroup,
      pagination: { el: $pagination, clickable: !0, type: "bullets" },
      navigation: { nextEl: $next, prevEl: $prev },
      breakpoints: {
        0: { slidesPerView: settings.breakpoints["0"].slidesPerView },
        576: { slidesPerView: settings.breakpoints["576"].slidesPerView },
        768: { slidesPerView: settings.breakpoints["768"].slidesPerView },
        992: { slidesPerView: settings.breakpoints["992"].slidesPerView },
        1200: { slidesPerView: settings.breakpoints["1200"].slidesPerView },
        1600: { slidesPerView: settings.breakpoints["1600"].slidesPerView }
      }
    });
    swiper.init();
  });
  $(".rt-swiper-cat-slider").each(function() {
    var $this = $(this);
    var $_slider = $this.find(".swiper-container");
    var settings = $_slider.data("xld");
    var autoplayconditon = settings.auto;
    var $pagination = $this.find(".swiper-pagination")[0];
    var $next = $this.find(".swiper-button-next")[0];
    var $prev = $this.find(".swiper-button-prev")[0];
    var swiper = new Swiper($_slider[0], {
      autoplay: autoplayconditon,
      autoplayTimeout: settings.autoplay.delay,
      speed: settings.speed,
      loop: settings.loop,
      pauseOnMouseEnter: !0,
      slidesPerView: settings.slidesPerView,
      spaceBetween: settings.spaceBetween,
      centeredSlides: settings.centeredSlides,
      slidesPerGroup: settings.slidesPerGroup,
      pagination: { el: $pagination, clickable: !0, type: "bullets" },
      navigation: { nextEl: $next, prevEl: $prev },
      breakpoints: {
        0: { slidesPerView: settings.breakpoints["0"].slidesPerView },
        576: { slidesPerView: settings.breakpoints["576"].slidesPerView },
        768: { slidesPerView: settings.breakpoints["768"].slidesPerView },
        992: { slidesPerView: settings.breakpoints["992"].slidesPerView },
        1200: { slidesPerView: settings.breakpoints["1200"].slidesPerView },
        1600: { slidesPerView: settings.breakpoints["1600"].slidesPerView }
      }
    });
    swiper.init();
  });
  $(".rt-post-slider-grid").each(function() {
    var $this = $(this);
    var settings = $this.data("xld");
    var autoplayconditon = settings.auto;
    var $pagination = $this.find(".swiper-pagination")[0];
    var $next = $this.find(".swiper-button-next")[0];
    var $prev = $this.find(".swiper-button-prev")[0];
    var swiper = new Swiper(this, {
      spaceBetween: settings.spaceBetween,
      autoplay: autoplayconditon,
      autoplayTimeout: settings.autoplay.delay,
      slidesPerGroup: settings.slidesPerGroup,
      speed: settings.speed,
      loop: settings.loop,
      slidesPerColumnFill: "row",
      slideToClickedSlide: !0,
      slidesPerView: 3,
      slidesPerColumn: 3,
      pagination: { el: $pagination, clickable: !0, type: "bullets" },
      navigation: { nextEl: $next, prevEl: $prev },
      breakpoints: {
        0: { slidesPerView: 1, slidesPerColumn: 2, slidesPerColumnFill: "row" },
        576: {
          slidesPerView: 1,
          slidesPerColumn: 2,
          slidesPerColumnFill: "row"
        },
        768: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          slidesPerColumnFill: "row"
        },
        992: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          slidesPerColumnFill: "row"
        },
        1200: {
          slidesPerView: 3,
          slidesPerColumn: 3,
          slidesPerColumnFill: "row"
        }
      }
    });
  });
  $(".neeon-horizontal-slider").each(function() {
    var slider_wrap = $(this);
    var $pagination = slider_wrap.find(".swiper-pagination")[0];
    var $next = slider_wrap.find(".swiper-button-next")[0];
    var $prev = slider_wrap.find(".swiper-button-prev")[0];
    var target_thumb_slider = slider_wrap.find(".horizontal-thumb-slider");
    var thumb_slider = null;
    if (target_thumb_slider.length) {
      var settings = target_thumb_slider.data("xld");
      var autoplayconditon = settings.auto;
      thumb_slider = new Swiper(target_thumb_slider[0], {
        autoplay: autoplayconditon,
        autoplayTimeout: settings.autoplay.delay,
        speed: settings.speed,
        loop: settings.loop,
        spaceBetween: settings.spaceBetween,
        breakpoints: {
          0: { slidesPerView: settings.breakpoints["0"].slidesPerView },
          576: { slidesPerView: settings.breakpoints["576"].slidesPerView },
          768: { slidesPerView: settings.breakpoints["768"].slidesPerView },
          992: { slidesPerView: settings.breakpoints["992"].slidesPerView },
          1200: { slidesPerView: settings.breakpoints["1200"].slidesPerView }
        },
        pagination: { el: $pagination, type: "progressbar" }
      });
    }
    var target_slider = slider_wrap.find(".horizontal-slider");
    if (target_slider.length) {
      var settings = target_slider.data("xld");
      new Swiper(target_slider[0], {
        autoplay: settings && settings.auto,
        speed: settings && settings.speed,
        loop: settings && settings.loop,
        thumbs: { swiper: thumb_slider },
        navigation: { nextEl: $next, prevEl: $prev }
      });
    }
  });
  $(".neeon-vertical-slider").each(function() {
    var slider_wrap = $(this);
    var $pagination = slider_wrap.find(".swiper-pagination")[0];
    var target_thumb_slider = slider_wrap.find(".vertical-thumb-slider");
    var thumb_slider = null;
    if (target_thumb_slider.length) {
      var settings = target_thumb_slider.data("xld");
      var autoplayconditon = settings.auto;
      thumb_slider = new Swiper(target_thumb_slider[0], {
        autoplay: autoplayconditon,
        autoplayTimeout: settings.autoplay.delay,
        speed: settings.speed,
        loop: settings.loop,
        spaceBetween: settings.spaceBetween,
        breakpoints: {
          0: { slidesPerView: settings.breakpoints["0"].slidesPerView },
          576: { slidesPerView: settings.breakpoints["576"].slidesPerView },
          768: { slidesPerView: settings.breakpoints["768"].slidesPerView },
          992: {
            slidesPerView: settings.breakpoints["992"].slidesPerView,
            direction: "vertical"
          },
          1200: {
            slidesPerView: settings.breakpoints["1200"].slidesPerView,
            direction: "vertical"
          }
        },
        pagination: { el: $pagination, type: "progressbar" }
      });
    }
    var target_slider = slider_wrap.find(".vertical-slider");
    if (target_slider.length) {
      var settings = target_slider.data("xld");
      new Swiper(target_slider[0], {
        autoplay: settings && settings.auto,
        speed: settings && settings.speed,
        loop: settings && settings.loop,
        thumbs: { swiper: thumb_slider }
      });
    }
  });
}
(function($) {
  "use strict";
  $(window).on("load resize", function() {
    var wHeight = $(window).height();
    wHeight = wHeight - 50;
    $(".mean-nav > ul").css("max-height", wHeight + "px");
    $(window).on("elementor/frontend/init", function() {
      if (elementorFrontend.isEditMode()) {
        elementorFrontend.hooks.addAction(
          "frontend/element_ready/widget",
          function() {
            neeon_content_load_scripts();
          }
        );
      }
    });
  });
  $(window).on("load", function() {
    neeon_content_load_scripts();
  });
  $(".neeon-like").on("click", function(e) {
    var $element = $(this);
    if ($element.hasClass("unregistered")) {
      alert("You need to register to like this post");
      return;
    }
    var data = {
      action: "neeon_like",
      post_id: parseInt($element.data("id"), 10) || 0
    };
    $.ajax({
      method: "POST",
      url: neeonObj.ajaxURL,
      data: data,
      dataType: "json",
      beforeSend: function() {
        console.log(data);
      },
      success: function(res) {
        console.log(res);
        if (res.success === !0) {
          if (res.data.action == "unliked") {
            $element.removeClass("liked");
          } else if (res.data.action == "liked") {
            $element.addClass("liked");
          }
        } else {
          alert(res.data);
        }
      }
    });
  });
  $(".rt_ajax_tab a").on("click", function(e) {
    e.preventDefault();
    var cat_id = $(this).data("id");
    var args = $(this).parents().data("args");
    var layout = $(this).parents().data("layout");
    if (cat_id == "*") {
      cat_id = null;
    }
    var tab_content_id = $(this).closest(".rt_ajax_tab_section").next();
    $(".rt_ajax_tab a").removeClass("current");
    $(this).addClass("current");
    $.ajax({
      method: "POST",
      url: neeonObj.ajaxURL,
      data: {
        action: "rt_ajax_tab",
        cat_id: cat_id,
        layout: layout,
        args: args
      },
      dataType: "json",
      beforeSend: function() {
        tab_content_id.prepend(
          '<div class="preloader fa-3x"><i class="fas fa-spinner fa-spin"></i></div>'
        );
      },
      success: function(res) {
        if (res.success) {
          tab_content_id.html("");
          $(res.data).appendTo(tab_content_id).hide().fadeIn(500);
        }
      }
    });
  });
  if ($(".ajax-scroll-post").length > 0) {
    var onScrollPagi = !0;
    var current_post = 1;
    $(window).scroll(function() {
      if (!onScrollPagi) return;
      var bottomOffset = 1900;
      if (current_post >= neeonObj.post_scroll_limit) {
        onScrollPagi = !1;
        return;
      }
      if (
        $(document).scrollTop() > $(document).height() - bottomOffset &&
        onScrollPagi == !0
      ) {
        let cat_ids = $("input#neeon-cat-ids").val();
        $.ajax({
          url: neeonObj.ajaxURL,
          data: {
            action: "neeon_single_scroll_post",
            current_post: current_post,
            cat_ids
          },
          type: "POST",
          dataType: "json",
          beforeSend: function() {
            onScrollPagi = !1;
          },
          success: function(resp) {
            if (resp.success) {
              $(".ajax-scroll-post").append(resp.data.nextContent);
              history.pushState({}, null, resp.data.nextUrl);
              current_post++;
              onScrollPagi = !0;
            }
          }
        });
      }
    });
  }
  $(window).on("scroll", scrollFunction);
  function scrollFunction() {
    var target = $("#contentHolder");
    if (target.length > 0) {
      var contentHeight = target.outerHeight();
      var documentScrollTop = $(document).scrollTop();
      var targetScrollTop = target.offset().top;
      var scrolled = documentScrollTop - targetScrollTop;
      if (0 <= scrolled) {
        var scrolledPercentage = scrolled / contentHeight * 100;
        if (scrolledPercentage >= 0 && scrolledPercentage <= 100) {
          scrolledPercentage =
            scrolledPercentage >= 90 ? 100 : scrolledPercentage;
          $("#neeonBar").css({ width: scrolledPercentage + "%" });
        }
      } else {
        $("#neeonBar").css({ width: "0%" });
      }
    }
  }
  function revealPosts() {
    var posts = $(".single-grid-item:not(.reveal)");
    var i = 0;
    setInterval(function() {
      if (i >= posts.length) return !1;
      var el = posts[i];
      $(el).addClass("reveal");
      i++;
    }, 100);
  }
  var page = 2;
  $(document).on("click", "#loadMore", function(event) {
    event.preventDefault();
    jQuery("#loadMore").addClass("loading-lazy");
    var $container = jQuery(".loadmore-items");
    $.ajax({
      type: "GET",
      data: { action: "load_more_blog", numPosts: 2, pageNumber: page },
      dataType: "html",
      url: neeonObj.ajaxURL,
      success: function(html) {
        var $data = jQuery(html);
        if ($data.length) {
          $container.append(html);
          jQuery("#loadMore").removeClass("loading-lazy");
        } else {
          jQuery("#loadMore").html("No More Blog Post");
          jQuery("#loadMore").removeClass("loading-lazy");
        }
        setTimeout(function() {
          revealPosts();
        }, 500);
      }
    });
    page++;
  });
  var list_page = 2;
  $(document).on("click", "#listloadMore", function(event) {
    event.preventDefault();
    jQuery("#listloadMore").addClass("loading-lazy-list");
    var data_json = JSON.parse($(this).attr("data-loadmore"));
    var $container = $(this)
      .parents(".rt-post-list-default")
      .find(".listloadmore-items");
    $.ajax({
      type: "POST",
      data: {
        action: "load_more_list_one",
        numPosts: 2,
        pageNumber: list_page,
        query_data: data_json
      },
      url: neeonObj.ajaxURL,
      success: function(html) {
        var $data = jQuery(html);
        if ($data.length) {
          $container.append(html);
          jQuery("#listloadMore").removeClass("loading-lazy-list");
        } else {
          jQuery("#listloadMore").html("No More Blog Post");
          jQuery("#listloadMore").removeClass("loading-lazy-list");
        }
        setTimeout(function() {
          revealPosts();
        }, 500);
      }
    });
    list_page++;
  });
  var list_page = 2;
  $(document).on("click", "#listfiveloadMore", function(event) {
    event.preventDefault();
    jQuery("#listfiveloadMore").addClass("loading-lazy-list");
    var data_json = JSON.parse($(this).attr("data-loadmore"));
    var $container = $(this)
      .parents(".rt-post-list-default")
      .find(".list-five-loadmore-items");
    $.ajax({
      type: "POST",
      data: {
        action: "load_more_list_five",
        numPosts: 2,
        pageNumber: list_page,
        query_data: data_json
      },
      url: neeonObj.ajaxURL,
      success: function(html) {
        var $data = jQuery(html);
        if ($data.length) {
          $container.append(html);
          jQuery("#listfiveloadMore").removeClass("loading-lazy-list");
        } else {
          jQuery("#listfiveloadMore").html("No More Blog Post");
          jQuery("#listfiveloadMore").removeClass("loading-lazy-list");
        }
        setTimeout(function() {
          revealPosts();
        }, 500);
      }
    });
    list_page++;
  });
  var list_page = 2;
  $(document).on("click", "#gridoneloadMore", function(event) {
    event.preventDefault();
    jQuery("#gridoneloadMore").addClass("loading-lazy-list");
    var data_json = JSON.parse($(this).attr("data-loadmore"));
    var $container = $(this)
      .parents(".rt-post-grid-default")
      .find(".grid-one-loadmore-items");
    $.ajax({
      type: "POST",
      data: {
        action: "load_more_grid_one",
        numPosts: 2,
        pageNumber: list_page,
        query_data: data_json
      },
      url: neeonObj.ajaxURL,
      success: function(html) {
        var $data = jQuery(html);
        if ($data.length) {
          $container.append(html);
          jQuery("#gridoneloadMore").removeClass("loading-lazy-list");
        } else {
          jQuery("#gridoneloadMore").html("No More Blog Post");
          jQuery("#gridoneloadMore").removeClass("loading-lazy-list");
        }
        setTimeout(function() {
          revealPosts();
        }, 500);
      }
    });
    list_page++;
  });
})(jQuery);
