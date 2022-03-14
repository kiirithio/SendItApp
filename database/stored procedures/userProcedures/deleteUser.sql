 CREATE PROCEDURE deleteUser
 @id varchar(50)
 AS
 BEGIN
  UPDATE users SET isDeleted = 1
 WHERE id = @id;
 END
