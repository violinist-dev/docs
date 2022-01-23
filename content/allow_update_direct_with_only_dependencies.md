---
title: "allow_update_direct_with_only_dependencies"
date: 2018-03-25T10:50:02+02:00
anchor: "allow_update_direct_with_only_dependencies"
weight:
---

## Configuration

__name__: allow_update_direct_with_only_dependencies
__type__: int
__default__: 0

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "allow_update_direct_with_only_dependencies": 0
    }
  }
}
{{< /highlight >}}

Indicates that you want violinist to update your dependencies, even if your direct dependency does not have a new version, but at least one package in the dependency tree descending from a direct dependency has an update available.

## Explanation

By default, violinist will only update your dependencies if one of your direct dependencies has an update available. However, if a transative dependency has an update, it will not be updated until the direct dependency that introduce this dependency has an update. This option changes that.

This way, `composer update vendor/package --with-dependencies` will run, regardless of the package having an update or not, and therefore also then update any (one or several) transative dependencies of `vendor/package`.

## Example

Say you wanted to have all merge requests to follow the following pattern (same example update as above): `violinist-prefix/psrlog100114`

> If you want to end your prefix with a special character. Say a slash (as above) or a dash. Please note that you have to specify the entire prefix string, including said last character.

Then you would add the following configuration (please note the last character is the slash in the prefix):

{{< highlight JSON "hl_lines=4-8" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "extra": {
    "violinist": {
      "branch_prefix": "violinist-prefix/"
    }
  }
}
{{< /highlight >}}
