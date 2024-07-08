
-- PROCEDURE para insertar estadísticas
CREATE PROCEDURE InsertEstadisticas(IN p_cod_est BIGINT, p_cod_veh BIGINT, nom_est VARCHAR(100), IN valor_est VARCHAR(100), fec_est DATE)
BEGIN
    START TRANSACTION; -- Inicia la transacción 
    INSERT INTO `ESTADISTICAS` (cod_estadistica, cod_vehiculo, nom_estadistica, valor, fec_estadistica) VALUES (p_cod_est, p_cod_veh, nom_est, valor_est, fec_est); -- Inserta los valores proporcionados
    COMMIT; -- Confirma la transacción
END;
CALL InsertEstadisticas(3, 1, 'MALO', '2', '2024-07-06'); -- Ejecuta la inserción 

 -- PROCEDURE para actualizar estadísticas
CREATE PROCEDURE UpdateEstadisticas(p_cod_veh BIGINT, nom_est VARCHAR(100), IN valor_est VARCHAR(100), fec_estadistica DATE, p_cod_est BIGINT)
    BEGIN
    START TRANSACTION; -- Inicia la transacción 
        UPDATE `ESTADISTICAS` SET cod_vehiculo = p_cod_veh, 
                                    nom_estadistica = nom_est, 
                                    valor = valor_est, 
                                    fec_estadistica = fec_estadistica 
        WHERE cod_estadistica = p_cod_est; -- Actualiza los registros donde coincida el código de estadística
    COMMIT; -- Confirma la transacción
    END; 

CALL UpdateEstadisticas(1, 'EXELENTE', '10', '2024-07-06', 1); -- Ejecuta la actualización 

-- PROCEDURE para seleccionar estadísticas
CREATE PROCEDURE SelectEstadisticas()
BEGIN
    SELECT 
        v.cod_estadistica, -- Código de la estadística
        v.nom_estadistica, -- Nombre de la estadística
        v.valor,           -- Valor de la estadística
        v.fec_estadistica  -- Fecha de la estadística
    FROM ESTADISTICAS v 
    INNER JOIN VEHICULOS a ON v.cod_vehiculo = a.cod_vehiculo -- Realiza un JOIN con la tabla VEHICULOS
    ORDER BY v.cod_estadistica; -- Ordena los resultados por código de estadística
END;


CALL SelectEstadisticas(); -- Ejecuta la selección de estadísticas