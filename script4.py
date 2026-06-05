# Base class
class Calculation:
    def add(self, a, b):
        return a + b

    def subtract(self, a, b):
        return a - b


# Derived class
class AdvancedCalculation(Calculation):
    def multiply(self, a, b):
        return a * b

    def divide(self, a, b):
        if b != 0:
            return a / b
        else:
            return "Error: Division by zero"


# Main program
calc = AdvancedCalculation()

a = 20
b = 10

print("Addition:", calc.add(a, b))
print("Subtraction:", calc.subtract(a, b))
print("Multiplication:", calc.multiply(a, b))
print("Division:", calc.divide(a, b))