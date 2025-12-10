---
title: "LeetCode 262: Trips and Users - MySQL Joins and Aggregation"
description: "Solving the Trips and Users problem using MySQL joins and aggregation for data analysis"
date: "2025-01-27"
draft: false
---

# LeetCode 262: Trips and Users

i recently solved the trips and users problem on leetcode, and it's a great example of mysql joins and data aggregation. this hard problem tests your understanding of database operations, joins, aggregation, and business logic implementation in mysql.

## Problem Statement

the trips table holds all taxi trips. each trip has a unique id, while client_id and driver_id are both foreign keys to the users_id at the users table. status is an enum of type ('completed', 'cancelled_by_driver', 'cancelled_by_client').

the users table holds all users. each user has a unique users_id, and role is an enum of type ('client', 'driver', 'partner').

write a sql query to find the cancellation rate of requests made by unbanned users (both client and driver must be unbanned) between oct 1, 2013 and oct 3, 2013. the cancellation rate is computed by dividing the number of cancelled (by client or driver) requests by the total number of requests for the day.

**example:**
```
trips table:
+----+-----------+-----------+---------+--------------------+----------+
| id | client_id | driver_id | city_id | status             | request_at|
+----+-----------+-----------+---------+--------------------+----------+
| 1  | 1         | 10        | 1       | completed          | 2013-10-01|
| 2  | 2         | 11        | 1       | cancelled_by_driver| 2013-10-01|
| 3  | 3         | 12        | 6       | completed          | 2013-10-01|
| 4  | 4         | 13        | 6       | cancelled_by_client| 2013-10-01|
| 5  | 1         | 10        | 1       | completed          | 2013-10-02|
| 6  | 2         | 11        | 6       | completed          | 2013-10-02|
| 7  | 3         | 12        | 6       | completed          | 2013-10-02|
| 8  | 2         | 12        | 12      | completed          | 2013-10-03|
| 9  | 3         | 10        | 12      | completed          | 2013-10-03|
| 10 | 4         | 13        | 12      | cancelled_by_driver| 2013-10-03|
+----+-----------+-----------+---------+--------------------+----------+

users table:
+----------+--------+--------+
| users_id | banned | role   |
+----------+--------+--------+
| 1        | No     | client |
| 2        | Yes    | client |
| 3        | No     | client |
| 4        | No     | client |
| 10       | No     | driver |
| 11       | No     | driver |
| 12       | No     | driver |
| 13       | No     | driver |
+----------+--------+--------+

output:
+------------+-------------------+
| Day        | Cancellation Rate |
+------------+-------------------+
| 2013-10-01 | 33.33            |
| 2013-10-02 | 0.00             |
| 2013-10-03 | 50.00            |
+------------+-------------------+
```

## My Approach

when i first saw this problem, i immediately thought about using mysql joins and aggregation. the key insight is that we need to join the trips table with the users table twice - once for clients and once for drivers - to ensure both are unbanned.

### Initial Thoughts

i started by thinking about different approaches:
1. **mysql joins approach** - use joins and aggregation (optimal for database)
2. **subquery approach** - use subqueries to filter banned users
3. **alternative approach** - using ctes or window functions

### Solution Strategy

i decided to use a **mysql joins approach** with the following strategy:
1. **double join** - join trips with users twice for client and driver
2. **filtering** - exclude banned users and filter by date range
3. **aggregation** - group by date and calculate cancellation rate
4. **percentage calculation** - convert counts to percentages using mysql functions

## My Solution

### MySQL Solution

```sql
SELECT 
    t.request_at AS Day,
    ROUND(
        SUM(CASE WHEN t.status != 'completed' THEN 1 ELSE 0 END) * 100.0 / COUNT(*),
        2
    ) AS 'Cancellation Rate'
FROM Trips t
JOIN Users u1 ON t.client_id = u1.users_id
JOIN Users u2 ON t.driver_id = u2.users_id
WHERE t.request_at BETWEEN '2013-10-01' AND '2013-10-03'
  AND u1.banned = 'No'
  AND u2.banned = 'No'
GROUP BY t.request_at
ORDER BY t.request_at;
```

### C Implementation

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    int id;
    int client_id;
    int driver_id;
    char status[20];
    char request_at[11];
} Trip;

typedef struct {
    int users_id;
    char banned[4];
    char role[10];
} User;

typedef struct {
    char day[11];
    double cancellation_rate;
} Result;

int compare_dates(const char* date1, const char* date2) {
    return strcmp(date1, date2);
}

int is_between_dates(const char* date, const char* start, const char* end) {
    return compare_dates(date, start) >= 0 && compare_dates(date, end) <= 0;
}

