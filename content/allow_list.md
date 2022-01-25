---
title: "allow_list"
alias: "allowlist"
date: 2018-03-25T10:50:02+02:00
anchor: "allow-list"
weight:
---

## Configuration

__name__: allow_list
__type__: array
__default__: []

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "allow_list": []
    }
  }
}
{{< /highlight >}}


An array of packages to explicitly allow when updating packages with violinist. Defaults to nothing, which means all available updates will be attempted. This means that putting one package on the allow list will block all other updates from being attempted, while having zero packages on the allow list will not filter any of the updates.

> NB! When using in combination with [blocklist](#blocklisting-projects), the updates will first be filtered through the allow list, and then it will apply block list rules. This means you can explicitly allow `symfony/*` while still adding `symfony/yaml` to the block list.

## Explanation

Some projects only want to allow updates to specific packages. This can be because you use other tools or processes to update the rest of your dependencies, or maybe you only care about updating one or some of the packages in your project.

If you want to add a project to the allow list, you can add some extra information into your composer.json.

## Example

Say you wanted violinist to only update `vendor/package1` in your project, even if you had a bunch of other dependencies. And say your composer.json looks something like this:

{{< highlight JSON >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package1": "^1.4.0",
    "vendor/package2": "^1.4.0",
    "vendor/package3": "^1.4.0",
    "vendor/package4": "^1.4.0",
    "vendor/package5": "^1.4.0",
    "vendor/package6": "^1.4.0",
    "vendor/package7": "^1.4.0"
  }
}
{{< /highlight >}}


To make sure violinist only even tries to update `vendor/package1` you simply add the following to your composer.json:

{{< highlight JSON "hl_lines=7-13" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "^1.4.0"
  },
  "extra": {
    "violinist": {
      "allow_list": [
        "vendor/package"
      ]
    }
  }
}
{{< /highlight >}}


This will make violinist only create pull/merge requests for `vendor/package1` even if there are ever so many updates to all of the other packages.

## Example with wildcards

You can also use wildcards in your allow list. Examples could be `vendor/*` or `vendor/prefix_*`.


{{< highlight JSON "hl_lines=7-14" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "^1.4.0"
  },
  "extra": {
    "violinist": {
      "allow_list": [
        "vendor/*",
        "vendor/prefix_*"
      ]
    }
  }
}
{{< /highlight >}}
