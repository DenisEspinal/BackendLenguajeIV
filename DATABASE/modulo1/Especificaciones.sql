-- Active: 1722312730733@@142.44.161.115@3306@1900Pac2Equ3
CREATE PROCEDURE SelecEspecificaciones()-- 
BEGIN
    SELECT 
        v.cod_vehiculo,
        v.modelo,
        v.mot_vehiculo,
        tt.nom_transmision
    FROM VEHICULOS v 
    INNER JOIN `TIPOS_TRANSMISIONES` tt ON v.cod_tipo_transmision = tt.cod_tipo_transmision 
    ORDER BY v.cod_vehiculo;
END;

CALL SelecEspecificaciones();


