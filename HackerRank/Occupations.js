//https://www.hackerrank.com/challenges/occupations/problem

// SELECT 
// MAX(Doctor)
// , MAX(Professor)
// , MAX(Singer)
// , MAX(Actor)
// FROM
//     (SELECT CASE WHEN Occupation = 'Doctor' THEN name END AS Doctor
//     , CASE WHEN Occupation = 'Professor' THEN name END AS Professor
//     , CASE WHEN Occupation = 'Singer' THEN name END AS Singer
//     , CASE WHEN Occupation = 'Actor' THEN name END AS Actor
//     , RANK() OVER (PARTITION BY Occupation ORDER BY Name) AS occu_rank
//     FROM Occupations) x
// GROUP BY occu_rank