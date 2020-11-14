export const chunkArray = (array: any[]) => {
  let size: number;
  if (array.length > 4) {
    size = 4;
  } else {
    size = 1;
  }
  const chunked_arr = [];
  for (let i = 0; i < array.length; i++) {
    const last = chunked_arr[chunked_arr.length - 1];
    if (!last || last.length === size) {
      chunked_arr.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }

  return chunked_arr;
};
