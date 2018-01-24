//********************VARIABLES********************
var lightmapimg;
var darkmapimg;
//var mapimg=darkmapimg;
var data;
var on = false;
var dark = true;
var clat = 0;
var clon = 0;
var lon;
var lat;
var zoom = 1;
var cities;
var deathType = "SUICIDES";
var countries = []; //ARRAY
var numItems=194; //TOTAL NUMBER OF ENTRIES

/*class Bubbble(){
    lat:
    lon:
    name:
    epidemic:
    suicide:
    combat:
    homicide:
    flood:
    
    
}; */

//********************PRELOAD********************
function preload( ) {

    darkmapimg = loadImage('https://api.mapbox.com/styles/v1/smity81435/cj8lunct6677u2rpju0ltfal8/static/0.000000,-0.000000,0.00,0.00,0.00/1200x800?access_token=pk.eyJ1Ijoic21pdHk4MTQzNSIsImEiOiJjajg0dWx2Y2cwZThnMnFvNng2eWs4MHNoIn0.gaRKgdd2a8LnNMsiFJKlLw');

    lightmapimg = loadImage('https://api.mapbox.com/styles/v1/smity81435/cj84umun311pr2ro4xjgxkep7/static/0.0,-0.0,0.00,0.00,0.00/1200x800?access_token=pk.eyJ1Ijoic21pdHk4MTQzNSIsImEiOiJjajg0dWx2Y2cwZThnMnFvNng2eWs4MHNoIn0.gaRKgdd2a8LnNMsiFJKlLw');

    cities=loadStrings('countriescenter.csv');  
}
  

//********************SETUP********************
function setup(data){
    cursor(CROSS);
    createCanvas(1200,800);
    translate(width/2,height/2);
    imageMode(CENTER);
    loadMap();
    var cx = mercX(clon);
    var cy = mercY(clat);
    var x = mercX(lon)-cx;
    var y = mercY(lat)-cy;
    
    for(var i = 0; i < cities.length; i++) {
        var data = cities[i].split(',');
        var lat = data[0];
        var lon = data[1];
        var name = data[2];
        var eDeath = data[3];
        var sDeath = data[4];
        var hDeath = data[6];
        var fDeath = data[7];
        var popul = data[8];
        var cDeath = data[9];
        var x = mercX(lon)-cx;
        var y = mercY(lat)-cy;
        countries.push(new Country(name,lat,lon,eDeath,sDeath,cDeath,hDeath,fDeath,popul,x,y));
        }
        deathVar=4;
        
        for(var i = 0; i < numItems; i++) {
            countries[i].display(deathVar); 
        }
}

