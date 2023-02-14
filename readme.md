# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shorouk/lotide`

**Require it:**

`const _ = require('@shorouk/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)` : Will take in an array and return the first element of the array.
* `tail(arr)` : Will take in an array and return every element except the head (first element) of the array.
* `middle(arr)` : Will take in an array and return the middle-most element(s) of the given array.
* `countLetters(str)` : Will take a string and returns an object where each unique character encountered in the string is a property of the object and the value for that property/key is the number of occurrences for that character. <b>(won't couns spaces).</b>
* `assertEqual(val1,val2)` : Will take in two primitive values and console.log an message to the console depending on whether the two values are equal or not.
* `eqArrays(arr1, arr2)` : Will take in two arrays and returns true or false, based on a perfect match.
* `assertArraysEqual(arr1, arr2)` :  Will take in two arrays and console.log an message to the console depending on whether the two arrays are equal or not.
* `assertObjectsEqual(obj1, obj2)` : Will take in two objects and console.log an message to the console depending on whether the two objects are equal or not.
* `eqObjects(obj1, obj2)` : Will take in two objects and returns true or false, based on a perfect match.
* `countOnly(allItems, itemsToCount)` : Will take in a collection of items and return counts for a specific subset of those item.
* `findKeyByValue(obj, value)` : Will take in an object and a value. It scans the object and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
* `letterPositions(string)` : Will take in a string and return all the indices (zero-based positions) in the string where each character is found.<b>(will skip spaces).</b>
* `takeUntil(arr, callback)` : Will take in an array and a callback function and will keep collecting items from the provided array until the callback returns a truthy value.
* `findKey(obj, callback)` : Will take in an object and a callback function. It scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* `flatten(arr)` :  Will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `map(arr,callback)` : Will take in an array and a callback function and will return a new array based on the results of calling the callback function and passing each element of the array.
* `without(allElements, unwantedElements)` : Will take in two arrays and returns a subset of the all elements array, removing the unwanted elements