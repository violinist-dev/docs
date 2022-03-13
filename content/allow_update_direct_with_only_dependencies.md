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

{{< highlight JSON "hl_lines=8" >}}
{
  "name": "company/project",
  "require": {
    "vendor/package": "~1.0.0",
  },
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

Say you are trying out violinist and are duty fully merging all updates that comes in for a couple of weeks. And one day you decide to run `composer update` manually. Surprisingly you find out that there are several updates applied. How can that be? You have been using violinist and have merged all available updates?

The reason is violinist only updates direct dependencies (unless you set [check_only_direct_dependencies](#check-only-direct) to 0). So if one of your dependencies is in it's final version, and no more versions will be released, that final version can still depend on packages that receive weekly updates. Some people would therefore prefer to run the command `composer update vendor/package --with-dependencies` even if `vendor/package` has no updates, but the transitive dependencies from that package has updates.

This is different than [check_only_direct_dependencies](#check-only-direct) set to 0, since `check_only_direct_dependencies` set to 0 would produce one merge request per direct or indirect dependency. While this option (`allow_update_direct_with_only_dependencies`) will only have merge requests for direct dependencies, some with actual updates to the direct dependency, and some only to one or more of the dependencies of a direct dependency.

If this sounds like the configuration you want, you would change your `composer.json` like so:

{{< highlight JSON "hl_lines=4-8" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "extra": {
    "violinist": {
      "allow_update_direct_with_only_dependencies": 1
    }
  }
}
{{< /highlight >}}
