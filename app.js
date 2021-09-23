var input1=document.querySelector("#i1");
var input2=document.querySelector("#i2");
var btn1=document.querySelector("#i3");
var output=document.querySelector("#i4");

function check(dataItem1,dataItem2)
{
    console.log(dataItem1," ",dataItem2)
    var sum=0;
    for(var i=0;i<dataItem1.length;i++)
    {
        sum=sum+Number(dataItem1[i]);
    }
    console.log(sum);
    if((dataItem1 == "")||(dataItem2 == ""))
    {
        alert("Something went wrong");
    }
    else{
        if((sum%dataItem2)==0){
            output.innerText="Hurray!! your birthday is lucky"
        }
        else{
            output.innerText="Sorry to say your birthday is not lucky";
        }
    }
}

function replace(dataItem){
    dataItem=dataItem.replaceAll("-","")
    return dataItem;
}

function clickHandler(){
    var data1=input1.value;
    var data2=input2.value;
    data1=replace(data1);
    check(data1,data2);
}
btn1.addEventListener("click",clickHandler);