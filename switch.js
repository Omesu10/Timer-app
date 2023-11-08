const day = 'monday';
switch(day){
    case 'monday':
        console.log('i go to work');
        break;
    case 'tuesday':
        console.log('i go to meetings');
        break;
    case 'wednesday':
        console.log('i go to the bar');
        break;
    case 'thursday':
        console.log('i go to swim');
        break;
    case 'friday': 
        console.log('i go to club');
        break;
    case 'saturday':
    case 'sunday':
        console.log('i enjoy my weekend');
        break;
        default:
            console.log('none of this days exsit')
}


if (day === 'monday') {
    console.log('i go to work');

} else if(day === 'tuesday'){
    console.log('i go for meetings');

} else if (day ==='wednesday' || day ==='thursday'){
    console.log('i go bar');

} else if(day === 'thursday'){
    console.log('i go to swim');

} else if (day ==='friday'){
    console.log('i go to club');

} else if(day === 'saturday' || day ==='sunday'){
    console.log('i enjoy my weekend');
    
} else {
    console.log('none of these days exist')
}
