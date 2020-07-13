// db.buses.insertMany([
//     {
//         type: 'bus',
//         number: 306,
//         source: "saket",
//         quantity: 5,
//         destination: 'samaypur badli',
//         path: ['saket','CS','Rajiv chowk', 'chandni chowk', 'kashmiri gate',
//                'civil lines', 'vishwa vidhyalay', 'azad nagar','samayapur badli']
//     },
//     {
//         type: 'bus',
//         number: 407,
//         source: "dwarka",
//         quantity: 9,
//         destination: 'indraprasth', 
//         path: ['dwarka', 'rajori', 'moti nagar', 'jhande vala', 'rajiv chowk', 'indraprasth']
//     },
//     {
//         type: 'bus',
//         number: 309,
//         source: "kashmiri gate",
//         quantity: 5,
//         destination: 'saket',
//         path: ['saket','CS','Rajiv chowk', 'chandni chowk', 'kashmiri gate',
//                'civil lines', 'vishwa vidhyalay', 'azad nagar','samayapur badli']
//     }

// ])


// db.train.insertMany([
//     {
//         type: 'train',
//         number: 30665,
//         source: "delhi",
//         capacity: 800,
//         destination: 'himachal pradesh',
//         path: ['some path']
//     },
//     {
//         type: 'train',
//         number: 43952,
//         source: "chennai",
//         capacity: 850,
//         destination: 'delhi', 
//         path: ['some path']
//     },
//     {
//         type: 'train',
//         number: 309,
//         source: "mumbai",
//         capacity: 780,
//         destination: 'bhopal',
//         path: ['some path']
//     }

// ])


// const convertTime12to24 = (time12h) => {
//     const [time, modifier] = time12h.split(' ');
  
//     let [hours, minutes] = time.split(':');
  
//     if (hours === '12') {
//       hours = '00';
//     }
  
//     if (modifier === 'PM') {
//       hours = parseInt(hours, 10) + 12;
//     }
  
//     return `${hours}:${minutes}`;
//   }
  
//   console.log(convertTime12to24('01:02 PM'));
//   console.log(convertTime12to24('05:06 PM'));
//   console.log(convertTime12to24('12:00 PM'));
//   console.log(convertTime12to24('12:00 AM'));

// function tConvert (time) {
//     // Check correct time format and split into components
//     time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
//     if (time.length > 1) { // If time format correct
//       time = time.slice (1);  // Remove full string match value
//       time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
//       time[0] = +time[0] % 12 || 12; // Adjust hours
//     }
//     return time.join (''); // return adjusted time or original string
//   }
  
//   console.log(tConvert ('18:00'));

// var str = "1700";
// console.log(str.substr(0,2)+":"+str.substr(2))

// console.log("700".replace(/(..)$/, ":$1"))


    const a = [1, 2, 3, 4].reduce((a, b) => a + b, 0)
  
console.log(a)