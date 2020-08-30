package alex.learnspring.employee;

import javax.persistence.*;

import alex.learnspring.department.Department;

@Entity
public class Employee {
    @Id
    @GeneratedValue
    private Long id;

    private String fname;
    private String lname;
    private String job;
    private String afm;

    @ManyToOne
    private Department department;

    public Long getId() {
        return id;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fn) {
        fname = fn;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String ln) {
        lname = ln;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String j) {
        job = j;
    }

    public String getAfm() {
        return afm;
    }

    public void setAfm(String afm) {
        this.afm = afm;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department dep) {
        department = dep;
    }
}