import filterBy from 'dummy/utils/filter-by';
import { module, test } from 'qunit';

module('Unit | Utility | filterBy', function () {
  test('filters correctly', function (assert) {
    const testArray = [
      {
        foo: '1',
        bar: 1
      },
      { foo: '2', bar: 2 },
      { foo: '3', bar: 3 },
      { foo: '4', bar: 3 },
      { foo: '5', bar: 3 }
    ];
    assert.deepEqual(filterBy(testArray, 'foo', '2'), [{ foo: '2', bar: 2 }]);
    assert.deepEqual(filterBy(testArray, 'bar', 3), [
      { foo: '3', bar: 3 },
      { foo: '4', bar: 3 },
      { foo: '5', bar: 3 }
    ]);
  });
});
