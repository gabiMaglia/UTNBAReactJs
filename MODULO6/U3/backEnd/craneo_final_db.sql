-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: localhost    Database: craneo_final_db
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alumnos_db`
--

DROP TABLE IF EXISTS `alumnos_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumnos_db` (
  `id_alumno` int NOT NULL AUTO_INCREMENT,
  `nombre` text NOT NULL,
  `apellido` text NOT NULL,
  `dni` bigint NOT NULL,
  `email` text,
  `telefono` text,
  `direccion` text,
  `fecha_inscripcion` text NOT NULL,
  `foto` varchar(250) DEFAULT NULL,
  `horario` varchar(80) NOT NULL,
  `observaciones` text,
  `agregado_por` text NOT NULL,
  `modificado_por` text,
  `facebookAdd` varchar(45) DEFAULT NULL,
  `instagramAdd` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_alumno`,`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnos_db`
--

LOCK TABLES `alumnos_db` WRITE;
/*!40000 ALTER TABLE `alumnos_db` DISABLE KEYS */;
INSERT INTO `alumnos_db` VALUES (3,'Gabriel Alejandre','Maglia',32758971,'gab.maglia@gmail.com','3417207863','Belgrano 231 Granadero Baigorria/Centro','2018-02-12',NULL,'Martes-Jueves-Sabados/09:01-10:30','KDJSAKDJA','','admin','',''),(5,'erwrw','rewrew',3424,'432424','43242','432442','2422-03-04','z42vmdg5nvy2iylwz6bg','Lunes-Miercoles-Viernes/12:36-13:30','KHDEWS','admin','admin','/lalalalla','/gaberiel_maglia'),(6,'JUan','Martinez',46464656,'45646545','454654564','456465465','1547-04-05',NULL,'Martes-Jueves-Sabados/10:30-12:00','gfghfjsdsdsad','admin','admin','/lalal','/lalal');
/*!40000 ALTER TABLE `alumnos_db` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `docentes_db`
--

DROP TABLE IF EXISTS `docentes_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `docentes_db` (
  `id_docente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `titulo` varchar(75) DEFAULT NULL,
  `dni` varchar(25) NOT NULL,
  `telefono` varchar(25) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `instagramAdd` varchar(50) DEFAULT NULL,
  `facebookAdd` varchar(50) DEFAULT NULL,
  `horario` varchar(150) DEFAULT NULL,
  `foto` varchar(250) DEFAULT NULL,
  `modificado_por` text,
  PRIMARY KEY (`id_docente`,`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docentes_db`
--

LOCK TABLES `docentes_db` WRITE;
/*!40000 ALTER TABLE `docentes_db` DISABLE KEYS */;
INSERT INTO `docentes_db` VALUES (1,'Jos','Martinez','Entrenador Fisico','23212323','192831','32131','djfksjfal@fkdsjl.comGFHF','/YUYUIO','/lala','12:00 19:00','g9t0jpi33o7gdht92zdf','admin'),(3,'Mer','Cha-Chung','Kinesiologa','32758971','3415875122','Los arrollos baigorrienses 2020','lalala@gmail.com','/lalala','/lelele','09:00-12:00','cxgtwonfclmey68dha6x','admin');
/*!40000 ALTER TABLE `docentes_db` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horarios_db`
--

DROP TABLE IF EXISTS `horarios_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `horarios_db` (
  `id_horario` int NOT NULL AUTO_INCREMENT,
  `dias_dbcol` text NOT NULL,
  `horarios_dbcol` text NOT NULL,
  `modificado_por` text,
  PRIMARY KEY (`id_horario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horarios_db`
--

LOCK TABLES `horarios_db` WRITE;
/*!40000 ALTER TABLE `horarios_db` DISABLE KEYS */;
INSERT INTO `horarios_db` VALUES (1,'Lunes-Miercoles-Viernes','24:30-14:00',NULL),(3,'Lunes-Miercoles-Viernes','12:00-13:30',''),(4,'Lunes-Miercoles-Viernes','13:30-14:00',''),(5,'Lunes-Miercoles-Viernes','14:00-15:30',''),(6,'Lunes-Miercoles-Viernes','15:30-17:00',''),(7,'Martes-Jueves-Sabados','09:01-10:30','admin'),(8,'Martes-Jueves-Sabados','10:30-12:00',''),(9,'Lunes-Miercoles-Viernes','12:36-13:30','admin'),(11,'Martes-Jueves-Sabados','14:00-15:31','admin'),(12,'Martes-Jueves-Sabados','15:30-17:00','');
/*!40000 ALTER TABLE `horarios_db` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_db`
--

DROP TABLE IF EXISTS `usuarios_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios_db` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `dni` int NOT NULL,
  PRIMARY KEY (`id_usuario`,`dni`,`usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_db`
--

LOCK TABLES `usuarios_db` WRITE;
/*!40000 ALTER TABLE `usuarios_db` DISABLE KEYS */;
INSERT INTO `usuarios_db` VALUES (1,'gabrielsk','dde250bbe10295dcd5268cc2b536b015',0),(2,'admin','21232f297a57a5a743894a0e4a801fc3',0);
/*!40000 ALTER TABLE `usuarios_db` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-23 23:30:10
