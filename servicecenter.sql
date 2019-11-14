-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 13, 2019 at 04:48 PM
-- Server version: 5.7.14
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `servicecenter`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `jobId` int(10) NOT NULL,
  `vehicleId` int(10) NOT NULL,
  `customerId` int(10) NOT NULL,
  `date` date NOT NULL,
  `descript` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category` int(5) NOT NULL,
  `type_one` varchar(20) NOT NULL,
  `type_two` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `Id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `fax` varchar(13) NOT NULL,
  `NIC` varchar(15) NOT NULL,
  `type` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `website` varchar(10) NOT NULL,
  `DOB` date NOT NULL,
  `note` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer_address`
--

CREATE TABLE `customer_address` (
  `Id` int(10) NOT NULL,
  `address` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer_phone`
--

CREATE TABLE `customer_phone` (
  `Id` int(10) NOT NULL,
  `phoneNo` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `custoustanding`
--

CREATE TABLE `custoustanding` (
  `outstandingId` int(10) NOT NULL,
  `invoiceId` int(10) NOT NULL,
  `total` int(10) NOT NULL,
  `paid` int(10) NOT NULL,
  `balance` int(10) NOT NULL,
  `lastUpdate` date NOT NULL,
  `status` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `itemCode` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `min` int(5) NOT NULL,
  `max` int(5) NOT NULL,
  `descript` varchar(255) NOT NULL,
  `purchasePrice` int(10) NOT NULL,
  `sellingPrice` int(10) NOT NULL,
  `Itemgroup` varchar(20) NOT NULL,
  `brand` varchar(20) NOT NULL,
  `type` varchar(20) NOT NULL,
  `category` varchar(20) NOT NULL,
  `storageId` int(10) NOT NULL,
  `supplierId` int(10) NOT NULL,
  `barcode` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `purchaseorders`
--

CREATE TABLE `purchaseorders` (
  `OrderId` int(10) NOT NULL,
  `supplierId` int(10) NOT NULL,
  `estimatedWait` int(5) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `purchaseorders_item`
--

CREATE TABLE `purchaseorders_item` (
  `orderId` int(11) NOT NULL,
  `itemId` int(11) NOT NULL,
  `quantity` int(10) NOT NULL,
  `estimatedPrice` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `serviceId` int(10) NOT NULL,
  `category` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `service_invoice`
--

CREATE TABLE `service_invoice` (
  `invoiceId` int(10) NOT NULL,
  `customerId` int(10) NOT NULL,
  `vehicleId` int(10) NOT NULL,
  `date` date NOT NULL,
  `total` int(10) NOT NULL,
  `discount` int(10) NOT NULL,
  `remarks` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `service_invoice_services`
--

CREATE TABLE `service_invoice_services` (
  `invoiceId` int(10) NOT NULL,
  `serviceId` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `stockin`
--

CREATE TABLE `stockin` (
  `stockId` int(11) NOT NULL,
  `purchaseOrderId` int(11) NOT NULL,
  `date` date NOT NULL,
  `total` int(11) NOT NULL,
  `supplierId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `stockin_item`
--

CREATE TABLE `stockin_item` (
  `stockId` int(10) NOT NULL,
  `itemId` int(10) NOT NULL,
  `quantity` int(10) NOT NULL,
  `price` int(10) NOT NULL,
  `returned` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `stocktransfer`
--

CREATE TABLE `stocktransfer` (
  `transferId` int(10) NOT NULL,
  `warehouseId` int(10) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `stocktransfer_item`
--

CREATE TABLE `stocktransfer_item` (
  `transferId` int(10) NOT NULL,
  `itemId` int(10) NOT NULL,
  `quantity` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `storage`
--

CREATE TABLE `storage` (
  `storageId` int(10) NOT NULL,
  `location` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `storage`
--

INSERT INTO `storage` (`storageId`, `location`) VALUES
(1, 'A10');

-- --------------------------------------------------------

--
-- Table structure for table `supoutstanding`
--

CREATE TABLE `supoutstanding` (
  `outstandingId` int(10) NOT NULL,
  `stockId` int(10) NOT NULL,
  `total` int(10) NOT NULL,
  `paid` int(10) NOT NULL,
  `balance` int(10) NOT NULL,
  `lastUpdate` date NOT NULL,
  `status` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

CREATE TABLE `supplier` (
  `supplierId` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `rep` varchar(20) NOT NULL,
  `address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supplier`
--

INSERT INTO `supplier` (`supplierId`, `name`, `rep`, `address`) VALUES
(1, 'kshdn ', 'Ajith Perera', 'Galle rd,Mount Lavinia');

-- --------------------------------------------------------

--
-- Table structure for table `supplier_contact`
--

CREATE TABLE `supplier_contact` (
  `supplierId` int(11) NOT NULL,
  `contact_No` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tradinginvoice`
--

CREATE TABLE `tradinginvoice` (
  `invoiceId` int(10) NOT NULL,
  `date` date NOT NULL,
  `total` int(10) NOT NULL,
  `discount` int(10) NOT NULL,
  `remarks` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `trading_invoice_item`
--

CREATE TABLE `trading_invoice_item` (
  `invoiceId` int(10) NOT NULL,
  `itemId` int(10) NOT NULL,
  `quantity` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `Id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `DOB` date NOT NULL,
  `address` varchar(255) NOT NULL,
  `contactNumber` int(10) NOT NULL,
  `dateOfEmployment` date NOT NULL,
  `status` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `userlogin`
--

CREATE TABLE `userlogin` (
  `userId` int(10) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `Id` int(10) NOT NULL,
  `vehicleNo` varchar(10) NOT NULL,
  `category` varchar(10) NOT NULL,
  `type` varchar(20) NOT NULL,
  `mileage` int(15) NOT NULL,
  `custId` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `warehouse`
--

CREATE TABLE `warehouse` (
  `warehouseId` int(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `address` varchar(50) NOT NULL,
  `contactNumber` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD KEY `vehicleId` (`vehicleId`),
  ADD KEY `customerId` (`customerId`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `NIC` (`NIC`);

--
-- Indexes for table `customer_address`
--
ALTER TABLE `customer_address`
  ADD PRIMARY KEY (`Id`,`address`),
  ADD KEY `Id` (`Id`);

--
-- Indexes for table `customer_phone`
--
ALTER TABLE `customer_phone`
  ADD PRIMARY KEY (`Id`,`phoneNo`),
  ADD KEY `Id` (`Id`);

--
-- Indexes for table `custoustanding`
--
ALTER TABLE `custoustanding`
  ADD PRIMARY KEY (`outstandingId`),
  ADD KEY `invoiceId` (`invoiceId`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`itemCode`),
  ADD KEY `supplierId` (`supplierId`),
  ADD KEY `storageId` (`storageId`);

--
-- Indexes for table `purchaseorders`
--
ALTER TABLE `purchaseorders`
  ADD PRIMARY KEY (`OrderId`),
  ADD KEY `supplierId` (`supplierId`);

--
-- Indexes for table `purchaseorders_item`
--
ALTER TABLE `purchaseorders_item`
  ADD PRIMARY KEY (`orderId`,`itemId`),
  ADD KEY `itemId` (`itemId`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`serviceId`);

--
-- Indexes for table `service_invoice`
--
ALTER TABLE `service_invoice`
  ADD PRIMARY KEY (`invoiceId`),
  ADD KEY `customerId` (`customerId`),
  ADD KEY `vehicleId` (`vehicleId`);

--
-- Indexes for table `service_invoice_services`
--
ALTER TABLE `service_invoice_services`
  ADD PRIMARY KEY (`invoiceId`,`serviceId`),
  ADD KEY `serviceId` (`serviceId`);

--
-- Indexes for table `stockin`
--
ALTER TABLE `stockin`
  ADD PRIMARY KEY (`stockId`),
  ADD KEY `purchaseOrderId` (`purchaseOrderId`),
  ADD KEY `supplierId` (`supplierId`);

--
-- Indexes for table `stockin_item`
--
ALTER TABLE `stockin_item`
  ADD PRIMARY KEY (`stockId`,`itemId`),
  ADD KEY `itemId` (`itemId`);

--
-- Indexes for table `stocktransfer`
--
ALTER TABLE `stocktransfer`
  ADD PRIMARY KEY (`transferId`),
  ADD KEY `warehouseId` (`warehouseId`);

--
-- Indexes for table `stocktransfer_item`
--
ALTER TABLE `stocktransfer_item`
  ADD PRIMARY KEY (`transferId`,`itemId`),
  ADD KEY `itemId` (`itemId`);

--
-- Indexes for table `storage`
--
ALTER TABLE `storage`
  ADD PRIMARY KEY (`storageId`);

--
-- Indexes for table `supoutstanding`
--
ALTER TABLE `supoutstanding`
  ADD PRIMARY KEY (`outstandingId`),
  ADD KEY `stockId` (`stockId`);

--
-- Indexes for table `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`supplierId`);

--
-- Indexes for table `supplier_contact`
--
ALTER TABLE `supplier_contact`
  ADD PRIMARY KEY (`supplierId`,`contact_No`);

--
-- Indexes for table `tradinginvoice`
--
ALTER TABLE `tradinginvoice`
  ADD PRIMARY KEY (`invoiceId`);

--
-- Indexes for table `trading_invoice_item`
--
ALTER TABLE `trading_invoice_item`
  ADD PRIMARY KEY (`invoiceId`,`itemId`),
  ADD KEY `itemId` (`itemId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `userlogin`
--
ALTER TABLE `userlogin`
  ADD PRIMARY KEY (`userId`,`username`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `custId` (`custId`);

--
-- Indexes for table `warehouse`
--
ALTER TABLE `warehouse`
  ADD PRIMARY KEY (`warehouseId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category` int(5) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `Id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `itemCode` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `serviceId` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `service_invoice`
--
ALTER TABLE `service_invoice`
  MODIFY `invoiceId` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `storage`
--
ALTER TABLE `storage`
  MODIFY `storageId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `supplier`
--
ALTER TABLE `supplier`
  MODIFY `supplierId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tradinginvoice`
--
ALTER TABLE `tradinginvoice`
  MODIFY `invoiceId` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `Id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `Id` int(10) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`vehicleId`) REFERENCES `vehicle` (`Id`),
  ADD CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`customerId`) REFERENCES `customer` (`Id`);

--
-- Constraints for table `customer_address`
--
ALTER TABLE `customer_address`
  ADD CONSTRAINT `customer_address_ibfk_1` FOREIGN KEY (`Id`) REFERENCES `customer` (`Id`);

--
-- Constraints for table `customer_phone`
--
ALTER TABLE `customer_phone`
  ADD CONSTRAINT `customer_phone_ibfk_1` FOREIGN KEY (`Id`) REFERENCES `customer` (`Id`);

--
-- Constraints for table `custoustanding`
--
ALTER TABLE `custoustanding`
  ADD CONSTRAINT `custoustanding_ibfk_1` FOREIGN KEY (`invoiceId`) REFERENCES `service_invoice` (`invoiceId`);

--
-- Constraints for table `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `item_ibfk_1` FOREIGN KEY (`storageId`) REFERENCES `storage` (`storageId`),
  ADD CONSTRAINT `item_ibfk_2` FOREIGN KEY (`supplierId`) REFERENCES `supplier` (`supplierId`);

--
-- Constraints for table `purchaseorders`
--
ALTER TABLE `purchaseorders`
  ADD CONSTRAINT `purchaseorders_ibfk_1` FOREIGN KEY (`supplierId`) REFERENCES `supplier` (`supplierId`);

--
-- Constraints for table `purchaseorders_item`
--
ALTER TABLE `purchaseorders_item`
  ADD CONSTRAINT `purchaseorders_item_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `purchaseorders` (`OrderId`),
  ADD CONSTRAINT `purchaseorders_item_ibfk_2` FOREIGN KEY (`itemId`) REFERENCES `item` (`itemCode`);

--
-- Constraints for table `service_invoice`
--
ALTER TABLE `service_invoice`
  ADD CONSTRAINT `service_invoice_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customer` (`Id`),
  ADD CONSTRAINT `service_invoice_ibfk_2` FOREIGN KEY (`vehicleId`) REFERENCES `vehicle` (`Id`);

--
-- Constraints for table `service_invoice_services`
--
ALTER TABLE `service_invoice_services`
  ADD CONSTRAINT `service_invoice_services_ibfk_1` FOREIGN KEY (`invoiceId`) REFERENCES `service_invoice` (`invoiceId`),
  ADD CONSTRAINT `service_invoice_services_ibfk_2` FOREIGN KEY (`serviceId`) REFERENCES `service` (`serviceId`);

--
-- Constraints for table `stockin`
--
ALTER TABLE `stockin`
  ADD CONSTRAINT `stockin_ibfk_1` FOREIGN KEY (`purchaseOrderId`) REFERENCES `purchaseorders` (`OrderId`),
  ADD CONSTRAINT `stockin_ibfk_2` FOREIGN KEY (`supplierId`) REFERENCES `supplier` (`supplierId`);

--
-- Constraints for table `stockin_item`
--
ALTER TABLE `stockin_item`
  ADD CONSTRAINT `stockin_item_ibfk_1` FOREIGN KEY (`itemId`) REFERENCES `item` (`itemCode`);

--
-- Constraints for table `stocktransfer`
--
ALTER TABLE `stocktransfer`
  ADD CONSTRAINT `stocktransfer_ibfk_1` FOREIGN KEY (`warehouseId`) REFERENCES `warehouse` (`warehouseId`);

--
-- Constraints for table `stocktransfer_item`
--
ALTER TABLE `stocktransfer_item`
  ADD CONSTRAINT `stocktransfer_item_ibfk_1` FOREIGN KEY (`transferId`) REFERENCES `stocktransfer` (`transferId`),
  ADD CONSTRAINT `stocktransfer_item_ibfk_2` FOREIGN KEY (`itemId`) REFERENCES `item` (`itemCode`);

--
-- Constraints for table `supoutstanding`
--
ALTER TABLE `supoutstanding`
  ADD CONSTRAINT `supoutstanding_ibfk_1` FOREIGN KEY (`stockId`) REFERENCES `stockin` (`stockId`);

--
-- Constraints for table `supplier_contact`
--
ALTER TABLE `supplier_contact`
  ADD CONSTRAINT `supplier_contact_ibfk_1` FOREIGN KEY (`supplierId`) REFERENCES `supplier` (`supplierId`);

--
-- Constraints for table `trading_invoice_item`
--
ALTER TABLE `trading_invoice_item`
  ADD CONSTRAINT `trading_invoice_item_ibfk_1` FOREIGN KEY (`invoiceId`) REFERENCES `tradinginvoice` (`invoiceId`),
  ADD CONSTRAINT `trading_invoice_item_ibfk_2` FOREIGN KEY (`itemId`) REFERENCES `item` (`itemCode`);

--
-- Constraints for table `userlogin`
--
ALTER TABLE `userlogin`
  ADD CONSTRAINT `userlogin_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`Id`);

--
-- Constraints for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD CONSTRAINT `vehicle_ibfk_1` FOREIGN KEY (`custId`) REFERENCES `customer` (`Id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
