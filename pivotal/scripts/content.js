function readableTime(){
    var validTime = document.getElementById("fh_validtime").innerHTML;
    if(validTime.indexOf('z')>-1){
        validTime = validTime.split("z").join(":00Z");
        validTime = moment(validTime).format("MM-DD-YYYY hh:mma")
        console.log(validTime)
        document.getElementById("fh_validtime").innerHTML = validTime;
    }else{
        console.log("Time in unreadable format.")
    }
    var runs = document.getElementById('rh');
    for (var i = 0; i < runs.length; i++) {
        rTime = runs.options[i].innerHTML.split("z").join(":00Z");
        rTime = moment(rTime).format("MM-DD-YYYY hh:mma")
        console.log(rTime)
        runs.options[i].innerHTML = rTime;
    }
}

document.onload = readableTime();