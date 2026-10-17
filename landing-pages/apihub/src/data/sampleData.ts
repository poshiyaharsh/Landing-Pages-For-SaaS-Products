import { ApiEndpoint } from '../types';

export const SAMPLE_ENDPOINTS: ApiEndpoint[] = [
  {
    id: 'ep-get-customers',
    name: 'List Customers',
    method: 'GET',
    path: '/v2/customers',
    category: 'Customer & Users',
    version: 'v2.4.0',
    summary: 'Retrieve paginated customer entities with associated active subscriptions.',
    description: 'Returns a list of customer profiles matching the filter parameters. Supports cursor-based pagination and expansion of nested billing profiles.',
    defaultHeaders: {
      'Authorization': 'Bearer test_key_99fa1408b0',
      'X-Apihub-Version': '2026-10-01',
      'Accept': 'application/json'
    },
    sampleQuery: {
      'limit': '10',
      'status': 'active',
      'expand': 'subscriptions'
    },
    sampleBody: '',
    schema: {
      parameters: [
        { name: 'limit', type: 'integer', in: 'query', required: false, description: 'Number of results to return (default 20, max 100).' },
        { name: 'starting_after', type: 'string', in: 'query', required: false, description: 'Cursor token for pagination.' },
        { name: 'status', type: 'string', in: 'query', required: false, description: 'Filter by lifecycle state (active, churned, trialing).' }
      ],
      responseSchema: '{\n  "object": "list",\n  "data": Array<Customer>,\n  "has_more": boolean,\n  "next_cursor": string\n}'
    },
    mockResponse: {
      status: 200,
      statusText: 'OK',
      latency: 38,
      size: '2.1 KB',
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'x-ratelimit-remaining': '4992',
        'x-request-id': 'req_98b10e3fa0',
        'cache-control': 'private, no-cache'
      },
      data: {
        object: 'list',
        count: 2,
        has_more: false,
        data: [
          {
            id: 'cus_8941031aa',
            name: 'Sarah Chen',
            email: 'sarah.chen@linear-scale.io',
            company: 'Linear Scale Ltd',
            plan: 'enterprise_tier',
            monthly_mrr_cents: 149000,
            status: 'active',
            created_at: '2026-03-12T09:41:00Z',
            active_subscriptions: [
              { id: 'sub_99120', seats: 45, renewal: '2027-03-12' }
            ]
          },
          {
            id: 'cus_7720912bc',
            name: 'Marcus Vance',
            email: 'm.vance@vance-robotics.org',
            company: 'Vance Autonomous',
            plan: 'growth_tier',
            monthly_mrr_cents: 49000,
            status: 'active',
            created_at: '2026-06-18T14:22:10Z',
            active_subscriptions: [
              { id: 'sub_41029', seats: 12, renewal: '2027-06-18' }
            ]
          }
        ]
      }
    }
  },
  {
    id: 'ep-post-charge',
    name: 'Create Payment Intent',
    method: 'POST',
    path: '/v2/payments/charge',
    category: 'Payments & Invoicing',
    version: 'v2.4.0',
    summary: 'Process an authorized payment transaction with cryptographic idempotency keys.',
    description: 'Creates a charge against an authenticated payment source. Safe for network retries using the Idempotency-Key header.',
    defaultHeaders: {
      'Authorization': 'Bearer test_key_99fa1408b0',
      'Idempotency-Key': 'idemp_340810-tx-019',
      'Content-Type': 'application/json'
    },
    sampleBody: JSON.stringify({
      amount_cents: 12500,
      currency: "usd",
      customer_id: "cus_8941031aa",
      payment_method: "pm_card_visa_4242",
      description: "APIHub Platform Subscription Q4",
      metadata: {
        order_number: "ORD-99812",
        environment: "production"
      }
    }, null, 2),
    schema: {
      parameters: [
        { name: 'Idempotency-Key', type: 'string', in: 'header', required: true, description: 'Unique UUID to prevent duplicate billing.' },
        { name: 'Content-Type', type: 'string', in: 'header', required: true, description: 'Must be application/json.' }
      ],
      requestBodySchema: '{\n  "amount_cents": number,\n  "currency": "usd" | "eur" | "gbp",\n  "customer_id": string,\n  "payment_method": string\n}',
      responseSchema: '{\n  "id": string,\n  "status": "succeeded" | "pending" | "failed",\n  "amount": number,\n  "captured": boolean\n}'
    },
    mockResponse: {
      status: 201,
      statusText: 'Created',
      latency: 52,
      size: '1.4 KB',
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'idempotency-replayed': 'false',
        'x-charge-id': 'chg_991802bb0',
        'x-ratelimit-remaining': '4989'
      },
      data: {
        id: 'chg_991802bb0',
        object: 'charge',
        amount_cents: 12500,
        currency: 'usd',
        status: 'succeeded',
        captured: true,
        payment_method_details: {
          brand: 'visa',
          last4: '4242',
          funding: 'credit',
          exp_month: 12,
          exp_year: 2028
        },
        risk_evaluation: {
          score: 3,
          level: 'normal_low_risk'
        },
        receipt_url: 'https://pay.apihub.dev/rcpt/991802bb0'
      }
    }
  },
  {
    id: 'ep-post-ai-infer',
    name: 'Streaming Inference',
    method: 'POST',
    path: '/v2/ai/completions',
    category: 'AI Inference',
    version: 'v2.4.0',
    summary: 'High-throughput LLM token generation with deterministic JSON schema enforcement.',
    description: 'Dispatch high-concurrency prompt completions. Supports streaming SSE or synchronous response with token usage profiling.',
    defaultHeaders: {
      'Authorization': 'Bearer test_key_99fa1408b0',
      'Content-Type': 'application/json'
    },
    sampleBody: JSON.stringify({
      model: "mistral-large-instruct-2407",
      messages: [
        {
          role: "system",
          content: "You are an API gateway assistant. Format responses strictly as JSON."
        },
        {
          role: "user",
          content: "Generate schema routing rules for tenant 8812."
        }
      ],
      temperature: 0.2,
      max_tokens: 256,
      stream: false
    }, null, 2),
    schema: {
      parameters: [
        { name: 'model', type: 'string', in: 'query', required: true, description: 'Model identifier (e.g. mistral-large, claude-3-5, llama-3).' },
        { name: 'temperature', type: 'float', in: 'query', required: false, description: 'Sampling temperature between 0.0 and 1.0.' }
      ],
      requestBodySchema: '{\n  "model": string,\n  "messages": Array<{ role: string, content: string }>,\n  "temperature": number\n}',
      responseSchema: '{\n  "id": string,\n  "choices": Array<{ message: { content: string } }>,\n  "usage": { prompt_tokens: number, completion_tokens: number }\n}'
    },
    mockResponse: {
      status: 200,
      statusText: 'OK',
      latency: 68,
      size: '1.8 KB',
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'x-model-accelerator': 'nvidia-h100-tensor-core',
        'x-inference-ms': '44.2',
        'x-ratelimit-remaining': '4975'
      },
      data: {
        id: 'comp_771801af',
        object: 'chat.completion',
        created: 1730001820,
        model: 'mistral-large-instruct-2407',
        choices: [
          {
            index: 0,
            message: {
              role: 'assistant',
              content: '{"tenant_id":"8812","rate_limit_per_min":12000,"circuit_breaker":{"failure_threshold":0.05,"reset_timeout_seconds":30},"edge_regions":["iad1","sfo2","fra1"]}'
            },
            finish_reason: 'stop'
          }
        ],
        usage: {
          prompt_tokens: 38,
          completion_tokens: 49,
          total_tokens: 87
        }
      }
    }
  },
  {
    id: 'ep-get-webhooks',
    name: 'Inspect Webhooks',
    method: 'GET',
    path: '/v1/webhooks/deliveries',
    category: 'Event Webhooks',
    version: 'v1.8.0',
    summary: 'View real-time event dispatch history and SHA-256 HMAC signature verification logs.',
    description: 'Audit delivery attempts for outbound webhooks with HTTP response codes, latency timestamps, and automated retry backoffs.',
    defaultHeaders: {
      'Authorization': 'Bearer test_key_99fa1408b0',
      'Accept': 'application/json'
    },
    sampleQuery: {
      'event_type': 'charge.succeeded',
      'status': 'delivered'
    },
    schema: {
      parameters: [
        { name: 'event_type', type: 'string', in: 'query', required: false, description: 'Filter deliveries by event topic.' },
        { name: 'status', type: 'string', in: 'query', required: false, description: 'delivered, failed, pending_retry' }
      ],
      responseSchema: '{\n  "deliveries": Array<WebhookDelivery>,\n  "retry_queue_length": number\n}'
    },
    mockResponse: {
      status: 200,
      statusText: 'OK',
      latency: 24,
      size: '1.2 KB',
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'x-webhook-cluster': 'us-east-cluster-04',
        'x-ratelimit-remaining': '4998'
      },
      data: {
        total_deliveries: 1420,
        retry_queue_depth: 0,
        deliveries: [
          {
            delivery_id: 'dlv_00192a8b',
            event_type: 'charge.succeeded',
            target_endpoint: 'https://api.merchant.com/webhooks/apihub',
            http_status_code: 200,
            duration_ms: 82,
            signature_header: 't=1730001812,v1=9e88a0f912c98d',
            attempt_count: 1,
            dispatched_at: '2026-10-17T17:42:11Z'
          }
        ]
      }
    }
  },
  {
    id: 'ep-patch-org',
    name: 'Update Organization Quotas',
    method: 'PATCH',
    path: '/v2/organizations/org_99120',
    category: 'Auth & Identity',
    version: 'v2.4.0',
    summary: 'Modify organization tier, API rate limits, and token revocation settings.',
    description: 'Fine-tune organization limits and security parameters with instant global propagation across all edge gateways.',
    defaultHeaders: {
      'Authorization': 'Bearer test_key_99fa1408b0',
      'Content-Type': 'application/json'
    },
    sampleBody: JSON.stringify({
      rate_limit_per_minute: 15000,
      enforce_mfa: true,
      allowed_ip_cidrs: ["192.168.1.0/24", "10.0.0.0/16"],
      webhook_retry_policy: "exponential_backoff_max_72h"
    }, null, 2),
    schema: {
      parameters: [
        { name: 'org_id', type: 'string', in: 'path', required: true, description: 'Organization identifier.' }
      ],
      requestBodySchema: '{\n  "rate_limit_per_minute": number,\n  "enforce_mfa": boolean,\n  "allowed_ip_cidrs": string[]\n}',
      responseSchema: '{\n  "id": string,\n  "updated_at": string,\n  "active_policies": object\n}'
    },
    mockResponse: {
      status: 200,
      statusText: 'OK',
      latency: 45,
      size: '1.1 KB',
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'x-edge-propagation': 'synced_42_datacenters'
      },
      data: {
        organization_id: 'org_99120',
        name: 'Acme Systems Global',
        rate_limit_per_minute: 15000,
        enforce_mfa: true,
        allowed_ip_cidrs: ['192.168.1.0/24', '10.0.0.0/16'],
        propagation_status: 'active_globally',
        last_modified: '2026-10-17T18:02:14Z'
      }
    }
  }
];

export const INITIAL_REQUEST_HISTORY: import('../types').ApiRequestHistoryItem[] = [
  {
    id: 'req-01',
    timestamp: '17:44:02',
    method: 'GET',
    path: '/v2/customers?limit=10',
    status: 200,
    latency: 38
  },
  {
    id: 'req-02',
    timestamp: '17:43:18',
    method: 'POST',
    path: '/v2/payments/charge',
    status: 201,
    latency: 52
  },
  {
    id: 'req-03',
    timestamp: '17:41:50',
    method: 'POST',
    path: '/v2/ai/completions',
    status: 200,
    latency: 68
  }
];
