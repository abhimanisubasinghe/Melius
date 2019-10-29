-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2019 at 08:08 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_login1`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `first_name` text,
  `last_name` text,
  `email` text,
  `password` text,
  `created` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `created`) VALUES
(1, 'tilanga', 'pramith', 'pramithvidusara@gmail.com', '1234', '2019-10-12 16:49:29.144'),
(2, 'pramith', 'vidusara', 'pramithvidusara1234@gmail.com', '12345', '2019-10-12 16:53:33.535'),
(3, 'pramith', 'vidusara', 'pramithvidusara1234@gmail.com', '$2b$10$gLSyts5.k8G4kIZpFkW/X.PzahzWTPPPHpYQjzcqArCPp6Pm/lpK6', '2019-10-12 11:28:53'),
(4, 'pramith', 'vidusara', 'pramithvidusara00001234@gmail.com', '12345', '2019-10-12 17:00:23.642'),
(5, 'asas', 'dfwefwe', '1234pramithvidusara@gmail.com', '$2b$10$mQ/DrcZ6v4rv4TtDGfwoAeMPP4PNBtIKcUFz0bMrZYOPyZG9c7GpG', '2019-10-17 20:40:41.926'),
(6, 'asas', 'dfwef', '123412334pramithvidusara@gmail.com', '$2b$10$X6VP0Je.85g5UXxO4p3eJ.1OGRWVgI8xw8VO5gz45vrYxa0Cg9GHy', '2019-10-18 07:12:28.173'),
(7, 'asas', 'dfwef', '123412334pramithvidusara@gmail.com', '$2b$10$X.IrdfzPk9oi4qOz9WAp7O.GjOV2WchZa9PZ85G1Y/dSOoHi/db0G', '2019-10-18 07:15:04.991'),
(8, 'asas,mnvkdfnblkdfnbkldfn', 'dfwef', '123412sdmvnfnbkldf334pramithvidusara@gmail.com', '$2b$10$IMRTWWVLbcwv1IszBBJd3e7baIfATfZppzsLlE6jfijwijBFP0iUm', '2019-10-18 12:20:52.912'),
(9, 'asas,mnvkdfnblkdfnbkldfn', 'dfwef', '123412sdmvnfnbkldf334pramithvidusara@gmail.com', '$2b$10$y5CkEQ25sZ4BXCmn/GWOoejEhaOt6A9250rTch.G2qZj3IhxUcT6G', '2019-10-18 12:21:17.139');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
