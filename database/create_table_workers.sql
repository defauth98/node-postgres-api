CREATE TABLE workers (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 ) UNIQUE NOT NULL,
	enterprise_id VARCHAR ( 50 ) NOT NULL
);
