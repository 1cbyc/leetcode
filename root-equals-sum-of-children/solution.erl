%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec check_tree(Root :: #tree_node{} | null) -> boolean().
check_tree(#tree_node{val = RootVal, left = #tree_node{val = LeftVal}, right = #tree_node{val = RightVal}}) ->
    RootVal =:= LeftVal + RightVal.