-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2020 at 01:00 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `innovation_challenge`
--

-- --------------------------------------------------------

--
-- Table structure for table `availability`
--

CREATE TABLE `availability` (
  `timeslot_id` int(11) NOT NULL,
  `timeslot_time` varchar(8) NOT NULL,
  `client_card` bigint(16) DEFAULT NULL,
  `is_booked` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `availability`
--

INSERT INTO `availability` (`timeslot_id`, `timeslot_time`, `client_card`, `is_booked`) VALUES
(1, '9:00 AM', NULL, 0),
(2, '9:10 AM', NULL, 0),
(3, '9:20 AM', 1234123412341234, 1),
(4, '9:30 AM', NULL, 0),
(5, '9:40 AM', NULL, 0),
(6, '9:50 AM', NULL, 0),
(7, '10:00 AM', NULL, 0),
(8, '10:10 AM', NULL, 0),
(9, '10:20 AM', NULL, 0),
(10, '10:30 AM', NULL, 0),
(11, '10:40 AM', NULL, 0),
(12, '10:50 AM', NULL, 0),
(13, '11:00 AM', NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `availability`
--
ALTER TABLE `availability`
  ADD PRIMARY KEY (`timeslot_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `availability`
--
ALTER TABLE `availability`
  MODIFY `timeslot_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
