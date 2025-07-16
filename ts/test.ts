// Global name variable (remains constant)
const userName: string = "Alice";

// User profile object
let userProfile = {
  name: userName,
  role: "guest"
};

console.log("Before role update:");
console.log(`Name: ${userProfile.name}, Role: ${userProfile.role}`);

// A block where the role is updated
{
  userProfile.role = "admin"; // Role changed
 // name remains same since userName is constant and not reassigned
}

console.log("After role update:");
console.log(`Name: ${userProfile.name}, Role: ${userProfile.role}`);
