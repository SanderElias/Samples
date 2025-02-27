import { JsonPipe } from '@angular/common';
import { Component, resource, signal } from '@angular/core';
import { debouncedComputed } from '@se-ng/signal-utils';

@Component({
  selector: 'se-signal-debounce',
  imports: [],
  template: `
    <h1>signal-debounce</h1>
    <p>This is a option to debounce a signal update.</p>
    <p>Counter: {{ counter() }}</p>
    <p>Debounced Counter: {{ debouncedCounter() }} {{ dSearch()}}</p>
    <input type="text" [value]="search()??''" (input)="search.set($any($event.target).value)" />
    @for (result of results.value(); track result.id) {
      <p><a target="_blank" [href]="result.html_url" >{{ result.name }} by {{result.owner.login}}</a></p>
    }
  `,
  styleUrl: './signal-debounce.component.css',
})
export class SignalDebounce {
  counter = signal(0); // signal signal we are going to use as a source.
  debouncedCounter = debouncedComputed(() => this.counter(), { delay: 2000 }); // signal that will be debounced.

  search = signal<string|undefined>(undefined);
  dSearch = debouncedComputed(() => this.search(), { delay: 1500 });

  results = resource({
    request: this.dSearch,
    loader: async ({request, abortSignal}) => {
      console.log('fetching', request);
      const response = await fetch(`https://api.github.com/search/repositories?q=${request}`, { signal: abortSignal });
      const json = await response.json() as GitResults;
      console.log('fetched', console.log(json));
      return json.items;
    }
  })

  constructor() {
    // simulate irregular updates
    const nextTime = () => Math.random() * 500 + 200;
    const update = () => {
      this.counter.set(this.counter() + 1);
      setTimeout(update, nextTime());
    };
    update();
  }
}

export interface GitResults {
  total_count:        number;
  incomplete_results: boolean;
  items:              Item[];
}

export interface Item {
  id:                          number;
  node_id:                     string;
  name:                        string;
  full_name:                   string;
  private:                     boolean;
  owner:                       Owner;
  html_url:                    string;
  description:                 null | string;
  fork:                        boolean;
  url:                         string;
  forks_url:                   string;
  keys_url:                    string;
  collaborators_url:           string;
  teams_url:                   string;
  hooks_url:                   string;
  issue_events_url:            string;
  events_url:                  string;
  assignees_url:               string;
  branches_url:                string;
  tags_url:                    string;
  blobs_url:                   string;
  git_tags_url:                string;
  git_refs_url:                string;
  trees_url:                   string;
  statuses_url:                string;
  languages_url:               string;
  stargazers_url:              string;
  contributors_url:            string;
  subscribers_url:             string;
  subscription_url:            string;
  commits_url:                 string;
  git_commits_url:             string;
  comments_url:                string;
  issue_comment_url:           string;
  contents_url:                string;
  compare_url:                 string;
  merges_url:                  string;
  archive_url:                 string;
  downloads_url:               string;
  issues_url:                  string;
  pulls_url:                   string;
  milestones_url:              string;
  notifications_url:           string;
  labels_url:                  string;
  releases_url:                string;
  deployments_url:             string;
  created_at:                  Date;
  updated_at:                  Date;
  pushed_at:                   Date;
  git_url:                     string;
  ssh_url:                     string;
  clone_url:                   string;
  svn_url:                     string;
  homepage:                    null | string;
  size:                        number;
  stargazers_count:            number;
  watchers_count:              number;
  language:                    null | string;
  has_issues:                  boolean;
  has_projects:                boolean;
  has_downloads:               boolean;
  has_wiki:                    boolean;
  has_pages:                   boolean;
  has_discussions:             boolean;
  forks_count:                 number;
  mirror_url:                  null;
  archived:                    boolean;
  disabled:                    boolean;
  open_issues_count:           number;
  license:                     License | null;
  allow_forking:               boolean;
  is_template:                 boolean;
  web_commit_signoff_required: boolean;
  topics:                      string[];
  visibility:                  Visibility;
  forks:                       number;
  open_issues:                 number;
  watchers:                    number;
  default_branch:              string;
  score:                       number;
}

export interface License {
  key:     string;
  name:    string;
  spdx_id: string;
  url:     null | string;
  node_id: string;
}

export interface Owner {
  login:               string;
  id:                  number;
  node_id:             string;
  avatar_url:          string;
  gravatar_id:         string;
  url:                 string;
  html_url:            string;
  followers_url:       string;
  following_url:       string;
  gists_url:           string;
  starred_url:         string;
  subscriptions_url:   string;
  organizations_url:   string;
  repos_url:           string;
  events_url:          string;
  received_events_url: string;
  type:                Type;
  user_view_type:      Visibility;
  site_admin:          boolean;
}

export enum Type {
  Organization = "Organization",
  User = "User",
}

export enum Visibility {
  Public = "public",
}
