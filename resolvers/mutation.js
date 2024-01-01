import ListUsers from "../models/listUsers.js";

const mutation = {
  create: async (_, { name, surname, email, telephone, birthday }) => {
    const newList = new ListUsers({ name, surname, email, telephone, birthday })
    await newList.save()
    return newList
  },

  delete: async (_, { id }) => {
    const result = await ListUsers.deleteOne({ _id: id })
    if (result.acknowledged && result.deletedCount == 1) {
      return id
    }
    return null
  },

  edit: async (_, {id, name, surname, email, telephone, birthday }) => {
    const result = await ListUsers.updateOne(
      { _id: id },
      { $set: { name, surname, email, telephone, birthday } }
    )
    if (result.acknowledged && result.modifiedCount == 1) {
      return await ListUsers.findOne({ _id: id })
    }
    return null
  }
}

export default mutation;