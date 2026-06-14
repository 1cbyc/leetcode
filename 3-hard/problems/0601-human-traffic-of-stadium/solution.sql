WITH busy_days AS (
    SELECT
        id,
        visit_date,
        people,
        id - ROW_NUMBER() OVER (ORDER BY id) AS group_id
    FROM Stadium
    WHERE people >= 100
),
valid_groups AS (
    SELECT group_id
    FROM busy_days
    GROUP BY group_id
    HAVING COUNT(*) >= 3
)
SELECT
    id,
    visit_date,
    people
FROM busy_days
WHERE group_id IN (
    SELECT group_id
    FROM valid_groups
)
ORDER BY visit_date;
