window.onscroll = function() {
    var elem1 = document.getElementById("vorteile_header");
    var hT = elem1.offsetTop,
        hH = getAbsoluteHeight(elem1),
        wH = window.innerHeight,
        wS = window.pageYOffset;
    if (wS > (hT+hH-wH)){
        elem1.style.position="sticky";
        elem1.style.overflow="hidden";
        elem1.style.top="0";
        document.getElementById("umweltschutz_icon").style.background = "#82A2B7";
        document.getElementById("vorteile_icon2").style.background = "#296692";
        document.getElementById("vorteile_icon3").style.background = "#296692";
        document.getElementById("vorteile_icon4").style.background = "#296692";
        document.getElementById("vorteile_icon5").style.background = "#296692";
        document.getElementById("vorteile_icon6").style.background = "#296692";
    } else {
        document.getElementById("umweltschutz_icon").style.background = "#296692";
        document.getElementById("vorteile_icon2").style.background = "#296692";
        document.getElementById("vorteile_icon3").style.background = "#296692";
        document.getElementById("vorteile_icon4").style.background = "#296692";
        document.getElementById("vorteile_icon5").style.background = "#296692";
        document.getElementById("vorteile_icon6").style.background = "#296692";
    }

    var elem2 = document.getElementById("vorteil2");
    var hT2 = elem2.offsetTop
    if (wS > (hT2+hH-wH)){
        document.getElementById("umweltschutz_icon").style.background = "#296692";
        document.getElementById("vorteile_icon2").style.background = "#82A2B7";
        document.getElementById("vorteile_icon3").style.background = "#296692";
        document.getElementById("vorteile_icon4").style.background = "#296692";
        document.getElementById("vorteile_icon5").style.background = "#296692";
        document.getElementById("vorteile_icon6").style.background = "#296692";
    }

    var elem3 = document.getElementById("vorteil3");
    var hT3 = elem3.offsetTop
    if (wS > (hT3+hH-wH)){
        document.getElementById("umweltschutz_icon").style.background = "#296692";
        document.getElementById("vorteile_icon2").style.background = "#296692";
        document.getElementById("vorteile_icon3").style.background = "#82A2B7";
        document.getElementById("vorteile_icon4").style.background = "#296692";
        document.getElementById("vorteile_icon5").style.background = "#296692";
        document.getElementById("vorteile_icon6").style.background = "#296692";
    }

    var elem4 = document.getElementById("vorteil4");
    var hT4 = elem4.offsetTop
    if (wS > (hT4+hH-wH)){
        document.getElementById("umweltschutz_icon").style.background = "#296692";
        document.getElementById("vorteile_icon2").style.background = "#296692";
        document.getElementById("vorteile_icon3").style.background = "#296692";
        document.getElementById("vorteile_icon4").style.background = "#82A2B7";
        document.getElementById("vorteile_icon5").style.background = "#296692";
        document.getElementById("vorteile_icon6").style.background = "#296692";
    }

    var elem5 = document.getElementById("vorteil5");
    var hT5 = elem5.offsetTop
    if (wS > (hT5+hH-wH)){
        document.getElementById("umweltschutz_icon").style.background = "#296692";
        document.getElementById("vorteile_icon2").style.background = "#296692";
        document.getElementById("vorteile_icon3").style.background = "#296692";
        document.getElementById("vorteile_icon4").style.background = "#296692";
        document.getElementById("vorteile_icon5").style.background = "#82A2B7";
        document.getElementById("vorteile_icon6").style.background = "#296692";
    }

    var elem6 = document.getElementById("vorteil6");
    var hT6 = elem6.offsetTop
    if (wS > (hT6+hH-wH)){
        document.getElementById("umweltschutz_icon").style.background = "#296692";
        document.getElementById("vorteile_icon2").style.background = "#296692";
        document.getElementById("vorteile_icon3").style.background = "#296692";
        document.getElementById("vorteile_icon4").style.background = "#296692";
        document.getElementById("vorteile_icon5").style.background = "#296692";
        document.getElementById("vorteile_icon6").style.background = "#82A2B7";
    }
}

var hTend = document.getElementById("vorteile_container_end").offsetTop
if (wS > (hTend+hH-wH)) {
    elem1.style.position = "absolute";
}

function getAbsoluteHeight(el) {
    el = (typeof el === 'string') ? document.querySelector(el) : el;
    var styles = window.getComputedStyle(el);
    var margin = parseFloat(styles['marginTop']) +
        parseFloat(styles['marginBottom']);

    return Math.ceil(el.offsetHeight + margin);
}

