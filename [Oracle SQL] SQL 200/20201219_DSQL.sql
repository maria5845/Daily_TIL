-- 논리 연산자 
SELECT ename, sal, job
    FROM emp
    WHERE job='SALESMAN' AND sal >= 1200;


-- 대소문자 변환 함수 배우기 
SELECT UPPER(ename), LOWER(ename), INITCAP(ename)
    FROM emp;
    
-- 대소문자 변환 함수 배우기 
SELECT ENAME, SAL
    FROM emp 
    WHERE LOWER(ename)='scott';
    
-- 문자에서 특정철자 추출하기  
SELECT SUBSTR('LEECHAN',2,3)
    FROM DUAL;

-- 문자열의 길이를 출력하기 
SELECT ename, length(ename)
    FROM EMP;

-- 1. 문자에서 특정 철자의 위치 출력하기 
SELECT INSTR('SMITH','M')
    FROM DUAL;
 
-- 2. 문자에서 특정 철자의 위치 출력하기 
SELECT INSTR('yaska159@naver.com','@')
    FROM DUAL;
    
-- 3. 문자에서 특정 철자의 위치 출력하기 
SELECT SUBSTR('yaska159@naver.com',INSTR('yaska159@naver.com','@')+1)
    FROM DUAL;
    
-- 4. 문자에서 특정 철자의 위치 출력하기(대소문자 가림) 
SELECT RTRIM(SUBSTR('yaska159@naver.com',INSTR('yaska159@naver.com','@')+1),'.com')
        FROM DUAL;
        
-- 특정 철자를 다른 철자로 변경하기 
    SELECT ename, REPLACE(sal,0,'*')
        FROM emp;
        
-- 1.특정 철자를 다른 철자로 변경하기 
     SELECT ename, REGEXP_REPLACE (sal, '[0-3]', '*') as SALARY
      from emp;
 
-- 2. 특정 철자를 다른 철자로 변경하기 (SQL 시각화) 
     SELECT ename, sal, Lpad('$', round(sal/100), '$') as bar_chart
        FROM emp;
 
 -- 특정 철자 잘라내기
    SELECT 'smith', LTRIM('smith','s'), RTRIM('smith','h'), TRIM('s' from 'smith')
    FROM DUAL;
    
 --insert into emp(empno,ename,sal,job,deptno) values(8921,'JACK ',3000,'SALESMAN',30);
 --COMMIT;

SELECT ename, sal
    FROM emp
    where 1=1   
    AND RTRIM(ename)='JACK';

--DELETE FROM emp where TRIM(ename)='JACK';
--commit;



    
    
    