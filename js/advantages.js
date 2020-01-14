window.onscroll = function () {

    var icon1 = document.getElementById("umweltschutz_icon");
    var icon2 = document.getElementById("vorteile_icon2");
    var icon3 = document.getElementById("vorteile_icon3");
    var icon4 = document.getElementById("vorteile_icon4");
    var icon5 = document.getElementById("vorteile_icon5");
    var icon6 = document.getElementById("vorteile_icon6");

    var lightcolor = "#82A2B7";
    var darkcolor = "#296692";

    var vorteile_header_height = 200;

    var elem1 = document.getElementById("vorteile_header");
    var elem2 = document.getElementById("vorteil2");
    var elem3 = document.getElementById("vorteil3");
    var elem4 = document.getElementById("vorteil4");
    var elem5 = document.getElementById("vorteil5");
    var elem6 = document.getElementById("vorteil6");

    var hT = elem1.offsetTop,
        hH = getAbsoluteHeight(elem1),
        wH = window.innerHeight,
        wS = window.pageYOffset;

    var hT2 = elem2.offsetTop,
        hT3 = elem3.offsetTop,
        hT4 = elem4.offsetTop,
        hT5 = elem5.offsetTop,
        hT6 = elem6.offsetTop;

    if (wS > (hT + hH - wH + vorteile_header_height)) {
        elem1.style.position = "sticky";
        elem1.style.top = "0";
        icon1.style.background = lightcolor;
        icon2.style.background = darkcolor;
        icon3.style.background = darkcolor;
        icon4.style.background = darkcolor;
        icon5.style.background = darkcolor;
        icon6.style.background = darkcolor;
    } else {
        icon1.style.background = darkcolor;
        icon2.style.background = darkcolor;
        icon3.style.background = darkcolor;
        icon4.style.background = darkcolor;
        icon5.style.background = darkcolor;
        icon6.style.background = darkcolor;
    }


    if (wS > (hT2 + hH - wH + vorteile_header_height)) {
        icon1.style.background = darkcolor;
        icon2.style.background = lightcolor;
        icon3.style.background = darkcolor;
        icon4.style.background = darkcolor;
        icon5.style.background = darkcolor;
        icon6.style.background = darkcolor;
    }



    if (wS > (hT3 + hH - wH + vorteile_header_height)) {
        icon1.style.background = darkcolor;
        icon2.style.background = darkcolor;
        icon3.style.background = lightcolor;
        icon4.style.background = darkcolor;
        icon5.style.background = darkcolor;
        icon6.style.background = darkcolor;
    }



    if (wS > (hT4 + hH - wH + vorteile_header_height)) {
        icon1.style.background = darkcolor;
        icon2.style.background = darkcolor;
        icon3.style.background = darkcolor;
        icon4.style.background = lightcolor;
        icon5.style.background = darkcolor;
        icon6.style.background = darkcolor;
    }



    if (wS > (hT5 + hH - wH + vorteile_header_height)) {
        icon1.style.background = darkcolor;
        icon2.style.background = darkcolor;
        icon3.style.background = darkcolor;
        icon4.style.background = darkcolor;
        icon5.style.background = lightcolor;
        icon6.style.background = darkcolor;
    }



    if (wS > (hT6 + hH - wH + vorteile_header_height)) {
        icon1.style.background = darkcolor;
        icon2.style.background = darkcolor;
        icon3.style.background = darkcolor;
        icon4.style.background = darkcolor;
        icon5.style.background = darkcolor;
        icon6.style.background = lightcolor;
    }
}

var hTend = document.getElementById("vorteile_container_end").offsetTop
if (wS > (hTend + hH - wH)) {
    elem1.style.position = "absolute";
}

function jumptoadvantage(elemid) {
    var elem = document.getElementById(elemid);
    elem.scrollIntoView(true);
    var hH = getAbsoluteHeight(elem),
        wH = window.innerHeight;
    var scrolledY = window.scrollY;

    if (elemid === 'vorteile_container') {
        if (scrolledY) {
            window.scroll(0, scrolledY - 100);
        }
    }

    if(elemid === 'vorteil2'){
        document.getElementById(elemid).scrollIntoView();
            if(scrolledY){
                window.scroll(0, scrolledY + hH - wH + 450);
            }
    }

    if(elemid === 'vorteil3'){
        if(scrolledY){
            window.scroll(0, scrolledY + hH - wH);
        }
    }

    if(elemid === 'vorteil4'){
        if(scrolledY){
            window.scroll(0, scrolledY + hH - wH -200);
        }
    }

    if(elemid === 'vorteil5'){
        if(scrolledY){
            window.scroll(0, scrolledY + hH - wH -120);
        }
    }

    if(elemid === 'vorteil6'){
        if(scrolledY){
            window.scroll(0, scrolledY + hH - wH -200);
        }
    }


}


function getAbsoluteHeight(el) {
    el = (typeof el === 'string') ? document.querySelector(el) : el;
    var styles = window.getComputedStyle(el);
    var margin = parseFloat(styles['marginTop']) +
        parseFloat(styles['marginBottom']);

    return Math.ceil(el.offsetHeight + margin);
}

function showfunction(textid, plusid, minusid) {
    var text = document.getElementById(textid);
    var iconplus = document.getElementById(plusid);
    var iconminus = document.getElementById(minusid);

    if (text.style.display === "none") {
        text.style.display = "block";
        iconplus.style.display = "none";
        iconminus.style.display = "block";
    } else {
        text.style.display = "none";
        iconplus.style.display = "block";
        iconminus.style.display = "none";
    }
}

function showAndhideContent(arr1, arr2, arr3) {

    var width = (window.innerWidth >= 992) ? 0 : 1;
    if (width) {
        for (i = 0; i < arr1.length; i++) {
            document.getElementById(arr1[i]).style.display = "none";
        }
        for (i = 0; i < arr3.length; i++) {
            document.getElementById(arr3[i]).style.display = "block";
        }
    } else {
        for (i = 0; i < arr2.length; i++) {
            document.getElementById(arr2[i]).style.display = "block";
        }
        for (i = 0; i < arr4.length; i++) {
            document.getElementById(arr1[i]).style.display = "none";
        }
    }
}

