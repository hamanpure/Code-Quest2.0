use checkbook;

-- DELIMITER //

-- CREATE TRIGGER sub_to_daily_annual_trigger2
-- AFTER INSERT ON expense
-- FOR EACH ROW
-- BEGIN
-- 	
-- 	DECLARE v_count INT;
--     DECLARE exists_flag INT; -- this is removing the check_exists function
--     DECLARE initial_closing_bal FLOAT;
--     DECLARE prev_closing_bal FLOAT;
--     DECLARE new_balance float;
--     
--     
--     SELECT COUNT(*) INTO v_count FROM dailyAnnual;
--     SELECT COUNT(*) INTO exists_flag FROM dailyAnnual WHERE curr_date = NEW.expense_date;
--     

--     IF exists_flag = 0 THEN
--         -- Calculate the initial closing balance
--         IF v_count != 0 THEN
--         
-- 			
-- 			SELECT closing_bal
-- 			INTO prev_closing_bal
-- 			FROM dailyAnnual
-- 			WHERE curr_date < NEW.expense_date
-- 			ORDER BY curr_date DESC
-- 			LIMIT 1;
--             
--             IF prev_closing_bal > NEW.expense_amount then 
--             
-- 				set new_balance = prev_closing_bal - NEW.expense_amount;
--             
-- 				INSERT INTO dailyAnnual(closing_bal,curr_date,total_exp,total_inc)
-- 				VALUES (new_balance, NEW.expense_date, NEW.expense_amount, 0);
-- 		
-- 			END IF;
-- 		end if;
--         
--             



-- 			
--     ELSE
--         -- Update the existing row in dailyAnnual with the new income and expenses
--         UPDATE dailyAnnual
--         SET total_exp = total_exp + NEW.expense_amount,
--             closing_bal = closing_bal - NEW.expense_amount
--         WHERE curr_date = NEW.expense_date;
--     END IF;
-- END;
-- //

-- DELIMITER ;
