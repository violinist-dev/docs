---
title: "allow-list"
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


An array of packages to explicitly allow when updating packages with violinist. Defaults to nothing, which means all available updates will be attempted.

## Explanation

Some projects only want to allow updates to specific projects. This can be because you use other tools or processes to update the rest of your dependencies, or maybe you are using bundled updates for some of your projects. If this is the case, you probably want to use the option allow list.

If you want to add a project to the allow list, you can add some extra information into your composer.json.

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
