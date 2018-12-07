<template>
  <v-app dark>
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <v-toolbar-title>&copyNUIT DE L'INFO 2018</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn @click="darkmod()" icon>
          <v-icon>brightness_3</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-container>
      <!-- <v-layout wrap> -->
        <div id="canvasContainer">
            <div id="map" class="top" style="width:600;height:500;"></div>
            <canvas id="drawing" width="600" height="500">Veuillez mettre à jour votre navigateur.</canvas>
        </div>
        <div id="drawingButtons">
          <div class="buttonsLine">
            <button type="button" id="draw">Draw</button>
            <button type="button" class="thicknessButton thicknessSmall" value="2"></button>
            <button type="button" class="thicknessButton thicknessMedium active" value="4"></button>
            <button type="button" class="thicknessButton thicknessLarge" value="8"></button>
            <button type="button" id="clear">Clear</button>
          </div>
          <div class="buttonsLine">
            <button type="button" class="colorButton red active" value="black"></button>
            <button type="button" class="colorButton black" value="red"></button>
            <button type="button" class="colorButton green" value="green"></button>
            <button type="button" class="colorButton blue" value="blue"></button>
            <button type="button" class="colorButton purple" value="purple"></button>
            <button type="button" class="colorButton pink" value="pink"></button>
            <button type="button" class="colorButton yellow" value="yellow"></button>
            <button type="button" class="colorButton orange" value="orange"></button>
            <button type="button" class="colorButton brown" value="brown"></button>
            <button type="button" class="colorButton gray" value="gray"></button>
          </div>
        </div>
      <!-- </v-layout> -->
    </v-container>
  </v-app>
</template>

<script>
import ListTodo from "../components/ListTodo";
import Toolbar from "../components/Toolbar";

export default {
  name: "TodoList",
  components: {
    ListTodo,
    Toolbar
  },
  data: () => ({
    list: [{ oui: "Foo" }, { oui: "Bar" }],
    mydark: true
  }),
  methods: {
    darkmod: function() {
      if (this.mydark) this.mydark = false;
      else this.mydark = true;
    }
  }
};
</script>
// <script type="text/javascript">
//   jQuery(function() {

//     /***********************/
//     /* Liste des variables */
//     /***********************/

//     var canvas = document.getElementById("drawing");
//     var context = canvas.getContext("2d");
//     var color = "red";
//     var thickness = 4;

//     /***********************/
//     /* Liste des fonctions */
//     /***********************/

//     function drawLine(line) {
//         context.beginPath();
//         context.moveTo(line.fromX, line.fromY);
//         context.lineTo(line.toX, line.toY);
//         context.strokeStyle = line.color;
//         context.lineWidth = line.thickness;
//         context.lineCap = 'round';
//         context.stroke();
//         context.closePath();
//     }

//     /************************/
//     /* Liste des évènements */
//     /************************/

//     jQuery("#drawing").on('mousedown', function(e) {

//         var prevX = e.clientX - canvas.offsetLeft + jQuery(window).scrollLeft();
//         var prevY = e.clientY - canvas.offsetTop + jQuery(window).scrollTop();

//         var line = {fromX:prevX, fromY:prevY, toX:(prevX + 0.1), toY:(prevY + 0.1), color:color, thickness:thickness};
//         drawLine(line);

//         jQuery("#drawing").on('mousemove', function(e) {

//             var currX = e.clientX - canvas.offsetLeft + jQuery(window).scrollLeft();
//             var currY = e.clientY - canvas.offsetTop + jQuery(window).scrollTop();

//             var line = {fromX:prevX, fromY:prevY, toX:currX, toY:currY, color:color, thickness:thickness};
//             drawLine(line);

//             prevX = currX;
//             prevY = currY;
//         });

//     });

//     jQuery("#drawing").on('touchstart', function(event) {

//         if (!event.originalEvent.touches[1]) {

//             event.preventDefault();
//             if (event.originalEvent.touches) e = event.originalEvent.touches[0];

//             var prevX = e.clientX - canvas.offsetLeft + jQuery(window).scrollLeft();
//             var prevY = e.clientY - canvas.offsetTop + jQuery(window).scrollTop();

//             var line = {fromX:prevX, fromY:prevY, toX:(prevX + 0.1), toY:(prevY + 0.1), color:color, thickness:thickness};
//             drawLine(line);

//             jQuery("#drawing").on('touchmove', function(e) {

