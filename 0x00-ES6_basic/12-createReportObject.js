export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(depts) {
      return Object.keys(depts).length;
    },
  };
}
