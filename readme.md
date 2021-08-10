# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rewpt/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqualTest`: Checks if two arrays have same values
* `assertEqual`: Checks if two values are equal
* `assertObjectsEqual`: Checks if two objects have same keys and values
* `head`: Returns first value ("head") of an array
* `middle`: Sorts array of nums then returns middle value of an array or two middle numbers if even number of values
* `tail`: Returns all values of array except the first