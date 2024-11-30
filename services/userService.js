import User from '../entities/User';
import UserRepository from '../repositories/userRepository';
import UserDTO from '../dtos/userDTO';

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async getUserById(id) {
    const userData = await this.userRepository.findById(id);
    if (!userData) throw new Error('User not found');

    // Convert plain data to an entity
    const userEntity = new User(userData.id, userData.name, userData.email, userData.password);

    // Return a DTO to the controller
    return UserDTO.fromEntity(userEntity);
  }

  async createUser(data) {
    const userEntity = new User(null, data.name, data.email, data.password);
    userEntity.hashPassword();

    const savedUser = await this.userRepository.save(userEntity);
    return UserDTO.fromEntity(new User(savedUser.id, savedUser.name, savedUser.email));
  }
}

export default UserService;
