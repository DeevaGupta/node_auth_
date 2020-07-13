const bus_fare = (distance)=>{
    const base_fare = 200
    let fare = 0
    
    if(distance <= 4)
        fare = 5
    else if(4<distance <= 10)
        fare = 10
    else 
        fare =15

    return fare
    }

const metro_fare = (distance)=>{

    let fare = 0

    if(distance<=1.5) fare = 10
    else if(1.5< distance <=5.5) fare = 20
    else if(5.5< distance <=9.5) fare = 30
    else if(9.5< distance <=13.5) fare = 40
    else if(13.5< distance <=30.5) fare = 50
    else fare = 60
    
    return fare
}


module.exports.bus_fare = bus_fare;
module.exports.metro_fare = metro_fare