/**
 * Created by luisf on 15/05/2017.
 */

const opts = process.env.TS_NODE_COMPILER_OPTIONS;
console.log(opts);
console.log(typeof opts);
console.log('Try parse', JSON.parse(opts));