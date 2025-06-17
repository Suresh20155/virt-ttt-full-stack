type Student = {
  name: string;
  grades?: number[];  // Optional grades field
};

const students: Student[] = [
  { name: "Ramesh", grades: [90, 85, 88] },
  { name: "Suresh" }, // No grades field
  { name: "Ravi", grades: [] }, // Empty grades
  { name: "Bharath", grades: [70, 75, 80, 85] }
];

// Function to calculate average using arrow function
const calculateAverage = (grades: number[]): number =>
  grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

// Generate message for each student
const messages = students.map(student => {
  const grades = student.grades;
  if (grades?.length) {
    const avg = calculateAverage(grades);
    return `Student ${student.name} has an average grade of ${avg.toFixed(2)}`;
  } else {
    return `Student ${student.name} has no grades.`;
  }
});

// Output result
messages.forEach(msg => console.log(msg));
