-- �� ������ 
SELECT ename, sal, job
    FROM emp
    WHERE job='SALESMAN' AND sal >= 1200;


-- ��ҹ��� ��ȯ �Լ� ���� 
SELECT UPPER(ename), LOWER(ename), INITCAP(ename)
    FROM emp;
    
-- ��ҹ��� ��ȯ �Լ� ���� 
SELECT ENAME, SAL
    FROM emp 
    WHERE LOWER(ename)='scott';
    
-- ���ڿ��� Ư��ö�� �����ϱ�  
SELECT SUBSTR('LEECHAN',2,3)
    FROM DUAL;

-- ���ڿ��� ���̸� ����ϱ� 
SELECT ename, length(ename)
    FROM EMP;

-- 1. ���ڿ��� Ư�� ö���� ��ġ ����ϱ� 
SELECT INSTR('SMITH','M')
    FROM DUAL;
 
-- 2. ���ڿ��� Ư�� ö���� ��ġ ����ϱ� 
SELECT INSTR('yaska159@naver.com','@')
    FROM DUAL;
    
-- 3. ���ڿ��� Ư�� ö���� ��ġ ����ϱ� 
SELECT SUBSTR('yaska159@naver.com',INSTR('yaska159@naver.com','@')+1)
    FROM DUAL;
    
-- 4. ���ڿ��� Ư�� ö���� ��ġ ����ϱ�(��ҹ��� ����) 
SELECT RTRIM(SUBSTR('yaska159@naver.com',INSTR('yaska159@naver.com','@')+1),'.com')
        FROM DUAL;
        
-- Ư�� ö�ڸ� �ٸ� ö�ڷ� �����ϱ� 
    SELECT ename, REPLACE(sal,0,'*')
        FROM emp;
        
-- 1.Ư�� ö�ڸ� �ٸ� ö�ڷ� �����ϱ� 
     SELECT ename, REGEXP_REPLACE (sal, '[0-3]', '*') as SALARY
      from emp;
 
-- 2. Ư�� ö�ڸ� �ٸ� ö�ڷ� �����ϱ� (SQL �ð�ȭ) 
     SELECT ename, sal, Lpad('$', round(sal/100), '$') as bar_chart
        FROM emp;
 
 -- Ư�� ö�� �߶󳻱�
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



    
    
    