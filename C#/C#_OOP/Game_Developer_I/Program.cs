Attack Punch = new Attack("Punch", 100);
Attack Fireball = new Attack("Fireball ", 300);
Attack Bow = new Attack("Bow ", 200);
Attack Gun = new Attack("Gun ", 500);
Enemy MyOpponent = new Enemy("C#", 1000);
Enemy MyOpponent2 = new Enemy("Java", 1000);

Punch.DamageInfo();

MyOpponent.AddHealth(100);
MyOpponent.AddAttack(Punch);
MyOpponent.AddAttack(Fireball);
MyOpponent.AddAttack(Bow);
MyOpponent.AddAttack(Gun);
MyOpponent.ListOfAttacks();
MyOpponent.EnemyInfo();

MyOpponent2.AddHealth(100);
MyOpponent2.AddAttack(Punch);
MyOpponent2.AddAttack(Fireball);
MyOpponent2.AddAttack(Bow);
MyOpponent2.AddAttack(Gun);
MyOpponent.ListOfAttacks();
MyOpponent2.EnemyInfo();

class Attack {
    public string Name {get; set;}
    public int DamageAmount {get; set;}

    public Attack (string name, int damage) {
        Name = name;
        DamageAmount = damage;
    }

    public void DamageInfo() {
        System.Console.WriteLine($"Attack name: {Name} and the damage amount is {DamageAmount}");
    }
}


class Enemy {
    public string Name {get; set;}
    private int Health {get; set;}
    List<Attack> AttackList {get; set;}

    public Enemy(string name, int health) {
        Name = name;
        Health = health;
        AttackList = new List<Attack>();
    }

    public void AddAttack(Attack move) {
        AttackList.Add(move);
    }
    public void AddHealth(int amount) {
        Health += amount;
    }
    public string RandomAttack() {
        var random = new Random();
        int i = random.Next(AttackList.Count);
        string attackName = AttackList[i].Name;
        return attackName;
    }
    public void ListOfAttacks() {
        foreach (Attack attack in AttackList) {
            System.Console.WriteLine($"The list of attacks are {attack.Name}{attack.DamageAmount}.");
        }
    }
    public void EnemyInfo() {
        System.Console.WriteLine($"Enemy name is {Name} with a health of {Health} and they are using the attack {RandomAttack()}.");
    }

}

