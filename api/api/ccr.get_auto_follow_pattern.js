'use strict'

/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

function buildCcrGetAutoFollowPattern (opts) {
  // eslint-disable-next-line no-unused-vars
  const { makeRequest, ConfigurationError, result } = opts
  /**
   * Perform a [ccr.get_auto_follow_pattern](https://www.elastic.co/guide/en/elasticsearch/reference/current/ccr-get-auto-follow-pattern.html) request
   *
   * @param {string} name - The name of the auto follow pattern.
   */

  const acceptedQuerystring = [

  ]

  const snakeCase = {

  }

  return function ccrGetAutoFollowPattern (params, options, callback) {
    options = options || {}
    if (typeof options === 'function') {
      callback = options
      options = {}
    }
    if (typeof params === 'function' || params == null) {
      callback = params
      params = {}
      options = {}
    }
    // promises support
    if (callback == null) {
      return new Promise((resolve, reject) => {
        ccrGetAutoFollowPattern(params, options, (err, body) => {
          err ? reject(err) : resolve(body)
        })
      })
    }

    // validate headers object
    if (options.headers != null && typeof options.headers !== 'object') {
      return callback(
        new ConfigurationError(`Headers should be an object, instead got: ${typeof options.headers}`),
        result
      )
    }

    var warnings = null
    var { method, body, name } = params
    var querystring = semicopy(params, ['method', 'body', 'name'])

    if (method == null) {
      method = 'GET'
    }

    var ignore = options.ignore || null
    if (typeof ignore === 'number') {
      ignore = [ignore]
    }

    var path = ''

    if ((name) != null) {
      path = '/' + '_ccr' + '/' + 'auto_follow' + '/' + encodeURIComponent(name)
    } else {
      path = '/' + '_ccr' + '/' + 'auto_follow'
    }

    // build request object
    const request = {
      method,
      path,
      body: null,
      querystring
    }

    const requestOptions = {
      ignore,
      requestTimeout: options.requestTimeout || null,
      maxRetries: options.maxRetries || null,
      asStream: options.asStream || false,
      headers: options.headers || null,
      compression: options.compression || false,
      warnings
    }

    return makeRequest(request, requestOptions, callback)

    function semicopy (obj, exclude) {
      var target = {}
      var keys = Object.keys(obj)
      for (var i = 0, len = keys.length; i < len; i++) {
        var key = keys[i]
        if (exclude.indexOf(key) === -1) {
          target[snakeCase[key] || key] = obj[key]
          if (acceptedQuerystring.indexOf(snakeCase[key] || key) === -1) {
            warnings = warnings || []
            warnings.push('Client - Unknown parameter: "' + key + '", sending it as query parameter')
          }
        }
      }
      return target
    }
  }
}

module.exports = buildCcrGetAutoFollowPattern