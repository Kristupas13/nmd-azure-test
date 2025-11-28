
export type mockDataType = {
  data: string;
};


export async function mockDataWithDelay(): Promise<mockDataType[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ data: "This is some mock data." }]);
    }, 1000);
  });
}

