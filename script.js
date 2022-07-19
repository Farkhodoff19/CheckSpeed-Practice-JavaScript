// Tezlik cheklovi -> 70km/soat
// 5km/soat -> 1 point
// 12 point -> Guvohnoma oli qo'yiladi

const speedLimit = 70
const kmPerPoint = 5
const maxPoints = 12
checkSpeed(70)

function checkSpeed(speed) {
    if(speed < speedLimit + kmPerPoint) {
        console.log('Okay');
    }else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint)
        if (points >= maxPoints) {
            console.log(`Guvohonama olib qo'yiladi`);
        }else {
            console.log(points);
        }
    }
}