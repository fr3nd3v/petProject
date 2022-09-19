function f1(){
    let UpLeftRange = document.getElementById('UpLeftRange').value;
    let UpRightRange = document.getElementById('UpRightRange').value;
    let DownLeftRange = document.getElementById('DownLeftRange').value;
    let DownRhigtRange = document.getElementById('DownRhigtRange').value;

    let UpLeftValue = document.getElementById('UpLeftValue');
    let UpRightValue = document.getElementById('UpRightValue');
    let DownLeftValue = document.getElementById('DownLeftValue');
    let DownRhigtValue = document.getElementById('DownRhigtValue');

    let block = document.getElementById('block');

    UpLeftValue.value = UpLeftRange;
    UpRightValue.value = UpRightRange;
    DownLeftValue.value = DownLeftRange;
    DownRhigtValue.value = DownRhigtRange;

    let Width = document.getElementById('Width').value;
    let Height = document.getElementById('Height').value;

    block.style.width = Width+"px";
    console.log(block.style.borderRadius)
    block.style.height = Height+"px"
    block.style.borderRadius = UpLeftRange+"px "+ UpRightRange+"px " + DownRhigtRange+"px " + DownLeftRange+"px ";

    let ViewCss = document.getElementById('textcss');
    ViewCss.innerHTML = "border-radius: " + block.style.borderRadius + ";";
}
