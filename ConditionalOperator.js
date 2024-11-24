// syntax 

// (condition operator) ? if condition true -> res1 : if condition false -> res2 

let age = 35;

var checkAge = (age > 18) ? "Eligible for vote" : "Not Eligible for vote"

console.log(checkAge);



/* Types of JavaScript Operators
 There are different types of JavaScript operators:

 Arithmetic Operators
 Assignment Operators
 Comparison Operators
 String Operators
 Logical Operators
 Bitwise Operators
 Ternary Operators
 Type Operators


Operator	Description

  ( Arithmetic Operators )
  +	        Addition
  -	        Subtraction
  *	        Multiplication
  **	    Exponentiation (ES2016)
  /	        Division
  %	        Modulus (Division Remainder)
  ++	    Increment
  --	    Decrement 


  /* ( Assignment Operators )
  Operator	Example	    Same As
    =	     x = y	     x = y
    +=	     x += y	     x = x + y
    -=	     x -= y	     x = x - y
    *=	     x *= y	     x = x * y
    /=	     x /= y	     x = x / y
    %=	     x %= y	     x = x % y
    **=    	 x **= y	 x = x ** y 

    /*( Comparison Operators )
     Operator	Description
       ==	      equal to
       ===	      equal value and equal type
       !=	      not equal
       !==	      not equal value or not equal type
       >	      greater than
       <	      less than
       >=	      greater than or equal to
       <=	      less than or equal to
       ?	      ternary operator


      /* ( Logical Operators )
       Operator	Description
         &&	     logical and
         ||	     logical or
          !	     logical not

      /* ( Bitwise Operators )
        Bit operators work on 32 bits numbers.

        <- Any numeric operand in the operation is converted into a 32 bit number.
           The result is converted back to a JavaScript number.
    Operator	Description	   Example	Same as  	Result	Decimal
      &	           AND	        5 & 1	0101 & 0001	 0001	 1
      |	           OR	        5 | 1	0101 | 0001	 0101	   5
      ~	           NOT	        ~ 5	    ~0101	     1010   10
      ^	           XOR	        5 ^ 1	0101 ^ 0001	 0100	  4
      <<	       left shift	5 << 1	0101 << 1	 1010	 10
      >>	       right shift	5 >> 1	0101 >> 1	 0010	  2
      >>>	unsigned right shift 5 >>> 1 0101 >>> 1	  0010	  2  */


