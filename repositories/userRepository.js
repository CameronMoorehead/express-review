import UserModel from '../models/userModel';

class UserRepository {
  async findById(id) {
    const userRecord = await UserModel.findByPk(id);
    return userRecord ? userRecord.toJSON() : null;
  }

  async save(user) {
    const userRecord = await UserModel.create(user);
    return userRecord.toJSON();
  }
}

export default UserRepository;
