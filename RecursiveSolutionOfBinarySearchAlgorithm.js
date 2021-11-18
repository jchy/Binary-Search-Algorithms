// Binary Search - Recursive  -36:4:21
// Description
// Given n distinct numbers, implement a recursive binary search to check the presence of target number k.

// In case k is present among those n numbers, print 1

// Else print -1


// Input
// Input Format :

// First line of input contains n and k separated by a space

// Next line contains n space separated integers

// Constraints:

// n<1000


// Output
// In casekis present among those n numbers, print 1

// Else print -1


// Sample Input 1 
// 5 0
// 2 -2 0 3 4
// Sample Output 1
// 1


const binarySearch = (arr,low,high,k)=>
{
    if (high >= low) 
    {
        let mid = low + Math.floor((high - low) / 2);
 
        if (arr[mid] === k)
            return 1;
 
        if (arr[mid] > k)
            return binarySearch(arr, low, mid - 1, k);
 
        return binarySearch(arr, mid + 1, high, k);
    }

    return -1;
}

// Driver Code for the Program
   var nk=[5,0]
   var n = nk[0];
   var k = nk[1];
   var arr= [2,-2,0,4,3];
   arr.sort(function(a,b){return a-b});
   var res = binarySearch(arr,0,n-1,k);
   console.log(res);