/**
 * An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, 
 * for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, 
 * and each step up or down represents a  unit change in altitude. We define the following terms:
 * A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
 * A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
 * Given the sequence of up and down steps during a hike, find and print the number of valleys walked through
*/
function countingValleys(steps: number, path: string): number {
    let hikePath: any[] = path.split('');
    let isInvalley = false;
    let valleyQuantity = 0;
    let countPath = 0;
    hikePath = hikePath.map(steps => ((steps === 'U') ? 1 : -1));
    
    for(let i: number = 0; i <= hikePath.length; i++){
        countPath += hikePath[i];
        if(countPath < 0 && !isInvalley){
            isInvalley = true;
        }else if(countPath === 0 && isInvalley){
            valleyQuantity ++;
            isInvalley = false;
        }
    }

    return valleyQuantity;
}

console.log(countingValleys(12, "DDUUDDUDUUUD"));