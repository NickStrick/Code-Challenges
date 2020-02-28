# https://www.hackerrank.com/contests/kodecrypt-2k15-wild-card-entry/challenges/phone-keypad
# https://youtu.be/Dk9dOqJaXqw


digits_to_letters = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
}

# what's the runtime?


def telephone_words(digits):
    words = []
    # how do we call our tw function appropriately?
    # how do we get the word that we're building up into the words array?
    tw('', digits, words)
    return words


def tw(word_so_far, digits, words):
    # base case: len(digits) == 0
    if len(digits) == 0:
        words.append(word_so_far)
        return
    # otherwise, get the next digit
    next_digit = int(digits[0])
    # access its letters from our map
    letters = digits_to_letters[next_digit]
    # loop through all the letters
    for l in letters:
        # we're not storing these answers anywhere
        tw(word_so_far + l, digits[1:], words)


print(telephone_words('130'))


# fn telephone_words(digits: String) -> Vec<String> {
# 	let mut words: Vec<String> = vec![];
# 	let mapping = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
# ​
# 	// kick off our recursive function if we have digits
# 	if digits.len() > 0 {
# 		recurse(&mut words, &mapping, "".to_string(), &digits);
# 	}

# 	words
# }
# ​
# // our recursive function that handles creating letter permutations
# // words: our vector of strings we're building up
# // mapping: the mapping of our phone numbers to digits via array indices
# // combination: the current string we're building up
# // next_digits: the digits we haven't processed yet
# fn recurse(
# 	words: &mut Vec<String>,
# 	mapping: &[&str],
# 	word_so_far: String,
# 	next_digits: &str
# ) {
# 	match next_digits.len() {
# 		// if we have no more digits, add this string to our words vector
# 		0 => words.push(word_so_far),
# 		_ => {
# 			// grab the next digit
# 			let digit = next_digits[0..=0].parse::<i32>().unwrap();
# 			// access the letters for that digit
# 			let letters = mapping[(digit - 2) as usize];
# 			// for each letter, recurse with this letter combined with the word we're building up
# 			for c in letters.chars() {
# 				recurse(
# 					words,
# 					mapping,
# 					format("{}{}", word_so_far, c),
# 					&next_digits[1..]
# 				);
# 			}
# 		}
# 	}
# }
