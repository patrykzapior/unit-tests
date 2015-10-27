#Unit tests
Monday (02.11.2015):

* `npm instal`
* write unit tests to functions placed in `app/exercise1.js`
* you can write function based on the README and test them using `grunt test:dev` command

GOOD LUCK :)

###getDescendingNumbers function

Modify **getDescendingNumbers** function:

-   **numberFrom** parameter should be a Number and it is supposed to be higher than **numberTo**
-   **numberTo** parameter should be a Number and it is supposed to be lower than **numberFrom**

Given correct parameters the function should return a String literal with ASCII representation of the numbers starting at **numberFrom** to **numberTo**(included), separated by ' ' (space). Otherwise the function should return false.


###deleteString function
Modify **deleteString** function that will allow you to delete a string from an Array of Strings. 

- **stringToDelete** - parameter should be a String that should be deleted
- **arrayOfStrings** - parameter should be an Array of Strings

 This function should return an array of the remaining Strings(or an empty array).

###stringCounter function
Modify **stringCounter** function for counting the number of String elements in an Array. 

- **customArray** - parameter should be an Array of elements

Please be aware that the Array can consist of many other elements other than Strings and the function is supposed to count only String elements. The return value should be a number of string elements in the provided Array.

###squareOdd function
Modify **squareOdd** function: 

- **customArray** - parameter should be an Array of elements


This function should square value of every Number inside of **customArray** that is an odd number and return an array with proper numbers changed, leaving the rest of items unaffected.


###areaOfTrapezoid function
Create **areaOfTrapezoid** function that will calculate the area of a trapezoid:
   
-   **a, b, h** parameters should not be negative Numbers


The formula is as provided:

    h * ( a + b ) / 2

If the parameters are incorrect the function should return false.
