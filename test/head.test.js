const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([4]), 4);
assertEqual(head([4.6,5]), 4.6);