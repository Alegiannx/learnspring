package alex.learnspring.employee;

import java.net.URISyntaxException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/employee/{id}")
    public Employee getEmployee(@PathVariable Long id) {
        return employeeService.getEmployee(id);
    }

    @PostMapping("/esetup")
    public void createTestSubjects() {
        employeeService.createTestSubjects();
    }

    @PostMapping("/employee")
    public void createEmployee(@RequestBody Employee employee) throws URISyntaxException {
        employeeService.createEmployee(employee);
    }

    @PutMapping("/employee/{id}")
    public void updateDepartment(@PathVariable Long id, @RequestBody Employee employee) {
        employeeService.updateEmployee(employee);
    }

    @DeleteMapping("/employee/{id}")
    public void deleteDepartment(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
    }
}