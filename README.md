# Hash_tables / Hash function

Q : what is a hash table? 

A : a datastructure which is specially designed to use a special function called 
    Hash function


Q : What is a Hash function :

A : A hash function takes a group of characters (called a key) and maps it to a value of a certain length (called a hash value or hash). The hash value is representative of the original string of characters, but is normally smaller than the original.

Hashing is done for indexing and locating items in databases because it is easier to find the shorter hash value than the longer string. Hashing is also used in encryption.

Q: what is the effeciency of Hash functions, operations?

A: insert O(1) , lookup O(1) , delete O(1) , search O(1)

Q: On delete must you shift indices like arrays leading to slower run-time?

A: No, there is no need to shift after removal of item/element(s) from the data     structure

