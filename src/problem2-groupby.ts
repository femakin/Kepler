type KeyType = string | number;

type GroupedData<T> = Record<KeyType, T[]>;

export function groupBy<T>(arr: T[], key: keyof T): GroupedData<T> {
  const grouped: GroupedData<T> = {};

  // Given data Types = Array of Objects
  // Given data = Array (Input)
  // To Do
  // To group by key
  // check the key/value I'm grouping by

  for (let i = 0; i < arr.length; i++) {

    // console.log(arr[i], 'This is the log')

    // if () {

    // }
    console.log([], 'individual Object')

    // console.log([...arr[i]], 'first sample')



  }

  // for (const key in arr) {
  //   // if (Object.prototype.hasOwnProperty.call(object, key)) {
  //   //   const element = object[key];

  //   // }

  //   console.log(grouped, 'first sample')

  // }


  return grouped;
}
