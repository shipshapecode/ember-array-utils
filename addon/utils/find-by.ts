interface IObjectKeys {
  [key: string]: any;
}

export default function findBy(
  array: Array<Object>,
  key: string,
  value: any
) {
  return array?.find((item: IObjectKeys) => {
    return item[key] === value;
  });
}