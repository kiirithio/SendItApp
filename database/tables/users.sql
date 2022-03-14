CREATE TABLE users (
	id varchar(50) PRIMARY KEY not null,
	username varchar(50) not null,
	fullname varchar(100),
	phone varchar(50) not null,
	email varchar(50) not null,
	password varchar(100) not null,
	isAdmin int default 0,
	isDeleted int default 0,
	isSent int default 0
)