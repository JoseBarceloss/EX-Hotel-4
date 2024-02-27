SELECT 
  -- Seleciona o nome da pessoa hospedada
  first_name AS 'Hospede',
  -- Seleciona o nome do hotel
  name AS 'Hotel',
  -- Seleciona o preço da diária
  price AS 'Diária',
  -- Seleciona o número de estrelas do hotel
  star AS 'Estrelas',
  -- Seleciona a data de entrada da pessoa hospedada
  check_in AS 'Data de Entrada do hospede',
  -- Seleciona a data de saída da pessoa hospedada
  check_out AS 'Data de Saída do hospede'
FROM room_users AS rou
  -- Junta a tabela room_users com a tabela users usando a chave user_id
  INNER JOIN users AS usr
    ON rou.user_id = usr.id
  -- Junta a tabela room_users com a tabela rooms usando a chave room_id
  INNER JOIN rooms AS roo
    ON roo.id = rou.room_id
  -- Junta a tabela rooms com a tabela hotels usando a chave hotel_id
  INNER JOIN hotels AS hot
    ON hot.id = roo.hotel_id
-- Filtra os quartos que estão atualmente disponíveis
WHERE roo.available = 1 
  -- Filtra os hotéis que possuem três ou mais estrelas
  AND hot.star >= 3 
  -- Filtra os quartos com diária menor ou igual a 500,00
  AND roo.price <= 500.00;
