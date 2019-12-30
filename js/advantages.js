window.onscroll = function () {

    var icon1 = document.getElementById("umweltschutz_icon");
    var icon2 = document.getElementById("vorteile_icon2");
    var icon3 = document.getElementById("vorteile_icon3");
    var icon4 = document.getElementById("vorteile_icon4");
    var icon5 = document.getElementById("vorteile_icon5");
    var icon6 = document.getElementById("vorteile_icon6");

    var lightcolor = "#82A2B7";
    var darkcolor = "#296692";

    var elem1 = document.getElementById("vorteile_header");
    var hT = elem1.offsetTop,
        hH = getAbsoluteHeight(elem1),
        wH = window.innerHeight,
        wS = window.pageYOffset;
    if (wS > (hT + hH - wH)) {
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

    var elem2 = document.getElementById("vorteil2");
    var hT2 = elem2.offsetTop
    if (wS > (hT2 + hH - wH)) {
        icon1.style.background = darkcolor;
        icon2.style.background = lightcolor;
        icon3.style.background = darkcolor;
        icon4.style.background = darkcolor;
        icon5.style.background = darkcolor;
        icon6.style.background = darkcolor;
    }

    var elem3 = document.getElementById("vorteil3");
    var hT3 = elem3.offsetTop
    if (wS > (hT3 + hH - wH)) {
        icon1.style.background = darkcolor;
        icon2.style.background = darkcolor;
        icon3.style.background = lightcolor;
        icon4.style.background = darkcolor;
        icon5.style.background = darkcolor;
        icon6.style.background = darkcolor;
    }

    var elem4 = document.getElementById("vorteil4");
    var hT4 = elem4.offsetTop
    if (wS > (hT4 + hH - wH)) {
        icon1.style.background = darkcolor;
        icon2.style.background = darkcolor;
        icon3.style.background = darkcolor;
        icon4.style.background = lightcolor;
        icon5.style.background = darkcolor;
        icon6.style.background = darkcolor;
    }

    var elem5 = document.getElementById("vorteil5");
    var hT5 = elem5.offsetTop
    if (wS > (hT5 + hH - wH)) {
        icon1.style.background = darkcolor;
        icon2.style.background = darkcolor;
        icon3.style.background = darkcolor;
        icon4.style.background = darkcolor;
        icon5.style.background = lightcolor;
        icon6.style.background = darkcolor;
    }

    var elem6 = document.getElementById("vorteil6");
    var hT6 = elem6.offsetTop
    if (wS > (hT6 + hH - wH)) {
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
    }
}

