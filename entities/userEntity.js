// entities/User.js
class User {
    constructor(id, name, email, password) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
    }
  
    // Example business logic: hash password
    hashPassword() {
      // Logic to hash the password (simplified for example)
      this.password = `hashed_${this.password}`;
    }
  
    // Example business logic: validate email
    validateEmail() {
      return /\S+@\S+\.\S+/.test(this.email);
    }
  }
  
export default User;
  