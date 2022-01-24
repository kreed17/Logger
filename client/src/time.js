function dateTime(type) {
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    let today = mm + '/' + dd + '/' + yyyy;
    if (type === "date") {
        return today;
    } else {
        let hours = date.getHours() % 12;
        hours = hours ? hours : 12;
        let currTime = today + " "
            + hours + ":"
            + ('0' + date.getMinutes()).slice(-2)
            + ((date.getHours() >= 12) ? ('pm') : 'am');
        return currTime
    }
}


function timeLength(date1, date2) {   
    const dateFormat = (date) => {
        //console.log(date);
        let time = date.substr(11, 13);
        date = date.substr(0, 10);
        let hours = parseInt(time.substr(0, 2));
        if (time.indexOf('am') !== -1 && hours === 12) {
            time = time.replace('12', '0');
        }
        if (time.indexOf('pm') !== -1 && hours < 12) {
             time = time.replace(hours, (hours + 12));            
        }
            date = date +" "+time
            date = date.replace(/(am|pm)/, ':00');
            //console.log(date);
            return date;
        
    }
    let login = new Date(dateFormat(date1))
    let logout = new Date(dateFormat(date2));
    var diff = (Math.abs(logout - login)) / 60000;
    let hours=0;
    let minutes=diff;
    while (diff > 60) {
        diff = diff - 60
        hours++
        if (diff < 60) {
            minutes=diff
        }
   }
    //console.log(login);
    //console.log(logout);
    //console.log(diff);
return (hours > 0? `${hours}hrs`:"",`${minutes}mins`)
}


 function totalTime() {
    
 }


export {dateTime, timeLength} 