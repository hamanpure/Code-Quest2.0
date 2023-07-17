use checkbook;

-- DELIMITER //

-- CREATE TRIGGER add_to_daily_annual_trigger13
-- AFTER INSERT ON income
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
--     SELECT COUNT(*) INTO exists_flag FROM dailyAnnual WHERE curr_date = NEW.income_date;
--     

--     IF exists_flag = 0 THEN
--         -- Calculate the initial closing balance
--         IF v_count = 0 THEN
--         
-- 			SET initial_closing_bal = NEW.income_amount;

-- 			-- Insert a new row into the dailyAnnual table with the calculated initial closing balance
-- 			INSERT INTO dailyAnnual (closing_bal, curr_date, total_exp, total_inc)
-- 			VALUES (initial_closing_bal, NEW.income_date, 0, NEW.income_amount);
-- 		ELSE
-- 			
-- 			SELECT closing_bal
-- 			INTO prev_closing_bal
-- 			FROM dailyAnnual
-- 			WHERE curr_date < NEW.income_date
-- 			ORDER BY curr_date DESC
-- 			LIMIT 1;
--             
--             set new_balance = prev_closing_bal + NEW.income_amount;
--             
--             INSERT INTO dailyAnnual(closing_val,curr_date,total_exp,total_inc)
-- 			VALUES (new_balance, NEW.income_date, 0, NEW.income_amount);
-- 		
--         END IF;
--         
--             



-- 			
--     ELSE
--         -- Update the existing row in dailyAnnual with the new income and expenses
--         UPDATE dailyAnnual
--         SET total_inc = total_inc + NEW.income_amount,
--             closing_bal = closing_bal + NEW.income_amount
--         WHERE curr_date = NEW.income_date;
--     END IF;
-- END;
-- //

-- DELIMITER ;
