---
title: "commit_message_convention"
date: 2021-09-13T14:49:52Z
anchor: "commit_message_convention"
weight: 
---


## Configuration

__name__: commit_message_convention
__type__: string
__default__: ""

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "commit_message_convention": ""
    }
  }
}
{{< /highlight >}}

For Violinist to use a commit message convention or not.

## Explanation

Violinist has support for using the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) commit convention on its commit messages. To use this, set this option to the value `conventional`. By default it will use no convention, which is the same as settings this value to `none`.

## Example

If you want that Violinist commit messages follow the Conventional Commit, set the value to `conventional`.

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


If you don't want to have formatted commit messages, set it to `none` or leave it blank.

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

This will make Violinist not format its commit messages with any convention. An example message would be:

`Update symfony/flex`
