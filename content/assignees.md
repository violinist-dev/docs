---
title: "assignees"
date: 2019-04-04T20:22:04+02:00
anchor: "assignees"
weight: 
---

>This feature is only available on the agency and enterprise plans.

## Configuration

__name__: assignees
__type__: array
__default__: []

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "assignees": []
    }
  }
}
{{< /highlight >}}

An array of assignees that this project will use as the default assignee for new pull requests. 

>NB! The value of this option depends on your VCS provider. For github this will be an array of usernames. For gitlab the array should consist of user IDs. You can find your user id by visiting [https://gitlab.com/api/v4/users?username=YOUR_USERNAME](https://gitlab.com/api/v4/users?username=YOUR_USERNAME) where YOUR_USERNAME is your gitlab username. (reference: [https://forum.gitlab.com/t/where-is-my-user-id-in-gitlab-com/7912](https://forum.gitlab.com/t/where-is-my-user-id-in-gitlab-com/7912))
>
>If you are using self hosted gitlab, change the domain accordingly.
>
>Another difference is that gitlab only accepts one assignee per pull request. So while it should still be an array, if it contains more than one item, only the first user id will be assigned.

## Explanation

If you have a large team and want some people to get explicitly assigned (and probably by extension notified) per project, this is the setting to use. You can assign several users if you are using Github, but only one user if you are using Gitlab.

## Example

Say you wanted to assign the user `my-review-user` for all pull requests created on the project `company/project`. And say your composer.json looks something like this:

{{< highlight JSON >}}
{
  "name": "company/project",
  "description": "My awesome project"
}
{{< /highlight >}}


To make Violinist assign `my-review-user` to all of the pull requests created, simply add the following to your composer.json:


{{< highlight JSON "hl_lines=4-10" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "extra": {
    "violinist": {
      "assignees": [
        "my-review-user"
      ]
    }
  }
}
{{< /highlight >}}

>NB! The above example is for github. For gitlab you would use a user id (see above).
