var nextTableID = 0;

let EditAbleLine = 0;

let TableRows = [];

function println(string)
{
    document.getElementById("Output").innerHTML += string.toString() + "<BR>\n";
}

function print_(string)
{
    document.getElementById("Output").innerHTML += string.toString();
}


function addEditAbleLine()
{
    document.getElementById("Output").innerHTML += "<div id='EditAble"+EditAbleLine+"'></div>";
    return new Number(EditAbleLine++);
}

function addToEditable(string, editID)
{
    document.getElementById("EditAble" + editID).innerHTML += string;
}

function printHeading(string, center, heading)
{
    if(heading == undefined)
        heading = "h3";
    if(center == true)
        document.getElementById("Output").innerHTML += "<div style=\"text-align: center;\"><"+heading+">" + string + "</"+heading+"></div>\n";
    else document.getElementById("Output").innerHTML += "<"+heading+">" + string + "</"+heading+">\n";
}

function clearOutput()
{
    document.getElementById("Output").innerHTML="";
}

function createTable(headings)
{
    document.getElementById("Output").innerHTML += "<div class='container'><div class='table' id='TableNo"+nextTableID+"'></div></div>";

    let string = "<div class='table-header'>";
    for(let i=0; i<headings.length; i++)
    {
        string += "<div class='header__item'><a id='"+headings[i]+"' class='filter__link' href='#'>" + headings[i] + "</a></div>";
    }

    document.getElementById("TableNo" + nextTableID).innerHTML += string+ "</div>";
    document.getElementById("TableNo" + nextTableID).innerHTML += "<div id='ContentTableNo"+nextTableID+"' class='table-content'></div>";
    TableRows[nextTableID] = 0;
    nextTableID++;
    return nextTableID-1;
}

function addTableRow(data, Id)
{
    TableRows[Id]++;
    let string = "<div class='table-row' id='TR"+Id+"R"+TableRows[Id]+"'>";
    for(let i=0; i<data.length; i++)
    {
       string += "<div class='table-data'>" + data[i] + "</div>";
    }

    document.getElementById("ContentTableNo" + Id).innerHTML += string+ "</div>";
}

function addTableColumn(data, id, color, time)
{
    document.getElementById("TR"+id+"R"+TableRows[id]).innerHTML += "<div class='table-data' style='background-color: "+color+"'>" + data + "</div>";
    if(time % 10 == 0)
        addTableRow([], id);
}