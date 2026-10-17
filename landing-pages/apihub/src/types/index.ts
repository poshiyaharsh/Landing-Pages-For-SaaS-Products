export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type EndpointCategory = 
  | 'Auth & Identity'
  | 'Payments & Invoicing'
  | 'Customer & Users'
  | 'Event Webhooks'
  | 'AI Inference';

export interface ParameterDef {
  name: string;
  type: string;
  in: 'path' | 'query' | 'header';
  required: boolean;
  description: string;
}

export interface ApiEndpoint {
  id: string;
  name: string;
  method: HttpMethod;
  path: string;
  category: EndpointCategory;
  version: string;
  description: string;
  summary: string;
  defaultHeaders: Record<string, string>;
  sampleQuery?: Record<string, string>;
  sampleBody?: string;
  schema: {
    parameters: ParameterDef[];
    requestBodySchema?: string;
    responseSchema: string;
  };
  mockResponse: {
    status: number;
    statusText: string;
    latency: number;
    size: string;
    headers: Record<string, string>;
    data: Record<string, any> | Array<any>;
  };
}

export interface ApiRequestHistoryItem {
  id: string;
  timestamp: string;
  method: HttpMethod;
  path: string;
  status: number;
  latency: number;
}
