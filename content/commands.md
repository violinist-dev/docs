---
title: "Composer commands used"
is_intro: true
date: 2018-03-25T10:50:02+02:00
anchor: "commands"
weight:
---

## Looking for updates

To identify the updates that are available, violinist will run the following command:

{{< highlight bash >}}
composer outdated -D -m
{{< /highlight >}}

You can read more about this command [on the official composer website](https://getcomposer.org/doc/03-cli.md#outdated)

The two options mean as follows:

{{< highlight text >}}
--direct (-D): Restricts the list of packages to your direct dependencies.
--minor-only (-m): Only shows packages that have minor SemVer-compatible updates.
{{< /highlight >}}

There are still several ways this can be manipulated. See the config options for details.

## Updating packages

The default command for updating packages with violinist are the following:

{{< highlight bash >}}
composer update vendor/package --with-dependencies
{{< /highlight >}}

If you do not want violinist to update with dependencies, you can use the configuration option [update_with_dependencies](#update-with-deps) and set this to `0`.

If you want to update a package bundled with another package, you probably want to have a look at the option [bundled_packages](#bundled-packages).
