const fs = require('fs')
const highland = require('highland')

highland(fs.createReadStream('customers.csv', 'utf8'))
  .split()
  .map(line => line.split(','))
  .map(parts => ({
    name: parts[0],
    number: parts[1]
  }))
  .filter(customer => customer.number > 2)
  .map(customer => customer.name)
  .each(x => console.log('each: ', x))
