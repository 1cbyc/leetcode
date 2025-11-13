use std::collections::HashSet;

impl Solution {
    pub fn dig_artifacts(_n: i32, artifacts: Vec<Vec<i32>>, dig: Vec<Vec<i32>>) -> i32 {
        let mut dug = HashSet::with_capacity(dig.len());
        for cell in dig {
            dug.insert((cell[0], cell[1]));
        }

        let mut total = 0;
        for artifact in artifacts {
            let mut ok = true;
            for r in artifact[0]..=artifact[2] {
                for c in artifact[1]..=artifact[3] {
                    if !dug.contains(&(r, c)) {
                        ok = false;
                        break;
                    }
                }
                if !ok {
                    break;
                }
            }
            if ok {
                total += 1;
            }
        }

        total
    }
}

