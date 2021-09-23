var input1=document.querySelector("#i1");
var input2=document.querySelector("#i2");
var btn1=document.querySelector("#i3");
var output=document.querySelector("#i4");

function check(dataItem1,dataItem2)
{
    var cons
    if((dataItem1 == "") || (dataItem2 == "")){
        alert("Oops something went wrong")
    }
    else{if((dataItem1%dataItem2) == 0){
        cons="Your Birthday is lucky!!!"
        output.innerText=cons;
    }
    else{
        cons="Your Birthday is not lucky!!!"
        output.innerText=cons;
    }}
}

function replace(dataItem){
    dataItem=dataItem.replaceAll("/","")
}

function clickHandler(){
    var data1=input1.value;
    var data2=input2.value;
    replace(data1);
    check(data1,data2);
}
btn1.addEventListener("click",clickHandler);