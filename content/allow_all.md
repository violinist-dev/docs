
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

This is probably most useful if you have not so many dependencies, or if you are replacing a manual workflow that involves running `composer update` on a regular basis. If you are using this option, only one pull request will be created by violinist, and it will contain the updates that would happen if you were running `composer update`. So this option updates all of your dependencies, all of the time.

> NB! This will not change any of your constraints. So strictly speaking, it will update all of your dependencies that has an update and where an update is allowed within the constraint.

## Example

Let's say your project looks like this:

{{< highlight JSON >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package1": "~1.0.0",
    "othervendor/otherpackage: "^2.0.7",
    // ...and a dozen more...
  }
}
{{< /highlight >}}

And then, maybe you don't want one pull request per dependency. You simply want to update everything from time to time. Like you would do `composer update`.

To change the behavior of violinist to only run `composer update` with no arguments, and in one single merge request, you can do this:

{{< highlight JSON "hl_lines=7-11" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "~1.0.0"
  },
  "extra": {
    "violinist": {
      "always_update_all": 1
    }
  }
}
{{< /highlight >}}

This means that this update strategy will create a pull request for you in all of these scenarios:

- If your project requires package `vendor/package1` and there is a new version of `vendor/package1`.
- If your project requires package `vendor/package1` which in turn requires `vendor/package2`, and there is no new version of `vendor/package1`, but there is a new version of `vendor/package2`.
- If your project requires package `vendor/package1` which in turn requires `vendor/package2` which in turn requires `vendor/package3`, and there are no new versions for `vendor/package1` or `vendor/package2`, but there is a new version of `vendor/package3`.

Either way, if there were packages updated, they will all be bundled in the same merge request, and not in separate merge requests per package.
