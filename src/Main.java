
public class Main {

    public static void main(String[] args) {

        // Create Employee objects
        Employee employee1 =
                new Employee(1001, "Arun", 30000);

        Employee employee2 =
                new Employee(1002, "Priya", 35000);

        // Display employee details
        System.out.println("\nEMPLOYEE DETAILS");
        employee1.displayEmployee();

        System.out.println();
        employee2.displayEmployee();
    }
}
