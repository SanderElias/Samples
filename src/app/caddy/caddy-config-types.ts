/**
 * Types for the Caddy `/config` admin response (lightweight, permissive).
 * Based on the provided sample JSON for `/config/apps/http/servers`.
 */

export interface CaddyConfig {
  admin?: { listen?: string };
  apps?: {
    http?: {
      servers?: Record<string, CaddyServer>;
    };
  };
  tls?: any;
  [key: string]: any;
}

export interface CaddyServer {
  listen?: string[];
  routes?: CaddyRoute[];
  match?: MatchCondition[];
  terminal?: boolean;
  [key: string]: any;
}

export interface CaddyRoute {
  match?: MatchCondition[];
  handle?: Handler[];
  terminal?: boolean;
  group?: string;
  logger_name?: string;
  [key: string]: any;
}

export interface MatchCondition {
  host?: string[];
  path?: string[];
  path_regexp?: string[];
  method?: string[];
  header?: Record<string, string[]>;
  header_regexp?: Record<string, HeaderRegexp>;
  vars?: Record<string, string[]>;
  not?: MatchCondition[];
  remote_ip?: string[];
  [key: string]: any;
}

export interface HeaderRegexp {
  name?: string;
  pattern: string;
  [key: string]: any;
}

export type Handler = BaseHandler &
  (
    | SubrouteHandler
    | ReverseProxyHandler
    | HeadersHandler
    | StaticResponseHandler
    | FileServerHandler
    | VarsHandler
    | RewriteHandler
    | EncodeHandler
    | UnknownHandler
  );

export interface BaseHandler {
  handler: string;
  [key: string]: any;
}

export interface SubrouteHandler extends BaseHandler {
  handler: 'subroute';
  routes?: CaddyRoute[];
}

export interface ReverseProxyHandler extends BaseHandler {
  handler: 'reverse_proxy';
  upstreams?: { dial: string }[];
  headers?: any;
  rewrite?: any;
  transport?: any;
}

export interface HeadersHandler extends BaseHandler {
  handler: 'headers';
  response?: { set?: Record<string, string[]> };
  request?: { set?: Record<string, string[]> };
}

export interface StaticResponseHandler extends BaseHandler {
  handler: 'static_response' | 'static';
  body?: string;
  status_code?: number | string;
}

export interface FileServerHandler extends BaseHandler {
  handler: 'file_server';
  root?: string;
  hide?: string[];
}

export interface VarsHandler extends BaseHandler {
  handler: 'vars';
  root?: string;
}

export interface RewriteHandler extends BaseHandler {
  handler: 'rewrite';
  uri?: string;
  method?: string;
}

export interface EncodeHandler extends BaseHandler {
  handler: 'encode';
  encodings?: Record<string, any>;
}

export interface UnknownHandler extends BaseHandler {}

export interface HandleResponse {
  match?: MatchCondition;
  routes?: CaddyRoute[];
  [key: string]: any;
}
