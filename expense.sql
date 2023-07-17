use checkbook;
-- create table expense(expense_id int, expense_date date, expense_amount int, expense_desc varchar(500));

-- alter table expense add constraint expense_id_pk primary key(expense_id);
-- alter table expense add expense_head_id int;


-- alter table expense add constraint expense_head_fk foreign key(expense_head_id) references expense(expense_id);

-- alter table expense drop constraint expense_head_fk;
-- alter table expense add constraint expense_head_fk foreign key(expense_head_id) references expense_head(expense_head_id);

-- truncate expense;
select * from expense;