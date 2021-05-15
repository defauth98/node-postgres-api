CREATE TABLE enterprise (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 ) UNIQUE NOT NULL,
	owner_id integer NOT NULL,
	city_id integer NOT NULL,
);
