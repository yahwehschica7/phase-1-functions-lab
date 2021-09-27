const hq = 42;


function distanceFromHqInBlocks(distance) {
    if (distance < hq) {
        return hq - distance;
    }
     else if (distance > hq) {
         return distance - hq;
     }
    }
 
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}


function distanceTravelledInFeet(start, end) {
    if (start < end) {
        return (end - start) * 264;
    }
    else if (start > end) {
        return (start - end) * 264
    }
}

 

function calculatesFarePrice(start, end) {
    if (distanceTravelledInFeet(start, end) > 2500) {
        return 'cannot travel that far';
    }
    else if (distanceTravelledInFeet(start, end) > 2000) {
        return 25; 
    }
    else if (distanceTravelledInFeet(start, end) >= 400 || distanceTravelledInFeet(start, end) < 2000) {
        (end - start) * .02;
    }
    else if ((end - start) <= 400) {
        return ;
    }
} 

