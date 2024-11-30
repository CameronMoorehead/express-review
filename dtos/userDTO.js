// dtos/userDTO.js
class UserDTO {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  
    static fromEntity(user) {
      return new UserDTO(user.id, user.name, user.email);
    }
  }
  
  export default UserDTO;
  