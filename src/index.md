---
layout: index
title: Index
---

# Values

## Beginner Friendliness

You shouldn't have to learn another language just to understand powerful abstractions!
By enabling people to use a language that they already know, and is already in the
same ballpark in terms of values (emphasis on immutability, &c), we can teach and
learn faster.

As much as possible, keep things friendly and well explained.
Concrete examples are available via doctests.

## Consistency & Ethos

Elixir does a lot of things differently from certain other functional languages.
The idea of a data "subject" being piped though functions is conceptually different from
pure composition of functions that are later applied. `Witchcraft` honours the
Elixir/Elm/OCaml way, and operators point in the direction that data travels.

Some functions in the Elixir standard library have been expanded to work with more
types while keeping the basic idea the same. For example, `<>` has been expanded
to work on any [monoid](https://hexdocs.pm/witchcraft/Witchcraft.Monoid.html)
(such as integers, lists, bitstrings, and so on).

All operators have named equivalents, and auto-currying variants of higher order functions
are left at separate names so you can performance tune as needed (currying is helpful for
more abstract code). With a few exceptions (we're looking at you, `Applicative`),
pipe-ordering is maintained.

## Pragmatism

Convincing a company to use a language like [Haskell](https://www.haskell.org)
or [PureScript](http://www.purescript.org) can be challenging. Elixir is gaining
a huge amount of interest. Many people have been able to introduce these concepts
into companies using Scala, so we should be able to do the same here.

All functions are compatible with regular Elixir code, and no types are enforced aside
from what is used in protocol dispatch. Any struct can be made into a Witchcraft
class instance (given that it conforms to the properties).
