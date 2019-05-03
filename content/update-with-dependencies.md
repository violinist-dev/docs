---
title: "update_with_dependencies"
date: 2018-03-25T10:50:02+02:00
anchor: "update-with-deps"
weight: 
---

## Configuration

__name__: update_with_dependencies
__type__: int
__default__: 1

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "update_with_dependencies": 1
    }
  }
}
{{< /highlight >}}

Indicate whether or not we update a package using the `--with-dependencies` flag for composer. Defaults to 1 (true).

## Explanation

When you update a package that also depend on other packages, which probably in turn are described as dependencies with semantic versioning, you might want to update to the newest version of the depended-upon packages as well, since these are compatible and will include bug fixes and improvements for you, in a compatible way. If you do not want this, then this configuration option is what you are after.

## Example

Say you depend on the project `vendor/package` in range `~1.0.0`. And say the latest version is 1.1.0. And say you `vendor/package` depends on `vendor2/package2` in the range `~2.0.0`. And say that in your last upgrade of `vendor/package` you got version `2.0.1` of the package `vendor2/package2`, and now the version `2.0.2` is available. By default, Violinist will then also upgrade package `vendor2/package2` for you. But maybe this is not what you want, since you in another part of your codebase actually rely on a bug that exists in version `2.0.1`. And say your composer.json looks something like this:

{{< highlight JSON >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "~1.0.0",
  }
}
{{< /highlight >}}


To make Violinist stop trying to update `vendor2/package2` when updating your direct dependency `vendor/package` (and similar for all other packages) you simply add the following to your composer.json:


{{< highlight JSON "hl_lines=7-11" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "^1.4.0",
  },
  "extra": {
    "violinist": {
      "update_with_dependencies": 0
    }
  }
}
{{< /highlight >}}
