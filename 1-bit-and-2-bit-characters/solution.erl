-spec is_one_bit_character(Bits :: [integer()]) -> boolean().
is_one_bit_character(Bits) ->
    is_one_bit_character(Bits, 0).

% leetcode: 1-bit and 2-bit characters
% https://leetcode.com/problems/1-bit-and-2-bit-characters/description/
%
% we have two special characters:
% - one-bit character: represented by a single 0
% - two-bit character: represented by 10 or 11
%
% given a binary array bits that ends with 0, return true if the last character
% must be a one-bit character.
%
% approach: traverse from the start using pattern matching. if we see 0, it's a
% one-bit char (move 1). if we see 1, it's the start of a two-bit char (move 2).
% if we end up exactly at the last index, the last char is one-bit.

is_one_bit_character([], I) ->
    I =:= 0;
is_one_bit_character([0], I) ->
    I =:= 0;
is_one_bit_character([0 | Rest], I) ->
    is_one_bit_character(Rest, I + 1);
is_one_bit_character([1, _ | Rest], I) ->
    is_one_bit_character(Rest, I + 2).

