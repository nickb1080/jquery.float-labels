// Generated by CoffeeScript 1.6.3
(function($) {
  return $.fn.floatLabels = function(options) {
    var defaults, settings;
    if (options == null) {
      options = {};
    }
    defaults = {
      floatOn: "focus",
      activeClass: "label-active",
      filledClass: "label-filled"
    };
    settings = $.extend({}, defaults, options);
    return this.each(function(i, input) {
      var $input, $label;
      $input = $(input);
      $label = input.id ? $("[for='" + input.id + "']") : $("[for='" + input.name + "']");
      if (settings.floatOn === "focus") {
        $input.bind("focus", function() {
          return $label.addClass(settings.activeClass);
        }).bind("blur", function() {
          $label.removeClass(settings.activeClass);
          if (input.value.length > 0) {
            return $label.addClass(settings.filledClass);
          } else {
            return $label.removeClass(settings.filledClass);
          }
        }).trigger("blur");
      } else if (settings.floatOn === "entry") {
        $input.bind("focus", function() {
          if (this.value.length > 0) {
            return $label.addClass(settings.activeClass);
          }
        }).bind("blur", function() {
          if (this.value.length > 0) {
            return $label.addClass(settings.filledClass).removeClass(settings.activeClass);
          }
        }).bind("keyup", function() {
          if (this.value.length > 0) {
            return $label.addClass(settings.activeClass);
          } else {
            return $label.removeClass(settings.activeClass + ' ' + settings.filledClass);
          }
        }).trigger("blur");
      }
      return this;
    });
  };
})(jQuery);