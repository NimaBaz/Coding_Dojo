SELECT * FROM users JOIN friendships ON users.id = friendships.me_id 
JOIN users friends ON friendships.friend_id = friends.id WHERE users.id = 1;

INSERT INTO `swipe_test`.`friendships` (`me_id`, `friend_id`) VALUES ('3', '2');

SELECT * FROM users JOIN connections ON users.id = connections.me_id 
JOIN users friends ON connections.friend_id = friends.id WHERE users.id = 3;

INSERT INTO `swipe_test`.`connections` (`me_id`, `friend_id`) VALUES ('3', '1');
