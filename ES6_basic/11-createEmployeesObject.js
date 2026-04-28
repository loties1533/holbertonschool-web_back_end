export default function createEmployeesObject(departmentName, employees) {
  const ObjectEmployées = {
    [departmentName]: employees,
  };

  return ObjectEmployées;
}
