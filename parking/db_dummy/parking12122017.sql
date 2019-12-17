-- MySQL dump 10.16  Distrib 10.1.22-MariaDB, for Linux (i686)
--
-- Host: localhost    Database: parking
-- ------------------------------------------------------
-- Server version	10.1.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=204 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (136,'Alfa Romeo','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(137,'Aston Martin','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(138,'Audi','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(139,'Bentley','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(140,'Benz','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(141,'BMW','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(142,'Bugatti','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(143,'Cadillac','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(144,'Chevrolet','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(145,'Chrysler','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(146,'Citroen','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(147,'Corvette','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(148,'DAF','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(149,'Dacia','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(150,'Daewoo','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(151,'Daihatsu','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(152,'Datsun','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(153,'De Lorean','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(154,'Dino','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(155,'Dodge','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(156,'Farboud','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(157,'Ferrari','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(158,'Fiat','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(159,'Ford','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(160,'Honda','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(161,'Hummer','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(162,'Hyundai','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(163,'Jaguar','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(164,'Jeep','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(165,'KIA','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(166,'Koenigsegg','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(167,'Lada','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(168,'Lamborghini','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(169,'Lancia','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(170,'Land Rover','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(171,'Lexus','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(172,'Ligier','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(173,'Lincoln','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(174,'Lotus','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(175,'Martini','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(176,'Maserati','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(177,'Maybach','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(178,'Mazda','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(179,'McLaren','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(180,'Mercedes','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(181,'Mercedes-Benz','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(182,'Mini','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(183,'Mitsubishi','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(184,'Nissan','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(185,'Noble','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(186,'Opel','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(187,'Peugeot','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(188,'Pontiac','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(189,'Porsche','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(190,'Renault','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(191,'Rolls-Royce','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(192,'Rover','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(193,'Saab','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(194,'Seat','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(195,'Skoda','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(196,'Smart','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(197,'Spyker','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(198,'Subaru','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(199,'Suzuki','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(200,'Toyota','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(201,'Vauxhall','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(202,'Volkswagen','2017-07-10 12:42:35','2017-07-10 12:42:35',1),(203,'Volvo','2017-07-10 12:42:38','2017-07-10 12:42:38',1);
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `currency`
--

DROP TABLE IF EXISTS `currency`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `currency` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `short_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `symbol` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_6956883F5E237E06` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currency`
--

LOCK TABLES `currency` WRITE;
/*!40000 ALTER TABLE `currency` DISABLE KEYS */;
INSERT INTO `currency` VALUES (1,'peso','peso argentino','ARS','$','2017-07-10 12:47:04','2017-07-10 12:47:04',1),(2,'dollar','united states','USD','$','2017-07-10 12:47:04','2017-07-10 12:47:04',1),(3,'euro','euro member','EUR','€','2017-07-10 12:47:07','2017-07-10 12:47:07',1);
/*!40000 ALTER TABLE `currency` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone_number` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'John','Bonachon','9283743874','2017-07-23 23:49:15','2017-07-23 23:49:15',1),(2,'Michael','Heneken','9283743738','2017-07-24 02:22:27','2017-07-24 02:22:27',1),(3,'Homero J','Simpson','098230948','2017-07-24 02:48:33','2017-07-24 03:45:26',1),(4,'Homero J','Simpson','113670940','2017-07-24 03:51:20','2017-07-24 03:52:58',1),(5,'emmet','brown','8473958745','2017-07-24 03:59:33','2017-07-24 03:59:33',1),(6,'mike','jordan','982387461','2017-07-24 07:49:56','2017-07-24 07:49:56',1),(7,'michael','foxe','098230948','2017-07-24 10:00:04','2017-07-24 10:00:04',1),(8,'Larry','Beans','298374982374','2017-07-24 10:00:25','2017-11-21 22:09:30',1),(9,'peter','griffin','183479239','2017-07-25 06:12:52','2017-07-25 06:12:52',1),(10,'Frodo','bolson','923876423','2017-07-25 06:13:30','2017-11-20 17:12:34',1),(11,'rocky','blaboa','987387347','2017-07-25 14:49:35','2017-07-25 14:49:35',1),(12,'Ivan','Drago','874759874','2017-07-25 14:50:23','2017-07-25 14:50:23',1),(13,'apollo','creed','8498739847','2017-07-25 14:51:02','2017-07-25 14:51:02',1),(14,'j.r.r','tolkien','9836487885','2017-08-01 05:46:48','2017-08-01 05:46:48',1),(15,'Hernan','Crespo','987983457','2017-08-01 09:29:38','2017-08-01 09:29:38',1),(16,'grabriel omar','batistuta','9847398593','2017-08-01 09:30:18','2017-08-01 09:30:18',1),(17,'Luciano','Garcia','029384092','2017-11-24 03:18:34','2017-11-24 03:18:34',1);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `file_path` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lot`
--

DROP TABLE IF EXISTS `lot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `section_lot_id` int(11) DEFAULT NULL,
  `reference` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `available` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `reserved` tinyint(1) NOT NULL DEFAULT '0',
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `IDX_B81291BE28357D1` (`section_lot_id`),
  CONSTRAINT `FK_B81291BE28357D1` FOREIGN KEY (`section_lot_id`) REFERENCES `section` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lot`
--

LOCK TABLES `lot` WRITE;
/*!40000 ALTER TABLE `lot` DISABLE KEYS */;
INSERT INTO `lot` VALUES (1,1,'lote 1','test89',1,'2017-07-21 06:07:36','2017-12-06 01:46:19',1,1),(2,1,'lote 2','testt',1,'2017-07-21 06:07:36','2017-12-06 01:42:03',1,1),(3,1,'lote 3',NULL,1,'2017-07-21 06:07:36','2017-12-06 01:42:12',1,1),(4,1,'lote 4',NULL,1,'2017-07-21 06:07:36','2017-12-06 01:47:35',1,1),(5,1,'lote 5',NULL,1,'2017-07-21 06:07:36','2017-12-07 03:54:40',0,1),(6,1,'lote 6',NULL,1,'2017-07-21 06:07:36','2017-12-06 01:47:10',0,1),(7,1,'lote 7',NULL,1,'2017-07-21 06:07:36','2017-11-15 01:21:21',0,1),(8,1,'lote 8',NULL,1,'2017-07-21 06:07:36','2017-12-06 01:46:42',0,1),(9,1,'lote 9',NULL,1,'2017-07-21 06:07:36','2017-07-21 06:07:36',0,1),(10,1,'lote 10',NULL,1,'2017-07-21 06:07:36','2017-07-21 06:07:36',0,1),(11,1,'lote 11',NULL,1,'2017-07-21 06:07:36','2017-07-21 06:07:36',0,1),(12,1,'lote 12',NULL,1,'2017-07-21 06:07:36','2017-07-21 06:07:36',0,1),(13,1,'lote 13',NULL,1,'2017-07-21 06:07:36','2017-07-21 06:07:36',0,1),(14,1,'lote 14',NULL,1,'2017-07-21 06:07:36','2017-08-01 09:23:12',0,1),(15,1,'lote 15',NULL,1,'2017-07-21 06:07:36','2017-07-21 06:07:36',0,1),(16,1,'lote 16',NULL,1,'2017-07-21 06:07:36','2017-07-21 06:07:36',0,1),(17,1,'lote 17',NULL,1,'2017-07-21 06:07:36','2017-07-21 06:07:36',0,1),(18,1,'lote 18',NULL,1,'2017-07-21 06:07:36','2017-07-21 06:07:36',0,1),(19,1,'lote 19',NULL,1,'2017-07-21 06:07:36','2017-07-21 06:07:36',0,1),(20,1,'lote 20',NULL,1,'2017-07-21 06:07:36','2017-07-21 06:07:36',0,1),(21,2,'lote 1',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(22,2,'lote 2',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(23,2,'lote 3',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(24,2,'lote 4',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(25,2,'lote 5',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(26,2,'lote 6',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(27,2,'lote 7',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(28,2,'lote 8',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(29,2,'lote 9',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(30,2,'lote 10',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(31,2,'lote 11',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(32,2,'lote 12',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(33,2,'lote 13',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(34,2,'lote 14',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(35,2,'lote 15',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(36,2,'lote 16',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(37,2,'lote 17',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(38,2,'lote 18',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(39,2,'lote 19',NULL,1,'2017-07-21 06:09:41','2017-08-01 09:03:22',0,1),(40,2,'lote 20',NULL,1,'2017-07-21 06:09:41','2017-07-21 06:09:41',0,1),(41,3,'lote 1',NULL,1,'2017-07-21 06:09:50','2017-12-06 23:46:23',0,1),(42,3,'lote 2',NULL,1,'2017-07-21 06:09:50','2017-07-21 06:09:50',0,1),(43,3,'lote 3',NULL,1,'2017-07-21 06:09:50','2017-07-21 06:09:50',0,1),(44,3,'lote 4',NULL,1,'2017-07-21 06:09:50','2017-07-21 06:09:50',0,1),(45,3,'lote 5',NULL,1,'2017-07-21 06:09:50','2017-08-01 09:21:28',0,1),(46,3,'lote 6',NULL,1,'2017-07-21 06:09:50','2017-07-21 06:09:50',0,1),(47,3,'lote 7',NULL,1,'2017-07-21 06:09:50','2017-07-21 06:09:50',0,1),(48,3,'lote 8',NULL,1,'2017-07-21 06:09:50','2017-07-21 06:09:50',0,1),(49,3,'lote 9',NULL,1,'2017-07-21 06:09:50','2017-07-21 06:09:50',0,1),(50,3,'lote 10',NULL,1,'2017-07-21 06:09:50','2017-07-21 06:09:50',0,1),(51,3,'lote 11',NULL,1,'2017-07-21 06:09:50','2017-07-21 06:09:50',0,1),(52,3,'lote 12',NULL,1,'2017-07-21 06:09:50','2017-07-21 06:09:50',0,1),(53,3,'lote 13',NULL,1,'2017-07-21 06:09:50','2017-07-21 06:09:50',0,1),(54,3,'lote 14',NULL,1,'2017-07-21 06:09:50','2017-07-21 06:09:50',0,1),(55,3,'lote 15',NULL,1,'2017-07-21 06:09:50','2017-07-21 06:09:50',0,1),(56,3,'lote 16',NULL,1,'2017-07-21 06:09:50','2017-07-21 06:09:50',0,1),(57,3,'lote 17',NULL,1,'2017-07-21 06:09:50','2017-07-21 06:09:50',0,1),(58,3,'lote 18',NULL,1,'2017-07-21 06:09:50','2017-07-21 06:09:50',0,1),(59,3,'lote 19',NULL,1,'2017-07-21 06:09:50','2017-07-21 06:09:50',0,1),(60,3,'lote 20',NULL,1,'2017-07-21 06:09:50','2017-07-21 06:09:50',0,1);
/*!40000 ALTER TABLE `lot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parking`
--

DROP TABLE IF EXISTS `parking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `parking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parking_type_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `IDX_B237527A4BA67449` (`parking_type_id`),
  CONSTRAINT `FK_B237527A4BA67449` FOREIGN KEY (`parking_type_id`) REFERENCES `parking_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parking`
--

LOCK TABLES `parking` WRITE;
/*!40000 ALTER TABLE `parking` DISABLE KEYS */;
INSERT INTO `parking` VALUES (1,1,'utn avellaneda','parking demo','2017-07-21 04:54:12','2017-07-21 04:57:50',1);
/*!40000 ALTER TABLE `parking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parking_type`
--

DROP TABLE IF EXISTS `parking_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `parking_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_F44A275A5E237E06` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parking_type`
--

LOCK TABLES `parking_type` WRITE;
/*!40000 ALTER TABLE `parking_type` DISABLE KEYS */;
INSERT INTO `parking_type` VALUES (1,'building',NULL,'2017-07-10 12:53:30','2017-07-10 12:53:30',1);
/*!40000 ALTER TABLE `parking_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `currency_id` int(11) DEFAULT NULL,
  `payment_parking_id` int(11) DEFAULT NULL,
  `payment_type_id` int(11) DEFAULT NULL,
  `payment_status_id` int(11) DEFAULT NULL,
  `amount` double NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `IDX_6D28840D38248176` (`currency_id`),
  KEY `IDX_6D28840D3AE13308` (`payment_parking_id`),
  KEY `IDX_6D28840DDC058279` (`payment_type_id`),
  KEY `IDX_6D28840D28DE2F95` (`payment_status_id`),
  KEY `IDX_6D28840D9395C3F3` (`customer_id`),
  CONSTRAINT `FK_6D28840D28DE2F95` FOREIGN KEY (`payment_status_id`) REFERENCES `payment_status` (`id`),
  CONSTRAINT `FK_6D28840D38248176` FOREIGN KEY (`currency_id`) REFERENCES `currency` (`id`),
  CONSTRAINT `FK_6D28840D3AE13308` FOREIGN KEY (`payment_parking_id`) REFERENCES `parking` (`id`),
  CONSTRAINT `FK_6D28840D9395C3F3` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  CONSTRAINT `FK_6D28840DDC058279` FOREIGN KEY (`payment_type_id`) REFERENCES `payment_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,1,NULL,3,2,5100,'2017-07-25 11:09:37','2017-08-01 09:21:28',NULL,1),(2,1,NULL,3,2,5100,'2017-07-25 11:42:16','2017-08-01 09:28:22',NULL,1),(3,1,NULL,3,2,5100,'2017-07-25 11:46:22','2017-08-01 09:26:27',NULL,1),(4,1,NULL,3,2,1630,'2017-07-25 14:51:58','2017-08-01 09:22:52',NULL,1),(5,1,NULL,3,2,1630,'2017-07-25 14:52:35','2017-08-01 09:23:12',NULL,1),(6,1,NULL,3,2,170,'2017-07-25 14:53:00','2017-08-01 09:23:35',NULL,1),(7,1,NULL,3,2,20,'2017-08-01 07:00:38','2017-08-01 09:03:22',NULL,1),(8,1,NULL,3,2,10,'2017-08-01 09:30:57','2017-08-01 09:42:11',NULL,1),(9,1,NULL,3,2,28210.3,'2017-08-01 09:31:29','2017-11-26 22:33:25',NULL,1),(13,1,NULL,3,2,25360,'2017-08-01 09:32:41','2017-11-15 01:21:21',NULL,1),(17,1,NULL,3,2,5100,'2017-11-07 23:13:50','2017-11-07 23:14:58',NULL,1),(18,1,NULL,3,2,5100,'2017-11-09 03:26:17','2017-11-14 16:11:58',NULL,1),(19,1,NULL,3,2,10,'2017-11-09 03:40:20','2017-11-09 03:49:27',NULL,1),(20,1,NULL,3,2,1320,'2017-11-09 03:50:04','2017-11-14 16:13:46',NULL,1),(21,1,NULL,3,2,2787.2,'2017-11-15 00:47:24','2017-11-26 22:33:10',15,1),(22,1,NULL,3,2,170,'2017-11-21 23:01:56','2017-11-21 23:02:33',7,1),(23,1,NULL,3,2,170,'2017-11-24 03:21:01','2017-11-24 03:21:17',17,1),(24,1,NULL,3,2,665.2,'2017-11-24 04:02:23','2017-11-26 22:33:48',7,1),(25,1,NULL,3,2,2721.6,'2017-11-24 04:02:45','2017-12-05 19:12:24',17,1),(26,1,NULL,3,2,2857.3,'2017-11-24 04:03:07','2017-12-06 01:46:42',8,1),(27,1,NULL,3,2,2787.3,'2017-11-24 04:03:26','2017-12-06 01:47:10',10,1),(28,1,NULL,3,2,2787.3,'2017-11-24 04:03:54','2017-12-06 01:47:35',2,1),(32,1,NULL,3,2,722.2,'2017-12-02 18:33:03','2017-12-06 01:46:19',8,1),(33,1,NULL,3,2,10,'2017-12-06 23:18:30','2017-12-06 23:46:23',11,1);
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_status`
--

DROP TABLE IF EXISTS `payment_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `decription` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_5E38FE8A5E237E06` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_status`
--

LOCK TABLES `payment_status` WRITE;
/*!40000 ALTER TABLE `payment_status` DISABLE KEYS */;
INSERT INTO `payment_status` VALUES (1,'pending',NULL,'2017-07-10 12:51:44','2017-07-10 12:51:44',1),(2,'paid',NULL,'2017-07-10 12:51:47','2017-07-10 12:51:47',1);
/*!40000 ALTER TABLE `payment_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_type`
--

DROP TABLE IF EXISTS `payment_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_AD5DC05D5E237E06` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_type`
--

LOCK TABLES `payment_type` WRITE;
/*!40000 ALTER TABLE `payment_type` DISABLE KEYS */;
INSERT INTO `payment_type` VALUES (1,'credit card',NULL,'2017-07-10 12:51:43','2017-07-10 12:51:43',1),(2,'debit card',NULL,'2017-07-10 12:51:43','2017-07-10 12:51:43',1),(3,'cash',NULL,'2017-07-10 12:51:43','2017-07-10 12:51:43',1);
/*!40000 ALTER TABLE `payment_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rent_lot`
--

DROP TABLE IF EXISTS `rent_lot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rent_lot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rent_type_id` int(11) DEFAULT NULL,
  `rent_status_id` int(11) DEFAULT NULL,
  `rent_lot_id` int(11) DEFAULT NULL,
  `rent_payment_id` int(11) DEFAULT NULL,
  `rent_parking_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `vehicle_id` int(11) DEFAULT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `IDX_BDBED1E2460F7E3` (`rent_type_id`),
  KEY `IDX_BDBED1E831F30D3` (`rent_status_id`),
  KEY `IDX_BDBED1E8A28CDBC` (`rent_lot_id`),
  KEY `IDX_BDBED1EAE2107D4` (`rent_payment_id`),
  KEY `IDX_BDBED1EA5F516B2` (`rent_parking_id`),
  KEY `IDX_BDBED1E545317D1` (`vehicle_id`),
  CONSTRAINT `FK_BDBED1E2460F7E3` FOREIGN KEY (`rent_type_id`) REFERENCES `rent_type` (`id`),
  CONSTRAINT `FK_BDBED1E545317D1` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`id`),
  CONSTRAINT `FK_BDBED1E831F30D3` FOREIGN KEY (`rent_status_id`) REFERENCES `rent_status` (`id`),
  CONSTRAINT `FK_BDBED1E8A28CDBC` FOREIGN KEY (`rent_lot_id`) REFERENCES `lot` (`id`),
  CONSTRAINT `FK_BDBED1EA5F516B2` FOREIGN KEY (`rent_parking_id`) REFERENCES `parking` (`id`),
  CONSTRAINT `FK_BDBED1EAE2107D4` FOREIGN KEY (`rent_payment_id`) REFERENCES `payment` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rent_lot`
--

LOCK TABLES `rent_lot` WRITE;
/*!40000 ALTER TABLE `rent_lot` DISABLE KEYS */;
INSERT INTO `rent_lot` VALUES (1,1,2,45,1,NULL,'2017-07-25 11:09:37','2017-12-06 23:02:29',5,'2017-07-25 11:09:37','2017-08-01 09:21:28',1),(2,1,2,1,2,NULL,'2017-07-25 11:42:16','2017-12-06 23:02:29',9,'2017-07-25 11:42:16','2017-08-01 09:28:22',1),(3,1,2,4,3,NULL,'2017-07-25 11:46:22','2017-12-06 23:02:29',6,'2017-07-25 11:46:22','2017-08-01 09:26:27',1),(4,3,2,6,4,NULL,'2017-07-25 14:51:58','2017-12-06 23:02:29',11,'2017-07-25 14:51:58','2017-08-01 09:22:52',1),(5,3,2,14,5,NULL,'2017-07-25 14:52:35','2017-12-06 23:02:29',12,'2017-07-25 14:52:35','2017-08-01 09:23:12',1),(6,2,2,8,6,NULL,'2017-07-25 14:53:00','2017-12-06 23:02:29',13,'2017-07-25 14:53:00','2017-08-01 09:23:35',1),(7,3,2,39,7,NULL,'2017-08-01 07:00:38','2017-12-06 23:02:29',14,'2017-08-01 07:00:38','2017-08-01 08:51:29',1),(8,3,2,1,8,NULL,'2017-08-01 09:30:57','2017-12-06 23:02:29',15,'2017-08-01 09:30:57','2017-08-01 09:42:11',1),(9,3,2,2,9,NULL,'2017-08-01 09:31:29','2017-12-06 23:02:29',16,'2017-08-01 09:31:29','2017-11-26 22:33:25',1),(13,3,2,7,13,NULL,'2017-08-01 09:32:41','2017-12-06 23:02:29',7,'2017-08-01 09:32:41','2017-11-15 01:21:21',1),(17,1,2,1,17,NULL,'2017-11-07 23:13:50','2017-12-06 23:02:29',6,'2017-11-07 23:13:50','2017-11-07 23:14:58',1),(18,1,2,1,18,NULL,'2017-11-09 03:26:17','2017-12-06 23:02:29',9,'2017-11-09 03:26:17','2017-11-14 16:11:58',1),(19,3,2,5,19,NULL,'2017-11-09 03:40:20','2017-12-06 23:02:29',6,'2017-11-09 03:40:20','2017-11-09 03:49:27',1),(20,3,2,3,20,NULL,'2017-11-09 03:50:04','2017-12-06 23:02:29',6,'2017-11-09 03:50:04','2017-11-14 16:13:46',1),(21,2,2,3,21,NULL,'2017-11-15 00:47:24','2017-12-06 23:02:29',15,'2017-11-15 00:47:24','2017-11-26 22:33:10',1),(22,2,2,1,22,NULL,'2017-11-21 23:01:56','2017-12-06 23:02:29',7,'2017-11-21 23:01:56','2017-11-21 23:02:33',1),(23,2,2,1,23,NULL,'2017-11-24 03:21:01','2017-12-06 23:02:29',17,'2017-11-24 03:21:01','2017-11-24 03:21:17',1),(24,3,2,1,24,NULL,'2017-11-24 04:02:23','2017-12-06 23:02:29',7,'2017-11-24 04:02:23','2017-11-26 22:33:48',1),(25,2,2,5,25,NULL,'2017-11-24 04:02:45','2017-12-06 23:02:29',17,'2017-11-24 04:02:45','2017-12-05 19:12:24',1),(26,3,2,8,26,NULL,'2017-11-24 04:03:07','2017-12-06 23:02:29',8,'2017-11-24 04:03:07','2017-12-06 01:46:42',1),(27,2,2,6,27,NULL,'2017-11-24 04:03:26','2017-12-06 23:02:29',10,'2017-11-24 04:03:26','2017-12-06 01:47:10',1),(28,2,2,4,28,NULL,'2017-11-24 04:03:54','2017-12-06 23:02:29',2,'2017-11-24 04:03:54','2017-12-06 01:47:35',1),(29,2,2,1,32,NULL,'2017-12-02 18:33:03','2017-12-06 23:02:29',8,'2017-12-02 18:33:03','2017-12-06 01:46:19',1),(30,3,2,41,33,NULL,'2017-12-06 23:18:30','2017-12-06 23:46:23',11,'2017-12-06 23:18:30','2017-12-06 23:40:03',1);
/*!40000 ALTER TABLE `rent_lot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rent_status`
--

DROP TABLE IF EXISTS `rent_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rent_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_59E30D575E237E06` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rent_status`
--

LOCK TABLES `rent_status` WRITE;
/*!40000 ALTER TABLE `rent_status` DISABLE KEYS */;
INSERT INTO `rent_status` VALUES (1,'rented',NULL,'2017-07-10 13:16:18','2017-07-10 13:16:18',1),(2,'rent finished',NULL,'2017-07-10 13:16:19','2017-07-10 13:16:19',1);
/*!40000 ALTER TABLE `rent_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rent_type`
--

DROP TABLE IF EXISTS `rent_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rent_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_FCB4F9625E237E06` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rent_type`
--

LOCK TABLES `rent_type` WRITE;
/*!40000 ALTER TABLE `rent_type` DISABLE KEYS */;
INSERT INTO `rent_type` VALUES (1,'month',NULL,'2017-07-10 13:02:06','2017-07-10 13:02:06',1),(2,'day',NULL,'2017-07-10 13:02:06','2017-07-10 13:02:06',1),(3,'hour',NULL,'2017-07-10 13:02:08','2017-07-10 13:02:08',1),(4,'halfday',NULL,'2017-07-25 06:21:19','2017-07-25 06:21:19',1);
/*!40000 ALTER TABLE `rent_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `section`
--

DROP TABLE IF EXISTS `section`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `section` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `section_parking_id` int(11) DEFAULT NULL,
  `section_type_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `IDX_2D737AEF92A78802` (`section_parking_id`),
  KEY `IDX_2D737AEF170B419C` (`section_type_id`),
  CONSTRAINT `FK_2D737AEF170B419C` FOREIGN KEY (`section_type_id`) REFERENCES `section_type` (`id`),
  CONSTRAINT `FK_2D737AEF92A78802` FOREIGN KEY (`section_parking_id`) REFERENCES `parking` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `section`
--

LOCK TABLES `section` WRITE;
/*!40000 ALTER TABLE `section` DISABLE KEYS */;
INSERT INTO `section` VALUES (1,1,1,'planta baja','2017-07-21 05:24:52','2017-07-21 05:28:01',1),(2,1,1,'piso 1','2017-07-21 05:26:50','2017-07-21 05:26:50',1),(3,1,1,'piso 2','2017-07-21 05:26:59','2017-07-21 05:26:59',1);
/*!40000 ALTER TABLE `section` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `section_type`
--

DROP TABLE IF EXISTS `section_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `section_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_960BB225E237E06` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `section_type`
--

LOCK TABLES `section_type` WRITE;
/*!40000 ALTER TABLE `section_type` DISABLE KEYS */;
INSERT INTO `section_type` VALUES (1,'floor',NULL,'2017-07-10 12:58:54','2017-07-10 12:58:54',1);
/*!40000 ALTER TABLE `section_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `phone_number` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `password` longtext COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `lock_user` tinyint(1) NOT NULL DEFAULT '0',
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Bruno','Diaz','1134574658','admin','admin@test.com','password1','0000-00-00 00:00:00','2017-12-05 17:01:22',0,1),(2,'Agent','Agent','11355745789','agent','agent@test.com','password1','0000-00-00 00:00:00','2017-12-06 01:41:20',0,1),(3,'Supervisor','Supervisor','1135574558','supervisor','supervisor@test.com','password1','0000-00-00 00:00:00','2017-11-29 02:40:01',0,1),(4,'Nicolas','cuevas','1136707655','cuevastest','test@test.com','test','2017-07-10 04:48:40','2017-12-05 14:28:33',0,1),(5,'Cleo','Patra','1136707656','cleo','cleo@test.com','test','2017-07-10 07:48:38','2017-11-29 02:44:45',1,1),(6,'Dante','Hell','1136707655','dante','test1@test.com','test','2017-07-10 07:49:09','2017-11-29 02:40:42',0,1),(7,'Ricardo','Tapia','1136707674','robin','user4@test.com','test','2017-07-21 19:22:30','2017-12-12 14:46:59',0,1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_audit`
--

DROP TABLE IF EXISTS `user_audit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_audit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `action` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `meta` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `IDX_70DA0421A76ED395` (`user_id`),
  CONSTRAINT `FK_70DA0421A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=264 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_audit`
--

LOCK TABLES `user_audit` WRITE;
/*!40000 ALTER TABLE `user_audit` DISABLE KEYS */;
INSERT INTO `user_audit` VALUES (1,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDA3MDg4MzEsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.2jzdRKmouj-ieMMnk_WfK_kAPW2IKEq3Z0jkg_Vi2p8\"}','2017-07-21 07:33:51','2017-07-21 07:33:51',1),(2,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDA3NDg3NzcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.OkF3N2jnLlCXdcgoXVQjuhlAlFdJPgYdHyS2H_1Dse0\"}','2017-07-21 18:39:37','2017-07-21 18:39:37',1),(3,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDA3NTAzNTEsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.ziYHp175wSxF5b2wAmI64-p1vnRzmm5Cu0wp_SHvWEc\"}','2017-07-21 19:05:51','2017-07-21 19:05:51',1),(4,1,'UPDATE_USER','{\"id\":\"4\",\"params\":{\"firstName\":\"Nicolas\",\"lastName\":\"cuevas\",\"email\":\"test@test.com\",\"phoneNumber\":\"1136707655\",\"username\":\"ntest\",\"password\":\"test\",\"userGroups\":1}}','2017-07-21 19:16:18','2017-07-21 19:16:18',1),(5,1,'UPDATE_USER','{\"id\":\"4\",\"params\":{\"firstName\":\"Nicolas\",\"lastName\":\"cuevas\",\"email\":\"test@test.com\",\"phoneNumber\":\"1136707655\",\"username\":\"cuevastest\",\"password\":\"test\",\"userGroups\":1}}','2017-07-21 19:17:39','2017-07-21 19:17:39',1),(6,1,'CREATE_USER','{\"params\":{\"firstName\":\"Alejandro\",\"lastName\":\"Pietro\",\"email\":\"user4@test.com\",\"phoneNumber\":\"1136707674\",\"username\":\"pietro\",\"password\":\"test\",\"userGroups\":\"2\"}}','2017-07-21 19:22:30','2017-07-21 19:22:30',1),(7,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDA3NTMyMjIsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.tLpVqzvq5y4XlbPIwoRsEB_McciCOgJa8hrPJ4iVzKM\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-21 19:53:42','2017-07-21 19:53:42',1),(8,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDA3NTM0MTEsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.aF5aBtyplprqmEWpNllDb02wboaN64_PTz4CcF2-RvM\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-21 19:56:51','2017-07-21 19:56:51',1),(9,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDA3NzExNzEsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.6VodFxQyUI-38zkmMxP3SQvPjqGyraCQ1RtutEK_300\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-22 00:52:51','2017-07-22 00:52:51',1),(10,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDA3NzEzMjMsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.p94HUc7H-VKkT4RUAy2rmf-bZDdFTd6JbWA_C5VvetM\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-22 00:55:23','2017-07-22 00:55:23',1),(11,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDA3NzE0NDEsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.-bp4m7mqWYlROsmPnNKS7NCdFFOrdyGU8GGInZ7K_ic\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-22 00:57:21','2017-07-22 00:57:21',1),(12,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDA3NzIzNDMsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19._iKgnCUGpiG_qsc3km10EJifL0bXoGSQWm--cIHtcV0\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-22 01:12:23','2017-07-22 01:12:23',1),(13,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDA5MjU1NjgsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.1lZoaXjYdmukSfk9nCpcj5dP7YF6n3I_qQJIP4kf4C8\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-23 19:46:08','2017-07-23 19:46:08',1),(14,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDA5MzE1MDQsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.dP5QAqL8WjLRmbX5F6RiGr3586cC2MpUUf6N4bpUyHo\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-23 21:25:04','2017-07-23 21:25:04',1),(15,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDA5MzIxNDEsImF1ZCI6ImU5MjRhYWFmNTI0MmRmNTcxMjU3MGIzYWZkZDE0ZjcwYzkzN2Y3ZWYiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.E3doOyuSAPqRhi1A9QQvya04yPu90TVvLWKLW04Ui6Y\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-23 21:35:41','2017-07-23 21:35:41',1),(16,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDA5MzUwNTAsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.G2_d5gCE93BoADZuJbYoaWOAmP2dq_KbylX9-L1a1mc\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-23 22:24:10','2017-07-23 22:24:10',1),(17,1,'CREATE_VEHICLE_FAIL','{\"params\":{\"firstName\":\"John\",\"lastName\":\"Bonachon\",\"phoneNumber\":\"9283743874\",\"plate\":\"982734\",\"brand\":\"138\",\"color\":\"#d12626\",\"vehicleType\":\"20\"}}','2017-07-24 02:21:26','2017-07-24 02:21:26',1),(18,1,'CREATE_VEHICLE','{\"params\":{\"firstName\":\"Michael\",\"lastName\":\"Heneken\",\"phoneNumber\":\"9283743738\",\"plate\":\"9827349\",\"brand\":\"146\",\"color\":\"#e87c17\",\"vehicleType\":\"7\"}}','2017-07-24 02:22:27','2017-07-24 02:22:27',1),(19,1,'CREATE_VEHICLE','{\"params\":{\"firstName\":\"\",\"lastName\":\"\",\"phoneNumber\":\"\",\"plate\":\"test123\",\"brand\":\"198\",\"color\":\"#21e9da\",\"vehicleType\":\"7\"}}','2017-07-24 02:48:33','2017-07-24 02:48:33',1),(20,1,'UPDATE_VEHICLE','{\"params\":{\"firstName\":\"Homero J\",\"lastName\":\"Simpson\",\"phoneNumber\":\"098230948\",\"plate\":\"test123\",\"brand\":\"179\",\"color\":\"#21e9da\",\"vehicleType\":7}}','2017-07-24 03:45:26','2017-07-24 03:45:26',1),(21,1,'CREATE_VEHICLE','{\"params\":{\"firstName\":\"Fernando\",\"lastName\":\"Marconi\",\"phoneNumber\":\"1136707655\",\"plate\":\"tes838\",\"brand\":\"136\",\"color\":\"#050505\",\"vehicleType\":\"3\"}}','2017-07-24 03:51:20','2017-07-24 03:51:20',1),(22,1,'UPDATE_VEHICLE','{\"params\":{\"firstName\":\"Homero J\",\"lastName\":\"Simpson\",\"phoneNumber\":\"113670940\",\"plate\":\"tes838\",\"brand\":136,\"color\":\"#050505\",\"vehicleType\":\"1\"}}','2017-07-24 03:52:58','2017-07-24 03:52:58',1),(23,1,'UPDATE_VEHICLE','{\"params\":{\"firstName\":\"John\",\"lastName\":\"Bonachon\",\"phoneNumber\":\"9283743874\",\"plate\":\"982734\",\"brand\":\"139\",\"color\":\"#a3a3a3\",\"vehicleType\":\"1\"}}','2017-07-24 03:53:47','2017-07-24 03:53:47',1),(24,1,'CREATE_VEHICLE','{\"params\":{\"firstName\":\"emmet\",\"lastName\":\"brown\",\"phoneNumber\":\"8473958745\",\"plate\":\"back123\",\"brand\":\"153\",\"color\":\"#8a8989\",\"vehicleType\":\"5\"}}','2017-07-24 03:59:33','2017-07-24 03:59:33',1),(25,1,'CREATE_VEHICLE','{\"params\":{\"firstName\":\"mike\",\"lastName\":\"jordan\",\"phoneNumber\":\"982387461\",\"plate\":\"aux432\",\"brand\":\"153\",\"color\":\"#a33131\",\"vehicleType\":\"5\"}}','2017-07-24 07:49:56','2017-07-24 07:49:56',1),(26,1,'CREATE_VEHICLE','{\"params\":{\"firstName\":\"michael\",\"lastName\":\"foxe\",\"phoneNumber\":\"098230948\",\"plate\":\"aux4324\",\"brand\":\"138\",\"color\":\"#0e0a0a\",\"vehicleType\":\"12\"}}','2017-07-24 10:00:04','2017-07-24 10:00:04',1),(27,1,'CREATE_VEHICLE','{\"params\":{\"firstName\":\"\",\"lastName\":\"\",\"phoneNumber\":\"\",\"plate\":\"aux43243\",\"brand\":\"136\",\"color\":\"#f51414\",\"vehicleType\":\"7\"}}','2017-07-24 10:00:25','2017-07-24 10:00:25',1),(28,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDIxOTcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.Ktiiit40mX99YdWFX_3WN0xtd5Zkbia3nWxNN5kkhGI\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 04:09:57','2017-07-25 04:09:57',1),(29,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDIzNzUsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.JYPnP87ctM3bn6C3xMtn0_gchW3bvRMr7HaS_rEx1EI\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 04:12:55','2017-07-25 04:12:55',1),(30,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDI1NDgsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.SEwZZq4LR63PYi38CMit87_aRt48QOe2rw9SAMqhqFw\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 04:15:48','2017-07-25 04:15:48',1),(31,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDQ1ODQsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.Z6UdaWIOAFk-NqNKaVWnV4uIUJ1B_ZHAF_curiMRt4Q\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 04:49:44','2017-07-25 04:49:44',1),(32,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDQ3NjksImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.Jm-JS1iIPhKzClOxirneromHaDRmQfuyvJBJALvghbY\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 04:52:49','2017-07-25 04:52:49',1),(33,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDQ5MjYsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.Gc1Gpr4xIVpsv9PB7Etxgj9h0Rxt_QbRlpW03WYBQWo\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 04:55:26','2017-07-25 04:55:26',1),(34,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDU5OTIsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.WSTyryAEvXN_m6oUPmvg3yfRVb_YKQR6PCs24ymkgug\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 05:13:12','2017-07-25 05:13:12',1),(35,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDYzMDYsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.v5_sFHohsFuKjP8zF7m7G3lh-OqZLyMc39ARokq_ZS8\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 05:18:26','2017-07-25 05:18:26',1),(36,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDY3MDgsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.BMdyZB88T6DTnDHBqfkGoHVeNqCgvpltd6vK1WlEdGw\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 05:25:08','2017-07-25 05:25:08',1),(37,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDcyNjgsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.fiC2BZARDnVNmmNjNAOvjghnTXhTP-XHBQZO9zd5PLs\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 05:34:28','2017-07-25 05:34:28',1),(38,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDc2NDMsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.lgBor9_wNJccRpCo4We2sZR4VjQ905EzijDsDVQNu-w\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 05:40:43','2017-07-25 05:40:43',1),(39,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDc5NTEsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.lAJclCBQQ4FN4bLcvHmv-S63NzB680s9Hrzj0hPAtlI\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 05:45:51','2017-07-25 05:45:51',1),(40,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDgwNjIsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.wAU7EE6Bw5Clns_AAU29q4PbAyy3yUnIqUjA9NFqOlc\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 05:47:42','2017-07-25 05:47:42',1),(41,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDgyNzksImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.hsQIvyozkUpkcD_lBUSQ-xLHcNnfHA172jIab5bbOio\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 05:51:19','2017-07-25 05:51:19',1),(42,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDg3NDEsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.R5K5IXI9wHOrCudKF6DA75Hi_xTOicrvOfXLj332AOc\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 05:59:01','2017-07-25 05:59:01',1),(43,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDkwOTUsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.iciyFTkDVJXoBifQgQ5GsL-PEMGgOquWLVSwwFjaD7I\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 06:04:55','2017-07-25 06:04:55',1),(44,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDkxODgsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.HxPURmIt53Qx6Cg7XANU-11_cjY7C4sGguVcphOOBuo\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 06:06:28','2017-07-25 06:06:28',1),(45,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDkzMDksImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.pa4QoylyEoeZ-wCWSljhoc-KNnQ3wzc7tYhntUs4YaU\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 06:08:29','2017-07-25 06:08:29',1),(46,1,'CREATE_VEHICLE','{\"params\":{\"firstName\":\"peter\",\"lastName\":\"griffin\",\"phoneNumber\":\"183479239\",\"plate\":\"aux432832\",\"brand\":\"155\",\"color\":\"#276a2e\",\"vehicleType\":\"4\"}}','2017-07-25 06:12:53','2017-07-25 06:12:53',1),(47,1,'CREATE_VEHICLE','{\"params\":{\"firstName\":\"\",\"lastName\":\"\",\"phoneNumber\":\"\",\"plate\":\"aux85947\",\"brand\":\"144\",\"color\":\"#000000\",\"vehicleType\":\"1\"}}','2017-07-25 06:13:30','2017-07-25 06:13:30',1),(48,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNDk3NTAsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.WmiBz_6dMQQeipzE27FQt8C7ex4Y2RQFMpbMmKP-MV4\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 06:15:50','2017-07-25 06:15:50',1),(49,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTAyNTAsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.dddOfWUmFoh69PYeX4XAENmr39DUlWVcRDWLcEJ65is\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 06:24:10','2017-07-25 06:24:10',1),(50,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTA0OTgsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.c6C5HPAgoN0PEYg4RubF7uOLcZmIZEGJ3fLnkySc_LE\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 06:28:18','2017-07-25 06:28:18',1),(51,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTA4NzcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.72mEErnVwab0XZ3C-KyW-qtydnQYw0w9cXo2nwemjfc\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 06:34:37','2017-07-25 06:34:37',1),(52,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTExMjksImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.iT6sDJNd0GFIuWFBRqzudeSgsInidp6nx2k9722sPFo\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 06:38:49','2017-07-25 06:38:49',1),(53,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTE2ODUsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.IPzldA7Yg-VR7vjtp7yQnkeZTp8i8_LjGCzBxy5K-m4\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 06:48:05','2017-07-25 06:48:05',1),(54,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTIxNDIsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.yvkj1Q25-HCxiE2LIeVKyKk7pTLqL_9DRytt-06e65k\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 06:55:42','2017-07-25 06:55:42',1),(55,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTIzNTAsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.OIx7Dk-jinzUMjFSFyBHTbrr5wSd9OYAVxviNw6lMpI\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 06:59:10','2017-07-25 06:59:10',1),(56,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTI0NDEsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.aYj9jP1D_tQGpWrJ_K2AOh2ZYldkHjhyaxwk8Jz0SBY\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 07:00:41','2017-07-25 07:00:41',1),(57,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTMwNDYsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.a2bl_2zVx2fLRAH6ljXBrp1fnCzaOwPN8r1U_la4lRs\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 07:10:46','2017-07-25 07:10:46',1),(58,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTM1NzUsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.2pc9M1r-zRBEbrfGSXP83qgpD0dmADeM16To8_13PWo\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 07:19:35','2017-07-25 07:19:35',1),(59,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTM3NDcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.be0iv8cHoTowx1mVx_R-ThPmHQKP0Xm7HbPLytnsNUI\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 07:22:27','2017-07-25 07:22:27',1),(60,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTQyOTMsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.FlK-m32pcqP1_94LKjT4iTWQyPAQZghIOCVkDMQXjHA\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 07:31:33','2017-07-25 07:31:33',1),(61,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTQ1NjAsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.xw-O9FgldBevv41EBS7R_zEm8uIG-UTRcvwWk3zXe_U\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 07:36:00','2017-07-25 07:36:00',1),(62,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTQ4NzIsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.wRZuALLlT4omxFk8PP4zzj2-6RuxIT8ZGWXXy887qms\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 07:41:12','2017-07-25 07:41:12',1),(63,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTU5MjYsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.5-uy87KXa6SDVuUOg9Z_s2xrvpiQLoBK_C7EMzNDeZQ\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 07:58:46','2017-07-25 07:58:46',1),(64,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTYyNjQsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.vH49D6b7KqAonkuIZq5MaARny4pnJ-WE10SpMgYkaVE\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 08:04:25','2017-07-25 08:04:25',1),(65,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTY1MDMsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.UWw9_om8XYTjF7MpqqnARhkEMblxmO4ZoGZXhHbvCCw\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 08:08:23','2017-07-25 08:08:23',1),(66,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTY3MzcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.JXWonacx_JAwH_qaD8-RIEO6HbfAzUU10mr48Xelz0g\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 08:12:17','2017-07-25 08:12:17',1),(67,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTcwNzEsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.XiB7bFG3V9QjmFOZ3BCCzGhG90SDSqjBIGkqWDceZkg\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 08:17:51','2017-07-25 08:17:51',1),(68,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTc5MjcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.DWKWG95pzvlrv62TXc3YNi52B77VRomMFgdUCHBklqE\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 08:32:07','2017-07-25 08:32:07',1),(69,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTg2MDAsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.p2Qs9lr1ccn-rUT_7Xdn-EsyxMffVrsVE9eT7SfNpJ4\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 08:43:20','2017-07-25 08:43:20',1),(70,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTkxMzIsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.Yqm577aY0Pj5DgN_rE7KPJDdbEaoFuOBGYwvp4k5p7Q\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 08:52:12','2017-07-25 08:52:12',1),(71,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNTk0NjgsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.xuWoR7zudyVtkapOcQ8Md0tWzagvi3MmmPQOTrumCLk\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 08:57:48','2017-07-25 08:57:48',1),(72,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNjA1NzEsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.ercX9WZkCMDM5LNQWkT_wfK2gJYjImcy4YikBlBXl-E\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 09:16:11','2017-07-25 09:16:11',1),(73,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNjEzOTIsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.q_ZTzG8v6CkuHBWCWU9P8PwkndEeSnWKukc4taIWBlI\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 09:29:52','2017-07-25 09:29:52',1),(74,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNjE1NDAsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.j_0Y1NdcebOCCCXAx-JmLlr7b6wRwxW3qa3taYZTLSw\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 09:32:20','2017-07-25 09:32:20',1),(75,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNjI2OTYsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.P4SI-dp2xTTOdlOcWgnK2FjkXf67vy_1VDdkZDXEiRM\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 09:51:36','2017-07-25 09:51:36',1),(76,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDEwNjQxMDAsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.Xot-8Rfs2ARQOXXKA9pqrHr0OK3ORtMQFUCTPuQ4Uyk\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-25 10:15:00','2017-07-25 10:15:00',1),(77,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":5,\"lot\":45,\"rentType\":\"1\"}}','2017-07-25 11:09:37','2017-07-25 11:09:37',1),(78,1,'CREATE_RENTLOT_FAIL','{\"params\":{\"vehicle\":9,\"lot\":1,\"rentType\":\"1\"}}','2017-07-25 11:41:37','2017-07-25 11:41:37',1),(79,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":9,\"lot\":1,\"rentType\":\"1\"}}','2017-07-25 11:42:16','2017-07-25 11:42:16',1),(80,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":6,\"lot\":4,\"rentType\":\"1\"}}','2017-07-25 11:46:22','2017-07-25 11:46:22',1),(81,1,'CREATE_VEHICLE','{\"params\":{\"firstName\":\"rocky\",\"lastName\":\"blaboa\",\"phoneNumber\":\"987387347\",\"plate\":\"rocky123\",\"brand\":\"200\",\"color\":\"#f70909\",\"vehicleType\":\"4\"}}','2017-07-25 14:49:35','2017-07-25 14:49:35',1),(82,1,'CREATE_VEHICLE','{\"params\":{\"firstName\":\"Ivan\",\"lastName\":\"Drago\",\"phoneNumber\":\"874759874\",\"plate\":\"rocky124\",\"brand\":\"155\",\"color\":\"#60580a\",\"vehicleType\":\"5\"}}','2017-07-25 14:50:23','2017-07-25 14:50:23',1),(83,1,'CREATE_VEHICLE','{\"params\":{\"firstName\":\"apollo\",\"lastName\":\"creed\",\"phoneNumber\":\"8498739847\",\"plate\":\"rocky125\",\"brand\":\"150\",\"color\":\"#1caebf\",\"vehicleType\":\"6\"}}','2017-07-25 14:51:02','2017-07-25 14:51:02',1),(84,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":11,\"lot\":6,\"rentType\":\"3\"}}','2017-07-25 14:51:59','2017-07-25 14:51:59',1),(85,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":12,\"lot\":14,\"rentType\":\"3\"}}','2017-07-25 14:52:36','2017-07-25 14:52:36',1),(86,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":13,\"lot\":8,\"rentType\":\"2\"}}','2017-07-25 14:53:00','2017-07-25 14:53:00',1),(87,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDE1NTk5NzEsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.aV56LQiTW8Mgdkln8SCOtGlpnqlUHq9uFHcjyIomyTs\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-07-31 03:59:31','2017-07-31 03:59:31',1),(88,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDE2NDQ1NDksImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.qc7kH6CGkQMC0n-3E9lYuQbp5eJHRIHKU_LKBkmFn5U\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-08-01 03:29:09','2017-08-01 03:29:09',1),(89,1,'CREATE_VEHICLE','{\"params\":{\"firstName\":\"j.r.r\",\"lastName\":\"tolkien\",\"phoneNumber\":\"9836487885\",\"plate\":\"jrrt93\",\"brand\":\"137\",\"color\":\"#2c35da\",\"vehicleType\":\"3\"}}','2017-08-01 05:46:48','2017-08-01 05:46:48',1),(90,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDE2NTcxNjgsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.FHACYlHSy5wgQnbX974etnNQi6jUUZ7TclFfOai_Vi4\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-08-01 06:59:28','2017-08-01 06:59:28',1),(91,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":14,\"lot\":39,\"rentType\":\"3\"}}','2017-08-01 07:00:38','2017-08-01 07:00:38',1),(92,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDE2NjIxOTYsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.Mbs5PPMgdvAPN8vTajqHjDpAZz7N0OAanoRoby4ET2M\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-08-01 08:23:16','2017-08-01 08:23:16',1),(93,1,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":7,\"amount\":10,\"paymentStatus\":2,\"rentStatus\":2}}','2017-08-01 08:51:29','2017-08-01 08:51:29',1),(94,1,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":7,\"amount\":20,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-08-01 09:03:22','2017-08-01 09:03:22',1),(95,1,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":1,\"amount\":5100,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-08-01 09:21:28','2017-08-01 09:21:28',1),(96,1,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":4,\"amount\":1630,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-08-01 09:22:53','2017-08-01 09:22:53',1),(97,1,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":5,\"amount\":1630,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-08-01 09:23:12','2017-08-01 09:23:12',1),(98,1,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":6,\"amount\":170,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-08-01 09:23:35','2017-08-01 09:23:35',1),(99,1,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":3,\"amount\":5100,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-08-01 09:26:27','2017-08-01 09:26:27',1),(100,1,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":2,\"amount\":5100,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-08-01 09:28:22','2017-08-01 09:28:22',1),(101,1,'CREATE_VEHICLE','{\"params\":{\"firstName\":\"Hernan\",\"lastName\":\"Crespo\",\"phoneNumber\":\"987983457\",\"plate\":\"arg123\",\"brand\":\"155\",\"color\":\"#0a0909\",\"vehicleType\":\"4\"}}','2017-08-01 09:29:38','2017-08-01 09:29:38',1),(102,1,'CREATE_VEHICLE','{\"params\":{\"firstName\":\"grabriel omar\",\"lastName\":\"batistuta\",\"phoneNumber\":\"9847398593\",\"plate\":\"arg234\",\"brand\":\"145\",\"color\":\"#dc2323\",\"vehicleType\":\"1\"}}','2017-08-01 09:30:19','2017-08-01 09:30:19',1),(103,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":15,\"lot\":1,\"rentType\":\"3\"}}','2017-08-01 09:30:57','2017-08-01 09:30:57',1),(104,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":16,\"lot\":2,\"rentType\":\"3\"}}','2017-08-01 09:31:29','2017-08-01 09:31:29',1),(105,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":7,\"lot\":7,\"rentType\":\"3\"}}','2017-08-01 09:32:41','2017-08-01 09:32:41',1),(106,1,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":8,\"amount\":10,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-08-01 09:42:11','2017-08-01 09:42:11',1),(107,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDIyNDIyMTAsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.MTnp7U6WdzP5Eb9fLMw_ojxadhrJ0h3hj-Xo2XgO3HE\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-08-08 01:30:10','2017-08-08 01:30:10',1),(108,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDIzMTE2NDksImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.A8rnhji9GHFVDANgngug8z1doAHgP6c6EbJA87HSwRY\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-08-08 20:47:29','2017-08-08 20:47:29',1),(109,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDMwNzk1NTksImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.doflWTvDEIRunyA4aproTIaGVJcoSkZ4lF2TJBfc_jM\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-08-17 18:05:59','2017-08-17 18:05:59',1),(110,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTAxNzY4MzMsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.OHt8rLHesoP638qAO9ne_qAE5bUYdlqWxFtaSvhSbZE\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-07 21:33:53','2017-11-07 21:33:53',1),(111,1,'UPDATE_USER','{\"id\":\"7\",\"params\":{\"firstName\":\"Alejandro\",\"lastName\":\"Pietro\",\"email\":\"user4@test.com\",\"phoneNumber\":\"1136707674\",\"username\":\"pietro\",\"password\":\"test\",\"userGroups\":2}}','2017-11-07 21:38:42','2017-11-07 21:38:42',1),(112,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTAxNzkzNzMsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.kqyy_mMuN5VLJma9gfi_w2bFZ5-shXk3CcKrrijU1AI\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-07 22:16:13','2017-11-07 22:16:13',1),(113,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTAxODI1OTcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.fAi5cpefR3Pft9cEBpeJcrf-WgAxb_TiUO9acUmvVHM\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-07 23:09:57','2017-11-07 23:09:57',1),(114,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTAxODI3MjcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.nICp89qyqfqTGsR8rBneqH6-coTry8ed-OtExpIlRlE\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-07 23:12:07','2017-11-07 23:12:07',1),(115,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":6,\"lot\":1,\"rentType\":\"1\"}}','2017-11-07 23:13:50','2017-11-07 23:13:50',1),(116,1,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":17,\"amount\":5100,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-11-07 23:14:58','2017-11-07 23:14:58',1),(117,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTAyODQyMzIsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.r_7wIi-5na4spEG4LqujhbffhuwNaw1lPJ7FYwwy2bs\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-09 03:23:52','2017-11-09 03:23:52',1),(118,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":9,\"lot\":1,\"rentType\":\"1\"}}','2017-11-09 03:26:18','2017-11-09 03:26:18',1),(119,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":6,\"lot\":5,\"rentType\":\"3\"}}','2017-11-09 03:40:20','2017-11-09 03:40:20',1),(120,1,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":19,\"amount\":10,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-11-09 03:49:27','2017-11-09 03:49:27',1),(121,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":6,\"lot\":3,\"rentType\":\"3\"}}','2017-11-09 03:50:04','2017-11-09 03:50:04',1),(122,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTA3NjE3NTMsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.m2Slrb2vuFD3eu4Hv3W4f-wdqEvzomVYojoCpbk_H-M\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-14 16:02:33','2017-11-14 16:02:33',1),(123,1,'UPDATE_VEHICLE_FAIL','{\"params\":{\"firstName\":\"michael\",\"lastName\":\"foxe\",\"phoneNumber\":\"098230948\",\"plate\":\"aux4324\",\"brand\":138,\"color\":\"#0e0a0a\",\"vehicleType\":12}}','2017-11-14 16:07:19','2017-11-14 16:07:19',1),(124,1,'UPDATE_VEHICLE_FAIL','{\"params\":{\"firstName\":\"michael\",\"lastName\":\"foxe\",\"phoneNumber\":\"098230948\",\"plate\":\"aux4324\",\"brand\":138,\"color\":\"#0e0a0a\",\"vehicleType\":12}}','2017-11-14 16:07:24','2017-11-14 16:07:24',1),(125,1,'UPDATE_VEHICLE_FAIL','{\"params\":{\"firstName\":\"michael\",\"lastName\":\"foxe\",\"phoneNumber\":\"098230948\",\"plate\":\"aux4324\",\"brand\":138,\"color\":\"#0e0a0a\",\"vehicleType\":\"8\"}}','2017-11-14 16:07:41','2017-11-14 16:07:41',1),(126,1,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":18,\"amount\":5100,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-11-14 16:11:58','2017-11-14 16:11:58',1),(127,1,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":20,\"amount\":1320,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-11-14 16:13:46','2017-11-14 16:13:46',1),(128,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTA3Njc0MDMsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.sF6mvRmZ-c1Qd0Ez_QUC_1ukKgyMBNkJERyCS_Q6iAU\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-14 17:36:44','2017-11-14 17:36:44',1),(129,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTA3NzMzMzMsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.7NP6Ja-TzVmCPh7SxChnzeQVaHHLM9iwa99fmtE74Jc\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-14 19:15:33','2017-11-14 19:15:33',1),(130,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":15,\"lot\":3,\"rentType\":\"2\"}}','2017-11-15 00:47:24','2017-11-15 00:47:24',1),(131,1,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":13,\"amount\":25360,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-11-15 01:21:21','2017-11-15 01:21:21',1),(132,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTA4MDA5NzAsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.r0OiNzeS2w5J281D6gUWdCslWA_2TZfmkY2mMP6hCTw\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-15 02:56:10','2017-11-15 02:56:10',1),(133,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTEyODM1OTcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.c-77cqhrmL2tCon7PvWFVww-F3g67jngxyx_G93ccf0\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-20 16:59:57','2017-11-20 16:59:57',1),(134,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTEyODM5NzIsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.JC-C064KfrJPseyxiix2MqpD4Yh0QxMFF9roaNL4-xQ\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-20 17:06:12','2017-11-20 17:06:12',1),(135,1,'UPDATE_VEHICLE_FAIL','{\"params\":{\"firstName\":\"Frodo\",\"lastName\":\"bolson\",\"phoneNumber\":\"923876423\",\"plate\":\"aux85947\",\"brand\":144,\"color\":\"#000000\",\"vehicleType\":1}}','2017-11-20 17:12:34','2017-11-20 17:12:34',1),(136,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTEyODUxNTksImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.4eHWQYcAegho05Q2N-fKiD0ihd3TWh38zVuCxFo4jd4\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-20 17:25:59','2017-11-20 17:25:59',1),(137,1,'UPDATE_USER','{\"id\":\"1\",\"params\":{\"firstName\":\"Admin\",\"lastName\":\"Admin\",\"email\":\"admin@test.com\",\"phoneNumber\":\"1134574658\",\"username\":\"admin\",\"password\":\"password1\",\"userGroups\":1}}','2017-11-20 17:28:47','2017-11-20 17:28:47',1),(138,1,'UPDATE_VEHICLE_FAIL','{\"params\":{\"firstName\":\"John\",\"lastName\":\"Bonachon\",\"phoneNumber\":\"9283743874\",\"plate\":\"982734\",\"brand\":139,\"color\":\"#a3a3a3\",\"vehicleType\":1}}','2017-11-20 17:29:09','2017-11-20 17:29:09',1),(139,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTEzNjEwMzQsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.mqe6KKq7YSiDrQgWpHjfbOpw4L_omKpC6QK2tSfhzuY\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-21 14:30:34','2017-11-21 14:30:34',1),(140,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTEzNjExMDMsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.nAOsNTOvLQDC7pTP77R56e0fAQR_fQcLbrUURRJMtfY\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-21 14:31:43','2017-11-21 14:31:43',1),(141,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTEzODY5MjgsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.gY5Zpix4GPD2XJnfYrro1VWetjwQ8Ssy3SI6PkNCZJg\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-21 21:42:09','2017-11-21 21:42:09',1),(142,1,'UPDATE_USER','{\"id\":\"5\",\"params\":{\"firstName\":\"Cleo\",\"lastName\":\"Patra\",\"email\":\"cleo@test.com\",\"phoneNumber\":\"1136707656\",\"username\":\"cleo\",\"password\":\"test\",\"userGroups\":1}}','2017-11-21 21:47:01','2017-11-21 21:47:01',1),(143,1,'UPDATE_VEHICLE','{\"params\":{\"firstName\":\"\",\"lastName\":\"\",\"phoneNumber\":\"298374982374\",\"plate\":\"aux43243\",\"brand\":136,\"color\":\"#f51414\",\"vehicleType\":7}}','2017-11-21 22:08:42','2017-11-21 22:08:42',1),(144,1,'UPDATE_VEHICLE','{\"params\":{\"firstName\":\"Larry\",\"lastName\":\"Beans\",\"phoneNumber\":\"298374982374\",\"plate\":\"aux43243\",\"brand\":136,\"color\":\"#f51414\",\"vehicleType\":7}}','2017-11-21 22:09:30','2017-11-21 22:09:30',1),(145,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":7,\"lot\":1,\"rentType\":\"2\"}}','2017-11-21 23:01:56','2017-11-21 23:01:56',1),(146,1,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":22,\"amount\":170,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-11-21 23:02:33','2017-11-21 23:02:33',1),(147,1,'UPDATE_VEHICLE','{\"params\":{\"firstName\":\"Hernan\",\"lastName\":\"Crespo\",\"phoneNumber\":\"987983457\",\"plate\":\"arg123\",\"brand\":155,\"color\":\"#e80909\",\"vehicleType\":4}}','2017-11-22 11:21:57','2017-11-22 11:21:57',1),(148,1,'UPDATE_VEHICLE','{\"params\":{\"firstName\":\"John\",\"lastName\":\"Bonachon\",\"phoneNumber\":\"9283743874\",\"plate\":\"982734\",\"brand\":139,\"color\":\"#a3a3a3\",\"vehicleType\":\"10\"}}','2017-11-22 11:22:20','2017-11-22 11:22:20',1),(149,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTE0NDExOTEsImF1ZCI6ImQ5YzE3YmJjYzNmYThhMTc2ZGIxNmY1Yzg5ODFjYjQ2OTIwZWRlMzAiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.-1mvBAokkCMTd-7_9NFumd0nBAEkCgYce1DzNiCDbIo\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-22 12:46:31','2017-11-22 12:46:31',1),(150,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTE0NDEyNzMsImF1ZCI6ImI4MmQyNzVhNGMzYzRhMjg0NWEzZWEyZTE1YzI5ZjFkOWFhNzg0ZmUiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.skbebCj4Eze_lk2HSQtA10FToTYjRA1ATDdwfDZHleM\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-22 12:47:53','2017-11-22 12:47:53',1),(151,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTE0NTAzNjAsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.zjqR4U9YT90wAnwM0Z-e7XwnegNgWjLbf7mE5owJBqk\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-22 15:19:20','2017-11-22 15:19:20',1),(152,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTE0NzIzMjcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.bumbjBiyPCmIfVjp0giqsg2WFcyRBhmOLtMJnXe5T3g\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-22 21:25:27','2017-11-22 21:25:27',1),(153,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTE1NTM4MTcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.0dhZK65c3EIEJYXUlBwmOy8haplO2kGcPa5E9ZnfOYw\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-23 20:03:37','2017-11-23 20:03:37',1),(154,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTE1NTYyMjQsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.zR7viqlc5NrsJc-rybthJNvAivXn2_4cZnqjjCC6nXM\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-23 20:43:44','2017-11-23 20:43:44',1),(155,1,'UPDATE_VEHICLE','{\"params\":{\"firstName\":\"John\",\"lastName\":\"Bonachon\",\"phoneNumber\":\"9283743874\",\"plate\":\"982734\",\"brand\":139,\"color\":\"#a3a3a3\",\"vehicleType\":10}}','2017-11-24 01:08:38','2017-11-24 01:08:38',1),(156,1,'CREATE_VEHICLE','{\"params\":{\"firstName\":\"Luciano\",\"lastName\":\"Garcia\",\"phoneNumber\":\"029384092\",\"plate\":\"NCU23459\",\"brand\":\"138\",\"color\":\"#e21b1b\",\"vehicleType\":\"5\"}}','2017-11-24 03:18:34','2017-11-24 03:18:34',1),(157,1,'UPDATE_VEHICLE','{\"params\":{\"firstName\":\"Luciano\",\"lastName\":\"Garcia\",\"phoneNumber\":\"029384092\",\"plate\":\"NCU23459\",\"brand\":138,\"color\":\"#000000\",\"vehicleType\":5}}','2017-11-24 03:19:47','2017-11-24 03:19:47',1),(158,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":17,\"lot\":1,\"rentType\":\"2\"}}','2017-11-24 03:21:01','2017-11-24 03:21:01',1),(159,1,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":23,\"amount\":170,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-11-24 03:21:18','2017-11-24 03:21:18',1),(160,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":7,\"lot\":1,\"rentType\":\"3\"}}','2017-11-24 04:02:23','2017-11-24 04:02:23',1),(161,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":17,\"lot\":5,\"rentType\":\"2\"}}','2017-11-24 04:02:45','2017-11-24 04:02:45',1),(162,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":8,\"lot\":8,\"rentType\":\"3\"}}','2017-11-24 04:03:08','2017-11-24 04:03:08',1),(163,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":10,\"lot\":6,\"rentType\":\"2\"}}','2017-11-24 04:03:27','2017-11-24 04:03:27',1),(164,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":2,\"lot\":4,\"rentType\":\"2\"}}','2017-11-24 04:03:54','2017-11-24 04:03:54',1),(165,1,'UPDATE_VEHICLE','{\"params\":{\"firstName\":\"Homero J\",\"lastName\":\"Simpson\",\"phoneNumber\":\"113670940\",\"plate\":\"tes838\",\"brand\":\"153\",\"color\":\"#ed5ee8\",\"vehicleType\":1}}','2017-11-24 04:46:12','2017-11-24 04:46:12',1),(166,1,'UPDATE_VEHICLE','{\"params\":{\"firstName\":\"Homero J\",\"lastName\":\"Simpson\",\"phoneNumber\":\"113670940\",\"plate\":\"tes838\",\"brand\":153,\"color\":\"#ed5ee8\",\"vehicleType\":\"7\"}}','2017-11-24 04:46:48','2017-11-24 04:46:48',1),(167,1,'UPDATE_VEHICLE','{\"params\":{\"firstName\":\"Luciano\",\"lastName\":\"Garcia\",\"phoneNumber\":\"029384092\",\"plate\":\"NCU23459\",\"brand\":138,\"color\":\"#f11818\",\"vehicleType\":5}}','2017-11-24 04:47:08','2017-11-24 04:47:08',1),(168,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTE2MTUxOTcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.KOLUUm949sHLRXKAxRHJgY3mANn3ud8kTRkrKslvWZY\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-24 13:06:37','2017-11-24 13:06:37',1),(169,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTE2MjE4NTUsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.JkqeBcx5g3nvZRU9qjojSk4cr--plXFk4fpxIfA5_eI\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-24 14:57:35','2017-11-24 14:57:35',1),(170,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"test\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:01:40','2017-11-29 05:01:40',1),(171,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"test\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:01:46','2017-11-29 05:01:46',1),(172,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"test\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:01:46','2017-11-29 05:01:46',1),(173,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"test\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:01:46','2017-11-29 05:01:46',1),(174,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"test\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:01:46','2017-11-29 05:01:46',1),(175,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"test\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:01:59','2017-11-29 05:01:59',1),(176,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"test\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:02:02','2017-11-29 05:02:02',1),(177,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"test\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:02:03','2017-11-29 05:02:03',1),(178,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"test\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:02:03','2017-11-29 05:02:03',1),(179,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"test\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:02:03','2017-11-29 05:02:03',1),(180,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"test\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:02:03','2017-11-29 05:02:03',1),(181,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTIwMTgxMzIsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZDEiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFkbWluIn19.W3OeXHVOcnNVE0lfSj09sLiiZNIkDYhqCCXoZln9vt4\",\"user\":{\"id\":1,\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-11-29 05:02:12','2017-11-29 05:02:12',1),(182,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTIwMTgzNDcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZDEiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFkbWluIn19.rk_hrUQ6PG94NjdJaf1NMvMRHYFMrU2yF9pggC_1mc4\",\"user\":{\"id\":1,\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-11-29 05:05:47','2017-11-29 05:05:47',1),(183,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"password1\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:06:06','2017-11-29 05:06:06',1),(184,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"password1\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:06:07','2017-11-29 05:06:07',1),(185,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"password1\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:06:08','2017-11-29 05:06:08',1),(186,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"password1\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:06:08','2017-11-29 05:06:08',1),(187,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"password1\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:06:08','2017-11-29 05:06:08',1),(188,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"password1\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:06:08','2017-11-29 05:06:08',1),(189,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"password1\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:06:08','2017-11-29 05:06:08',1),(190,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"akkajshd\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:06:11','2017-11-29 05:06:11',1),(191,5,'LOGIN_UNAUTHORIZED','{\"id\":5,\"username\":\"cleo\",\"password\":\"test\",\"active\":true,\"lockUser\":true,\"role\":\"agent\"}','2017-11-29 05:06:14','2017-11-29 05:06:14',1),(192,1,'LOGIN_UNAUTHORIZED','{\"id\":1,\"username\":\"admin\",\"password\":\"test\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}','2017-11-29 05:06:23','2017-11-29 05:06:23',1),(193,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTIwMTgzOTMsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZDEiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFkbWluIn19.9LT9e9cOzQV5DfbPl44Qm1U5dKJKoAiNRQkPV6d1eak\",\"user\":{\"id\":1,\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-11-29 05:06:33','2017-11-29 05:06:33',1),(194,1,'UPDATE_VEHICLE','{\"params\":{\"firstName\":\"John\",\"lastName\":\"Bonachon\",\"phoneNumber\":\"9283743874\",\"plate\":\"982734\",\"brand\":139,\"color\":\"#a3a3a3\",\"vehicleType\":10}}','2017-11-29 05:42:10','2017-11-29 05:42:10',1),(195,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTIwMjA5NzgsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZDEiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFkbWluIn19.kdnXeBQq4GsOUCMyln3knDZbtgBO6jcVAwz3VeKYvH4\",\"user\":{\"id\":1,\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-11-29 05:49:38','2017-11-29 05:49:38',1),(196,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTIwMjE5NjYsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn19.TgiAvw7hkPOTPn2G3eZMeLwvdbgpd2Ux5SH2S7JPtZA\",\"user\":{\"id\":1,\"username\":\"admin\",\"role\":\"admin\"}}','2017-11-29 06:06:06','2017-11-29 06:06:06',1),(197,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTIwNzU3NjUsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZDEiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFkbWluIn19.UqVd8pYUJCn_pLER8qQt_PANjjExwoVK41Q9YjU7KLM\",\"user\":{\"id\":1,\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-11-29 21:02:46','2017-11-29 21:02:46',1),(198,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTIxMDQwNzcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZDEiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFkbWluIn19.NrjXV4GeJHTBlM3Rb0nA7A59utXAiLJ53ZQfEv1qipU\",\"user\":{\"id\":1,\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-11-30 04:54:37','2017-11-30 04:54:37',1),(199,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTIxMDUwNDcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZDEiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFkbWluIn19.qS8cqEZwgYpkG_edGAUVm9SVtnZrwnm1lC7YTVwZbGM\",\"user\":{\"id\":1,\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-11-30 05:10:47','2017-11-30 05:10:47',1),(200,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTIxMDUyMjYsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZDEiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFkbWluIn19.59VCVf0BpTaRYIuM5XfoSc9ypXiPUmBNJlCrNFz7lG0\",\"user\":{\"id\":1,\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-11-30 05:13:46','2017-11-30 05:13:46',1),(201,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTIxMDUzMzcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZDEiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFkbWluIn19.IuFotGq-3aaEkaaIDaJwBN0kQWK8DlOB9tPVLqsuKS0\",\"user\":{\"id\":1,\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-11-30 05:15:37','2017-11-30 05:15:37',1),(202,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTIxMzcyMzksImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZDEiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFkbWluIn19.Q_z7YV8aIgMUxVhcG09dHyRiMDtc40f5doH0NnvYUFo\",\"user\":{\"id\":1,\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-11-30 14:07:19','2017-11-30 14:07:19',1),(203,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTIzMjE2OTcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZDEiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFkbWluIn19.TpiAqzCtrRByFBf7mrD22Fb-9_M_KzRxeIH7NqDMiF8\",\"user\":{\"id\":1,\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-02 17:21:37','2017-12-02 17:21:37',1),(204,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":8,\"lot\":1,\"rentType\":\"2\"}}','2017-12-02 18:33:04','2017-12-02 18:33:04',1),(205,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTI0MDgyODQsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZDEiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFkbWluIn19.nyVG_oH6EhMK1nDVN2oWu3rags-8OAEjPA8_pbGxFuw\",\"user\":{\"id\":1,\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-03 17:24:44','2017-12-03 17:24:44',1),(206,1,'UPDATE_USER','{\"id\":\"1\",\"params\":{\"firstName\":\"Admin\",\"lastName\":\"Admin\",\"email\":\"admin@test.com\",\"phoneNumber\":\"1134574658\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"userGroups\":1}}','2017-12-03 17:25:26','2017-12-03 17:25:26',1),(207,1,'UPDATE_USER','{\"id\":\"1\",\"params\":{\"firstName\":\"Admin\",\"lastName\":\"Admin\",\"email\":\"admin@test.com\",\"phoneNumber\":\"1134574658\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"userGroups\":1}}','2017-12-03 17:25:36','2017-12-03 17:25:36',1),(208,1,'UPDATE_USER','{\"id\":\"2\",\"params\":{\"firstName\":\"Agent\",\"lastName\":\"Agent\",\"email\":\"agent@test.com\",\"phoneNumber\":\"1135574558\",\"username\":\"agent\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"file\":null,\"userGroups\":2}}','2017-12-04 01:33:56','2017-12-04 01:33:56',1),(209,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTI1MTkzNzgsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZDEiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFkbWluIn19.76we1hVnBT5qZWrd5-01_ah1xDuGAGJ5pvXORsjqtCE\",\"user\":{\"id\":1,\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-05 00:16:18','2017-12-05 00:16:18',1),(210,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTI1MjA1NzMsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZDEiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFkbWluIn19.louillAJiSzKpTAMDhlSZ6o5yRXwLtcVFV3bKHJdmjo\",\"user\":{\"id\":1,\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-05 00:36:13','2017-12-05 00:36:13',1),(211,1,'UPDATE_USER_FAIL','{\"id\":\"2\",\"params\":[]}','2017-12-05 02:58:15','2017-12-05 02:58:15',1),(212,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTI1NzAyNjUsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZDEiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFkbWluIn19.VjcqGrWma2JRh2mRaPHA7Fg6PDggU3tT4WGH1aq98c4\",\"user\":{\"id\":1,\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-05 14:24:25','2017-12-05 14:24:25',1),(213,1,'UPDATE_USER_FAIL','{\"id\":\"4\",\"params\":null}','2017-12-05 14:24:41','2017-12-05 14:24:41',1),(214,1,'UPDATE_USER','{\"id\":\"4\",\"params\":{\"firstName\":\"Nicolas\",\"lastName\":\"cuevas\",\"email\":\"test@test.com\",\"phoneNumber\":\"1136707655\",\"username\":\"cuevastest\",\"password\":\"test\",\"active\":true,\"lockUser\":false,\"userGroups\":2}}','2017-12-05 14:28:33','2017-12-05 14:28:33',1),(215,1,'UPDATE_USER_FAIL','{\"id\":\"4\",\"params\":null}','2017-12-05 14:28:46','2017-12-05 14:28:46',1),(216,1,'UPDATE_USER_FAIL','{\"id\":\"4\",\"params\":null}','2017-12-05 14:29:13','2017-12-05 14:29:13',1),(217,1,'UPDATE_USER_FAIL','{\"id\":\"4\",\"params\":null}','2017-12-05 14:30:18','2017-12-05 14:30:18',1),(218,1,'UPDATE_USER_FAIL','{\"id\":\"2\",\"params\":null}','2017-12-05 15:33:47','2017-12-05 15:33:47',1),(219,1,'UPDATE_USER_FAIL','{\"id\":\"2\",\"params\":null}','2017-12-05 15:35:57','2017-12-05 15:35:57',1),(220,1,'UPDATE_USER_FAIL','{\"id\":\"2\",\"params\":null}','2017-12-05 15:36:49','2017-12-05 15:36:49',1),(221,1,'UPDATE_USER_FAIL','{\"id\":\"2\",\"params\":null}','2017-12-05 15:41:22','2017-12-05 15:41:22',1),(222,1,'UPDATE_USER_FAIL','{\"id\":\"2\",\"params\":null}','2017-12-05 15:42:49','2017-12-05 15:42:49',1),(223,1,'UPDATE_USER','{\"id\":\"2\",\"params\":{\"firstName\":\"Agent\",\"lastName\":\"Agent\",\"email\":\"agent@test.com\",\"phoneNumber\":\"1135574558\",\"username\":\"agent\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"userGroups\":2}}','2017-12-05 15:48:36','2017-12-05 15:48:36',1),(224,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTI1Nzc3NzgsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZDEiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFkbWluIn19.m6muUmHAxXBpeHvLrHlS7mO_om0NKwPqA_oJUrj6cDk\",\"user\":{\"id\":1,\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-05 16:29:38','2017-12-05 16:29:38',1),(225,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTI1NzgyNjEsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZDEiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFkbWluIn19.df0JfZ1U4jy_AgiXXQz_0lEND2bNP4B6Z4qmKpsljd4\",\"user\":{\"id\":1,\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-05 16:37:41','2017-12-05 16:37:41',1),(226,1,'UPDATE_USER','{\"id\":\"1\",\"params\":{\"firstName\":\"Admin\",\"lastName\":\"Admin\",\"email\":\"admin@test.com\",\"phoneNumber\":\"1134574658\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"userGroups\":1}}','2017-12-05 16:47:56','2017-12-05 16:47:56',1),(227,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTI1Nzk0MDAsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJBZG1pbiIsImxhc3ROYW1lIjoiQWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwYXNzd29yZDEiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFkbWluIn19.De94u4LX1pUvf75DlEQn7AGk2MI9Jp23Y8a7s2-Nqvs\",\"user\":{\"id\":1,\"firstName\":\"Admin\",\"lastName\":\"Admin\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-05 16:56:41','2017-12-05 16:56:41',1),(228,1,'UPDATE_USER','{\"id\":\"1\",\"params\":{\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"email\":\"admin@test.com\",\"phoneNumber\":\"1134574658\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"userGroups\":1}}','2017-12-05 17:01:22','2017-12-05 17:01:22',1),(229,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTI1Nzk3MTUsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJCcnVubyIsImxhc3ROYW1lIjoiRGlheiIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsImFjdGl2ZSI6dHJ1ZSwibG9ja1VzZXIiOmZhbHNlLCJyb2xlIjoiYWRtaW4ifX0.M5htypAIdhG_F1xuBkeqvz6XAhxWIHJmuGIAgyv6D5E\",\"user\":{\"id\":1,\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-05 17:01:56','2017-12-05 17:01:56',1),(230,1,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":25,\"amount\":2721.6,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-12-05 19:12:24','2017-12-05 19:12:24',1),(231,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTI1ODg2ODgsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJCcnVubyIsImxhc3ROYW1lIjoiRGlheiIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsImFjdGl2ZSI6dHJ1ZSwibG9ja1VzZXIiOmZhbHNlLCJyb2xlIjoiYWRtaW4ifX0.XbFq7sbArmAY1hbw1Miw_siv4Jj4WbtPs2MV2uBpvKs\",\"user\":{\"id\":1,\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-05 19:31:28','2017-12-05 19:31:28',1),(232,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTI2MDEyNDksImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJCcnVubyIsImxhc3ROYW1lIjoiRGlheiIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsImFjdGl2ZSI6dHJ1ZSwibG9ja1VzZXIiOmZhbHNlLCJyb2xlIjoiYWRtaW4ifX0.BPdMXFPW3GZhVRhGvaNsZ5TLklqiLXFjjLXzLZQs49A\",\"user\":{\"id\":1,\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-05 23:00:49','2017-12-05 23:00:49',1),(233,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTI2MDIyNzIsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJCcnVubyIsImxhc3ROYW1lIjoiRGlheiIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsImFjdGl2ZSI6dHJ1ZSwibG9ja1VzZXIiOmZhbHNlLCJyb2xlIjoiYWRtaW4ifX0.9_mIkfijU8sHlYG1hqd_yVo9fv-0alAkBfTddEGA86I\",\"user\":{\"id\":1,\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-05 23:17:53','2017-12-05 23:17:53',1),(234,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTI2MDMzNTcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJCcnVubyIsImxhc3ROYW1lIjoiRGlheiIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsImFjdGl2ZSI6dHJ1ZSwibG9ja1VzZXIiOmZhbHNlLCJyb2xlIjoiYWRtaW4ifX0.56PoqlSjXVMfXy98EyIQL2dmxf80kP2-5Wvsgs1B_bA\",\"user\":{\"id\":1,\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-05 23:35:57','2017-12-05 23:35:57',1),(235,4,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTI2MTA4NTMsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjo0LCJmaXJzdE5hbWUiOiJOaWNvbGFzIiwibGFzdE5hbWUiOiJjdWV2YXMiLCJ1c2VybmFtZSI6ImN1ZXZhc3Rlc3QiLCJwYXNzd29yZCI6InRlc3QiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6ImFnZW50In19.3UavXeD3rkeGpRP7S6FHdRYGJmJJ9qltzt3UBZRM4nU\",\"user\":{\"id\":4,\"firstName\":\"Nicolas\",\"lastName\":\"cuevas\",\"username\":\"cuevastest\",\"password\":\"test\",\"active\":true,\"lockUser\":false,\"role\":\"agent\"}}','2017-12-06 01:40:54','2017-12-06 01:40:54',1),(236,4,'UPDATE_USER','{\"id\":\"2\",\"params\":{\"firstName\":\"Agent\",\"lastName\":\"Agent\",\"email\":\"agent@test.com\",\"phoneNumber\":\"11355745789\",\"username\":\"agent\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"userGroups\":2}}','2017-12-06 01:41:20','2017-12-06 01:41:20',1),(237,4,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":29,\"amount\":722.2,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-12-06 01:46:19','2017-12-06 01:46:19',1),(238,4,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":26,\"amount\":2857.3,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-12-06 01:46:43','2017-12-06 01:46:43',1),(239,4,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":27,\"amount\":2787.3,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-12-06 01:47:11','2017-12-06 01:47:11',1),(240,4,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":28,\"amount\":2787.3,\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-12-06 01:47:36','2017-12-06 01:47:36',1),(241,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTI2NDAwNDMsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJCcnVubyIsImxhc3ROYW1lIjoiRGlheiIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsImFjdGl2ZSI6dHJ1ZSwibG9ja1VzZXIiOmZhbHNlLCJyb2xlIjoiYWRtaW4ifX0.AxrTY62SY4FCMDbmqxFUBR4od4qI6fKz_iyZuDKhNpw\",\"user\":{\"id\":1,\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-06 09:47:23','2017-12-06 09:47:23',1),(242,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTI2NjQ1MDMsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJCcnVubyIsImxhc3ROYW1lIjoiRGlheiIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsImFjdGl2ZSI6dHJ1ZSwibG9ja1VzZXIiOmZhbHNlLCJyb2xlIjoiYWRtaW4ifX0.a3RtVKw4OZUbsuWI4NsT-kOIEoo5uGEp5tZCuV6o4lQ\",\"user\":{\"id\":1,\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-06 16:35:03','2017-12-06 16:35:03',1),(243,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTI2ODQ4MjIsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJCcnVubyIsImxhc3ROYW1lIjoiRGlheiIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsImFjdGl2ZSI6dHJ1ZSwibG9ja1VzZXIiOmZhbHNlLCJyb2xlIjoiYWRtaW4ifX0.DKHX8xSyO2IWpBN7Hck6V6TnnmFf5P3N-OSt7Fkl-j8\",\"user\":{\"id\":1,\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-06 22:13:42','2017-12-06 22:13:42',1),(244,1,'CREATE_RENTLOT','{\"params\":{\"vehicle\":11,\"lot\":41,\"rentType\":\"3\"}}','2017-12-06 23:18:30','2017-12-06 23:18:30',1),(245,1,'UPDATE_RENTLOT','{\"params\":{\"rentlot\":30,\"amount\":10,\"endTime\":\"2017-12-06T23:40:03.954Z\",\"paymentStatus\":2,\"rentStatus\":2,\"lot\":{\"available\":true}}}','2017-12-06 23:46:23','2017-12-06 23:46:23',1),(246,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTI3MDUzMjQsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJCcnVubyIsImxhc3ROYW1lIjoiRGlheiIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsImFjdGl2ZSI6dHJ1ZSwibG9ja1VzZXIiOmZhbHNlLCJyb2xlIjoiYWRtaW4ifX0.iv4LvTbZshJa2_gl2sJK9ntWuGxoBlEK0XcRPwxFPf8\",\"user\":{\"id\":1,\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-07 03:55:24','2017-12-07 03:55:24',1),(247,1,'UPDATE_VEHICLE','{\"params\":{\"firstName\":\"Ivan\",\"lastName\":\"Drago\",\"phoneNumber\":\"874759874\",\"plate\":\"rocky124\",\"brand\":\"145\",\"color\":\"#ffe700\",\"vehicleType\":\"6\"}}','2017-12-07 04:00:05','2017-12-07 04:00:05',1),(248,1,'UPDATE_VEHICLE','{\"params\":{\"firstName\":\"apollo\",\"lastName\":\"creed\",\"phoneNumber\":\"8498739847\",\"plate\":\"rocky125\",\"brand\":\"137\",\"color\":\"#1caebf\",\"vehicleType\":6}}','2017-12-07 04:00:36','2017-12-07 04:00:36',1),(249,1,'UPDATE_VEHICLE','{\"params\":{\"firstName\":\"Luciano\",\"lastName\":\"Garcia\",\"phoneNumber\":\"029384092\",\"plate\":\"NCU23459\",\"brand\":\"153\",\"color\":\"#f11818\",\"vehicleType\":5}}','2017-12-07 12:54:43','2017-12-07 12:54:43',1),(250,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTMwMTIwNDAsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJCcnVubyIsImxhc3ROYW1lIjoiRGlheiIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsImFjdGl2ZSI6dHJ1ZSwibG9ja1VzZXIiOmZhbHNlLCJyb2xlIjoiYWRtaW4ifX0.k3-5c49C21aYFYtzKb5Oh7GB7nnUObVZIZOflQces0c\",\"user\":{\"id\":1,\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-10 17:07:20','2017-12-10 17:07:20',1),(251,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTMwMjAyNjUsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJCcnVubyIsImxhc3ROYW1lIjoiRGlheiIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsImFjdGl2ZSI6dHJ1ZSwibG9ja1VzZXIiOmZhbHNlLCJyb2xlIjoiYWRtaW4ifX0.ZGeKyR7rzIvS8luoCVm7F_HQGjBQesPfmY2rcUpCMHQ\",\"user\":{\"id\":1,\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-10 19:24:25','2017-12-10 19:24:25',1),(252,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTMwMjI3MjcsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJCcnVubyIsImxhc3ROYW1lIjoiRGlheiIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsImFjdGl2ZSI6dHJ1ZSwibG9ja1VzZXIiOmZhbHNlLCJyb2xlIjoiYWRtaW4ifX0.ZwJWMvfzRz2R-LV0dNV97N6MxC_GOsW9M4a0RSFtmgg\",\"user\":{\"id\":1,\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-10 20:05:27','2017-12-10 20:05:27',1),(253,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTMwMjY4NjIsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJCcnVubyIsImxhc3ROYW1lIjoiRGlheiIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsImFjdGl2ZSI6dHJ1ZSwibG9ja1VzZXIiOmZhbHNlLCJyb2xlIjoiYWRtaW4ifX0.xcpsdtO3xoV7YcZKIv9ZLmgdrppV0TX8CqiO4PaL0pk\",\"user\":{\"id\":1,\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-10 21:14:22','2017-12-10 21:14:22',1),(254,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTMxMjY1NjgsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJCcnVubyIsImxhc3ROYW1lIjoiRGlheiIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsImFjdGl2ZSI6dHJ1ZSwibG9ja1VzZXIiOmZhbHNlLCJyb2xlIjoiYWRtaW4ifX0.2M1sudj1-x0xzcLRSg-kpI1b8iarotz6VcQ0avYWz5M\",\"user\":{\"id\":1,\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-12 00:56:08','2017-12-12 00:56:08',1),(255,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTMxNzI4NDQsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJCcnVubyIsImxhc3ROYW1lIjoiRGlheiIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsImFjdGl2ZSI6dHJ1ZSwibG9ja1VzZXIiOmZhbHNlLCJyb2xlIjoiYWRtaW4ifX0.ovEgjQLYd9yN4x3hXyt7N-4oXd74Gif2v-APkxUoE44\",\"user\":{\"id\":1,\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-12 13:47:24','2017-12-12 13:47:24',1),(256,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTMxNzYyMzAsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJCcnVubyIsImxhc3ROYW1lIjoiRGlheiIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsImFjdGl2ZSI6dHJ1ZSwibG9ja1VzZXIiOmZhbHNlLCJyb2xlIjoiYWRtaW4ifX0.Xm_bGWW032FWKoR6tsRWmt-pGeF-qzRsY5PDBrLEnS4\",\"user\":{\"id\":1,\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-12 14:43:50','2017-12-12 14:43:50',1),(257,1,'UPDATE_USER','{\"id\":\"7\",\"params\":{\"firstName\":\"Ricardo\",\"lastName\":\"Pietro\",\"email\":\"user4@test.com\",\"phoneNumber\":\"1136707674\",\"username\":\"Tapia\",\"password\":\"test\",\"active\":true,\"lockUser\":true,\"userGroups\":3}}','2017-12-12 14:44:43','2017-12-12 14:44:43',1),(258,1,'UPDATE_USER','{\"id\":\"7\",\"params\":{\"firstName\":\"Ricardo\",\"lastName\":\"Tapia\",\"email\":\"user4@test.com\",\"phoneNumber\":\"1136707674\",\"username\":\"robin\",\"password\":\"test\",\"active\":true,\"lockUser\":true,\"userGroups\":3}}','2017-12-12 14:45:03','2017-12-12 14:45:03',1),(259,7,'LOGIN_UNAUTHORIZED','{\"id\":7,\"firstName\":\"Ricardo\",\"lastName\":\"Tapia\",\"username\":\"robin\",\"password\":\"test\",\"active\":true,\"lockUser\":true,\"role\":\"supervisor\"}','2017-12-12 14:45:18','2017-12-12 14:45:18',1),(260,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTMxNzYzNDQsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJCcnVubyIsImxhc3ROYW1lIjoiRGlheiIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsImFjdGl2ZSI6dHJ1ZSwibG9ja1VzZXIiOmZhbHNlLCJyb2xlIjoiYWRtaW4ifX0.ro-pfUZ-PSpVVfio65Ba1_ofW2Q2Z53BXX0DT_wAOKE\",\"user\":{\"id\":1,\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-12 14:45:44','2017-12-12 14:45:44',1),(261,1,'UPDATE_USER','{\"id\":\"7\",\"params\":{\"firstName\":\"Ricardo\",\"lastName\":\"Tapia\",\"email\":\"user4@test.com\",\"phoneNumber\":\"1136707674\",\"username\":\"robin\",\"password\":\"test\",\"active\":true,\"lockUser\":false,\"userGroups\":3}}','2017-12-12 14:46:59','2017-12-12 14:46:59',1),(262,7,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTMxNzY0MzYsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjo3LCJmaXJzdE5hbWUiOiJSaWNhcmRvIiwibGFzdE5hbWUiOiJUYXBpYSIsInVzZXJuYW1lIjoicm9iaW4iLCJwYXNzd29yZCI6InRlc3QiLCJhY3RpdmUiOnRydWUsImxvY2tVc2VyIjpmYWxzZSwicm9sZSI6InN1cGVydmlzb3IifX0.g-jAzInIe9Ss6a097Pbg-qkVVjhyDh0V8DZIC25yUUU\",\"user\":{\"id\":7,\"firstName\":\"Ricardo\",\"lastName\":\"Tapia\",\"username\":\"robin\",\"password\":\"test\",\"active\":true,\"lockUser\":false,\"role\":\"supervisor\"}}','2017-12-12 14:47:16','2017-12-12 14:47:16',1),(263,1,'LOGIN','{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTMxNzY2MDQsImF1ZCI6ImVlOGJhZThjMjkxMjI3NDNkOTk3ZmRhOTcxNGE5Zjk5OWJjYjE0NzMiLCJkYXRhIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJCcnVubyIsImxhc3ROYW1lIjoiRGlheiIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6InBhc3N3b3JkMSIsImFjdGl2ZSI6dHJ1ZSwibG9ja1VzZXIiOmZhbHNlLCJyb2xlIjoiYWRtaW4ifX0.Ta34sN5LDVbG-SRcQDkUj1llaUrRMf6EA09gHY1ECgo\",\"user\":{\"id\":1,\"firstName\":\"Bruno\",\"lastName\":\"Diaz\",\"username\":\"admin\",\"password\":\"password1\",\"active\":true,\"lockUser\":false,\"role\":\"admin\"}}','2017-12-12 14:50:04','2017-12-12 14:50:04',1);
/*!40000 ALTER TABLE `user_audit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_group`
--

DROP TABLE IF EXISTS `user_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_group`
--

LOCK TABLES `user_group` WRITE;
/*!40000 ALTER TABLE `user_group` DISABLE KEYS */;
INSERT INTO `user_group` VALUES (1,'admin','0000-00-00 00:00:00','0000-00-00 00:00:00',1),(2,'agent','0000-00-00 00:00:00','0000-00-00 00:00:00',1),(3,'supervisor','0000-00-00 00:00:00','0000-00-00 00:00:00',1);
/*!40000 ALTER TABLE `user_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_usergroup`
--

DROP TABLE IF EXISTS `user_usergroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_usergroup` (
  `user_id` int(11) NOT NULL,
  `usergroup_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`usergroup_id`),
  KEY `IDX_4A84F5F3A76ED395` (`user_id`),
  KEY `IDX_4A84F5F3D2112630` (`usergroup_id`),
  CONSTRAINT `FK_4A84F5F3A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_4A84F5F3D2112630` FOREIGN KEY (`usergroup_id`) REFERENCES `user_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_usergroup`
--

LOCK TABLES `user_usergroup` WRITE;
/*!40000 ALTER TABLE `user_usergroup` DISABLE KEYS */;
INSERT INTO `user_usergroup` VALUES (1,1),(2,2),(3,3),(4,2),(5,2),(6,2),(7,3);
/*!40000 ALTER TABLE `user_usergroup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_files`
--

DROP TABLE IF EXISTS `users_files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_files` (
  `user_id` int(11) NOT NULL,
  `file_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`file_id`),
  KEY `IDX_E142E410A76ED395` (`user_id`),
  KEY `IDX_E142E41093CB796C` (`file_id`),
  CONSTRAINT `FK_E142E41093CB796C` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`),
  CONSTRAINT `FK_E142E410A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_files`
--

LOCK TABLES `users_files` WRITE;
/*!40000 ALTER TABLE `users_files` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vehicle` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vehicle_brand_id` int(11) DEFAULT NULL,
  `vehicle_type_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `color` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `plate` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `IDX_1B80E48699E7DF9C` (`vehicle_brand_id`),
  KEY `IDX_1B80E486DA3FD1FC` (`vehicle_type_id`),
  KEY `IDX_1B80E4869395C3F3` (`customer_id`),
  CONSTRAINT `FK_1B80E4869395C3F3` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  CONSTRAINT `FK_1B80E48699E7DF9C` FOREIGN KEY (`vehicle_brand_id`) REFERENCES `brand` (`id`),
  CONSTRAINT `FK_1B80E486DA3FD1FC` FOREIGN KEY (`vehicle_type_id`) REFERENCES `vehicle_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES (1,139,10,1,'#a3a3a3','982734','2017-07-23 23:49:15','2017-11-22 11:22:20',1),(2,146,7,2,'#e87c17','9827349','2017-07-24 02:22:27','2017-07-24 02:22:27',1),(3,179,NULL,3,'#21e9da','test123','2017-07-24 02:48:33','2017-07-24 03:45:26',1),(4,153,7,4,'#ed5ee8','tes838','2017-07-24 03:51:20','2017-11-24 04:46:48',1),(5,153,5,5,'#8a8989','back123','2017-07-24 03:59:33','2017-07-24 03:59:33',1),(6,153,5,6,'#a33131','aux432','2017-07-24 07:49:56','2017-07-24 07:49:56',1),(7,138,12,7,'#0e0a0a','aux4324','2017-07-24 10:00:04','2017-07-24 10:00:04',1),(8,136,7,8,'#f51414','aux43243','2017-07-24 10:00:25','2017-07-24 10:00:25',1),(9,155,4,9,'#276a2e','aux432832','2017-07-25 06:12:52','2017-07-25 06:12:52',1),(10,144,1,10,'#000000','aux85947','2017-07-25 06:13:30','2017-07-25 06:13:30',1),(11,200,4,11,'#f70909','rocky123','2017-07-25 14:49:35','2017-07-25 14:49:35',1),(12,145,6,12,'#ffe700','rocky124','2017-07-25 14:50:23','2017-12-07 04:00:05',1),(13,137,6,13,'#1caebf','rocky125','2017-07-25 14:51:02','2017-12-07 04:00:35',1),(14,137,3,14,'#2c35da','jrrt93','2017-08-01 05:46:48','2017-08-01 05:46:48',1),(15,155,4,15,'#e80909','arg123','2017-08-01 09:29:38','2017-11-22 11:21:57',1),(16,145,1,16,'#dc2323','arg234','2017-08-01 09:30:18','2017-08-01 09:30:18',1),(17,153,5,17,'#f11818','NCU23459','2017-11-24 03:18:34','2017-12-07 12:54:43',1);
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle_type`
--

DROP TABLE IF EXISTS `vehicle_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vehicle_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_type`
--

LOCK TABLES `vehicle_type` WRITE;
/*!40000 ALTER TABLE `vehicle_type` DISABLE KEYS */;
INSERT INTO `vehicle_type` VALUES (1,'Car Minicompact',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(2,'Car Subcompact',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(3,'Car Compact',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(4,'Car Mid-size',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(5,'Car Large',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(6,'Car Two-seater',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(7,'Car Minivan',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(8,'Car Cargo van',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(9,'Car Passenger van',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(10,'Car Small Sport Utility Vehicle',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(11,'Car Standard Sport Utility Vehicle',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(12,'Car Small Pickup Truck',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(13,'Car Standard pickup truck',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(14,'Car Special purpose vehicle',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(15,'Motorcycle Standard',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(16,'Motorcycle Crucier',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(17,'Motorcycle Sport Bike',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(18,'Motorcycle Touring',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(19,'Motorcycle Sport Touring',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(20,'Motorcycle Dual-Sport',NULL,'2017-07-10 12:29:38','2017-07-10 12:29:38',1),(21,'Motorcycle Scooters',NULL,'2017-07-10 12:29:40','2017-07-10 12:29:40',1);
/*!40000 ALTER TABLE `vehicle_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-12 12:24:10
