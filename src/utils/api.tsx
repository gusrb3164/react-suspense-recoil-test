interface Iuser {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export const userApi = {
  getUser: async (): Promise<Iuser> => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log(data);

      return data.json();
    } catch (e) {
      throw new Error(e);
    }
  },
};
