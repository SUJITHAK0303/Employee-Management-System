import java.util.*;
public class Collections {
    
    public static void main(String[] args) {

        ArrayList<String> employees = new ArrayList<>();
        HashMap<Integer, String> employeeMap = new HashMap<>();

        // Add employees
        employees.add("Arun - 30000");
        employees.add("Priya - 35000");
        employees.add("Karthik - 40000");

        employeeMap.put(101, "Arun - 30000");
        employeeMap.put(102, "Priya - 35000");
        employeeMap.put(103, "Karthik - 40000");

        // Display all employees
        System.out.println("ALL EMPLOYEES");
        for (String employee : employees) {
            System.out.println(employee);
        }

        // Search employee
        int searchId = 102;

        System.out.println("\nSEARCH EMPLOYEE");

        if (employeeMap.containsKey(searchId)) {
            System.out.println(employeeMap.get(searchId));
        } else {
            System.out.println("Employee Not Found");
        }

        // Total employees
        System.out.println("\nTotal Employees: " + employees.size());
    }
}


