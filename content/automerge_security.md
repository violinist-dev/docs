---
title: "automerge_security"
date: 2018-03-25T10:50:02+02:00
anchor: "automerge_security"
weight:
---

## Configuration

__name__: automerge_security
__type__: int
__default__: 0

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "automerge_security": 0
    }
  }
}
{{< /highlight >}}

Indicate whether or not you want pull/merge requests created by violinist to have the automerge option enabled when the update is a security update.

> Note! This option currently does not work with Bitbucket.

> Note! This option only overrides the automerge option if the update is a security update. If `automerge_security` is set to `0`, but `automerge` is set to `1`, then automerge will be enabled.

## Explanation

If you want even less work with your (security) dependency updates, you might want violinist to also enable automerge on the pull/merge requests it opens, when the update is a security update. This way your dependencies will be truly automatically updated and merged once your tests pass!

## Example

If you want all security related pull/merge requests coming from violinist to have automerge enabled, and automatically get merged once your tests pass, you can specify that like this:

{{< highlight JSON "hl_lines=7-11" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "^1.4.0",
  },
  "extra": {
    "violinist": {
      "automerge_security": 1
    }
  }
}
{{< /highlight >}}
