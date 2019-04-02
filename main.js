var textdata = undefined;

function Translate () {

    var input = document.getElementById("myInput").value;
    /*alert(input);*/
    var input2 = Search(input);
    $(".result").text(input);
    $(".result2").text(input2);
    $('#myInput').val("");

}

function AddCharacter (char){
    $('#myInput').val($('#myInput').val() + char);
    Table()
}

function Search (input) {
    var result = "Not Found"
    //console.log(input);
    textdata.forEach(function (d) {
        if(input == d.name){
            result = d.name;
        }
        if(input == " "){
            result = "Type your text";
        }
    })
    return result
}

function Table () {
    var newinput = document.getElementById("myInput").value;
    $(".bodytab").html("");
    textdata.forEach(function (d) {
        if(newinput == " "){
            console.log(d.name);
            $(".bodytab").append("<tr><th scope='row' style='vertical-align: middle;'><a href='" + d.link + "'>" + d.name + "</a></th><td><a href='" + d.link + "'><img src='" + d.image + "' height='150px' width='150px' /></a></td></tr>");
        }
        else if((d.name).toLowerCase().includes(newinput.toLowerCase())){
            $(".bodytab").append("<tr><th scope='row' style='vertical-align: middle;'><a href='" + d.link + "'>" + d.name + "</a></th><td><a href='" + d.link + "'><img src='" + d.image + "' height='150px' width='150px' /></a></td></tr>");
        }
    })
}


$(function () {

    var datacsv = "dictionary.csv";

    d3.csv(datacsv,function (d) {
        data = d;
        data.forEach(function (d) {
            d.id = +d.id;
        });
        textdata = data;
        console.log(textdata);
        Table();
    });

    $("#myInput").keyup( function() {
        Table();
    });

})
