# Notes
# Sammenvatting Chapter 1

## Values, Types, and Operators 



## Values
Er zijn 2^64 bits combinaties.

Om te kunnen werken met zodanige hoeveelheden van bits zonder te verdwalen, moeten we ze scheiden in brokken die stukjes informatie vertegenwoordigen. In de omgeving van een JavaScript heten die stukjes waarden. Hoewel alle waarden zijn gemaakt van bits, spelen zij verschillende rollen. Elke waarde bestaat uit een type dat zijn rol bepaalt. Sommige waarden zijn getallen, sommige waarden zijn tekstitems, sommige waarden zijn functies, en zo verder.

## Numbers
> 2.998e8 = 2.998 × 108 = 299,800,000


> 2.998e8 That is 2.998 x 10^8 = 299,800,000.

## Arithmetic (rekenkundig)

Arithmetix is dus rekenkunde. Aritmetix operations zoals optellen en vermenigvuldigen nemen twee value aan en produceren een nieuwe nummer: 

> 100 + 4 * 11

De + en * symbool heten operators. de eerste staat voor optellen en de tweede staat voor vermenigvuldigen. Door een operator tussen twee values te stoppen, al het een nieuwe value produceren. eerst vermenigvuldigen en delen dan optellen en aftrekken. Wil je dit veranderen dan doe je dit zo:

>(100 + 4) * 11

Voor aftrekken is er een - operator en delen is het de / operator. Als laatst is er ook nog een arithmetic operator die je niet gelijk herkent. Dat is de % symbool, dit wordt ook wel de modulo genoemt. 

```javascript
> 314 % 100 = 14
> 144 % 12 = 0
```

## Special numbers

Er zijn drie speciale values in JavaScript die nummers voor moeten stellen, maar zich niet gedragen als normale nummers. 

De eerste twee zijn **Infinity** en **-Infinity**, deze stellen de positieve en negatieve infinities voor. Infinity - 1 is nog steeds infinity enz. Als infinity verkeerd gebruikt wordt, kan dit snel al leiden tot een NaN (Not a Number). 

## Strings

De volgende basic data is de *string*. Een string is eigenlijk dus een stukje tekst. Deze worden op de volgende manier geschreven:

```javascript
 'Hello World'
 "World Hello"
 `Horld Wello`
```

Bijna alles kan tussen deze quotes gestopt worden en JavaScript maakt hier dan een string value van. Wanneer een backslash (\) tussen de quoted text gezet wordt, krijft het dan een specifieke betekenis. Deze wordt de *escaping* genoemd. Een quote dat eindigt op een backslash betekent niet het einde van een string. 

```javascript
 "This is the first line\nAnd this is the second"
```

Wat er uiteindelijk uit zal komen:

```javascript
// This is the first line
// And this is the second
```

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

Wanneer je iets binnen een ${} schrijft, zal het uitgevoerd worden en geconvert worden tot een string:

```javascript
'half of 100 is ${100 / 2}'
//half of 100 is 50
```

## Unary operators ( unaire operatoren)

Niet alle operaters zijn symbolen. Sommige zijn geschreven in worden. Een voorbeeld is de *typeof* operator, die produceerd een string value die de type van die value geeft. 

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

A few ways to produce Boolean values:

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

De && operator representeerd *and*. Dit is een binaire operator, de resultaten zijn alleen waar als beide gegeven values ook kloppen.

```javascript
console.log(true && false);
// → false
console.log(true && true);
// → true
```
De || operator is een logische *or*. Deze operator geeft true, als een van de gegeven values true is.

```javascript
console.log(false || true);
// → true
console.log(false || false);
// → false
```

*Not* is geschreven als een exclamation mark (!). Dit is een unary operator dat de gegeven value omdraaid. !true produceerd false, en !false geeft true aan.

Wanneer je Boolean operators met elkaar mixt, is het niet altijd voor de hand liggend wanneer er parentheses nodig zijn.
|| > && ( >, ==) is de volgorde.

De laatste logical operator is een ternary operator die werkt met drie values. 

```javascript
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
```
Dit is een conditional operator. De value aan de linkerkant van de vraagteken, pakt welke van de twee values er uit zal komen. Wanneer het true is, zal het de midden value kiezen en wanneer het false is, zal het de rechter value kiezen.

## Empty values

