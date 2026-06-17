from typing import List


class Solution:
    def smallestSufficientTeam(
        self, req_skills: List[str], people: List[List[str]]
    ) -> List[int]:
        skill_index = {skill: index for index, skill in enumerate(req_skills)}
        n = len(req_skills)
        full = (1 << n) - 1

        person_mask = []
        for skills in people:
            mask = 0
            for skill in skills:
                if skill in skill_index:
                    mask |= 1 << skill_index[skill]
            person_mask.append(mask)

        dp = {0: []}

        for person, mask in enumerate(person_mask):
            if mask == 0:
                continue
            for covered, team in list(dp.items()):
                new_cover = covered | mask
                if new_cover == covered:
                    continue
                if new_cover not in dp or len(dp[new_cover]) > len(team) + 1:
                    dp[new_cover] = team + [person]

        return dp[full]


if __name__ == "__main__":
    solution = Solution()

    def covers(team, people, req):
        skills = set()
        for p in team:
            skills |= set(people[p])
        return set(req) <= skills

    req = ["java", "nodejs", "reactjs"]
    people = [["java"], ["nodejs"], ["nodejs", "reactjs"]]
    team = solution.smallestSufficientTeam(req, people)
    assert covers(team, people, req) and len(team) == 2

    req2 = ["algorithms", "math", "java", "reactjs", "csharp", "aws"]
    people2 = [
        ["algorithms", "math", "java"],
        ["algorithms", "math", "reactjs"],
        ["java", "csharp", "aws"],
        ["reactjs", "csharp"],
        ["csharp", "math"],
        ["aws", "java"],
    ]
    team2 = solution.smallestSufficientTeam(req2, people2)
    assert covers(team2, people2, req2) and len(team2) == 2

    print("All tests passed!")
