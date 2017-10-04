$(document).ready(function() {

  var CustomSlider = (function() {

    var sliderContainer;
    var slider;
    var rangeContainer;
    var min;
    var max;
    var spanMin;
    var spanMax;
    var sliderValue;

    var sliderSettings = function() {
      $("#slider").slider({
        min: 0,
        max: 10,
        value: 0,
        change: function(event, ui) {
          showValue(ui.value);
        },
        slide: function(event, ui) {}
      });

      $("#slider").on("slidechange slide", function(event, ui) {
        showValue(ui.value);
      });

      $("#slider").on("slidestop", function(event, ui) {
        showValue(ui.value);
        var value = ui.value;
      });
    }

    var cacheDom = function() {
      sliderContainer = $("<div></div>").attr("id", "sliderContainer");
      slider = $("<div></div>").attr("id", "slider");
      rangeContainer = $("<div></div>").attr("id", "rangeContainer");
      min = $("<div></div>").attr("id", "min");
      sliderValue = $("<div></div>").attr("id", "sliderValue");
      max = $("<div></div>").attr("id", "max");
      spanMin = $("<span>...</span>");
      spanMax = $("<span>...</span>");
    }

    var buildSlider = function() {
      $(min).append(spanMin);
      $(max).append(spanMax);
      $(rangeContainer).append(min, sliderValue, max);
      $(sliderContainer).append(slider, rangeContainer);
      $("body").append(sliderContainer);
    }

    var init = function() {
      cacheDom();
      buildSlider();
      sliderSettings();
      getRange();
      showValue(0);
    }

    var getRange = function() {
      var minVal = $("#slider").slider("option", "min");
      var maxVal = $("#slider").slider("option", "max");
      $(spanMin).html(minVal);
      $(spanMax).html(maxVal);
    }

    var showValue = function(value) {
      $(sliderValue).html(value);
    }

    return {
      init: init

    };
  })();

  CustomSlider.init(); 

});
