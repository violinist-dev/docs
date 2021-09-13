---
title: "commit_message_convention"
date: 2021-09-13T14:49:52Z
anchor: "commit_message_convention"
weight: 
---


## Configuration

__name__: commit_message_convention
__type__: string
__default__: "conventional"

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "commit_message_convention": "conventional"
    }
  }
}
{{< /highlight >}}

For Violinist to use a commit message convention or not.

## Explanation

By default, violinist will use the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/). If you don't want to have a formatted commit message, set it to `none`.

## Example

If you want that Violinist commit messages follow the Conventional Commit, keep the default or set the key to `conventional`.

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "commit_message_convention": "conventional"
    }
  }
}
{{< /highlight >}}

This configuration will allow Violinist to push commit messages like:

`build(dev): Update symfony/flex from v1.14.0 to v1.14.1`


If you don't want to have a formatted commit message, set it to `none`.

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "commit_message_convention": "none"
    }
  }
}
{{< /highlight >}}

Violinist will not format its commit message. It will be like:

`Update symfony/flex`
