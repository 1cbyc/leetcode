class Solution:
    def isValid(self, code: str) -> bool:
        stack = []
        i = 0
        n = len(code)
        
        while i < n:
            if i > 0 and not stack:
                return False
            
            if code.startswith("<![CDATA[", i):
                i += 9
                j = code.find("]]>", i)
                if j == -1:
                    return False
                i = j + 3
            elif code.startswith("</", i):
                j = code.find(">", i)
                if j == -1:
                    return False
                tagname = code[i+2:j]
                if not stack or stack.pop() != tagname:
                    return False
                i = j + 1
            elif code.startswith("<", i):
                j = code.find(">", i)
                if j == -1:
                    return False
                tagname = code[i+1:j]
                if not (1 <= len(tagname) <= 9 and tagname.isupper() and tagname.isalpha()):
                    return False
                stack.append(tagname)
                i = j + 1
            else:
                i += 1
                
        return not stack

def test_solution():
    sol = Solution()
    # Unclosed <BR> tag makes it false
    assert sol.isValid("<DIV>This is the first line <![CDATA[<div>]]><BR></DIV>") == False
    # CDATA and nested content
    assert sol.isValid("<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>") == True
    # Overlapping tags
    assert sol.isValid("<A>  <B> </A>   </B>") == False
    # Root tag not closed
    assert sol.isValid("<DIV>  div tag is not closed  <DIV>") == False
    # Root tag wraps everything
    assert sol.isValid("<A><B></B></A>") == True
    assert sol.isValid("<A><B></B></A><C></C>") == False
    print("Tests passed")

if __name__ == "__main__":
    test_solution()
