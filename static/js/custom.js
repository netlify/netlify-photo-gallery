function applyParams() {
    var r = document.getElementById("exampleNfResize");
    var w = document.getElementById("exampleWidth");
    var h = document.getElementById("exampleHeight");
    var param = "?nf_resize=" + r.value + "&w=" + w.value + "&h=" + h.value;
    var paramInput = document.getElementById("exampleParams");
    paramInput.value = param;
    var msg = document.getElementById("loadingMessage");
    var img = document.getElementById("exampleApple");
    var srcWithoutParam = img.src.split("?")[0];
    var newImg = new Image();
    newImg.onload = function(){
        img.src = this.src;
        msg.innerText = "";
    };
    newImg.src = srcWithoutParam + param;
    msg.innerText = "loading apple...";
    return false;
}

