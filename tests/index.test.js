import getRandomFact from '../index.js';
import { randomFactList } from '../list.js';

console.log('Running Test for getRandomFact function...');

const fact = getRandomFact();

if (randomFactList.includes(fact)) {
    console.log('✅ Test Passed: The fact returned is present in the randomFactList.');
} else {
    console.error('❌ Test Failed: The returned fact is NOT present in the randomFactList.');
}
