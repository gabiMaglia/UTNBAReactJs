-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 28-07-2022 a las 19:43:53
-- Versión del servidor: 5.7.34
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `CRANEO_DB`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docentes_db`
--

CREATE TABLE `docentes_db` (
  `id_docente` int(11) NOT NULL COMMENT 'Identificador',
  `nombre` varchar(25) NOT NULL COMMENT 'Nombre del socio',
  `Apellido` varchar(50) NOT NULL COMMENT 'Apellido del socio',
  `dni` varchar(10) NOT NULL COMMENT 'Dni',
  `telefono` text NOT NULL COMMENT 'Telefono del socio',
  `direccion` varchar(50) NOT NULL COMMENT 'Direccion del socio',
  `horario` int(11) NOT NULL COMMENT 'Horario al que Asiste',
  `foto` mediumblob NOT NULL COMMENT 'Foto',
  `observacinoes` mediumtext NOT NULL COMMENT 'Observaciones'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Informacion de los asociados';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `socios_db`
--

CREATE TABLE `socios_db` (
  `id_socio` int(11) NOT NULL COMMENT 'Identificador',
  `nombre` varchar(25) NOT NULL COMMENT 'Nombre del socio',
  `apellido` varchar(50) NOT NULL COMMENT 'Apellido del socio',
  `dni` varchar(10) NOT NULL COMMENT 'Dni',
  `telefono` text NOT NULL COMMENT 'Telefono del socio',
  `direccion` varchar(50) NOT NULL COMMENT 'Direccion del socio',
  `dia_de_cobro` double NOT NULL COMMENT 'Dia en el que debe pagar la cuota',
  `foto` mediumblob NOT NULL COMMENT 'Foto',
  `horario` int(2) NOT NULL,
  `observacinoes` mediumtext NOT NULL COMMENT 'Observaciones'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Informacion de los asociados';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_db`
--

CREATE TABLE `usuarios_db` (
  `id_socio` int(11) NOT NULL,
  `usuario` varchar(250) NOT NULL COMMENT 'usuario de acceso',
  `password` varchar(250) NOT NULL COMMENT 'clave de acceso'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios_db`
--

INSERT INTO `usuarios_db` (`id_socio`, `usuario`, `password`) VALUES
(1, 'gabrielsk', '2854fbdbda22c512812ec0fd06577951');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `docentes_db`
--
ALTER TABLE `docentes_db`
  ADD PRIMARY KEY (`id_docente`);

--
-- Indices de la tabla `socios_db`
--
ALTER TABLE `socios_db`
  ADD PRIMARY KEY (`id_socio`);

--
-- Indices de la tabla `usuarios_db`
--
ALTER TABLE `usuarios_db`
  ADD PRIMARY KEY (`id_socio`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios_db`
--
ALTER TABLE `usuarios_db`
  MODIFY `id_socio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
