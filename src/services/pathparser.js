export default async (path) => {
  console.log(path);
  const params = {}
  const arr = path.split('/');
  params.root = arr[1];
  params.first = arr[2];
  params.second = arr[3]
  console.log('inside pathparser:', params)
  return params;
}