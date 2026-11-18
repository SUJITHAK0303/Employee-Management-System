public class ExceptionHandling {

    public static void main(String[] args) {

        try {
            int salary = 30000;
            int result = salary / 0;
            System.out.println(result);
        }

        catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        }

        finally {
            System.out.println("Program completed");
        }
    }
}

