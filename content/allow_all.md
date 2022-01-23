
---
title: "always_update_all"
date: 2018-03-25T10:50:02+02:00
anchor: "updating-all"
weight: 
---

## Configuration

__name__: always_update_all
__type__: int
__default__: 0

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "always_update_all": 0
    }
  }
}
{{< /highlight >}}

Indicate if you always want violinist to update all packages (simply the command `composer update` with no arguments) every time it runs. 

## Explanation

This is probably most useful if you have not so many dependencies, or if you are replacing a manual workflow that involves this. If you are using this option, only one pull request will be created by violinist, and it will contain the updates that would happen if you were running `composer update`. So this option updates all of your dependencies, all of the time.

> NB! This will not change any of your constraints. So strictly speaking, it will update all of your dependencies that has an update and where an update is allowed within the constraint.

## Example

This means that this update strategy will create a pull request for you in all of these scenarios:

- If your project requires package `vendor/package1` and there is a new version of `vendor/package1`.

Say you depend on the project `vendor/package` in range `~1.0.0`. And say the latest version is 1.1.0. And say you actually do not want to receive this update via Violinist. And say your composer.json looks something like this:

{{< highlight JSON >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "~1.0.0",
  }
}
{{< /highlight >}}


To make Violinist stop trying to update `vendor/package` (and all other pages) beyond your specified version range you simply add the following to your composer.json:


{{< highlight JSON "hl_lines=7-11" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "~1.0.0",
  },
  "extra": {
    "violinist": {
      "allow_updates_beyond_constraint": 0
    }
  }
}
{{< /highlight >}}
