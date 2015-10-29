describe('exercise1', function ()
{
    'use strict';

    var exercise1 = window.exercise1;

    describe('getDescendingNumbers', function ()
    {
        it('should return string of descending numbers, separated by spaces', function ()
        {
            expect(exercise1.getDescendingNumbers(15, 1)).toEqual('15 14 13 12 11 10 9 8 7 6 5 4 3 2 1');
        });
        it('should return false, if numberFrom is string', function()
        {
            expect(exercise1.getDescendingNumbers("blabla",1)).toEqual(false);
        });
        it('should return false, if numberTo is string', function()
        {
            expect(exercise1.getDescendingNumbers(15,"blabla")).toEqual(false);
        });
        it('should return false, if numberFrom is lower then numberTo', function()
        {
            expect(exercise1.getDescendingNumbers(1,15)).toEqual(false);
        });
        it('should return false, if numberFrom is String with number value', function()
        {
            expect(exercise1.getDescendingNumbers("15",1)).toEqual(false);
        });
        it('should return false, if numberTo is String with number value', function()
        {
            expect(exercise1.getDescendingNumbers(15,"1")).toEqual(false);
        });
    });

    describe('deleteString', function ()
    {
        it('should return Array of Strings, except stringToDelete', function()
        {
            expect(exercise1.deleteString("Marek",["Patryk","Marek","Ania","Patryk","Pawe³"])).toEqual(["Patryk","Ania","Patryk","Pawe³"]);
        });
        it('should return Array of String elements, expect stringToDelete', function()
        {
            expect(exercise1.deleteString("Patryk",["Patryk","Marek","Ania","Patryk","Pawe³"])).toEqual(["Marek","Ania","Pawe³"]);
        });
        it('should return false, if stringToDelete is Number', function()
        {
            expect(exercise1.deleteString(5,["Patryk","Marek","Ania","Patryk","Pawe³"])).toEqual(false);
        });
        it('should return false, if arrayOfString is not Array', function()
        {
            expect(exercise1.deleteString("Ala", "Ala ma kota")).toEqual(false);
        });
        it('should return empty Array', function()
        {
            expect(exercise1.deleteString("Ala",["Ala"])).toEqual([]);
        });
        it('should return empty Array', function()
        {
            expect(exercise1.deleteString("Ala",[])).toEqual([]);
        });
    });

    describe('stringCounter', function ()
    {
        it('should return number of String elements in Array', function()
        {
            expect(exercise1.stringCounter([1,5,"Ala",66,"Kot"])).toEqual(2);
        });
        it('should return number of String elements in Array', function()
        {
            expect(exercise1.stringCounter([1,5,8,2,4,6])).toEqual(0);
        });
        it('should return false, if customArray is not Array', function()
        {
            expect(exercise1.stringCounter("Ala ma kota")).toEqual(false);
        });
        it('should return 0, if Array is empty', function()
        {
            expect(exercise1.stringCounter([])).toEqual(0);
        });
    });

    describe('squareOdd', function ()
    {
        it('should square every odd number in customArray and return this Array',function()
        {
            expect(exercise1.squareOdd([1, 2, 5, 6, 3, 6, 7, 8, 9, 4])).toEqual([1, 2, 25, 6, 9, 6, 49, 8, 81, 4]);
        });
        it('should return Array of square numbers and untouched Strings', function()
        {
            expect(exercise1.squareOdd([1,"a", 5, 3, 9,"b"])).toEqual([1, "a", 25, 9, 81, "b"]);
        });
        it('should return Array with String element and squared odd number',function()
        {
            expect(exercise1.squareOdd([1,2,3,"5"])).toEqual([1,2,9,"5"]);
        });
        it('should return empty Array', function()
        {
            expect(exercise1.squareOdd([])).toEqual([]);
        });
    });

    describe('areaOfTrapezoid', function ()
    {
        it('should return area of trapezoid', function()
        {
            expect(exercise1.areaOfTrapezoid(3,6,2)).toEqual(9);
        });
        it('should return false, if a is negative', function()
        {
            expect(exercise1.areaOfTrapezoid(-3,6,2)).toEqual(false);
        });
        it('should return false, if b is negative', function()
        {
            expect(exercise1.areaOfTrapezoid(3,-6,2)).toEqual(false);
        });
        it('should return false, if h is negative', function()
        {
            expect(exercise1.areaOfTrapezoid(3,6,-2)).toEqual(false);
        });
        it('should return false, if a is String', function()
        {
            expect(exercise1.areaOfTrapezoid("ala",6,2)).toEqual(false);
        });
        it('should return false, if a is String with number value', function()
        {
            expect(exercise1.areaOfTrapezoid("3",6,2)).toEqual(false);
        });
    });
});
