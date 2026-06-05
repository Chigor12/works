"""class BankAccount:
    # Constructor with default values
    def __init__(self, account_number="", owner_name="", balance=0.0):
        self.__account_number = account_number
        self.__owner_name = owner_name
        self.__balance = balance

    # Getter methods
    def get_account_number(self):
        return self.__account_number

    def get_owner_name(self):
        return self.__owner_name

    def get_balance(self):
        return self.__balance

    # Setter methods
    def set_account_number(self, account_number):
        self.__account_number = account_number

    def set_owner_name(self, owner_name):
        self.__owner_name = owner_name

    def set_balance(self, balance):
        if balance >= 0:
            self.__balance = balance
        else:
            print("Balance cannot be negative.")

    # Method to deduct monthly fee
    def deduct_monthly_fee(self):
        self.__balance -= 4.00

    # Static method explaining account policy
    @staticmethod
    def explain_account_policy():
        print("A $4.00 service fee will be deducted from your account each month.")


# Example usage
account = BankAccount("543216", "Chigor Ituma", 100.00)

print("Account Number:", account.get_account_number())
print("Owner Name:", account.get_owner_name())
print("Balance:", account.get_balance())

account.deduct_monthly_fee()
print("Balance after monthly fee:", account.get_balance())

BankAccount.explain_account_policy()"""


class BankAccount:
    # Constructor with default values
    def __init__(self, account_number="000000", owner_name="Unknown", balance=0.0):
        self.__account_number = account_number
        self.__owner_name = owner_name
        self.__balance = balance

    # Getters
    def get_account_number(self):
        return self.__account_number

    def get_owner_name(self):
        return self.__owner_name

    def get_balance(self):
        return self.__balance

    # Setters
    def set_account_number(self, account_number):
        self.__account_number = account_number

    def set_owner_name(self, owner_name):
        self.__owner_name = owner_name

    def set_balance(self, balance):
        if balance >= 0:
            self.__balance = balance
        else:
            print("Balance cannot be negative.")

    # Deduct monthly fee
    def deduct_monthly_fee(self):
        self.__balance -= 4.00

    # Static method
    @staticmethod
    def explain_account_policy():
        print("A $4.00 service fee will be deducted from your account each month.")


# Function to get user input and return a BankAccount object
def get_data():
    acc_num = input("Enter account number: ")
    name = input("Enter owner's name: ")
    balance = float(input("Enter account balance: "))

    return BankAccount(acc_num, name, balance)


# Function to display values and update balance
def show_values(account):
    print("\n--- Account Details ---")
    print("Account Number:", account.get_account_number())
    print("Owner Name:", account.get_owner_name())
    print("Balance:", account.get_balance())

    # Deduct monthly fee
    account.deduct_monthly_fee()
    print("Balance after $4 monthly fee:", account.get_balance())

    # Show policy
    BankAccount.explain_account_policy()


# Create four accounts
print("Enter details for Account 1")
account1 = get_data()

print("\nEnter details for Account 2")
account2 = get_data()

print("\nEnter details for Account 3")
account3 = get_data()

# Fourth account uses default constructor values
account4 = BankAccount()

# Display all accounts
show_values(account1)
show_values(account2)
show_values(account3)
show_values(account4)