SELECT 
    u.first_name AS Nome,
    u.last_name AS Sobrenome,
    u.email AS 'E-mail de Contato',
    u.created_at AS 'Data de Registro',
    ru.check_in AS 'Data de Entrada',
    ru.check_out AS 'Data de Saída'
FROM 
    users u
JOIN 
    room_users ru ON u.id = ru.user_id
WHERE 
    -- Filtra os resultados para incluir apenas check-ins entre agosto e outubro de 2023
    ru.check_in BETWEEN '2023-08-01' AND '2023-10-31';
