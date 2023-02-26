SELECT * FROM first_flask.users;

INSERT INTO friends (first_name, last_name, occupation) 
VALUES('Nima', 'Bazofti', 'Hacker');
INSERT INTO friends (first_name, last_name, occupation) 
VALUES('Tyler', 'Maxwell', 'Master Hacker');

DELETE FROM users WHERE id = 1;
DELETE FROM users WHERE id = 2;