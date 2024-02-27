SELECT
    u.first_name AS 'Nome',
    u.last_name AS 'Sobrenome',
    r.price AS 'Diária',
    r.hotel_id AS 'Id do Hotel'
FROM 
    users u
JOIN
    room_users ru ON u.id = ru.user_id
JOIN
    rooms r ON ru.room_id = r.id;
