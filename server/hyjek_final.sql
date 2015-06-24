-- phpMyAdmin SQL Dump
-- version 4.4.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 24, 2015 at 09:21 AM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hyjek`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE IF NOT EXISTS `customer` (
  `id_customer` int(10) NOT NULL,
  `nama customer` varchar(20) NOT NULL,
  `alamat` varchar(30) NOT NULL,
  `handphone customer` int(12) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id_customer`, `nama customer`, `alamat`, `handphone customer`) VALUES
(1, 'Kokom', 'Kokokokokm', 90909090);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE IF NOT EXISTS `login` (
  `password` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `hak_akses` varchar(10) NOT NULL,
  `id_pengguna` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`password`, `username`, `hak_akses`, `id_pengguna`) VALUES
('demoojek', 'demoojek', 'ojek', 1),
('demouser', 'demouser', 'pengguna', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ojek`
--

CREATE TABLE IF NOT EXISTS `ojek` (
  `id_ojek` int(10) NOT NULL,
  `nama ojek` varchar(20) NOT NULL,
  `plat no` varchar(20) NOT NULL,
  `no hp ojek` int(12) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ojek`
--

INSERT INTO `ojek` (`id_ojek`, `nama ojek`, `plat no`, `no hp ojek`) VALUES
(1, 'kikim', 'F2276VA', 909090);

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE IF NOT EXISTS `order` (
  `id_order` int(10) NOT NULL,
  `tujuan_awal` varchar(10) NOT NULL,
  `tujuan_akhir` varchar(10) NOT NULL,
  `harga` int(12) NOT NULL,
  `tanggal_pemesanan` date NOT NULL,
  `id_ojek` int(10) DEFAULT NULL,
  `id_customer` int(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id_order`, `tujuan_awal`, `tujuan_akhir`, `harga`, `tanggal_pemesanan`, `id_ojek`, `id_customer`) VALUES
(1, 'Depok', 'Bogor', 10000, '2015-06-24', 1, 1),
(2, 'jksdhljad', 'jhl', 5000, '2015-06-24', 1, 1),
(3, 'Depok', 'Cimanggis', 5000, '2015-06-24', NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id_customer`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `ojek`
--
ALTER TABLE `ojek`
  ADD PRIMARY KEY (`id_ojek`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id_order`),
  ADD KEY `id_ojek` (`id_ojek`),
  ADD KEY `id_customer` (`id_customer`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id_customer` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `ojek`
--
ALTER TABLE `ojek`
  MODIFY `id_ojek` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id_order` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
