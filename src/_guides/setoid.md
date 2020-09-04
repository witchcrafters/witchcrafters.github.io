---
layout: page
title: "Setoid"
date: 2020-09-04 15:27:21 +0200
author: Brooklyn Zelenka
categories: example
---

A setoid is a type with an equivalence relation.
This is most useful when equivalence of some data is not the same as equality.
Since some types have differing concepts of equality, this allows overriding
the behaviour from `Kernel.==/2`. To get the Setoid `==` operator override,
simply `use Witchcraft.Setoid`.
## Type Class
An instance of `Witchcraft.Setoid` must define `Witchcraft.Setoid.equivalent?/2` 
Setoid [equivalent?/2]

Compare two setoids and determine if they are equivalent.
Aliased as `==`.
## Examples
```elixir
    iex> equivalent?(1, 2)
    false
    iex> import Kernel, except: [==: 2, !=: 2]
    ...> %{a: 1} == %{a: 1, b: 2}
    false
    equivalent?(%Maybe.Just{just: 42}, %Maybe.Nothing{})
    false
    ### Equivalence not equality
    baby_harry = %Wizard{name: "Harry Potter", age: 10}
    old_harry  = %Wizard{name: "Harry Potter", age: 17}
    def chosen_one?(some_wizard), do: equivalent?(baby_harry, some_wizard)
    chosen_one?(old_harry)
    true
```