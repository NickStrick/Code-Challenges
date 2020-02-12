/*
https://www.hackerrank.com/challenges/15-days-of-learning-sql/problem?h_r=next-challenge&h_v=zen

Enter your query here.
Please append a semicolon ";" at the end of the query and enter your query in a single line to avoid error.
*/



/*  number of submissions per day for each hacker

SELECT s.submission_date, h.name, COUNT(*)
FROM hackers AS h, submissions AS s
WHERE s.hacker.id = h.hacker_id
GROUP BY s.submission_date, h.name
*/

/* 15 days of submissions

SELECT DISTINCT submission_date From submissions
*/

/*  Teoretically should return the hacker with the greatest number of submissions from each day

call foreach(
    'SELECT DISTINCT submission_date FROM submissions',
    'SELECT s.submission_date, h.name, COUNT(*)
    FROM hackers AS h, submissions AS s
    WHERE s.hacker_id = h.hacker_id, s.submission_date = ${1}')
*/