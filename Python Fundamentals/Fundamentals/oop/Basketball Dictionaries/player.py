from players import players

kevin = {
        "name": "Kevin Durant", 
        "age":34, 
        "position": "small forward", 
        "team": "Brooklyn Nets"
}

jason = {
        "name": "Jason Tatum", 
        "age":24, 
        "position": "small forward", 
        "team": "Boston Celtics"
}

kyrie = {
        "name": "Kyrie Irving", 
        "age":32,
        "position": "Point Guard", 
        "team": "Brooklyn Nets"
}

damian = {
        "name": "Damian Lillard", 
        "age":33,
        "position": "Point Guard", 
        "team": "Portland Trailblazers"
}

joel = {
        "name": "Joel Embiid", 
        "age":32,
        "position": "Power Foward", 
        "team": "Philidelphia 76ers"
}

demar = {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls"
}

class Player:
        new_team = []

        def __init__(self, data):
                self.name = data['name']
                self.age = data['age']
                self.position = data['position']
                self.team = data['team']
                Player.new_team.append(self)

        # @classmethod
        # def get_team(cls, team_list):
        #     for new_player in cls.new_team:
        #         print(f"{new_player.data}", sep= "\n")



# Complete challenge 3: Populate a new list with Player instances from the list of players.
player_objects = []

for player in players:
        player_objects.append(Player(player))
        print(player_objects)


player_kevin = Player(kevin)
player_jason = Player(jason)
player_kyrie = Player(kyrie)
player_damian = Player(damian)
player_joel = Player(joel)
player_demar = Player(demar)


# player_kevin = Player(players[0])
# player_jason = Player(players[1])
# player_kyrie = Player(players[2])
# player_damian = Player(players[3])
# player_joel = Player(players[4])
# player_demar = Player(players[5])

# Player.get_team(players)