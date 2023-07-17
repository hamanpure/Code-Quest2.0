use checkbook;
-- create table expense_head(expense_head_name varchar(250), expense_head_id int, frequency varchar(250));

-- alter table expense_head add constraint exp_head_id primary key(expense_head_id);

-- alter table expense_head add constraint expense_head_ck check( frequency in ('weekly','monthly','yearly','daily'));



-- alter table expense_head add column exp_desc varchar(500);

select * from expense_head;