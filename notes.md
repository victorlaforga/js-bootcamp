	
# Chapter 1 :nerd_face:

## Values, Types, and Operators 



### Values
Er zijn 2^64 bits combinaties.

Om te kunnen werken met zodanige hoeveelheden van bits zonder te verdwalen, moeten we ze scheiden in brokken die stukjes informatie vertegenwoordigen. In de omgeving van een JavaScript heten die stukjes waarden. Hoewel alle waarden zijn gemaakt van bits, spelen zij verschillende rollen. Elke waarde bestaat uit een type dat zijn rol bepaalt. Sommige waarden zijn getallen, sommige waarden zijn tekstitems, sommige waarden zijn functies, en zo verder.

### Numbers
> 2.998e8 = 2.998 × 108 = 299,800,000
NaN = not a number

### Arithmetic (rekenkundig)

Arithmetix is rekenkunde. 

Operators zijn: +, -, *, %, /, ++, --


```javascript
> 314 % 100 = 14 
> 144 % 12 = 0
```
14 en 0 zijn dan de *modulo*

### Special numbers
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

### Strings

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

### Unary operators (unaire operatoren)

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

### Boolean values

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

### Logical operators

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


### Empty values

Er zijn twee speciale values geschreven als **null** en **undefined**, deze worden gebruikt de wanneer er geen betkenis of ontbreking van een value is. 


### Summary

We looked at four types of JavaScript values in this chapter: numbers, strings, Booleans, and undefined values.

Such values are created by typing in their name (true, null) or value (13, "abc"). You can combine and transform values with operators. We saw binary operators for arithmetic (+, -, *, /, and %), string concatenation (+), comparison (==, !=, ===, !==, <, >, <=, >=), and logic (&&, ||), as well as several unary operators (- to negate a number, ! to negate logically, and typeof to find a value’s type) and a ternary operator (?:) to pick one of two values based on a third value.


## Chapter 2
### Program Structure
Stuk code wat een value produceert = *expression*

let caught = 5*5;

let --> defines a binding
caught --> grabs & hold *(tentacles)* --> ze holden geen __*value*__ maar __*grijpen*__ die.

Binding names mogen geen punctuatie hebben en niet met cijfers beginnen. Behalve **($)** en **(_)**

### Summary
You now know that a program is built out of statements, which themselves sometimes contain more statements. Statements tend to contain expressions, which themselves can be built out of smaller expressions.

Putting statements after one another gives you a program that is executed from top to bottom. You can introduce disturbances in the flow of control by using conditional (if, else, and switch) and looping (while, do, and for) statements.

Bindings can be used to file pieces of data under a name, and they are useful for tracking state in your program. The environment is the set of bindings that are defined. JavaScript systems always put a number of useful standard bindings into your environment.

Functions are special values that encapsulate a piece of program. You can invoke them by writing functionName(argument1, argument2). Such a function call is an expression and may produce a value.


## Chapter 3
### Defining a function
Functies hebben een aantal parameters (in dit geval alleen x) en een body, waarin de verklaringen die worden uitgevoerd moeten wanneer de functie wordt aangeroepen. De hoofdtekst van de functie van een functie die deze manier gemaakt moet altijd worden verpakt in accolades, zelfs wanneer het bestaat uit slechts één instructie.

Een functie kan meerdere parameters hebben of helemaal niks.

```javascript
const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));
// → 1024
```
### Bindings en scopes
Lexical scope = var
Block scope =let, const
  - {}
  
 ```javascript
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40
```
**Recursion is wanneer een functie zichzelf aanroept.**
**Als functies gereturned worden, dan verwijderen ze zich van de c(all) stack**

### Functions as values
**const kan niet vervangen worden door een nieuwe value**
```javascript
let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}
```

### Declaration Notation

Function declaraties kunnen overal worden neergezet in de scope en horen niet bij top to bottom flow control.


### Arrow functions
Er is een derde notatie voor functies, die ziet er heel anders uit dan de anderen. In plaats van het gereserveerde woord function, maakt het gebruik van een pijl (= >).
```javascript
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
```
Wanneer er één parameter is, kan je de haakjes weg laten. 

Deze 2 variabelen doen hetzelfde:
```javascript
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
```

