/**
 * Created by luisf on 15/05/2017.
 */

const e = process.env.TS_NODE_COMPILER_OPTIONS;
console.log(e);
console.log(typeof e);
console.log('Try parse', JSON.parse(e));
console.log('normal', JSON.parse('{"module":"commonjs"}'));