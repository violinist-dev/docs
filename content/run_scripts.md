---
title: "run_scripts"
date: 2018-03-25T10:50:02+02:00
anchor: "run-scripts"
weight:
---

## Configuration

__name__: run_scripts
__type__: int
__default__: 1

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "run_scripts": 1
    }
  }
}
{{< /highlight >}}

Indicate if you want to run scripts as part of your update commands. Or rather if you want to avoid running scripts.

This translates to using the `--no-scripts` option in composer.

## Explanation

Some times you have projects that do magic things as part of their installation or update commands. For example creating databases or clearing Redis cache. If your project already has this stablished, you might want to avoid using this in violinist, as this would crash the update, meaning you get no updates.

## Example

Say you wanted to disable running scripts on your project for violinist, since it keeps crashing. You would go ahead and edit your composer.json as follows:

{{< highlight JSON "hl_lines=9" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "~1.0.0",
  },
  "extra": {
    "violinist": {
      "run_scripts": 0
    }
  }
}
{{< /highlight >}}
