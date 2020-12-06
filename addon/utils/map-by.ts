interface IObjectKeys {
  [key: string]: any;
}

export default function mapBy(
  array: Array<Object>,
  key: string
) {
  return array?.map((item: IObjectKeys) => {
    return item[key];
  });
}