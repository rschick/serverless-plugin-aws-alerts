'use strict';

const _ = require('lodash');

const getNormalisedName = (name) => {
  return `${_.upperFirst(name.replace(/-/g, 'Dash').replace(/_/g, 'Underscore'))}`;
}

class Naming {

  getAlarmCloudFormationRef(alarmName, prefix) {
    const normalizePrefix = getNormalisedName(prefix);
    const normalizedName = getNormalisedName(alarmName);

    return `${normalizePrefix}${normalizedName}Alarm`;
  }

  getLogMetricCloudFormationRef(normalizedName, alarmName) {
    return `${normalizedName}${_.upperFirst(alarmName)}LogMetricFilter`;
  }

  getPatternMetricName(metricName, functionName) {
    return `${_.upperFirst(metricName)}${functionName}`;
  }

  getAlarmName(options) {
    const interpolatedTemplate = options.template
      .replace('$[stackName]', options.stackName)
      .replace('$[functionName]', options.functionName)
      .replace('$[functionId]', options.functionLogicalId)
      .replace('$[metricName]', options.metricName)
      .replace('$[metricId]', options.metricId);

    const prefix = (options.template.includes('$[stackName]') || options.stackNamePrefix === false) ? '' : `${options.stackName}-`;

    return `${prefix}${interpolatedTemplate}`;
  }
}

module.exports = Naming;
