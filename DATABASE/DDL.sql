
CREATE TABLE TIPOS_VEHICULOS (
    cod_tipo_vehiculo BIGINT AUTO_INCREMENT PRIMARY KEY,
    nom_tipo_vehiculo VARCHAR(50)
);


CREATE TABLE MARCAS (
    cod_marca BIGINT AUTO_INCREMENT PRIMARY KEY,
    cod_tipo_vehiculo BIGINT,
    nom_marca VARCHAR (50),
    FOREIGN KEY (cod_tipo_vehiculo) REFERENCES TIPOS_VEHICULOS(cod_tipo_vehiculo)
);


CREATE TABLE TIPOS_TRANSMISIONES(
     cod_tipo_transmision BIGINT AUTO_INCREMENT PRIMARY KEY,
     nom_transmision VARCHAR (100)
);


CREATE TABLE TIPOS_MANTENIMIENTOS(
     cod_tipo_mantenimiento BIGINT AUTO_INCREMENT PRIMARY KEY,
     nom_mantenimiento VARCHAR (50)
);


CREATE TABLE USUARIOS(
    cod_usuario  BIGINT AUTO_INCREMENT PRIMARY KEY,
    nom_usuario VARCHAR(50),
    cor_usuario VARCHAR(20) UNIQUE,
    pas_usuario VARCHAR(30),
    img_usuario LONGBLOB
);


CREATE TABLE PROM_DESCUENTOS(
    cod_promo BIGINT AUTO_INCREMENT PRIMARY KEY,
    fec_prom DATE,
    promocion FLOAT,
    disponibilidad VARCHAR(50),
    cod_tipo_vehiculo BIGINT,
    cod_marca BIGINT,
    FOREIGN KEY (cod_tipo_vehiculo) REFERENCES TIPOS_VEHICULOS(cod_tipo_vehiculo),
    FOREIGN KEY (cod_marca) REFERENCES MARCAS(cod_marca)
);


CREATE TABLE VEHICULOS(
    cod_vehiculo BIGINT AUTO_INCREMENT PRIMARY KEY,
    año_vehiculo VARCHAR(4),
    mot_vehiculo VARCHAR(50),
    pot_vehiculo VARCHAR(50),
    cod_marca BIGINT,
    modelo VARCHAR(50),
    cod_tipo_transmision BIGINT,
    FOREIGN KEY (cod_marca) REFERENCES MARCAS(cod_marca),
    FOREIGN KEY (cod_tipo_transmision) REFERENCES TIPOS_TRANSMISIONES(cod_tipo_transmision)
);


CREATE TABLE MANTENIMIENTOS(
     cod_mantenimiento BIGINT AUTO_INCREMENT PRIMARY KEY,
     cod_vehiculo BIGINT,
     cod_tipo_mantenimiento BIGINT,
     descripcion VARCHAR(100),
     fec_mantenimiento DATE,
     FOREIGN KEY (cod_vehiculo) REFERENCES VEHICULOS(cod_vehiculo),
     FOREIGN KEY (cod_tipo_mantenimiento) REFERENCES TIPOS_MANTENIMIENTOS(cod_tipo_mantenimiento)
);


CREATE TABLE RENDIMIENTOS(
    cod_rendimiento BIGINT AUTO_INCREMENT PRIMARY KEY,
    cod_vehiculo BIGINT,
    eficiencia VARCHAR(50),
    fec_prueba DATE,
    resultado VARCHAR(50),
    FOREIGN KEY (cod_vehiculo) REFERENCES VEHICULOS(cod_vehiculo)
);


CREATE TABLE EVALUACIONES(
    cod_evaluacion BIGINT AUTO_INCREMENT PRIMARY KEY,
    cod_vehiculo BIGINT,
    resul_evaluacion FLOAT,
    fec_evaluacion DATE,
    cod_usuario BIGINT,
    FOREIGN KEY (cod_vehiculo) REFERENCES VEHICULOS(cod_vehiculo),
    FOREIGN KEY (cod_usuario) REFERENCES USUARIOS(cod_usuario)
);



CREATE TABLE RESEÑAS(
 cod_resena BIGINT AUTO_INCREMENT PRIMARY KEY,
 cod_vehiculo BIGINT,
 cod_usuario BIGINT,
 calif_general VARCHAR(50),
 opinion VARCHAR(50),
 FOREIGN KEY (cod_vehiculo) REFERENCES VEHICULOS(cod_vehiculo),
 FOREIGN KEY (cod_usuario) REFERENCES USUARIOS(cod_usuario)
);


CREATE TABLE ESTADISTICAS(
 cod_estadistica BIGINT AUTO_INCREMENT PRIMARY KEY,
 cod_vehiculo BIGINT,
 nom_estadistica VARCHAR(100),
 valor VARCHAR(100),
 fec_estadistica DATE,
 FOREIGN KEY (cod_vehiculo) REFERENCES VEHICULOS(cod_vehiculo)
);

CREATE TABLE HISTORIALES(
 cod_historial BIGINT AUTO_INCREMENT PRIMARY KEY,
 cod_vehiculo BIGINT,
 precio DOUBLE,
 tendencia VARCHAR(100),
 FOREIGN KEY (cod_vehiculo) REFERENCES VEHICULOS(cod_vehiculo)
);