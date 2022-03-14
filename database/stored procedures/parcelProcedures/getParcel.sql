 CREATE PROCEDURE getParcel
  @id varchar(50)
 AS
 BEGIN
 SELECT *  FROM parcels WHERE id = @id and isDeleted = 0;
 END