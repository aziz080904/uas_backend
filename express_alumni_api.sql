-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 15, 2025 at 08:36 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_alumni_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `alumni`
--

CREATE TABLE `alumni` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address` text DEFAULT NULL,
  `graduation_year` int(11) NOT NULL,
  `status` enum('Employed','Unemployed','Student') NOT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alumni`
--

INSERT INTO `alumni` (`id`, `name`, `phone`, `address`, `graduation_year`, `status`, `company_name`, `position`) VALUES
(1, 'Ahmad Fauzi', '081234567890', 'Jl. Sudirman No.10, Jakarta', 2020, 'Employed', 'TechIndo', 'Software Engineer'),
(2, 'Siti Aminah', '081345678901', 'Jl. Melati No.5, Bandung', 2021, 'Student', NULL, NULL),
(3, 'Dewi Lestari', '081456789012', 'Jl. Mawar No.8, Surabaya', 2019, 'Employed', 'SehatAbadi', 'Data Analyst'),
(4, 'Budi Santoso', '081567890123', NULL, 2018, 'Unemployed', NULL, NULL),
(5, 'Citra Ayu', '081678901234', 'Jl. Kenanga No.3, Yogyakarta', 2020, 'Employed', 'DesainKita', 'Graphic Designer'),
(6, 'Eka Putri', '081789012345', 'Jl. Cemara No.12, Semarang', 2022, 'Student', NULL, NULL),
(7, 'Fajar Pratama', '081890123456', NULL, 2017, 'Unemployed', NULL, NULL),
(8, 'Gita Ananda', '081901234567', 'Jl. Merpati No.7, Medan', 2019, 'Employed', 'PendidikanMaju', 'Teacher'),
(9, 'Hana Rizky', '081012345678', 'Jl. Anggrek No.2, Malang', 2021, 'Student', NULL, NULL),
(10, 'Irfan Hakim', '081123456789', 'Jl. Jambu No.9, Palembang', 2018, 'Employed', 'PasarIndo', 'Sales Manager');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alumni`
--
ALTER TABLE `alumni`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alumni`
--
ALTER TABLE `alumni`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
