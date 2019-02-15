# Notes 	:nerd_face:
# Sammenvatting Chapter 1

## Values, Types, and Operators 



## Values
Er zijn 2^64 bits combinaties.

Om te kunnen werken met zodanige hoeveelheden van bits zonder te verdwalen, moeten we ze scheiden in brokken die stukjes informatie vertegenwoordigen. In de omgeving van een JavaScript heten die stukjes waarden. Hoewel alle waarden zijn gemaakt van bits, spelen zij verschillende rollen. Elke waarde bestaat uit een type dat zijn rol bepaalt. Sommige waarden zijn getallen, sommige waarden zijn tekstitems, sommige waarden zijn functies, en zo verder.

## Numbers
> 2.998e8 = 2.998 × 108 = 299,800,000
NaN = not a number

## Arithmetic (rekenkundig)

Arithmetix is rekenkunde. 

Operators zijn: +, -, *, %, /, ++, --


```javascript
> 314 % 100 = 14 
> 144 % 12 = 0
```
14 en 0 zijn dan de *modulo*

## Special numbers
(/) = escaping character: volgende character is belangrijk.

vb.
```javascript
> "This is the first line\nAnd this is the second" 
```
Wat er uit komt:

```javascript
// This is the first line
// And this is the second
```

Als infinity verkeerd gebruikt wordt, kan dit snel al leiden tot een NaN (Not a Number). 

## Strings

"Strings cannot be divided, multiplied, or subtracted, but the + operator can be used on them. It does not add, but it concatenates—it glues two strings together. 
Om bijvoorbeelde meerdere stukken aan elkaar te plakken, moet je dit op de volgende manier doen:
```javascript
// "con" + "cat" + "e" + "nate"
// concatenate
// "Deze " + "zin " + "is " + "correct."
// Deze zin is correct.
```
> "con" + "cat" + "e" + "nate"
> concatenate
> "Deze " + "zin " + "is " + "correct."
> Deze zin is correct.

Wanneer je iets binnen een ${} schrijft, wordt de uitkomst in een string gezet.
```javascript
'half of 100 is ${100 / 2}'
//half of 100 is 50
```

## Unary operators (unaire operatoren)

```javascript
console.log(typeof 4.5);
// → number
console.log(typeof "x");
// → string
```

resultaat:
```javascript
> number
> string
```

## Boolean values

Basicly, yes or no there are no other possibilities. You would only use this if you want the result to be true or false.


vb.

```javascript
console.log(3 > 2);
// → true
console.log(3 < 2);
// → false
```
Uppercase letters zijn altijd "minder" dan lowercase als het gaat over orderen van strings.

```javascript
console.log("Itchy != "Scratchy");
// → true
console.log("Apple" == "Orange");
// → false

console.log(NaN == NaN);
// → false
```

## Logical operators

Er zijn een aantal operations dat bij Boolean values applied kunnen worden. JavaScript support hier drie logische operators voor: *and*, *or* en *not*. 

&& = is gelijk aan
|| = or
! = not (flips the value given to it)

!true produceerd false, en !false geeft true aan.


```javascript
console.log(true && false);
// → false
console.log(true && true);
// → true
```

```javascript
console.log(false || true);
// → true
console.log(false || false);
// → false
```

 !true produceerd false, en !false geeft true aan.


De laatste logical operator is een ternary operator die werkt met drie values. 

```javascript
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
```


## Empty values

Er zijn twee speciale values geschreven als **null** en **undefined**, deze worden gebruikt de wanneer er geen betkenis of ontbreking van een value is. 


## Summary

We looked at four types of JavaScript values in this chapter: numbers, strings, Booleans, and undefined values.

Such values are created by typing in their name (true, null) or value (13, "abc"). You can combine and transform values with operators. We saw binary operators for arithmetic (+, -, *, /, and %), string concatenation (+), comparison (==, !=, ===, !==, <, >, <=, >=), and logic (&&, ||), as well as several unary operators (- to negate a number, ! to negate logically, and typeof to find a value’s type) and a ternary operator (?:) to pick one of two values based on a third value.


## Chapter 2
Stuk code wat een value produceert = *expression*

let caught = 5*5;

let --> defines a binding
caught --> grabs & hold *(tentacles)* --> ze holden geen __*value*__ maar __*grijpen*__ die.

Binding names mogen geen punctuatie hebben en niet met cijfers beginnen. Behalve **($)** en **(_)**

## Summary
You now know that a program is built out of statements, which themselves sometimes contain more statements. Statements tend to contain expressions, which themselves can be built out of smaller expressions.

Putting statements after one another gives you a program that is executed from top to bottom. You can introduce disturbances in the flow of control by using conditional (if, else, and switch) and looping (while, do, and for) statements.

Bindings can be used to file pieces of data under a name, and they are useful for tracking state in your program. The environment is the set of bindings that are defined. JavaScript systems always put a number of useful standard bindings into your environment.

Functions are special values that encapsulate a piece of program. You can invoke them by writing functionName(argument1, argument2). Such a function call is an expression and may produce a value.


## Chapter 3

### Defining a function

## Chapter 4

## Chapter 5

## Chapter 6

## Chapter 8

## Chapter 9

## Chapter 10

## Chapter 11
