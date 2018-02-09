var widgetCSS = "" +
    "#twitter-widget-0{         box-shadow: 0 1px 1px 0 rgba(0,0,0,0.5);  }" +
    "body{font-family: 'Montserrat', sans-serif;}" +
    ".timeline-Body{background-color: #333; border-bottom: 5px solid $main-green;}" +
    ".timeline-Footer{background-color: #333; border-bottom: 5px solid $main-green;}" +
    ".timeline-Tweet-text{color: white;}" + 
    ".timeline-TweetList-tweet:hover{background-color: #62DD8B;}" +
    ".timeline-Tweet:hover{background-color: #444;}"

function paint(){
  var w = document.getElementById("twitter-widget-0").contentDocument;
  
  var s = document.createElement("style");
  s.innerHTML = widgetCSS;
  s.type = "text/css";
  w.head.appendChild(s);
}