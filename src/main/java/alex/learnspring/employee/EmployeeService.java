package alex.learnspring.employee;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import alex.learnspring.department.DepartmentService;

@Service
public class EmployeeService {

    public static Employee emp1 = new Employee();
    public static Employee emp2 = new Employee();
    public static Employee emp3 = new Employee();
    public static Employee emp4 = new Employee();

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        List<Employee> employees = new ArrayList<>();
        employeeRepository.findAll().forEach(employees::add);
        return employees;
    }

    public void createTestSubjects() {
        emp1.setFname("Alexandros");
        emp2.setFname("Giorgos");
        emp3.setFname("Dimitris");
        emp4.setFname("Vironas");
        emp1.setLname("Karagiannis");
        emp2.setLname("Mitropoulos");
        emp3.setLname("Papaioannou");
        emp4.setLname("Bergos");
        emp1.setAfm("12345");
        emp2.setAfm("56789");
        emp3.setAfm("01298");
        emp4.setAfm("67584");
        emp1.setJob("developer");
        emp2.setJob("artist");
        emp3.setJob("ceo");
        emp4.setJob("advertiser");
        emp1.setDepartment(DepartmentService.dep1);
        emp2.setDepartment(DepartmentService.dep2);
        emp3.setDepartment(DepartmentService.dep1);
        emp4.setDepartment(DepartmentService.dep2);

        employeeRepository.save(emp1);
        employeeRepository.save(emp2);
        employeeRepository.save(emp3);
        employeeRepository.save(emp4);
    }

    public void createEmployee(Employee employee) {
        employeeRepository.save(employee);
    }

    public Employee getEmployee(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    public void updateEmployee(Employee updated) {
        employeeRepository.save(updated);
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}