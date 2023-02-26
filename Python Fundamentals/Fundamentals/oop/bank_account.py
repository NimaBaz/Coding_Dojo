class BankAccount:
    # don't forget to add some default values for these parameters!
    all_accounts = []

    def __init__(self, user, int_rate, balance): 
        # your code here! (remember, instance attributes go here)
        # don't worry about user info here; we'll involve the User class soon
        self.rate = int_rate
        self.balance = balance
        self.user = user
        BankAccount.all_accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        print(self.balance)
        return self
            

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
            print(self.balance)
            return self
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
            print(self.balance)
            return self

    def display_account_info(self):
        print(f"Balance: ${self.balance}")
        return self
        

    def yield_interest(self):
        if self.balance > 0:
            self.balance += self.balance * self.rate
        else:
            print("Insufficient funds")
        return self

    @classmethod
    def all_balances(cls):
        for account in cls.all_accounts:
            print(f"{account.user} ${account.balance} and the interest rate is {account.rate}")


account1 = BankAccount("Nima's Account has: ", 0.1, 2000)
account1.deposit(500).withdraw(3000).yield_interest().display_account_info()

account2 = BankAccount("Yooo's Account has: ", 10, 2000)
account2.deposit(8000).withdraw(5000).yield_interest().display_account_info()

BankAccount.all_balances()

class User:
    def __init__(self, name, email, account):
        self.name = name
        self.email = email
        self.account = account
    
    # other methods
    
    def make_deposit(self, i, amount):
        self.account[i].deposit(amount)
        return self

    def make_withdrawal(self, i, amount):
        self.account[i].withdraw(amount)
        return self

    def display_user_balance(self, i):
        self.account[i].display_account_info()
        return self

    def transfer_money(self, amount, other_user, i, j):
        self.account[i].withdraw(amount)
        other_user.account[j].deposit(amount)
        self.account[i].display_account_info()
        other_user.account[j].display_account_info()

user1 = User("Nima", "nima@gmail.com", [BankAccount(User, int_rate=0.02, balance=0), BankAccount(User, int_rate=0.02, balance=100)])
user1.make_deposit(0, 500).make_withdrawal(0, 100).display_user_balance(0)

user2 = User("John", "john@gmail.com", [BankAccount(User, int_rate=0.05, balance=0), BankAccount(User, int_rate=0.05, balance=100)])
user2.make_deposit(1, 500).make_withdrawal(1, 100).display_user_balance(1)

user1.transfer_money(200, user2, 0, 1)

