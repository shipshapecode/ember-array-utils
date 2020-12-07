interface IObjectKeys {
  [key: string]: any;
}

export default function sortBy(array: Array<Object>, key: string) {
  return array?.sort((item1: IObjectKeys, item2: IObjectKeys) => {
    let item1Value = item1[key];
    let item2Value = item2[key];

    if (item1Value instanceof Date) {
      item1Value = item1Value.toISOString();
    }

    if (item2Value instanceof Date) {
      item2Value = item2Value.toISOString();
    }

    if (item1[key] < item2[key]) {
      return -1;
    }

    if (item1[key] < item2[key]) {
      return 1;
    }

    return 0;
  });
}
