#!/usr/bin/env node

import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from 'fs';
import solution from '../index.js';
import { log } from "node:console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const fileName = process.argv[2];
const content = fs.readFileSync(path.join(
  __dirname,
  '..',
  fileName
), 'utf-8');


let split = content.split('\r\n')
let vvv = split.slice(1, split.length)
console.log(`всего пассажиров ${vvv.length-1}`);


let ttt = split.map(r => r.split(',')[12])
let uniques = []
for(let port of ttt){
  if(!uniques.includes(port) && port !== '' && port !== undefined){
    uniques.push(port)
  }
}
console.log(`именования портов ${uniques}`);

let yyy = vvv.map(r => r.split(',')[5])
let male = 0
let female = 0
let zzz = yyy.map(r =>{
  if(r === 'male'){
    male += 1
  }
  if(r === 'female'){
    female += 1
  }
  return
})
let sootnochenie = male/female
console.log(`Соотношение ${sootnochenie}`);