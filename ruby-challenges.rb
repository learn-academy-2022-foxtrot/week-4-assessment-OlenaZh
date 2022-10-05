# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
num2 = 42
num3 = 221


def even_or_odd num
    if num % 2 == 0
        "#{num} is even"
    elsif num % 2 == 1
        "#{num} is odd" 
    end 
end 

puts even_or_odd num1
# Expected output: '7 is odd'
puts even_or_odd num2
# Expected output: '42 is even'
puts even_or_odd num3
# Expected output: '221 is odd'

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
beatles_album2 = 'Sgt Pepper'
beatles_album3 = 'Abbey Road'

def delete_vowels string
    string.delete'aeiouAEIOU'
end

puts delete_vowels(beatles_album1)
# Expected output: 'Rbbr Sl' 
puts delete_vowels(beatles_album2)
# Expected output: 'Sgt Pppr' 
puts delete_vowels(beatles_album3) 
# Expected output: 'bby Rd'


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
palindrome_tester2 = 'LEARN'
palindrome_tester3 = 'Rotator'


def palindrome(string)
    if string.downcase == string.downcase.reverse
        "#{string} is a palindrome"
    elsif string.downcase != string.downcase.reverse
        "#{string} is NOT a palindrome"
    end
end

puts palindrome(palindrome_tester1)
# Expected output: 'Racecar is a palindrome'
puts palindrome(palindrome_tester2)
# Expected output: 'LEARN is not a palindrome'
puts palindrome(palindrome_tester3)
# Expected output: 'Rotator is a palindrome'
