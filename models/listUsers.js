import mongoose from "mongoose";

const ListUsersSchema = mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  telephone: String,
  birthday: String,
});

const ListUsers = mongoose.model('List', ListUsersSchema);
export default ListUsers;