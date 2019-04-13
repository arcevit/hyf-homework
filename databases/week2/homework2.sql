
USE hyf_db3;
SET NAMES utf8mb4;

CREATE TABLE `status`(
  `id`   INT         NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(40) NOT NULL,
  PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `student`(
  `id`        INT         NOT NULL AUTO_INCREMENT,
  `class`     INT         NOT NULL,
  `name`      VARCHAR(40) NOT NULL,
  `last_name` VARCHAR(40) NOT NULL,
  `email`     VARCHAR(20) NOT NULL,
  `phone`     VARCHAR(12), 
   PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `mentor`(
  `id`                  INT         NOT NULL AUTO_INCREMENT,
  `name`                VARCHAR(40) NOT NULL,
  `master_in_field`     VARCHAR(20) NOT NULL,
  PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE TABLE `cirriculum`(
  `week#`               INT         NOT NULL AUTO_INCREMENT,
  `mentor_id`           INT,          
  `subject`             VARCHAR(40) NOT NULL,
  FOREIGN KEY(`mentor_id`) REFERENCES `mentor`(`id`) ON DELETE SET NULL,
  PRIMARY KEY(`week#`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE TABLE `homework`(
  `id`                  INT         NOT NULL AUTO_INCREMENT,
  `student_id`          INT,
  `week_id`             INT,
  `due_date`            DATETIME NOT NULL,
  `status_id`           INT,
  PRIMARY KEY(`id`),
 CONSTRAINT `fk_student` FOREIGN KEY(`student_id`) REFERENCES `student`(`id`)       ON DELETE SET NULL,
 CONSTRAINT `fk_week`    FOREIGN KEY(`week_id`)    REFERENCES `cirriculum`(`week#`) ON DELETE SET NULL,
 CONSTRAINT `fk_status`  FOREIGN KEY(`status_id`)  REFERENCES `status`(`id`)        ON DELETE SET NULL

)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


      --   status
     
     INSERT INTO status VALUES(1,'HAND IN');
     INSERT INTO status VALUES(2,'NOT HAND IN');
     
     
      --  students
      
      INSERT INTO student VALUES(1,'08','haqan','atik','haqan@gmail.com',123456);
      INSERT INTO student VALUES(2,'08','bugs','bunny','bunny@gmail.com',123456);
      INSERT INTO student VALUES(3,'07','pokemon','yellow','pokemon@gmail.com',123456);
      INSERT INTO student VALUES(4,'07','thor','blue','thor@gmail.com',123456);
      INSERT INTO student VALUES(5,'09','loki','green','loki@gmail.com',123456);
      INSERT INTO student VALUES(6,'09','superman','white','superman@gmail.com',123456);
      
     --  mentor
     
     INSERT INTO mentor VALUES(1,'John','HTML,CSS,WORDPRESS');
     INSERT INTO mentor VALUES(2,'Terry','NODE,JAVA,MYSQL');
     INSERT INTO mentor VALUES(3,'TERESA','NODE.JS,JAVASCRIPT');
     INSERT INTO mentor VALUES(4,'KAGAN','ANGULAR,PHP');
     INSERT INTO mentor VALUES(5,'LEE','HTML,CSS,PYTON');
     
     
     --   cirriculum
     
     INSERT INTO cirriculum VALUES(1,5,'html,css');
	 INSERT INTO cirriculum VALUES(2,3,'JAVASCRIPT');
     INSERT INTO cirriculum VALUES(3,3,'NODE.JS');
	 INSERT INTO cirriculum VALUES(4,2,'MYSQL');
	 INSERT INTO cirriculum VALUES(5,4,'ANGULAR');
     
     -- homework
     
     INSERT INTO homework VALUES(1,5,1,NOW(),1);
     INSERT INTO homework VALUES(2,5,2,NOW(),2);
     INSERT INTO homework VALUES(3,4,1,NOW(),1);
     INSERT INTO homework VALUES(4,4,2,NOW(),1);
     INSERT INTO homework VALUES(5,1,1,NOW(),2);
     INSERT INTO homework VALUES(6,2,1,NOW(),2);
     INSERT INTO homework VALUES(7,6,3,NOW(),1);
     
--  add a new column to one of the tables with a default value.

 ALTER TABLE homework
 ADD COLUMN  hw_hand_in_date DATETIME AFTER due_date;   
     
     
-- remove one column from one of the tables
ALTER TABLE homework
DROP COLUMN hw_hand_in_date; 
  
--      change the data type for one column in one of the tables
 
 ALTER TABLE homework 
 MODIFY COLUMN hw_hand_in_date VARCHAR(20);

    
-- modify two entries (rows) in one of the tables
    
    
UPDATE homework
SET hw_hand_in_date='14APRIL2019' , status_id=1
WHERE student_id = 5 AND week_id=2;

UPDATE homework
SET hw_hand_in_date='11APRIL2019' , status_id=1
WHERE student_id = 4 AND week_id=1;

 -- delete two entries in one of the tables
 
 DELETE FROM homework
 WHERE hw_hand_in_date='11APRIL2019' AND status_id=1;
 
 
  -- add an index to one of the columns in one of the tables
  
  CREATE INDEX student_index ON homework(student_id);
  
  SELECT * FROM homework WHERE student_id=5;
  EXPLAIN SELECT * FROM homework WHERE student_id=5;
  

  






