DROP DATABASE IF EXISTS trybe_hotel;
CREATE DATABASE IF NOT EXISTS trybe_hotel;
USE trybe_hotel;

CREATE TABLE users(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(60),
  age INTEGER,
  created_at DATE,
  phone_number VARCHAR(11)
);
INSERT INTO users(first_name, last_name, email, age, created_at)
VALUES ('Terry', 'Medhurst', 'atuny0@email.com', 31, '2022-12-31'),
('Miles', 'Hills', 'rshawe2@dotmail.com', 17, '2023-05-10'),
('Sheldon', 'Hills', 'num41@email.com', 18, '2022-12-25'),
('Mavis', 'Abbott', 'kmeus4@email.com', 60, '2022-12-31'),
('Oleta', 'Schultz', 'dpettegre6@email.com', 29, '2023-09-25'),
('Ewell', 'Mueller', 'ggude7@dotmail.com', 15, '2022-12-31'),
('Demetrius', 'Corkery', 'nloiterton8@email.com', 31, '2023-08-03');


CREATE TABLE hotels(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(80) NOT NULL,
  zip_code VARCHAR(8) NOT NULL,
  city VARCHAR(80),
  state VARCHAR(80),
  district VARCHAR(80),
  street VARCHAR(80),
  star INTEGER NOT NULL
);

INSERT INTO hotels (name, zip_code, city, state, district, street, star)
  VALUES  ('Brown, Kihn and Bergnaum', '61749464', 'Christiansenhaven', 'Ohio', 'South', 'Myrna Ports 188', 1),
          ('Dickinson, Mayer and Boyer', '79345910', 'Abbottshire', 'NorthDakota', 'Lake', 'Tommie Street 781', 3),
          ('Hettinger-Raynor', '29551210', 'Pollichborough', 'Wyoming', 'Port', 'Emerson Square 494', 3),
          ('Ernser Inc', '16541278', 'Kodymouth', 'Nebraska', 'East', 'Bart Knolls 161', 4);


CREATE TABLE rooms(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  price FLOAT(6,2) NOT NULL,
  available BOOLEAN DEFAULT TRUE,
  hotel_id INTEGER NOT NULL,
  FOREIGN KEY (hotel_id) REFERENCES hotels (id)
);

INSERT INTO rooms (price, available, hotel_id)
  VALUES  (120.35, 0, 1),
          (200.00, 1, 2),
          (329.99, 0, 1),
          (379.99, 1, 4),
          (929.99, 0, 1),
          (201.62, 1, 2),
          (699.99, 1, 3),
          (500.00, 1, 4),
          (150.05, 1, 3),
          (99.99, 1, 1),
          (199.99, 1, 2),
          (399.99, 1, 2),
          (118.01, 1, 4),
          (739.99, 1, 1),
          (829.99, 1, 1);
          