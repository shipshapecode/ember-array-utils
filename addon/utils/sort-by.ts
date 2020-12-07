interface IObjectKeys {
  [key: string]: any;
}

export default function sortBy(
  array: Array<Object>,
  key: string
) {
  return array?.sort((item1: IObjectKeys, item2: IObjectKeys) => {
    if (item1[key] < item2[key]) {
      return -1;
    }

    if (item1[key] < item2[key]) {
      return 1;
    }
  
    return 0;
  });
}