def to_camel_case(text):
    if text == '':
        return text
    text = text.split('-')
    if len(text) < 2:
        text = text[0].split('_')

    res = ''
    for item in text:
        f = item[0]
        item = item[1:]
        if res == '':
            res += f + item
        else:
            res += f.upper() + item
    return res


print("Testing function to_camel_case")
print(to_camel_case(''), '', "An empty string was provided but not returned")
print(to_camel_case("the_stealth_warrior"), "theStealthWarrior",
      "to_camel_case('the_stealth_warrior') did not return correct value")
print(to_camel_case("The-Stealth-Warrior"), "TheStealthWarrior",
      "to_camel_case('The-Stealth-Warrior') did not return correct value")
print(to_camel_case("A-B-C"), "ABC",
      "to_camel_case('A-B-C') did not return correct value")
