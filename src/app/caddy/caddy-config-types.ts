export interface CaddyConfig {
  apps?: {
    http?: HttpApp;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export interface HttpApp {
  servers?: Record<string, CaddyServer>;
}

export interface CaddyServer {
  listen?: string[];
  routes?: CaddyRoute[];
  automatic_https?: {
    disable?: boolean;
  };
}

export interface CaddyRoute {
  match?: MatchCriteria[];
  handle?: Handler[];
  terminal?: boolean;
}

export interface MatchCriteria {
  host?: string[];
  path?: string[];
  method?: string[];
}

export interface Handler {
  handler: string;
  root?: string;
  routes?: CaddyRoute[];
  [key: string]: unknown;
}

export interface ServerInfo {
  name: string;
  listen: string[];
  folders: string[];
  hosts: string[];
}
