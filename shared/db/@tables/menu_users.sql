# Host: localhost  (Version: 5.6.20)
# Date: 2015-01-28 15:34:07
# Generator: MySQL-Front 5.3  (Build 4.187)

/*!40101 SET NAMES latin1 */;

#
# Structure for table "menu_users"
#

DROP TABLE IF EXISTS `menu_users`;
CREATE TABLE `menu_users` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `menu` varchar(255) NOT NULL DEFAULT '',
  `url` varchar(255) NOT NULL DEFAULT '',
  `ordering` int(2) NOT NULL,
  `parent` int(4) NOT NULL DEFAULT '0',
  `icon` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

#
# Data for table "menu_users"
#

/*!40000 ALTER TABLE `menu_users` DISABLE KEYS */;
INSERT INTO `menu_users` VALUES (2,'Change Password','admin.php?pilih=user&mod=yes&aksi=change',1,8,''),(7,'Profile','?pilih=profile&mod=yes',2,8,''),(8,'Account','#',1,0,'settings.png'),(12,'Blogs','?pilih=news&mod=yes',3,8,'');
/*!40000 ALTER TABLE `menu_users` ENABLE KEYS */;
