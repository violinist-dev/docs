---
title: "check_only_direct_dependencies"
date: 2021-12-11T07:27:10+01:00
anchor: "check-only-direct"
weight:
---

## Configuration

__name__: check_only_direct_dependencies
__type__: int
__default__: 1

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "check_only_direct_dependencies": 1
    }
  }
}
{{< /highlight >}}

Indicate whether you want violinist to check only direct dependencies, or all dependencies.

## Explanation

By default, violinist will only try to update packages you are directly dependent on. This means that if you are dependent on the package `asm89/stack-cors`, your project will be _indirectly_ dependent on for example `symfony/http-foundation`. What that also means though, is that by default only pull requests to update the package `asm89/stack-cors` will be created. For many projects, this is what is desired. However, the frequency of releases to these packages can vary a lot. For example, between 2 versions of `asm89/stack-cors` there could theoretically be 10 versions of `symfony/http-foundation`. Some then find it surprising that even if they are merging all of the pull requests from violinist, running `composer update` still updates some packages for them. This is the reason.

> Note! This option will update all dependencies in your lock file. This can potentially mean _A LOT_ of pull requests. Therefore this option is best combined with either a [block list](#blocklisting-projects) or an [allow list](#allow-list)

> Note! This option has no effect if you have set `always_update_all` to 1.

> Note! This option has no effect if you have set `allow_update_indirect_with_direct` to 1.

## Example

Maybe you have a project that depend on a "meta-package" for your company, that in turn will download all of the dependencies of your framework of choice. This can be very convenient for making sure projects are similar, company-wide. However, your meta-package might not get new updates very often, so the _indirect dependencies_ of your project (that is the dependencies of your "meta-package") might become out of date. Or even cause you to miss a security update. Then let's configure our project to get all updates for all dependencies.

{{< highlight JSON "hl_lines=9" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "company/package-with-symfony-dependencies-declared": "~1.0.0",
  },
  "extra": {
    "violinist": {
      "check_only_direct_dependencies": 0
    }
  }
}
{{< /highlight >}}

This way, there will be pull requests created for all of the packages, direct or indirect. And dependencies will therefore be kept up to date, regardless of the meta-package `company/package-with-symfony-dependencies-declared` getting a new version or not.

> Note! Again, this will potentially create _A LOT_ of pull requests. You probably want to combine this option with either a [block list](#blocklisting-projects) or an [allow list](#allow-list). Or maybe with [security_updates_only](#security-updates-only). Or maybe you might be looking for the option [allow_update_direct_with_only_dependencies](#allow_update_direct_with_only_dependencies)
