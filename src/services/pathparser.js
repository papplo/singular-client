export default async (path) => {
  const params = {}
  const arr = path.split('/');
  params.root = arr[1];
  params.name = arr[2];
  params.id = arr[3]
  console.log('inside pathparser:', params)
  return params;
}