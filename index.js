#!/usr/bin/env node
var os = require('os')
var ifaces = os.networkInterfaces()
var program = require('commander');

program.option('-d, --details', 'output extra network details')

program.parse(process.argv)

Object.keys(ifaces).forEach(function (ifname){
    var alias = 0 

    ifaces[ifname].forEach(function (iface){
        if ('IPv4' !== iface.family || iface.internal !== false) {
            // ignora endereços internos e endereços não IPv4
            return
        }

        if (alias >= 1) {
            console.log(ifname + ':' + alias, iface.address)
        } else {
            if (program.details) {
                iface.rangeIP = calcRangeIp(iface.address, iface.netmask)
                console.log(ifname + ":", iface)
            } else {
                console.log(ifname, calcRangeIp(iface.address, iface.netmask))
            }
        }
    })
})

function calcRangeIp(address, netmask) {
    let rangeIP = ''
    let addressArray = address.split('.')
    let netmaskArray = netmask.split('.')

    for (let i = 0; i < netmaskArray.length; i++) {
        if (255 == netmaskArray[i]) {
            rangeIP += addressArray[i]
        } else {
            rangeIP += '0/' + (256 - netmaskArray[i])
        }

        if (i < netmaskArray.length-1) [
            rangeIP += '.' 
        ]
    }

    return rangeIP
}