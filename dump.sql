DROP DATABASE IF EXISTS evaluation;

CREATE DATABASE evaluation;

USE evaluation;

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(25) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `avis` varchar(255) DEFAULT NULL,
  `note` int(11) DEFAULT NULL,
  `formation` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;


INSERT INTO `utilisateur` (`id`, `firstName`, `lastName`, `avis`, `note`, `formation`) VALUES
(1, 'RAMAMINIRINA', 'Victorino', 'Genial', 5, 'Backend'),
(2, 'RANDRIANASOLO ', 'Jean Marck Thonny', 'Je trouve que c est une formation  super !', 4, 'Backend'),
(3, 'RAMAMBASOA', 'Rindralalaina Françine', 'Je sais pas mais c est fatiguant !... kkk', 3, 'UX-UI'),
(4, 'LOVASOA', 'DANIA', 'c est cool !', 3, 'Frontend'),
(5, 'RAZAKA ', 'Lionel', 'Lorem is ...... kkk', 4, 'Marketing'),
(6, 'BRUNO', 'Eric', 'Top !', 5, 'Frontend'),
(7, 'RINAH', 'Loulou', 'very good', 5, 'UX-UI'),
(8, 'THIERRY ', 'Leon', 'Awesome !', 4, 'Marketing');
COMMIT;