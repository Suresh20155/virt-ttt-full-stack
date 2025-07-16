const privilegedRoles = ["admin", "moderator", "superuser"];

const user = {
  name: "Suresh",
  roles: ["editor", "moderator", "contributor"]
};

const hasAccess = user.roles.some(role => privilegedRoles.includes(role));
const powerScore = Math.pow(2, user.roles.length);

if (hasAccess) {
  console.log(`Access Granted. Power Score: ${powerScore}`);
} else {
  console.log(`Access Denied. Power Score: ${powerScore}`);
}
