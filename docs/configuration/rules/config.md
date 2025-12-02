---
title: "config"
---

## Configuration

<div className="config-wrapper"><div className="config">__name__: config</div>
<div className="config">__type__: object</div>
<div className="config">__required__: no</div></div>

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "rules": [
        {
          "name": "Symfony packages",
          "slug": "symfony-group",
          "matchRules": [
            {
              "type": "names",
              "values": ["symfony/*"]
            }
          ],
          // highlight-start
          "config": {
            "automerge": 1
          }
          // highlight-end
        }
      ]
    }
  }
}
```

An optional configuration object that overrides the base Violinist configuration for packages matching this rule.

## Explanation

The `config` property allows you to specify different configuration settings for different groups of packages. Any Violinist configuration option can be set here, and it will override the base configuration (or default values) for packages that match the rule.

This is particularly useful for:

- Automerging certain packages but not others
- Applying different labels or assignees to different package groups
- Setting different update strategies for different package types
- Directing updates to different branches based on package importance

## Available Configuration Options

Any configuration option that can be set at the root level can also be set in a rule's config. Some commonly used options include:

### Update Behavior
- `automerge` - Enable/disable automerge for matching packages
- `automerge_security` - Enable/disable automerge for security updates
- `automerge_method` - Set merge method (merge, rebase, squash)
- `automerge_method_security` - Set merge method for security updates
- `composer_outdated_flag` - Update level (major, minor, patch)
- `update_dev_dependencies` - Include/exclude dev dependencies
- `security_updates_only` - Only update security vulnerabilities

### Pull Request Settings
- `labels` - Array of labels to add to pull requests
- `labels_security` - Array of labels for security update pull requests
- `assignees` - Array of usernames to assign to pull requests
- `default_branch` - Target branch for pull requests
- `default_branch_security` - Target branch for security update pull requests
- `one_pull_request_per_package` - Create separate PRs per package

### Filtering
- `allow_list` - Explicitly allow specific packages
- `blocklist` - Block specific packages
- `check_only_direct_dependencies` - Only check direct dependencies

### Scheduling
- `timeframe_disallowed` - Time window to avoid creating updates
- `timezone` - Timezone for scheduling

### Other Options
- `branch_prefix` - Prefix for created branches
- `commit_message_convention` - Commit message format
- `bundled_packages` - Package bundling configuration

For a complete list of all configuration options, see the configuration documentation.

## Examples

### Example 1: Automerge with Labels

Automerge Symfony packages and add specific labels:

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "rules": [
        {
          "name": "Symfony packages",
          "matchRules": [
            {
              "type": "names",
              "values": ["symfony/*"]
            }
          ],
          // highlight-start
          "config": {
            "automerge": 1,
            "labels": ["symfony", "dependencies", "automerge"]
          }
          // highlight-end
        }
      ]
    }
  }
}
```

### Example 2: Different Branches for Different Packages

Send core package updates to a staging branch:

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "rules": [
        {
          "name": "Core Framework Packages",
          "matchRules": [
            {
              "type": "names",
              "values": ["laravel/framework", "symfony/symfony"]
            }
          ],
          // highlight-start
          "config": {
            "default_branch": "staging",
            "assignees": ["tech-lead"]
          }
          // highlight-end
        }
      ]
    }
  }
}
```

### Example 3: Patch-only Updates for Production

Only apply patch-level updates to Magento packages and automerge security fixes:

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "rules": [
        {
          "name": "Magento Core",
          "matchRules": [
            {
              "type": "names",
              "values": ["magento/*"]
            }
          ],
          // highlight-start
          "config": {
            "composer_outdated_flag": "patch",
            "automerge_security": 1,
            "labels": ["magento", "production"]
          }
          // highlight-end
        }
      ]
    }
  }
}
```

### Example 4: Dev Dependencies Handling

Automerge dev dependencies but not production ones:

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "automerge": 0,
      "rules": [
        {
          "name": "Testing and Development Tools",
          "matchRules": [
            {
              "type": "names",
              "values": [
                "phpunit/*",
                "phpstan/*",
                "laravel/telescope"
              ]
            }
          ],
          // highlight-start
          "config": {
            "automerge": 1,
            "labels": ["dev-dependencies"]
          }
          // highlight-end
        }
      ]
    }
  }
}
```

### Example 5: Security Updates to Separate Branch

Direct all security updates for critical packages to a security branch:

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "rules": [
        {
          "name": "Critical Security Packages",
          "matchRules": [
            {
              "type": "names",
              "values": [
                "guzzlehttp/*",
                "symfony/security-*",
                "firebase/*"
              ]
            }
          ],
          // highlight-start
          "config": {
            "default_branch_security": "security-patches",
            "automerge_security": 1,
            "labels_security": ["security", "high-priority"],
            "assignees": ["security-team"]
          }
          // highlight-end
        }
      ]
    }
  }
}
```

## Configuration Merging

When multiple rules match the same package, their configurations are merged. Later rules in the array will override settings from earlier rules if there are conflicts.

For example:

```json showLineNumbers
{
  "rules": [
    {
      "name": "All Laravel Packages",
      "matchRules": [{"type": "names", "values": ["laravel/*"]}],
      "config": {
        "labels": ["laravel"],
        "automerge": 0
      }
    },
    {
      "name": "Laravel Development Packages",
      "matchRules": [{"type": "names", "values": ["laravel/telescope", "laravel/horizon"]}],
      "config": {
        "labels": ["laravel-dev"],
        "automerge": 1
      }
    }
  ]
}
```

In this example, `laravel/telescope` will match both rules. The final configuration will be:
- `labels`: `["laravel-dev"]` (overridden by second rule)
- `automerge`: `1` (overridden by second rule)