### The call stack
call stack = de plek waar de context wordt gezet.

```javascript
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
```

A run through this program goes roughly like this: the call to greet causes control to jump to the start of that function 
(line 2). The function calls console.log, which takes control, does its job, and then returns control to line 2. There it 
reaches the end of the greet function, so it returns to the place that called it, which is line 4. The line after that calls 
console.log again. After that returns, the program reaches its end.

### Closure
A closure is the combination of a function and the lexical enviorment within which that function was declared.

### Recursion
Recursion = een functie die zichzelf aanroept

-implementations zijn 3x zo langzaam als loops.
- Sommige problemen zijn beter op te lossen met recursion.


For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.

Here is a recursive solution:
```javascript
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
```
### Functions and sidde effects

Functies die value's creeren zijn makkelijker te combineren op nieuwe manieren dan functies die side effects produceren.

return --> is geen side effect


## Chapter 4
.push method adds adds value to the and of the array

.pop method does the opposite, it removes the last value in the array

.delete operator deletes the property on it

.assign = geeft

The push method adds values to the end of an array, and the pop method does the opposite, removing the last value in the array and returning it.

```javascript
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]
```

### Mutabilty
Properties van een object kunnen niet worden aangepast, het enige wat wel kan is om de properties overteschrijven.

### Further Arraylog

Adding and removing elements the end of an array earlier --> shift & unshift

LastIndexOf = method to search from the end instead of the start

slice = another array method which takes start and end indices and returns an array that has only elements between them. *start index* is inclusive, and the *end index* is exlusive.

```javascript
console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
```
concat = a method which glues arrays together to create a new array


### Strings and properties

.trim = removes whitespace

.split = hiermee kan je een string splitten

.join = hiermee kan je de string weer aan elkar laten joinen

.repeat = string laten repeaten



```javascript
console.log("  okay \n ".trim());
// → okay
```

```javascript 
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping
```
```javascript
console.log("LA".repeat(3));
// → LALALA
```
## Chapter 5
Higher order functions that operate on other function

Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. Since we have already seen that functions are regular values, there is nothing particularly remarkable about the fact that such functions exist. The term comes from mathematics, where the distinction between functions and other values is taken more seriously.

Higher-order functions allow us to abstract over actions, not just values. They come in several forms. For example, we can have functions that create new functions.
```javascript
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
```
### Abstractions
Abstractions; hide details and give us the ability to talk about problems in a higher level

### Filtering arrays

To find the scripts in the data set that are still in use, the following function might be helpful. It filters out the elements in an array that don’t pass a test.
```javascript
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));
// → [{name: "Adlam", …}, …]
```

The function uses the argument named test, a function value, to fill a “gap” in the computation—the process of deciding which elements to collect.

Note how the filter function, rather than deleting elements from the existing array, builds up a new array with only the elements that pass the test. This function is pure. It does not modify the array it is given.

### Summarizing with reduce
reduce = takes element and combines it with the current value

```javascript
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10
```

### Strings & Character codes
charCodeArt = een methode die een stuk van de code geeft, niet de volledige character
codePointMethod = gives a full unicode character

### Summary
Being able to pass function values to other functions is a deeply useful aspect of JavaScript. It allows us to write functions 
that model computations with “gaps” in them. The code that calls these functions can fill in the gaps by providing function 
values.

Arrays provide a number of useful higher-order methods. You can use forEach to loop over the elements in an array. The filter 
method returns a new array containing only the elements that pass the predicate function. Transforming an array by putting 
each element through a function is done with map. You can use reduce to combine all the elements in an array into a single 
value. The some method tests whether any element matches a given predicate function. And findIndex finds the position of the 
first element that matches a predicate.

## Chapter 6

## Chapter 8
process of finding mistakes/bugs in programs = debugging

"use strict": kan je gebruiken boven aan je script of functie. Dan wordt je javascript strenger met controleren van je code. *Het helpt je zoeken naar de oorzaak van een probleem*

Exception handling = stoppen waar je mee bezig bent en "spring" naar de plek waar het probleem opgelost kan worden.

throw keyword is used to raise an exception
## Chapter 9

## Chapter 10

## Chapter 11
