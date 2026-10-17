export type Environment = 'production' | 'staging' | 'development';

export type ServiceStatus = 'healthy' | 'degraded' | 'deploying' | 'stopped';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'frontend' | 'api' | 'worker' | 'database' | 'cache' | 'storage' | 'external';
  environment: Environment;
  status: ServiceStatus;
  version: string;
  replicas: number;
  cpu: string;
  memory: string;
  latency: string;
  endpoint: string;
  dependencies: string[];
  uptime: string;
  port?: number;
}

export interface DeploymentItem {
  id: string;
  serviceName: string;
  environment: Environment;
  commitId: string;
  commitMsg: string;
  author: string;
  status: 'successful' | 'in_progress' | 'failed' | 'rolled_back';
  timestamp: string;
  duration: string;
  branch: string;
  logs: string[];
}

export interface TopologyNode {
  id: string;
  label: string;
  category: string;
  x: number;
  y: number;
  status: ServiceStatus;
  metrics: {
    cpu: string;
    memory: string;
    latency: string;
    rps: string;
  };
  details: string;
  connections: string[];
}

export interface LogEntry {
  id: string;
  timestamp: string;
  severity: 'INFO' | 'WARN' | 'ERROR';
  service: string;
  message: string;
  traceId?: string;
  host?: string;
}

export interface CostCategory {
  category: string;
  amount: number;
  percentage: number;
  trend: string;
  description: string;
  color: string;
}

export interface AlertItem {
  id: string;
  severity: 'critical' | 'warning' | 'info';
  service: string;
  title: string;
  timestamp: string;
  acknowledged: boolean;
}

export interface ToastNotification {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'warning' | 'blue';
}

export interface DatabaseResource {
  id: string;
  name: string;
  engine: 'PostgreSQL' | 'MySQL' | 'Redis';
  version: string;
  environment: Environment;
  status: 'Healthy' | 'Degraded';
  storageUsed: string;
  storageTotal: string;
  connectionsActive: number;
  connectionsMax: number;
  lastBackup: string;
  iops: string;
}

export interface StorageResource {
  id: string;
  name: string;
  type: 'Object Storage (S3 API)' | 'Persistent Volume Block';
  environment: Environment;
  capacityUsed: string;
  capacityTotal: string;
  objectsCount: string;
  region: string;
  lastActivity: string;
}
