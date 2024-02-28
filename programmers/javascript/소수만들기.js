function solution(nums) {
    let answer = 0 ; 
    for(let i = 0 ;  i < nums.length ; i ++){
        for(let j = i+1 ;  j < nums.length ; j ++){
            for(let a = j+1 ;  a < nums.length ; a ++){
                let b = nums[i]+nums[j]+nums[a]
                if(isPrime(b)){
                    answer += 1 ; 
                }
            }
        }
    }
    return answer;
}

function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return true;
}