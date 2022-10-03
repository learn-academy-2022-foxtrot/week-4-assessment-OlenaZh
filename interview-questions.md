# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer:
Object Oriented Programming (OOP) refers to languages that uses objects in programming. Both Ruby and JavaScript are OOP.
Functional programming means you create a function having statements to execute a particular task for the app. 

Researched answer:
In addition, the basic elements of functional programming are Variables and Functions. 
But the basic elements of OOP are objects and methods.
The functional programming is used only when there are few things/fixed sed of things, with more operations -> as you code evolves, you primarily add new operations on existing things..
And OOP is used when there are many things with few operations/fixed set of oerations on things - > primarily add new things. 
In OOP data is stored in objects. 
# I found this rerource very helpful: https://medium.com/@shaistha24/functional-programming-vs-object-oriented-programming-oop-which-is-better-82172e53a526

2. What is the difference between a Float and an Integer in Ruby?

Your answer:
In Ruby Integer is a number, but if expect decimal or fractions, we need to use Float. For example, when we devide one number by another, we need to use float to have more accurate result.  (Ex.: 7.0 / 3 )

Researched answer:
Boath Float and Integer are kind of numeric data. An Integer (int) is a number without a decimal point. A Float is a number with a decimal point (Ex.: 7.0). Float is used when more precision is needed. 

3. Ruby has an implicit return. What does that mean?

Your answer: 
Implicit return  - > You may not use keyword return in Ruby, because Ruby has an implicit return.  It means that it returns the last line of every method automatically unless otherwise state. 

Researched answer:
When a Function is returned values without using the return keyward, it is called Implicit return. Implicit return in Ruby means that the method will return the result of the final line beforre the end keyword.

4. What is a block in Ruby?

Your answer:
Blocks in Ruby are basically an anonymous function.Blocks are defined using keywords do and end. As a rule, blocks determine what action is to be performed.  

Researched answer:
In Ruby there are many mathods for iteration. An anonymous function that is passed to a method to determin what action is to be performed is A Block. 
A parameter is passed to the block, to determine what is happening to each value. We define the parameter inside of pipes | here | 
There are 2 ways to define blocks:
 - by using keywords do and end (with the multiline code)
 - wrap in a curly braces (with single line code)

 Ex.1.
 
    nums.each do |value|
        p value * 3
    end

# OR YOU CAN DO THIS. USE IT WITH THE SINGLE LINE CODE.
 EX.2:

    nums.each { |value| p value * 3 }


1. How do you extract a value in a Ruby hash?

Your answer:

To access the hash we need to create a variable and assign hash to this var.  To call/ return a value of hash, we use bracket notation.

For ex.:

    letters = {first_letter: 'A', second_letter: 'B'}
    p letters[:first_letter]
                
Researched answer:
In Ruby Hashes are similar to JavaScript Objects. It has key:value structure. To access a value in a Ruby hash we use bracket notation []. 

## Looking Ahead: Terms for Next Week

1. PostgreSQL: free and open-source relational database management system.

2. Ruby on Rails: is a server-side web app framework written in Ruby under the MIT License. 

3. ORM:object-relational mapping

4. Active Record:

5. Migrations: 
