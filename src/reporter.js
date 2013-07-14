function Reporter() {
  this._errors = []
}

Reporter.prototype.warn = function(rule, message, context, priority) {
  this._errors.push({
    rule: rule,
    message: message,
    context: context,
    priority: priority
  })
}

Reporter.prototype.getWarnings = function() {
  return this._errors
}