type Person = {
  name: string;
  birthdate: string; // Format: "YYYY-MM-DD"
};

// Sample Indian names and birthdates
const people: Person[] = [
  { name: "Ramesh", birthdate: "1990-06-17" },
  { name: "Sita", birthdate: "1985-12-10" },
  { name: "Arjun", birthdate: "2000-06-17" },
  { name: "Meena", birthdate: "1992-03-25" }
];

// Get today's date parts
const today = new Date();
const todayMonth = today.getMonth(); // 0-based (0 = Jan)
const todayDate = today.getDate();

// Check who has birthday today
const birthdayMessages = people
  .map(person => {
    const birth = new Date(person.birthdate);
    if (birth.getDate() === todayDate && birth.getMonth() === todayMonth) {
      return `Today is ${person.name}'s birthday!`;
    }
    return null;
  })
  .filter(msg => msg !== null) as string[];

// Output
if (birthdayMessages.length > 0) {
  birthdayMessages.forEach(msg => console.log(msg));
} else {
  console.log("No birthdays today.");
}
