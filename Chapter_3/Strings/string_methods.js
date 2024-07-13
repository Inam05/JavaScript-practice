// Some String Methods are as followed

// 1. length
// 2. indexOf
// 3. lastIndexOf
// 4. includes
// 5. startsWith
// 6. endsWith
// 7. toUpperCase
// 8. toLowerCase
// 9. trim
// 10. split
// 11. join
// 12. replace
// 13. search
// 14. match
// 15. slice
// 16. substring
// 17. substr
// 18. concat
// 19. charAt
// 20. charCodeAt
// 21. fromCharCode
// 22. padStart
// 23. padEnd
// 24. repeat
// 25. normalize
// 26. localeCompare
// 27. trimStart
// 28. trimEnd
// 29. matchAll

let str1 = "Inam Ul Hassan";
console.log(str1.toUpperCase()); // INAM UL HASSAN
console.log(str1.toLowerCase()); // inam ul hassan
// strings are immatable like if we want to change a small part of a string , we firstly put it into other newly string
let str2 = str1.slice(0, 4); // Inam
console.log(str2); // if want specific part of a string
console.log(str1.trim());   // trim start and the ending space 
console.log(str1.concat(str2)); // join two strings
console.log(str1 + str2);  // join two strings
console.log(str2.replace("Inam","Sufi")); // replace a value with a new
console.log(str1.search("I")); // search a indicies from value in a string
console.log(str1.charAt(5)); // search a value at indicies in a string
