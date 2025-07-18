// this function is for converting seconds in time 

function getTimeString(time) {

    // get hour 
    const hour = parseInt(time / 3600)
    let remainingSecond = time % 3600
    const munite = parseInt(remainingSecond / 60)
    remainingSecond = remainingSecond % 60
    return `${hour} hours ${munite} munites ${remainingSecond} seconds ago`
}

// console.log(getTimeString(4321));
