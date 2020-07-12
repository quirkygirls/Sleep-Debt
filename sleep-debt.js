const getSleepHours = day =>{
switch(day){
case'monday':
return 8
break;
case'tuesday':
return 8
break;
case'wednesday':
return 8
break;
case'thursday':
return 8
break;
case'friday':
return 8
break;
case'saturday':
return 8
break;
case'sunday':
return 24
break;
default:
return 'error!'
}
  };

  const getActualSleepHours= () =>
  getSleepHours('monday')+
  getSleepHours('tuesday')+
  getSleepHours('wednesday')+
  getSleepHours('thursday')+
  getSleepHours('friday')+
  getSleepHours('saturday')+
  getSleepHours('sunday');

const getIdealSleepHours =()=>{
  let idealHours =8;
  return idealHours*7;
};

const calculateSleepDebt=()=>{
const actualSleepHours= getActualSleepHours();
const idealSleepHours= getIdealSleepHours();
 if(actualSleepHours === idealSleepHours){
      console.log('You get the perfect amount of sleep');
    }
    else if(actualSleepHours > idealSleepHours){
      console.log(`you sleep ${actualSleepHours-idealSleepHours} to much`);
    }
    else if(actualSleepHours < idealSleepHours){
      console.log(`you need to sleep ${idealSleepHours-actualSleepHours} more hours, go have a nap`);
    }else{
      console.log('something went wrong')
    }
  };
  calculateSleepDebt()

  
