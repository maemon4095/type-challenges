type Pop<T extends any[]> = T extends [...heads: infer R, any] ? R : []
