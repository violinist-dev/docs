---
title: "default_branch"
date: 2019-07-01T17:46:00+02:00
anchor: "default_branch"
weight: 
---

## Configuration

__name__: default_branch
__type__: string
__default__: ''

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "default_branch": ""
    }
  }
}
{{< /highlight >}}

Indicate what branch you want the Violinist pull requests created against.

## Explanation

Different projects uses different workflows for their branches. For example, your default branch in your VCS provider might be your production branch (for example `main`) while you want the pull requests to be created towards a development branch (for example `develop`). By default, Violinist will use the default branch for the repository to create the pull requests, but if you want the base branch to differ from this setting, you want to use the `default_branch` option.

## Example

If a project uses the `main` branch as the default branch, and you want the pull requests to be based on the branch `develop`, you might want to configure your project like so:

{{< highlight JSON "hl_lines=6" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "extra": {
    "violinist": {
      "default_branch": "develop"
    }
  }
}
{{< /highlight >}}

If you do not enter anything in this field, leaving the default value for it in there (`""` - an empty string) the project will use the settings from the project repository. In the example above that would mean the branch `main`.
