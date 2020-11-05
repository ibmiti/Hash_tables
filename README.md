# Hash_tables / Hash function

Q : what is a hash table? 

A : a datastructure which is specially designed to use a special function called 
    Hash function

Q : What is the architecture / anatomy of a hash table? :

(( to view table as intended view readme in raw ))

Keys :            Addres / buckets
_________         _________________
NULL                000[   |    ][x]
john smith          001[Lisa Smith   | 313123   ][.]
NULL                002[   |    ][x]
Lisa Smith          003[   |    ][x]
...                 .............
Sam Doe             151[ John Smith  / Sandra Dee | 31313  / 31231  ][.]  (collision)
....                ............
Sandra Dee          152[ ted Baker  |  3424234  ][.]
...                 ........
Teddy bakerino      254[   |    ][x]


the above shows a hash table with a Overflow entry or collision at address 151


Q : Where have I seen hash table - data structures before? :

    object's / Map's / Set's  

    are all examples of hash tables for they store elements by named addresses

::::::::::::::::::::::::::::::::::::::::::::::

Q : What is a Hash function :

A : A hash function takes a group of characters (called a key) and maps it to a value of a certain length (called a hash value or hash). The hash value is representative of the original string of characters, but is normally smaller than the original.

Hashing is done for indexing and locating items in databases because it is easier to find the shorter hash value than the longer string. Hashing is also used in encryption.

Q: what is the effeciency of Hash functions, operations?

A: insert O(1) , lookup O(1) , delete O(1) , search O(1)

Q: On delete must you shift indices like arrays leading to slower run-time?

A: No, there is no need to shift after removal of item/element(s) from the data     structure

// more notes here // 

// Hash functions

// pros of using Hash tables / functions :

// 1. fast access of contents - run-time O(1) for all operations [ access, looklup, search , delete ]


// cons of using Hash tables:

// 1. Collision :
    //  when we insert something into an hash table - the hash function does not evenly distribute it throught the length of the data structure
    //  accessing an address which holds several collided values slows down the access of that address to O(n/k) or simplified to O(n)


// in javascript an object is one example of an Hash table
    // because it holds values to a named key / or address unline arrays which hold 
    // values to an sequentially filled integer 
    // objects / just like hash tables / maps / sets are not ordered


::: Hash Tables vs Arrays :::

1. Hash tables are great when you want certain values
2. Searching through arrays takes a long time O(n)
3. while Hash table searching is O(1)
4. Arrays allow you to look for items by indices 
5. Hash tables there are no notions of order on insert
6. Arrays on insert sequentially place items on memory shelves marked by incrementing indices


