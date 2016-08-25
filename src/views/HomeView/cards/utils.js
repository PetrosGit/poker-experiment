export function maxNumsInARow(nums) {
  let [maxCount, count] = [1, 1];
  nums.reduce((prev, current) => (
    (prev - 1) !== current && (count = 0),
    ++count > maxCount && (maxCount = count),
    current
  ));

  return maxCount;
}

import _ from 'lodash';

export const maxInARow = (nums) => _.chain(nums)
.sortBy()
.uniq()
.map((num, i) => (num - i))
.groupBy()
.orderBy('length')
.last()
.value()
.length;
