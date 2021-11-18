// Binary Search - Iterative  -36:18:31
// Description
// Given n distinct numbers, implement iterative binary search to check the presence of target number k.

// In case k is present among those n numbers, print 1

// Else print -1


// Input
// Input Format :

// First line of input contains n and k separated by a space

// Next line contains n space separated integers

// Constraints :

// n<1000


// Output
// In case k is present among those n numbers, print 1

// Else print -1


// Sample Input 1 
// 5 0
// 2 -2 0 3 4
// Sample Output 1
// 1

const binarySearch = (arr,n,k)=>{
    var low = 0;
    var high = n-1;
    
    while(low<=high){
        var mid = Math.floor((high+low)/2);
        if(arr[mid]===k){
            return 1;
        }
        else if(arr[mid] < k){
            low = mid+1;
        }
        else{
            high = mid-1;
        }
    }
    return -1;
}

// Driver Code for the program
   var nk=[5,0]
   var n = nk[0];
   var k = nk[1];
   var arr=[2,-2,4,3,0];
   arr.sort(function(a,b){return a-b});
   var res = binarySearch(arr,n,k);
   console.log(res);

