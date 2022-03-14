 CREATE PROCEDURE getUsers 
 AS
 BEGIN
 SELECT * FROM users  where isDeleted = 0;
 END