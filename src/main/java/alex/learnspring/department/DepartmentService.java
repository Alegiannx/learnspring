package alex.learnspring.department;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DepartmentService {

    public static Department dep1 = new Department();
    public static Department dep2 = new Department();

    @Autowired
    private DepartmentRepository departmentRepository;

    public void createTestSubjects() {
        dep1.setTitle("D-partment");
        dep2.setTitle("Despacito");

        departmentRepository.save(dep1);
        departmentRepository.save(dep2);
    }

    public List<Department> getAllDepartments() {
        List<Department> departments = new ArrayList<>();
        departmentRepository.findAll().forEach(departments::add);
        return departments;
    }

    public void createDepartment(Department department) {
        departmentRepository.save(department);
    }

    public Department getDepartment(Long id) {
        return departmentRepository.findById(id).orElse(null);
    }

    public void updateDepartment(Department updated) {
        departmentRepository.save(updated);
    }

    public void deleteDepartment(Long id) {
        departmentRepository.deleteById(id);
    }

}