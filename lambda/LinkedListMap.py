# https://gist.github.com/seanchen1991/a151368df32b8e7ae6e7fde715e44b78


# reduce takes a data structure and either finds a key piece of data or
# be able to restructure the data structure
​
# 1. Reduce usually takes a linear data structure (99% we use reduce on an array)
# 2. Reduce "aggregates" all of the data in the data structure into one final value
# 3. Reduce is extremely flexible with how the reduction actually happens
# 3a. Reduce doesn't care how the reduction happens
# 4. The "reducer" function that's passed in as input is how we specify how the reduction happens
​
# what's the deal with the anonymous function's parameters?
# 1. An aggregator value
# 2. The current list node
# 3. An optional value the aggregator is initialized with
​
# what happens on a single call of the anonymous function?
# how many times does the reducer function get called? Once for every element in our data structure
# does the anonymous function do the work of iterating over our data structure?
# no, the anonymous function itself doesn't do the work of iterating
​
​
# Steps for our reduce function
​
​
# How do all of these calls get aggregated into a single value?
# The anonymous function needs to update the aggregated value somehow
​
# where is the state set and how is it defaulted to the head?
