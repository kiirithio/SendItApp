CREATE PROCEDURE getUser
  @id varchar(50)
 AS
 BEGIN
 SELECT * FROM users WHERE id = @id and isDeleted = 0 ;
 END