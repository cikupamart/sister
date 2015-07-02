# Host: localhost  (Version: 5.6.20)
# Date: 2015-01-28 15:59:01
# Generator: MySQL-Front 5.3  (Build 4.187)

/*!40101 SET NAMES latin1 */;

#
# Structure for table "pus_klasifikasi"
#

DROP TABLE IF EXISTS `pus_klasifikasi`;
CREATE TABLE `pus_klasifikasi` (
  `replid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `kode` varchar(20) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `keterangan` varchar(200) NOT NULL,
  PRIMARY KEY (`replid`)
) ENGINE=MyISAM AUTO_INCREMENT=194 DEFAULT CHARSET=latin1;

#
# Data for table "pus_klasifikasi"
#

/*!40000 ALTER TABLE `pus_klasifikasi` DISABLE KEYS */;
INSERT INTO `pus_klasifikasi` VALUES (1,'000','COMP SCI., KNOWLEDGE&SYSTEM',''),(2,'100','PSYCHOLOGY',''),(3,'200','CHRISTIAN',''),(4,'300','SOCIAL SCIENCES',''),(5,'400','LANGUAGE',''),(6,'500','PURE SCIENCE',''),(7,'600','APPLIED SCIENCE &TWECHNOLOGY',''),(8,'700','ARTS & RECREATION',''),(9,'800','LITERATURE',''),(10,'900','HISTORY & GEOGRAPHY',''),(11,'FIC','STORY BOOKS for children',''),(12,'823','FIKSI B. INDONESIA',''),(13,'920','BIOGRAPHY',''),(14,'597.3','SHARK','Class here cartilaginous shark'),(15,'741.5','GRAPHIC NOVEL','Class here cartoons, caricatures. comics'),(16,'813','ENGLISH FICTION','Class here novel'),(17,'950','HIST. OF ASIA, ORIENT, FAR EAST',''),(18,'597.89','FROGS','Class here RANOIDEA'),(19,'302.17','SOCIAL DYSFUNCTION','Class here apathy, fear, panic, sosial psychoanalysis'),(20,'220.95','BIBLE STORIES RETOLD','Incl. picture books Bible stories'),(21,'612','HUMAN PHYSIOLOGY','Class here comprehensive works on human anatomy'),(22,'153.9','INTELLIGENCE & APTITUDES','Class here intelligence levels, multiple intelligences'),(23,'658.3','PERSONNEL MGMT/HRM',''),(24,'808.8','COLL. OF LITERARY TEXTS','Class here text in more than two literatures'),(25,'425','ENGLISH GRAMMAR',''),(26,'909','WORLD HISTORY',''),(27,'220.07','BIBLE: study & teaching',''),(28,'510','MATHEMATICS',''),(29,'499.221','BAHASA INDONESIA',''),(30,'371.2','SCHOOL ADMINISTRATION',''),(31,'268','RELIGIOUS EDUC.','Class here catechetics, curricula'),(32,'796.4','WEIGHT LIFTING, GYMNASTICS',''),(33,'152.33','HABITS','Class here comprehensive works on habits'),(34,'658.1','ORGANIZATION & FINANCE',''),(35,'248.32','PRAYER',''),(36,'371.9','SPECIAL EDUC.','Class here exceptional std., learning diasabilities'),(37,'231','GOD',''),(38,'241.6','SPECIFIC MORAL ISSUES','Class here morality of warfare, abortion'),(39,'371.25','GROUPING STD FOR INSTRUCTION','Class here school classes, mixed-level classroom, combination of grades'),(40,'420','ENGLISH',''),(41,'268.4','RELIGIOUS EDUC. OF SPECIFIC GROUPS','Class here curricula, teaching methods'),(42,'371.1','REACHERS & TEACHING',''),(43,'370.15','EDUCATIONAL PSYCHOLOGY','Class here psychology of teaching'),(44,'371.102','TEACHING','Class here mentoring'),(45,'375','CURRICULA',''),(46,'371.94','STD WITH EMOTIONAL DISTURBANCES','Class here std with mental illness, hyperactive sstd, autistic std.'),(47,'910','GEOGR. & TRAVEL','Class here tourism, on travel'),(48,'649.1','CHILD REARING','Class here supervising'),(49,'372.21','PRESCHOOL & KINDERGARTEN','Class here early childhood educ, play groups'),(50,'570','LIFE SCIENCES, BIOLOGY',''),(51,'540','CHEMISTRY',''),(52,'530','PHYSICS',''),(53,'428','STANDARD ENGLISH USAGE','Class here basic English'),(54,'248.4','CHRISTIAN LIFE & PRACTICE','Class here Christian marriagge and family'),(55,'253.53','SPIRITUAL DIRECTION','Class here counseling'),(56,'371','SCHOOL & THEIR ACTIVITIES','Class here school system, school policy, school activities'),(57,'790.1','RECREATIONAL ACTIVITIES','Class here leisure'),(58,'370.1','EDUC FOR SPECIFIC','Class here educational psychology'),(59,'158','APPLIED PSYCHOLOGY','Class here happiness, success'),(60,'170','ETHICS',''),(61,'500.07','SCIENCE: study & teaching',''),(62,'418','APPLIED LINGUISTIC','Class here lip reading, vocabulary'),(63,'371.6','PHYSICAL PLANT, MATERIALS MGMT','Class here educational buildings, school facilities'),(64,'657','ACCOUNTING',''),(65,'004','DATA PROCESSING, COMPUTER SCI.',''),(66,'001','KNOWLEDGE',''),(67,'790','RECREATIONAL & PERFORMING ARTS',''),(68,'320','POLITICAL SCI.',''),(69,'745','DECORATIVE ARTS',''),(70,'745.5','HANDICRAFTS',''),(71,'306','CULTURE & INSTITUTIONS','Class here mass culture, social anthropology'),(72,'330','ECONOMICS',''),(73,'301','SOCIOLOGY & ANTHROPOLOGY','Class here humans'),(74,'495.103','MANDARIN DICT.',''),(75,'495.1','MANDARIN GRAMMAR',''),(76,'242.6','PRAYERS & MEDITATIONS','Class here prayers & meditations for daily use, church year'),(77,'793','INDOOR GAMES',''),(78,'246.72','DRAMATIC ARTS','Including liturgical drama'),(79,'620.03','ENGINEERING DICT.',''),(80,'612.8','NERVOUS SYSTEM, SENSORY FUNCTIONS','Class here neurophysiology'),(81,'822','DRAMA INDONESIA',''),(82,'150.72','EDUCATION, RESEARCH PSYCHOLOGY',''),(83,'372.19','ELEMENTARY EDUC.','Class here curricula'),(84,'248','CHRISTIAN EXPERIENCE,PRACTICE, LIFE','Class here spirituality'),(85,'248.83','COLLEGE STD.','Class here guides to Christian life for specific age'),(86,'371.27','CLASSROOM&SCHOO EXAM',''),(87,'808','RETHORIC','Including literary plagiarism'),(89,'510.07','MATHEMATIC: study&teaching',''),(90,'414','PHONOLOGY&PHONETICS',''),(91,'155.25','DEVELOPMENT OF CHARACTER&PERSONALITY','Including maturity, self-control'),(92,'371.3','METHODS OF STUDY','Class here classroom techniques, creative activities'),(93,'371.4','STD GUIDANCE & COUNSELING','Class here std personnel services'),(94,'428.24','STANDARD ENGLISH USAGE','Class here English as second language'),(95,'611.8','NERVOUS SYSTEM, SENSE ORGAN','Class here neuroanatomy'),(96,'641','FOOD & DRINK',''),(97,'372.6','COMMUNICATION SKILLS','Including lipreading, sign languages'),(98,'332','FINANCIAL ECONOMICS',''),(99,'650','MANAGEMENT, BUSINESS',''),(100,'268.5','RECORDS&RULES','Including attendance, decoration, prizes, promotion'),(101,'220','BIBLE',''),(102,'746.44','EMBROIDERY','Including couching, cutwork, drawn work, smocking'),(103,'646.2','SEWING',''),(104,'420.18','SCHOOL & THEORIES OF LINGUISTICS','Including structural linguistics'),(105,'070','NEWS MEDIA, JOURNALISM, PUBLISHING',''),(106,'372.87','MUSIC: elementary educ.',''),(107,'503','DICT. ENCYCLOPEDIA: SCIENCE',''),(108,'510.03','DICT, ENCYCLOPEDIA: MATH',''),(109,'745.4','DESIGN & DECORATION','Class here design source book'),(110,'912','ATLASES, MAPS, CHARTS',''),(111,'808.5','SPEECH','Class here voice, expression, gesture'),(112,'641.865','PASTRIES',''),(113,'370.152','CONSCIOUS MENTAL PROCESSESINTELLIGENCE','Class here cognition, critical thinking'),(114,'658.155','RISK MANAGEMENT','Class here mgmt of profit & loss'),(115,'301.07','SOCIOLOGY: study&teaching',''),(116,'155.4','CHILD PSYCHOLOGY',''),(117,'808.882','ANECDOTS, JOKES, QUOTATIONS',''),(118,'929.4','PERSONAL NAMES, BIOGRAPHY',''),(119,'158.4','LEADERSHIP',''),(120,'158.2','INTERPERSONAL RELATIONS','Class here  dominance, intimacy, loneliness'),(121,'158.1','PERSONAL IMPROVEMENT&ANALYSIS','Class here work to make one a better person'),(122,'179.1','RESPECT FOR LIFE & NATURE','Class here environmental & ecological ethics'),(123,'155.2','INDIVIDUAL PSYCHOLOGY','Class here the self, character, identity, personality'),(124,'620','ENGINEERING','Class here manufacturing of products of various branches of engineering'),(125,'641.5','COOKING',''),(126,'371.8','STUDENTS','Incl. class reunion, extracurricular, std life'),(127,'152.4','EMOTIONS','Incl. embarrassment, sadness; class here affects, attitudes, feeling, moods'),(128,'153.42','THOUGHT&THINKING',''),(129,'726.1','TEMPLES & SHRINES',''),(130,'155.5','PSYCHOLOGY OF YOUNG PEOPLE 12-20',''),(131,'821','PUISI INDONESIA',''),(132,'741','DRAWING',''),(133,'649.12','CHILD REARING: specific age groups',''),(134,'179.9','VIRTUES','Incl. cheerfulness, gentleness, gratitude, honesty, humility, patience, prudence, self-control, toleration'),(135,'177.7','LOVE','Incl.caring, charity, kindness'),(136,'649.5','CHILDREN\'S ACTIVITIES & RECREATION',''),(137,'220.9','BIBLE: geogr.,history, chronology',''),(138,'242','DEVOTIONAL LITERATURE','Class here texts of meditations, contemplations, prayers for indiv.'),(139,'263.93','EASTER SEASON','Including Ascension day'),(140,'823.13','BILINGUAL FICTION: INDO-ENGLISH',''),(141,'590','ANIMALS',''),(142,'636.1','HORSES',''),(143,'611.78','HAIR & NAILS','Incl. hair follicles'),(144,'595.7','INSECTS','Class here Uniramia, hexapoda, holometabola'),(145,'634.9','FORESTRY',''),(146,'111','ONTOLOGY',''),(147,'641.3','FOOD','Class here interdiciplinary works on food'),(148,'636.7','DOGS',''),(149,'641.35','SPECIFIC FOOD FROM GARDEN CROPS','Class here juice'),(150,'895.1','FICTION LITERATURE (FULL CHINESE)',''),(151,'388','TRANSPORTATION','Class here comprehensive works on communications & transportations'),(152,'780','MUSIC',''),(153,'394.2','SPECIAL OCCASION','Incl. annyversaries, birthdays, celebrations\nClass here Valentine\'s day'),(154,'811','ENGLISH POETRY',''),(155,'551.5','METEOROLOGY',''),(156,'598.97','OWLS','Incl. barn & grass owls; class here strigidae'),(157,'355.14','UNIFORMS','Incl. accessories; class here etiquette of uniforms'),(158,'641.34','FOODS fr. ORCHARDS, FRUITS, FORESTRY','Class here comprehensive works on tree crops'),(159,'567.9','DINOSAURS',''),(160,'599.8','PRIMATES','Class here monkeys'),(161,'305.2','SOCIAL GROUO: AGE',''),(162,'534','SOUND & RELATED VIBRATIONS',''),(163,'752','COLOR',''),(164,'795','GAMES OF CHANCE','Class here gambling'),(165,'593','MARINE & SEAHORSE INVERTEBRATES',''),(166,'428.4','STANDARD ENGLISH USAGE: SPECIAL TOPICS','Class here basic English'),(167,'232','JESUS CHRIST',''),(168,'224','OLD TESTAMENT: PROPHETIC BOOKS','Class here major prophets'),(169,'222','OLD TESTAMENT: HISTORICAL BOOKS',''),(170,'372.4','HOME SCHOOL: READING',''),(171,'418.4','READING',''),(172,'150','PSYCHOLOGY',''),(173,'749.09','FURNITURE&ACCESSORIS:historical',''),(174,'005.3','PROGRAMS:SOFTWARE','Class here application programs, software packages, system programs'),(175,'741.595','CARTOONS, COMICS by specific countries','Class here China'),(176,'551.55','STORMS',''),(177,'551.4','ATMOSPHERIC PRESSURE',''),(178,'591.5','ANIMAL BEHAVIOUR',''),(179,'813.23','BILINGUAL FICTION:ENGLISH-INDO',''),(180,'362.1','MEDICAL CARE&TREATMENT','Class here medical missions, public health'),(181,'411','WRITING SYSTEMS','Incl. alphabets, acronyms, punctuation, spelling'),(182,'516','GEOMETRY',''),(183,'513.245','PERCENTAGE',''),(184,'512.924','APPROXIMATION, RATIO, PROPORTION',''),(185,'515.83','FRACTIONAL CALCULUS','Class here functions of one real variables'),(186,'513.55','DECIMAL SYSTEM','Class here numeration system'),(187,'516.15','GEOMETRIC CONFIGURATION','Incl. mensuration, patterns, sizes, space'),(188,'154.6','SLEEP PHENOMENA',''),(189,'224.92','JONAH/JONAS',''),(190,'224.5','DANIEL','Class here prophetic books of OT'),(191,'223.1','JOB','Poetic books of OT'),(192,'223.2','PSALMS','Poetic books of OT'),(193,'598','BIRDS','');
/*!40000 ALTER TABLE `pus_klasifikasi` ENABLE KEYS */;
