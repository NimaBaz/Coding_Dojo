Attack Punch = new Attack("Punch", 15);
Attack Kick = new Attack("Punch", 20);
Attack Tackle = new Attack("Punch", 25);

Attack Fire = new Attack("Fireball ", 30);
Attack Lightning = new Attack("Fireball ", 30);
Attack Frost = new Attack("Fireball ", 30);

Attack Bow = new Attack("Bow ", 30);
Attack Knife = new Attack("Bow ", 15);
Attack Gun = new Attack("Gun ", 50);

Enemy MyOpponent = new Enemy("C#", 1000);
Enemy MyOpponent2 = new Enemy("Java", 1000);
Enemy MyOpponent3 = new Enemy("Python", 1000);

Player MeleePlayer = new Player("Nima", 800);
Player RangedPlayer = new Player("Tyler", 600);
Player MagicPlayer = new Player("Andres", 400);

// **************************************************************************************************************************************

MeleePlayer.AddAttack(Punch);
MeleePlayer.AddAttack(Kick);
MeleePlayer.AddAttack(Tackle);
MeleePlayer.PerformAttack(MyOpponent, Kick);
MeleePlayer.Rage(MyOpponent);

System.Console.WriteLine("-------------------------------------------------------------------------------");

RangedPlayer.AddAttack(Bow);
RangedPlayer.AddAttack(Knife);
RangedPlayer.AddAttack(Gun);
RangedPlayer.PerformAttack(MyOpponent2, Bow);
RangedPlayer.Dash(RangedPlayer);
RangedPlayer.PerformAttack(MyOpponent2, Bow);

System.Console.WriteLine("-------------------------------------------------------------------------------");

MagicPlayer.AddAttack(Fire);
MagicPlayer.AddAttack(Lightning);
MagicPlayer.AddAttack(Frost);
MagicPlayer.PerformAttack(MyOpponent3, Fire);
MagicPlayer.Heal(MeleePlayer);
MagicPlayer.Heal(RangedPlayer);
MagicPlayer.Heal(MagicPlayer);

System.Console.WriteLine("-------------------------------------------------------------------------------");

MyOpponent.AddAttack(Punch);
MyOpponent.AddAttack(Fire);
MyOpponent.AddAttack(Bow);
MyOpponent.AddAttack(Gun);
MyOpponent.PerformAttack(MeleePlayer, Gun);

System.Console.WriteLine("-------------------------------------------------------------------------------");

MyOpponent2.AddAttack(Tackle);
MyOpponent2.AddAttack(Lightning);
MyOpponent2.AddAttack(Knife);
MyOpponent2.AddAttack(Gun);
MyOpponent2.PerformAttack(RangedPlayer, Knife);

System.Console.WriteLine("-------------------------------------------------------------------------------");

MyOpponent3.AddAttack(Kick);
MyOpponent3.AddAttack(Frost);
MyOpponent3.AddAttack(Bow);
MyOpponent3.AddAttack(Knife);
MyOpponent3.AddAttack(Gun);
MyOpponent3.PerformAttack(MagicPlayer, Frost);

// **************************************************************************************************************************************

class Attack {
    public string Name {get; set;}

    public int DamageAmount {get; set;}


    public Attack (string name, int damage) {
        Name = name;
        DamageAmount = damage;
    }

}

// **************************************************************************************************************************************

class Character {
    public string Name {get; set;}

    protected int Health {get; set;}

    protected int Distance {get; set;}

    List<Attack> AttackList {get; set;}

    public Character (string name, int health, int distance = 5) {
        Name = name;
        Health = health;
        Distance = distance;
        AttackList = new List<Attack>();
    }

    public void AddAttack(Attack move) {
        AttackList.Add(move);
    }

    public void ChangeHealth(int amount) {
        Health += amount;
    }

    public Attack RandomAttack() {
        var random = new Random();
        int i = random.Next(AttackList.Count);
        Attack attack = AttackList[i];
        return attack;
    }

    public void PerformAttack(Character Target, Attack ChosenAttack) {
        // Pick an attack that the enemy is going to perform
        if (Target.Distance < 10) {
            Target.ChangeHealth(-ChosenAttack.DamageAmount);
            Console.WriteLine($"{Name} attacks {Target.Name}, dealing {ChosenAttack.DamageAmount} damage and reducing {Target.Name}'s health to {Target.Health}!!");
        }
        else if (Target.Distance > 10 && ChosenAttack.Name.Equals("Bow")) {
            Target.ChangeHealth(-ChosenAttack.DamageAmount);
            Console.WriteLine($"{Name} attacks {Target.Name}, dealing {ChosenAttack.DamageAmount} damage and reducing {Target.Name}'s health to {Target.Health}!!");
        }
        else {
            System.Console.WriteLine($"{Name} can't attack {Target.Name} because they're out of range");
        }
    }

    public void Rage(Character Target) {
        Attack attack = RandomAttack();
        int damage = attack.DamageAmount + 10;
        Target.ChangeHealth(-damage);
        Console.WriteLine($"{Name} attacks {Target.Name}, dealing {damage} damage and reducing {Target.Name}'s health to {Target.Health}!!");
    }

    public void Dash(Character Target) {
        Distance += 15;
        Console.WriteLine($"{Name} does a Dash, increasing their damage distance to {Distance}");
    }

    public void Heal(Character Target) {
        int heal = 40;
        Target.ChangeHealth(heal);
        Console.WriteLine($"{Name} does a Heal, increasing {Target.Name}'s health to {Target.Health}");
    }

}

// **************************************************************************************************************************************

class Player : Character {

    public Player(string name, int health) : base(name, health) {
        
    }

}

// **************************************************************************************************************************************

class Enemy : Character {

    public Enemy(string name, int health) : base(name, health) {

    }

}