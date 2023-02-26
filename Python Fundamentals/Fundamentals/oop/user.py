class User:
    def __init__(self, first_name, last_name, email, age):
        self.fname = first_name
        self.lname = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print("User info: ", "\n",self.fname,"\n", self.lname, "\n",self.email, "\n",self.age)
        return self

    def enroll(self):
        if self.is_rewards_member == True:
            print("User already a member")
        else:
            self.is_rewards_member = True
            self.gold_card_points = 200
        return self

    def spend_points(self, amount):
        if (self.gold_card_points >= amount):
            self.gold_card_points -= amount
            print(self.gold_card_points)
        else:
            print('insufficient points')
        return self



nima = User("Nima", "Bazofti", "nima@gmail.com", 29)
andres = User("Andres", "Yooo", "andres@gmail.com", 31)
jh = User("John", "Henry", "jh@gmail.com", 34)

nima.display_info().enroll().spend_points(50)
andres.display_info().enroll().spend_points(80)
jh.display_info().enroll().spend_points(300)


# nima.display_info()
# nima.enroll()
# print(nima.spend_points(50))

# andres.display_info()
# andres.enroll()
# print(andres.spend_points(80))

# jh.display_info()
# jh.enroll()
# print(jh.spend_points(100))

