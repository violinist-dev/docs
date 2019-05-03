---
title: "blacklist"
date: 2018-03-25T10:50:02+02:00
anchor: "blacklisting-projects"
weight: 
---

## Configuration

__name__: blacklist
__type__: array
__default__: []

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "blacklist": []
    }
  }
}
{{< /highlight >}}


An array of packages to always ignore while running updates with Violinist. Defaults to nothing.

## Explanation

Some times a version of your package comes out that will never be compatible with your codebase. Some times this means you have to do some refactoring, but you only have time to do so some time in the future. Some times this makes you annoyed that Violinist is continiously trying to update that package, even if you know it will fail. This could be an example of when you want to blacklist a project.

If you want to blacklist a project, you can add some extra information into your composer.json.

## Example

Say you wanted to blacklist the project `vendor/package`. And say your composer.json looks something like this:

{{< highlight JSON >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "^1.4.0",
  }
}
{{< /highlight >}}


To make Violinist stop trying to update `vendor/package` you simply add the following to your composer.json:


{{< highlight JSON "hl_lines=7-13" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "^1.4.0",
  },
  "extra": {
    "violinist": {
      "blacklist": [
        "vendor/package"
      ]
    }
  }
}
{{< /highlight >}}


## Example with wildcards

You can also use wildcards in your blacklist. Examples could be `vendor/*` or `vendor/prefix_*`.


{{< highlight JSON "hl_lines=7-14" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "^1.4.0",
  },
  "extra": {
    "violinist": {
      "blacklist": [
        "vendor/*",
        "vendor/prefix_*"
      ]
    }
  }
}
{{< /highlight >}}