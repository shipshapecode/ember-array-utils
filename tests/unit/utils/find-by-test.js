import findBy from 'dummy/utils/find-by';
import { module, test } from 'qunit';

module('Unit | Utility | findBy', function () {
  test('finds correctly', function (assert) {
    const testArray = [
      {
        foo: '1',
        bar: 1
      },
      { foo: '2', bar: 2 },
      { foo: '3', bar: 3 }
    ];
    assert.deepEqual(findBy(testArray, 'foo', '2'), { foo: '2', bar: 2 });
    assert.deepEqual(findBy(testArray, 'bar', 3), { foo: '3', bar: 3 });
  });
});