//********************BUTTON ACTIONS********************
function mousePressed(){
    
    //********************EPIDEMIC BUTTON********************
    if(mouseX > (width-300) && mouseX < (width-210) && mouseY > (height-80) && mouseY < (height-50)){
        loadMap();
        translate(width/2,height/2);
        imageMode(CENTER);
        loadMap();
        deathType="EPIDEMIC";
        deathVar=3;
        var cx = mercX(clon);
        var cy = mercY(clat);
        //var t=1;
        var x = mercX(lon)-cx;
        var y = mercY(lat)-cy;

        for(var i = 0; i < numItems; i++) {
                    countries[i].display(deathVar); 
        }      
    }
    
    //********************SUICIDES BUTTON********************
    if(mouseX > (width-700) && mouseX < (width-610) && mouseY > (height-80) && mouseY < (height-50)){
        translate(width/2,height/2);
        imageMode(CENTER);
        loadMap();
        deathType= "SUICIDES";
        deathVar=4;
        var cx = mercX(clon);
        var cy = mercY(clat);
        var x = mercX(lon)-cx;
        var y = mercY(lat)-cy;

        for(var i = 0; i < numItems; i++) {
            countries[i].display(deathVar); 
        }  
    }
    
        //********************COMBAT BUTTON********************
    if(mouseX > (width-500) && mouseX < (width-410) && mouseY > (height-80) && mouseY < (height-50)){
        translate(width/2,height/2);
        imageMode(CENTER);
        loadMap();
        deathType="COMBAT";
        deathVar=9;
        var cx = mercX(clon);
        var cy = mercY(clat);
        var x = mercX(lon)-cx;
        var y = mercY(lat)-cy;

        for(var i = 0; i < numItems; i++) {
            countries[i].display(deathVar); 
        }
  
    }
    
    //********************HOMICIDES BUTTON********************
    if(mouseX > (width-600) && mouseX < (width-510) && mouseY > (height-80) && mouseY < (height-50)){
        translate(width/2,height/2);
        imageMode(CENTER);
        loadMap();
        deathType="HOMICIDES";
        deathVar=6;
        var cx = mercX(clon);
        var cy = mercY(clat);
        var x = mercX(lon)-cx;
        var y = mercY(lat)-cy;

        for(var i = 0; i < numItems; i++) {
                    countries[i].display(deathVar); 
        }    
    }
    

    
    //********************FLOODS BUTTON********************
    if(mouseX > (width-400) && mouseX < (width-310) && mouseY > (height-80) && mouseY < (height-50)){
        translate(width/2,height/2);
        imageMode(CENTER);
        loadMap();
        deathType="FLOODS";
        deathVar=7;
        var cx = mercX(clon);
        var cy = mercY(clat);
        var x = mercX(lon)-cx;
        var y = mercY(lat)-cy;

        for(var i = 0; i < numItems; i++) {
            countries[i].display(deathVar); 
        }
        
    }
    
  
    //********************LIGHT DARK TOGGLE********************
    if(mouseX > (width-100) && mouseX < (width-10) && mouseY > (height-80) && mouseY < (height-50)){
        
        if(!dark){
            translate(width/2,height/2);
            imageMode(CENTER);
            image(darkmapimg,0,0);
            dark=true;
            var cx = mercX(clon);
            var cy = mercY(clat);
            var x = mercX(lon)-cx;
            var y = mercY(lat)-cy;

            for(var i = 0; i < numItems; i++) {
                countries[i].display(deathVar); 
            }

        }else{
            translate(width/2,height/2);
            imageMode(CENTER);
            imageMode(CENTER);
            image(lightmapimg,0,0);
            dark=false;
            var cx = mercX(clon);
            var cy = mercY(clat);
            var x = mercX(lon)-cx;
            var y = mercY(lat)-cy;

            for(var i = 0; i < numItems; i++) {
                countries[i].display(deathVar); 
            }
            
        }
    }
}

//********************COUNTRIES FUNCTION********************
function Country(name,lat,lon,eDeath,sDeath,cDeath,hDeath,fDeath,popul,x,y){
    this.name=name;
    this.lat=lat;
    this.lon=lon;
    this.eDeath=eDeath;
    this.sDeath=sDeath;
    this.cDeath=cDeath;
    this.hDeath=hDeath;
    this.fDeath=fDeath;
    this.popul=popul;
    this.x=x;
    this.y=y;
    this.dia;
    this.deathIndex;
    
    this.display=function(deathVar){
        if(deathVar==3){
            this.dia=sqrt(eDeath)/2;
            this.col=fill(0,255,0,60);
            this.stro=stroke(255,255,255);
            this.deathIndex=eDeath;
        }else if(deathVar==4){
            this.dia=sqrt(sDeath)/2;
            this.col=fill(0,0,255,60);
            this.stro=stroke(255,255,255);
            this.deathIndex=sDeath;
        }else if(deathVar==6){
            this.dia=sqrt(hDeath)/2;
            this.col=fill(100,0,255,60);
            this.stro=stroke(255,255,255);
            this.deathIndex=hDeath;
        }else if(deathVar==7){
            this.dia=sqrt(fDeath)/2;
            this.col=fill(0,60,150,60);
            this.stro=stroke(255,255,255);
            this.deathIndex=fDeath;
        }else if(deathVar==9){
            this.dia=sqrt(cDeath)/2;
            this.col=fill(255,0,0,60);
            this.stro=stroke(255,255,255);
            this.deathIndex=cDeath;
        }
        ellipse(this.x,this.y,this.dia);  
    }
}

//********************LOAD BACKGROUND MAP********************



