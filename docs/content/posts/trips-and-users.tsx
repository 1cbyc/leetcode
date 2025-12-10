import { LeetCodePost } from "./types";

export const tripsandusers: LeetCodePost = {
  slug: "trips-and-users",
  title: "trips and users",
  summary: "trips and users",
  publishedAt: "2024-01-01",
  difficulty: "Hard",
  languages: ["SQL","C"],
  tags: ["string"],
  leetCodeLink: "https://leetcode.com/problems/trips-and-users/",
  estimatedReadingMinutes: 9,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
        <p>--- title: "LeetCode 262: Trips and Users - MySQL Joins and Aggregation" description: "Solving the Trips and Users problem using MySQL joins and aggregation for data analysis" date: "2025-01-27" draft: false ---</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 262: Trips and Users</h3>
        <p>i recently solved the trips and users problem on leetcode, and it's a great example of mysql joins and data aggregation. this hard problem tests your understanding of database operations, joins, aggregation, and business logic implementation in mysql.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>the trips table holds all taxi trips. each trip has a unique id, while client_id and driver_id are both foreign keys to the users_id at the users table. status is an enum of type ('completed', 'cancelled_by_driver', 'cancelled_by_client').</p>
        <p>the users table holds all users. each user has a unique users_id, and role is an enum of type ('client', 'driver', 'partner').</p>
        <p>write a sql query to find the cancellation rate of requests made by unbanned users (both client and driver must be unbanned) between oct 1, 2013 and oct 3, 2013. the cancellation rate is computed by dividing the number of cancelled (by client or driver) requests by the total number of requests for the day.</p>
        <p><strong>example:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`trips table:\n+----+-----------+-----------+---------+--------------------+----------+\n| id | client_id | driver_id | city_id | status             | request_at|\n+----+-----------+-----------+---------+--------------------+----------+\n| 1  | 1         | 10        | 1       | completed          | 2013-10-01|\n| 2  | 2         | 11        | 1       | cancelled_by_driver| 2013-10-01|\n| 3  | 3         | 12        | 6       | completed          | 2013-10-01|\n| 4  | 4         | 13        | 6       | cancelled_by_client| 2013-10-01|\n| 5  | 1         | 10        | 1       | completed          | 2013-10-02|\n| 6  | 2         | 11        | 6       | completed          | 2013-10-02|\n| 7  | 3         | 12        | 6       | completed          | 2013-10-02|\n| 8  | 2         | 12        | 12      | completed          | 2013-10-03|\n| 9  | 3         | 10        | 12      | completed          | 2013-10-03|\n| 10 | 4         | 13        | 12      | cancelled_by_driver| 2013-10-03|\n+----+-----------+-----------+---------+--------------------+----------+\n\nusers table:\n+----------+--------+--------+\n| users_id | banned | role   |\n+----------+--------+--------+\n| 1        | No     | client |\n| 2        | Yes    | client |\n| 3        | No     | client |\n| 4        | No     | client |\n| 10       | No     | driver |\n| 11       | No     | driver |\n| 12       | No     | driver |\n| 13       | No     | driver |\n+----------+--------+--------+\n\noutput:\n+------------+-------------------+\n| Day        | Cancellation Rate |\n+------------+-------------------+\n| 2013-10-01 | 33.33            |\n| 2013-10-02 | 0.00             |\n| 2013-10-03 | 50.00            |\n+------------+-------------------+`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about using mysql joins and aggregation. the key insight is that we need to join the trips table with the users table twice - once for clients and once for drivers - to ensure both are unbanned.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about different approaches:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**mysql joins approach** - use joins and aggregation (optimal for database)</li>
          <li>**subquery approach** - use subqueries to filter banned users</li>
          <li>**alternative approach** - using ctes or window functions</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use a <strong>mysql joins approach</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**double join** - join trips with users twice for client and driver</li>
          <li>**filtering** - exclude banned users and filter by date range</li>
          <li>**aggregation** - group by date and calculate cancellation rate</li>
          <li>**percentage calculation** - convert counts to percentages using mysql functions</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">MySQL Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`SELECT\nt.request_at AS Day,\nROUND(\nSUM(CASE WHEN t.status != 'completed' THEN 1 ELSE 0 END) * 100.0 / COUNT(*),\n2\n) AS 'Cancellation Rate'\nFROM Trips t\nJOIN Users u1 ON t.client_id = u1.users_id\nJOIN Users u2 ON t.driver_id = u2.users_id\nWHERE t.request_at BETWEEN '2013-10-01' AND '2013-10-03'\nAND u1.banned = 'No'\nAND u2.banned = 'No'\nGROUP BY t.request_at\nORDER BY t.request_at;`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">C Implementation</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\ntypedef struct {\nint id;\nint client_id;\nint driver_id;\nchar status[20];\nchar request_at[11];\n} Trip;\n\ntypedef struct {\nint users_id;\nchar banned[4];\nchar role[10];\n} User;\n\ntypedef struct {\nchar day[11];\ndouble cancellation_rate;\n} Result;\n\nint compare_dates(const char* date1, const char* date2) {\nreturn strcmp(date1, date2);\n}\n\nint is_between_dates(const char* date, const char* start, const char* end) {\nreturn compare_dates(date, start) >= 0 && compare_dates(date, end) <= 0;\n}\n\nvoid calculate_cancellation_rates(Trip* trips, int trip_count,\nUser* users, int user_count,\nResult* results, int* result_count) {\n*result_count = 0;\n\n// create lookup tables for banned users\nint* banned_users = calloc(user_count + 1, sizeof(int));\nfor (int i = 0; i < user_count; i++) {\nif (strcmp(users[i].banned, "Yes") == 0) {\nbanned_users[users[i].users_id] = 1;\n}\n}\n\n// process each day\nchar current_day[11] = "";\nint total_trips = 0;\nint cancelled_trips = 0;\n\nfor (int i = 0; i < trip_count; i++) {\n// check if trip is in date range and users not banned\nif (is_between_dates(trips[i].request_at, "2013-10-01", "2013-10-03") &&\n!banned_users[trips[i].client_id] &&\n!banned_users[trips[i].driver_id]) {\n\n// new day\nif (strcmp(current_day, trips[i].request_at) != 0) {\n// save previous day's result\nif (strlen(current_day) > 0 && total_trips > 0) {\nstrcpy(results[*result_count].day, current_day);\nresults[*result_count].cancellation_rate =\n(double)cancelled_trips * 100.0 / total_trips;\n(*result_count)++;\n}\n\n// start new day\nstrcpy(current_day, trips[i].request_at);\ntotal_trips = 0;\ncancelled_trips = 0;\n}\n\ntotal_trips++;\nif (strcmp(trips[i].status, "completed") != 0) {\ncancelled_trips++;\n}\n}\n}\n\n// handle last day\nif (strlen(current_day) > 0 && total_trips > 0) {\nstrcpy(results[*result_count].day, current_day);\nresults[*result_count].cancellation_rate =\n(double)cancelled_trips * 100.0 / total_trips;\n(*result_count)++;\n}\n\nfree(banned_users);\n}`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
        <p>let me walk through how these solutions work:</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. SQL Join Strategy</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`FROM Trips t\nJOIN Users u1 ON t.client_id = u1.users_id\nJOIN Users u2 ON t.driver_id = u2.users_id`}</code></pre>
        <p>we join the trips table with the users table twice:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>`u1` for client information</li>
          <li>`u2` for driver information</li>
          <li>this ensures we can check both client and driver ban status</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. Filtering Logic</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`WHERE t.request_at BETWEEN '2013-10-01' AND '2013-10-03'\nAND u1.banned = 'No'\nAND u2.banned = 'No'`}</code></pre>
        <p>we filter by:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>date range using BETWEEN (inclusive)</li>
          <li>both client and driver must be unbanned</li>
          <li>this excludes trips with banned users</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Aggregation and Calculation</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`SUM(CASE WHEN t.status != 'completed' THEN 1 ELSE 0 END) * 100.0 / COUNT(*)`}</code></pre>
        <p>we calculate the cancellation rate by:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>counting non-completed trips</li>
          <li>dividing by total trips</li>
          <li>multiplying by 100 for percentage</li>
          <li>using ROUND for proper formatting</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">4. C Implementation Details</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`int* banned_users = calloc(user_count + 1, sizeof(int));`}</code></pre>
        <p>in the c implementation:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>we create a lookup table for banned users</li>
          <li>use calloc for zero-initialization</li>
          <li>this provides O(1) lookup time</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example data:</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`day 1 (2013-10-01):\n- trip 1: client=1(unbanned), driver=10(unbanned), status=completed\n- trip 2: client=2(banned), driver=11(unbanned) -> excluded\n- trip 3: client=3(unbanned), driver=12(unbanned), status=completed\n- trip 4: client=4(unbanned), driver=13(unbanned), status=cancelled_by_client\n\nvalid trips: 3 (1 completed, 1 cancelled)\ncancellation rate: 1/3 * 100 = 33.33%\n\nday 2 (2013-10-02):\n- trip 5: client=1(unbanned), driver=10(unbanned), status=completed\n- trip 6: client=2(banned), driver=11(unbanned) -> excluded\n- trip 7: client=3(unbanned), driver=12(unbanned), status=completed\n\nvalid trips: 2 (both completed)\ncancellation rate: 0/2 * 100 = 0.00%\n\nday 3 (2013-10-03):\n- trip 8: client=2(banned), driver=12(unbanned) -> excluded\n- trip 9: client=3(unbanned), driver=10(unbanned), status=completed\n- trip 10: client=4(unbanned), driver=13(unbanned), status=cancelled_by_driver\n\nvalid trips: 2 (1 completed, 1 cancelled)\ncancellation rate: 1/2 * 100 = 50.00%`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">SQL Solution</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**time complexity:** depends on database engine and indexing</li>
          <li>**space complexity:** depends on result set size</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">C Implementation</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**time complexity:** O(n + m) where n is number of trips, m is number of users</li>
          <li>**space complexity:** O(m) for banned users lookup table</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**double join** - necessary to check both client and driver ban status</li>
          <li>**date filtering** - use BETWEEN for inclusive range</li>
          <li>**percentage calculation** - proper decimal handling with ROUND</li>
          <li>**memory management** - c implementation requires careful memory allocation</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**subquery approach** - use subqueries to filter banned users</li>
          <li>more complex sql</li>
          <li>potentially less efficient</li>
          <li>same logical result</li>
          <li>**cte approach** - use common table expressions</li>
          <li>more readable sql</li>
          <li>same performance characteristics</li>
          <li>better for complex queries</li>
          <li>**window functions** - use window functions for aggregation</li>
          <li>more advanced sql features</li>
          <li>same result</li>
          <li>overkill for this problem</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Edge Cases to Consider</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**no trips in date range** - return empty result set</li>
          <li>**all users banned** - return empty result set</li>
          <li>**no cancellations** - return 0.00 for all days</li>
          <li>**all trips cancelled** - return 100.00 for all days</li>
          <li>**missing dates** - only return dates with trips</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Database Optimization</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**indexes** - create indexes on join columns and date</li>
          <li>**partitioning** - partition by date for large datasets</li>
          <li>**query optimization** - use explain plan to optimize joins</li>
          <li>**materialized views** - pre-compute for frequently accessed data</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**sql joins** - proper use of multiple joins for complex relationships</li>
          <li>**data filtering** - combining multiple filter conditions</li>
          <li>**aggregation** - calculating percentages and rates</li>
          <li>**c programming** - implementing database logic in low-level language</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Real-World Applications</h3>
        <p>this problem has applications in:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**ride-sharing platforms** - analyzing trip cancellation patterns</li>
          <li>**logistics systems** - tracking delivery success rates</li>
          <li>**booking systems** - monitoring reservation cancellations</li>
          <li>**analytics dashboards** - reporting business metrics</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the trips and users problem is an excellent exercise in sql joins and data processing. the key insight is using double joins to ensure both client and driver meet the filtering criteria, then applying proper aggregation to calculate cancellation rates.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/trips-and-users/solutions/1234569/trips-and-users-solution-by-1cbyc).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};
