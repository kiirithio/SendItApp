  CREATE PROCEDURE getParcels 
 AS
 BEGIN
 SELECT * FROM parcels where isDeleted = 0;
 END