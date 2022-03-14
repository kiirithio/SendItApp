  CREATE PROCEDURE deleteParcel
 @id varchar(50)
 AS
 BEGIN
  UPDATE parcels SET isDeleted = 1
 WHERE id = @id;
 END