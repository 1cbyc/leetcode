class Solution {
public:
    vector<string> findWords(vector<string>& words) {
        vector<set<char>> rows = {
            set<char>{'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'},
            set<char>{'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'},
            set<char>{'z', 'x', 'c', 'v', 'b', 'n', 'm'}
        };

        vector<string> result;
        for (const string& word : words) {
            for (const auto& row : rows) {
                bool found = true;
                for (char c : word) {
                    if (row.find(tolower(c)) == row.end()) {
                        found = false;
                        break;
                    }
                }
                if (found) {
                    result.push_back(word);
                    break;
                }
            }
        }

        return result;
    }
};
