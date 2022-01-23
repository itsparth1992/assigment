-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 23, 2022 at 04:21 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `user_id` int(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `title`, `description`, `image`, `created_at`, `updated_at`) VALUES
(1, 1, 'test', 'testing', 'image', '2022-01-20 19:45:13', '2022-01-20 19:45:13'),
(27, NULL, 'aa', 'aa', 'backgrong_img.jpg', '2022-01-21 10:55:06', NULL),
(28, NULL, 'dd', 'dd', 'evote.png', '2022-01-21 10:55:21', NULL),
(29, NULL, 'dd', 'dd', 'backgrong_img.jpg', '2022-01-21 10:57:13', NULL),
(30, NULL, 'aa', 'aa', 'backgrong_img.jpg', '2022-01-21 10:58:06', NULL),
(31, NULL, 'aa', 'aa', 'backgrong_img.jpg', '2022-01-21 10:58:45', NULL),
(32, NULL, 'aa', 'aa', 'backgrong_img.jpg', '2022-01-21 10:59:37', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `name`, `created_at`, `updated_at`) VALUES
(2, 'Fitness', '2022-01-20 20:08:37', '2022-01-20 20:08:37'),
(3, 'Gym', '2022-01-20 20:08:47', '2022-01-20 20:08:47'),
(4, 'Running', '2022-01-20 20:08:58', '2022-01-20 20:08:58'),
(5, 'Cycling', '2022-01-20 20:09:05', '2022-01-20 20:09:05'),
(6, 'Body building', '2022-01-20 20:09:23', '2022-01-20 20:09:23'),
(7, 'Swimming', '2022-01-20 20:09:34', '2022-01-20 20:09:34'),
(8, 'Racing', '2022-01-20 20:09:44', '2022-01-20 20:09:44'),
(9, 're', '2022-01-21 08:07:46', '2022-01-21 08:07:46'),
(10, 'test', '2022-01-21 08:18:27', '2022-01-21 08:18:27'),
(11, 'aa', '2022-01-21 08:22:27', NULL),
(12, 'ss', '2022-01-21 08:25:53', NULL),
(13, 'ss', '2022-01-21 08:27:30', NULL),
(14, 'ss', '2022-01-21 08:27:49', NULL),
(15, 'ss', '2022-01-21 08:28:01', NULL),
(16, 'ss', '2022-01-21 08:28:04', NULL),
(17, '', '2022-01-21 08:28:11', NULL),
(18, 'd', '2022-01-21 08:44:57', NULL),
(19, 'd', '2022-01-21 08:45:23', NULL),
(20, 'rr', '2022-01-21 08:45:32', NULL),
(21, 'xx', '2022-01-21 08:46:03', NULL),
(22, 'aa', '2022-01-21 08:47:02', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `tag_id` varchar(255) DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `tag_id`, `profile_picture`) VALUES
(1, 'admin', 'admin@gmail.com', '12345678', NULL, NULL),
(2, 'admin1', 'admin1@gmail.com', '$2a$10$CDX2lZdb6mraB2GMWpsLkeMSf2dlZP9B0zCTNQlKafoJ/tNM0JAZO', NULL, NULL),
(3, 'undefined', 'admin3@gmail.com', '$2a$10$0T4W6TpDaQTD.Lf1i2InOeqDY5YeMVMDX3fzrwGNxhtIHRmlRB/0G', NULL, NULL),
(4, 'a', 'a@gmail.com', '$2a$08$ZkEFmUrPcFQdpV3GwCPEc.RN5KAmPFS/X2AQRg3SuY5dGl0OaZdjC', NULL, NULL),
(5, 'Yogesh sharma', 'yogeshsharmahr@gmail.com', '$2a$08$YSxbYEGC0Cw.3cuAC8vj1eqf.lJjfPhq4pe64EZ5aTsF5vMKg.dLW', NULL, NULL),
(9, 'yogesh', 'yogesh@gmail.com', '$2a$10$dHTHJ6pLyImeoPxLMSEp7.xbAi23UO9Kr0h/7La96xO96sVxWtJve', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
