SELECT * FROM dojos_and_ninjas_schema.dojos;
-- Query: Create 3 new dojos
INSERT INTO dojos (name) 
VALUES('New York');

INSERT INTO dojos (name) 
VALUES('Boston');

INSERT INTO dojos (name) 
VALUES('Chicago');

-- Query: Delete the 3 dojos you just created
DELETE FROM dojos WHERE id = 8;
DELETE FROM dojos WHERE id = 9;
DELETE FROM dojos WHERE id = 10;
DELETE FROM ninjas WHERE id = 1;
DELETE FROM ninjas WHERE id = 2;
DELETE FROM ninjas WHERE id = 3;

-- Query: Create 3 more dojos
INSERT INTO dojos (name) 
VALUES('New York');

INSERT INTO dojos (name) 
VALUES('Boston');

INSERT INTO dojos (name) 
VALUES('Chicago');

-- Query: Create 3 ninjas that belong to the first dojo
INSERT INTO ninjas (id, first_name, last_name, age, dojo_id) 
VALUES(1, 'Nima', 'Bazofti', 29, 1);
INSERT INTO ninjas (id, first_name, last_name, age, dojo_id) 
VALUES(2, 'Jack', 'Sparrow', 36, 1);
INSERT INTO ninjas (id, first_name, last_name, age, dojo_id) 
VALUES(3, 'Han', 'Solo', 55, 1);

-- Query: Create 3 ninjas that belong to the second dojo
INSERT INTO ninjas (id, first_name, last_name, age, dojo_id) 
VALUES(4, 'Cookie', 'Monster', 50, 12);
INSERT INTO ninjas (id, first_name, last_name, age, dojo_id) 
VALUES(5, 'Sam', 'Jackson', 70, 12);
INSERT INTO ninjas (id, first_name, last_name, age, dojo_id) 
VALUES(6, 'Tyler', 'Maxwell', 45, 12);

-- Query: Create 3 ninjas that belong to the third dojo
INSERT INTO ninjas (id, first_name, last_name, age, dojo_id) 
VALUES(7, 'Big', 'Man', 35, 11);
INSERT INTO ninjas (id, first_name, last_name, age, dojo_id) 
VALUES(8, 'Big', 'Willie', 25, 11);
INSERT INTO ninjas (id, first_name, last_name, age, dojo_id) 
VALUES(9, 'Big', 'Wilson', 35, 11);

-- Query: Retrieve all the ninjas from the first dojo
SELECT * FROM ninjas WHERE dojo_id = 1;

-- Query: Retrieve all the ninjas from the last dojo
SELECT * FROM ninjas WHERE dojo_id = 11;

-- Query: Retrieve the last ninja's dojo
SELECT * FROM dojos 
JOIN ninjas ON dojos.id = ninjas.dojo_id
WHERE ninjas.id = (SELECT id FROM ninjas ORDER BY id DESC LIMIT 1); 