use checkbook;

-- create table income(income_desc varchar(500), income_amount int, income_date date, income_id int, income_head_id int);

-- alter table income add constraint inc_id_pk primary key(income_id);
-- alter table income add constraint inc_head_fk foreign key(income_head_id) references income_head(income_head_id);


-- alter table income modify income_amount float;






-- TRUNCATE INCOME;

select * from income;


