
CREATE TABLE IF NOT EXISTS `users` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `u_name` varchar(128) NOT NULL,
  `u_description` text NOT NULL,
  `u_photo` varchar(255) NOT NULL,
  `u_cover` varchar(255) NOT NULL,
  `u_age` double NOT NULL,
  `u_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `u_modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  
);

INSERT INTO `users` (`u_id`, `u_name`, `u_description`, `u_photo`, `u_cover`, `u_age`) VALUES
  (1, 'Jeon Jungkook', 'Main Vocal Line For BTS.','https://thebiaslistcom.files.wordpress.com/2023/11/jungkook-bts-standing-next-to-you.jpg?w=640','https://kpoppie.com/wp-content/uploads/2023/11/Standing-Next-to-You-1.webp', 27),
  (2, 'Park Jimin', 'Vocal Line For BTS.',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDKjcDwgUt4rmq8nIS5_gbc1ovCO9asTkKLSsT4NEC5w&s',
  'https://wallpapers.com/images/hd/photoshoot-of-bts-jimin-r6oai09h0pf8jz7h.jpg', 28),
  (3, 'Kim Teahyung','Vocal Line For BTS.','https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/03/06/Screenshot_20230306-173947_Instagram-3986731063.jpg','https://m.economictimes.com/thumb/msid-106406994,width-1600,height-900,resizemode-4,imgsize-37738/happy-birthday-kim-taehyung-best-songs-of-bts-member-v.jpg', 28),
  (4, 'Kim Seokjin','Vocal Line For BTS.','https://nacoreiatem.com.br/wp-content/uploads/2022/04/jin-bts-las-vegas.png','https://m.economictimes.com/thumb/msid-94957338,width-1200,height-900,resizemode-4,imgsize-24298/jin-the-astronaut.jpg', 31),
  (5, 'Min Yoongi', 'Rap Line For BTS.','https://www.k-popers.com/wp-content/uploads/2023/11/produser-Suga-dan-Karya-karyanya.jpg','https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/08/08092512/bts-suga-military-enlistment-dates-details.jpeg', 30),
  (6, 'Kim Namjoon', 'Rap Line For BTS.','https://www.hindustantimes.com/ht-img/img/2023/10/10/550x309/FwPHIsBX0AACGNw_1684502157054_1696957021997.jfif','https://w0.peakpx.com/wallpaper/911/239/HD-wallpaper-namjoon-bts-namjoon-rm.jpg', 29),
  (7, 'Park Hoseok', 'Rap Line For BTS.','https://stylecaster.com/wp-content/uploads/2023/02/j-hope.jpg?w=600&h=337&crop=1','https://i.pinimg.com/736x/75/d4/e7/75d4e7722e4cc2fffd751d459be83fcd.jpg', 30);