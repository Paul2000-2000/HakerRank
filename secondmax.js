function getSecondLargest(nums) {
    var i;
    let max1=-100;
    let max2=-1000;
    for (i=0;i<=nums.length-1;i++)
      {
      if (nums[i]>max1)
      max1=nums[i];
      }

      for (i=0;i<=nums.length-1;i++)
      {
      if (nums[i]>max2 && nums[i]!=max1)
          max2=nums[i];
      }
      
    return max2; 
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}