function changeColors(){
    let redVal = document.getElementById("redVal").value;
    let greenVal = document.getElementById("greenVal").value;
    let blueVal = document.getElementById("blueVal").value;
    let width = document.getElementById("widthVal").value;
    let para = document.getElementById("para");
    let redBackVal = document.getElementById("redBackVal").value;
    let greenBackVal = document.getElementById("greenBackVal").value;
    let blueBackVal = document.getElementById("blueBackVal").value;


    
    let newBorderColor = ("rgb("+ redVal + ',' + greenVal + ',' + blueVal+ ")");
    let newWidth = width + "px";
    let newBackColor = ("rgb("+ redBackVal + ',' + greenBackVal + ',' + blueBackVal+ ")");

    document.getElementById("para").style.borderColor = newBorderColor;
    document.getElementById("para").style.borderWidth = newWidth;
    document.getElementById("para").style.backgroundColor = newBackColor;

}