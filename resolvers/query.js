import ListUsers from "../models/listUsers";

const query = {
  list: async () => await ListUsers.find({}),

  name: async (_, args) => {
    const result = await ListUsers.find({ name: `${args.name}` });
    return result
  },

  surname: async (_, args) => {
    const result = await ListUsers.find({ surname: `${args.surname}` });
    return result
  },

  email: async (_, args) => {
    const result = await ListUsers.find({ email: `${args.email}` });
    return result
  },

  telephone: async (_, args) => {
    const result = await ListUsers.find({ telephone: `${args.telephone}` });
    return result
  },

  birthday: async (_, args) => {
    const result = await ListUsers.find({ birthday: `${args.birthday}` });
    return result
  },
};

export default query;