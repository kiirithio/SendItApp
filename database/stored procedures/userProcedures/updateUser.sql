 CREATE PROCEDURE updateUser
 @id varchar(50),
 @fullname varchar(100),
 @username varchar(50),
 @phone varchar(50),
 @email varchar(50),
 @password varchar(50)

 AS
 BEGIN
     IF NOT EXISTS (SELECT * FROM users 
                   WHERE username = @username
                   AND email = @email)
BEGIN
 UPDATE users SET   fullname =@fullname, username= @username, phone =@phone, email =@email, password =@password
 WHERE id = @id and isDeleted=0;
 END