Er zijn twee speciale values geschreven als **null** en **undefined**, deze worden gebruikt de wanneer er geen betkenis of ontbreking van een value is. Deze zijn opzichzelf al values, maar ze dragen zelf geen informatie. Dingen in JavaScript die geen meaning volle values hebben, geven undefined, omdat deze een value persee moeten hebben. Het verschil tussen indefined en null is per ongeluk gedaan tijden het designen van JavaScript, maar dit maakt voor het grootste gedeelte helemaal niet uit. 

## Automatic type conversion

JavaScript vergeeft je vaak voor dingen die je mischien verkeerd geschreven hebt, dit zie je dan in het volgende voorbeeld:

```javascript
console.log(8 * null);
// → 0
console.log("5" - 1);
// → 4
console.log("5" + 1);
// → 51
console.log("five" * 2);
// → NaN
console.log(false == 0);
// → true
```

Wanneer een operator "verkeerd" is gebruikt of de "verkeerde" value is gegeven, zal JavaScript deze alsnog uitvoeren in de regels die JavaScript heeft. Dit wordt *type coercion* genoemd. De *null* in de eerste expression veranderd in een 0, en de "5" in de tweede expression wordt een 5 (from string to number). In de derde expression, wordt er door de  + operator de 1 veranderd naar een "1" (from number to string).

Wanneer een value niet naar een nummer convert kan worden in een obvious way (such as "five" or undefined), krijg je een NaN value en deze blijft terug komen. Dus als je deze steeds voorbij ziet komen, heb je waarschijnlijk een fout gemaakt in je expressions.

Wanneer je == trype gebruikt, is de uitkomst vrij makkelijk te voorspellen: je zal dan true krijgen als beide values waar zijn, tenzij er een NaN is. Maar wanneer de types van erlkaar verschillen, doet JavaScript iets erg verwarrend. In de meeste gevallen probeeerd het de values naar andere type values te veranderen.

```javascript
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
```
Dit is handig om te zien of bepaalde value echte value heeft inplaats van een null of undefined. Maar soms kan het programma een beetje in de weg zitten door type conversion. Wanneer je type conversion wilt vermijden in dit geval, gebruik dan deze twee operators: === of !==. De eerste test of de value aan beide kanten *exact* hetzelfde is.

## Short cifuiting of logical operators

De logical operators && en || behandele values van verschillende types op verschillende manieren. Zij converteren de value op de linkerkant naar een Boolean type, zodat deze kan bepalen wat er gedaan moet worden. Afhankelijk van de operators en het resultaat van de conversion, zal het de originele linker value geven of de rechter value. 

De || operator zal altijd de linker value als true geven en de value aan de rechter kan false geven. 

```javascript
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
```

Bij het gebruiken van deze functionaliteit, is het een handige manier om terug te vallen op de default value. Als je een value hebt die misschien leeg is, kan je er een || operator achter zetten met een vervangende value. Als de eerste value naar false convert wordt, krijg je een de vervangende value. De regels voor het converten van strings en nummers naar een Boolean geeft altijd een value 0, Nan en een lege string ("") als false terwijl alle andere values tellen als true. Dus (0 || -1) wordt ("" || "!?") waar ("!?") uit komt. 

De && operator werkt bijna hetzelfde maar dan andersom. Wanneer de value aan de linkerkant dat false wordt, zal het ook die value terug geven en wanneer het andersom is geeft deze de rechter value.

Wanneer er (true || X) ter sprake is, zal het resultaat altijd true zijn, het maakt niet uit wat X dan in dit geval is, X zal nooit bekeken worden in dit geval. Dit zal ook gelden voor (false && X), dit is false, dus zal X negeren, dit heet *short-circuit evaluation*.

## Summary

We looked at four types of JavaScript values in this chapter: numbers, strings, Booleans, and undefined values.

Such values are created by typing in their name (true, null) or value (13, "abc"). You can combine and transform values with operators. We saw binary operators for arithmetic (+, -, *, /, and %), string concatenation (+), comparison (==, !=, ===, !==, <, >, <=, >=), and logic (&&, ||), as well as several unary operators (- to negate a number, ! to negate logically, and typeof to find a value’s type) and a ternary operator (?:) to pick one of two values based on a third value.


## Chapter 1

## Chapter 2

## Chapter 3

## Chapter 4

## Chapter 5

## Chapter 6

## Chapter 8

## Chapter 9

## Chapter 10

## Chapter 11
