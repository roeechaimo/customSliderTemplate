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
  var minVal;
  var maxVal;

  var sliderSettings = function(valuesProps, height, width, background, borderProps, handleProps, valueStyle) {
    $("#slider").slider({
      min: valuesProps.min,
      max: valuesProps.max,
      value: valuesProps.currentValue,
      change: function(event, ui) {
        valuesProps.show ? showValue(ui.value) : getValue();
      },
      slide: function(event, ui) {
        valuesProps.show ? showValue(ui.value) : getValue();
      },
      slidestop: function(event, ui) {
        valuesProps.show ? showValue(ui.value) : getValue();
      }
    });

    minVal = valuesProps.min;
    maxVal = valuesProps.max;
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
        borderColor: borderProps.color,
        borderRadius: borderProps.borderRadius
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

  //Set slider's style on the DOM by given values
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
    spanMin = $("<span></span>");
    spanMax = $("<span></span>");
  }

  //Build the slider element and its children and appent them to a given element
  var buildSlider = function(element) {
    $(min).append(spanMin);
    $(max).append(spanMax);
    $(rangeContainer).append(min, sliderValue, max);
    $(sliderContainer).append(slider, rangeContainer);
    $(element).append(sliderContainer);
  }

  var init = function(elementToAppend, settings) {
    cacheDom();
    buildSlider(elementToAppend);
    sliderSettings({
      "min": settings.valuesProps.min,
      "max": settings.valuesProps.max,
      "currentValue": settings.valuesProps.currentValue,
      "show": settings.valuesProps.show
    }, settings.height, settings.width, settings.backgroundColor, {
      "thickness": settings.borderProps.borderThickness,
      "color": settings.borderProps.sliderBorderColor,
      "borderRadius": settings.borderProps.sliderBorderRadius
    }, {
      "color": settings.handleProps.handleColor,
      "borderRadius": settings.handleProps.handleBorderRadius
    }, {
      "color": settings.valueStyle.valuesColor,
      "fontFamily": settings.valueStyle.fontFamily
    });
    settings.valuesProps.show ? showRange() : "";
    settings.valuesProps.show ? showValue(value) : "";
  }

  //Get the min and max values of the slider
  var showRange = function() {
    minVal = $("#slider").slider("option", "min");
    maxVal = $("#slider").slider("option", "max");
    $(spanMin).html(minVal);
    $(spanMax).html(maxVal);
  }

  //Return the current slider's range
  var getRange = function() {
    return {
      "min": minVal,
      "max": maxVal
    };
  }

  //Shows the current slider's value
  var showValue = function(value) {
    $(sliderValue).html(value);
    return value;
  }

  //Return the current slider's value
  var getValue = function() {
    value = $("#slider").slider("option", "value");    
    return value;
  }

  return {
    init: init,
    getValue: getValue,
    getRange: getRange
  };

})();
