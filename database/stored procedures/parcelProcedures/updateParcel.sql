 CREATE PROCEDURE updateParcel
 @id varchar(50),
 @description varchar(255),
 @sender_number varchar,
 @receiver_number varchar,
 @start_location varchar(50),
 @end_location varchar(50)

 AS
 BEGIN
 UPDATE parcels SET description = @description, sender_number =@sender_number, receiver_number=@receiver_number,
 start_location =@start_location, end_location=@end_location
 WHERE id = @id and isDeleted=0;
 END