// function indexOfIgnoreCase(s1, s2) {
//   // write your code here
// }

// // Please do not change the code below
// //const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));

function indexOfIgnoreCase(str, subStr) {
    // Handle edge cases
    if (subStr === "") {
        return 0; // If subStr is empty, return 0
    }
    if (str === "") {
        return -1; // If str is empty and subStr is not, return -1
    }

    // Convert both strings to lower case for case-insensitive comparison
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    // Use indexOf to find the first occurrence of lowerSubStr in lowerStr
    return lowerStr.indexOf(lowerSubStr);
}

// Example usage:
console.log(indexOfIgnoreCase("Hello World", "world")); 
console.log(indexOfIgnoreCase("apple", "Ple"));         
console.log(indexOfIgnoreCase("test", "aaa"));         
console.log(indexOfIgnoreCase("", "aaa"));               
console.log(indexOfIgnoreCase("Hello", ""));             

