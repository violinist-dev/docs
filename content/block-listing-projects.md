---
title: "blocklist"
date: 2018-03-25T10:50:02+02:00
anchor: "blocklisting-projects"
weight:
---

## Configuration

__name__: blocklist
__type__: array
__default__: []

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "blocklist": []
    }
  }
}
{{< /highlight >}}


An array of packages to always ignore while running updates with Violinist. Defaults to nothing.

## Explanation

Some times a version of your package comes out that will never be compatible with your codebase. Some times this means you have to do some refactoring, but you only have time to do so some time in the future. Some times this makes you annoyed that Violinist is continiously trying to update that package, even if you know it will fail. This could be an example of when you want to add a project to the block list.

If you want to add a project to the block list, you can add some extra information into your composer.json.

## Example

Say you wanted to add the project `vendor/package` to the block list. And say your composer.json looks something like this:

{{< highlight JSON >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "^1.4.0"
  }
}
{{< /highlight >}}


To make Violinist stop trying to update `vendor/package` you simply add the following to your composer.json:


{{< highlight JSON "hl_lines=7-13" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "^1.4.0"
  },
  "extra": {
    "violinist": {
      "blocklist": [
        "vendor/package"
      ]
    }
  }
}
{{< /highlight >}}


## Example with wildcards

You can also use wildcards in your block list. Examples could be `vendor/*` or `vendor/prefix_*`.


{{< highlight JSON "hl_lines=7-14" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "^1.4.0"
  },
  "extra": {
    "violinist": {
      "blocklist": [
        "vendor/*",
        "vendor/prefix_*"
      ]
    }
  }
}
{{< /highlight >}}