void calculate_cancellation_rates(Trip* trips, int trip_count, 
                                User* users, int user_count,
                                Result* results, int* result_count) {
    *result_count = 0;
    
    // create lookup tables for banned users
    int* banned_users = calloc(user_count + 1, sizeof(int));
    for (int i = 0; i < user_count; i++) {
        if (strcmp(users[i].banned, "Yes") == 0) {
            banned_users[users[i].users_id] = 1;
        }
    }
    
    // process each day
    char current_day[11] = "";
    int total_trips = 0;
    int cancelled_trips = 0;
    
    for (int i = 0; i < trip_count; i++) {
        // check if trip is in date range and users not banned
        if (is_between_dates(trips[i].request_at, "2013-10-01", "2013-10-03") &&
            !banned_users[trips[i].client_id] && 
            !banned_users[trips[i].driver_id]) {
            
            // new day
            if (strcmp(current_day, trips[i].request_at) != 0) {
                // save previous day's result
                if (strlen(current_day) > 0 && total_trips > 0) {
                    strcpy(results[*result_count].day, current_day);
                    results[*result_count].cancellation_rate = 
                        (double)cancelled_trips * 100.0 / total_trips;
                    (*result_count)++;
                }
                
                // start new day
                strcpy(current_day, trips[i].request_at);
                total_trips = 0;
                cancelled_trips = 0;
            }
            
            total_trips++;
            if (strcmp(trips[i].status, "completed") != 0) {
                cancelled_trips++;
            }
        }
    }
    
    // handle last day
    if (strlen(current_day) > 0 && total_trips > 0) {
        strcpy(results[*result_count].day, current_day);
        results[*result_count].cancellation_rate = 
            (double)cancelled_trips * 100.0 / total_trips;
        (*result_count)++;
    }
    
    free(banned_users);
}
```

## Code Breakdown

let me walk through how these solutions work:

### 1. SQL Join Strategy
```sql
FROM Trips t
JOIN Users u1 ON t.client_id = u1.users_id
JOIN Users u2 ON t.driver_id = u2.users_id
```

we join the trips table with the users table twice:
- `u1` for client information
- `u2` for driver information
- this ensures we can check both client and driver ban status

### 2. Filtering Logic
```sql
WHERE t.request_at BETWEEN '2013-10-01' AND '2013-10-03'
  AND u1.banned = 'No'
  AND u2.banned = 'No'
```

we filter by:
- date range using BETWEEN (inclusive)
- both client and driver must be unbanned
- this excludes trips with banned users

### 3. Aggregation and Calculation
```sql
SUM(CASE WHEN t.status != 'completed' THEN 1 ELSE 0 END) * 100.0 / COUNT(*)
```

we calculate the cancellation rate by:
- counting non-completed trips
- dividing by total trips
- multiplying by 100 for percentage
- using ROUND for proper formatting

### 4. C Implementation Details
```c
int* banned_users = calloc(user_count + 1, sizeof(int));
```

in the c implementation:
- we create a lookup table for banned users
- use calloc for zero-initialization
- this provides O(1) lookup time

## Example Walkthrough

let's trace through the example data:

```
day 1 (2013-10-01):
- trip 1: client=1(unbanned), driver=10(unbanned), status=completed
- trip 2: client=2(banned), driver=11(unbanned) -> excluded
- trip 3: client=3(unbanned), driver=12(unbanned), status=completed
- trip 4: client=4(unbanned), driver=13(unbanned), status=cancelled_by_client

valid trips: 3 (1 completed, 1 cancelled)
cancellation rate: 1/3 * 100 = 33.33%

day 2 (2013-10-02):
- trip 5: client=1(unbanned), driver=10(unbanned), status=completed
- trip 6: client=2(banned), driver=11(unbanned) -> excluded
- trip 7: client=3(unbanned), driver=12(unbanned), status=completed

valid trips: 2 (both completed)
cancellation rate: 0/2 * 100 = 0.00%

day 3 (2013-10-03):
- trip 8: client=2(banned), driver=12(unbanned) -> excluded
- trip 9: client=3(unbanned), driver=10(unbanned), status=completed
- trip 10: client=4(unbanned), driver=13(unbanned), status=cancelled_by_driver

valid trips: 2 (1 completed, 1 cancelled)
cancellation rate: 1/2 * 100 = 50.00%
```

## Time and Space Complexity

### SQL Solution
- **time complexity:** depends on database engine and indexing
- **space complexity:** depends on result set size

### C Implementation
- **time complexity:** O(n + m) where n is number of trips, m is number of users
- **space complexity:** O(m) for banned users lookup table

## Key Insights

1. **double join** - necessary to check both client and driver ban status
2. **date filtering** - use BETWEEN for inclusive range
3. **percentage calculation** - proper decimal handling with ROUND
4. **memory management** - c implementation requires careful memory allocation

## Alternative Approaches

i also considered:

1. **subquery approach** - use subqueries to filter banned users
   - more complex sql
   - potentially less efficient
   - same logical result

2. **cte approach** - use common table expressions
   - more readable sql
   - same performance characteristics
   - better for complex queries

3. **window functions** - use window functions for aggregation
   - more advanced sql features
   - same result
   - overkill for this problem

## Edge Cases to Consider

1. **no trips in date range** - return empty result set
2. **all users banned** - return empty result set
3. **no cancellations** - return 0.00 for all days
4. **all trips cancelled** - return 100.00 for all days
5. **missing dates** - only return dates with trips

## Database Optimization

1. **indexes** - create indexes on join columns and date
2. **partitioning** - partition by date for large datasets
3. **query optimization** - use explain plan to optimize joins
4. **materialized views** - pre-compute for frequently accessed data

## Lessons Learned

this problem taught me:
- **sql joins** - proper use of multiple joins for complex relationships
- **data filtering** - combining multiple filter conditions
- **aggregation** - calculating percentages and rates
- **c programming** - implementing database logic in low-level language

## Real-World Applications

this problem has applications in:
- **ride-sharing platforms** - analyzing trip cancellation patterns
- **logistics systems** - tracking delivery success rates
- **booking systems** - monitoring reservation cancellations
- **analytics dashboards** - reporting business metrics

## Conclusion

the trips and users problem is an excellent exercise in sql joins and data processing. the key insight is using double joins to ensure both client and driver meet the filtering criteria, then applying proper aggregation to calculate cancellation rates.

you can find my complete solution on [leetcode](https://leetcode.com/problems/trips-and-users/solutions/1234569/trips-and-users-solution-by-1cbyc).

---

*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*
