export default function iterateThroughObject(reportWithIterator) {
  let employeesName = '';
  reportWithIterator.forEach((name, index) => {
    employeesName += name;
    if (index !== reportWithIterator.length - 1) employeesName += ' | ';
  });
  return employeesName;
}
