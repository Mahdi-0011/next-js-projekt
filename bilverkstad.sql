-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: bilverkstad
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bil ägare`
--

DROP TABLE IF EXISTS `bil ägare`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bil ägare` (
  `id` int NOT NULL AUTO_INCREMENT,
  `förnamn` varchar(50) DEFAULT NULL,
  `efternamn` varchar(50) DEFAULT NULL,
  `telefonnummer` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bil ägare`
--

LOCK TABLES `bil ägare` WRITE;
/*!40000 ALTER TABLE `bil ägare` DISABLE KEYS */;
INSERT INTO `bil ägare` VALUES (1,'Anna','Lundqvist','0704821356'),(2,'Johan','Persson','0726914402'),(3,'Elin','Karlsson','0732189547'),(4,'Mats','Björk','0765432089'),(5,'Sara','Nilsson','0793284175');
/*!40000 ALTER TABLE `bil ägare` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bilar`
--

DROP TABLE IF EXISTS `bilar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bilar` (
  `reg(pk)` varchar(50) NOT NULL,
  `bil ägare id(fk)` int DEFAULT NULL,
  `märke` varchar(50) DEFAULT NULL,
  `modell` varchar(50) DEFAULT NULL,
  `Årsmodell` year DEFAULT NULL,
  `pris` int DEFAULT NULL,
  PRIMARY KEY (`reg(pk)`),
  KEY `fk_bilar_bilagare` (`bil ägare id(fk)`),
  CONSTRAINT `fk_bilar_bilagare` FOREIGN KEY (`bil ägare id(fk)`) REFERENCES `bil ägare` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bilar`
--

LOCK TABLES `bilar` WRITE;
/*!40000 ALTER TABLE `bilar` DISABLE KEYS */;
INSERT INTO `bilar` VALUES ('ABC123',5,'volvo','xc60',2019,140000),('ABC456',1,'volvo','ex90',2023,170000),('LMN456',2,'BMW','320i',2021,130000),('pqr321',3,'skoda','rs',2020,93000),('XYZ789',4,'toyota','corolla',2016,98000);
/*!40000 ALTER TABLE `bilar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bilproblem`
--

DROP TABLE IF EXISTS `bilproblem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bilproblem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `servis ärende id (fk)` int DEFAULT NULL,
  `beskrivning` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_bilproblem_serviärende` (`servis ärende id (fk)`),
  CONSTRAINT `fk_bilproblem_serviärende` FOREIGN KEY (`servis ärende id (fk)`) REFERENCES `servis ärende` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bilproblem`
--

LOCK TABLES `bilproblem` WRITE;
/*!40000 ALTER TABLE `bilproblem` DISABLE KEYS */;
INSERT INTO `bilproblem` VALUES (1,5,'Motorn startar inte'),(2,3,'Bromsarna låter konstigt'),(3,4,'AC fungerar inte'),(4,1,'byta olja och filter'),(5,2,'byta olja och filter');
/*!40000 ALTER TABLE `bilproblem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servis ärende`
--

DROP TABLE IF EXISTS `servis ärende`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servis ärende` (
  `id` int NOT NULL AUTO_INCREMENT,
  `verkstad id (fk)` int DEFAULT NULL,
  `reg(fk)` varchar(20) DEFAULT NULL,
  `inlämnad datum` date DEFAULT NULL,
  `hämtad datum` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_bilar_servisärende` (`reg(fk)`),
  KEY `fk_verkstäder_servisärende` (`verkstad id (fk)`),
  CONSTRAINT `fk_bilar_servisärende` FOREIGN KEY (`reg(fk)`) REFERENCES `bilar` (`reg(pk)`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_verkstäder_servisärende` FOREIGN KEY (`verkstad id (fk)`) REFERENCES `verkstäder` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `verkstad_id_fk` FOREIGN KEY (`verkstad id (fk)`) REFERENCES `verkstäder` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servis ärende`
--

LOCK TABLES `servis ärende` WRITE;
/*!40000 ALTER TABLE `servis ärende` DISABLE KEYS */;
INSERT INTO `servis ärende` VALUES (1,2,'ABC123','2022-10-08','2022-10-15'),(2,1,'XYZ789','2023-03-03','2023-03-05'),(3,3,'LMN456','2025-01-05','2025-01-12'),(4,2,'PQR321','2022-10-08','2022-10-09'),(5,1,'ABC456','2021-12-01','2021-12-05');
/*!40000 ALTER TABLE `servis ärende` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verkstäder`
--

DROP TABLE IF EXISTS `verkstäder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `verkstäder` (
  `id` int NOT NULL AUTO_INCREMENT,
  `namn` varchar(100) DEFAULT NULL,
  `adress` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verkstäder`
--

LOCK TABLES `verkstäder` WRITE;
/*!40000 ALTER TABLE `verkstäder` DISABLE KEYS */;
INSERT INTO `verkstäder` VALUES (1,'autofix ab','Kungsgatan 12, Stockholm'),(2,'Mekonomen Service','Storgatan 45, Göteborg'),(3,'Bil & Motor Verkstad','Industrivägen 8, Malmö');
/*!40000 ALTER TABLE `verkstäder` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-25  1:38:50