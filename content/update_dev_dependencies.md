---
title: "update_dev_dependencies"
date: 2018-03-25T10:50:02+02:00
anchor: "update_dev_dependencies"
weight: 
---

## Configuration

__name__: update_dev_dependencies
__type__: int
__default__: 1

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "update_dev_dependencies": 1
    }
  }
}
{{< /highlight >}}

Indicate whether or not you want Violinist to also update your dev dependencies. The default behavior is to also update these.

## Explanation

If you have a project where you for some reason do not want to update your dev dependencies, you can use this option.

## Example

Say you wanted to avoid updating all of your dev dependencies. And say your composer.json looked something like this:

{{< highlight JSON >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "~1.0.0",
  },
  "require-dev": {
    "vendor/dev-package": "*",
    "vendor/dev-package2": "*",
    "vendor/dev-package3": "*"
  }
}
{{< /highlight >}}


To make Violinist  stop updating your dev dependencies, you simply add the following to your composer.json:


{{< highlight JSON "hl_lines=12-16" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "~1.0.0",
  },
  "require-dev": {
    "vendor/dev-package": "*",
    "vendor/dev-package2": "*",
    "vendor/dev-package3": "*"
  },
  "extra": {
    "violinist": {
      "update_dev_dependencies": 0
    }
  }
}
{{< /highlight >}}