//                 if (e.originalEvent.touches) e = e.originalEvent.touches[0];

//                 var currX = e.clientX - canvas.offsetLeft + jQuery(window).scrollLeft();
//                 var currY = e.clientY - canvas.offsetTop + jQuery(window).scrollTop();

//                 var line = {fromX:prevX, fromY:prevY, toX:currX, toY:currY, color:color, thickness:thickness};
//                 drawLine(line);

//                 prevX = currX;
//                 prevY = currY;
//             });
//         }

//     });

//     jQuery('#drawing').on('mouseup mouseleave', function() {
//         jQuery("#drawing").off("mousemove");
//     });

//     jQuery('#drawing').on('touchend', function() {
//         jQuery("#drawing").off("touchmove");
//     });

//     jQuery("#clear").click(function() {
//         context.clearRect(0, 0, canvas.width, canvas.height);
//     });

//     jQuery("#draw").click(function() {
//         jQuery(this).toggleClass('active');
//         jQuery('#canvas').toggleClass('top');
//         jQuery('#map').toggleClass('top');
//     });

//     jQuery(".thicknessButton").click(function() {
//         thickness = jQuery(this).val();
//         jQuery('.thicknessButton').removeClass('active');
//         jQuery(this).addClass('active');
//     });

//     jQuery(".colorButton").click(function() {
//         color = jQuery(this).val();
//         jQuery('.colorButton').removeClass('active');
//         jQuery(this).addClass('active');
//     });

//     function loadMap(location) {
//     var map = new google.maps.Map(document.getElementById('map'), {zoom: 8, center: location, disableDefaultUI: true});
//     var marker = new google.maps.Marker({position: location, map: map});
//     }

//     function maPosition(position) {
//         loadMap({lat: position.coords.latitude, lng: position.coords.longitude});
//     }

//     function initMap() {
//         loadMap({lat: 48.867, lng: 2.333});
//         if (navigator.geolocation)
//             navigator.geolocation.getCurrentPosition(maPosition);
//     }
//     initMap()
// });

// </script>

<style>
#canvasContainer
{
    position: relative;
    width: 600px;
    height: 500px;
    overflow: hidden;
    margin: 20px auto;
    border: 1px solid black;
    box-sizing: border-box;
    display: block;
}

#map
{
    width: 600px;
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}

#drawing
{
    width: 600px;
    height: 500px;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}

.top
{
    z-index: 10 !important;
}

.buttonsLine
{
    margin-bottom: 10px;
}

#drawingButtons
{
    display: block;
    text-align: center;
}

#drawingButtons button[type="button"]
{
    outline: 0;
    border: 2px solid white !important;
    background-color: #1C7BF0;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 40px;
    height: 40px;
    transition: 0.25s;
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    padding: 0 20px;
    text-align: center;
    transition: 0.25s;
}

#drawingButtons button[type="button"]:hover, button[type="button"].active
{
    border-color: black !important;
}

.colorButton
{
    width: 40px;
    border-radius: 50%;
}

.thicknessButton
{
    padding: 0;
    width: 40px;
    position: relative;
}

.thicknessSmall:after
{
    content: "";
    display: inline-block;
    border-radius: 50%;
    background-color: white;
    width: 4px;
    height: 4px;
    top: 50%;
    left: 50%;
    margin-top: -2px;
    margin-left: -2px;
}

.thicknessMedium:after
{
    content: "";
    display: inline-block;
    border-radius: 50%;
    background-color: white;
    width: 8px;
    height: 8px;
    top: 50%;
    left: 50%;
    margin-top: -4px;
    margin-left: -4px;
}

.thicknessLarge:after
{
    content: "";
    display: inline-block;
    border-radius: 50%;
    background-color: white;
    width: 12px;
    height: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -6px;
    margin-left: -6px;
}

.colorButton.black
{
    background-color: black;
}

.colorButton.red
{
    background-color: red;
}

.colorButton.green
{
    background-color: green;
}

.colorButton.blue
{
    background-color: blue;
}

.colorButton.purple
{
    background-color: purple;
}

.colorButton.pink
{
    background-color: pink;
}

.colorButton.yellow
{
    background-color: yellow;
}

.colorButton.orange
{
    background-color: orange;
}

.colorButton.brown
{
    background-color: brown;
}

.colorButton.gray
{
    background-color: gray;
}
</style>
