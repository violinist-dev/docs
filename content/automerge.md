
---
title: "automerge"
date: 2018-03-25T10:50:02+02:00
anchor: "automerge"
weight: 
---

## Configuration

__name__: automerge
__type__: int
__default__: 0

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "automerge": 0
    }
  }
}
{{< /highlight >}}

Indicate whether or not you want pull/merge requests created by violinist to have the automerge option enabled.

> Note! This option currently does not work with Bitbucket.

## Explanation

If you want even less work with your dependency updates, you might want violinist to also enable automerge on the pull/merge requests it opens. This way your dependencies will be truly automatically updated and merged once your tests pass!

## Example

If you want all pull/merge requests coming from violinist to have automerge enabled, and automatically get merged once your tests pass, you can specify that like this:

{{< highlight JSON "hl_lines=7-11" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "^1.4.0",
  },
  "extra": {
    "violinist": {
      "automerge": 1
    }
  }
}
{{< /highlight >}}
