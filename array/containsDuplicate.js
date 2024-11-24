let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

var containsDuplicate = function(nums) {

    let checkRepeat = false;
   

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                checkRepeat =  true;
                break;
            }
            
        }
        
    }
    
    return checkRepeat;
};

containsDuplicate(nums);
