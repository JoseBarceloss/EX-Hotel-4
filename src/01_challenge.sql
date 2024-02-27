CREATE TABLE room_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    room_id INT NOT NULL,
    user_id INT NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE,
    FOREIGN KEY (room_id) REFERENCES rooms(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO room_users (room_id, user_id, check_in, check_out) VALUES
(1, 1, '2023-01-01', NULL),
(3, 7, '2023-10-03', NULL),
(5, 2, '2023-05-10', NULL),
(5, 3, '2023-05-10', NULL),
(6, 5, '2023-09-25', '2023-09-30'),
(13, 7, '2023-08-03', '2023-08-10');