import sortBy from 'dummy/utils/sort-by';
import { module, test } from 'qunit';

module('Unit | Utility | sortBy', function () {
  test('sorts correctly', function (assert) {
    const testArray = [
      {
        foo: '1',
        bar: 1
      },
      { foo: '3', bar: 3 },
      { foo: '2', bar: 2 }
    ];
    assert.deepEqual(sortBy(testArray, 'foo'), [
      {
        foo: '1',
        bar: 1
      },
      { foo: '2', bar: 2 },
      { foo: '3', bar: 3 }
    ]);
    assert.deepEqual(sortBy(testArray, 'bar'), [
      {
        foo: '1',
        bar: 1
      },
      { foo: '2', bar: 2 },
      { foo: '3', bar: 3 }
    ]);
  });
});
