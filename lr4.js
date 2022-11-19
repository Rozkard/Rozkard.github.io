
function CalulateEquinox(){
    let vernal_equinox =(new Date(2022, 2, 22) - new Date())/(1000*60*60*24);
    let autumnal_equinox = (new Date(2022, 8, 22) - new Date())/(1000*60*60*24);
    if(vernal_equinox<0) vernal_equinox+=365;
    if(autumnal_equinox<0) autumnal_equinox+=365;
    alert("До веснянного рівнодення залишилось: " + parseInt(vernal_equinox) + " днів" +"\nДо осіннього рівнодення залишилось: " + parseInt(autumnal_equinox) + " днів")
}
function CalculateDays(){
    let summer_start = new Date(2022,5,1,0,0);
    let date = document.getElementById("date").value.split('/');
    let user_date = (date.length == 1)? new Date() : new Date(2022,date[1]-1,date[0],date[2],date[3]);
    let result = (summer_start - user_date)/(1000*3600);
    return (result<0)?  result+365*24 : result;
}
  