//********************LOAD BACKGROUND MAP********************
function loadMap(){
    if(dark){    
        image(darkmapimg,0,0);
    } else {
        image(lightmapimg,0, 0);
    }
    
}


//********************LONGITUDE ADJUSTMENT********************
function mercX(lon){
    lon = radians(lon);
    var a = (300/PI)*pow(2,zoom);
    var b = lon+PI;
    return a*b;
}


//********************LATITUDE ADJUSTMENT********************
function mercY(lat){
    lat = radians(lat);
    var a = (300/PI)*pow(2,zoom);
    var b = tan(PI/4+lat/2);
    var c = PI - log(b);
    return a*c;
}


//********************DRAW FUNCTION********************
function draw(){
     stroke(100,100,100);
            fill(25,26,26);
            //console.log("If statement approved!");
            rect(20,550,200,100);
            stroke(0);
            fill(100,100,100);
            textLeading(10);
            
            text("Country: ",30,565);
            text("Coordinates:",30,580);
            text("Lat: ",30,595);
            text("Lon: ",30,610);
            text("Population: ",30,625);
            text("Deaths: ",30,640);
           //console.log("gotcha");
            stroke(0,255,0);
    for(var i=0; i<numItems; i++){
        
        var d= dist(mouseX-600, mouseY-400, countries[i].x, countries[i].y);
        
        if(d<countries[i].dia/2){
            stroke(0,255,0);
            fill(25,26,26);
            //console.log("If statement approved!");
            rect(20,550,200,100);
            stroke(0);
            fill(0,255,0);
            textLeading(10);
            
            text("Country: "+countries[i].name,30,565);
            text("Coordinates:",30,580);
            text("Lat: "+countries[i].lat,30,595);
            text("Lon: "+countries[i].lon,30,610);
            text("Population: "+countries[i].popul,30,625);
            text("Deaths: "+countries[i].deathIndex,30,640);
           //console.log("gotcha");
            stroke(0,255,0);
        }
        else{
            //redraw();
        }
    }
//********************RECTANGLES********************    
    fill(25,26,26);
    stroke(100,100,100);
    rect(20,670,320,80);
    rect(10,40,100,20);
    rect(width-100,height-80,90,30);
    rect(width-300,height-80,90,30);
    rect(width-400,height-80,90,30);
    rect(width-500,height-80,90,30);
    rect(width-600,height-80,90,30);
    rect(width-700,height-80,90,30);
    rect(-1,770,1201,30);
    rect(-1,0,1201,30);
    fill(25,26,26);
    rect(450,0,300,30);
    fill(255,255,255);
    stroke(0,0,0);
//********************TEXT********************
    text(deathType, 30, 55);
    text("GLOBAL FATALITIES",550,20);
    text("DARK/LIGHT",width-90,height-60);
    text("SUICIDES",width-685,height-60);
    text("EPIDEMIC",width-285,height-60);
    text("FLOODS",width-380,height-60);
    text("COMBAT",width-480,height-60);
    text("HOMICIDES",width-590,height-60);
    text("0",40,height-60);
    text("500",60,height-60);
    text("1000",100,height-60);
    text("1500",150,height-60);
    text("10000",200,height-60);
    text("CASUALTIES", 260, height-80);
    text("CONFIRMED", 260, height-100);
    text("Data Sourced from the International Disaster Database http://www.emdat.be/database up to 2008 *Data for some countries not provided*", 30, height-10);
    text("Designed by Douglas S. Smith 2017", width-200,height-10);
    fill(100,100,100,60);
    stroke(255,255,255);
    ellipse(45,700,1,1);
    ellipse(70,700,10,10);
    ellipse(115,700,20,20);
    ellipse(165,700,30,30);
    ellipse(220,700,50,50);
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
    //text(m + '.' + d +'.' + y,400,770);
    /*
    text(h + ':' + min + ':' + sec, 20, 60);
    */
    
    
}

/* THIS SCRIPT WAS WRITTEN BY DOUGLAS SMITH FOR THE ATLAS 4519:SPACE COURSE IN THE UNIVERSITY OF COLORADO, FALL SEMESTER 2017*/



