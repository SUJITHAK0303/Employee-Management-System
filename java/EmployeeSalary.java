
public class EmployeeSalary {

    public static void main(String[] args) {

        String employeeName = "Arun";

        double basicSalary = 20000;
        double hra = 5000;
        double da = 2000;
        double pf = 1800;
        double grossSalary = basicSalary + hra + da;
        double netSalary = grossSalary - pf;

        System.out.println("Employee Name: " + employeeName);
        System.out.println("Basic Salary: " + basicSalary);
        System.out.println("HRA: " + hra);
        System.out.println("DA: " + da);
        System.out.println("Gross Salary: " + grossSalary);
        System.out.println("PF: " + pf);
        System.out.println("Net Salary: " + netSalary);
    }
}
