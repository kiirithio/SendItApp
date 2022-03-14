 CREATE PROCEDURE loginUser
 @email varchar(50),
 @password varchar(150)

 AS

BEGIN
 SELECT * FROM users WHERE email = @email and password =@password
 END