/**
 * There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, 
 * determine how many pairs of socks with matching colors there are.
 */

/**
 * ar = [10,20,20,10,10,30,50,10,20]; 
 * Socks = {"10": 4,
 *            "20": 3,
 *            "30": 1,
 *            "50": 1} 
 * pairs = 3
 */

function sockMerchant(n: number, ar: number[]): number {
    let socks: { [key: number]: number } = {};
    let pairs: number = 0;
    
    for (let element of ar){

        socks[element] = socks[element] ? socks[element] + 1 : 1;

        if(socks[element] % 2 === 0){
            pairs += 1;
        }
    }
    
    return pairs;
}

sockMerchant(9, [10,20,20,10,10,30,50,10,20]);
