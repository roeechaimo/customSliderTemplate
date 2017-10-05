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
    var value;

    var sliderSettings = function(valuesProps, height, width, background, borderProps, handleProps, valueStyle) {
      $("#slider").slider({
        min: valuesProps.min,
        max: valuesProps.max,
        value: valuesProps.currentValue,
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

      value = valuesProps.currentValue;

      heightToConvert = height;
      handleHeightNum = parseInt(heightToConvert, 10);
      handleHeightStr = heightToConvert.replace(/[0-9]/g, '');

      styleObj = {
        height: height,
        width: width,
        backgroundColor: background,
        border: {
          borderWidth: borderProps.thickness,
          bordrStyle: "solid",
          borderColor: borderProps.color
        },
        handle: {
          backgroundColor: handleProps.color,
          borderRadius: handleProps.borderRadius,
          height: "inherit",
          width: handleHeightNum + handleHeightStr
        },
        valueStyle: {
          color: valueStyle.color,
          fontFamily: valueStyle.fontFamily
        }
      }

      styler("#slider", styleObj);
    }

    //Set slider's style by given values
    var styler = function(el, propObj) {
      Object.keys(propObj).map(function(key, index) {
        if (typeof(propObj[key]) !== "object") {
          if (key === "height" || key === "width") {
            $(el).parent().css(key, propObj[key]);
          }
          $(el).css(key, propObj[key]);
        } else {
          Object.keys(propObj[key]).map(function(secKey, index) {
            if (key === "handle") {
              $(el + " span:first-child").css(secKey, propObj[key][secKey]);
            } else if (key === "valueStyle") {
              $(el).parent().css(secKey, propObj[key][secKey]);
            } else {
              $(el).css(secKey, propObj[key][secKey]);
            }
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
      sliderSettings({
        "min": 0,
        "max": 10,
        "currentValue": 1
      }, "3vh", "40vh", "green", {
        "thickness": "3px",
        "color": "blue"
      }, {
        "color": "black",
        "borderRadius": "50px"
      }, {
        "color": "yellow",
        "fontFamily": "serif"
      });
      getRange();
      showValue(value);
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
