-- create database checkbook;
use checkbook;
-- create table income_head(income_head_name varchar(250), frequency varchar(250), income_head_id varchar(250));

-- alter table income_head add constraint income_head_pk primary key(income_head_id);
-- alter table income_head add constraint income_head_ck check( frequency in ('weekly','monthly','yearly','daily'));


 -- alter table income_head modify column income_head_id int;
 
-- alter table income_head add column inc_desc varchar(500);


select * from income_head;