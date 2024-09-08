public class Lab1DataTypes {
    public static void main(String[] args) {
        // i declared two integers, num1 and num2, and set their values to 16 and 3
        int num1 = 16;
        int num2 = 3;
        
        // a third integer is declared to store operation results
        int result;
        
        // performing arithmetic operations with integers
        System.out.println("Integer Operations:");
        
        // i did it this way to add num1 and num2 and print the result
        result = num1 + num2;
        System.out.println("Addition: " + result);
        
        // i subtracted num2 from num1 and printed the result
        result = num1 - num2;
        System.out.println("Subtraction: " + result);
        
        // multiplying num1 and num2
        result = num1 * num2;
        System.out.println("Multiplication: " + result);
        
        // dividing num1 by num2 (integer division)
        result = num1 / num2;
        System.out.println("Integer Division: " + result);
        
        // finding the remainder of num1 divided by num2
        result = num1 % num2;
        System.out.println("Remainder: " + result);
        
        // i incremented num1 by 1 using the increment operator
        num1++; 
        System.out.println("Incremented num1: " + num1);
        
        // declared two double variables with values 16.0 and 3.0
        double num1D = 16.0;
        double num2D = 3.0;
        
        // using a double variable to store results of double operations
        double resultD;
        
        // performing arithmetic operations with doubles
        System.out.println("\nDouble Operations:");
        
        // dividing num1D by num2D
        resultD = num1D / num2D;
        System.out.println("Division: " + resultD);
        
        // rounding the division result
        long roundedResult = Math.round(resultD);
        System.out.println("Rounded Division: " + roundedResult);
        
        // cubing num1D using Math.pow
        resultD = Math.pow(num1D, 3);
        System.out.println("Cubed value of num1D: " + resultD);
        
        // finding the square root of num2D using Math.sqrt
        resultD = Math.sqrt(num2D);
        System.out.println("Square root of num2D: " + resultD);
    }
}
