interface Iuser {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export const userApi = {
  getUser: async (url: string): Promise<Iuser> => {
    try {
      const data = await fetch(url);
      console.log(data);

      return data.json();
    } catch (e) {
      throw new Error(e);
    }
  },
};
