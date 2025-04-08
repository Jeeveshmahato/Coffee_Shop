-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2025 at 12:58 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `coffee`
--

CREATE TABLE `coffee` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coffee`
--

INSERT INTO `coffee` (`id`, `name`, `type`, `price`) VALUES
(2, 'Espresso', 'Coffee', 100.00),
(3, 'Latte', 'Coffee', 140.00),
(4, 'Mocha', 'Coffee', 180.00),
(7, 'Cappuccin', '', 56.00);

-- --------------------------------------------------------

--
-- Table structure for table `coffee_info`
--

CREATE TABLE `coffee_info` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coffee_info`
--

INSERT INTO `coffee_info` (`id`, `name`, `description`, `image_url`) VALUES
(1, 'Espresso', 'A strong and bold coffee with intense flavor and rich crema.', 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d'),
(2, 'Cappuccino', 'A classic mix of espresso, steamed milk, and frothy milk foam.', 'https://plus.unsplash.com/premium_photo-1674327105280-b86494dfc690'),
(3, 'Latte', 'A smooth and creamy coffee with a perfect balance of espresso and milk.', 'https://images.unsplash.com/photo-1593443320739-77f74939d0da'),
(4, 'Mocha', 'A delightful blend of espresso, chocolate, and steamed milk.', 'https://images.unsplash.com/photo-1618576230663-9714aecfb99a'),
(5, 'Macchiato', 'An espresso-based drink topped with a small amount of frothy milk.', 'https://images.unsplash.com/photo-1517701604599-bb29b565090c');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `coffee`
--
ALTER TABLE `coffee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coffee_info`
--
ALTER TABLE `coffee_info`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `coffee`
--
ALTER TABLE `coffee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `coffee_info`
--
ALTER TABLE `coffee_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
