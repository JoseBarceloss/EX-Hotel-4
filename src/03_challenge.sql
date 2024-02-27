SELECT
    u.first_name AS 'Nome',
    r.hotel_id AS 'Id do Hotel',
    ru.check_in AS 'Data de Entrada',
    ru.check_out AS 'Data de Saída'
FROM
    users u
JOIN
    room_users ru ON u.id = ru.user_id
JOIN
    rooms r ON ru.room_id = r.id
WHERE
    ru.check_out IS NULL OR r.available = 0;
