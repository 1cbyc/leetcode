SELECT
    request_at AS Day,
    ROUND(
        SUM(status IN ('cancelled_by_driver', 'cancelled_by_client')) * 1.0 / COUNT(*),
        2
    ) AS `Cancellation Rate`
FROM Trips
WHERE request_at BETWEEN '2013-10-01' AND '2013-10-03'
  AND client_id IN (
      SELECT users_id
      FROM Users
      WHERE banned = 'No'
  )
  AND driver_id IN (
      SELECT users_id
      FROM Users
      WHERE banned = 'No'
  )
GROUP BY request_at;
