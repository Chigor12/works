# Function to calculate gross pay
def calculate_gross_pay(hourly_rate, hours_worked):
    if hours_worked <= 50:
        gross_pay = hourly_rate * hours_worked
    else:
        regular_pay = 50 * hourly_rate
        overtime_hours = hours_worked - 50
        overtime_pay = overtime_hours * (2.5 * hourly_rate)
        gross_pay = regular_pay + overtime_pay
    return gross_pay


# Function to calculate tax and net pay
def calculate_net_pay(gross_pay):
    if gross_pay > 10000:
        tax = 0.25 * gross_pay
    elif gross_pay > 6000:
        tax = 0.20 * gross_pay
    else:
        tax = 0.10 * gross_pay

    net_pay = gross_pay - tax
    return tax, net_pay


# Main program
# Input from user
hourly_rate = float(input("Enter hourly wage: "))
hours_worked = float(input("Enter number of hours worked: "))

# Calculate gross pay
gross_pay = calculate_gross_pay(hourly_rate, hours_worked)

# Calculate net pay
tax, net_pay = calculate_net_pay(gross_pay)

# Display results
print("\n--- Pay Summary ---")
print("Gross pay:" ,gross_pay)
#print(f"Gross Pay: {gross_pay:.2f}")
#print(f"Tax Deducted: {tax:.2f}")
print("Tax Deducted:" ,tax, "\n")
print("Net Pay:" ,net_pay)
print(f"Net Pay: {net_pay:.2f}")