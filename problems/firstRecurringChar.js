function firstOccurance(arr) {
    let map = {};
    if (arr.length > 1) {
      for (i = 0; i < arr.length; i++) {
        if(map[arr[i]]){
          return arr[i]
        }else{
          map[arr[i]] = arr[i]
        }
      }
    }
    return undefined;
  }
  console.log(firstOccurance([0,5,1,2,3,4,5,56,2]))


// Given an array of integers nums , return indices of the first recurring character, if non found retrun undefined

// Example 1:

// Input: nums = [2,7,2,15]
// Output:2


// Input: nums = [3,2,4]
// Output:undefined
