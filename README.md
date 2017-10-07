# customSliderTemplate
Custom your very own slider, based on jquery-ui's slider.

# In the HTML
Place the custonSlider.css or custonSliderMin.css file inside a "<link>" tag, just beneath the jquery-ui "<link>" tag.
Afterwards, place the custonSlider.js or custonSliderMin.js file inside a "<script>" tag, just beneath the jquery and jquery-ui "<script>" tag.

For Example:
"<head>
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="plugins/customSliderMin.css">
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"</script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"</script>
  <script src="plugins/CustomSliderMin.js"></script>
</head>"

# In the JS
First, define the element you want the slider to append to.

For example:

var element = "body"; 

Then, define the slider's settings like this:

var settings = {

  "valuesProps": {
  
    "min": integer,
    
    "max": integer,
    
    "currentValue": integer,
    
    "show": boolean
    
  },
  
  "height": string,
  
  "width": string,
  
  "backgroundColor": string,
  
  "borderProps": {
  
    "borderThickness": string,
    
    "sliderBorderColor": string,
    
    "sliderBorderRadius": string
    
  },
  
  "handleProps": {
  
    "handleColor": string,
    
    "handleBorderRadius": string
    
  },
  
  "valueStyle": {
  
    "valuesColor": string,
    
    "fontFamily": string
    
  }
  
};

To initiate your settings, run CustomSlider.init(element, settings);

You can get the range you set by running the CustomSlider.getRange() function.

You can get the current value of the slider's handle by running the CustomSlider.getValue() function.

# The options
"valuesProps" - set the range and starting values of the slider->

"min" - the minimum value.

"max" - the maximum value.

"currentValue" - the starting value.

"show" - show or hide the range and value indicator.


"height"- the slider's height.

"width"- the slider's width.

"backgroundColor"- the slider's background color.


"borderProps"- the slider's border properties->

"borderThickness"- the slider's border width.

"sliderBorderColor"- the slider's border color.

"sliderBorderRadius"- the slider's border radius.

 
"handleProps"-  set the handle's properties->

"handleColor"- the handle's color.

"handleBorderRadius"- the handle's border radius.


"valueStyle"- set the style of the range and value indicator-> 

"valuesColor"- the range and value indicator's font color.

"fontFamily"- the range and value indicator's font family.

  
Have a blast :)
