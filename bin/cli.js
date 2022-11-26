#!/usr/bin/env node

import minimist from "minimist"
import { roll } from "../lib/roll.js"

const args = minimist(process.argv.slice(2))

if (args.sides) {
    var sides = args.sides;
}
else {
    var sides = 6;
}

if (args.dice) {
    var dice = args.dice;
}
else {
    var dice = 2;
}

if (args.rolls) {
    var rolls = args.rolls;
}
else {
    var rolls = 1;
}

console.log(JSON.stringify(roll(sides, dice, rolls)))