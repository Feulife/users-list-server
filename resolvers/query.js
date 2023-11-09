import ListUsers from "../models/listUsers.js";

const query = {
  lists: async () => await ListUsers.find({}).limit(100),

  users: async (_, { cursor }) => {
    const limit = 10
    let hasNextPage = false
    let cursorQuery = {}
    if (cursor) cursorQuery = { _id: { $lt: cursor } }
    let lists = await ListUsers
      .find(cursorQuery)
      .sort({ _id: -1 })
      .limit(limit + 1)
    if (lists.length > limit) {
      hasNextPage = true
      lists = lists.slicea(0, -1)
    }
    const newCursor = lists[lists.length - 1]._id
    return {
      lists,
      cursor: newCursor,
      hasNextPage
    }
  },

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