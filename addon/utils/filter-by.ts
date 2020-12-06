interface IObjectKeys {
  [key: string]: any;
}

export default function filterBy(
  array: Array<Object>,
  key: string,
  value: any
) {
  return array?.filter((item: IObjectKeys) => {
    return item[key] === value;
  });
}
