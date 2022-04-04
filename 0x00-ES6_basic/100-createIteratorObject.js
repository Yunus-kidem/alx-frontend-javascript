export default function createIteratorObject(report) {
  const employees = [];
  for (const dept of Object.keys(report.allEmployees)) {
    for (const employee of report.allEmployees[dept]) {
      employees.push(employee);
    }
  }
  return employees;
}
