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
    var styleObj;

    var sliderSettings = function(min, max, currentValue, height, width, background, borderProps, handleProps, margin) {
      $("#slider").slider({
        min: min,
        max: max,
        value: currentValue,
        change: function(event, ui) {
          showValue(ui.value);
        },
        slide: function(event, ui) {
          showValue(ui.value);
        },
        slidestop: function(event, ui) {
          showValue(ui.value);
        }
      });

      styleObj = {
        height: height,
        width: width,
        backgroundColor: background,
        border: {
          borderWidth: borderProps.thickness,
          bordrStyle: "solid",
          borderColor: borderProps.color
        },
        margin: margin,
        handle: {
          backgroundColor: handleProps.color,
          borderRadius: handleProps.borderRadius,
        },
      }

      styler("#sliderContainer", styleObj);
    }

    //todo - deal with border

    //Set slider's style by given values
    var styler = function(el, propObj) {
      Object.keys(propObj).map(function(key, index) {
        if (typeof(propObj[key]) !== "object") {
          $(el).css(key, propObj[key]);
        } else {
          Object.keys(propObj[key]).map(function(secKey, index) {
            if(key === "handle"){
              originalEl = el;
              el = ".ui-slider-handle";
            }
            $(el).css(secKey, propObj[key][secKey]);
          })
        }
      })
    };

    //Create then slider's DOM elements
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

    //Build the slider element and its children and appent them to a given element
    var buildSlider = function(element) {
      $(min).append(spanMin);
      $(max).append(spanMax);
      $(rangeContainer).append(min, sliderValue, max);
      $(sliderContainer).append(slider, rangeContainer);
      $(element).append(sliderContainer);
    }

    var init = function() {
      cacheDom();
      buildSlider("body");
      sliderSettings(1, 10, 1, "5vh", "50vh", "green", {
        "thickness": "3px",
        "color": "blue"
      }, {
        "color": "black",
        "borderRadius": "50px"
      }, "10px");
      getRange();
      showValue(0);
    }

    //Get the min and max values of the slider
    var getRange = function() {
      var minVal = $("#slider").slider("option", "min");
      var maxVal = $("#slider").slider("option", "max");
      $(spanMin).html(minVal);
      $(spanMax).html(maxVal);
    }

    //Shows the current slider's value
    var showValue = function(value) {
      $(sliderValue).html(value);
      return value;
    }

    //Return the current slider's value
    var getValue = function(value) {
      return value;
    }

    return {
      init: init

    };
  })();

  CustomSlider.init();

});
