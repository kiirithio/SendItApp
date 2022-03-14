CREATE TABLE parcels (
	id varchar(50) PRIMARY KEY not null,
	description varchar(255),
	sender_number varchar(50) not null,
	receiver_number varchar(50) not null,
	start_location varchar(50) not null,
	end_location varchar(50) not null,
	isDeleted int default 0,
	isUpdated varchar default 0,
	isSent int default 0,
	isDelivered int default 0,
	currentLocation varchar(50) not null,
	senderId varchar(50),
	foreign key(senderId) references users(id)
)