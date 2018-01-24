var mapimg;
var data;
var on = false;

var clat = 0;
var clon = 0;
var lon;
var lat;


var zoom = 1;
var cities;

function preload( ) {
    
    mapimg = loadImage('https://api.mapbox.com/styles/v1/smity81435/cj8lunct6677u2rpju0ltfal8/static/0.000000,-0.000000,0.00,0.00,0.00/1200x800?access_token=pk.eyJ1Ijoic21pdHk4MTQzNSIsImEiOiJjajg0dWx2Y2cwZThnMnFvNng2eWs4MHNoIn0.gaRKgdd2a8LnNMsiFJKlLw');
    cities=loadStrings('countriescenter.csv');
    //stats=loadStrings('epidemic.csv')
    /*
    earthquakes=loadStrings('')
    var url=("http://api.open-notify.org/iss-now.json");
    data=loadJSON(url);
    lon = map(data.iss_position.longitude,-180,180,0,1200);
    lat = map(data.iss_position.latitude,-90,90,-0-800); */
    
}
    


function setup(data){
    
    createCanvas(1200,800);
    translate(width/2,height/2);
    imageMode(CENTER);
    image(mapimg,0,0);
    
    var cx = mercX(clon);
    var cy = mercY(clat);
    //var t=1;
    var x = mercX(lon)-cx;
    var y = mercY(lat)-cy;
    
    for(var i = 0; i < cities.length; i++) {
        var data = cities[i].split(','); 
        /*console.log(data);*/
        
        var lat = data[1];
        var lon = data[2];
        var name = data[3];
        var sickdeath = data[4];
        
        var x = mercX(lon)-cx;
        var y = mercY(lat)-cy;
        
        console.log(data);
        
        sickdeath=sqrt(1+sickdeath)/10;
        //var depth= data[3];
        //var mag= data[4];
        fill(0,255,0);
        stroke(0,255,0);
        ellipse(x,y,sickdeath,sickdeath);   
            
        }
    
    var x = mercX(lon)-cx;
    var y = mercY(lat)-cy;
    ellipse(x,y,8,8);
}
// MERCATOR LONGITUDE
function mercX(lon){
    lon = radians(lon);
    var a = (300/PI)*pow(2,zoom);
    var b = lon+PI;
    return a*b;
}
// MERCATOR LATITUDE
function mercY(lat){
    lat = radians(lat);
    var a = (300/PI)*pow(2,zoom);
    var b = tan(PI/4+lat/2);
    var c = PI - log(b);
    return a*c;
}
//DATE TIME GROUP & TEXT
function mousePressed(){
    
}

function draw(){

    
    rect(-1,770,1201,30);
    rect(-1,0,1201,30);
    fill(93,95,96);
    rect(395,0,290,30);
    
    fill(148,187,87);
    stroke(133,161,87);
    text("EPIDEMIC CASUALTIES BY COUNTRY 1970-2008",400,20);
    /*
    var m=month();
    var d=day();
    var y=year();
    var h=hour();
    var min=minute();
    var sec=second();
    fill(0,0,0);
    rect(0,0,150,70);
    
    //fill(random(0-255));
    textSize(25);
    fill(66,200,78,.7);
    */
    fill(98,96,93);
    text(m + '.' + d +'.' + y,400,770);
    /*
    text(h + ':' + min + ':' + sec, 20, 60);
    */
    
    
}





