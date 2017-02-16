'use strict';

const lambdaNamespace = 'AWS/Lambda';

module.exports = {
	functionInvocations: {
		namespace: lambdaNamespace,
		metric: 'Invocations',
		threshold: 100,
		statistic: 'Sum',
		period: 60,
		evaluationPeriods: 1,
		comparisonOperator: 'GreaterThanThreshold',
	},
	functionErrors: {
		namespace: lambdaNamespace,
		metric: 'Errors',
		threshold: 10,
		statistic: 'Maximum',
		period: 60,
		evaluationPeriods: 1,
		comparisonOperator: 'GreaterThanThreshold',
	},
	functionDuration: {
		namespace: lambdaNamespace,
		metric: 'Duration',
		threshold: 500,
		statistic: 'Maximum',
		period: 60,
		evaluationPeriods: 1,
		comparisonOperator: 'GreaterThanThreshold',
	},
	functionThrottles: {
		namespace: lambdaNamespace,
		metric: 'Throttles',
		threshold: 50,
		statistic: 'Sum',
		period: 60,
		evaluationPeriods: 1,
		comparisonOperator: 'GreaterThanThreshold',
	},
	bunyanWarnings: {
		metric: 'BunyanWarnings',
		threshold: 0,
		statistic: 'Sum',
		period: 60,
		evaluationPeriods: 1,
		comparisonOperator: 'GreaterThanThreshold',
		pattern: '{$.level = 40}'
	},
	bunyanErrors: {
		metric: 'BunyanErrors',
		threshold: 0,
		statistic: 'Sum',
		period: 60,
		evaluationPeriods: 1,
		comparisonOperator: 'GreaterThanThreshold',
		pattern: '{$.level > 40}'
	},
	functionTimeouts: {
		metric: 'FunctionTimeouts',
		threshold: 0,
		statistic: 'Sum',
		period: 60,
		evaluationPeriods: 1,
		comparisonOperator: 'GreaterThanThreshold',
		pattern: 'Task timed out after'
	}
};
