// Base User class
class User {
  private username: string;
  private password: string; // ECMAScript private field

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  // Method to set password securely
  public setPassword(newPassword: string): void {
    if (newPassword.length >= 6) {
      this.password = newPassword;
      console.log(`${this.username}: Password updated successfully.`);
    } else {
      console.log(`${this.username}: Password must be at least 6 characters.`);
    }
  }

  // Method to validate password
  public validatePassword(input: string): boolean {
    return this.password === input;
  }

  public getUsername(): string {
    return this.username;
  }

  // Only Admin can use this method (defined in subclass)
  protected _forceResetPassword(newPassword: string): void {
    this.password = newPassword;
  }
}

// Admin class extends User and can reset other users' passwords
class AdminUser extends User {
  constructor(username: string, password: string) {
    super(username, password);
  }

  public resetUserPassword(targetUser: User, newPassword: string): void {
    console.log(`${this.getUsername()} is resetting password for ${targetUser.getUsername()}`);
    (targetUser as any)._forceResetPassword(newPassword); // Type-safe workaround
    console.log(`Password reset successfully for ${targetUser.getUsername()}`);
  }
}

// Usage
const user1 = new User("john_doe", "john123");
const user2 = new User("jane_smith", "jane123");
const admin = new AdminUser("admin_user", "admin123");

// Regular usage
user1.setPassword("newpass");
console.log("Validate:", user1.validatePassword("newpass")); // true

// Admin resets password
admin.resetUserPassword(user2, "newJanePass");
console.log("Validate Jane:", user2.validatePassword("newJanePass")); // true
