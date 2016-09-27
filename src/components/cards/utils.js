
import _ from 'lodash';

export function maxInARow(chars) {
  let [maxCount, count] = [1, 1];
  const nums = chars.map((num) => num.charCodeAt());
  nums.reduce((prev, current) => (
    (prev - 1) !== current && (count = 0),
    ++count > maxCount && (maxCount = count),
    current
  ));

  return maxCount;
}

export const maxNumsInARow = (nums) => _.chain(nums)
.sortBy()
.uniq()
.map((num, i) => (num - i))
.groupBy()
.orderBy('length')
.last()
.value()
.length;
